import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'مشمع أم خيمة تخزين؟ كيف يختار المقاولون الإماراتيون الحل الصحيح | Tent Now'
        : 'Tarpaulin or Storage Tent? How UAE Contractors Choose the Right Site Cover | Tent Now';

    const description = locale === 'ar'
        ? 'الدليل الشامل لاختيار بين مشمع PE والخيمة الصناعية لمشاريع الإمارات. جدول مقارنة، تحليل التكاليف، ودليل القرار حسب نوع المشروع — البناء واللوجستيات والزراعة والنفط والغاز.'
        : 'The definitive guide to choosing between PE tarpaulins and industrial storage tents for UAE projects. Comparison table, cost analysis, and decision guide by project type — construction, logistics, agriculture, and oil & gas.';

    return {
        title,
        description,
        keywords: locale === 'ar'
            ? ['مشمع مقابل خيمة تخزين الإمارات', 'تغطية موقع البناء الإمارات', 'خيمة تخزين صناعية مقابل مشمع', 'حلول التغطية الإمارات', 'مشمع البناء دبي']
            : ['tarpaulin vs storage tent UAE', 'construction site cover UAE', 'industrial tent vs tarpaulin', 'covering solutions UAE construction', 'tarpaulin or tent UAE', 'site protection UAE'],
        openGraph: {
            title,
            description,
            images: [{ url: 'https://www.tentnow.ae/images/tarpaulins/tarpaulin-uses.png', width: 1200, height: 630, alt: locale === 'ar' ? 'مشمع مقابل خيمة تخزين في موقع بناء إماراتي' : 'Tarpaulin vs Storage Tent on UAE construction site' }],
            type: 'article',
            publishedTime: '2026-04-02T10:00:00.000Z',
            authors: ['Tent Now'],
            section: locale === 'ar' ? 'دليل القرار' : 'Decision Guide',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
            alternateLocale: locale === 'ar' ? ['en_US'] : ['ar_AE'],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://www.tentnow.ae/images/tarpaulins/tarpaulin-uses.png'],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/tarpaulin-vs-storage-tent-uae`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/tarpaulin-vs-storage-tent-uae',
                'ar': 'https://www.tentnow.ae/ar/blog/tarpaulin-vs-storage-tent-uae',
            },
        },
    };
}

export default function TarpaulinVsStorageTentPage() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/tarpaulin-vs-storage-tent-uae`;
    const articleTitle = isAr
        ? 'مشمع أم خيمة تخزين؟ كيف يختار المقاولون الإماراتيون الحل الصحيح'
        : 'Tarpaulin or Storage Tent? How UAE Contractors Choose the Right Site Cover';

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={isAr
                    ? 'دليل مقارنة بين المشمع وخيمة التخزين الصناعية لمشاريع الإمارات مع جداول القرار وتحليل التكاليف.'
                    : 'Comparison guide between tarpaulins and industrial storage tents for UAE projects, with decision tables and cost analysis.'}
                image='/images/tarpaulins/tarpaulin-uses.png'
                datePublished='2026-04-02T10:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/tarpaulins/tarpaulin-uses.png"
                            alt={isAr ? 'مشمع وخيمة تخزين في موقع بناء إماراتي' : 'Tarpaulin and storage tent on UAE construction site'}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {isAr ? 'دليل القرار' : 'Decision Guide'}
                        </span>
                        <span>{isAr ? '2 أبريل 2026' : 'April 2, 2026'}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{isAr ? '11 دقيقة قراءة' : '11 min read'}</span>
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
                            <p className="text-text-muted text-xs">{isAr ? 'متخصصو الخيام الصناعية — 30 عاماً من الخبرة' : 'Industrial Tent Specialists — 30 Years Experience'}</p>
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

                {/* ── CONTENT ── */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    {isAr ? (
                        <>
                            {/* ══════════════════════════════
                                ARABIC CONTENT
                            ══════════════════════════════ */}
                            <p>
                                هذا السؤال يُطرح علينا كل أسبوع. مدير موقع في دبي الصناعية يحتاج حماية لمواد بناء تصل قيمتها إلى مليون درهم. مشغّل لوجستي في جبل علي يحتاج تخزيناً إضافياً عاجلاً. مشروع زراعي في أبوظبي يحتاج تغطية لـ 300 متر مربع. <strong>كل منهم يسأل: مشمع أم خيمة؟</strong>
                            </p>
                            <p>
                                الإجابة الصحيحة تعتمد على أربعة عوامل: <strong>المساحة المطلوبة، مدة الاحتياج، طبيعة الاستخدام، والميزانية المتاحة</strong>. هذا الدليل يمنحك إطار القرار الذي نستخدمه نحن مع عملائنا — مبنياً على 30 عاماً من مشاريع التغطية والتخزين في الإمارات.
                            </p>

                            <hr className="border-border my-10" />

                            <h2>الفرق الجوهري: ماذا يفعل كل منهما؟</h2>
                            <p>
                                قبل المقارنة، يجب فهم ما يصنعه كل منهما فعلياً:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                {[
                                    {
                                        title: 'المشمع',
                                        color: 'border-blue-500/40',
                                        icon: '🧱',
                                        points: [
                                            'يُغطي — لا يُحيط ولا يُؤمّن',
                                            'يحمي من المطر والغبار وأشعة UV',
                                            'مثالي للمواد المكدّسة في الهواء الطلق',
                                            'لا يوفر مساحة عمل أو تخزين مغلقة',
                                            'تركيب فوري، لا يحتاج تصاريح',
                                            'من AED 25.92 للورقة الواحدة',
                                        ]
                                    },
                                    {
                                        title: 'خيمة التخزين الصناعية',
                                        color: 'border-gold/40',
                                        icon: '🏗️',
                                        points: [
                                            'تُحيط — مساحة عمل/تخزين مغلقة كاملة',
                                            'حماية من الطقس من جميع الجهات',
                                            'مناسبة لعمل الرافعات والمعدات الثقيلة',
                                            'تتضمن إضاءة وتهوية وباب دوّار',
                                            'تحتاج تصريح دفاع مدني وبلدية',
                                            'من AED 15/م² شهرياً للإيجار',
                                        ]
                                    }
                                ].map((card) => (
                                    <div key={card.title} className={`p-6 bg-bg-elevated rounded-2xl border ${card.color}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{card.icon}</span>
                                            <h3 className="text-white font-bold text-lg">{card.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {card.points.map((p) => (
                                                <li key={p} className="text-text-muted text-sm flex items-start gap-2">
                                                    <span className="text-gold mt-0.5 shrink-0">·</span>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h2>جدول القرار: اختر حلك في دقيقة</h2>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden min-w-[560px]">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['الموقف', 'اختر مشمعاً', 'اختر خيمة تخزين'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-right border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['المدة', 'أسابيع إلى موسم واحد', 'شهر فأكثر'],
                                            ['المساحة', 'أقل من 100 م²', 'أكثر من 100 م²'],
                                            ['الاستخدام', 'تغطية مواد في الهواء الطلق', 'تخزين مغلق / مساحة عمل'],
                                            ['حركة المعدات', 'لا توجد رافعات', 'رافعة شوكية / شاحنة تدخل'],
                                            ['متطلبات الأفراد', 'بدون أفراد داخل المساحة', 'مناطق عمل أو إقامة'],
                                            ['التصاريح', 'لا تصاريح مطلوبة', 'تصريح بلدية + دفاع مدني'],
                                            ['الميزانية', 'أقل من AED 1,000', 'AED 15,000+'],
                                            ['الموسمية', 'الشتاء فقط أو بشكل متقطع', 'احتياج مستمر على مدار العام'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                <td className="px-4 py-3 text-white font-bold border-b border-border/50 text-right">{row[0]}</td>
                                                <td className="px-4 py-3 text-blue-300 text-sm border-b border-border/50 text-right">{row[1]}</td>
                                                <td className="px-4 py-3 text-gold text-sm border-b border-border/50 text-right">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2>متى يكون المشمع هو الحل الصحيح؟</h2>

                            <h3>١. حماية مواد البناء قصيرة المدى</h3>
                            <p>
                                أكياس الإسمنت المكشوفة تمتص الرطوبة. حبال التسليح تصدأ. الألواح الخشبية تتقوّس في الشمس. المشمع بوزن 200 جرام يحل هذه المشكلة بتكلفة AED 25–162 للورقة حسب المقاس — مقارنة بآلاف الدراهم في الخسائر إذا تلفت المواد. <strong>لا حاجة لتصريح. تركيب فوري. لا التزامات.</strong>
                            </p>
                            <p>
                                في الإمارات، حيث تصل درجات الحرارة إلى 45°م+ وتهبّ العواصف الرملية دون إنذار، حماية المواد بمشمع UV-مستقر هي ممارسة أساسية في أي موقع محترف.
                            </p>

                            <h3>٢. تغطية الشاحنات ووسائل النقل</h3>
                            <p>
                                الشاحنات المحملة بمواد بناء أو بضائع مكشوفة تحتاج تغطية عند التوقف في المواقع أو الساحات. المشمع هنا الحل الوحيد المنطقي — سريع الربط وإعادة الاستخدام. <Link href="/services/tarpaulins">مشمع PE200</Link> المقاس 24×30 قدم (7.2×9م) يغطي شاحنة متوسطة بأكملها بـ AED 129.60.
                            </p>

                            <h3>٣. الزراعة والمشاريع الموسمية</h3>
                            <p>
                                محاصيل محصودة تنتظر نقلاً. آلات زراعية متوقفة في الموسم المنخفض. سقالات مؤقتة تحتاج غلافاً من الغبار. هذه تطبيقات أسابيع لا أشهر — والمشمع مثالي لها.
                            </p>

                            <h3>٤. كمية صغيرة وميزانية محدودة</h3>
                            <p>
                                إذا كانت المساحة المطلوبة أقل من 50–100 م² والمدة أقل من موسم، فإن تكلفة خيمة تخزين (تبدأ من AED 15,000 تركيباً + إيجاراً) لا تبرر نفسها. المشمع يحل 80% من متطلبات التغطية بـ 5% من التكلفة.
                            </p>

                            <div className="not-prose my-8 p-5 bg-blue-950/30 border border-blue-500/30 rounded-xl">
                                <p className="text-blue-200 text-sm font-medium mb-1">📦 المنتج المناسب</p>
                                <Link href="/services/tarpaulins" className="block mt-2 text-white font-bold hover:text-gold transition-colors">
                                    مشمع PE200 — 16 مقاساً قياسياً، من AED 25.92 → عرض جميع المقاسات والأسعار
                                </Link>
                            </div>

                            <h2>متى تكون خيمة التخزين الصناعية هي الحل الصحيح؟</h2>

                            <h3>١. تحتاج مساحة عمل أو تخزين مغلقة</h3>
                            <p>
                                المشمع يُغطي. الخيمة الصناعية تُحيط. الفرق جوهري: خيمة بدون أعمدة داخلية (<em>Clear Span</em>) تخلق مساحة مغلقة كاملة تعمل فيها الرافعات الشوكية بحرية، تُخزَّن فيها المعدات الثمينة بأمان، وتعمل فيها الفرق دون تعرض للطقس. <strong>لا يمكن للمشمع تحقيق ذلك.</strong>
                            </p>

                            <div className="not-prose my-6 space-y-3">
                                {[
                                    { title: 'خيام الامتداد الحر', href: '/services/storage-tents/clear-span-tents', desc: 'من 3م إلى 50م+ عرضاً، بدون أعمدة. مثالية لعمليات الرافعات والمستودعات الكبرى.' },
                                    { title: 'خيام إطار المستودعات', href: '/services/storage-tents/warehouse-tents', desc: 'تُثبَّت على الخرسانة والإسفلت بدون حفر. للمناطق الحرة والمواقع المطوّرة.' },
                                    { title: 'الخيام الصناعية المتخصصة', href: '/services/storage-tents/industrial-tents', desc: 'للنفط والغاز، التخزين البارد، وإسكان العمال. مواصفات NFPA 701.' },
                                ].map((link) => (
                                    <Link key={link.href} href={link.href} className="block p-5 bg-bg-elevated rounded-xl border border-border hover:border-gold/40 transition-colors group">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-white font-bold group-hover:text-gold transition-colors mb-1">{link.title}</p>
                                                <p className="text-text-muted text-sm">{link.desc}</p>
                                            </div>
                                            <span className="text-gold shrink-0 group-hover:-translate-x-1 transition-transform">←</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <h3>٢. الاحتياج يمتد لأكثر من موسم</h3>
                            <p>
                                عند احتساب تكلفة دورة الحياة، الخيمة الصناعية أوفر من المشمع للاستخدام طويل المدى. المشمع بمساحة 500 م² يستهلك سنوياً ما يقارب 300 ورقة من مقاس 30×30 بتكلفة ~AED 48,600 مع الضريبة. خيمة تخزين لنفس المساحة تُكلّف AED 7,500–10,000 شهرياً بالإيجار — وتُوفر مساحة عمل مغلقة وآمنة تماماً.
                            </p>

                            <h3>٣. بيئات عمل تتطلب امتثالاً للوائح</h3>
                            <p>
                                إسكان العمال، ورش الصيانة، والتخزين الصناعي طويل الأمد — كل هذه تستوجب تصاريح الدفاع المدني والبلدية، ومعايير سلامة محددة. الخيمة الصناعية المعتمدة من Tent Now تأتي مع كل التصاريح والوثائق المطلوبة. المشمع لا يوفر ذلك.
                            </p>

                            <h3>٤. المناخ الإماراتي الشديد — الحماية الكاملة</h3>
                            <p>
                                خيام التخزين الصناعية مُصنّعة من قماش PVC بوزن 850 جرام/م² مع إطارات ألومنيوم مقاومة للرياح حتى 100+ كم/ساعة. تحافظ على درجات حرارة داخلية قابلة للتحكم حتى في صيف الإمارات (45°م+). ويمكن تجهيزها بأنظمة تكييف أو تبريد بالتبخير لمزيد من الراحة.
                            </p>

                            <h2>مقارنة التكاليف: الحقيقة الكاملة</h2>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden min-w-[500px]">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['عامل التكلفة', 'المشمع', 'خيمة التخزين'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-right border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['تكلفة الدخول', 'AED 25–648 للورقة', 'AED 15,000+ (تركيب أو أول دفعة)'],
                                            ['للإيجار / الشهري', 'لا ينطبق', 'AED 15–20/م² شهرياً'],
                                            ['500 م² لمدة 3 أشهر', '~AED 7,500–25,000 (مشاميع متعددة)', '~AED 22,500–30,000 (مع تركيب)'],
                                            ['التصاريح', 'لا تكلفة', 'تكلفة تصريح (مشمولة في خدماتنا)'],
                                            ['العمر الافتراضي', '1–2 سنة لكل مشمع', '10–20 سنة للهيكل'],
                                            ['الاستبدال / الصيانة', 'يُستبدل كل موسم', 'صيانة دورية بسيطة'],
                                            ['التكلفة لكل م² سنوياً', 'AED 50–150', 'AED 180–240 (لكن مع مساحة عمل كاملة)'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                <td className="px-4 py-3 text-white font-bold border-b border-border/50 text-right text-sm">{row[0]}</td>
                                                <td className="px-4 py-3 text-blue-300 border-b border-border/50 text-right text-sm">{row[1]}</td>
                                                <td className="px-4 py-3 text-gold border-b border-border/50 text-right text-sm">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-text-muted text-xs mt-3 text-right">* التكاليف تقريبية وتختلف حسب المقاس والمواصفات والموقع. تواصل معنا للحصول على عروض دقيقة.</p>
                            </div>

                            <h2>حسب القطاع: ماذا تستخدم في الإمارات؟</h2>

                            <div className="space-y-4 my-8 not-prose">
                                {[
                                    {
                                        sector: 'البناء والمقاولات',
                                        tarp: 'مشمع PE200 — حماية مواد البناء، السقالات، تغطية الهياكل الجزئية',
                                        tent: 'خيمة تخزين — ورش الصيانة، تخزين المعدات الثمينة، إسكان العمال',
                                        verdict: 'الغالب: الاثنان معاً — مشاميع للتغطية السريعة + خيمة للتخزين الرئيسي',
                                        color: 'border-orange-500/30'
                                    },
                                    {
                                        sector: 'اللوجستيات والنقل',
                                        tarp: 'مشمع — أغطية الشاحنات والمقطورات، أغطية بضائع الساحة',
                                        tent: 'خيمة — طاقة تخزين إضافية في JAFZA، ساحات تجميع البضائع',
                                        verdict: 'الغالب: مشاميع للشاحنات + خيمة للتوسع في مساحة التخزين',
                                        color: 'border-blue-500/30'
                                    },
                                    {
                                        sector: 'الزراعة وأمن الغذاء',
                                        tarp: 'مشمع HDPE — تبطين الأحواض، تغطية المحاصيل، شبكات الظل',
                                        tent: 'هيكل خيمة — بيوت محمية دائمة، مخازن المنتجات، إسكان العمال الزراعيين',
                                        verdict: 'الغالب: الاثنان — مشاميع للتغطية التشغيلية + خيمة للبنية التحتية',
                                        color: 'border-green-500/30'
                                    },
                                    {
                                        sector: 'النفط والغاز',
                                        tarp: 'مشمع — تغطية عمليات الأنابيب، حماية معدات الحقل المؤقتة',
                                        tent: 'خيمة صناعية متخصصة — مرافق الأفراد، ورش الصيانة، NFPA 701',
                                        verdict: 'الغالب: الخيمة الصناعية دائماً + مشاميع للتغطية التكميلية',
                                        color: 'border-red-500/30'
                                    },
                                    {
                                        sector: 'الفعاليات والمعارض',
                                        tarp: 'مشمع — تغطية المعدات والسيارات أثناء الإعداد',
                                        tent: 'خيمة الفعاليات — الفضاء الرئيسي للفعالية، تكييف وتهوية كاملة',
                                        verdict: 'الغالب: خيمة الفعاليات أساساً + مشاميع للمرافق الخلفية',
                                        color: 'border-purple-500/30'
                                    },
                                ].map((item) => (
                                    <div key={item.sector} className={`p-5 bg-bg-elevated rounded-xl border ${item.color}`}>
                                        <h4 className="text-white font-bold mb-3">{item.sector}</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                            <div>
                                                <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">المشمع</p>
                                                <p className="text-text-muted text-sm">{item.tarp}</p>
                                            </div>
                                            <div>
                                                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">الخيمة</p>
                                                <p className="text-text-muted text-sm">{item.tent}</p>
                                            </div>
                                        </div>
                                        <div className="pt-3 border-t border-border/50">
                                            <p className="text-xs font-bold text-white">💡 الحكم: <span className="text-text-muted font-normal">{item.verdict}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2>الحالة المثالية: استخدامهما معاً</h2>
                            <p>
                                في المشاريع الكبيرة، المشمع والخيمة الصناعية يكملان بعضهما. خيمة امتداد حر 20م × 40م تُوفر مساحة التخزين المغلقة الرئيسية. مشاميع PE200 تُغطي المواد المكدّسة خارج الخيمة، تُلفّ السقالات المحيطة، وتحمي ممرات العمل المفتوحة. الاثنان معاً يوفران تغطية 360 درجة لموقع البناء بأقل تكلفة إجمالية.
                            </p>

                            <h2>قائمة التحقق السريعة: قرارك في 60 ثانية</h2>

                            <div className="space-y-2 my-8 not-prose">
                                {[
                                    { q: 'هل تحتاج مساحة عمل أو تخزين مغلقة؟', tarp: false, tent: true },
                                    { q: 'هل الاحتياج لأسابيع فقط؟', tarp: true, tent: false },
                                    { q: 'هل تعمل معدات ثقيلة (رافعة/شاحنة) في المنطقة؟', tarp: false, tent: true },
                                    { q: 'هل الميزانية أقل من AED 5,000؟', tarp: true, tent: false },
                                    { q: 'هل المساحة أقل من 100 م²؟', tarp: true, tent: false },
                                    { q: 'هل هناك متطلبات امتثال أو إسكان عمال؟', tarp: false, tent: true },
                                    { q: 'هل تحتاج تغطية سقالة خارجية أو شاحنة؟', tarp: true, tent: false },
                                    { q: 'هل الاحتياج مستمر لأكثر من 3 أشهر؟', tarp: false, tent: true },
                                ].map((item) => (
                                    <div key={item.q} className="flex items-center justify-between gap-4 p-4 bg-bg-elevated rounded-xl border border-border">
                                        <p className="text-white text-sm flex-1">{item.q}</p>
                                        <div className="flex gap-2 shrink-0">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${item.tarp ? 'bg-blue-500/20 text-blue-300' : 'bg-bg-dark text-text-muted'}`}>مشمع</span>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${item.tent ? 'bg-gold/20 text-gold' : 'bg-bg-dark text-text-muted'}`}>خيمة</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2>الأسئلة الشائعة</h2>

                            <div className="space-y-4 my-8 not-prose">
                                {[
                                    {
                                        q: 'هل يمكنني البدء بمشمع ثم الترقية لخيمة لاحقاً؟',
                                        a: 'نعم — وهذا ما يفعله كثير من عملائنا. ابدأ بحماية المواد بمشاميع PE200 فور بدء المشروع. عندما يتضح أن الاحتياج سيمتد، نُعِدّ تقييم موقع وننشر خيمة تخزين خلال 3–7 أيام. المشاميع تظل مفيدة للتغطية التكميلية حتى بعد تركيب الخيمة.'
                                    },
                                    {
                                        q: 'كم وقتاً يستغرق تركيب خيمة تخزين مقارنة بالمشمع؟',
                                        a: 'المشمع: دقائق. خيمة تخزين قياسية: 3–7 أيام للمقاسات المعيارية (بما فيها استخراج التصاريح). للمواقع العاجلة، نوفر نشراً خلال 72 ساعة للأحجام المحددة. تواصل معنا لمعرفة توفر المخزون والطاقة التشغيلية الحالية.'
                                    },
                                    {
                                        q: 'هل مشاميع 200 جرام كافية لصيف الإمارات؟',
                                        a: 'نعم — للتغطية الموسمية. مشمع PE200 مستقر ضد UV وفق ASTM 653/93 ونقطة وميضه فوق 200°م. توقع عمراً افتراضياً من 1–2 موسم للتعرض المستمر في الهواء الطلق في الإمارات. للحماية طويلة الأمد، انتقل إلى HDPE أو PVC.'
                                    },
                                    {
                                        q: 'هل تصاريح الدفاع المدني إلزامية لخيمة تخزين؟',
                                        a: 'نعم. كل هيكل مشغول في الإمارات يستوجب موافقة الدفاع المدني والبلدية. في دبي، تفرض المادة 13 غرامات تصل إلى AED 10,000 للهياكل غير المرخصة. فريق Tent Now يتولى جميع طلبات التصاريح والرسومات الإنشائية وشهادات السلامة — بلا رسوم إضافية.'
                                    },
                                ].map((faq) => (
                                    <details key={faq.q} className="group bg-bg-elevated border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors">
                                        <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                                            <h3 className="text-white font-display text-base leading-snug">{faq.q}</h3>
                                            <span className="text-gold shrink-0 transition-transform group-open:rotate-45 text-xl">+</span>
                                        </summary>
                                        <div className="px-6 pb-5">
                                            <p className="text-text-muted leading-relaxed text-sm">{faq.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>

                            <h2>الخلاصة: القاعدة الذهبية</h2>
                            <p>
                                إذا كنت <strong>تُغطي</strong>، اختر مشمعاً. إذا كنت تحتاج <strong>مساحة محاطة بالكامل</strong>، اختر خيمة تخزين. وإذا كان مشروعك كبيراً — <strong>استخدم الاثنين</strong>.
                            </p>
                            <p>
                                في Tent Now، نُورّد <Link href="/services/tarpaulins">مشاميع PE200</Link> لمتطلبات التغطية، وننشر <Link href="/services/storage-tents">خيام تخزين صناعية</Link> معتمدة من الدفاع المدني لمتطلبات المساحة. كلا المنتجين متوفران للنشر السريع في جميع أنحاء الإمارات.
                            </p>

                            <div className="not-prose mt-8 p-6 bg-gold/10 border border-gold/30 rounded-2xl">
                                <h3 className="text-gold font-bold text-xl mb-2">غير متأكد من احتياجك؟</h3>
                                <p className="text-text-muted text-sm mb-4">صف لنا موقعك ومتطلباتك — وسنخبرك بالحل الأمثل. استشارة مجانية، بدون أي التزام.</p>
                                <div className="flex flex-wrap gap-3">
                                    <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-dark font-bold rounded-xl text-sm hover:bg-gold/90 transition-colors">
                                        واتساب للاستشارة المجانية ←
                                    </a>
                                    <Link href="/request-quote" className="inline-flex items-center gap-2 px-6 py-3 bg-bg-elevated border border-border text-white font-bold rounded-xl text-sm hover:border-gold/40 transition-colors">
                                        طلب عرض سعر
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* ══════════════════════════════
                                ENGLISH CONTENT
                            ══════════════════════════════ */}
                            <p>
                                We get asked this every week. A site manager in Dubai Industrial City needs to protect AED 1 million worth of building materials. A logistics operator in Jebel Ali needs emergency overflow storage. An agricultural project in Abu Dhabi needs to cover 300 square metres. <strong>Each of them asks the same question: tarpaulin or storage tent?</strong>
                            </p>
                            <p>
                                The right answer depends on four factors: <strong>the area required, the duration needed, how the space will be used, and the budget available</strong>. This guide gives you the decision framework we use with our own clients — built on 30 years of covering and storage projects across the UAE.
                            </p>

                            <hr className="border-border my-10" />

                            <h2>The Core Difference: What Each One Actually Does</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                                {[
                                    {
                                        title: 'Tarpaulin',
                                        color: 'border-blue-500/40',
                                        icon: '🧱',
                                        points: [
                                            'Covers — does not enclose or secure',
                                            'Protects from rain, dust, and UV',
                                            'Ideal for materials stacked in open air',
                                            'Does not create enclosed workspace or storage',
                                            'Instant deployment, no permits required',
                                            'From AED 25.92 per sheet',
                                        ]
                                    },
                                    {
                                        title: 'Industrial Storage Tent',
                                        color: 'border-gold/40',
                                        icon: '🏗️',
                                        points: [
                                            'Encloses — fully enclosed workspace or storage',
                                            'All-round weather protection',
                                            'Forklift and heavy equipment access',
                                            'Includes lighting, ventilation, roller shutter doors',
                                            'Requires Civil Defence & municipality permits',
                                            'From AED 15/sqm/month on rental',
                                        ]
                                    }
                                ].map((card) => (
                                    <div key={card.title} className={`p-6 bg-bg-elevated rounded-2xl border ${card.color}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{card.icon}</span>
                                            <h3 className="text-white font-bold text-lg">{card.title}</h3>
                                        </div>
                                        <ul className="space-y-2">
                                            {card.points.map((p) => (
                                                <li key={p} className="text-text-muted text-sm flex items-start gap-2">
                                                    <span className="text-gold mt-0.5 shrink-0">·</span>
                                                    {p}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <h2>The Decision Table: Pick Your Solution in Under a Minute</h2>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden min-w-[560px]">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['Your Situation', 'Choose Tarpaulin', 'Choose Storage Tent'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-left border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Duration', 'Weeks to a single season', 'One month or longer'],
                                            ['Area', 'Under 100 sqm', 'Over 100 sqm'],
                                            ['Usage', 'Covering open-air materials', 'Enclosed storage / workspace'],
                                            ['Equipment access', 'No forklifts or vehicles', 'Forklift / truck entry needed'],
                                            ['Personnel', 'Nobody works inside', 'Working or accommodation area'],
                                            ['Permits', 'None required', 'Civil Defence + municipality'],
                                            ['Budget', 'Under AED 1,000', 'AED 15,000+'],
                                            ['Seasonality', 'Winter only / intermittent', 'Continuous year-round need'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                <td className="px-4 py-3 text-white font-bold border-b border-border/50">{row[0]}</td>
                                                <td className="px-4 py-3 text-blue-300 text-sm border-b border-border/50">{row[1]}</td>
                                                <td className="px-4 py-3 text-gold text-sm border-b border-border/50">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <h2>When a Tarpaulin Is the Right Answer</h2>

                            <h3>1. Short-Term Construction Material Protection</h3>
                            <p>
                                Exposed cement bags absorb moisture. Rebar corrodes. Timber warps in direct sun. A 200 gsm tarpaulin solves this at AED 25–162 per sheet depending on size — versus thousands in losses if materials are damaged. <strong>No permit required. Instant deployment. No commitment.</strong>
                            </p>
                            <p>
                                In the UAE where temperatures hit 45°C+ and sandstorms arrive without warning, UV-stabilised material protection is standard practice on any professional site. Construction consumes an estimated 40–50% of total UAE tarpaulin volume for exactly this reason.
                            </p>

                            <h3>2. Truck and Transport Covers</h3>
                            <p>
                                Flatbed trucks carrying building materials or open cargo need covering during site stops or yard parking. A tarpaulin is the only practical option here — quick to secure and reuse. A <Link href="/services/tarpaulins">PE200</Link> 24×30 ft sheet (7.2×9m) covers a medium truck completely for AED 129.60.
                            </p>

                            <h3>3. Agriculture and Seasonal Projects</h3>
                            <p>
                                Harvested crops awaiting transport. Farm machinery idle between seasons. Temporary scaffolding requiring a dust barrier. These are weeks-long applications — the tarpaulin is purpose-built for them.
                            </p>

                            <h3>4. Small Area, Limited Budget</h3>
                            <p>
                                If the area needed is under 50–100 sqm and the duration is less than a season, the cost of a storage tent (starting from AED 15,000 installation plus monthly rental) cannot be justified. A tarpaulin solves 80% of covering requirements at 5% of the cost.
                            </p>

                            <div className="not-prose my-8 p-5 bg-blue-950/30 border border-blue-500/30 rounded-xl">
                                <p className="text-blue-200 text-sm font-medium mb-1">📦 Right Product</p>
                                <Link href="/services/tarpaulins" className="block mt-2 text-white font-bold hover:text-gold transition-colors">
                                    PE200 Tarpaulin — 16 standard sizes from AED 25.92 → View full size and pricing table
                                </Link>
                            </div>

                            <h2>When a Storage Tent Is the Right Answer</h2>

                            <h3>1. You Need Enclosed Workspace or Storage</h3>
                            <p>
                                A tarpaulin covers. An industrial storage tent encloses. The difference is fundamental: a clear span tent creates a fully enclosed space where forklifts operate freely, valuable equipment is stored securely, and teams work regardless of weather conditions. <strong>A tarpaulin cannot replicate this.</strong>
                            </p>

                            <div className="not-prose my-6 space-y-3">
                                {[
                                    { title: 'Clear Span Tents', href: '/services/storage-tents/clear-span-tents', desc: '3m to 50m+ wide with no interior columns. Ideal for forklift operations and large-scale storage.' },
                                    { title: 'Warehouse Frame Tents', href: '/services/storage-tents/warehouse-tents', desc: 'Install on concrete or asphalt with no ground penetration. Suited for free zones and developed sites.' },
                                    { title: 'Industrial Specialist Tents', href: '/services/storage-tents/industrial-tents', desc: 'Oil & gas, cold storage, and labour accommodation to NFPA 701 specification.' },
                                ].map((link) => (
                                    <Link key={link.href} href={link.href} className="block p-5 bg-bg-elevated rounded-xl border border-border hover:border-gold/40 transition-colors group">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p className="text-white font-bold group-hover:text-gold transition-colors mb-1">{link.title}</p>
                                                <p className="text-text-muted text-sm">{link.desc}</p>
                                            </div>
                                            <span className="text-gold shrink-0 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <h3>2. The Need Extends Beyond a Single Season</h3>
                            <p>
                                On a lifecycle cost basis, an industrial storage tent outperforms repeated tarpaulin replacement for long-duration use. Covering 500 sqm with 30×30 ft tarpaulins each season costs approximately AED 16,000–20,000 per year in sheets alone, with no enclosed space created. A storage tent at AED 15–20/sqm/month provides fully enclosed, secure, conditioned storage space — a fundamentally different product.
                            </p>

                            <h3>3. Compliance and Regulatory Requirements</h3>
                            <p>
                                Labour accommodation, maintenance workshops, and long-term industrial storage require Civil Defence and municipality permits with specific safety standards. A Civil Defence-approved Tent Now storage structure comes with all documentation included. A tarpaulin has no compliance framework.
                            </p>

                            <h3>4. UAE Extreme Summer — Full Climate Control</h3>
                            <p>
                                Industrial storage tents use 850 gsm PVC-coated polyester fabric on aluminium frames rated to 100+ km/h wind loads. They maintain manageable internal temperatures even in UAE summer conditions (45°C+) and can be equipped with evaporative coolers or full HVAC systems. A tarpaulin cannot provide this level of environmental control.
                            </p>

                            <h2>Full Cost Comparison: The Honest Numbers</h2>

                            <div className="overflow-x-auto my-8 not-prose">
                                <table className="w-full text-sm border border-border rounded-xl overflow-hidden min-w-[500px]">
                                    <thead className="bg-bg-elevated">
                                        <tr>
                                            {['Cost Factor', 'Tarpaulin', 'Storage Tent'].map((h) => (
                                                <th key={h} className="px-4 py-3 text-gold text-xs font-bold uppercase tracking-wider text-left border-b border-border">{h}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Entry cost', 'AED 25–648 per sheet', 'AED 15,000+ (installation / first payment)'],
                                            ['Monthly rental', 'N/A — purchase only', 'AED 15–20/sqm/month'],
                                            ['500 sqm for 3 months', '~AED 7,500–25,000 (multiple sheets)', '~AED 22,500–30,000 (incl. installation)'],
                                            ['Permits', 'Zero cost', 'Permit cost (included in our service)'],
                                            ['Structural lifespan', '1–2 years per sheet', '10–20 years for the structure'],
                                            ['Replacement / maintenance', 'Replaced each season', 'Periodic inspection, simple maintenance'],
                                            ['Cost per sqm/year', 'AED 50–150', 'AED 180–240 (but includes fully enclosed workspace)'],
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-bg-dark/40' : 'bg-bg-elevated/40'}>
                                                <td className="px-4 py-3 text-white font-bold border-b border-border/50 text-sm">{row[0]}</td>
                                                <td className="px-4 py-3 text-blue-300 border-b border-border/50 text-sm">{row[1]}</td>
                                                <td className="px-4 py-3 text-gold border-b border-border/50 text-sm">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-text-muted text-xs mt-3">* Costs are indicative and vary by specification, size, and location. Contact us for accurate quotes.</p>
                            </div>

                            <h2>By Industry: What UAE Sectors Use</h2>

                            <div className="space-y-4 my-8 not-prose">
                                {[
                                    {
                                        sector: 'Construction & Contracting',
                                        tarp: 'PE200 — protecting building materials, scaffold wraps, covering partial structures',
                                        tent: 'Storage tent — maintenance workshops, securing high-value equipment, labour accommodation',
                                        verdict: 'Most common: both together — tarpaulins for quick covering + tent for primary covered storage',
                                        color: 'border-orange-500/30'
                                    },
                                    {
                                        sector: 'Logistics & Transportation',
                                        tarp: 'Tarpaulin — truck and trailer covers, cargo yard protection',
                                        tent: 'Storage tent — additional storage capacity in JAFZA, cargo consolidation yards',
                                        verdict: 'Most common: tarpaulins for trucks + storage tent for capacity overflow',
                                        color: 'border-blue-500/30'
                                    },
                                    {
                                        sector: 'Agriculture & Food Security',
                                        tarp: 'HDPE tarpaulin — pond lining, crop covers, shade netting',
                                        tent: 'Tent structure — permanent greenhouses, produce storage, agricultural worker accommodation',
                                        verdict: 'Most common: both — tarpaulins for operational covering + tent for infrastructure',
                                        color: 'border-green-500/30'
                                    },
                                    {
                                        sector: 'Oil & Gas',
                                        tarp: 'Tarpaulin — pipeline operations covering, temporary field equipment protection',
                                        tent: 'Industrial specialist tent — personnel facilities, maintenance workshops, NFPA 701-spec',
                                        verdict: 'Most common: always the industrial tent + tarpaulins for supplementary covering',
                                        color: 'border-red-500/30'
                                    },
                                    {
                                        sector: 'Events & Exhibitions',
                                        tarp: 'Tarpaulin — equipment and vehicle covering during setup and breakdown',
                                        tent: 'Event tent — the primary event space, fully air-conditioned and finished',
                                        verdict: 'Most common: event tent as the primary structure + tarpaulins for back-of-house',
                                        color: 'border-purple-500/30'
                                    },
                                ].map((item) => (
                                    <div key={item.sector} className={`p-5 bg-bg-elevated rounded-xl border ${item.color}`}>
                                        <h4 className="text-white font-bold mb-3">{item.sector}</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                                            <div>
                                                <p className="text-blue-300 text-xs font-bold uppercase tracking-wider mb-1">Tarpaulin</p>
                                                <p className="text-text-muted text-sm">{item.tarp}</p>
                                            </div>
                                            <div>
                                                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">Storage Tent</p>
                                                <p className="text-text-muted text-sm">{item.tent}</p>
                                            </div>
                                        </div>
                                        <div className="pt-3 border-t border-border/50">
                                            <p className="text-xs font-bold text-white">💡 Verdict: <span className="text-text-muted font-normal">{item.verdict}</span></p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2>The Best Scenario: Using Both Together</h2>
                            <p>
                                On large projects, tarpaulins and industrial storage tents are complementary. A 20m × 40m clear span tent provides the primary enclosed storage hub. PE200 tarpaulins cover materials stacked outside the tent, wrap surrounding scaffolding, and protect exposed work paths. Together they deliver 360-degree site coverage at the lowest total cost — each doing what it does best.
                            </p>

                            <h2>Quick Decision Checklist: Your Answer in 60 Seconds</h2>

                            <div className="space-y-2 my-8 not-prose">
                                {[
                                    { q: 'Do you need enclosed workspace or storage?', tarp: false, tent: true },
                                    { q: 'Is the need for weeks only?', tarp: true, tent: false },
                                    { q: 'Does heavy equipment (forklift / truck) need access?', tarp: false, tent: true },
                                    { q: 'Is the budget under AED 5,000?', tarp: true, tent: false },
                                    { q: 'Is the area under 100 sqm?', tarp: true, tent: false },
                                    { q: 'Are there compliance or labour accommodation requirements?', tarp: false, tent: true },
                                    { q: 'Do you need to cover a truck, scaffold, or open-air stack?', tarp: true, tent: false },
                                    { q: 'Is the need continuous for more than 3 months?', tarp: false, tent: true },
                                ].map((item) => (
                                    <div key={item.q} className="flex items-center justify-between gap-4 p-4 bg-bg-elevated rounded-xl border border-border">
                                        <p className="text-white text-sm flex-1">{item.q}</p>
                                        <div className="flex gap-2 shrink-0">
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${item.tarp ? 'bg-blue-500/20 text-blue-300' : 'bg-bg-dark text-text-muted'}`}>Tarp</span>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${item.tent ? 'bg-gold/20 text-gold' : 'bg-bg-dark text-text-muted'}`}>Tent</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 my-8 not-prose">
                                {[
                                    {
                                        q: 'Can I start with a tarpaulin and upgrade to a storage tent later?',
                                        a: 'Yes — and this is what many of our clients do. Start with PE200 tarpaulins to protect materials from day one of the project. When it becomes clear the need will extend, we conduct a site assessment and deploy a storage tent within 3–7 days. Tarpaulins remain useful for supplementary covering even after the tent is installed.'
                                    },
                                    {
                                        q: 'How long does it take to install a storage tent compared to laying a tarpaulin?',
                                        a: 'Tarpaulin: minutes. Standard storage tent: 3–7 days for standard sizes (including permit processing). For urgent requirements, we offer 72-hour deployment for pre-engineered configurations. Contact us for current inventory availability and crew scheduling.'
                                    },
                                    {
                                        q: 'Is 200 gsm tarpaulin sufficient for UAE summer conditions?',
                                        a: 'Yes — for seasonal covering. The PE200 is UV-stabilised to ASTM 653/93 and carries a flash point above 200°C. Expect a 1–2 season outdoor lifespan under continuous UAE sun exposure. For longer-term protection, step up to HDPE or PVC material.'
                                    },
                                    {
                                        q: 'Are Civil Defence permits mandatory for storage tents in the UAE?',
                                        a: 'Yes. Every occupied structure in the UAE requires Civil Defence and municipality approval. In Dubai, Article 13 mandates permits with fines up to AED 10,000 for unauthorised structures. The Tent Now team handles all permit applications, structural drawings, and safety certifications — at no additional charge.'
                                    },
                                ].map((faq) => (
                                    <details key={faq.q} className="group bg-bg-elevated border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors">
                                        <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                                            <h3 className="text-white font-display text-base leading-snug">{faq.q}</h3>
                                            <span className="text-gold shrink-0 transition-transform group-open:rotate-45 text-xl">+</span>
                                        </summary>
                                        <div className="px-6 pb-5">
                                            <p className="text-text-muted leading-relaxed text-sm">{faq.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>

                            <h2>The Rule of Thumb</h2>
                            <p>
                                If you are <strong>covering</strong> something, choose a tarpaulin. If you need a <strong>fully enclosed space</strong>, choose a storage tent. And if your project is large enough — <strong>use both</strong>.
                            </p>
                            <p>
                                At Tent Now, we supply <Link href="/services/tarpaulins">PE200 tarpaulins</Link> for covering requirements and deploy <Link href="/services/storage-tents">Civil Defence-approved industrial storage tents</Link> for enclosed space. Both are available for rapid deployment across all seven UAE Emirates.
                            </p>

                            <div className="not-prose mt-8 p-6 bg-gold/10 border border-gold/30 rounded-2xl">
                                <h3 className="text-gold font-bold text-xl mb-2">Not Sure Which You Need?</h3>
                                <p className="text-text-muted text-sm mb-4">Describe your site and requirements — we'll tell you the right solution. Free consultation, no obligation.</p>
                                <div className="flex flex-wrap gap-3">
                                    <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-bg-dark font-bold rounded-xl text-sm hover:bg-gold/90 transition-colors">
                                        WhatsApp for Free Advice →
                                    </a>
                                    <Link href="/request-quote" className="inline-flex items-center gap-2 px-6 py-3 bg-bg-elevated border border-border text-white font-bold rounded-xl text-sm hover:border-gold/40 transition-colors">
                                        Request a Quote
                                    </Link>
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

                {/* Related articles */}
                <div className="mt-12 p-8 bg-bg-elevated border border-border/50 rounded-2xl">
                    <h3 className="text-lg font-display text-white mb-4">
                        {isAr ? 'مقالات ذات صلة' : 'Related Articles'}
                    </h3>
                    <div className="flex flex-col gap-3">
                        <Link href="/blog/tarpaulin-price-guide-uae-2026" className="text-gold hover:underline text-sm font-medium">
                            {isAr ? '→ دليل أسعار المشمع في الإمارات 2026: PE مقابل PVC وتقييمات GSM' : '→ Tarpaulin Price Guide UAE 2026: PE vs PVC, GSM Ratings & What to Buy'}
                        </Link>
                        <Link href="/blog/industrial-storage-tent-rental-uae-2026" className="text-gold hover:underline text-sm font-medium">
                            {isAr ? '→ تأجير خيام التخزين الصناعية في الإمارات: الدليل الكامل للتكاليف والتصاريح' : '→ Industrial Storage Tent Rental UAE: Complete Cost & Permit Guide 2026'}
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
