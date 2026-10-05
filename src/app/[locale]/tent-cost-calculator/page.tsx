import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ChevronRight, MessageCircle, Phone } from 'lucide-react';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import TentCalculator from '@/components/calculator/TentCalculator';
import PricingNote from '@/components/ui/PricingNote';
import JsonLd from '@/components/seo/JsonLd';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { RATES_UPDATED } from '@/data/calculator/rates';
import { acRows, calculatorContent, spaceRows, type Block, type CalculatorContent } from '@/data/calculator/content';
import { addOnRates, eventPriceTable, longTermPriceTable, workedExamples } from '@/lib/calculator/tables';
import { formatDate, makeAed, numberFormat } from '@/lib/calculator/format';

const BASE = 'https://www.tentnow.ae';
const PATH = '/tent-cost-calculator';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    const title = isAr
        ? 'حاسبة تكلفة تأجير الخيام في الإمارات 2026 — تقدير فوري | Tent Now'
        : 'Tent Rental Cost Calculator UAE 2026 — Instant Estimate | Tent Now';
    const description = isAr
        ? 'حاسبة مجانية لتكلفة تأجير الخيام في دبي وأبوظبي وكل الإمارات. اختر المقاس وعدد الضيوف والتكييف والإضافات لترى نطاق السعر وما هو مشمول، واحصل على السعر الدقيق عبر واتساب.'
        : "Free tent rental cost calculator for Dubai, Abu Dhabi & all UAE. Pick size, guests, AC and add-ons to see a price range, what's included, and get an exact quote on WhatsApp.";
    const url = `${BASE}/${locale}${PATH}`;

    return {
        title: { absolute: title },
        description,
        alternates: {
            canonical: url,
            languages: {
                en: `${BASE}/en${PATH}`,
                ar: `${BASE}/ar${PATH}`,
                'x-default': `${BASE}/en${PATH}`,
            },
        },
        openGraph: {
            title,
            description,
            url,
            siteName: 'Tent Now',
            locale: isAr ? 'ar_AE' : 'en_AE',
            type: 'website',
        },
        twitter: { card: 'summary_large_image', title, description },
    };
}

function Table({ caption, head, rows }: { caption: string; head: string[]; rows: (string | React.ReactNode)[][] }) {
    return (
        <div className="overflow-x-auto rounded-xl border border-[#282e39] my-6">
            <table className="w-full text-sm min-w-[32rem]">
                <caption className="sr-only">{caption}</caption>
                <thead className="bg-[#1a212e] text-[#9da6b9]">
                    <tr>
                        {head.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 text-start font-semibold">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-t border-[#282e39]">
                            {row.map((cell, j) => (
                                <td key={j} className={`px-4 py-3 ${j === 0 ? 'text-white' : 'text-[#e5e7eb] tabular-nums'}`}>
                                    {typeof cell === 'string' ? <bdi>{cell}</bdi> : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default async function TentCostCalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    const isAr = locale === 'ar';
    const tc = await getTranslations({ locale, namespace: 'calculator' });
    const content: CalculatorContent = calculatorContent(locale);
    const L = content.tableLabels;
    const aed = makeAed(locale);
    const aed2 = makeAed(locale, 2);
    const nf = numberFormat(locale, 1);
    const range = (r: { low: number; high: number }) => (
        <>
            <bdi>{aed(r.low)}</bdi> – <bdi>{aed(r.high)}</bdi>
        </>
    );
    const monthNames = tc.raw('months') as string[];
    const updated = formatDate(locale, RATES_UPDATED);
    const pageUrl = `${BASE}/${locale}${PATH}`;
    const pricingName = isAr ? 'الأسعار' : 'Pricing';
    const pageName = isAr ? 'حاسبة تكلفة الخيام' : 'Tent Cost Calculator';

    const renderBlock = (b: Block, key: number) => {
        if ('p' in b)
            return (
                <p key={key} className="text-[#c9ced8] leading-relaxed mb-4">
                    {b.p}
                </p>
            );
        if ('ul' in b)
            return (
                <ul key={key} className="list-disc ps-6 space-y-1 text-[#c9ced8] mb-4">
                    {b.ul.map((li) => (
                        <li key={li}>{li}</li>
                    ))}
                </ul>
            );
        if ('examples' in b)
            return (
                <div key={key} className="grid gap-4 sm:grid-cols-2 my-6">
                    {workedExamples().map((ex) => (
                        <div key={ex.key} className="rounded-xl border border-[#282e39] bg-[#1a212e]/60 p-5 flex flex-col">
                            <h3 className="font-display text-lg text-white">{content.exampleText[ex.key].title}</h3>
                            <p className="mt-1 text-sm text-[#9da6b9]">{content.exampleText[ex.key].detail}</p>
                            <p className="mt-3 text-xs uppercase tracking-wider text-[#9da6b9]">{L.estimate}</p>
                            <p className="font-display text-xl text-[#D4AF37] tabular-nums">{range(ex)}</p>
                            {/* Plain link: a full load so the calculator reads the new ?c= */}
                            <a href={`/${locale}${PATH}?c=${ex.code}#calculator`} className="mt-4 text-sm font-semibold text-[#D4AF37] hover:underline">
                                {L.loadSetup} {isAr ? '←' : '→'}
                            </a>
                        </div>
                    ))}
                </div>
            );
        if ('cta' in b) return null;
        switch (b.table) {
            case 'event':
                return (
                    <Table
                        key={key}
                        caption={L.caption.event}
                        head={[L.size, L.furnished, L.shade, L.withAc]}
                        rows={eventPriceTable().map((r) => [
                            `${r.width} × ${r.length} m (${nf.format(r.sqm)} m²)`,
                            range(r.furnished),
                            range(r.shade),
                            range(r.withAc),
                        ])}
                    />
                );
            case 'longterm':
                return (
                    <Table
                        key={key}
                        caption={L.caption.longterm}
                        head={[`${L.area} (${L.perSqmMonth})`, L.tentOnly, L.standard, L.full]}
                        rows={longTermPriceTable().map((r) => [
                            `${nf.format(r.sqm)} m²`,
                            <bdi key="a">{aed2(r.rates.tentOnly.rate)}</bdi>,
                            <bdi key="b">{aed2(r.rates.standard.rate)}</bdi>,
                            <bdi key="c">{aed2(r.rates.full.rate)}</bdi>,
                        ])}
                    />
                );
            case 'addons':
                return (
                    <Table
                        key={key}
                        caption={L.caption.addons}
                        head={[L.item, L.price]}
                        rows={addOnRates().map((a) => [
                            content.addOnLabels[a.key],
                            <span key="p">
                                <bdi>{aed2(a.rate)}</bdi> {a.unit === 'event' ? L.perEvent : a.unit === 'day' ? L.perDay : L.perMonth}
                            </span>,
                        ])}
                    />
                );
            case 'space':
                return (
                    <Table
                        key={key}
                        caption={L.caption.space}
                        head={[L.layout, L.sqmPerGuest, L.for100]}
                        rows={spaceRows().map((r) => [tc(`seating.${r.style}`), nf.format(r.sqm), `${nf.format(r.for100)} m²`])}
                    />
                );
            case 'ac':
                return (
                    <Table
                        key={key}
                        caption={L.caption.ac}
                        head={[L.month, L.sqmPerTon, L.tonsFor200]}
                        rows={acRows().map((r) => [monthNames[r.month - 1], nf.format(r.sqmPerTon), nf.format(r.tons)])}
                    />
                );
        }
    };

    const webApp = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: isAr ? 'حاسبة تكلفة تأجير الخيام' : 'Tent Rental Cost Calculator',
        url: pageUrl,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        inLanguage: isAr ? 'ar' : 'en',
        isAccessibleForFree: true,
        dateModified: RATES_UPDATED,
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'AED' },
        provider: { '@type': 'Organization', name: 'Tent Now', url: BASE },
    };

    return (
        <main className="min-h-screen bg-[#101622] text-white" dir={isAr ? 'rtl' : 'ltr'}>
            <JsonLd data={webApp} />
            <FAQSchema items={content.faq} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: pricingName, href: '/pricing' },
                    { name: pageName, href: PATH },
                ]}
            />

            <section className="pt-32 pb-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" />
                <div className="container-luxury relative z-10">
                    <nav aria-label={isAr ? 'مسار التنقل' : 'Breadcrumb'} className="mb-6 text-sm text-[#9da6b9]">
                        <ol className="flex flex-wrap items-center gap-1.5">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    {isAr ? 'الرئيسية' : 'Home'}
                                </Link>
                            </li>
                            <li aria-hidden>
                                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-white">
                                    {pricingName}
                                </Link>
                            </li>
                            <li aria-hidden>
                                <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                            </li>
                            <li aria-current="page" className="text-white">
                                {pageName}
                            </li>
                        </ol>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-display text-white mb-4 max-w-3xl leading-tight">
                        {isAr ? 'حاسبة تكلفة تأجير الخيام' : 'Tent Rental Cost Calculator'}
                    </h1>
                    <p className="text-lg text-[#9da6b9] max-w-2xl leading-relaxed">
                        {isAr
                            ? 'اختر الغرض وعدد الضيوف والمدة، واحصل فوراً على نطاق سعري مبني على مشاريعنا الأخيرة، مع تفصيل كل بند وما هو مشمول وغير مشمول.'
                            : 'Choose what the tent is for, how many guests and how long, and get an instant price range based on our recent jobs, with every line itemised and what is and is not included.'}
                    </p>
                    <p className="mt-4 text-sm text-[#D4AF37]">
                        {tc('results.updated', { date: updated })} · {isAr ? 'الأسعار قبل ضريبة القيمة المضافة 5%' : 'Prices exclude 5% VAT'}
                    </p>
                </div>
            </section>

            <section id="calculator" className="pb-12 scroll-mt-28">
                <div className="container-luxury">
                    <TentCalculator />
                    <PricingNote locale={locale} className="mt-8" />
                </div>
            </section>

            <div className="container-luxury pb-24">
                <div className="max-w-3xl">
                    {content.sections.map((s) => (
                        <section key={s.id} id={s.id} className="pt-12 scroll-mt-28">
                            <h2 className="text-2xl md:text-3xl font-display text-white mb-5">{s.h2}</h2>
                            {s.blocks.map(renderBlock)}
                        </section>
                    ))}

                    <section id="faq" className="pt-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-display text-white mb-5">{isAr ? 'الأسئلة الشائعة' : 'Frequently asked questions'}</h2>
                        <div className="space-y-3">
                            {content.faq.map((f) => (
                                <details key={f.q} className="group rounded-xl border border-[#282e39] bg-[#1a212e]/60 p-5">
                                    <summary className="cursor-pointer list-none font-semibold text-white flex justify-between gap-4">
                                        <h3>{f.q}</h3>
                                        <span className="text-[#D4AF37] transition-transform group-open:rotate-45" aria-hidden>
                                            +
                                        </span>
                                    </summary>
                                    <p className="mt-3 text-[#c9ced8] leading-relaxed">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="mt-16 rounded-[1.5rem] border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 sm:p-10">
                    <h2 className="text-2xl md:text-3xl font-display text-white mb-3">{content.finalCta.h2}</h2>
                    <p className="text-[#c9ced8] max-w-2xl mb-6">{content.finalCta.p}</p>
                    <div className="flex flex-wrap gap-3">
                        <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="btn-gold">
                            <MessageCircle className="h-4 w-4" aria-hidden />
                            WhatsApp
                        </a>
                        <Link href="/request-quote" className="btn-outline normal-case tracking-normal">
                            {content.finalCta.quote}
                        </Link>
                        <a href="tel:+971501826969" className="btn-outline normal-case tracking-normal">
                            <Phone className="h-4 w-4" aria-hidden />
                            {content.finalCta.call}
                        </a>
                    </div>
                </section>

                <nav className="mt-12" aria-labelledby="related-heading">
                    <h2 id="related-heading" className="text-lg font-display text-white mb-4">
                        {content.related.h2}
                    </h2>
                    <ul className="flex flex-wrap gap-3">
                        {content.related.links.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="inline-block rounded-full border border-[#282e39] px-4 py-2 text-sm text-[#c9ced8] hover:border-[#D4AF37] hover:text-white"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </main>
    );
}
