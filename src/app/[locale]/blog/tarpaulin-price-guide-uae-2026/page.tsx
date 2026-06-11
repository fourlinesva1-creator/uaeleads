import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import PricingNote from '@/components/ui/PricingNote';
import ShareButtons from '@/components/blog/ShareButtons';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'دليل أسعار المشمع في الإمارات 2026: PE مقابل PVC، تقييمات GSM، ودليل الشراء | Tent Now'
        : 'Tarpaulin Price Guide UAE 2026: PE vs PVC, GSM Ratings & What to Buy | Tent Now';

    const description = locale === 'ar'
        ? 'دليل شامل لأسعار المشمع في الإمارات 2026. مقارنة PE مقابل PVC مقابل HDPE، فهم تقييمات GSM، جدول الأسعار الكامل بالدرهم، وكيفية اختيار المشمع الصحيح لمشاريع البناء واللوجستيات والزراعة في الإمارات.'
        : 'Complete UAE tarpaulin buyer\'s guide for 2026. PE vs PVC vs HDPE comparison, GSM rating explained, full AED price table, and how to choose the right tarp for construction, logistics, and agriculture in the UAE.';

    return {
        title,
        description,
        keywords: locale === 'ar'
            ? ['سعر المشمع الإمارات 2026', 'مشمع PE مقابل PVC', 'مشمع بولي إيثيلين دبي', 'شراء مشمع الإمارات', 'مشمع البناء الإمارات', 'أسعار مشمع 200 جرام']
            : ['tarpaulin price UAE 2026', 'PE tarpaulin UAE', 'PVC vs PE tarpaulin UAE', 'buy tarpaulin Dubai', 'tarpaulin cost UAE', '200gsm tarpaulin UAE', 'tarp UAE construction', 'tarpaulin supplier UAE'],
        openGraph: {
            title,
            description,
            images: [{ url: 'https://www.tentnow.ae/images/tarpaulins/tarpaulin-main.png', width: 1200, height: 630, alt: locale === 'ar' ? 'دليل أسعار المشمع الإمارات 2026' : 'Tarpaulin Price Guide UAE 2026' }],
            type: 'article',
            publishedTime: '2026-04-02T08:00:00.000Z',
            authors: ['Tent Now'],
            section: locale === 'ar' ? 'دليل شراء' : 'Buyer\'s Guide',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
            alternateLocale: locale === 'ar' ? ['en_US'] : ['ar_AE'],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://www.tentnow.ae/images/tarpaulins/tarpaulin-main.png'],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/tarpaulin-price-guide-uae-2026`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/tarpaulin-price-guide-uae-2026',
                'ar': 'https://www.tentnow.ae/ar/blog/tarpaulin-price-guide-uae-2026',
                'x-default': 'https://www.tentnow.ae/en/blog/tarpaulin-price-guide-uae-2026',
            },
        },
    };
}

export default function TarpaulinPriceGuideBlogPage() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/tarpaulin-price-guide-uae-2026`;
    const articleTitle = isAr
        ? 'دليل أسعار المشمع في الإمارات 2026: PE مقابل PVC، تقييمات GSM، ودليل الشراء'
        : 'Tarpaulin Price Guide UAE 2026: PE vs PVC, GSM Ratings & What to Buy';

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={isAr
                    ? 'دليل شامل لأسعار المشمع في الإمارات 2026 مع مقارنة المواد وتقييمات GSM وجدول الأسعار.'
                    : 'Complete UAE tarpaulin buyer\'s guide 2026 with material comparison, GSM ratings, and AED price table.'}
                image='/images/tarpaulins/tarpaulin-main.png'
                datePublished='2026-04-02T08:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/tarpaulins/tarpaulin-main.png"
                            alt={isAr ? 'مشمع بولي إيثيلين PE في الإمارات — مواقع البناء والصناعة' : 'PE tarpaulin UAE — construction and industrial sites'}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {isAr ? 'دليل شراء' : "Buyer's Guide"}
                        </span>
                        <span>{isAr ? '2 أبريل 2026' : 'April 2, 2026'}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{isAr ? '10 دقائق قراءة' : '10 min read'}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {articleTitle}
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
                            <Image src="/images/tent-now-logo.gif" alt="Tent Now" fill className="object-cover" />
                        </div>
                        <div className={`text-${isAr ? 'right' : 'left'}`}>
                            <p className="text-white font-bold text-sm">{isAr ? 'فريق Tent Now' : 'Tent Now Team'}</p>
                            <p className="text-text-muted text-xs">{isAr ? 'متخصصو الخيام الصناعية' : 'Industrial Tent Specialists'}</p>
                        </div>
                    </div>
                </header>

                {/* Share */}
                <div className="mb-12 border-y border-border py-4 flex justify-between items-center">
                    <span className="text-text-muted text-sm uppercase tracking-widest">
                        {isAr ? 'شارك هذا الدليل:' : 'Share this guide:'}
                    </span>
                    <ShareButtons url={articleUrl} title={articleTitle} />
                </div>

                <PricingNote locale={isAr ? 'ar' : 'en'} className="mb-8" />

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    {isAr ? (
                        <>
                            {/* ── ARABIC CONTENT ── */}
                            <p>
                                سوق المشمع في الإمارات العربية المتحدة يُقدَّر بما بين <strong>70 و100 مليون دولار أمريكي</strong> — وهو يَنمو. مع 95 مشروع بناء جديد أُطلق في الربع الأول من 2025 وحده، وإضافة أكثر من 66,000 وحدة سكنية في دبي وأبوظبي بحلول 2028، ارتفع الطلب على أغطية الحماية الجيدة بشكل ملحوظ.
                            </p>
                            <p>
                                لكن إذا بحثت عن &quot;مشمع دبي&quot; أو &quot;تارب الإمارات&quot;، ستجد أكثر من 120 مورداً مسجلاً. PE أو PVC؟ 150 جراماً أم 200؟ بكرات أم أوراق؟ هذا الدليل يقطع الضوضاء بمعلومات سوقية حقيقية حتى تتمكن من الشراء بثقة.
                            </p>

                            <hr className="border-border my-10" />

                            <h2>لماذا يشهد سوق المشمع الإماراتي هذا النمو؟</h2>
                            <p>
                                ثلاثة قطاعات تحرك معظم الطلب:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                                {[
                                    { num: '40–50%', label: 'حجم استهلاك قطاع البناء', sub: 'المحرك الأول — 95 مشروع في الربع الأول 2025' },
                                    { num: '25–30%', label: 'اللوجستيات والنقل', sub: 'جبل علي: 14 مليون حاوية سنوياً' },
                                    { num: '10–15%', label: 'الزراعة وأمن الغذاء', sub: 'السوق الإماراتي للبيوت المحمية تجاوز 240 مليون دولار' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-bg-elevated rounded-xl p-5 border border-gold/20 text-center">
                                        <div className="text-2xl font-bold text-gold mb-1">{stat.num}</div>
                                        <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
                                        <div className="text-text-muted text-xs">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>

                            <h2>مقارنة أنواع المشمع: PE مقابل PVC مقابل HDPE مقابل قماش قطني</h2>
                            <p>
                                المادة هي أهم قرار ستتخذه. إليك مقارنة مباشرة بناءً على بيانات السوق الإماراتي:
                            </p>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['المادة', 'العمر الافتراضي', 'نطاق السعر (للم²)', 'الاستخدام الأمثل', 'الوزن'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-right border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['PE (بولي إيثيلين)', '1–2 سنة', '0.40–1.73 دولار', 'البناء، النقل، الاستخدام العام', 'خفيف'],
                                            ['HDPE (PE عالي الكثافة)', '3–5 سنوات', '0.58–2.07 دولار', 'الزراعة، الأحواض، السقالات', 'متوسط'],
                                            ['PVC (بولي فينيل كلوريد)', 'حتى 10 سنوات', '1.73–3.31 دولار', 'أغطية الشاحنات، الخيام الصناعية، البحرية', 'ثقيل'],
                                            ['قماش قطني', '2–5 سنوات', '2.30–5.75 دولار', 'الاستخدام العسكري، الصناعي الثقيل', 'ثقيل'],
                                            ['شبكة/ظل', '3–7 سنوات', '0.35–1.38 دولار', 'الزراعة، مواقف السيارات، الظلة', 'خفيف جداً'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                {row.map((cell, j) => (
                                                    <td key={j} className="px-4 py-3 text-text-muted border-b border-border/50 text-right">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>الخلاصة العملية:</strong> لمواقع البناء قصيرة إلى متوسطة المدة (حتى موسمين)، <strong>PE بوزن 200 جرام</strong> هو القيمة المثلى. للنقل المنتظم على الطرق السريعة، اختر PVC. للزراعة الدائمة أو تبطين الأحواض، اختر HDPE.
                            </p>

                            <h2>دليل تقييمات GSM: ماذا تحتاج؟</h2>
                            <p>
                                GSM (جرامات لكل متر مربع) هو مقياس الوزن والمتانة. يُحدد كمية البولي إيثيلين في الأقمشة وبالتالي سماكته وقوته.
                            </p>

                            <div className="space-y-3 my-8 not-prose">
                                {[
                                    { gsm: '100–140 جرام', tier: 'خفيف', color: 'border-blue-500/40', desc: 'تغطية مؤقتة وحماية قصيرة الأمد. ليس مناسباً للظروف الجوية القاسية في صيف الإمارات.', use: 'الاستخدامات: التخزين المؤقت الداخلي، الحماية قصيرة المدى' },
                                    { gsm: '150–200 جرام', tier: 'متوسط — الأكثر مبيعاً', color: 'border-gold/60', desc: 'القطاع الأعلى حجماً في الإمارات. يوازن بين التكلفة والمتانة للبناء والنقل والاستخدام الصناعي العام. PE200 الخاص بنا يقع في هذه الفئة.', use: 'الاستخدامات: مواقع البناء، تغطية الشاحنات، اللوجستيات، الزراعة العامة' },
                                    { gsm: '250–350 جرام', tier: 'ثقيل', color: 'border-orange-500/40', desc: 'للتطبيقات المطلوبة والتعرض الخارجي طويل الأمد. مقاومة أعلى للتمزق والأحوال الجوية.', use: 'الاستخدامات: التعرض الخارجي الدائم، تغطية المعدات الثقيلة، التطبيقات الصناعية' },
                                    { gsm: '500+ جرام', tier: 'ثقيل جداً / متخصص', color: 'border-red-500/40', desc: 'مواصفات متخصصة للاستخدام العسكري والبحري والبيئات المتطرفة. بالنسبة لمعظم التطبيقات، يكون PVC أكثر ملاءمة في هذا النطاق.', use: 'الاستخدامات: عسكري، بحري، صناعة النفط والغاز' },
                                ].map((item) => (
                                    <div key={item.gsm} className={`p-5 bg-bg-elevated rounded-xl border ${item.color}`}>
                                        <div className="flex items-center justify-between gap-4 mb-2">
                                            <span className="text-white font-bold">{item.gsm}</span>
                                            <span className="text-gold text-xs font-bold uppercase tracking-wider">{item.tier}</span>
                                        </div>
                                        <p className="text-text-muted text-sm mb-1">{item.desc}</p>
                                        <p className="text-gold/70 text-xs font-medium">{item.use}</p>
                                    </div>
                                ))}
                            </div>

                            <h2>دليل الأسعار الكامل: مشمع PE 200 جرام في الإمارات</h2>
                            <p>
                                الأسعار أدناه تقديرية استناداً إلى <strong>بيانات ديسمبر 2025</strong>، بسعر مرجعي <strong>0.21 درهم لكل قدم مربعة</strong> بالإضافة إلى 5% ضريبة قيمة مضافة. <strong>تنبيه مهم: أسعار المشمع مرتبطة بأسواق النفط وتتقلب.</strong> تواصل معنا دائماً للحصول على السعر المؤكد الحالي قبل الطلب.
                            </p>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden min-w-[480px]">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['المقاس (قدم)', 'المقاس (متري)', 'الوزن', 'السعر التقديري (درهم) + 5% VAT'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-right border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['12 × 12 قدم', '3.6 × 3.6 م', '2.59 كجم', '29.81'],
                                            ['12 × 18 قدم', '3.6 × 5.4 م', '3.90 كجم', '44.71'],
                                            ['20 × 20 قدم', '6.0 × 6.0 م', '7.20 كجم', '82.80'],
                                            ['20 × 30 قدم', '6.0 × 9.0 م', '10.80 كجم', '124.20'],
                                            ['30 × 30 قدم', '9.0 × 9.0 م', '16.20 كجم', '186.30'],
                                            ['30 × 40 قدم', '9.0 × 12 م', '21.60 كجم', '248.40'],
                                            ['40 × 60 قدم', '12 × 18 م', '43.20 كجم', '496.80'],
                                            ['60 × 60 قدم', '18 × 18 م', '64.80 كجم', '745.20'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                <td className="px-4 py-3 text-white font-mono border-b border-border/50 text-right">{row[0]}</td>
                                                <td className="px-4 py-3 text-text-muted border-b border-border/50 text-right">{row[1]}</td>
                                                <td className="px-4 py-3 text-text-muted border-b border-border/50 text-right">{row[2]}</td>
                                                <td className="px-4 py-3 text-right border-b border-border/50"><span className="text-gold font-bold font-mono">AED {row[3]}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-text-muted text-xs mt-3 text-right">* أسعار تقديرية بناءً على بيانات ديسمبر 2025. يُضاف 5% VAT على جميع الأسعار. ±5% تسامح في المقاسات النهائية. تواصل معنا للحصول على السعر المؤكد — جميع المقاسات الـ 16 في <Link href="/services/tarpaulins" className="text-gold hover:underline">صفحة منتج المشمع</Link>.</p>
                            </div>

                            <h2>التطبيقات الرئيسية: ماذا يشتري كل قطاع؟</h2>

                            <h3>البناء والبنية التحتية (40–50% من الطلب)</h3>
                            <p>
                                البناء هو أكبر مستهلك للمشمع في الإمارات بفارق كبير. مواقع البناء الإماراتية تعتمد على المشمع لـ: حماية مواد البناء (الإسمنت، الفولاذ، الطوب) من الأمطار والرمال وأشعة UV؛ تغليف السقالات لاحتواء الغبار والأتربة؛ تغطية الهياكل غير المكتملة؛ وتوفير ظل للعمال خلال أشهر الصيف القاسية حين تتجاوز درجات الحرارة 45 درجة مئوية.
                            </p>
                            <p>
                                للبناء في الإمارات، <strong>200 جرام هو الحد الأدنى الموصى به</strong>. إذا كانت المواد ذات قيمة عالية أو التعرض طويل الأمد، فكر في 250 جراماً أو أكثر.
                            </p>

                            <div className="not-prose my-6">
                                <Link
                                    href="/services/storage-tents"
                                    className="block p-5 bg-bg-elevated rounded-xl border border-border hover:border-gold/40 transition-colors group"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-xs text-gold font-bold uppercase tracking-wider mb-1">منتج ذو صلة</p>
                                            <p className="text-white font-bold group-hover:text-gold transition-colors">خيام التخزين الصناعي — للحماية الكاملة لمواقع البناء</p>
                                            <p className="text-text-muted text-sm mt-1">عندما يحتاج موقعك إلى أكثر من مجرد مشمع — هياكل امتداد حر معتمدة من الدفاع المدني لتغطية مساحات واسعة</p>
                                        </div>
                                        <span className="text-gold text-xl shrink-0">←</span>
                                    </div>
                                </Link>
                            </div>

                            <h3>اللوجستيات والنقل (25–30% من الطلب)</h3>
                            <p>
                                يتطلب النقل مشاميع تصمد تحت أحمال الرياح بسرعات طريق سريع — 80 إلى 120 كم/ساعة. <strong>مشمع PE بوزن 200 جرام</strong> مناسب لأحمال خفيفة إلى متوسطة وللتغطية قصيرة إلى متوسطة المدى. لستائر جانبية للشاحنات والاستخدام الدائم، يُفضل PVC المُغلَّف الذي يدوم حتى 10 سنوات مقارنة بـ 1–2 سنة لـ PE.
                            </p>
                            <p>
                                ميناء جبل علي في دبي يتعامل مع أكثر من <strong>14 مليون حاوية سنوياً</strong> — والإمارات منصة إعادة تصدير لأسواق الخليج وأفريقيا. الطلب على أغطية البضائع ثابت على مدار العام.
                            </p>

                            <h3>الزراعة وأمن الغذاء (10–15% من الطلب)</h3>
                            <p>
                                أمن الغذاء الإماراتي أولوية حكومية — استراتيجية أمن الغذاء 2051 تهدف إلى تصنيف الإمارات ضمن أفضل الدول على مؤشر الأمن الغذاء العالمي. تجاوز سوق البيوت المحمية التجارية <strong>240 مليون دولار في 2023</strong> مع نمو مستمر.
                            </p>
                            <p>
                                للزراعة: <strong>HDPE</strong> أفضل من PE القياسي لتبطين الأحواض ومصارف الري. PE بوزن 200 جرام مناسب لتغطية المحاصيل المحصودة، وأغطية الآلات، والحماية المؤقتة. الشبكات الظلية المتخصصة مُستخدمة لفلترة الأشعة UV في البيوت المحمية.
                            </p>

                            <h2>ما الذي يجعل أسعار المشمع تتغير في الإمارات؟</h2>
                            <p>
                                إذا كنت تشتري المشمع بكميات كبيرة أو تستفسر على دفعات منتظمة، يجب أن تفهم لماذا تتغير الأسعار:
                            </p>
                            <ul>
                                <li><strong>أسعار مادة PE الخام</strong> — البولي إيثيلين مشتق من النفط. تؤثر أسواق النفط العالمية مباشرة على تكاليف التصنيع.</li>
                                <li><strong>العوامل الجيوسياسية</strong> — اضطرابات تصدير البولي إيثيلين وإيثيلين جلايكول خلال التوترات الإقليمية أثّرت على سلاسل إمداد الإمارات.</li>
                                <li><strong>أسعار الشحن الدولي</strong> — معظم الخامات ومنتجات PE الجاهزة مستوردة، بشكل أساسي من الصين ومصانع جنوب آسيا.</li>
                                <li><strong>الطلب الموسمي</strong> — أكتوبر–مارس هو موسم الذروة (البناء والفعاليات). الطلب الأعلى يضغط على الأسعار خلال هذه الأشهر.</li>
                            </ul>
                            <p>
                                <strong>التوصية العملية:</strong> دائماً أكد الأسعار قبل الطلب، خاصة للطلبات الكبيرة. لا تثق في أسعار قائمة لم يتم تحديثها مؤخراً.
                            </p>

                            <h2>كيف تختار: الأسئلة الصحيحة للطرح</h2>

                            <div className="space-y-3 my-8 not-prose">
                                {[
                                    { q: 'كم ستبقى في موضعها؟', a: 'أسابيع إلى موسم: PE 200 جرام. سنة+: HDPE. أكثر من سنتين: PVC.' },
                                    { q: 'هل ستتعرض لأحمال رياح (شاحنات، مواقع مكشوفة)؟', a: 'نعم: تأكد من حلقات التثبيت كل 100 سم وحافة مقوّاة — كلاهما قياسي في PE200.' },
                                    { q: 'هل هناك خطر من الحريق؟', a: 'مواقع البناء والنفط والغاز تحتاج نقطة وميض أعلى من 200°م — PE200 يستوفي ذلك.' },
                                    { q: 'ما المساحة المطلوبة؟', a: 'للمساحات الكبيرة (+100م²)، فكر في بكرات (4م×50م) بدلاً من أوراق متعددة.' },
                                    { q: 'هل تحتاج مقاسات مخصصة؟', a: 'اطلب بكرات للقطع حسب المقاس، أو تواصل معنا لمناقشة الخيارات المخصصة.' },
                                ].map((item) => (
                                    <div key={item.q} className="p-5 bg-bg-elevated rounded-xl border border-border">
                                        <p className="text-white font-bold mb-1">← {item.q}</p>
                                        <p className="text-text-muted text-sm">{item.a}</p>
                                    </div>
                                ))}
                            </div>

                            <h2>للمشاريع التي تتجاوز المشمع: خيام التخزين الصناعية</h2>
                            <p>
                                المشمع مثالي للتغطية. لكن عندما يحتاج موقعك إلى مساحة تخزين <strong>مُغلقة وقائمة بذاتها</strong> — سواء 500م² أو 5000م² — فإن الحل يتطلب هيكلاً لا مجرد غطاء.
                            </p>

                            <div className="space-y-3 my-8 not-prose">
                                {[
                                    { title: 'خيام التخزين الصناعي', href: '/services/storage-tents', desc: 'هياكل معتمدة من الدفاع المدني بدون أعمدة داخلية، تُنشر في 3–7 أيام بتوفير 50–70% مقارنة بالبناء الدائم.' },
                                    { title: 'خيام الامتداد الحر', href: '/services/storage-tents/clear-span-tents', desc: 'من 3م إلى 50م+ عرضاً، بدون أعمدة داخلية. مثالية لعمليات الرافعة الشوكية والمستودعات الكبرى.' },
                                    { title: 'خيام إطار المستودعات', href: '/services/storage-tents/warehouse-tents', desc: 'تُثبَّت على الخرسانة والإسفلت بدون حفر. مناسبة للمناطق الحرة والمواقع الصناعية المطوّرة.' },
                                    { title: 'الخيام الصناعية المتخصصة', href: '/services/storage-tents/industrial-tents', desc: 'للنفط والغاز، التخزين البارد، وإسكان القوى العاملة بمواصفات NFPA 701.' },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block p-5 bg-bg-elevated rounded-xl border border-border hover:border-gold/40 transition-colors group"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-white font-bold group-hover:text-gold transition-colors mb-1">{link.title}</p>
                                                <p className="text-text-muted text-sm">{link.desc}</p>
                                            </div>
                                            <span className="text-gold text-xl shrink-0 group-hover:-translate-x-1 transition-transform">←</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <h2>الخلاصة: ما الذي تحتاجه في الإمارات؟</h2>
                            <p>
                                لمعظم تطبيقات البناء والنقل والصناعة العامة في الإمارات: <strong>مشمع PE بوزن 200 جرام هو نقطة البداية الصحيحة</strong>. وازن بين التكلفة والمتانة، يناسب المناخ الإماراتي (بمعالجة UV كافية)، وهو الفئة الأكثر مبيعاً في السوق لأسباب وجيهة.
                            </p>
                            <p>
                                للنقل المنتظم أو التعرض الخارجي الطويل الأمد — ارتقِ إلى PVC. للزراعة الدائمة أو تبطين الأحواض — فكر في HDPE.
                            </p>
                            <p>
                                <strong>وتذكر دائماً:</strong> أسعار المشمع تتغير مع أسواق النفط. اتصل أو تواصل عبر واتساب للحصول على سعر اليوم المؤكد.
                            </p>

                            <div className="not-prose mt-8 p-6 bg-gold/10 border border-gold/30 rounded-2xl">
                                <h3 className="text-gold font-bold text-xl mb-2">هل أنت مستعد للشراء؟</h3>
                                <p className="text-text-muted text-sm mb-4">اطلع على جميع المقاسات الـ 16 وجدول الأسعار الكامل على صفحة منتج مشمع PE200 الخاص بنا. أو تواصل معنا مباشرة للحصول على سعر اليوم وعروض الكميات الكبيرة.</p>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/services/tarpaulins" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-dark font-bold rounded-xl text-sm hover:bg-gold/90 transition-colors">
                                        عرض منتج المشمع ←
                                    </Link>
                                    <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-bg-elevated border border-border text-white font-bold rounded-xl text-sm hover:border-gold/40 transition-colors">
                                        واتساب لسعر اليوم
                                    </a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* ── ENGLISH CONTENT ── */}
                            <p>
                                The UAE tarpaulin market is worth between <strong>USD 70 million and USD 100 million</strong> — and growing at 4.7% CAGR across the Middle East and Africa region. With 95 new construction projects launched in Q1 2025 alone and over 66,000 residential units coming to Dubai and Abu Dhabi by 2028, demand for quality protective coverings has never been higher.
                            </p>
                            <p>
                                But search "tarpaulin Dubai" or "buy tarp UAE" and you'll find over 120 registered suppliers. PE or PVC? 150 gsm or 200? Sheets or rolls? This guide cuts through the noise with real market data so you can buy with confidence.
                            </p>

                            <hr className="border-border my-10" />

                            <h2>Why Is the UAE Tarpaulin Market Growing?</h2>
                            <p>Three sectors drive most of the demand:</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
                                {[
                                    { num: '40–50%', label: 'Construction sector volume share', sub: '#1 driver — 95 new projects in Q1 2025 alone' },
                                    { num: '25–30%', label: 'Logistics & transportation', sub: 'Jebel Ali Port handles 14M+ TEU annually' },
                                    { num: '10–15%', label: 'Agriculture & food security', sub: 'UAE greenhouse market exceeded USD 240M in 2023' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-bg-elevated rounded-xl p-5 border border-gold/20 text-center">
                                        <div className="text-2xl font-bold text-gold mb-1">{stat.num}</div>
                                        <div className="text-white text-sm font-semibold mb-1">{stat.label}</div>
                                        <div className="text-text-muted text-xs">{stat.sub}</div>
                                    </div>
                                ))}
                            </div>

                            <h2>Material Comparison: PE vs PVC vs HDPE vs Canvas</h2>
                            <p>
                                Material selection is the most important decision you will make. Here is a direct comparison based on UAE market data:
                            </p>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden min-w-[600px]">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['Material', 'Lifespan', 'Price Range (per sqm)', 'Best For', 'Weight'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-left border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['PE (Polyethylene)', '1–2 years', 'USD 0.40–1.73', 'Construction, transport, general purpose', 'Light'],
                                            ['HDPE (High-Density PE)', '3–5 years', 'USD 0.58–2.07', 'Agriculture, pond lining, scaffolding', 'Medium'],
                                            ['PVC (Polyvinyl Chloride)', 'Up to 10 years', 'USD 1.73–3.31', 'Truck curtains, industrial tents, marine', 'Heavy'],
                                            ['Canvas (Cotton)', '2–5 years', 'USD 2.30–5.75', 'Military, heavy-duty industrial', 'Heavy'],
                                            ['Mesh / Shade Net', '3–7 years', 'USD 0.35–1.38', 'Agriculture, parking shade, UV filtering', 'Very Light'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                {row.map((cell, j) => (
                                                    <td key={j} className="px-4 py-3 text-text-muted border-b border-border/50">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <p>
                                <strong>Practical bottom line:</strong> For short-to-medium-duration construction site use (one or two seasons), <strong>200 gsm PE</strong> delivers the best value. For regular highway transport, choose PVC. For permanent agricultural use or pond lining, choose HDPE.
                            </p>

                            <h2>GSM Ratings Explained: What Do You Need?</h2>
                            <p>
                                GSM (grams per square meter) is the weight and density measure. It determines how much polyethylene is in the fabric — and therefore its thickness, strength, and durability.
                            </p>

                            <div className="space-y-3 my-8 not-prose">
                                {[
                                    { gsm: '100–140 gsm', tier: 'Light Duty', color: 'border-blue-500/40', desc: 'Temporary covers and short-term protection. Not suited for UAE summer weather extremes or extended outdoor exposure.', use: 'Uses: Short-term indoor storage, temporary protection only' },
                                    { gsm: '150–200 gsm', tier: 'Medium Duty — Highest Volume in UAE', color: 'border-gold/60', desc: 'The most popular segment in the UAE tarpaulin market. Balances cost and durability for construction, transport, and general industrial use. Our PE200 sits in this tier.', use: 'Uses: Construction sites, truck load covers, logistics, general agriculture' },
                                    { gsm: '250–350 gsm', tier: 'Heavy Duty', color: 'border-orange-500/40', desc: 'For demanding applications and long-term outdoor exposure. Higher tear resistance and weather durability. Used for industrial curtains, truck side curtains, and permanent outdoor covers.', use: 'Uses: Permanent outdoor covers, heavy equipment, industrial applications' },
                                    { gsm: '500+ gsm', tier: 'Super Heavy / Specialist', color: 'border-red-500/40', desc: 'Military, marine, and extreme-environment specifications. For most applications, PVC is a more appropriate choice at this weight range.', use: 'Uses: Military, marine, oil & gas industry' },
                                ].map((item) => (
                                    <div key={item.gsm} className={`p-5 bg-bg-elevated rounded-xl border ${item.color}`}>
                                        <div className="flex items-center justify-between gap-4 mb-2">
                                            <span className="text-white font-bold">{item.gsm}</span>
                                            <span className="text-gold text-xs font-bold uppercase tracking-wider">{item.tier}</span>
                                        </div>
                                        <p className="text-text-muted text-sm mb-1">{item.desc}</p>
                                        <p className="text-gold/70 text-xs font-medium">{item.use}</p>
                                    </div>
                                ))}
                            </div>

                            <h2>Tentative Price Guide: PE Tarpaulin 200 gsm in UAE (AED)</h2>
                            <p>
                                Prices below are tentative estimates based on <strong>December 2025 market data</strong>, at a reference rate of <strong>AED 0.21 per sq ft</strong> plus 5% VAT. <strong>Important: tarpaulin prices are linked to oil markets and fluctuate.</strong> Always confirm current pricing before ordering.
                            </p>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden min-w-[480px]">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['Size (Feet)', 'Size (Metric)', 'Weight', 'Est. Price (AED) + 5% VAT'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-left border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['12 × 12 ft', '3.6 × 3.6 m', '2.59 kg', '29.81'],
                                            ['12 × 18 ft', '3.6 × 5.4 m', '3.90 kg', '44.71'],
                                            ['20 × 20 ft', '6.0 × 6.0 m', '7.20 kg', '82.80'],
                                            ['20 × 30 ft', '6.0 × 9.0 m', '10.80 kg', '124.20'],
                                            ['30 × 30 ft', '9.0 × 9.0 m', '16.20 kg', '186.30'],
                                            ['30 × 40 ft', '9.0 × 12.0 m', '21.60 kg', '248.40'],
                                            ['40 × 60 ft', '12.0 × 18.0 m', '43.20 kg', '496.80'],
                                            ['60 × 60 ft', '18.0 × 18.0 m', '64.80 kg', '745.20'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                <td className="px-4 py-3 text-white font-mono border-b border-border/50">{row[0]}</td>
                                                <td className="px-4 py-3 text-text-muted border-b border-border/50">{row[1]}</td>
                                                <td className="px-4 py-3 text-text-muted border-b border-border/50">{row[2]}</td>
                                                <td className="px-4 py-3 border-b border-border/50"><span className="text-gold font-bold font-mono">AED {row[3]}</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-text-muted text-xs mt-3">* Tentative prices based on December 2025 data. 5% VAT charged additionally. ±5% size tolerance in finished sheets. Contact us for current confirmed pricing — all 16 sizes on our <Link href="/services/tarpaulins" className="text-gold hover:underline">PE Tarpaulin page</Link>.</p>
                            </div>

                            <h2>Applications by Industry: What Each Sector Buys</h2>

                            <h3>Construction & Infrastructure (40–50% of Demand)</h3>
                            <p>
                                Construction is by far the largest consumer of tarpaulins in the UAE. Sites rely on tarps for: protecting building materials (cement, steel, timber, bricks) from rain, sand, and UV damage; wrapping scaffolding to contain dust and debris; covering incomplete structures; and providing shade for workers during summer months when temperatures routinely exceed 45°C. With the UAE construction market growing from USD 66.89 billion in 2024 toward USD 96 billion by 2030, this is a structurally growing demand base.
                            </p>
                            <p>
                                For UAE construction, <strong>200 gsm is the recommended minimum</strong>. For high-value material protection or longer exposure, 250 gsm or above is worth the additional cost.
                            </p>

                            <div className="not-prose my-6">
                                <Link
                                    href="/services/storage-tents"
                                    className="block p-5 bg-bg-elevated rounded-xl border border-border hover:border-gold/40 transition-colors group"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-xs text-gold font-bold uppercase tracking-wider mb-1">Related Product</p>
                                            <p className="text-white font-bold group-hover:text-gold transition-colors">Industrial Storage Tents — Full Site Coverage</p>
                                            <p className="text-text-muted text-sm mt-1">When your site needs more than a tarpaulin — Civil Defence approved clear span structures for large-scale covered storage</p>
                                        </div>
                                        <span className="text-gold text-xl shrink-0 group-hover:translate-x-1 transition-transform">→</span>
                                    </div>
                                </Link>
                            </div>

                            <h3>Logistics & Transportation (25–30% of Demand)</h3>
                            <p>
                                Transport applications require tarps that hold under highway wind loads — 80 to 120 km/h on UAE roads. <strong>200 gsm PE</strong> is appropriate for light-to-medium cargo loads and short-to-medium-term use. For regular truck side curtains and long-term use, PVC-coated polyester is preferred — lasting up to 10 years versus 1–2 for PE.
                            </p>
                            <p>
                                Jebel Ali Port in Dubai handles over <strong>14 million TEU annually</strong>, and the UAE serves as the re-export hub for GCC and African markets. Demand for cargo covers is consistent year-round.
                            </p>

                            <h3>Agriculture & Food Security (10–15% of Demand)</h3>
                            <p>
                                The UAE National Food Security Strategy 2051 aims to rank the country among top nations on the Global Food Security Index. The commercial greenhouse market exceeded <strong>USD 240 million in 2023</strong> and continues to grow. For agriculture: HDPE outperforms standard PE for pond lining and irrigation infrastructure. 200 gsm PE is suitable for harvested crop protection, equipment covers, and temporary protection. Shade nets are used for UV filtering in greenhouse applications.
                            </p>

                            <h2>Why Do UAE Tarpaulin Prices Change?</h2>
                            <p>
                                If you buy in volume or enquire regularly, understanding what drives price movements protects you from surprises:
                            </p>
                            <ul>
                                <li><strong>PE raw material prices</strong> — Polyethylene is a petroleum derivative. Global oil markets directly affect manufacturing costs.</li>
                                <li><strong>Geopolitical factors</strong> — Disruptions to polyethylene and ethylene glycol exports during regional tensions have previously impacted UAE supply chains.</li>
                                <li><strong>International shipping rates</strong> — Most raw materials and finished PE products are imported, primarily from China and South Asian manufacturers.</li>
                                <li><strong>Seasonal demand spikes</strong> — October through March is the UAE peak season (construction resumes, outdoor events peak). Higher demand during these months creates pricing pressure.</li>
                            </ul>
                            <p>
                                <strong>Practical rule:</strong> Always confirm prices before ordering, especially for large quantities. Do not rely on price lists that haven't been recently updated.
                            </p>

                            <h2>How to Choose: The Right Questions to Ask</h2>

                            <div className="space-y-3 my-8 not-prose">
                                {[
                                    { q: 'How long will it stay in place?', a: 'Weeks to a season: 200 gsm PE. One year+: HDPE. Two+ years: PVC.' },
                                    { q: 'Will it face wind loading (trucks, exposed sites)?', a: 'Yes: ensure aluminium eyelets every 100 cm with nylon rope hem — both standard on PE200.' },
                                    { q: 'Is there fire risk at the site?', a: 'Construction sites and oil & gas applications need flash point above 200°C — PE200 meets this.' },
                                    { q: 'What area do you need to cover?', a: 'For large areas (100 sqm+), consider rolls (4M×50M) rather than multiple sheets.' },
                                    { q: 'Do you need custom sizes?', a: 'Order rolls for cut-to-size, or contact us to discuss fabricated options.' },
                                ].map((item) => (
                                    <div key={item.q} className="p-5 bg-bg-elevated rounded-xl border border-border">
                                        <p className="text-white font-bold mb-1">→ {item.q}</p>
                                        <p className="text-text-muted text-sm">{item.a}</p>
                                    </div>
                                ))}
                            </div>

                            <h2>When a Tarpaulin Is Not Enough: Industrial Storage Tents</h2>
                            <p>
                                A tarpaulin is ideal for covering. But when your site needs <strong>enclosed, freestanding storage space</strong> — whether 500 sqm or 5,000 sqm — the solution is a structure, not a cover.
                            </p>

                            <div className="space-y-3 my-8 not-prose">
                                {[
                                    { title: 'Industrial Storage Tents', href: '/services/storage-tents', desc: 'Civil Defence approved clear span structures deployed in 3–7 days. 50–70% cheaper than permanent construction.' },
                                    { title: 'Clear Span Tents', href: '/services/storage-tents/clear-span-tents', desc: '3m to 50m+ wide with no interior columns. Ideal for forklift operations and large-scale storage.' },
                                    { title: 'Warehouse Frame Tents', href: '/services/storage-tents/warehouse-tents', desc: 'Install on concrete or asphalt with no ground penetration. Suited for free zones and developed sites.' },
                                    { title: 'Industrial Specialist Tents', href: '/services/storage-tents/industrial-tents', desc: 'Oil & gas, cold storage, and labour accommodation to NFPA 701 specification.' },
                                ].map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="block p-5 bg-bg-elevated rounded-xl border border-border hover:border-gold/40 transition-colors group"
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-white font-bold group-hover:text-gold transition-colors mb-1">{link.title}</p>
                                                <p className="text-text-muted text-sm">{link.desc}</p>
                                            </div>
                                            <span className="text-gold text-xl shrink-0 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <h2>Summary: What Should You Buy in UAE?</h2>
                            <p>
                                For most UAE construction, transport, and general industrial applications: <strong>200 gsm PE tarpaulin is the right starting point</strong>. It balances cost and durability, handles the UAE climate with adequate UV treatment, and is the highest-volume segment in the market for good reason.
                            </p>
                            <p>
                                For regular transport or long-term outdoor exposure — step up to PVC. For permanent agricultural use or pond lining — consider HDPE.
                            </p>
                            <p>
                                <strong>Always remember:</strong> tarpaulin prices change with oil markets. Call or WhatsApp for today's confirmed pricing before placing your order.
                            </p>

                            <div className="not-prose mt-8 p-6 bg-gold/10 border border-gold/30 rounded-2xl">
                                <h3 className="text-gold font-bold text-xl mb-2">Ready to Order?</h3>
                                <p className="text-text-muted text-sm mb-4">See all 16 sizes and the full price table on our PE200 tarpaulin product page. Or contact us directly for today's pricing and bulk order rates.</p>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/services/tarpaulins" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-dark font-bold rounded-xl text-sm hover:bg-gold/90 transition-colors">
                                        View Tarpaulin Product Page →
                                    </Link>
                                    <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-bg-elevated border border-border text-white font-bold rounded-xl text-sm hover:border-gold/40 transition-colors">
                                        WhatsApp for Today&apos;s Price
                                    </a>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Bottom share */}
                <div className="mt-16 border-t border-border pt-8 flex justify-between items-center">
                    <span className="text-text-muted text-sm uppercase tracking-widest">
                        {isAr ? 'شارك هذا الدليل:' : 'Share this guide:'}
                    </span>
                    <ShareButtons url={articleUrl} title={articleTitle} />
                </div>

                {/* Request Quote CTA */}
                <div className="mt-12 p-8 bg-bg-elevated border border-gold/30 rounded-2xl text-center">
                    <h3 className="text-2xl font-display text-white mb-3">
                        {isAr ? 'هل تحتاج إلى مشمع أو خيمة تخزين؟' : 'Need Tarpaulins or Industrial Storage?'}
                    </h3>
                    <p className="text-text-muted mb-6">
                        {isAr
                            ? 'تواصل مع فريق Tent Now للحصول على الأسعار الحالية وتوفر المخزون واستشارة مجانية حول ما يناسب مشروعك.'
                            : 'Contact the Tent Now team for current pricing, stock availability, and a free consultation on what suits your project.'}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link href="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-bg-dark font-bold rounded-xl hover:bg-gold/90 transition-colors">
                            {isAr ? 'طلب عرض سعر' : 'Request a Quote'}
                        </Link>
                        <Link href="/services/tarpaulins" className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-gold/40 text-gold font-bold rounded-xl hover:bg-gold/5 transition-colors">
                            {isAr ? 'عرض منتج المشمع' : 'View Tarpaulin Product'}
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
