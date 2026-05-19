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
            ? 'مظلات المسابح في الإمارات | تظليل حمامات السباحة | تنت ناو'
            : 'Pool Shade Structures UAE | Swimming Pool Canopies | Tent Now',
        description: isAr
            ? 'مظلات المسابح في الإمارات — أشرعة شد وهياكل بولي كربونات وبرجولات لتظليل حمامات السباحة في الفلل والفنادق والمجمعات السكنية. حماية 95% من الأشعة فوق البنفسجية. تصاريح بلدية مشمولة.'
            : 'Pool shade structures across UAE — tensile sail canopies, polycarbonate covers, and pergola shade for villa, hotel, and community swimming pools. 95% UV protection. Municipality permits included. Free site survey.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/pool-shades`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/pool-shades',
                'ar': 'https://www.tentnow.ae/ar/services/pool-shades',
                'x-default': 'https://www.tentnow.ae/en/services/pool-shades',
            },
        },
        openGraph: {
            title: isAr
                ? 'مظلات المسابح في الإمارات | تنت ناو'
                : 'Pool Shade Structures UAE | Tent Now',
            description: isAr
                ? 'مظلات مسابح السباحة للفلل والفنادق والمجمعات السكنية في الإمارات — أشرعة شد وبولي كربونات وبرجولات.'
                : 'Swimming pool shade structures for villas, hotels, and residential compounds across UAE — tensile sails, polycarbonate, and pergola canopies.',
            images: [{ url: 'https://www.tentnow.ae/images/shades/pool-shade-uae.jpg' }],
        },
    };
}

interface PoolShadeContent {
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

const content: Record<string, PoolShadeContent> = {
    en: {
        heroLabel: 'UAE Pool Shade Specialists',
        heroTitle: 'Pool & Swimming Pool Shade Structures UAE',
        heroBody:
            'Shield your pool area from the UAE summer sun. Tensile sail canopies, polycarbonate covers, and bespoke pergola shading for villa, hotel, and community swimming pools — 95% UV protection, engineered for 50°C+ heat.',
        ctaPrimary: 'WhatsApp for Pool Shade Quote',
        ctaSecondary: 'Request a Site Survey',
        stats: [
            { value: '95%', label: 'UV Blockage' },
            { value: '50°C+', label: 'Heat Engineered For' },
            { value: '7', label: 'Emirates Covered' },
            { value: '15 yr', label: 'Fabric Warranty Available' },
        ],
        whyTitle: 'Why Shade Your Pool Area?',
        whyPoints: [
            "UAE pool decks reach 70°C+ surface temperature in summer — pool shade reduces deck heat by up to 30°C, making the area usable throughout the day",
            '95% UV blockage protects swimmers and sunbathers during extended outdoor time',
            'Pool water stays cooler under shade, reducing evaporation and chemical consumption',
            'Extends the usable season — shaded pool areas remain comfortable from 8am to sunset April through October',
        ],
        typesTitle: 'Types of Pool Shade Structures',
        types: [
            {
                title: 'Tensile Sail Pool Shade',
                body: 'Stretched HDPE shade sails anchored to stainless steel posts around the pool perimeter. The most popular choice for villa and resort pools — elegant, modern aesthetic, available in a wide range of colours. Can be configured as one large sail or multiple overlapping panels.',
            },
            {
                title: 'Polycarbonate Pool Canopy',
                body: 'Rigid polycarbonate panels on a powder-coated steel frame provide full weatherproof coverage — ideal for hotel pool decks and residential compounds where complete rain protection is required alongside UV shading. Light-transmitting panels maintain an open feel.',
            },
            {
                title: 'Pergola Pool Shade',
                body: 'Aluminium or steel pergola frame with HDPE louvre blades or fabric inserts. Provides partial shade with a premium architectural finish — popular for luxury villa pool areas and five-star resort pool decks where aesthetics are a priority.',
            },
            {
                title: 'Cantilever Pool Shade',
                body: 'Single-post cantilever structure that shades the pool deck without any posts in the water or at the pool edge. Ideal for tight pool surrounds or where a post-free deck edge is required for safety and aesthetics.',
            },
        ],
        faqTitle: 'Pool Shade FAQs',
        faqs: [
            {
                q: 'How much does a pool shade structure cost in UAE?',
                a: 'A shade sail for a standard villa pool (5×10 m) typically costs AED 4,000–12,000. Larger polycarbonate canopies for hotel or community pools range from AED 25,000–150,000 depending on size, material, and structural complexity. Contact Tent Now for a free site survey and itemised quote.',
            },
            {
                q: 'Do pool shade structures require a municipality permit in UAE?',
                a: 'Yes. Permanent pool shade structures require approval from the relevant emirate authority — Dubai Municipality, Abu Dhabi DM, Sharjah Municipality, etc. Tent Now handles all permit applications as part of the project.',
            },
            {
                q: 'Can a pool shade sail withstand UAE wind speeds?',
                a: 'Yes. All Tent Now pool shade sails are engineered to UAE wind load requirements. HDPE fabric shade cloth is perforated to allow wind pass-through, reducing load on anchor points. Stainless steel turnbuckles allow tension adjustment during seasonal storms.',
            },
            {
                q: 'What is the best pool shade material for UAE heat?',
                a: 'HDPE shade cloth (95% UV blockage) is the most popular for residential pools — lightweight, colour-stable, and UV-resistant. Polycarbonate is preferred for hotel and commercial pools where full weather protection is required. We can advise based on your specific pool layout.',
            },
            {
                q: 'Can you install pool shades over an existing pool without draining it?',
                a: 'Yes. Pool shade anchor posts are installed around the pool perimeter or on the existing deck — no need to drain or close the pool during installation. Most residential pool shade installations are completed in one day.',
            },
            {
                q: 'Which UAE areas do you serve for pool shade installation?',
                a: 'All seven emirates — Dubai (Jumeirah, Palm, Dubai Hills, Arabian Ranches), Abu Dhabi (Khalifa City, Yas Island, Saadiyat), Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.',
            },
        ],
        ctaTitle: 'Get a Free Pool Shade Survey',
        ctaBody: "Send us your pool dimensions and location. We'll visit, measure, and provide a full itemised quote — no obligation.",
        ctaButton: 'WhatsApp Us Now',
    },

    ar: {
        heroLabel: 'متخصصون في مظلات المسابح بالإمارات',
        heroTitle: 'مظلات المسابح وحمامات السباحة في الإمارات',
        heroBody:
            'احمِ منطقة مسبحك من حرارة صيف الإمارات. أشرعة شد وأغطية بولي كربونات وبرجولات مخصصة لتظليل مسابح الفلل والفنادق والمجمعات السكنية — حماية 95% من الأشعة فوق البنفسجية، مصممة هندسياً لتحمّل حرارة تتجاوز 50°م.',
        ctaPrimary: 'واتساب للحصول على عرض سعر',
        ctaSecondary: 'طلب مسح موقعي',
        stats: [
            { value: '95%', label: 'حجب الأشعة فوق البنفسجية' },
            { value: '50°م+', label: 'مصممة لتحمل الحرارة' },
            { value: '7', label: 'إمارات مغطاة' },
            { value: '15 سنة', label: 'ضمان القماش المتاح' },
        ],
        whyTitle: 'لماذا تظليل منطقة المسبح؟',
        whyPoints: [
            'أسطح مسابح الإمارات تصل إلى 70°م صيفاً — المظلة تخفض حرارة السطح بما يصل إلى 30°م، مما يجعل المنطقة صالحة للاستخدام طوال اليوم',
            'حجب 95% من الأشعة فوق البنفسجية يحمي السبّاحين والمستجمين خلال الوقت الطويل في الهواء الطلق',
            'تبقى مياه المسبح أكثر برودة تحت الظل، مما يقلل التبخر واستهلاك المواد الكيميائية',
            'تمديد موسم الاستخدام — مناطق المسابح المظللة تبقى مريحة من الثامنة صباحاً حتى الغروب من أبريل إلى أكتوبر',
        ],
        typesTitle: 'أنواع هياكل مظلات المسابح',
        types: [
            {
                title: 'شراع مسبح HDPE',
                body: 'أشرعة ظل HDPE مشدودة على أعمدة من الفولاذ المقاوم للصدأ حول محيط المسبح. الخيار الأكثر شعبية لمسابح الفلل والمنتجعات — مظهر أنيق وعصري بألوان متنوعة. يمكن تركيبها شراعاً واحداً كبيراً أو ألواحاً متداخلة متعددة.',
            },
            {
                title: 'مظلة بولي كربونات للمسبح',
                body: 'ألواح بولي كربونات صلبة على هيكل فولاذي مطلي تُوفر تغطية كاملة مقاومة للطقس — مثالية لأسطح مسابح الفنادق والمجمعات السكنية التي تتطلب حماية من المطر مع التظليل. الألواح شبه الشفافة تحافظ على الإحساس بالانفتاح.',
            },
            {
                title: 'برجولة مظلة المسبح',
                body: 'هيكل برجولة من الألمنيوم أو الفولاذ مع شرائح HDPE أو إدخالات قماشية. يوفر ظلاً جزئياً بتشطيب معماري راقٍ — شائع في مناطق مسابح الفلل الفاخرة وأسطح مسابح المنتجعات خمسة النجوم حيث الجماليات أولوية.',
            },
            {
                title: 'مظلة مسبح كابولية',
                body: 'هيكل كابولي بعمود واحد يظلل حافة المسبح دون أي أعمدة في الماء أو على حافة البركة. مثالية للمسابح ذات المحيط الضيق أو حيث تُشترط حافة خالية من الأعمدة لأسباب السلامة والجماليات.',
            },
        ],
        faqTitle: 'الأسئلة الشائعة حول مظلات المسابح',
        faqs: [
            {
                q: 'كم تكلفة هيكل مظلة مسبح في الإمارات؟',
                a: 'شراع مسبح فيلا قياسي (5×10 م) يتراوح سعره عادةً بين 4,000–12,000 درهم. المظلات الكبيرة للفنادق أو مسابح المجمعات تتراوح بين 25,000–150,000 درهم حسب الحجم والمواد والتعقيد الإنشائي. تواصل مع تنت ناو للحصول على مسح موقعي مجاني وعرض سعر مفصّل.',
            },
            {
                q: 'هل تتطلب مظلات المسابح تصريح بلدية في الإمارات؟',
                a: 'نعم. هياكل تظليل المسابح الدائمة تستلزم موافقة الجهة المختصة في الإمارة — بلدية دبي، بلدية أبوظبي، بلدية الشارقة، وغيرها. تنت ناو تتولى جميع طلبات التصاريح كجزء من المشروع.',
            },
            {
                q: 'هل تتحمل أشرعة مظلة المسبح سرعات الرياح في الإمارات؟',
                a: 'نعم. جميع أشرعة مسابح تنت ناو مصممة وفق متطلبات الحمل الريحي الإماراتية. قماش HDPE مُثقَّب للسماح بمرور الرياح، مما يقلل الحمل على نقاط التثبيت. مشابك الفولاذ المقاوم للصدأ تتيح ضبط الشد خلال العواصف الموسمية.',
            },
            {
                q: 'ما أفضل مادة لمظلة مسبح في حرارة الإمارات؟',
                a: 'قماش HDPE (95% حجب للأشعة فوق البنفسجية) هو الأشهر للمسابح السكنية — خفيف وثابت اللون ومقاوم للأشعة. البولي كربونات مفضل للمسابح الفندقية والتجارية حيث تكون الحماية الكاملة من الطقس ضرورة. نقدم نصيحتنا بناءً على تخطيط مسبحك المحدد.',
            },
            {
                q: 'هل يمكن تركيب مظلة المسبح فوق مسبح موجود دون تفريغه؟',
                a: 'نعم. تُركَّب أعمدة تثبيت المظلة حول محيط المسبح أو على السطح الموجود — لا حاجة لتفريغ المسبح أو إغلاقه أثناء التركيب. معظم تركيبات مظلات المسابح السكنية تُنجز في يوم واحد.',
            },
            {
                q: 'ما مناطق الإمارات التي تخدمونها لتركيب مظلات المسابح؟',
                a: 'جميع الإمارات السبع — دبي (جميرا، النخلة، دبي هيلز، الرانش العربي)، أبوظبي (مدينة خليفة، جزيرة ياس، السعديات)، الشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني لمظلة المسبح',
        ctaBody: 'أرسل لنا أبعاد مسبحك وموقعك. سنزور الموقع ونقيس ونقدم لك عرض سعر مفصلاً — دون أي التزام.',
        ctaButton: 'راسلنا عبر واتساب الآن',
    },
};

export default async function PoolShadesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = content[locale] ?? content['en'];
    const pageUrl = `https://www.tentnow.ae/${locale}/services/pool-shades`;
    const isRtl = locale === 'ar';

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="Pool & Swimming Pool Shade Structures UAE"
                description="Swimming pool shade structures for villas, hotels, and residential compounds across all UAE emirates — tensile sail canopies, polycarbonate covers, and pergola shading. 95% UV protection."
                url={pageUrl}
                image="https://www.tentnow.ae/images/shades/pool-shade-uae.jpg"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'مظلات المسابح' : 'Pool Shades', href: '/services/pool-shades' },
                ]}
            />

            {/* Hero */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/shades/pool-shade-uae.jpg"
                        alt="Pool shade structures UAE — swimming pool canopies for villas and hotels"
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
