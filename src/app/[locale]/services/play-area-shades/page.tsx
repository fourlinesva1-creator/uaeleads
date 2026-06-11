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
            ? 'مظلات مناطق اللعب وملاعب الأطفال في الإمارات | تنت ناو'
            : "Play Area & Playground Shade Structures UAE | Children's Shading | Tent Now",
        description: isAr
            ? 'مظلات مناطق اللعب وملاعب الأطفال في الإمارات — حماية 95% من الأشعة فوق البنفسجية لمعدات اللعب والمناطق المدرسية الخارجية. أشرعة HDPE وهياكل إطارية. تصاريح بلدية مشمولة.'
            : "Playground and play area shade structures across UAE — 95% UV protection for children's play equipment, school outdoor areas, and residential play zones. HDPE shade sails and frame canopies. Municipality permits included.",
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/play-area-shades`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/play-area-shades',
                'ar': 'https://www.tentnow.ae/ar/services/play-area-shades',
                'x-default': 'https://www.tentnow.ae/en/services/play-area-shades',
            },
        },
        openGraph: {
            title: isAr
                ? 'مظلات مناطق اللعب وملاعب الأطفال في الإمارات | تنت ناو'
                : "Play Area & Playground Shade Structures UAE | Tent Now",
            description: isAr
                ? 'حماية 95% من الأشعة فوق البنفسجية لمناطق اللعب والملاعب في الإمارات — مدارس وحضانات وفنادق ومجمعات سكنية.'
                : "95% UV protection for children's play areas across UAE — schools, nurseries, hotels, and residential compounds.",
            images: [{ url: 'https://www.tentnow.ae/images/shades/play-area-shade-uae.jpg' }],
        },
    };
}

// ─── Content ────────────────────────────────────────────────────────────────

interface PlayAreaContent {
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

const content: Record<string, PlayAreaContent> = {
    en: {
        heroLabel: 'UAE Play Area Shade Specialists',
        heroTitle: 'Play Area & Playground Shade Structures UAE',
        heroBody:
            "95% UV protection for children's outdoor play — school playgrounds, residential play zones, nurseries, and public parks across all UAE emirates.",
        ctaPrimary: 'WhatsApp for Playground Quote',
        ctaSecondary: 'Request a Site Survey',
        stats: [
            { value: '95%', label: 'UV Blockage' },
            { value: '7', label: 'Emirates Covered' },
            { value: '15 yr', label: 'Fabric Warranty Available' },
            { value: '100%', label: 'Safe Non-Toxic Materials' },
        ],
        whyTitle: 'Why Shade Your Play Area?',
        whyPoints: [
            '95% UV protection — HDPE shade cloth blocks peak-hour UAE sun during outdoor play',
            "Safe, non-toxic materials — shade fabric and frame finishes meet children's play area safety standards",
            'Installed over existing play equipment without disrupting layout',
            "Popular in schools, nurseries, hotel kids' clubs, residential compounds, and public parks",
        ],
        typesTitle: 'Types of Play Area Shade Structures',
        types: [
            {
                title: 'HDPE Shade Sail',
                body: "The most popular choice for residential play areas and hotel kids' clubs. Stretched between anchor posts in triangular or square configurations. Bright colour options, easy to customise to fit existing equipment layouts.",
            },
            {
                title: 'Hip/Pyramid Frame Shade',
                body: 'Steel frame with HDPE fabric top in a hip or pyramid profile. Provides 360° shade coverage over a defined zone. Common for school playgrounds and nursery outdoor areas where a defined covered zone is needed.',
            },
            {
                title: 'Flat-Frame Play Shade',
                body: 'Steel pergola-style frame with HDPE or polycarbonate roof covering the entire play equipment footprint. The most comprehensive coverage option — protects equipment and children from direct sun at all angles.',
            },
            {
                title: 'Bespoke Multi-Sail Design',
                body: 'Multiple overlapping sail shades in contrasting colours creating a playful aesthetic. Popular for hotel resort play zones, premium residential developments, and themed playground areas.',
            },
        ],
        faqTitle: 'Play Area Shade FAQs',
        faqs: [
            {
                q: 'How much does a playground shade cost in UAE?',
                a: 'Play area shade pricing depends on size, structure type, and materials. Contact us for a free site survey and customised quotation.',
            },
            {
                q: 'What UV protection do play area shades provide?',
                a: "Tent Now's HDPE shade cloth provides 95% UV blockage. This significantly reduces UV Index exposure for children during outdoor play, which is critical in the UAE between April and October.",
            },
            {
                q: 'Can play area shades be installed over existing playground equipment?',
                a: 'Yes. We design shade structures around existing equipment — no need to remove or relocate play equipment. Our engineer surveys the site and designs a structure that clears equipment safely.',
            },
            {
                q: 'Are play area shades safe for children?',
                a: 'Yes. All materials used meet international safety standards. Frame edges are capped, fabric is non-toxic, and anchor systems are designed to prevent trip hazards. We provide safety documentation on request.',
            },
            {
                q: 'Which areas in UAE do you cover for playground shading?',
                a: 'We install play area shades across all seven UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. No location surcharge for work within the UAE.',
            },
        ],
        ctaTitle: 'Get a Free Play Area Shade Survey',
        ctaBody:
            "Tell us your site and play area dimensions. We'll visit, measure up, and provide a full itemised quote — no obligation.",
        ctaButton: 'WhatsApp Us Now',
    },

    ar: {
        heroLabel: 'متخصصون في مظلات مناطق اللعب بالإمارات',
        heroTitle: 'مظلات مناطق اللعب وملاعب الأطفال في الإمارات',
        heroBody:
            'حماية 95% من الأشعة فوق البنفسجية للأطفال أثناء اللعب في الهواء الطلق — ملاعب المدارس ومناطق اللعب السكنية والحضانات والحدائق العامة في جميع إمارات الدولة.',
        ctaPrimary: 'واتساب للحصول على عرض سعر',
        ctaSecondary: 'طلب مسح موقعي',
        stats: [
            { value: '95%', label: 'حجب الأشعة فوق البنفسجية' },
            { value: '7', label: 'إمارات مغطاة' },
            { value: '15 سنة', label: 'ضمان القماش المتاح' },
            { value: '100%', label: 'مواد آمنة وغير سامة' },
        ],
        whyTitle: 'لماذا تظليل منطقة اللعب؟',
        whyPoints: [
            'حماية 95% من الأشعة فوق البنفسجية — قماش HDPE يحجب أشعة الشمس في أشد ساعات النهار حرارة',
            'مواد آمنة وغير سامة — قماش المظلة وتشطيبات الإطارات تستوفي معايير سلامة مناطق اللعب للأطفال',
            'يُركَّب فوق معدات اللعب الموجودة دون الحاجة لإعادة ترتيبها',
            'شائع في المدارس والحضانات ونوادي أطفال الفنادق والمجمعات السكنية والحدائق العامة',
        ],
        typesTitle: 'أنواع هياكل مظلات مناطق اللعب',
        types: [
            {
                title: 'شراع ظل HDPE',
                body: 'الخيار الأكثر شعبية لمناطق اللعب السكنية ونوادي أطفال الفنادق. يُشدّ بين أعمدة تثبيت في أشكال مثلثة أو مربعة. خيارات ألوان زاهية وسهل التخصيص لتلاءم تخطيطات المعدات الموجودة.',
            },
            {
                title: 'مظلة إطارية هرمية / خيمية',
                body: 'هيكل فولاذي بغطاء قماشي HDPE بشكل هرمي أو ذو أحجبة. يوفر تغطية ظل 360° فوق منطقة محددة. شائع في ملاعب المدارس والحضانات حيث تُحتاج منطقة مسقوفة محددة.',
            },
            {
                title: 'مظلة ملعب بإطار مسطح',
                body: 'هيكل على غرار البرجولة بسقف HDPE أو بولي كربونات يغطي كامل مساحة معدات اللعب. الخيار الأشمل للتغطية — يحمي المعدات والأطفال من الشمس المباشرة من جميع الزوايا.',
            },
            {
                title: 'تصميم متعدد الأشرعة المخصص',
                body: 'أشرعة ظل متعددة ومتداخلة بألوان متناسقة تمنح مظهراً مرحاً وجذاباً. شائع في مناطق اللعب بمنتجعات الفنادق والمشاريع السكنية الراقية والملاعب المصممة بطابع خاص.',
            },
        ],
        faqTitle: 'الأسئلة الشائعة حول مظلات مناطق اللعب',
        faqs: [
            {
                q: 'كم تكلفة مظلة ملعب أطفال في الإمارات؟',
                a: 'تكلفة مظلات مناطق اللعب تعتمد على الحجم ونوع الهيكل والمواد. تواصل معنا للحصول على مسح موقعي مجاني وعرض سعر مخصص.',
            },
            {
                q: 'ما مستوى الحماية من الأشعة فوق البنفسجية التي توفرها مظلات مناطق اللعب؟',
                a: 'قماش HDPE من تنت ناو يوفر حجباً بنسبة 95% من الأشعة فوق البنفسجية، مما يقلل بشكل ملحوظ من تعرض الأطفال للأشعة أثناء اللعب، وهو أمر بالغ الأهمية في الإمارات خلال الفترة من أبريل إلى أكتوبر.',
            },
            {
                q: 'هل يمكن تركيب مظلات مناطق اللعب فوق معدات الملعب الموجودة؟',
                a: 'نعم. نصمم هياكل الظلال حول المعدات الموجودة دون الحاجة لإزالتها أو نقلها. يزور مهندسنا الموقع ويصمم هيكلاً يعلو المعدات بأمان.',
            },
            {
                q: 'هل مظلات مناطق اللعب آمنة للأطفال؟',
                a: 'نعم. جميع المواد المستخدمة تستوفي المعايير الدولية للسلامة. حواف الإطارات مغطاة، والقماش غير سام، وأنظمة التثبيت مصممة للحد من مخاطر التعثر. نوفر وثائق السلامة عند الطلب.',
            },
            {
                q: 'ما المناطق في الإمارات التي تغطونها لتظليل الملاعب؟',
                a: 'نركّب مظلات مناطق اللعب في جميع الإمارات السبع — دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين. لا رسوم إضافية على الموقع في أي مكان داخل الإمارات.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني لمظلة منطقة اللعب',
        ctaBody:
            'أخبرنا بموقعك وأبعاد منطقة اللعب. سنزور الموقع ونقيس ونقدم لك عرض سعر مفصلاً — دون أي التزام.',
        ctaButton: 'راسلنا عبر واتساب الآن',
    },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function PlayAreaShadesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = content[locale] ?? content['en'];
    const pageUrl = `https://www.tentnow.ae/${locale}/services/play-area-shades`;
    const isRtl = locale === 'ar';

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="Play Area & Playground Shade Structures UAE"
                description="95% UV protection play area and playground shade structures for schools, nurseries, hotel kids' clubs, residential compounds, and public parks across all UAE emirates."
                url={pageUrl}
                image="https://www.tentnow.ae/images/shades/play-area-shade-uae.jpg"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'مظلات مناطق اللعب' : 'Play Area Shades', href: '/services/play-area-shades' },
                ]}
            />

            {/* ── Hero ───────────────────────────────────────────────────────────── */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/shades/play-area-shade-uae.jpg"
                        alt="Play area shade structures UAE — playground canopies for children"
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
