import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogServiceCTA from '@/components/blog/BlogServiceCTA';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';

    const title = isAr
        ? 'دليل إعداد مجلس الفنادق الرمضاني: ما الذي تتوقعه من شركة تأجير الخيام | Tent Now'
        : 'Hotel Ramadan Majlis Setup Guide: What to Expect From a Tent Rental Company | Tent Now';

    const description = isAr
        ? 'الدليل الشامل لمديري الفنادق حول إعداد مجالس رمضان — من الجداول الزمنية للتركيب والتصاريح إلى الموازنة بين المناطق والمواصفات التقنية.'
        : 'The complete guide for hotel managers on setting up Ramadan majlis — from installation timelines and permits to zone planning and technical specifications.';

    return {
        title,
        description,
        keywords: isAr
            ? ['مجلس رمضان الفنادق الإمارات', 'إعداد خيمة فندق رمضان', 'تنظيم مجلس فندقي دبي', 'خيام فنادق رمضان 2026']
            : ['hotel Ramadan majlis UAE', 'hotel iftar tent setup Dubai', 'Ramadan tent for hotels UAE', 'hotel majlis tent rental 2026'],
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/hotel-majlis-setup-guide-uae-2026`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/hotel-majlis-setup-guide-uae-2026',
                'ar': 'https://www.tentnow.ae/ar/blog/hotel-majlis-setup-guide-uae-2026',
            },
        },
        openGraph: {
            title,
            description,
            images: [{ url: 'https://www.tentnow.ae/images/tent-now/hotel.jpg', width: 1200, height: 630 }],
            type: 'article',
        },
    };
}

export default function HotelMajlisGuide() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/hotel-majlis-setup-guide-uae-2026`;
    const articleTitle = isAr
        ? 'دليل إعداد مجلس الفنادق الرمضاني: ما الذي تتوقعه من شركة تأجير الخيام'
        : 'Hotel Ramadan Majlis Setup Guide: What to Expect From a Tent Rental Company';

    return (
        <main className="min-h-screen bg-[#101622] text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={isAr
                    ? 'الدليل الشامل لمديري الفنادق حول إعداد مجالس رمضان — من الجداول الزمنية للتركيب والتصاريح إلى مواصفات المناطق.'
                    : 'The complete guide for hotel managers on setting up Ramadan majlis — timelines, permits, and zone specifications.'}
                image="/images/tent-now/hotel.jpg"
                datePublished="2026-03-05T10:00:00.000Z"
                author="Tent Now"
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4 flex-wrap">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {isAr ? 'دليل الفنادق' : 'Hotel Guide'}
                        </span>
                        <span>{isAr ? '5 مارس 2026' : 'March 5, 2026'}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{isAr ? '9 دقائق قراءة' : '9 min read'}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {isAr ? 'دليل إعداد مجلس الفنادق الرمضاني' : 'Hotel Ramadan Majlis Setup Guide'}
                    </h1>
                    <p className="text-2xl text-white/80 font-semibold mb-4">
                        {isAr ? 'ما الذي تتوقعه من شركة تأجير الخيام' : 'What to Expect From a Tent Rental Company'}
                    </p>
                    <p className="text-[#9da6b9] text-lg max-w-2xl mx-auto">
                        {isAr
                            ? 'من أول مكالمة حتى آخر يوم في رمضان — دليل مدير الفندق الكامل لإعداد مجلس فاخر'
                            : 'From first call to the last day of Ramadan — the complete hotel manager\'s guide to a premium majlis setup'}
                    </p>
                </header>

                <ShareButtons url={articleUrl} title={articleTitle} />

                <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/90 leading-relaxed mt-10">

                    {/* Why this matters */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">
                            {isAr ? 'لماذا يُعدّ مجلس رمضان الفندقي استثماراً لا تكلفة؟' : 'Why a Hotel Ramadan Majlis Is an Investment, Not a Cost'}
                        </h2>
                        <p>
                            {isAr
                                ? 'شهر رمضان يمثل للفنادق الإماراتية ما بين 15–30% من إيرادات الأغذية والمشروبات السنوية. الفنادق التي تُقيم مجالس مميزة لا تكتفي بملء الطاولات — بل تخلق تجارب تُولّد ولاءً للعلامة التجارية لسنوات. في المقابل، الفنادق التي تستهين بهذا الموسم أو تُقيم إعدادات متوسطة تخسر عملاء لصالح منافسين أكثر جدية.'
                                : 'Ramadan represents 15–30% of annual F&B revenue for UAE hotels. Hotels with standout majlis setups don\'t just fill tables — they create experiences that build brand loyalty for years. Hotels that underinvest in the season, or put up average setups, consistently lose guests to more ambitious competitors.'}
                        </p>
                        <p className="mt-4">
                            {isAr
                                ? 'هذا الدليل مكتوب لمديري الفنادق ومسؤولي F&B الذين يريدون فهم ماذا يتوقعون من شركة تأجير الخيام، وما الأسئلة الصحيحة التي يجب طرحها، وكيف يضمنون أن الإعداد يعكس معايير الفندق.'
                                : 'This guide is written for hotel managers and F&B leads who want to understand what to expect from a tent rental company, what questions to ask, and how to ensure the setup reflects the property\'s standards.'}
                        </p>
                    </section>

                    {/* Timeline */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">
                            {isAr ? 'الجدول الزمني المثالي: من متى تبدأ التخطيط؟' : 'The Ideal Timeline: When Should You Start Planning?'}
                        </h2>
                        <div className="space-y-4">
                            {(isAr ? [
                                { time: '8 أسابيع قبل رمضان', desc: 'ابدأ التواصل مع شركات تأجير الخيام. رمضان 2026 بدأ في مارس — شركات الجودة تمتلئ جداولها من يناير.' },
                                { time: '6 أسابيع قبل', desc: 'احجز وادفع العربون. وضّح متطلبات الموقع، الحجم المستهدف، وأي قيود على الموقع.' },
                                { time: '4 أسابيع قبل', desc: 'ابدأ إجراءات التصاريح. بلدية دبي وأبوظبي تحتاج عادةً 2–3 أسابيع. شركة محترفة تتولى هذا عنك.' },
                                { time: '2 أسبوعين قبل', desc: 'اجتماع تنسيق ميداني بين فريق الفندق وفريق الشركة. حدد مواقع الإمدادات والطاقة ونقاط الوصول.' },
                                { time: '5–7 أيام قبل', desc: 'بدء التركيب. الإعداد الفندقي الكامل يستغرق 3–7 أيام حسب الحجم والتعقيد.' },
                                { time: 'يوم ما قبل رمضان', desc: 'اختبار شامل: التكييف، الإضاءة، الكهرباء، ومسارات الخدمة. لا تترك شيئاً للمفاجآت.' },
                            ] : [
                                { time: '8 weeks before Ramadan', desc: 'Start contacting tent rental companies. Ramadan 2026 started in March — quality companies fill their schedules from January.' },
                                { time: '6 weeks before', desc: 'Book and pay deposit. Clarify site requirements, target capacity, and any on-property restrictions.' },
                                { time: '4 weeks before', desc: 'Begin permit processing. Dubai and Abu Dhabi municipalities typically require 2–3 weeks. A professional company handles this for you.' },
                                { time: '2 weeks before', desc: 'Field coordination meeting between hotel team and tent company. Identify utility points, power connections, and access routes.' },
                                { time: '5–7 days before', desc: 'Installation begins. A full hotel setup takes 3–7 days depending on size and complexity.' },
                                { time: 'Day before Ramadan', desc: 'Full testing: AC, lighting, power, and service pathways. Leave nothing for last-minute surprises.' },
                            ]).map((step, i) => (
                                <div key={i} className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">{i + 1}</div>
                                    <div>
                                        <p className="text-gold font-bold text-sm mb-1">{step.time}</p>
                                        <p className="text-white/80 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Zones */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">
                            {isAr ? 'تصميم المناطق: أربع مناطق أساسية لكل مجلس فندقي ناجح' : 'Zone Planning: 4 Core Zones for Every Successful Hotel Majlis'}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {(isAr ? [
                                { zone: 'منطقة الاستقبال والترحيب', desc: 'مدخل المجلس يضع الانطباع الأول. عادةً مساحة بوابة معمارية مع ديكور مضاء جيداً وسجاد احتفالي. ارتفاع 2.5–3 متر يُوحي بالفخامة.' },
                                { zone: 'منطقة المجلس الرئيسية', desc: 'الجلسات الأرضية العربية بالوسائد والسجاد والأقمشة. يجب أن تشعر بالدفء والأصالة. نسبة 60% من الضيوف تُقضي معظم وقتها هنا.' },
                                { zone: 'منطقة طاولات الطعام', desc: 'لاستيعاب الضيوف الذين يُفضلون الجلوس على الكراسي. اجعلها منفصلة عن المجلس لتجنب الازدحام. 40% من الضيوف يُفضلون الكراسي.' },
                                { zone: 'منطقة البوفيه والخدمة', desc: 'يجب أن تكون في محيط لا في المنتصف. ممرات الخدمة يجب ألا تقطع مناطق جلوس الضيوف. أبعاد 3–4 متر عرض كافية للعمليات الفعالة.' },
                            ] : [
                                { zone: 'Welcome & Arrival Zone', desc: 'The majlis entrance sets the first impression. Usually an architectural gateway element with well-lit decor and event carpet. A height of 2.5–3m signals luxury.' },
                                { zone: 'Main Majlis Seating Zone', desc: 'Traditional Arabic floor seating with cushions, carpet, and fabric draping. Should feel warm and authentic. 60% of guests spend most of their time here.' },
                                { zone: 'Dining Table Zone', desc: 'For guests who prefer chair seating. Keep it separate from the majlis area to prevent overcrowding. Approximately 40% of guests prefer chair seating.' },
                                { zone: 'Buffet & Service Zone', desc: 'Should be on the perimeter, not the centre. Service pathways must not cut through guest seating areas. 3–4m width is sufficient for efficient operations.' },
                            ]).map((z) => (
                                <div key={z.zone} className="p-5 bg-white/5 border border-white/10 rounded-xl">
                                    <p className="text-gold font-bold mb-2">{z.zone}</p>
                                    <p className="text-white/75 text-sm leading-relaxed">{z.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical specs */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">
                            {isAr ? 'المواصفات التقنية التي يجب تأكيدها' : 'Technical Specifications to Confirm'}
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gold/20 text-gold">
                                        <th className="p-3 text-start border border-white/10">{isAr ? 'المعامل' : 'Parameter'}</th>
                                        <th className="p-3 text-start border border-white/10">{isAr ? 'المعيار الموصى به' : 'Recommended Standard'}</th>
                                        <th className="p-3 text-start border border-white/10">{isAr ? 'ملاحظة' : 'Note'}</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white/80">
                                    {(isAr ? [
                                        ['ارتفاع الهيكل', '4.5–6 متر (للفنادق)', 'أقل من 4 متر يبدو مضغوطاً'],
                                        ['التكييف', '1 طن لكل 15–20 م²', 'أعلى في المساحات غير المعزولة'],
                                        ['الإضاءة', '300–500 lux للمجلس', 'أضواء معلقة + إضاءة محيطية'],
                                        ['الأرضيات', 'سجاد 10–15 مم + طبقة معزولة', 'يمنع الصوت ويوفر الراحة'],
                                        ['الكهرباء', '3-phase 380V للكبار', 'أكد مع الفندق قبل التركيب'],
                                        ['مخارج الطوارئ', 'باب لكل 100 م² كحد أدنى', 'إلزامي بموجب اشتراطات الدفاع المدني'],
                                    ] : [
                                        ['Structure height', '4.5–6m (hotel-grade)', 'Below 4m feels cramped'],
                                        ['Air conditioning', '1 ton per 15–20 sqm', 'Higher in non-insulated spaces'],
                                        ['Lighting level', '300–500 lux for majlis', 'Hanging pendants + ambient strip'],
                                        ['Flooring', '10–15mm carpet + underlay', 'Prevents sound and adds comfort'],
                                        ['Power supply', '3-phase 380V for large setups', 'Confirm with hotel before install'],
                                        ['Emergency exits', 'One door per 100 sqm minimum', 'Mandatory per Civil Defence requirements'],
                                    ]).map(([param, standard, note], i) => (
                                        <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? 'bg-white/5' : ''}`}>
                                            <td className="p-3 border border-white/10 font-semibold text-white">{param}</td>
                                            <td className="p-3 border border-white/10 text-gold font-medium">{standard}</td>
                                            <td className="p-3 border border-white/10 text-white/60 text-xs">{note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* What to ask */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">
                            {isAr ? '8 أسئلة يجب طرحها على كل شركة' : '8 Questions to Ask Every Tent Company'}
                        </h2>
                        <ol className="space-y-3">
                            {(isAr ? [
                                'هل عملتم مع فنادق من نفس فئة نجومنا؟ اطلبوا مراجع محددة.',
                                'من يتولى تصاريح الدفاع المدني والبلدية لهذا الفندق تحديداً؟',
                                'كم يستغرق التركيب الكامل لحجم مجلسنا؟',
                                'ما حجم وحدات التكييف التي ستركبونها؟ احسبوا BTU المطلوبة.',
                                'هل تشمل الأسعار تفكيك الخيمة بعد رمضان؟',
                                'من هو مدير المشروع الميداني وكيف نتواصل معه؟',
                                'هل لديكم طاقم دعم ميداني خلال شهر رمضان كاملاً؟',
                                'ما سياسة الكفالة في حال التأخر أو الإخلال بالجودة؟',
                            ] : [
                                'Have you worked with hotels of our star category? Ask for specific references.',
                                'Who handles the Civil Defence and municipality permits for this specific property?',
                                'How long does full installation take for our majlis size?',
                                'What AC unit tonnage will you install? Show me the BTU calculation.',
                                'Does the price include tent removal after Ramadan ends?',
                                'Who is the on-site project manager and how do we reach them?',
                                'Is there field support staff throughout the full 30-day Ramadan period?',
                                'What is your warranty or remedy policy if there is a quality issue or delay?',
                            ]).map((q, i) => (
                                <li key={i} className="flex gap-3 text-white/85">
                                    <span className="text-gold font-bold flex-shrink-0">{i + 1}.</span>
                                    <span>{q}</span>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* Tent Now advantage */}
                    <section>
                        <div className="bg-[#1a212e] border border-[#282e39] rounded-2xl p-8">
                            <h2 className="text-2xl font-display text-gold mb-4">
                                {isAr ? 'لماذا تختار Tent Now لمجلس فندقك؟' : 'Why Hotels Choose Tent Now'}
                            </h2>
                            <ul className="space-y-3 text-white/85">
                                {(isAr ? [
                                    '30+ عاماً من الخبرة في إعداد مجالس الفنادق في دبي وأبوظبي والشارقة',
                                    'لدينا علاقات راسخة مع بلديات جميع الإمارات السبع وسلطات الدفاع المدني',
                                    'فريق من 50+ متخصص في الإعداد والتصميم والدعم الميداني',
                                    'محفظة تضم 1,000+ فعالية فندقية',
                                    'سعر شامل — لا رسوم مخفية، لا مفاجآت في الفاتورة',
                                    'جاهزون لطلبات الفنادق من الدرجة الأولى والخمس نجوم',
                                ] : [
                                    '30+ years specifically setting up hotel majlis setups in Dubai, Abu Dhabi, and Sharjah',
                                    'Established relationships with municipalities across all 7 Emirates and Civil Defence authorities',
                                    'Team of 50+ installation, design, and field support specialists',
                                    'Portfolio of 1,000+ hotel event setups',
                                    'All-inclusive pricing — no hidden fees, no invoice surprises',
                                    'Ready for 3-star through 5-star property requirements',
                                ]).map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-gold mt-1">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                <BlogServiceCTA variant="ramadan" />

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <Link href="/blog" className="text-gold hover:underline text-sm font-bold">
                        {isAr ? '← عودة إلى المدونة' : '← Back to Blog'}
                    </Link>
                </div>
            </article>
        </main>
    );
}
