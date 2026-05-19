import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PricingNote from '@/components/ui/PricingNote';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr
            ? 'مظلات الممشى والمشاة في الإمارات | ممرات مسقوفة | تنت ناو'
            : 'Walkway & Pedestrian Shade Structures UAE | Covered Walkways | Tent Now',
        description: isAr
            ? 'مظلات الممشى وتغطية مسارات المشاة في الإمارات — مدارس ومستشفيات ومجمعات سكنية ومراكز تسوق. هياكل معيارية، تصاريح بلدية مشمولة. مسح موقعي مجاني.'
            : 'Walkway shade structures and covered pedestrian paths across UAE — schools, hospitals, housing developments, shopping centres. Modular clear-span frames, HDPE fabric, polycarbonate options. Municipality permits included.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/walkway-shades`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/walkway-shades',
                'ar': 'https://www.tentnow.ae/ar/services/walkway-shades',
                'x-default': 'https://www.tentnow.ae/en/services/walkway-shades',
            },
        },
        openGraph: {
            title: isAr
                ? 'مظلات الممشى والمشاة في الإمارات | تنت ناو'
                : 'Walkway & Pedestrian Shade Structures UAE | Tent Now',
            description: isAr
                ? 'مظلات الممشى وتغطية مسارات المشاة في الإمارات — مدارس ومستشفيات ومجمعات سكنية ومراكز تسوق. هياكل معيارية، تصاريح بلدية مشمولة.'
                : 'Walkway shade structures for schools, hospitals, housing developments, and commercial sites across UAE. Modular frames, HDPE fabric, polycarbonate options.',
            images: [{ url: 'https://www.tentnow.ae/images/shades/walkway-shade-structures-uae.jpg' }],
        },
    };
}

// ─── Content ────────────────────────────────────────────────────────────────

interface WalkwayContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    whyTitle: string;
    whyPoints: string[];
    typesTitle: string;
    types: { title: string; body: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

const content: Record<string, WalkwayContent> = {
    en: {
        heroLabel: 'UAE Walkway Shade Specialists',
        heroTitle: 'Walkway & Pedestrian Shade Structures UAE',
        heroBody:
            'Covered walkway solutions for schools, hospitals, housing developments, and commercial sites — engineered for UAE heat, municipality permits included.',
        ctaPrimary: 'WhatsApp for Walkway Quote',
        ctaSecondary: 'Request a Site Survey',
        stats: [
            { value: '50 m', label: 'Clear-Span Width Available' },
            { value: '95%', label: 'UV Blockage' },
            { value: '7', label: 'Emirates Covered' },
            { value: '15 yr', label: 'Fabric Warranty Available' },
        ],
        whyTitle: 'Why Cover Your Walkways?',
        whyPoints: [
            'Connects buildings, gates, car parks and amenity areas without gaps in shade coverage',
            'Modular design — extend or reconfigure as your site develops',
            'Clear spans up to 50 m width with no internal columns obstructing movement',
            'Used across UAE schools, hospitals, hotels, malls, and residential compounds',
        ],
        typesTitle: 'Types of Walkway Shade Structures',
        types: [
            {
                title: 'Flat-Frame Walkway Cover',
                body: 'Steel frame with HDPE or polycarbonate roof panel. The most common type for school corridors, building-to-building links, and car park entry routes. Fully weatherproof options available.',
            },
            {
                title: 'Cantilever Walkway Shade',
                body: 'Single-sided post structure shading a footpath alongside a building or fence. Ideal where pillars on both sides would obstruct pedestrian flow or vehicle movement.',
            },
            {
                title: 'Tensile Sail Walkway',
                body: 'Overlapping HDPE sail shades creating a continuous shaded path. Lower cost than frame structures, modern aesthetic, popular for hotel resort paths and resort-style residential developments.',
            },
            {
                title: 'Polycarbonate Covered Walkway',
                body: 'Rigid polycarbonate panel roof on a steel frame — fully weatherproof. Used for premium school and hospital links, shopping centre connections, and VIP arrival routes.',
            },
        ],
        faqTitle: 'Walkway Shade FAQs',
        faqs: [
            {
                q: 'How much does a covered walkway shade cost in UAE?',
                a: 'Pricing depends on width, length, and material. HDPE flat-frame walkways start from AED 350–600 per linear metre. Polycarbonate covered walkways start from AED 600–1,000 per linear metre. Contact Tent Now for a free site survey and full quotation.',
            },
            {
                q: 'Do walkway shades require municipality permits in UAE?',
                a: 'Yes. Permanent covered walkway structures require permits from the relevant emirate authority (Dubai Municipality, Abu Dhabi DM, Sharjah SEDD, etc.). Tent Now manages all permit applications as part of the project.',
            },
            {
                q: 'What is the standard width for a pedestrian walkway shade?',
                a: 'Typical pedestrian walkway shades are 2–4 m wide. Where the walkway must also allow emergency vehicle access or buggy movement, widths of 4–6 m are used. Custom widths are available.',
            },
            {
                q: 'Can walkway shades be installed in schools?',
                a: 'Yes. School walkway covers are one of our most common applications across UAE. We are experienced with Ministry of Education requirements and have installed covered corridors in schools across Dubai, Abu Dhabi, Sharjah, and other emirates.',
            },
            {
                q: 'How long does walkway shade installation take?',
                a: 'A 50 m walkway section typically takes 2–4 days to install depending on foundation conditions. Larger school or hospital projects are programmed with a detailed construction schedule.',
            },
        ],
        ctaTitle: 'Get a Free Walkway Shade Survey',
        ctaBody:
            "Tell us your site location and walkway dimensions. We'll visit, measure up, and give you a full itemised quote — no obligation.",
        ctaButton: 'WhatsApp Us Now',
    },

    ar: {
        heroLabel: 'متخصصون في مظلات الممشى بالإمارات',
        heroTitle: 'مظلات الممشى والمشاة في الإمارات',
        heroBody:
            'حلول تغطية الممشى للمدارس والمستشفيات والمجمعات السكنية والمواقع التجارية — مصممة هندسياً لمواجهة حرارة الإمارات، وتصاريح البلديات مشمولة.',
        ctaPrimary: 'واتساب للحصول على عرض سعر',
        ctaSecondary: 'طلب مسح موقعي',
        stats: [
            { value: '50 م', label: 'بحر متاح بدون أعمدة' },
            { value: '95%', label: 'حجب الأشعة فوق البنفسجية' },
            { value: '7', label: 'إمارات مغطاة' },
            { value: '15 سنة', label: 'ضمان القماش المتاح' },
        ],
        whyTitle: 'لماذا تغطية الممشيات؟',
        whyPoints: [
            'يربط المباني والبوابات ومواقف السيارات والمرافق دون انقطاع في تغطية الظل',
            'تصميم معياري قابل للتمديد وإعادة التهيئة مع تطور الموقع',
            'بحور حرة تصل إلى 50 متراً عرضاً دون أعمدة داخلية تعيق حركة المشاة',
            'مستخدمة في مدارس ومستشفيات وفنادق ومراكز تسوق ومجمعات سكنية في الإمارات',
        ],
        typesTitle: 'أنواع هياكل مظلات الممشى',
        types: [
            {
                title: 'تغطية ممشى بإطار مسطح',
                body: 'هيكل فولاذي مع لوح سقف من HDPE أو بولي كربونات. النوع الأكثر شيوعاً لممرات المدارس والروابط بين المباني ومداخل مواقف السيارات. خيارات مقاومة كاملة للطقس متاحة.',
            },
            {
                title: 'مظلة ممشى كابولية',
                body: 'هيكل بعمود أحادي الجانب يظلل مسار المشاة المحاذي لمبنى أو سياج. مثالية حيث تعيق الأعمدة الثنائية حركة المشاة أو المركبات.',
            },
            {
                title: 'شراع ممشى شدّ',
                body: 'أشرعة HDPE متداخلة تشكّل مساراً مظللاً متواصلاً. تكلفة أقل من الهياكل الإطارية، مظهر عصري، شائع في ممرات المنتجعات الفندقية والمجمعات السكنية الفاخرة.',
            },
            {
                title: 'ممشى مسقوف ببولي كربونات',
                body: 'سقف من ألواح بولي كربونات صلبة على هيكل فولاذي — مقاومة كاملة للطقس. مستخدم للروابط الراقية في المدارس والمستشفيات وتوصيلات مراكز التسوق ومسارات استقبال كبار الزوار.',
            },
        ],
        faqTitle: 'الأسئلة الشائعة حول مظلات الممشى',
        faqs: [
            {
                q: 'كم تكلفة مظلة ممشى مسقوفة في الإمارات؟',
                a: 'تعتمد الأسعار على العرض والطول والمادة. ممشيات HDPE بإطار مسطح تبدأ من 350–600 درهم للمتر الطولي. الممشيات المسقوفة بالبولي كربونات تبدأ من 600–1,000 درهم للمتر الطولي. تواصل مع تنت ناو للحصول على مسح موقعي مجاني وعرض سعر شامل.',
            },
            {
                q: 'هل تتطلب مظلات الممشى تصاريح بلدية في الإمارات؟',
                a: 'نعم. الهياكل الدائمة المسقوفة تستلزم تصاريح من الجهة المختصة في الإمارة (بلدية دبي، بلدية أبوظبي، دائرة التنمية الاقتصادية الشارقة، وغيرها). تنت ناو تتولى جميع طلبات التصاريح كجزء من المشروع.',
            },
            {
                q: 'ما العرض المعياري لمظلة ممشى المشاة؟',
                a: 'الممشيات المعتادة للمشاة عرضها 2–4 أمتار. حين يحتاج الممشى لاستيعاب مركبات الطوارئ أو العربات، يُستخدم عرض 4–6 أمتار. الأعراض المخصصة متاحة.',
            },
            {
                q: 'هل يمكن تركيب مظلات الممشى في المدارس؟',
                a: 'نعم. ممشيات المدارس من أكثر تطبيقاتنا شيوعاً في الإمارات. لدينا خبرة واسعة بمتطلبات وزارة التربية والتعليم، وقد ركبنا ممرات مسقوفة في مدارس في دبي وأبوظبي والشارقة وسائر الإمارات.',
            },
            {
                q: 'كم يستغرق تركيب مظلة الممشى؟',
                a: 'قسم الممشى بطول 50 متراً يستغرق عادةً 2–4 أيام حسب ظروف الأساس. المشاريع الكبيرة للمدارس والمستشفيات تُبرمج ببرنامج إنشاء مفصّل.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني لمظلة الممشى',
        ctaBody:
            'أخبرنا بموقعك وأبعاد الممشى. سنزور الموقع ونقيس ونقدم لك عرض سعر مفصلاً — دون أي التزام.',
        ctaButton: 'راسلنا عبر واتساب الآن',
    },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function WalkwayShadesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = content[locale] ?? content['en'];
    const pageUrl = `https://www.tentnow.ae/${locale}/services/walkway-shades`;
    const isRtl = locale === 'ar';

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="Walkway & Pedestrian Shade Structures UAE"
                description="Covered walkway and pedestrian shade solutions for schools, hospitals, housing developments, and commercial sites across all UAE emirates. Municipality permits included."
                url={pageUrl}
                image="https://www.tentnow.ae/images/shades/walkway-shade-structures-uae.jpg"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'مظلات الممشى' : 'Walkway Shades', href: '/services/walkway-shades' },
                ]}
            />

            {/* ── Hero ───────────────────────────────────────────────────────────── */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/shades/walkway-shade-structures-uae.jpg"
                        alt="Walkway shade structures UAE — covered pedestrian paths"
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

            {/* ── Why Section ────────────────────────────────────────────────────── */}
            <section className="container-luxury py-24 border-t border-[#1a212e]">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-6">{c.whyTitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {c.whyPoints.map((point, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all"
                        >
                            <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={22} />
                            <p className="text-[#9da6b9] text-sm leading-relaxed">{point}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Types ─────────────────────────────────────────────────────────── */}
            <section className="py-24 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
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
