import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import {
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    AlertTriangle,
    Package,
    Warehouse,
    ShieldCheck,
    Droplets,
} from 'lucide-react';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { tarpaulinContent, tarpaulinSizes } from '@/data/tarpaulin-content';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';

    const title = isAr
        ? 'مشمع بولي إيثيلين PE200 — بيع وتوريد في الإمارات | Tent Now'
        : 'PE Tarpaulins UAE | Dutarp PE200 200gsm Supply & Sale | Tent Now';

    const description = isAr
        ? 'مشمع بولي إيثيلين مقوّى 200 جرام/م² (PE200) للبناء والصناعة واللوجستيات في الإمارات. 16 مقاساً قياسياً من 3.6×3.6م حتى 18×18م. متوفر أيضاً بشكل بكرات. تواصل للحصول على أسعار اليوم.'
        : 'Dutarp PE200 reinforced PE tarpaulins 200gsm — UV-stabilised, waterproof, fire resistant. 16 standard sizes from 3.6×3.6m to 18×18m. Roll supply available. UAE-wide delivery. Contact for current pricing.';

    return {
        title,
        description,
        keywords: isAr
            ? ['مشمع PE الإمارات', 'مشمع بولي إيثيلين 200 جرام', 'مشمع للبيع دبي', 'مشمع صناعي الإمارات', 'مشمع PE200 Dutarp', 'مشمع مقاوم للماء الإمارات', 'مشمع مقاس كبير', 'توريد مشمع الإمارات']
            : ['PE tarpaulin UAE', 'tarpaulin supplier UAE', 'buy tarpaulin Dubai', '200gsm tarpaulin UAE', 'PE200 tarpaulin Dutarp', 'waterproof tarpaulin UAE', 'construction tarpaulin UAE', 'industrial tarpaulin Abu Dhabi', 'tarpaulin roll UAE'],
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/tarpaulins`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/tarpaulins',
                'ar': 'https://www.tentnow.ae/ar/services/tarpaulins',
                'x-default': 'https://www.tentnow.ae/en/services/tarpaulins',
            },
        },
        openGraph: {
            title,
            description,
            type: 'website',
            locale: isAr ? 'ar_AE' : 'en_US',
            alternateLocale: isAr ? ['en_US'] : ['ar_AE'],
            images: [{ url: 'https://www.tentnow.ae/images/tarpaulins/tarpaulin-main.png', width: 1200, height: 630, alt: isAr ? 'مشمع بولي إيثيلين PE200 في الإمارات' : 'PE200 Tarpaulin UAE — Dutarp 200gsm' }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://www.tentnow.ae/images/tarpaulins/tarpaulin-main.png'],
        },
    };
}

const colorSwatches: Record<string, string> = {
    'Silver / Orange': 'linear-gradient(135deg, #C0C0C0 50%, #FF6B35 50%)',
    'Silver / Green': 'linear-gradient(135deg, #C0C0C0 50%, #4A7C59 50%)',
    'Blue / White': 'linear-gradient(135deg, #1E4D8C 50%, #F0F0F0 50%)',
    Camouflage: 'linear-gradient(135deg, #4B5320 33%, #6B7C3A 33% 66%, #3A4A1E 66%)',
    'فضي / برتقالي': 'linear-gradient(135deg, #C0C0C0 50%, #FF6B35 50%)',
    'فضي / أخضر': 'linear-gradient(135deg, #C0C0C0 50%, #4A7C59 50%)',
    'أزرق / أبيض': 'linear-gradient(135deg, #1E4D8C 50%, #F0F0F0 50%)',
    'مموّه': 'linear-gradient(135deg, #4B5320 33%, #6B7C3A 33% 66%, #3A4A1E 66%)',
};

const featureIcons = [Droplets, ShieldCheck, CheckCircle2, ShieldCheck, Package, Warehouse];

const relatedLinks = [
    { href: '/services/storage-tents', labelEn: 'Industrial Storage Tents', labelAr: 'خيام التخزين الصناعي' },
    { href: '/services/storage-tents/clear-span-tents', labelEn: 'Clear Span Tents', labelAr: 'خيام بدون أعمدة' },
    { href: '/services/storage-tents/warehouse-tents', labelEn: 'Warehouse Frame Tents', labelAr: 'خيام إطار المستودعات' },
    { href: '/services/storage-tents/industrial-tents', labelEn: 'Industrial Tents', labelAr: 'الخيام الصناعية' },
    { href: '/request-quote', labelEn: 'Request a Quote', labelAr: 'طلب عرض سعر' },
];

export default async function TarpaulinsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const c = tarpaulinContent[locale] ?? tarpaulinContent['en'];
    const isRtl = locale === 'ar';
    const pageUrl = `https://www.tentnow.ae/${locale}/services/tarpaulins`;

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="PE Tarpaulins UAE Supply — Dutarp PE200 200gsm"
                description="Reinforced 200gsm PE tarpaulins for construction, logistics, agriculture and industrial applications across the UAE. UV-stabilised, waterproof, 16 standard sizes, roll supply available."
                url={pageUrl}
                image="https://www.tentnow.ae/images/tarpaulins/tarpaulin-main.png"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'مشمع PE' : 'PE Tarpaulins', href: '/services/tarpaulins' },
                ]}
            />

            {/* ── Hero ── */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tarpaulins/tarpaulin-main.png"
                        alt={isRtl ? 'مشمع بولي إيثيلين PE200 في الإمارات' : 'PE200 tarpaulin UAE construction site coverage'}
                        fill
                        priority
                        className="object-cover opacity-15 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/85 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>{c.heroLabel}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1] whitespace-pre-line">
                            {c.heroTitle}
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-xl md:text-2xl text-[#9da6b9] font-light leading-relaxed max-w-3xl">
                            {c.heroBody}
                        </p>

                        {/* Spec badges */}
                        <div className="flex flex-wrap gap-3 mt-10">
                            {['200 gsm', 'UV Stabilised', 'Waterproof', '16 Sizes', 'PE200'].map((badge) => (
                                <span
                                    key={badge}
                                    className="px-4 py-2 bg-[#1a212e] border border-[#282e39] rounded-lg text-[#9da6b9] text-xs font-bold tracking-widest uppercase"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mt-10">
                            <a
                                href="https://wa.me/971501826969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gold-fill px-8 py-4 rounded-xl font-display inline-flex items-center gap-3"
                            >
                                {c.ctaPrimary}
                            </a>
                            <Link
                                href="/request-quote"
                                className="btn-secondary px-8 py-4 rounded-xl font-display inline-flex items-center gap-3"
                            >
                                {c.ctaSecondary}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Specifications ── */}
            <section className="py-20 border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="max-w-2xl mb-12">
                        <div className="section-label mb-6">
                            <span>PE200 — Dutarp</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display text-white">{c.specsTitle}</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Specs table */}
                        <div className="bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden">
                            <table className="w-full text-sm">
                                <tbody>
                                    {c.specs.map((spec, idx) => (
                                        <tr
                                            key={spec.label}
                                            className={`border-b border-[#282e39] last:border-0 ${idx % 2 === 0 ? 'bg-[#101622]/40' : ''}`}
                                        >
                                            <td className="px-5 py-4 text-gold font-bold w-2/5 align-top leading-snug">
                                                {spec.label}
                                            </td>
                                            <td className="px-5 py-4 text-[#9da6b9] leading-snug">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Product image */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#282e39]">
                            <Image
                                src="/images/tarpaulins/tarpaulin-uses.png"
                                alt={isRtl ? 'استخدامات مشمع PE200' : 'PE200 tarpaulin applications UAE'}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101622]/70 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <span className="text-gold text-xs font-bold tracking-widest uppercase">
                                    {isRtl ? 'التطبيقات — مواقع البناء والصناعة والزراعة' : 'Applications — Construction · Industrial · Agricultural'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Features ── */}
            <section className="py-24 border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-6">{c.featuresTitle}</h2>
                        <p className="text-[#9da6b9] text-lg leading-relaxed">{c.featuresBody}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {c.features.map((item, idx) => {
                            const Icon = featureIcons[idx] ?? CheckCircle2;
                            return (
                                <div
                                    key={item.title}
                                    className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all group"
                                >
                                    <Icon className="text-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
                                    <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                                    <p className="text-[#9da6b9] text-sm leading-relaxed">{item.body}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Colours ── */}
            <section className="py-16 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <h2 className="text-2xl md:text-3xl font-display text-white mb-10">{c.colorsTitle}</h2>
                    <div className="flex flex-wrap gap-6">
                        {c.colors.map((color) => (
                            <div key={color.name} className="flex items-center gap-4 bg-[#1a212e] border border-[#282e39] rounded-xl px-6 py-4">
                                <div
                                    className="w-10 h-10 rounded-lg shrink-0 border border-white/10"
                                    style={{ background: colorSwatches[color.name] ?? color.hex }}
                                />
                                <span className="text-white text-sm font-bold">{color.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pricing ── */}
            <section className="py-24 border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="max-w-3xl mb-8">
                        <div className="section-label mb-6">
                            <span>{isRtl ? 'السعر: 0.18 درهم/قدم²' : 'Rate: AED 0.18 per sq ft'}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">{c.pricingTitle}</h2>
                        <p className="text-[#9da6b9] text-lg leading-relaxed">{c.pricingSubtitle}</p>
                    </div>

                    {/* Price change disclaimer */}
                    <div className="flex gap-4 items-start p-5 mb-8 bg-amber-950/30 border border-amber-600/30 rounded-xl max-w-3xl">
                        <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={20} />
                        <div>
                            <p className="text-amber-200 text-sm leading-relaxed">{c.pricingDisclaimer}</p>
                            <p className="text-amber-300/70 text-xs mt-2">{c.pricingVatNote}</p>
                        </div>
                    </div>

                    {/* Pricing table */}
                    <div className="overflow-x-auto rounded-2xl border border-[#282e39]">
                        <table className="w-full text-sm min-w-[540px]">
                            <thead>
                                <tr className="bg-[#1a212e] border-b border-[#282e39]">
                                    <th className="px-5 py-4 text-left text-gold font-bold text-xs uppercase tracking-widest">#</th>
                                    <th className="px-5 py-4 text-left text-gold font-bold text-xs uppercase tracking-widest">{c.tableHeaders.size}</th>
                                    <th className="px-5 py-4 text-left text-gold font-bold text-xs uppercase tracking-widest">{c.tableHeaders.metric}</th>
                                    <th className="px-5 py-4 text-left text-gold font-bold text-xs uppercase tracking-widest">{c.tableHeaders.weight}</th>
                                    <th className="px-5 py-4 text-right text-gold font-bold text-xs uppercase tracking-widest">{c.tableHeaders.price}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tarpaulinSizes.map((row, idx) => (
                                    <tr
                                        key={row.feet}
                                        className={`border-b border-[#282e39] last:border-0 hover:bg-gold/5 transition-colors ${idx % 2 === 0 ? 'bg-[#101622]/30' : 'bg-[#1a212e]/40'}`}
                                    >
                                        <td className="px-5 py-3.5 text-[#9da6b9] text-xs">{idx + 1}</td>
                                        <td className="px-5 py-3.5 text-white font-mono font-medium">{row.feet}</td>
                                        <td className="px-5 py-3.5 text-[#9da6b9] font-mono">{row.meters}</td>
                                        <td className="px-5 py-3.5 text-[#9da6b9]">{row.weight}</td>
                                        <td className="px-5 py-3.5 text-right">
                                            <span className="text-gold font-bold font-mono">
                                                AED {row.price.toFixed(2)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="bg-[#1a212e] border-t border-[#282e39]">
                                    <td colSpan={5} className="px-5 py-3 text-[#9da6b9] text-xs">
                                        * {c.pricingVatNote} &nbsp;·&nbsp; {c.pricingRateNote} &nbsp;·&nbsp; {isRtl ? 'التسامح ±5% مقبول في المقاسات النهائية' : '±5% size tolerance acceptable'}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── Roll Supply ── */}
            <section className="py-16 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-display text-white mb-4">{c.rollsTitle}</h2>
                            <p className="text-[#9da6b9] leading-relaxed mb-8">{c.rollsBody}</p>
                            <div className="flex flex-wrap gap-4">
                                {c.rollSizes.map((roll) => (
                                    <div
                                        key={roll}
                                        className="px-6 py-4 bg-[#1a212e] border border-gold/30 rounded-xl text-gold font-bold font-mono text-sm"
                                    >
                                        {roll}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <Package className="text-gold mb-4" size={32} />
                            <h3 className="text-white text-lg font-bold mb-3">
                                {isRtl ? 'هل تحتاج إلى مقاسات مخصصة؟' : 'Need Custom Sizes?'}
                            </h3>
                            <p className="text-[#9da6b9] text-sm leading-relaxed mb-6">
                                {isRtl
                                    ? 'تتيح البكرات قطع أي طول حسب الحاجة. اتصل بنا لمناقشة متطلباتك المخصصة وعروض الأسعار بالجملة.'
                                    : 'Rolls allow any length to be cut as required. Contact us to discuss your custom requirements and bulk pricing.'}
                            </p>
                            <a
                                href="https://wa.me/971501826969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-gold font-bold text-sm hover:underline"
                            >
                                {isRtl ? 'استفسر عن البكرات' : 'Enquire about rolls'} <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Use Cases ── */}
            <section className="py-24 border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">{c.usesTitle}</h2>
                        <p className="text-[#9da6b9] leading-relaxed">{c.usesBody}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {c.uses.map((use) => (
                            <div
                                key={use}
                                className="flex items-start gap-3 p-5 bg-[#1a212e] border border-[#282e39] rounded-xl hover:border-gold/30 transition-colors"
                            >
                                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={18} />
                                <span className="text-[#9da6b9] text-sm leading-snug">{use}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Related Products & Services ── */}
            <section className="py-16 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <h2 className="text-2xl md:text-3xl font-display text-white mb-8">{c.relatedTitle}</h2>
                    <div className="flex flex-wrap gap-4">
                        {relatedLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-2 px-6 py-3 bg-[#1a212e] border border-[#282e39] rounded-xl text-white text-sm font-bold hover:border-gold/40 hover:text-gold transition-all group"
                            >
                                {isRtl ? link.labelAr : link.labelEn}
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-24 container-luxury border-t border-[#1a212e]">
                <h2 className="text-3xl md:text-4xl font-display text-white mb-12">{c.faqTitle}</h2>
                <div className="space-y-4 max-w-3xl">
                    {c.faqs.map((faq, idx) => (
                        <details
                            key={idx}
                            className="group bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden hover:border-gold/30 transition-colors"
                        >
                            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                                <h3 className="text-white font-display text-base md:text-lg leading-snug">{faq.q}</h3>
                                <ChevronDown className="text-gold shrink-0 transition-transform group-open:rotate-180" size={20} />
                            </summary>
                            <div className="px-6 pb-5">
                                <p className="text-[#9da6b9] leading-relaxed text-sm md:text-base">{faq.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="container-luxury pb-24">
                <div className="p-12 lg:p-16 bg-gold rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-16 opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700">
                        <ArrowRight size={300} strokeWidth={1} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl text-center md:text-start">
                            <h2 className="text-3xl md:text-4xl font-display text-[#101622] font-bold mb-4">{c.ctaTitle}</h2>
                            <p className="text-[#101622]/80 font-medium">{c.ctaBody}</p>
                        </div>
                        <a
                            href="https://wa.me/971501826969"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-[#101622] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#1a212e] transition-all shadow-2xl whitespace-nowrap"
                        >
                            {c.ctaButton}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
