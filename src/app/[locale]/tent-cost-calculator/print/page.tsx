import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { RATES_UPDATED, VAT_RATE } from '@/data/calculator/rates';
import { toEstimate } from '@/lib/calculator/engine';
import { formatDate, makeAed, numberFormat } from '@/lib/calculator/format';
import { QUOTE_REF } from '@/lib/calculator/lead';
import { decodeSetup, encodeSetup } from '@/lib/calculator/urlState';
import { assumptionsFor, durationText, lineLabel, sizeText, type Translate } from '@/components/calculator/labels';
import PrintButton from '@/components/calculator/PrintButton';

type Props = {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ c?: string; ref?: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: locale === 'ar' ? 'تقدير تكلفة الخيمة' : 'Tent Cost Estimate',
        robots: { index: false, follow: false },
    };
}

export default async function CalculatorPrintPage({ params, searchParams }: Props) {
    const { locale } = await params;
    const { c, ref } = await searchParams;
    setRequestLocale(locale);
    const t = (await getTranslations({ locale, namespace: 'calculator' })) as unknown as Translate;
    const isAr = locale === 'ar';
    const setup = decodeSetup(typeof c === 'string' ? c : null);

    if (!setup) {
        return (
            <main className="min-h-screen bg-[#101622] text-white pt-32 pb-24" dir={isAr ? 'rtl' : 'ltr'}>
                <div className="container-luxury max-w-2xl space-y-6">
                    <p className="text-lg text-[#9da6b9]">{t('print.invalid')}</p>
                    <Link href="/tent-cost-calculator" className="btn-gold">
                        {t('print.back')}
                    </Link>
                </div>
            </main>
        );
    }

    const e = toEstimate(setup);
    const aed = makeAed(locale);
    const nf = numberFormat(locale, 1);
    const quoteRef = typeof ref === 'string' && QUOTE_REF.test(ref) ? ref : null;
    // Date in UAE time (UTC+4), matching the quote reference.
    const today = new Date(Date.now() + 4 * 3600 * 1000).toISOString().slice(0, 10);

    const facts: [string, string][] = [
        [t('print.use'), t(`useCases.${setup.useCase}`)],
        [t('print.location'), t(`emirates.${setup.emirate}`)],
        [t('print.duration'), durationText(t, setup, locale)],
        [t('print.size'), `${sizeText(setup)} m · ${nf.format(e.sqm)} m²`],
        ...(setup.guests > 0 ? ([[t('print.guests'), nf.format(setup.guests)]] as [string, string][]) : []),
        [
            t(setup.mode === 'event' ? 'fields.package' : 'fields.tier'),
            setup.mode === 'event' ? t(`fields.${setup.package}`) : t(`fields.${setup.tier}`),
        ],
    ];

    return (
        <main className="min-h-screen bg-[#101622] pt-28 pb-16 print:p-0 print:bg-white" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="container-luxury max-w-3xl">
                <div className="mb-6 flex flex-wrap gap-3 print:hidden">
                    <PrintButton label={t('print.printButton')} />
                    <Link href={`/tent-cost-calculator?c=${encodeSetup(setup)}`} className="btn-outline normal-case tracking-normal">
                        {t('print.back')}
                    </Link>
                </div>

                <article className="bg-white text-[#101622] rounded-2xl p-8 sm:p-10 shadow-2xl print:shadow-none print:rounded-none print:p-0">
                    <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-[#D4AF37] pb-5">
                        <div>
                            <p className="font-display text-2xl font-bold tracking-wide">TENT NOW</p>
                            <p className="text-xs text-[#4b5563]">
                                tentnow.ae · <bdi>+971 50 182 6969</bdi>
                            </p>
                        </div>
                        <div className="text-end text-sm">
                            <h1 className="font-display text-xl">{t('print.title')}</h1>
                            {quoteRef && (
                                <p>
                                    {t('print.ref')}: <bdi className="font-semibold">{quoteRef}</bdi>
                                </p>
                            )}
                            <p>
                                {t('print.date')}: {formatDate(locale, today)}
                            </p>
                        </div>
                    </div>

                    <section className="mt-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#6b7280] mb-2">{t('print.setup')}</h2>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm">
                            {facts.map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 border-b border-[#e5e7eb] py-1">
                                    <dt className="text-[#6b7280]">{k}</dt>
                                    <dd className="font-medium text-end">
                                        <bdi>{v}</bdi>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </section>

                    <section className="mt-6">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#6b7280] mb-2">{t('results.breakdown')}</h2>
                        <table className="w-full text-sm">
                            <tbody>
                                {e.lines.map((l) => (
                                    <tr key={l.key} className="border-b border-[#e5e7eb] align-top">
                                        <td className="py-2 pe-3">
                                            {lineLabel(t, setup, l, locale)}
                                            {l.confidence === 'estimated' && (
                                                <span className="ms-2 text-[10px] font-semibold uppercase text-[#b45309]">({t('results.estimated')})</span>
                                            )}
                                        </td>
                                        <td className="py-2 text-end tabular-nums whitespace-nowrap">
                                            <bdi>{l.amount === null ? t('results.onRequest') : aed(Math.round(l.amount))}</bdi>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="pt-3 pe-3 font-semibold">{t('results.baseTotal')}</td>
                                    <td className="pt-3 text-end tabular-nums font-semibold whitespace-nowrap">
                                        <bdi>{aed(Math.round(e.subtotal))}</bdi>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pt-1 pe-3 text-[#6b7280]">{t('results.vat')}</td>
                                    <td className="pt-1 text-end tabular-nums text-[#6b7280] whitespace-nowrap">
                                        <bdi>{aed(Math.round(e.subtotal * VAT_RATE))}</bdi>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="mt-5 rounded-xl bg-[#fdf8e7] border border-[#D4AF37]/40 p-4">
                            <p className="text-xs uppercase tracking-wider text-[#6b7280]">{t('print.estimate')}</p>
                            <p className="font-display text-2xl tabular-nums">
                                <bdi>{aed(e.low)}</bdi> – <bdi>{aed(e.high)}</bdi>{' '}
                                <span className="text-sm text-[#4b5563]">{t('results.beforeVat')}</span>
                            </p>
                            <p className="text-xs text-[#4b5563] mt-1">{t('results.withVat', { low: aed(e.totalLow), high: aed(e.totalHigh) })}</p>
                            <p className="text-xs text-[#4b5563] mt-2">
                                {e.worstConfidence === 'estimated' ? t('results.estimateNote') : t('results.verifiedNote')}
                            </p>
                        </div>
                    </section>

                    <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                        <div>
                            <h2 className="font-bold mb-1.5">{t('results.included')}</h2>
                            <ul className="list-disc ps-5 space-y-0.5">
                                {e.included.map((k) => (
                                    <li key={k}>{t(`inclusions.${k}`)}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold mb-1.5">{t('results.notIncluded')}</h2>
                            <ul className="list-disc ps-5 space-y-0.5 text-[#4b5563]">
                                {e.excluded.map((k) => (
                                    <li key={k}>{t(`inclusions.${k}`)}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="mt-6 text-xs text-[#4b5563]">
                        <h2 className="font-bold text-[#101622] mb-1">{t('results.assumptions')}</h2>
                        <ul className="list-disc ps-5 space-y-0.5">
                            {assumptionsFor(t, setup, e, locale).map((a) => (
                                <li key={a}>{a}</li>
                            ))}
                        </ul>
                        <p className="mt-4">{t('print.validity')}</p>
                        <p className="mt-1">{t('results.updated', { date: formatDate(locale, RATES_UPDATED) })}</p>
                        <p className="mt-3 font-semibold text-[#101622]">{t('print.contact')}</p>
                    </section>
                </article>
            </div>
        </main>
    );
}
