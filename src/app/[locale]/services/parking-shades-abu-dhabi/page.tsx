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
        ? 'مظلات مواقف السيارات في أبوظبي | مظلات للفلل والمباني الحكومية | تنت ناو'
        : 'Parking Shade Structures Abu Dhabi | Car Park Canopies | Tent Now';

    const description = locale === 'ar'
        ? 'مظلات مواقف سيارات في أبوظبي للفلل والمباني الحكومية ومواقف السيارات التجارية. تصاريح بلدية أبوظبي مشمولة. مسح موقعي مجاني. اتصل بنا الآن.'
        : 'Parking shade structures in Abu Dhabi — cantilever, tensile, and polycarbonate canopies for villas, government buildings, and commercial car parks. Abu Dhabi DM permits included. Free site survey.';

    const canonical = `https://www.tentnow.ae/${locale}/services/parking-shades-abu-dhabi`;

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
                'en': 'https://www.tentnow.ae/en/services/parking-shades-abu-dhabi',
                'ar': 'https://www.tentnow.ae/ar/services/parking-shades-abu-dhabi',
                'x-default': 'https://www.tentnow.ae/en/services/parking-shades-abu-dhabi',
            },
        },
    };
}

// ─── Content ────────────────────────────────────────────────────────────────────

const content = {
    en: {
        badge: 'Abu Dhabi Municipality Approved',
        h1: 'Parking Shade Structures in Abu Dhabi',
        subtitle: 'From Khalidiyah villas to Yas Island commercial developments — Abu Dhabi DM approved shade structures delivered across the emirate.',
        whyTitle: 'Why Choose Tent Now in Abu Dhabi',
        whyPoints: [
            'Abu Dhabi Municipality (ADM) permit applications handled in-house',
            'Coverage: Abu Dhabi City, Al Ain, Al Dhafra region, Yas Island, Saadiyat Island',
            'Government and ADNOC contractor experience — familiar with procurement process',
            'GSAS / Estidama context: HDPE shade reduces cooling load, supports sustainability ratings',
        ],
        shadeTypesTitle: 'Parking Shade Types Available in Abu Dhabi',
        shadeTypes: [
            {
                title: 'Cantilever Parking Shades',
                body: 'Single-post cantilever structures ideal for villa driveways and small-to-medium car parks across Abu Dhabi, Khalifa City, Al Raha, and Al Ain. Minimal footprint, maximum coverage.',
            },
            {
                title: 'Tensile Sail Shades',
                body: 'Architectural HDPE tensile sail shades for hotels, government building entrances, and Yas Island or Saadiyat Island commercial developments where design quality is a priority.',
            },
            {
                title: 'Flat & Pyramid Canopies',
                body: 'Steel-framed flat and pyramid profile shades for large government compound car parks, ADNOC facility parking areas, and multi-bay commercial installations across the emirate.',
            },
            {
                title: 'Polycarbonate Shades',
                body: 'Polycarbonate panel shades — premium option for luxury villas, hotel porte-cochères, and high-specification commercial properties on Saadiyat Island and Abu Dhabi Corniche.',
            },
        ],
        faqTitle: 'Parking Shades Abu Dhabi — FAQs',
        faqs: [
            {
                q: 'Does Abu Dhabi Municipality require a permit for a parking shade?',
                a: 'Yes. Abu Dhabi Municipality (ADM) requires approval for permanent shade structures. We handle all ADM permit applications and follow up with the relevant departments — typical processing time is 7–14 working days.',
            },
            {
                q: 'Do you install parking shades in Al Ain?',
                a: 'Yes. Our teams cover all of Abu Dhabi emirate including Al Ain and the Al Dhafra region. We coordinate logistics and local municipality requirements for out-of-city installations.',
            },
            {
                q: 'Can you install parking shades at government buildings in Abu Dhabi?',
                a: 'Yes. We have extensive experience with government and semi-government entity projects in Abu Dhabi, including familiarity with the procurement and approval process. ADNOC facility experience available.',
            },
            {
                q: 'Do you cover Yas Island and Saadiyat Island?',
                a: 'Yes. We regularly install parking shades across Yas Island, Saadiyat Island, Al Reem Island, and Al Maryah Island. Each island has specific authority requirements which we fully manage.',
            },
            {
                q: 'How long does a parking shade installation take in Abu Dhabi?',
                a: 'Residential projects: 1–3 days. Commercial or government projects: 3–7 days depending on scope. Permit timeline is typically the longest lead item at 7–14 working days.',
            },
        ],
        ctaTitle: 'Get a Free Site Survey in Abu Dhabi',
        ctaBody: 'From Corniche to Al Ain, our Abu Dhabi team surveys your site and delivers a detailed, no-obligation quote.',
        ctaButton: 'Request a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        breadcrumbServices: 'Services',
        breadcrumbHub: 'Parking Shades',
        breadcrumbPage: 'Abu Dhabi',
    },
    ar: {
        badge: 'معتمد من بلدية أبوظبي',
        h1: 'مظلات مواقف السيارات في أبوظبي',
        subtitle: 'من فلل الخالدية إلى المشاريع التجارية في جزيرة ياس — مظلات معتمدة من بلدية أبوظبي موزعة عبر الإمارة.',
        whyTitle: 'لماذا تختار تنت ناو في أبوظبي',
        whyPoints: [
            'طلبات تصاريح بلدية أبوظبي مُدارة داخلياً',
            'تغطية: مدينة أبوظبي، العين، منطقة الظفرة، جزيرة ياس، جزيرة السعديات',
            'خبرة مع المقاولين الحكوميين وأدنوك — إلمام بعملية المشتريات',
            'سياق GSAS / الاستدامة: مظلة HDPE تقلل حمل التبريد وتدعم تقييمات الاستدامة',
        ],
        shadeTypesTitle: 'أنواع مظلات المواقف المتوفرة في أبوظبي',
        shadeTypes: [
            {
                title: 'مظلات الذراع المتدلية',
                body: 'هياكل بعمود واحد مثالية لممرات الفلل ومواقف السيارات الصغيرة والمتوسطة في أبوظبي ومدينة خليفة والراحة والعين. بصمة صغيرة وتغطية واسعة.',
            },
            {
                title: 'مظلات شراعية مشدودة',
                body: 'مظلات شراعية HDPE معمارية للفنادق ومداخل المباني الحكومية والمشاريع التجارية في جزيرة ياس وجزيرة السعديات حيث جودة التصميم أولوية.',
            },
            {
                title: 'مظلات مسطحة وهرمية',
                body: 'مظلات ذات إطار فولاذي بتصميم مسطح وهرمي لمواقف سيارات مجمعات الحكومة الكبيرة ومرافق أدنوك ومنشآت تجارية متعددة الأبواب عبر الإمارة.',
            },
            {
                title: 'مظلات بولي كربونات',
                body: 'مظلات ألواح بولي كربونات — الخيار المميز للفلل الفاخرة ومداخل الفنادق والمنشآت التجارية عالية المواصفات في جزيرة السعديات وكورنيش أبوظبي.',
            },
        ],
        faqTitle: 'أسئلة شائعة — مظلات مواقف أبوظبي',
        faqs: [
            {
                q: 'هل تشترط بلدية أبوظبي تصريحاً لمظلة موقف السيارة؟',
                a: 'نعم. بلدية أبوظبي تشترط الموافقة على هياكل المظلات الدائمة. نتولى جميع طلبات تصاريح بلدية أبوظبي ونتابع مع الإدارات المختصة — وقت المعالجة المعتاد 7 إلى 14 يوم عمل.',
            },
            {
                q: 'هل تركبون مظلات مواقف في العين؟',
                a: 'نعم. فرقنا تغطي كامل إمارة أبوظبي بما فيها العين ومنطقة الظفرة. نتولى اللوجستيات ومتطلبات البلدية المحلية للتركيبات خارج المدينة.',
            },
            {
                q: 'هل يمكنكم تركيب مظلات في المباني الحكومية بأبوظبي؟',
                a: 'نعم. لدينا خبرة واسعة مع مشاريع الجهات الحكومية وشبه الحكومية في أبوظبي، بما فيها الإلمام بعملية المشتريات والموافقات. خبرة مرافق أدنوك متاحة.',
            },
            {
                q: 'هل تغطون جزيرة ياس وجزيرة السعديات؟',
                a: 'نعم. نركّب مظلات مواقف بانتظام في جزيرة ياس وجزيرة السعديات وجزيرة الريم وجزيرة المارية. لكل جزيرة متطلبات سلطة محددة ندير جميعها بالكامل.',
            },
            {
                q: 'كم تستغرق تركيبة مظلة موقف في أبوظبي؟',
                a: 'المشاريع السكنية: 1 إلى 3 أيام. المشاريع التجارية أو الحكومية: 3 إلى 7 أيام حسب النطاق. المهلة الزمنية للتصريح هي عادةً أطول عنصر تحضيري بـ 7 إلى 14 يوم عمل.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني في أبوظبي',
        ctaBody: 'من الكورنيش إلى العين، فريق أبوظبي لدينا يمسح موقعك ويقدم عرض أسعار مفصلاً بدون التزام.',
        ctaButton: 'اطلب عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        breadcrumbServices: 'الخدمات',
        breadcrumbHub: 'مظلات المواقف',
        breadcrumbPage: 'أبوظبي',
    },
};

// ─── Page ───────────────────────────────────────────────────────────────────────

export default async function ParkingShadesAbuDhabiPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const isAr = locale === 'ar';
    const t = isAr ? content.ar : content.en;
    const pageUrl = `https://www.tentnow.ae/${locale}/services/parking-shades-abu-dhabi`;

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
                    { name: t.breadcrumbPage, href: '/services/parking-shades-abu-dhabi' },
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
