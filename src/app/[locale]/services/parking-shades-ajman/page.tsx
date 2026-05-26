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
        ? 'مظلات مواقف السيارات في عجمان | مظلات للفلل والمجمعات التجارية | تنت ناو'
        : 'Parking Shade Structures Ajman | Car Park Canopies | Tent Now';

    const description = locale === 'ar'
        ? 'مظلات مواقف سيارات في عجمان — مظلات متدلية ومسطحة وHDPE للفلل والمواقع الصناعية والمباني التجارية. تصاريح بلدية عجمان مشمولة. أسعار تنافسية في الإمارات.'
        : 'Parking shade structures in Ajman — cantilever, flat, and HDPE shade canopies for villas, industrial sites, and commercial buildings. Ajman Municipality permits included. Competitive UAE pricing.';

    const canonical = `https://www.tentnow.ae/${locale}/services/parking-shades-ajman`;

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
                'en': 'https://www.tentnow.ae/en/services/parking-shades-ajman',
                'ar': 'https://www.tentnow.ae/ar/services/parking-shades-ajman',
                'x-default': 'https://www.tentnow.ae/en/services/parking-shades-ajman',
            },
        },
    };
}

// ─── Content ────────────────────────────────────────────────────────────────────

const content = {
    en: {
        badge: 'Ajman Municipality Approved',
        h1: 'Parking Shade Structures in Ajman',
        subtitle: 'From Ajman Corniche to Al Nuaimiyah industrial estates — affordable, permit-compliant parking shade structures across Ajman emirate.',
        whyTitle: 'Why Choose Tent Now in Ajman',
        whyPoints: [
            'Ajman Municipality permit applications fully managed in-house',
            'Coverage: Ajman Corniche, Al Nuaimiyah, Al Rashidiya, Al Hamidiya, Al Jurf industrial',
            'Competitive pricing — often the most affordable installation cost in northern UAE',
            'Experience with villa communities, industrial estates, mosques, and commercial buildings',
        ],
        shadeTypesTitle: 'Parking Shade Types Available in Ajman',
        shadeTypes: [
            {
                title: 'Cantilever Parking Shades',
                body: 'Single-post cantilever shades — perfect for Ajman villa driveways and small commercial parking areas in Al Nuaimiyah, Al Rashidiya, and Al Hamidiya. Quick permit, fast install.',
            },
            {
                title: 'Tensile Sail Shades',
                body: 'HDPE tensile sail shades for Ajman commercial buildings, school zones, and residential compound entrance canopies. Low maintenance, long-lasting fabric in UAE heat conditions.',
            },
            {
                title: 'Flat & Pyramid Canopies',
                body: 'Steel-framed flat and pyramid canopies for Al Jurf and Ajman industrial area sites, warehouse parking yards, and multi-bay commercial car parks. Heavy-duty options available.',
            },
            {
                title: 'Polycarbonate Shades',
                body: 'Polycarbonate panel shades for premium Ajman Corniche residential properties and select commercial developments. UV protection with a clean, contemporary appearance.',
            },
        ],
        faqTitle: 'Parking Shades Ajman — FAQs',
        faqs: [
            {
                q: 'Does Ajman Municipality require a permit for a parking shade?',
                a: 'Yes. Ajman Municipality requires approval for permanent shade structures. The process is streamlined compared to larger emirates — typical residential approval is 3–7 working days. We manage all applications on your behalf.',
            },
            {
                q: 'What areas of Ajman do you cover?',
                a: 'We cover all of Ajman emirate including Ajman Corniche, Al Nuaimiyah, Al Rashidiya, Al Hamidiya, Al Jurf industrial area, Al Amerah, and all surrounding residential communities.',
            },
            {
                q: 'How does Ajman parking shade pricing compare to Dubai and Sharjah?',
                a: 'Ajman offers some of the most competitive parking shade pricing in the UAE. No DM permit fees, lower transport distances, and a streamlined approval process all contribute to lower overall project costs.',
            },
            {
                q: 'Can you install parking shades at industrial sites in Ajman?',
                a: 'Yes. Al Jurf industrial area is one of our most active Ajman installation zones. We install heavy-gauge steel frame flat canopies rated for high wind and industrial environments. Site-specific structural assessments available.',
            },
            {
                q: 'Do you install parking shades for villas and apartment buildings in Ajman?',
                a: 'Yes. Ajman villa communities and apartment building car parks are common projects for our team. We assess each site individually — considering building type, ground surface, and HOA requirements — before recommending the right shade system.',
            },
        ],
        ctaTitle: 'Get a Free Site Survey in Ajman',
        ctaBody: 'Affordable, permit-compliant parking shade structures across all of Ajman. Free site visit, fast quote, rapid installation.',
        ctaButton: 'Request a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        breadcrumbServices: 'Services',
        breadcrumbHub: 'Parking Shades',
        breadcrumbPage: 'Ajman',
    },
    ar: {
        badge: 'معتمد من بلدية عجمان',
        h1: 'مظلات مواقف السيارات في عجمان',
        subtitle: 'من كورنيش عجمان إلى مناطق النعيمية الصناعية — هياكل مظلات مواقف ميسورة التكلفة ومتوافقة مع التصاريح عبر إمارة عجمان.',
        whyTitle: 'لماذا تختار تنت ناو في عجمان',
        whyPoints: [
            'طلبات تصاريح بلدية عجمان مُدارة بالكامل داخلياً',
            'تغطية: كورنيش عجمان، النعيمية، الراشدية، الحميدية، صناعية الجرف',
            'أسعار تنافسية — في الغالب أقل تكلفة تركيب في شمال الإمارات',
            'خبرة مع مجتمعات الفلل والمناطق الصناعية والمساجد والمباني التجارية',
        ],
        shadeTypesTitle: 'أنواع مظلات المواقف المتوفرة في عجمان',
        shadeTypes: [
            {
                title: 'مظلات الذراع المتدلية',
                body: 'مظلات بعمود واحد — مثالية لممرات الفلل في عجمان ومواقف السيارات التجارية الصغيرة في النعيمية والراشدية والحميدية. تصريح سريع وتركيب فوري.',
            },
            {
                title: 'مظلات شراعية مشدودة',
                body: 'مظلات شراعية HDPE للمباني التجارية في عجمان ومناطق المدارس ومظلات مداخل المجمعات السكنية. صيانة منخفضة وقماش طويل الأمد في ظروف حرارة الإمارات.',
            },
            {
                title: 'مظلات مسطحة وهرمية',
                body: 'مظلات مسطحة وهرمية بإطار فولاذي لمواقع منطقة الجرف ومناطق عجمان الصناعية وساحات مواقف المستودعات ومواقف السيارات التجارية متعددة الأبواب. خيارات ثقيلة متاحة.',
            },
            {
                title: 'مظلات بولي كربونات',
                body: 'مظلات ألواح بولي كربونات للمنشآت السكنية الفاخرة على كورنيش عجمان والمشاريع التجارية المنتقاة. حماية من الأشعة فوق البنفسجية بمظهر عصري أنيق.',
            },
        ],
        faqTitle: 'أسئلة شائعة — مظلات مواقف عجمان',
        faqs: [
            {
                q: 'هل تشترط بلدية عجمان تصريحاً لمظلة موقف السيارة؟',
                a: 'نعم. بلدية عجمان تشترط الموافقة على هياكل المظلات الدائمة. العملية مُبسطة مقارنة بالإمارات الأكبر — الموافقة السكنية المعتادة تستغرق 3 إلى 7 أيام عمل. نتولى إدارة جميع الطلبات نيابةً عنك.',
            },
            {
                q: 'ما المناطق التي تغطونها في عجمان؟',
                a: 'نغطي كامل إمارة عجمان بما فيها كورنيش عجمان والنعيمية والراشدية والحميدية ومنطقة الجرف الصناعية والعامرة وجميع المجتمعات السكنية المحيطة.',
            },
            {
                q: 'كيف تقارن أسعار مظلات مواقف عجمان بدبي والشارقة؟',
                a: 'تقدم عجمان بعض أكثر أسعار مظلات المواقف تنافسية في الإمارات. لا رسوم تصاريح بلدية دبي، ومسافات نقل أقصر، وعملية موافقة مبسطة تساهم جميعها في خفض إجمالي تكاليف المشروع.',
            },
            {
                q: 'هل تركبون مظلات مواقف في المواقع الصناعية بعجمان؟',
                a: 'نعم. منطقة الجرف الصناعية من أكثر مناطق التركيب نشاطاً لنا في عجمان. نركّب مظلات مسطحة بإطارات فولاذية سميكة مُصممة للرياح العالية والبيئات الصناعية. تقييمات إنشائية خاصة بالموقع متاحة.',
            },
            {
                q: 'هل تركبون مظلات مواقف للفلل والمباني السكنية في عجمان؟',
                a: 'نعم. مجتمعات الفلل ومواقف سيارات المباني السكنية في عجمان من المشاريع الشائعة لفريقنا. نقيّم كل موقع بشكل فردي — بالنظر في نوع المبنى وسطح الأرض ومتطلبات جمعية الملاك — قبل التوصية بنظام المظلة المناسب.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني في عجمان',
        ctaBody: 'هياكل مظلات مواقف ميسورة التكلفة ومتوافقة مع التصاريح في كل أنحاء عجمان. زيارة موقع مجانية وعرض أسعار سريع وتركيب فوري.',
        ctaButton: 'اطلب عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        breadcrumbServices: 'الخدمات',
        breadcrumbHub: 'مظلات المواقف',
        breadcrumbPage: 'عجمان',
    },
};

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function ParkingShadesAjmanPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const isAr = locale === 'ar';
    const t = isAr ? content.ar : content.en;
    const pageUrl = `https://www.tentnow.ae/${locale}/services/parking-shades-ajman`;

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
                    { name: t.breadcrumbPage, href: '/services/parking-shades-ajman' },
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
                                href: '/services/parking-shades-sharjah',
                                labelEn: 'Parking Shades Sharjah',
                                labelAr: 'مظلات مواقف الشارقة',
                                descEn: 'Most competitively priced UAE parking shades — mosques, schools, industrial areas, and villas.',
                                descAr: 'أكثر مظلات المواقف تنافسية في الإمارات — مساجد ومدارس ومناطق صناعية وفلل.',
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
