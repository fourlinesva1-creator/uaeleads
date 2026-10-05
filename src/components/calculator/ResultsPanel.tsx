'use client';

import { forwardRef, type ReactNode } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Check, Info, X } from 'lucide-react';
import { RATES_UPDATED, VAT_RATE } from '@/data/calculator/rates';
import type { CalculatorSetup, Estimate } from '@/lib/calculator/engine';
import { formatDate, makeAed } from '@/lib/calculator/format';
import { assumptionsFor, lineLabel as labelFor, type Translate } from './labels';

interface Props {
    setup: CalculatorSetup;
    estimate: Estimate;
    /** Lead buttons (WhatsApp, quote form, callback, copy link). */
    actions: ReactNode;
}

const ResultsPanel = forwardRef<HTMLDivElement, Props>(function ResultsPanel({ setup: s, estimate: e, actions }, ref) {
    const t = useTranslations('calculator');
    const locale = useLocale();
    const aed = makeAed(locale);
    const aed2 = makeAed(locale, 2);
    const isEstimate = e.worstConfidence === 'estimated';

    const tt = t as unknown as Translate;
    const lineLabel = (l: Estimate['lines'][number]) => labelFor(tt, s, l, locale);
    const assumptions = assumptionsFor(tt, s, e, locale);

    return (
        <div ref={ref} id="calc-results" className="bg-[#1a212e] border border-[#282e39] rounded-[1.5rem] p-6 sm:p-8 space-y-6">
            <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#9da6b9]">{t('results.heading')}</h2>
                {e.low > 0 ? (
                    <>
                        <p className="mt-3 text-2xl sm:text-3xl font-display text-[#D4AF37] tabular-nums leading-snug" aria-live="polite" aria-atomic>
                            <span className="sr-only">{t('results.rangeLabel')}: </span>
                            <bdi className="whitespace-nowrap">{aed(e.low)}</bdi> – <bdi className="whitespace-nowrap">{aed(e.high)}</bdi>
                        </p>
                        <p className="mt-1 text-sm text-white">{t('results.beforeVat')}</p>
                        <p className="mt-1 text-xs text-[#9da6b9]">
                            {t('results.withVat', { low: aed(e.totalLow), high: aed(e.totalHigh) })}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[#e5e7eb]">
                            {e.perGuestLow !== null && <span>{t('results.perGuest', { amount: aed(e.perGuestLow) })}</span>}
                            {e.perDayLow !== null && s.days > 1 && <span>{t('results.perDay', { amount: aed(e.perDayLow) })}</span>}
                            {e.perSqmMonthLow !== null && (
                                <span>{t('results.perSqmMonth', { amount: aed2(e.perSqmMonthLow) })}</span>
                            )}
                        </div>
                        <p
                            className={`mt-4 flex gap-2 rounded-xl px-3 py-2.5 text-xs leading-relaxed ${
                                isEstimate ? 'bg-amber-500/10 text-amber-200' : 'bg-emerald-500/10 text-emerald-200'
                            }`}
                        >
                            <Info className="h-4 w-4 shrink-0" aria-hidden />
                            <span>
                                {isEstimate && <strong className="font-semibold">{t('results.estimateBadge')}. </strong>}
                                {isEstimate ? t('results.estimateNote') : t('results.verifiedNote')}
                            </span>
                        </p>
                    </>
                ) : (
                    <p className="mt-3 text-[#9da6b9]">{t('results.empty')}</p>
                )}
            </div>

            {actions}

            {e.lines.length > 0 && (
                <details className="group" open>
                    <summary className="cursor-pointer list-none text-sm font-semibold text-white flex items-center justify-between">
                        {t('results.breakdown')}
                        <span className="text-[#9da6b9] transition-transform group-open:rotate-180" aria-hidden>
                            ▾
                        </span>
                    </summary>
                    <table className="mt-3 w-full text-sm">
                        <tbody>
                            {e.lines.map((l) => (
                                <tr key={l.key} className="border-b border-[#282e39] align-top">
                                    <td className="py-2 pe-3 text-[#e5e7eb]">
                                        {lineLabel(l)}
                                        {l.confidence === 'estimated' && (
                                            <span className="ms-2 rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-amber-300">
                                                {t('results.estimated')}
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-2 text-end tabular-nums text-white whitespace-nowrap">
                                        <bdi>{l.amount === null ? t('results.onRequest') : aed(Math.round(l.amount))}</bdi>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="pt-3 pe-3 font-semibold text-white">{t('results.baseTotal')}</td>
                                <td className="pt-3 text-end tabular-nums font-semibold text-white whitespace-nowrap">
                                    <bdi>{aed(Math.round(e.subtotal))}</bdi>
                                </td>
                            </tr>
                            <tr>
                                <td className="pt-1 pe-3 text-[#9da6b9]">{t('results.vat')}</td>
                                <td className="pt-1 text-end tabular-nums text-[#9da6b9] whitespace-nowrap">
                                    <bdi>{aed(Math.round(e.subtotal * VAT_RATE))}</bdi>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </details>
            )}

            <div className="grid grid-cols-1 gap-5">
                <div>
                    <h3 className="text-sm font-semibold text-white mb-2">{t('results.included')}</h3>
                    <ul className="space-y-1.5">
                        {e.included.map((k) => (
                            <li key={k} className="flex gap-2 text-sm text-[#e5e7eb]">
                                <Check className="h-4 w-4 mt-0.5 shrink-0 text-emerald-400" aria-hidden />
                                {t(`inclusions.${k}`)}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-white mb-2">{t('results.notIncluded')}</h3>
                    <ul className="space-y-1.5">
                        {e.excluded.map((k) => (
                            <li key={k} className="flex gap-2 text-sm text-[#9da6b9]">
                                <X className="h-4 w-4 mt-0.5 shrink-0 text-[#6b7280]" aria-hidden />
                                {t(`inclusions.${k}`)}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="text-sm font-semibold text-white mb-2">{t('results.assumptions')}</h3>
                <ul className="list-disc ps-5 space-y-1 text-xs text-[#9da6b9]">
                    {assumptions.map((a) => (
                        <li key={a}>{a}</li>
                    ))}
                </ul>
                <p className="mt-3 text-xs text-[#6b7280]">{t('results.updated', { date: formatDate(locale, RATES_UPDATED) })}</p>
            </div>
        </div>
    );
});

export default ResultsPanel;
