'use client';

import { useCallback, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Check, Link2, MessageCircle, Phone, Send } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';
import { useModal } from '@/components/ui/ModalProvider';
import type { CalculatorSetup, Estimate } from '@/lib/calculator/engine';
import { encodeSetup } from '@/lib/calculator/urlState';
import { buildLeadPayload, makeQuoteRef, readAttribution, sendLead, whatsappUrl, type LeadChannel } from '@/lib/calculator/lead';
import { summaryText, whatsappLines, type Translate } from './labels';
import QuoteLeadForm, { type QuoteLeadValues } from './QuoteLeadForm';

interface Props {
    setup: CalculatorSetup;
    estimate: Estimate;
    onCopyLink: () => void;
    copied: boolean;
}

/** Shareable URL of the calculator with this setup (never the visitor's name or phone). */
export function shareUrlFor(setup: CalculatorSetup): string {
    const url = new URL(window.location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('c', encodeSetup(setup));
    return url.toString();
}

/** Printable quote page for this setup and reference. */
export function printUrlFor(setup: CalculatorSetup, ref: string, locale: string): string {
    const url = new URL(`/${locale}/tent-cost-calculator/print`, window.location.origin);
    url.searchParams.set('c', encodeSetup(setup));
    url.searchParams.set('ref', ref);
    return url.toString();
}

export default function LeadActions({ setup, estimate, onCopyLink, copied }: Props) {
    const t = useTranslations('calculator') as unknown as Translate;
    const tl = useTranslations('calculator.lead');
    const locale = useLocale();
    const router = useRouter();
    const { openCallback } = useModal();
    const [formOpen, setFormOpen] = useState(false);
    // One reference per visit, made on first use so the server HTML stays stable.
    const refRef = useRef<string | null>(null);
    const quoteRef = useCallback(() => (refRef.current ??= makeQuoteRef()), []);

    const payload = useCallback(
        (channel: LeadChannel, step: 'partial' | 'complete', contact?: QuoteLeadValues) =>
            buildLeadPayload({
                setup,
                estimate,
                channel,
                step,
                quoteRef: quoteRef(),
                locale,
                shareUrl: shareUrlFor(setup),
                contact,
                attribution: readAttribution(),
            }),
        [setup, estimate, locale, quoteRef],
    );

    // Capture first, then open WhatsApp (synchronously, so popup blockers allow it), then thank-you.
    const onWhatsApp = () => {
        sendLead(payload('whatsapp', 'complete'));
        window.open(whatsappUrl(whatsappLines(t, setup, estimate, locale, quoteRef(), shareUrlFor(setup))), '_blank', 'noopener');
        router.push('/thank-you');
    };

    const onCallback = () =>
        openCallback({
            payload: payload('callback', 'complete'),
            location: t(`emirates.${setup.emirate}`),
            purpose: t(`useCases.${setup.useCase}`),
            summary: summaryText(t, setup, estimate, locale),
        });

    const disabled = estimate.low <= 0;

    return (
        <div className="flex flex-col gap-2">
            <button type="button" onClick={onWhatsApp} disabled={disabled} className="btn-gold w-full disabled:opacity-50">
                <MessageCircle className="h-4 w-4" aria-hidden />
                {tl('whatsapp')}
            </button>
            <div className="grid grid-cols-2 gap-2">
                <button
                    type="button"
                    onClick={() => setFormOpen((o) => !o)}
                    aria-expanded={formOpen}
                    aria-controls="calc-quote-form"
                    disabled={disabled}
                    className="btn-outline normal-case tracking-normal py-3 px-3 text-sm disabled:opacity-50"
                >
                    <Send className="h-4 w-4" aria-hidden />
                    {tl('sendQuote')}
                </button>
                <button
                    type="button"
                    onClick={onCallback}
                    disabled={disabled}
                    className="btn-outline normal-case tracking-normal py-3 px-3 text-sm disabled:opacity-50"
                >
                    <Phone className="h-4 w-4" aria-hidden />
                    {tl('callback')}
                </button>
            </div>
            {formOpen && (
                <QuoteLeadForm
                    mode={setup.mode}
                    onPartial={(v) => sendLead(payload('quote', 'partial', v))}
                    onComplete={(v) => {
                        sendLead(payload('quote', 'complete', v));
                        return {
                            ref: quoteRef(),
                            printUrl: printUrlFor(setup, quoteRef(), locale),
                            whatsappUrl: whatsappUrl(
                                whatsappLines(t, setup, estimate, locale, quoteRef(), shareUrlFor(setup), v.name),
                            ),
                        };
                    }}
                    onCancel={() => setFormOpen(false)}
                />
            )}
            <button type="button" onClick={onCopyLink} className="btn-outline w-full normal-case tracking-normal py-3 text-sm">
                {copied ? <Check className="h-4 w-4" aria-hidden /> : <Link2 className="h-4 w-4" aria-hidden />}
                <span aria-live="polite">{copied ? t('results.copied') : t('results.copyLink')}</span>
            </button>
        </div>
    );
}
