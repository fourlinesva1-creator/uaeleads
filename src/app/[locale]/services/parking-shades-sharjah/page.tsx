import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PricingNote from '@/components/ui/PricingNote';
import { Car, Shield, Sun, Layers, CheckCircle, Phone, ArrowRight, Star } from 'lucide-react';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'مظلات مواقف السيارات في الشارقة | أسعار تنافسية | تنت ناو'
        : 'Parking Shade Structures Sharjah | Car Park Canopies | Tent Now';

    const description = locale === 'ar'
        ? 'مظلات مواقف سيارات في الشارقة — أكثر أسعاراً تنافسية في الإمارات. مظلات متدلية ومسطحة وشراعية للفلل والمناطق الصناعية والمدارس والمساجد. تصاريح بلدية الشارقة مشمولة.'
        : 'Parking shade structures in Sharjah — most competitively priced in UAE. Cantilever, flat, and tensile shade canopies for villas, industrial areas, schools, and mosques. Sharjah Municipality permits included.';

    const canonical = `https://www.tentnow.ae/${locale}/services/parking-shades-sharjah`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
            type: 'website',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
            siteName: 'Tent Now UAE',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/og-image.jpg'],
        },
        alternates: {
            canonical,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/parking-shades-sharjah',
                'ar': 'https://www.tentnow.ae/ar/services/parking-shades-sharjah',
                'x-default': 'https://www.tentnow.ae/en/services/parking-shades-sharjah',
            },
        },
    };
}

// ─── Content ────────────────────────────────────────────────────────────────────

const content = {
    en: {
        badge: 'Sharjah Municipality Approved',
        h1: 'Parking Shade Structures in Sharjah',
        subtitle: "Sharjah's most competitively priced parking shade installer — Municipality permits handled, Sharjah and Hamriyah Free Zone experience.",
        whyTitle: 'Why Choose Tent Now in Sharjah',
        whyPoints: [
            'Most competitive pricing in UAE — no out-of-town transport cost',
            'Sharjah Municipality (SEDD) permits handled quickly — faster process than Dubai',
            'Coverage: Sharjah city, Industrial Area 1–18, Hamriyah Free Zone, Al Khan, Al Majaz',
            'Common applications: mosque car parks, school zones, industrial warehouse yards, villa communities',
        ],
        shadeTypesTitle: 'Parking Shade Types Available in Sharjah',
        shadeTypes: [
            {
                title: 'Cantilever Parking Shades',
                body: 'Single-post cantilever shades — most popular for villa driveways across Sharjah residential communities including Al Nahda, Al Qasimia, and Muwaileh. Fast installation, DM-approved.',
            },
            {
                title: 'Tensile Sail Shades',
                body: 'Tensile HDPE sail shades for Sharjah schools, mosques, and commercial building entrance areas. Flexible design suits both small and large coverage areas efficiently.',
            },
            {
                title: 'Flat & Pyramid Canopies',
                body: 'Flat and pyramid steel-frame canopies for Sharjah Industrial Areas 1–18, Hamriyah Free Zone warehouse yards, mosque car parks, and multi-bay school parking zones.',
            },
            {
                title: 'Polycarbonate Shades',
                body: 'Polycarbonate panel shades for premium Sharjah residential compounds and commercial properties. Allows natural light while providing full UV and heat protection.',
            },
        ],
        faqTitle: 'Parking Shades Sharjah — FAQs',
        faqs: [
            {
                q: 'How do Sharjah parking shade prices compare to Dubai?',
                a: 'Sharjah installations are typically 10–20% more cost-effective than Dubai due to lower transport costs, simpler permit structures (SEDD vs DM), and competitive local labour. Contact us for a Sharjah-specific quote.',
            },
            {
                q: 'Does SEDD require a permit for a parking shade in Sharjah?',
                a: 'Yes. Sharjah Economic Development Department (SEDD) and Sharjah Municipality require approval for permanent structures. The process is generally faster than Dubai — typically 3–7 working days for residential projects.',
            },
            {
                q: 'Can you install parking shades in Sharjah Industrial Areas?',
                a: 'Yes. We regularly install flat and pyramid canopy shades in Sharjah Industrial Areas 1 through 18 and Hamriyah Free Zone. Industrial installations often use heavier-gauge steel frames rated for high wind loads.',
            },
            {
                q: 'Do you install mosque and school car park shades in Sharjah?',
                a: 'Yes. Mosque car parks and school drop-off zones are among our most common Sharjah projects. We understand the specific requirements for these properties — larger coverage areas, durable materials, and quick installation outside school/prayer hours.',
            },
            {
                q: 'Do you cover Sharjah\'s East Coast enclaves (Khor Fakkan, Kalba)?',
                a: 'Yes. We cover all Sharjah emirate territories including Khor Fakkan, Kalba, and Dibba Al Hisn on the East Coast. Additional logistics coordination is required for East Coast installations.',
            },
        ],
        ctaTitle: 'Get a Free Site Survey in Sharjah',
        ctaBody: 'Sharjah\'s most competitive parking shade pricing — free site survey, permits handled, rapid installation.',
        ctaButton: 'Request a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        breadcrumbServices: 'Services',
        breadcrumbHub: 'Parking Shades',
        breadcrumbPage: 'Sharjah',
    },
    ar: {
        badge: 'معتمد من بلدية الشارقة',
        h1: 'مظلات مواقف السيارات في الشارقة',
        subtitle: 'أكثر شركة تركيب مظلات مواقف تنافسية في الشارقة — تصاريح البلدية مُدارة، خبرة في الشارقة والمنطقة الحرة بالحمرية.',
        whyTitle: 'لماذا تختار تنت ناو في الشارقة',
        whyPoints: [
            'أكثر الأسعار تنافسية في الإمارات — بدون تكلفة نقل خارج المدينة',
            'تصاريح بلدية الشارقة (هيئة التنمية الاقتصادية) تُدار بسرعة — أسرع من دبي',
            'تغطية: مدينة الشارقة، المناطق الصناعية 1–18، المنطقة الحرة بالحمرية، الخان، المجاز',
            'التطبيقات الشائعة: مواقف المساجد، مناطق المدارس، ساحات مستودعات صناعية، مجتمعات فلل',
        ],
        shadeTypesTitle: 'أنواع مظلات المواقف المتوفرة في الشارقة',
        shadeTypes: [
            {
                title: 'مظلات الذراع المتدلية',
                body: 'مظلات بعمود واحد — الأكثر شعبية لممرات الفلل في المجتمعات السكنية في الشارقة بما فيها النهدة والقاسمية ومويلح. تركيب سريع ومعتمد من البلدية.',
            },
            {
                title: 'مظلات شراعية مشدودة',
                body: 'مظلات شراعية HDPE مشدودة للمدارس والمساجد ومداخل المباني التجارية في الشارقة. التصميم المرن يناسب مساحات تغطية صغيرة وكبيرة بكفاءة.',
            },
            {
                title: 'مظلات مسطحة وهرمية',
                body: 'مظلات مسطحة وهرمية بإطار فولاذي للمناطق الصناعية 1–18 في الشارقة وساحات مستودعات المنطقة الحرة بالحمرية ومواقف المساجد ومواقف المدارس متعددة الأبواب.',
            },
            {
                title: 'مظلات بولي كربونات',
                body: 'مظلات ألواح بولي كربونات للمجمعات السكنية الفاخرة في الشارقة والمنشآت التجارية. تسمح بدخول الضوء الطبيعي مع توفير حماية كاملة من الأشعة فوق البنفسجية والحرارة.',
            },
        ],
        faqTitle: 'أسئلة شائعة — مظلات مواقف الشارقة',
        faqs: [
            {
                q: 'كيف تقارن أسعار مظلات مواقف الشارقة بدبي؟',
                a: 'تركيبات الشارقة عادةً أوفر بنسبة 10 إلى 20% من دبي بسبب انخفاض تكاليف النقل وبساطة هياكل التصاريح وتنافسية العمالة المحلية. تواصل معنا للحصول على عرض أسعار خاص بالشارقة.',
            },
            {
                q: 'هل تشترط هيئة التنمية الاقتصادية تصريحاً لمظلة موقف في الشارقة؟',
                a: 'نعم. هيئة التنمية الاقتصادية بالشارقة وبلدية الشارقة تشترطان الموافقة للهياكل الدائمة. العملية عادةً أسرع من دبي — تستغرق عادةً 3 إلى 7 أيام عمل للمشاريع السكنية.',
            },
            {
                q: 'هل تركبون مظلات في المناطق الصناعية بالشارقة؟',
                a: 'نعم. نركّب مظلات مسطحة وهرمية بانتظام في المناطق الصناعية في الشارقة من 1 إلى 18 والمنطقة الحرة بالحمرية. التركيبات الصناعية عادةً تستخدم إطارات فولاذية سميكة مُصممة لتحمل أحمال الرياح العالية.',
            },
            {
                q: 'هل تركبون مظلات مواقف للمساجد والمدارس في الشارقة؟',
                a: 'نعم. مواقف المساجد ومناطق توصيل المدارس من أكثر مشاريعنا شيوعاً في الشارقة. نفهم المتطلبات المحددة لهذه المنشآت — مساحات تغطية أكبر، ومواد متينة، وتركيب سريع خارج أوقات الدراسة والصلاة.',
            },
            {
                q: 'هل تغطون مناطق الساحل الشرقي في الشارقة (خورفكان، كلباء)؟',
                a: 'نعم. نغطي جميع أراضي إمارة الشارقة بما فيها خورفكان وكلباء ودبا الحصن على الساحل الشرقي. التنسيق اللوجستي الإضافي مطلوب لتركيبات الساحل الشرقي.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني في الشارقة',
        ctaBody: 'أكثر أسعار مظلات مواقف تنافسية في الشارقة — مسح موقعي مجاني، تصاريح مُدارة، تركيب سريع.',
        ctaButton: 'اطلب عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        breadcrumbServices: 'الخدمات',
        breadcrumbHub: 'مظلات المواقف',
        breadcrumbPage: 'الشارقة',
    },
};

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function ParkingShadesSharjahPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const isAr = locale === 'ar';
    const t = isAr ? content.ar : content.en;
    const pageUrl = `https://www.tentnow.ae/${locale}/services/parking-shades-sharjah`;

    return (
        <main className="min-h-screen bg-[#101622] text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name={t.h1}
                description={t.subtitle}
                url={pageUrl}
            />
            <FAQSchema items={t.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: t.breadcrumbServices, href: '/services' },
                    { name: t.breadcrumbHub, href: '/services/parking-shades' },
                    { name: t.breadcrumbPage, href: '/services/parking-shades-sharjah' },
                ]}
            />

            {/* HERO */}
            <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
                </div>
                <div className="container-luxury relative z-10">
                    <div className="max-w-3xl">
                        <div className="section-label mb-6">
                            <span>{t.badge}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-4 tracking-tight leading-[1.1]">
                            {t.h1}
                        </h1>
                        <div className="w-24 h-1.5 bg-[#D4AF37] mb-8 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-lg md:text-xl text-[#9da6b9] leading-relaxed mb-10 max-w-2xl">
                            {t.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/request-quote"
                                className="btn-gold-fill px-8 py-4 rounded-xl font-display flex items-center gap-3 text-sm uppercase tracking-widest"
                            >
                                {t.ctaButton}
                                <ArrowRight size={18} />
                            </Link>
                            <a
                                href="https://wa.me/971501826969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp px-8 py-4 rounded-xl font-display flex items-center gap-3 text-sm uppercase tracking-widest"
                            >
                                <Phone size={18} />
                                {t.ctaWhatsapp}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY SECTION */}
            <section className="py-20 lg:py-24 bg-[#0d1219]">
                <div className="container-luxury">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-10 tracking-tight">
                        {t.whyTitle}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {t.whyPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-4 p-6 bg-[#1a212e] border border-[#282e39] rounded-xl">
                                <CheckCircle className="text-[#D4AF37] shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
                                <span className="text-[#9da6b9] leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* SHADE TYPES */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-12 tracking-tight text-center">
                        {t.shadeTypesTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.shadeTypes.map((type, idx) => {
                            const icons = [Car, Layers, Shield, Sun];
                            const IconComp = icons[idx] || Car;
                            return (
                                <div key={idx} className="group p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1">
                                    <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                                        <IconComp className="text-[#D4AF37]" size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-display text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                        {type.title}
                                    </h3>
                                    <p className="text-[#9da6b9] leading-relaxed text-sm">
                                        {type.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 lg:py-28 bg-[#0d1219]">
                <div className="container-luxury">
                    <div className="max-w-3xl mx-auto">
                        <PricingNote locale={locale} className="mb-10" />
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-12 text-center tracking-tight">
                            {t.faqTitle}
                        </h2>
                        <div className="space-y-4">
                            {t.faqs.map((faq, idx) => (
                                <details key={idx} className="bg-[#1a212e] p-6 rounded-xl border border-[#282e39] group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4">
                                        <span>{faq.q}</span>
                                        <svg className="w-5 h-5 text-[#D4AF37] transition-transform group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-[#9da6b9] leading-relaxed">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HUB LINK + OTHER LOCATIONS */}
            <section className="py-20 lg:py-24 bg-[#0d1219]">
                <div className="container-luxury">
                    <div className="mb-10">
                        <Link
                            href="/services/parking-shades"
                            className="inline-flex items-center gap-2 text-[#D4AF37] font-bold text-sm uppercase tracking-widest hover:opacity-80 transition-opacity"
                        >
                            <ArrowRight size={16} className={isAr ? 'rotate-180' : ''} />
                            {isAr ? 'عرض جميع خدمات مظلات المواقف' : 'View All Parking Shade Services'}
                        </Link>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display text-white mb-8 tracking-tight">
                        {isAr ? 'مواقع أخرى' : 'Other Locations'}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        {[
                            {
                                href: '/services/parking-shades-dubai',
                                labelEn: 'Parking Shades Dubai',
                                labelAr: 'مظلات مواقف دبي',
                                descEn: 'DM-approved cantilever, tensile, and polycarbonate shades for Dubai villas and commercial car parks.',
                                descAr: 'مظلات معتمدة من بلدية دبي للفلل ومواقف السيارات التجارية.',
                            },
                            {
                                href: '/services/parking-shades-abu-dhabi',
                                labelEn: 'Parking Shades Abu Dhabi',
                                labelAr: 'مظلات مواقف أبوظبي',
                                descEn: 'ADM-permit shade structures for Abu Dhabi villas, government buildings, and island developments.',
                                descAr: 'هياكل مظلات بتصاريح بلدية أبوظبي للفلل والمباني الحكومية.',
                            },
                            {
                                href: '/services/parking-shades-ajman',
                                labelEn: 'Parking Shades Ajman',
                                labelAr: 'مظلات مواقف عجمان',
                                descEn: 'Affordable Ajman Municipality approved shades for villas, industrial estates, and commercial buildings.',
                                descAr: 'مظلات معتمدة من بلدية عجمان بأسعار ميسورة للفلل والمناطق الصناعية والمباني التجارية.',
                            },
                        ].map((city) => (
                            <Link
                                key={city.href}
                                href={city.href}
                                className="group p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-[#D4AF37]/40 transition-all flex flex-col"
                            >
                                <h3 className="text-white text-base font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">
                                    {isAr ? city.labelAr : city.labelEn}
                                </h3>
                                <p className="text-[#9da6b9] text-sm leading-relaxed flex-1">
                                    {isAr ? city.descAr : city.descEn}
                                </p>
                                <div className="mt-4 flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wide">
                                    {isAr ? 'اعرف المزيد' : 'Learn More'}
                                    <ArrowRight size={12} className={isAr ? 'rotate-180' : ''} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="relative p-12 lg:p-20 bg-[#D4AF37] rounded-3xl overflow-hidden group">
                        <div className="absolute top-0 right-0 p-16 opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700">
                            <Star size={300} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="max-w-xl text-center lg:text-start">
                                <h2 className="text-3xl md:text-4xl font-display text-[#101622] font-bold mb-4">
                                    {t.ctaTitle}
                                </h2>
                                <p className="text-[#101622]/80 text-lg font-medium">
                                    {t.ctaBody}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/request-quote"
                                    className="px-10 py-5 bg-[#101622] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#0d1219] transition-all shadow-2xl text-center text-sm"
                                >
                                    {t.ctaButton}
                                </Link>
                                <a
                                    href="https://wa.me/971501826969"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-5 bg-white/20 text-[#101622] rounded-xl font-bold tracking-widest uppercase hover:bg-white/40 transition-all text-center text-sm border border-[#101622]/20"
                                >
                                    {t.ctaWhatsapp}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
