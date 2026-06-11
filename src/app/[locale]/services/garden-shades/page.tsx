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
            ? 'مظلات الحدائق والفراغات الخارجية في الإمارات | برجولات ومظلات فِناء | تنت ناو'
            : 'Garden & Outdoor Shade Structures UAE | Pergolas & Patio Canopies | Tent Now',
        description: isAr
            ? 'مظلات الحدائق والفراغات الخارجية في الإمارات — برجولات وأشرعة ظل ومظلات فِناء للحدائق الخاصة وتناول الطعام الخارجي والمناطق المُشجَّرة. حماية 95% من الأشعة فوق البنفسجية. تصاريح بلدية مشمولة.'
            : 'Garden and outdoor shade structures across UAE — pergolas, shade sails, and patio canopies for villa gardens, outdoor dining areas, and landscaped spaces. 95% UV protection. Municipality permits included. Free site survey.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/garden-shades`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/garden-shades',
                'ar': 'https://www.tentnow.ae/ar/services/garden-shades',
                'x-default': 'https://www.tentnow.ae/en/services/garden-shades',
            },
        },
        openGraph: {
            title: isAr
                ? 'مظلات الحدائق والفراغات الخارجية في الإمارات | تنت ناو'
                : 'Garden & Outdoor Shade Structures UAE | Tent Now',
            description: isAr
                ? 'برجولات وأشرعة ظل ومظلات فِناء للحدائق الخاصة ومناطق الطعام الخارجية والمناطق المُشجَّرة في الإمارات.'
                : 'Pergolas, shade sails, and patio canopies for villa gardens, outdoor dining, and landscaped areas across UAE.',
            images: [{ url: 'https://www.tentnow.ae/images/shades/garden-shade-uae.jpg' }],
        },
    };
}

interface GardenShadeContent {
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

const content: Record<string, GardenShadeContent> = {
    en: {
        heroLabel: 'UAE Garden Shade Specialists',
        heroTitle: 'Garden & Outdoor Shade Structures UAE',
        heroBody:
            'Transform your outdoor space into a year-round retreat. Pergolas, shade sails, and patio canopies for villa gardens, rooftop terraces, outdoor dining areas, and landscaped courtyards — engineered for UAE heat, designed to complement your property.',
        ctaPrimary: 'WhatsApp for Garden Shade Quote',
        ctaSecondary: 'Request a Site Survey',
        stats: [
            { value: '95%', label: 'UV Blockage' },
            { value: '50°C+', label: 'Heat Engineered For' },
            { value: '7', label: 'Emirates Covered' },
            { value: '15 yr', label: 'Fabric Warranty Available' },
        ],
        whyTitle: 'Why Shade Your Garden?',
        whyPoints: [
            'UAE gardens are unusable for most of the day from April to October without shade — the right structure opens your outdoor space year-round',
            'Premium pergola and sail shade designs add architectural character and increase property value',
            'Shaded outdoor dining and majlis seating becomes the heart of villa entertaining',
            'Protects landscaping, furniture, and flooring from UV degradation — extends the life of your outdoor investment',
        ],
        typesTitle: 'Types of Garden Shade Structures',
        types: [
            {
                title: 'Aluminium Pergola',
                body: 'Powder-coated aluminium frame with HDPE louvre blades, polycarbonate panels, or fabric inserts. The premium choice for villa gardens and rooftop terraces — maintenance-free, rust-proof, and available in a wide range of RAL colours to complement your property finish.',
            },
            {
                title: 'Shade Sail Garden Canopy',
                body: 'HDPE shade sails stretched between anchor posts or wall-mounted brackets. A popular, cost-effective option for patio areas, outdoor seating, and BBQ zones. Available in multiple colours and shapes — triangular, square, and rectangular configurations.',
            },
            {
                title: 'Tensile Patio Canopy',
                body: 'Custom tensile fabric canopy on a steel or aluminium frame — engineered for larger garden and terrace areas. Provides continuous shade coverage with a modern tensile aesthetic. Common for hotel outdoor F&B areas, resort pool terraces, and premium residential gardens.',
            },
            {
                title: 'Polycarbonate Patio Cover',
                body: 'Clear or tinted polycarbonate panels on a steel frame — fully weatherproof and rain-protecting. Ideal for covered outdoor dining areas, terrace extensions, and year-round outdoor rooms. Retains natural light while blocking UV and keeping rain out.',
            },
        ],
        faqTitle: 'Garden Shade FAQs',
        faqs: [
            {
                q: 'How much does a garden pergola or shade sail cost in UAE?',
                a: 'Garden shade structure pricing depends on size, material, and complexity. Contact Tent Now for a free site survey and itemised quote tailored to your garden or patio.',
            },
            {
                q: 'Do garden shade structures require a permit in UAE?',
                a: 'Permanent structures including pergolas and fixed canopies require approval from the relevant emirate authority. Shade sails attached to temporary posts may not require a permit in some emirates. Tent Now advises on permit requirements for your specific structure and location.',
            },
            {
                q: 'What is the best shade material for a UAE villa garden?',
                a: 'Aluminium pergola with HDPE louvres is the most popular premium choice — maintenance-free, elegant, and UAE heat resistant. HDPE shade sails offer a more affordable option with a wide colour range. Polycarbonate is preferred where full rain protection is needed alongside UV shading.',
            },
            {
                q: 'Can garden shade structures be installed on rooftop terraces?',
                a: 'Yes. Rooftop terrace shade structures are one of our most popular applications in Dubai and Abu Dhabi high-rise residences. We design structures with ballast anchoring systems that do not penetrate the roof membrane, complying with developer and municipality requirements.',
            },
            {
                q: 'How long does garden shade installation take?',
                a: 'A standard villa patio pergola or shade sail installation typically takes 1–2 days. Larger outdoor dining canopies and terrace structures take 3–5 days. All work is programmed to minimise disruption to your household.',
            },
            {
                q: 'Which UAE areas do you serve for garden shade installation?',
                a: 'All seven emirates — Dubai (Jumeirah, Arabian Ranches, Palm Jumeirah, Dubai Hills), Abu Dhabi (Khalifa City, Mohammed Bin Zayed City, Yas Island), Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.',
            },
        ],
        ctaTitle: 'Get a Free Garden Shade Survey',
        ctaBody: "Tell us your outdoor space and what you'd like to achieve. We'll visit, advise, and provide a full itemised quote — no obligation.",
        ctaButton: 'WhatsApp Us Now',
    },

    ar: {
        heroLabel: 'متخصصون في مظلات الحدائق بالإمارات',
        heroTitle: 'مظلات الحدائق والفراغات الخارجية في الإمارات',
        heroBody:
            'حوّل مساحتك الخارجية إلى ملاذ مريح على مدار العام. برجولات وأشرعة ظل ومظلات فِناء لحدائق الفلل والأسطح المفتوحة ومناطق تناول الطعام الخارجية والباحات المُشجَّرة — مصممة هندسياً لتحمّل حرارة الإمارات، ومنسجمة مع طراز عقارك.',
        ctaPrimary: 'واتساب للحصول على عرض سعر',
        ctaSecondary: 'طلب مسح موقعي',
        stats: [
            { value: '95%', label: 'حجب الأشعة فوق البنفسجية' },
            { value: '50°م+', label: 'مصممة لتحمل الحرارة' },
            { value: '7', label: 'إمارات مغطاة' },
            { value: '15 سنة', label: 'ضمان القماش المتاح' },
        ],
        whyTitle: 'لماذا تظليل الحديقة؟',
        whyPoints: [
            'الحدائق في الإمارات غير صالحة للاستخدام معظم اليوم من أبريل إلى أكتوبر بدون ظل — الهيكل المناسب يفتح مساحتك الخارجية طوال العام',
            'تصاميم البرجولة وأشرعة الظل الراقية تُضفي طابعاً معمارياً مميزاً وترفع من قيمة العقار',
            'منطقة جلوس خارجية مظللة لتناول الطعام والمجلس تصبح مركز الضيافة في الفلل',
            'تحمي الزراعة والأثاث والأرضيات من التدهور بسبب الأشعة فوق البنفسجية — تمديد عمر استثمارك الخارجي',
        ],
        typesTitle: 'أنواع هياكل مظلات الحدائق',
        types: [
            {
                title: 'برجولة ألمنيوم',
                body: 'هيكل من الألمنيوم المطلي بالمسحوق مع شرائح HDPE أو ألواح بولي كربونات أو إدخالات قماشية. الخيار المميز لحدائق الفلل والأسطح المفتوحة — خالٍ من الصيانة ومقاوم للصدأ ومتوفر بمجموعة واسعة من ألوان RAL لمطابقة تشطيب عقارك.',
            },
            {
                title: 'شراع ظل حدائق',
                body: 'أشرعة HDPE مشدودة بين أعمدة تثبيت أو حامل مثبت بالحائط. خيار شعبي وفعّال من حيث التكلفة لمناطق الفِناء والجلوس الخارجي ومناطق الشوي. متوفر بألوان وأشكال متعددة — مثلثة ومربعة ومستطيلة.',
            },
            {
                title: 'مظلة فِناء شد',
                body: 'مظلة قماشية شد مخصصة على هيكل فولاذي أو ألمنيوم — مصممة للحدائق الكبيرة ومناطق الشرفات. توفر تغطية ظل متواصلة بجمالية شدٍّ عصرية. شائعة في مناطق الطعام الخارجية بالفنادق وشرفات مسابح المنتجعات والحدائق السكنية الراقية.',
            },
            {
                title: 'غطاء فِناء بولي كربونات',
                body: 'ألواح بولي كربونات شفافة أو ملونة على هيكل فولاذي — مقاومة كاملة للطقس والمطر. مثالية لمناطق تناول الطعام الخارجية المسقوفة وامتدادات الشرفات والغرف الخارجية على مدار العام. تحتفظ بالضوء الطبيعي مع حجب الأشعة فوق البنفسجية وصد المطر.',
            },
        ],
        faqTitle: 'الأسئلة الشائعة حول مظلات الحدائق',
        faqs: [
            {
                q: 'كم تكلفة برجولة حديقة أو شراع ظل في الإمارات؟',
                a: 'تكلفة مظلات الحدائق تعتمد على الحجم والمواد والتعقيد الإنشائي. تواصل مع تنت ناو للحصول على مسح موقعي مجاني وعرض سعر مفصّل.',
            },
            {
                q: 'هل تتطلب مظلات الحدائق تصريحاً في الإمارات؟',
                a: 'الهياكل الدائمة كالبرجولات والمظلات الثابتة تستلزم موافقة الجهة المختصة في الإمارة. أشرعة الظل المثبتة على أعمدة مؤقتة قد لا تستلزم تصريحاً في بعض الإمارات. تنت ناو تقدم المشورة بشأن متطلبات التصاريح بحسب هيكلك الخاص وموقعه.',
            },
            {
                q: 'ما أفضل مواد التظليل لحديقة فيلا في الإمارات؟',
                a: 'البرجولة الألمنيوم مع شرائح HDPE هي الأكثر شعبية من الناحية الراقية — خالية من الصيانة وأنيقة ومقاومة لحرارة الإمارات. أشرعة HDPE تُقدّم خياراً أوفر بمجموعة ألوان واسعة. البولي كربونات مفضل حيث تكون الحماية الكاملة من المطر ضرورة مع التظليل.',
            },
            {
                q: 'هل يمكن تركيب مظلات الحدائق على أسطح الشقق المفتوحة؟',
                a: 'نعم. هياكل تظليل الأسطح المفتوحة من أكثر تطبيقاتنا شعبية في مساكن الطوابق العالية بدبي وأبوظبي. نصمم هياكل بأنظمة تثبيت بالثقل لا تخترق طبقة عزل السطح، مطابقةً لمتطلبات المطوّرين والبلديات.',
            },
            {
                q: 'كم يستغرق تركيب مظلة الحديقة؟',
                a: 'تركيب برجولة فِناء فيلا قياسية أو شراع ظل يستغرق عادةً 1–2 يومين. مظلات تناول الطعام الخارجية الأكبر وهياكل الشرفات تأخذ 3–5 أيام. يُبرمج كل عمل لتقليل الإزعاج لأسرتك.',
            },
            {
                q: 'ما مناطق الإمارات التي تخدمونها لتركيب مظلات الحدائق؟',
                a: 'جميع الإمارات السبع — دبي (جميرا، الرانش العربي، نخلة جميرا، دبي هيلز)، أبوظبي (مدينة خليفة، مدينة محمد بن زايد، جزيرة ياس)، الشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني لمظلة الحديقة',
        ctaBody: 'أخبرنا بمساحتك الخارجية وما تودّ تحقيقه. سنزور الموقع ونقدم المشورة وعرض سعر مفصلاً — دون أي التزام.',
        ctaButton: 'راسلنا عبر واتساب الآن',
    },
};

export default async function GardenShadesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = content[locale] ?? content['en'];
    const pageUrl = `https://www.tentnow.ae/${locale}/services/garden-shades`;
    const isRtl = locale === 'ar';

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="Garden & Outdoor Shade Structures UAE"
                description="Pergolas, shade sails, and patio canopies for villa gardens, rooftop terraces, outdoor dining, and landscaped areas across all UAE emirates. 95% UV protection. Municipality permits included."
                url={pageUrl}
                image="https://www.tentnow.ae/images/shades/garden-shade-uae.jpg"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'مظلات الحدائق' : 'Garden Shades', href: '/services/garden-shades' },
                ]}
            />

            {/* Hero */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/shades/garden-shade-uae.jpg"
                        alt="Garden shade structures UAE — pergolas and patio canopies for villa gardens"
                        fill
                        priority
                        className="object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>
                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8"><span>{c.heroLabel}</span></div>
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

            {/* Stats */}
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

            {/* Why */}
            <section className="container-luxury py-24">
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

            {/* Types */}
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

            {/* FAQ */}
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

            {/* CTA */}
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
