import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { parkingShadeHubContent } from '@/data/parking-shade-content';
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
            ? 'مظلات مواقف ومواقف السيارات في الإمارات | مظلات | تنت ناو'
            : 'Car Park & Parking Shade Structures UAE | Canopies | Tent Now',
        description: isAr
            ? 'مظلات مواقف السيارات في الإمارات — مظلات كابولية وأشرعة شد ومسطحة وبولي كربونات للفلل السكنية والمواقف التجارية والمنشآت الصناعية. تصاريح بلدية مشمولة. مسح موقعي مجاني.'
            : 'Car park and parking shade structures UAE — cantilever, tensile sail, flat, and polycarbonate canopies for residential villas, commercial car parks, and industrial facilities. Municipality permits included. Free site survey.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/parking-shades`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/parking-shades',
                'ar': 'https://www.tentnow.ae/ar/services/parking-shades',
                'x-default': 'https://www.tentnow.ae/en/services/parking-shades',
            },
        },
        openGraph: {
            title: isAr
                ? 'مظلات مواقف السيارات في الإمارات | تنت ناو'
                : 'Parking Shade Structures UAE | Tent Now',
            description: isAr
                ? 'هياكل مظلات HDPE وأشرعة شد وبولي كربونات للمواقف السكنية والتجارية والصناعية في الإمارات.'
                : 'HDPE, tensile sail, flat, and polycarbonate parking shade structures for residential, commercial, and industrial car parks across the UAE.',
            images: [{ url: 'https://www.tentnow.ae/images/shades/car-parking-shade-uae.jpg' }],
        },
    };
}

export default async function ParkingShadesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = parkingShadeHubContent[locale] ?? parkingShadeHubContent['en'];
    const pageUrl = `https://www.tentnow.ae/${locale}/services/parking-shades`;
    const isRtl = locale === 'ar';

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="Parking Shade Structures UAE"
                description="Civil Defence approved HDPE, tensile sail, flat, and polycarbonate parking shade structures for residential, commercial, and industrial car parks across all UAE emirates."
                url={pageUrl}
                image="https://www.tentnow.ae/images/shades/car-parking-shade-uae.jpg"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'مظلات المواقف' : 'Parking Shades', href: '/services/parking-shades' },
                ]}
            />

            {/* ── Hero ───────────────────────────────────────────────────────────── */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/shades/car-parking-shade-uae.jpg"
                        alt="Parking shade structures UAE — car park canopies"
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

            {/* ── Types of Parking Shade Structures ─────────────────────────────── */}
            <section className="container-luxury py-24">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-6">{c.typesTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {c.types.map((item) => (
                        <div
                            key={item.title}
                            className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all group"
                        >
                            <CheckCircle2 className="text-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
                            <h3 className="text-white text-xl font-display font-bold mb-3">{item.title}</h3>
                            <p className="text-[#9da6b9] text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Materials ─────────────────────────────────────────────────────── */}
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

            {/* ── Why Tent Now ──────────────────────────────────────────────────── */}
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

            {/* ── Available Across UAE ──────────────────────────────────────────── */}
            <section className="py-24 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <div className="max-w-2xl mb-12">
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                            {isRtl ? 'متوفر في جميع أنحاء الإمارات' : 'Available Across UAE'}
                        </h2>
                        <p className="text-[#9da6b9]">
                            {isRtl
                                ? 'نقدم خدمات مظلات مواقف السيارات مع تصاريح البلديات المحلية في جميع إمارات دولة الإمارات العربية المتحدة.'
                                : 'We deliver parking shade structures with local municipality permits across all UAE emirates.'}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                href: '/services/parking-shades-dubai',
                                labelEn: 'Parking Shades Dubai',
                                labelAr: 'مظلات مواقف دبي',
                                descEn: 'Dubai Municipality approved. Covering Jumeirah, JLT, Business Bay, Al Quoz, and all Dubai communities.',
                                descAr: 'معتمد من بلدية دبي. يغطي جميرا وجي إل تي والخليج التجاري والقوز وجميع مجتمعات دبي.',
                            },
                            {
                                href: '/services/parking-shades-abu-dhabi',
                                labelEn: 'Parking Shades Abu Dhabi',
                                labelAr: 'مظلات مواقف أبوظبي',
                                descEn: 'Abu Dhabi Municipality (ADM) permits handled. Covering Abu Dhabi City, Al Ain, Yas Island, and Al Dhafra.',
                                descAr: 'تصاريح بلدية أبوظبي مُدارة. يغطي مدينة أبوظبي والعين وجزيرة ياس ومنطقة الظفرة.',
                            },
                            {
                                href: '/services/parking-shades-sharjah',
                                labelEn: 'Parking Shades Sharjah',
                                labelAr: 'مظلات مواقف الشارقة',
                                descEn: 'Most competitively priced in UAE. Serving Sharjah city, Industrial Areas 1–18, and Hamriyah Free Zone.',
                                descAr: 'أكثر تنافسية في الإمارات. يخدم مدينة الشارقة والمناطق الصناعية 1–18 والمنطقة الحرة بالحمرية.',
                            },
                            {
                                href: '/services/parking-shades-ajman',
                                labelEn: 'Parking Shades Ajman',
                                labelAr: 'مظلات مواقف عجمان',
                                descEn: 'Ajman Municipality approved. Affordable rates for villas, industrial estates, and commercial buildings.',
                                descAr: 'معتمد من بلدية عجمان. أسعار ميسورة للفلل والمناطق الصناعية والمباني التجارية.',
                            },
                        ].map((city) => (
                            <Link
                                key={city.href}
                                href={city.href}
                                className="group p-7 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/40 transition-all flex flex-col"
                            >
                                <h3 className="text-white text-base font-bold mb-3 group-hover:text-gold transition-colors">
                                    {isRtl ? city.labelAr : city.labelEn}
                                </h3>
                                <p className="text-[#9da6b9] text-sm leading-relaxed flex-1">
                                    {isRtl ? city.descAr : city.descEn}
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-gold text-sm font-bold">
                                    {isRtl ? 'اعرف المزيد' : 'Learn More'}
                                    <ArrowRight size={14} className={isRtl ? 'rotate-180' : ''} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────────── */}
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

            {/* ── CTA ───────────────────────────────────────────────────────────── */}
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
