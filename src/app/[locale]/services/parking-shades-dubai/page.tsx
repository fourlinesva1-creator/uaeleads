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
        ? 'مظلات مواقف السيارات في دبي | مظلات للفلل والمجمعات التجارية | تنت ناو'
        : 'Parking Shade Structures Dubai | Car Park Canopies | Tent Now';

    const description = locale === 'ar'
        ? 'مظلات مواقف سيارات في دبي للفلل والمجمعات التجارية والمواقف متعددة الطوابق. تصاريح بلدية دبي مشمولة. مسح موقعي مجاني. اتصل بنا الآن.'
        : 'Parking shade structures in Dubai — cantilever, tensile sail, flat, and polycarbonate canopies for villas, commercial buildings, and car parks. Dubai Municipality permits included. Free site survey.';

    const canonical = `https://www.tentnow.ae/${locale}/services/parking-shades-dubai`;

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
                'en': 'https://www.tentnow.ae/en/services/parking-shades-dubai',
                'ar': 'https://www.tentnow.ae/ar/services/parking-shades-dubai',
                'x-default': 'https://www.tentnow.ae/en/services/parking-shades-dubai',
            },
        },
    };
}

// ─── Content ────────────────────────────────────────────────────────────────────

const content = {
    en: {
        badge: 'Dubai Municipality Approved',
        h1: 'Parking Shade Structures in Dubai',
        subtitle: 'From Jumeirah villa driveways to JLT commercial towers — Dubai Municipality approved, engineered for UAE heat.',
        whyTitle: 'Why Choose Tent Now in Dubai',
        whyPoints: [
            'Dubai Municipality (DM) permits fully handled — no paperwork delays',
            'DEWA-compliant electrical integration for solar shade options',
            'Cover Al Quoz, Industrial Area, JLT, Jumeirah, Business Bay, Discovery Gardens',
            'Rapid install: most residential projects done in 1–2 days',
        ],
        shadeTypesTitle: 'Parking Shade Types Available in Dubai',
        shadeTypes: [
            {
                title: 'Cantilever Parking Shades',
                body: 'Single-post cantilever structures — the most popular choice for villa driveways and small commercial car parks in Dubai. No central columns means maximum parking space and easy vehicle access.',
            },
            {
                title: 'Tensile Sail Shades',
                body: 'High-tension HDPE fabric stretched between anchor points. Ideal for modern residential compounds, hotel entrances, and amenity areas across Dubai where architectural form matters.',
            },
            {
                title: 'Flat & Pyramid Canopies',
                body: 'Steel-framed flat or pyramid-profile shades — cost-effective for larger areas like multi-bay commercial car parks, warehouse yards, and industrial properties in Al Quoz and Dubai Investment Park.',
            },
            {
                title: 'Polycarbonate Shades',
                body: 'Semi-transparent polycarbonate panel shades that allow natural light while blocking UV and heat. Popular for luxury villa driveways and hotel drop-off zones across Jumeirah and Downtown Dubai.',
            },
        ],
        faqTitle: 'Parking Shades Dubai — FAQs',
        faqs: [
            {
                q: 'How much does a parking shade cost in Dubai?',
                a: 'From AED 800 per bay for HDPE cantilever to AED 2,500+ for polycarbonate. Large commercial projects quoted on site survey. Dubai Municipality permit fees included.',
            },
            {
                q: 'Does Dubai Municipality require a permit for a parking shade?',
                a: 'Yes. DM requires a NOC for any permanent shade structure. Tent Now submits all applications and follows up — typical approval time is 5–10 working days.',
            },
            {
                q: 'Can you install parking shades on villa driveways in Dubai?',
                a: 'Yes. We install cantilever and flat shade structures on villa driveways across Jumeirah, Mirdif, Arabian Ranches, The Springs, and all Dubai communities. Ground conditions are assessed on site visit.',
            },
            {
                q: 'Do you cover all areas of Dubai?',
                a: 'Yes. We cover all Dubai zones including JLT, Business Bay, DIFC, Deira, Bur Dubai, Al Quoz industrial, Dubai Investment Park, and all residential communities.',
            },
            {
                q: 'How long does a parking shade last in Dubai\'s heat?',
                a: 'HDPE fabric with UV stabilisation: 8–12 years. Steel frames hot-dip galvanised to 85 microns: 20–25 years. We recommend annual inspection after summer season.',
            },
        ],
        ctaTitle: 'Get a Free Site Survey in Dubai',
        ctaBody: 'Our Dubai team visits your site, assesses ground conditions, and provides a detailed quote — no obligation.',
        ctaButton: 'Request a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        breadcrumbServices: 'Services',
        breadcrumbHub: 'Parking Shades',
        breadcrumbPage: 'Dubai',
    },
    ar: {
        badge: 'معتمد من بلدية دبي',
        h1: 'مظلات مواقف السيارات في دبي',
        subtitle: 'من ممرات الفلل في جميرا إلى أبراج جي إل تي التجارية — مظلات معتمدة من بلدية دبي، مصممة لحرارة الإمارات.',
        whyTitle: 'لماذا تختار تنت ناو في دبي',
        whyPoints: [
            'تصاريح بلدية دبي مُدارة بالكامل — بدون تأخيرات في الأوراق',
            'تكامل كهربائي متوافق مع هيئة كهرباء ومياه دبي لخيارات المظلات الشمسية',
            'تغطية القوز، المنطقة الصناعية، جي إل تي، جميرا، الخليج التجاري، ديسكفري غاردنز',
            'تركيب سريع: معظم المشاريع السكنية تنتهي في يوم إلى يومين',
        ],
        shadeTypesTitle: 'أنواع مظلات مواقف السيارات المتوفرة في دبي',
        shadeTypes: [
            {
                title: 'مظلات الذراع المتدلية',
                body: 'هياكل بعمود واحد — الخيار الأكثر شعبية لممرات الفلل ومواقف السيارات التجارية الصغيرة في دبي. لا أعمدة مركزية تعني مساحة أوسع وسهولة في الوصول.',
            },
            {
                title: 'مظلات شراعية مشدودة',
                body: 'قماش HDPE عالي الشد ممتد بين نقاط تثبيت. مثالية للمجمعات السكنية الحديثة ومداخل الفنادق والمناطق الترفيهية في دبي حيث الشكل المعماري مهم.',
            },
            {
                title: 'مظلات مسطحة وهرمية',
                body: 'مظلات ذات إطار فولاذي بتصميم مسطح أو هرمي — فعّالة من حيث التكلفة للمناطق الأكبر كمواقف السيارات التجارية متعددة الأبواب وساحات المستودعات والمناطق الصناعية.',
            },
            {
                title: 'مظلات بولي كربونات',
                body: 'مظلات ألواح بولي كربونات شبه شفافة تسمح بدخول الضوء الطبيعي مع حجب الأشعة فوق البنفسجية والحرارة. شائعة في ممرات الفلل الفاخرة ومناطق استقبال الفنادق.',
            },
        ],
        faqTitle: 'أسئلة شائعة — مظلات مواقف دبي',
        faqs: [
            {
                q: 'كم تكلفة مظلة موقف سيارة في دبي؟',
                a: 'من 800 درهم لكل بوابة لمظلات HDPE المتدلية إلى 2500 درهم وأكثر لمظلات البولي كربونات. المشاريع التجارية الكبيرة تُقتبس بعد المسح الميداني. رسوم تصاريح بلدية دبي مشمولة.',
            },
            {
                q: 'هل تشترط بلدية دبي تصريحاً لمظلة الموقف؟',
                a: 'نعم. تشترط بلدية دبي شهادة عدم ممانعة لأي هيكل مظلة دائم. تنت ناو تتولى تقديم جميع الطلبات ومتابعتها — وقت الموافقة المعتاد 5 إلى 10 أيام عمل.',
            },
            {
                q: 'هل يمكنكم تركيب مظلات على ممرات الفلل في دبي؟',
                a: 'نعم. نركّب هياكل مظلات متدلية ومسطحة على ممرات الفلل في جميرا ومردف والمرابع العربية ذا سبرينغز وجميع مجتمعات دبي. يُقيَّم وضع التربة في الزيارة الميدانية.',
            },
            {
                q: 'هل تغطون جميع مناطق دبي؟',
                a: 'نعم. نغطي جميع مناطق دبي بما فيها جي إل تي والخليج التجاري ومركز دبي المالي الدولي وديرة وبر دبي والقوز الصناعي ومجمع دبي للاستثمار وجميع المجتمعات السكنية.',
            },
            {
                q: 'كم تدوم مظلة موقف السيارة في حرارة دبي؟',
                a: 'قماش HDPE بمثبت الأشعة فوق البنفسجية: 8 إلى 12 سنة. إطارات فولاذية مجلفنة بالغمر الساخن إلى 85 ميكرون: 20 إلى 25 سنة. نوصي بالفحص السنوي بعد موسم الصيف.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني في دبي',
        ctaBody: 'فريقنا في دبي يزور موقعك ويقيّم ظروف الأرض ويقدم عرض أسعار مفصلاً — بدون التزام.',
        ctaButton: 'اطلب عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        breadcrumbServices: 'الخدمات',
        breadcrumbHub: 'مظلات المواقف',
        breadcrumbPage: 'دبي',
    },
};

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function ParkingShadesDubaiPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const isAr = locale === 'ar';
    const t = isAr ? content.ar : content.en;
    const pageUrl = `https://www.tentnow.ae/${locale}/services/parking-shades-dubai`;

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
                    { name: t.breadcrumbPage, href: '/services/parking-shades-dubai' },
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

            {/* WHY DUBAI SECTION */}
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
                                href: '/services/parking-shades-abu-dhabi',
                                labelEn: 'Parking Shades Abu Dhabi',
                                labelAr: 'مظلات مواقف أبوظبي',
                                descEn: 'ADM-permit shade structures for Abu Dhabi villas, government buildings, and island developments.',
                                descAr: 'هياكل مظلات بتصاريح بلدية أبوظبي للفلل والمباني الحكومية.',
                            },
                            {
                                href: '/services/parking-shades-sharjah',
                                labelEn: 'Parking Shades Sharjah',
                                labelAr: 'مظلات مواقف الشارقة',
                                descEn: 'Most competitively priced UAE parking shades — mosques, schools, industrial areas, and villas.',
                                descAr: 'أكثر مظلات المواقف تنافسية في الإمارات — مساجد ومدارس ومناطق صناعية وفلل.',
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
