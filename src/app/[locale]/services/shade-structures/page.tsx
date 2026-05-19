import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { shadeStructuresHubContent } from '@/data/shade-structures-content';
import PricingNote from '@/components/ui/PricingNote';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr
            ? 'مظلات الإمارات | حلول تظليل خارجي شاملة | تنت ناو'
            : 'Shade Structures UAE | Outdoor Shading Solutions | Tent Now',
        description: isAr
            ? 'مظلات في جميع أنحاء الإمارات — مظلات مواقف السيارات والممشى ومناطق اللعب والمسابح والملاعب الرياضية والمدارس والمساجد. تصاريح بلدية مشمولة. مسح موقعي مجاني.'
            : 'Shade structures across UAE — car park canopies, walkway shades, play area shades, pool shades, sports court shading, school shades, mosque shades. Municipality permits included. Civil Defence approved. Free site survey.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/shade-structures`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/shade-structures',
                'ar': 'https://www.tentnow.ae/ar/services/shade-structures',
                'x-default': 'https://www.tentnow.ae/en/services/shade-structures',
            },
        },
        openGraph: {
            title: isAr
                ? 'مظلات الإمارات | حلول تظليل خارجي شاملة | تنت ناو'
                : 'Shade Structures UAE | Outdoor Shading Solutions | Tent Now',
            description: isAr
                ? 'مظلات في جميع أنحاء الإمارات — مواقف السيارات والممشيات والمدارس والمساجد والملاعب الرياضية والمسابح. تصاريح بلدية مشمولة.'
                : 'Shade structures across UAE — car park canopies, walkway shades, play area shades, pool shades, sports court shading, school shades, mosque shades. Municipality permits included.',
            images: [{ url: 'https://www.tentnow.ae/images/shades/shade-structures-uae.jpg' }],
        },
    };
}

const subServiceLinks = [
    {
        href: '/services/parking-shades',
        labelEn: 'Car Park & Parking Shades',
        labelAr: 'مظلات مواقف السيارات',
        descEn: 'Cantilever, flat-frame, and polycarbonate canopies for residential and commercial car parks.',
        descAr: 'مظلات كابولية وهياكل مسطحة وبولي كربونات للمواقف السكنية والتجارية.',
    },
    {
        href: '/services/walkway-shades',
        labelEn: 'Pedestrian Walkway Shades',
        labelAr: 'مظلات الممشيات',
        descEn: 'Covered walkway structures for schools, hospitals, shopping centres, and housing developments.',
        descAr: 'هياكل ممشى مسقوفة للمدارس والمستشفيات ومراكز التسوق والمجمعات السكنية.',
    },
    {
        href: '/services/play-area-shades',
        labelEn: 'Play Area & Playground Shades',
        labelAr: 'مظلات مناطق اللعب',
        descEn: 'HDPE shade sails and frame canopies over playground equipment and outdoor learning areas.',
        descAr: 'أشرعة ظلال HDPE وإطارات فوق ألعاب الملاعب ومناطق التعلم الخارجية.',
    },
    {
        href: '/services/pool-shades',
        labelEn: 'Pool & Swimming Pool Shades',
        labelAr: 'مظلات المسابح',
        descEn: 'Tensile sail and polycarbonate pool shade structures for villas, hotels, and community pools.',
        descAr: 'أشرعة شد وهياكل بولي كربونات لتظليل المسابح الخاصة والفندقية والمجمعية.',
    },
    {
        href: '/services/garden-shades',
        labelEn: 'Garden & Outdoor Shades',
        labelAr: 'مظلات الحدائق والفراغات الخارجية',
        descEn: 'Pergolas, shade sails, and patio canopies for villa gardens, outdoor dining, and landscaped areas.',
        descAr: 'برجولات وأشرعة ظل ومظلات فِناء للحدائق الخاصة وتناول الطعام الخارجي والمناطق المُشجَّرة.',
    },
];

export default async function ShadeStructuresPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = shadeStructuresHubContent[locale] ?? shadeStructuresHubContent['en'];
    const pageUrl = `https://www.tentnow.ae/${locale}/services/shade-structures`;
    const isRtl = locale === 'ar';

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="Outdoor Shade Structures UAE"
                description="Civil Defence approved outdoor shade structures across all UAE emirates — car park canopies, walkway shades, play area shades, pool shades, sports court shading, school compound shades, and mosque courtyard canopies."
                url={pageUrl}
                image="https://www.tentnow.ae/images/shades/shade-structures-uae.jpg"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'المظلات' : 'Shade Structures', href: '/services/shade-structures' },
                ]}
            />

            {/* ── Hero ───────────────────────────────────────────────────────────── */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/shades/shade-structures-uae.jpg"
                        alt="Outdoor shade structures UAE — car park, walkway, school, and pool shading"
                        fill
                        priority
                        className="object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>{c.heroLabel}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            {c.heroTitle}
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-xl md:text-2xl text-[#9da6b9] font-light leading-relaxed max-w-3xl">
                            {c.heroBody}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-12">
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

            {/* ── Stats Bar ──────────────────────────────────────────────────────── */}
            <section className="py-16 border-y border-[#1a212e]">
                <div className="container-luxury">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {c.stats.map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-3xl md:text-4xl font-display text-gold mb-2">{value}</div>
                                <div className="text-[#9da6b9] text-sm">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Applications ───────────────────────────────────────────────────── */}
            <section className="container-luxury py-24">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-6">{c.applicationsTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {c.applications.map((item) => (
                        <div
                            key={item.title}
                            className="p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all group flex flex-col"
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h3 className="text-white text-base font-bold mb-3 group-hover:text-gold transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-[#9da6b9] text-sm leading-relaxed flex-1">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Materials ──────────────────────────────────────────────────────── */}
            <section className="py-24 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-6">{c.materialsTitle}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {c.materials.map((item) => (
                            <div
                                key={item.title}
                                className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="text-gold" size={20} />
                                </div>
                                <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                                <p className="text-[#9da6b9] text-sm leading-relaxed">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Tent Now ───────────────────────────────────────────────────── */}
            <section className="container-luxury py-24 border-t border-[#1a212e]">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-6">{c.whyTitle}</h2>
                    <p className="text-[#9da6b9] text-lg leading-relaxed">{c.whyBody}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {c.features.map((item) => (
                        <div
                            key={item.title}
                            className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all group"
                        >
                            <CheckCircle2 className="text-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
                            <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                            <p className="text-[#9da6b9] text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Sub-service Links ──────────────────────────────────────────────── */}
            <section className="py-24 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="max-w-2xl mb-12">
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                            {isRtl ? 'استكشف خدمات التظليل المتخصصة' : 'Explore Specialist Shade Services'}
                        </h2>
                        <p className="text-[#9da6b9]">
                            {isRtl
                                ? 'اختر خدمة التظليل المخصصة لاحتياجك أو تواصل معنا لمشروع متكامل.'
                                : 'Select a dedicated shade service for your specific application, or contact us for a combined project.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subServiceLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/40 transition-all flex flex-col"
                            >
                                <h3 className="text-white text-lg font-bold mb-3 group-hover:text-gold transition-colors">
                                    {isRtl ? link.labelAr : link.labelEn}
                                </h3>
                                <p className="text-[#9da6b9] text-sm leading-relaxed flex-1">
                                    {isRtl ? link.descAr : link.descEn}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-gold text-sm font-bold">
                                    {isRtl ? 'اعرف المزيد' : 'Learn More'}
                                    <ArrowRight size={16} className={isRtl ? 'rotate-180' : ''} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ────────────────────────────────────────────────────────────── */}
            <section className="py-24 container-luxury border-t border-[#1a212e]">
                <PricingNote locale={locale} className="mb-10" />
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

            {/* ── CTA ────────────────────────────────────────────────────────────── */}
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
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <a
                                href="https://wa.me/971501826969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-[#101622] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#1a212e] transition-all shadow-2xl whitespace-nowrap"
                            >
                                {c.ctaButton}
                            </a>
                            <Link
                                href="/request-quote"
                                className="px-10 py-5 bg-[#101622]/20 border border-[#101622]/40 text-[#101622] rounded-xl font-bold tracking-widest uppercase hover:bg-[#101622]/30 transition-all whitespace-nowrap text-center"
                            >
                                {c.ctaSecondary}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
