'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import type { UseCase } from '@/data/calculator/rates';
import {
    DEFAULT_SETUP,
    applyUseCase,
    furnitureForGuests,
    normalizeSetup,
    sqmFromGuests,
    suggestTentSize,
    toEstimate,
    type CalculatorSetup,
} from '@/lib/calculator/engine';
import { decodeSetup, encodeSetup } from '@/lib/calculator/urlState';
import SetupPanel from './SetupPanel';
import ResultsPanel from './ResultsPanel';
import MobileSummaryBar from './MobileSummaryBar';
import LeadActions from './LeadActions';

/** Fields that change how much floor space the guests need. */
const SIZING_KEYS: (keyof CalculatorSetup)[] = ['guests', 'seating', 'bars', 'buffets', 'stage'];

export default function TentCalculator() {
    const t = useTranslations('calculator');
    const [setup, setSetup] = useState<CalculatorSetup>(DEFAULT_SETUP);
    const [autoSize, setAutoSize] = useState(true);
    const [copied, setCopied] = useState(false);
    const [resultsInView, setResultsInView] = useState(false);
    const touched = useRef(false);
    const resultsRef = useRef<HTMLDivElement>(null);

    // Reopen a shared setup from ?c= (after mount, so the server HTML stays the default).
    useEffect(() => {
        const saved = decodeSetup(new URLSearchParams(window.location.search).get('c'));
        if (saved) {
            setSetup(saved);
            setAutoSize(false);
        }
    }, []);

    // Keep ?c= in step with the setup once the visitor has changed something.
    useEffect(() => {
        if (!touched.current) return;
        const id = window.setTimeout(() => {
            const url = new URL(window.location.href);
            url.searchParams.set('c', encodeSetup(setup));
            window.history.replaceState(window.history.state, '', url);
        }, 300);
        return () => window.clearTimeout(id);
    }, [setup]);

    useEffect(() => {
        const el = resultsRef.current;
        if (!el || typeof IntersectionObserver === 'undefined') return;
        const io = new IntersectionObserver(([entry]) => setResultsInView(entry.isIntersecting), { threshold: 0.1 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const needSqm = sqmFromGuests(setup.guests, setup.seating, setup);
    const suggestion = needSqm > 0 ? suggestTentSize(needSqm) : null;

    const update = useCallback(
        (patch: Partial<CalculatorSetup>) => {
            touched.current = true;
            setSetup((prev) => {
                let next = { ...prev, ...patch };
                const sizingChanged = SIZING_KEYS.some((k) => k in patch);
                if (sizingChanged && autoSize) {
                    const need = sqmFromGuests(next.guests, next.seating, next);
                    if (need > 0) {
                        const size = suggestTentSize(need);
                        next = { ...next, width: size.width, length: size.length, tents: 1 };
                    }
                }
                if ('guests' in patch || 'seating' in patch) next = { ...next, ...furnitureForGuests(next.guests, next.seating) };
                return next;
            });
            // Typing a size by hand switches the suggester off.
            if ('width' in patch || 'length' in patch || 'tents' in patch) setAutoSize(false);
        },
        [autoSize],
    );

    const onUseCase = useCallback((u: UseCase) => {
        touched.current = true;
        setAutoSize(true);
        setSetup((prev) => applyUseCase(prev, u));
    }, []);

    const onAutoSize = useCallback(
        (on: boolean) => {
            setAutoSize(on);
            if (on && suggestion) {
                touched.current = true;
                setSetup((prev) => ({ ...prev, width: suggestion.width, length: suggestion.length, tents: 1 }));
            }
        },
        [suggestion],
    );

    const onFillFurniture = useCallback(() => {
        touched.current = true;
        setSetup((prev) => ({ ...prev, ...furnitureForGuests(prev.guests, prev.seating) }));
    }, []);

    const onCopyLink = useCallback(async () => {
        const url = new URL(window.location.href);
        url.searchParams.set('c', encodeSetup(setup));
        try {
            await navigator.clipboard.writeText(url.toString());
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2500);
        } catch {
            window.prompt(t('results.copyLink'), url.toString());
        }
    }, [setup, t]);

    const normalized = useMemo(() => normalizeSetup(setup), [setup]);
    const estimate = useMemo(() => toEstimate(normalized), [normalized]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] gap-8 items-start" aria-label={t('label')}>
            <form
                className="bg-[#1a212e]/60 border border-[#282e39] rounded-[1.5rem] p-6 sm:p-8"
                onSubmit={(e) => e.preventDefault()}
                aria-label={t('label')}
            >
                <SetupPanel
                    setup={setup}
                    update={update}
                    onUseCase={onUseCase}
                    autoSize={autoSize}
                    onAutoSize={onAutoSize}
                    needSqm={needSqm}
                    suggestion={suggestion}
                    onFillFurniture={onFillFurniture}
                    acTons={estimate.acTons}
                />
            </form>
            <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:rounded-[1.5rem]">
                <ResultsPanel
                    ref={resultsRef}
                    setup={normalized}
                    estimate={estimate}
                    actions={<LeadActions setup={normalized} estimate={estimate} onCopyLink={onCopyLink} copied={copied} />}
                />
            </div>
            <MobileSummaryBar
                estimate={estimate}
                hidden={resultsInView}
                onShow={() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            />
        </div>
    );
}
