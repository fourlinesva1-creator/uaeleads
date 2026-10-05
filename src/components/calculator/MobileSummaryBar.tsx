'use client';

import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Estimate } from '@/lib/calculator/engine';
import { makeAed } from '@/lib/calculator/format';

/** Fixed bar on small screens with the current range. Hidden while the results panel is on screen. */
export default function MobileSummaryBar({ estimate, hidden, onShow }: { estimate: Estimate; hidden: boolean; onShow: () => void }) {
    const t = useTranslations('calculator');
    const aed = makeAed(useLocale());

    const visible = !hidden && estimate.low > 0;

    // Lifts the floating WhatsApp button above the bar (see globals.css).
    useEffect(() => {
        document.body.classList.toggle('has-calc-bar', visible);
        return () => document.body.classList.remove('has-calc-bar');
    }, [visible]);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-[#282e39] bg-[#101622]/95 backdrop-blur px-4 py-3 transition-transform duration-300 lg:hidden ${
                visible ? 'translate-y-0' : 'translate-y-full'
            }`}
            aria-hidden={!visible}
        >
            <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-wider text-[#9da6b9]">
                        {t('summary.label')} <span className="normal-case tracking-normal">({t('results.beforeVat')})</span>
                    </p>
                    <p className="font-display text-base leading-tight text-[#D4AF37] tabular-nums">
                        <bdi className="whitespace-nowrap">{aed(estimate.low)}</bdi> –{' '}
                        <bdi className="whitespace-nowrap">{aed(estimate.high)}</bdi>
                    </p>
                </div>
                <button type="button" onClick={onShow} tabIndex={visible ? 0 : -1} className="btn-gold shrink-0 px-4 py-2.5 text-xs">
                    {t('results.seeBreakdown')}
                </button>
            </div>
        </div>
    );
}
