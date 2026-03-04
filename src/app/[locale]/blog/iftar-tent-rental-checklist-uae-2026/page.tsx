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
        ? 'قائمة مراجعة تأجير خيمة الإفطار: 12 نقطة يجب تأكيدها قبل الحجز | Tent Now'
        : 'Iftar Tent Rental Checklist: 12 Things to Confirm Before Booking | Tent Now';

    const description = isAr
        ? 'كل ما يجب التحقق منه قبل حجز خيمة إفطار في الإمارات — التصاريح، التكييف، الحجم، الديكور، التوقيت، والتكلفة. لا مفاجآت يوم الفعالية.'
        : 'Everything to verify before booking an iftar tent in UAE — permits, AC, sizing, decor, timing, and cost. No surprises on event day.';

    return {
        title,
        description,
        keywords: isAr
            ? ['قائمة مراجعة خيمة إفطار', 'تأجير خيمة رمضان الإمارات', 'تنظيم خيمة إفطار دبي', 'نصائح تأجير الخيام']
            : ['iftar tent rental checklist', 'how to book iftar tent UAE', 'Ramadan tent rental tips', 'iftar tent Dubai checklist', 'what to check tent rental UAE'],
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/iftar-tent-rental-checklist-uae-2026`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/iftar-tent-rental-checklist-uae-2026',
                'ar': 'https://www.tentnow.ae/ar/blog/iftar-tent-rental-checklist-uae-2026',
            },
        },
        openGraph: {
            title,
            description,
            images: [{ url: '/images/tent-now/iftar-tents.jpg', width: 1200, height: 630 }],
            type: 'article',
        },
    };
}

export default function IftarTentChecklistPage() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/iftar-tent-rental-checklist-uae-2026`;
    const articleTitle = isAr
        ? 'قائمة مراجعة تأجير خيمة الإفطار: 12 نقطة يجب تأكيدها قبل الحجز'
        : 'Iftar Tent Rental Checklist: 12 Things to Confirm Before Booking';

    const checklist = isAr ? [
        {
            num: '01', title: 'التصاريح والموافقات',
            body: 'تحقق من أن الشركة تتولى جميع التصاريح — بلدية دبي أو أبوظبي، الدفاع المدني، وأي موافقات للمناطق الحرة. اطلب نسخاً من التصاريح قبل يوم التركيب. شركة موثوقة تقدم هذا بشكل تلقائي دون الحاجة لمطالبتها.',
            icon: '📋',
        },
        {
            num: '02', title: 'الحجم والسعة',
            body: 'احسب: 1.5–2 متر مربع لكل ضيف في إعدادات الجلوس، أو 0.8–1 متر مربع في الجلسات الأرضية. لا تتجاهل المساحات الإضافية للبوفيهات وطرق المرور وأركان المجلس. اطلب من الشركة تأكيد السعة المريحة بالكتابة.',
            icon: '📐',
        },
        {
            num: '03', title: 'التكييف وحمل الحرارة',
            body: 'في الإمارات، التكييف ليس خياراً بل ضرورة — حتى في مارس. تأكد من أن الشركة تحسب BTU المطلوبة بناءً على مساحة الخيمة وعدد الضيوف والتعرض للشمس. اسأل: كم عدد وحدات الـ split أو ton التي سيتم تركيبها؟',
            icon: '❄️',
        },
        {
            num: '04', title: 'الإطار الزمني للتركيب',
            body: 'أكد تاريخ البدء والانتهاء بالكتابة. معظم الإعدادات الجيدة تحتاج يومين على الأقل قبل الفعالية. تجنب الشركات التي تعد بتركيب "في نفس اليوم" للإعدادات المعقدة — هذا يعني تسرعاً في الجودة.',
            icon: '📅',
        },
        {
            num: '05', title: 'شمولية السعر',
            body: 'اطلب سعراً شاملاً كاملاً. الأسعار الغامضة أحياناً تستثني: الأرضيات، الكهرباء، وحدات التكييف، التصاريح، والتفكيك. وضّح مسبقاً وتجنب المفاجآت في الفاتورة النهائية.',
            icon: '💰',
        },
        {
            num: '06', title: 'سياسة الطقس والطوارئ',
            body: 'رغم أن مارس في الإمارات ليس موسم عواصف، قد تحدث رياح غير متوقعة. تأكد من أن الهيكل مقيد وآمن وفق معايير الدفاع المدني، واسأل عن سياسة الشركة في حالة الطقس الشديد.',
            icon: '🌬️',
        },
        {
            num: '07', title: 'أثاث وأقمشة المجلس',
            body: 'هل تتولى الشركة المجلس الكامل أم تأجير الهيكل فقط؟ حدد: وسائد الجلوس، سجاد الأرضية، أقمشة الجدران، أغطية الطاولات، والإضاءة. التفاصيل هنا هي ما يفرق بين مجلس فاخر وآخر عادي.',
            icon: '🛋️',
        },
        {
            num: '08', title: 'التصاريح والاشتراطات لكل إمارة',
            body: 'دبي وأبوظبي والشارقة لديها هيئات تنظيمية مختلفة. تأكد من أن الشركة على دراية بمتطلبات الإمارة التي ستُقام فيها الفعالية — ليس فقط دبي. هذا أمر بالغ الأهمية للفنادق والمواقع التجارية.',
            icon: '🗺️',
        },
        {
            num: '09', title: 'تأمين الكهرباء',
            body: 'من يوفر الطاقة الكهربائية؟ هل تحتاج مولداً؟ من يتحمل التكلفة؟ الكهرباء كثيراً ما تكون الثغرة في العقود — وضّح ذلك مسبقاً تفادياً لأي خلافات.',
            icon: '⚡',
        },
        {
            num: '10', title: 'مراجع وصور أعمال سابقة',
            body: 'اطلب صور أعمال من نفس نوع الفعالية التي تخطط لها. شركة تؤجر خيام لرمضان منذ 10+ سنوات يجب أن يكون لديها مئات الصور. غياب المحفظة البصرية علامة تحذير.',
            icon: '📸',
        },
        {
            num: '11', title: 'شروط الإلغاء والتأخير',
            body: 'ماذا يحدث لو اضطررت للتأجيل؟ وماذا لو تأخرت الشركة في التركيب؟ وضّح هذه البنود في العقد — خاصةً في رمضان حيث الجداول الزمنية لا مرونة فيها.',
            icon: '📜',
        },
        {
            num: '12', title: 'خدمة ما بعد التركيب',
            body: 'هل يوجد خط دعم ميداني طوال مدة الفعالية؟ الخيام الرامضانية تعمل لـ 30 يوماً متواصلة — التكييف يحتاج صيانة، الأقمشة قد تحتاج تعديلاً. تأكد من وجود استجابة ميدانية في 24 ساعة.',
            icon: '🔧',
        },
    ] : [
        {
            num: '01', title: 'Permits & Civil Defence Approvals',
            body: 'Confirm the company handles all permits — Dubai or Abu Dhabi Municipality, Civil Defence approval, and any free zone authority clearances. Ask for copies of submitted permits before installation day. A reliable company provides this automatically without you needing to ask.',
            icon: '📋',
        },
        {
            num: '02', title: 'Size & Guest Capacity',
            body: 'Calculate: 1.5–2 sqm per guest for seated arrangements, or 0.8–1 sqm for floor seating setups. Don\'t forget buffer for buffet stations, walkways, and majlis corners. Ask the company to confirm comfortable capacity in writing.',
            icon: '📐',
        },
        {
            num: '03', title: 'Air Conditioning & Heat Load',
            body: 'In the UAE, AC is not optional — even in March. Confirm the company calculates BTU requirements based on tent area, guest count, and sun exposure. Ask: how many split units or tonnage will be installed?',
            icon: '❄️',
        },
        {
            num: '04', title: 'Installation Timeline',
            body: 'Confirm start and completion dates in writing. Most good setups need at least 2 days before the event. Avoid companies promising "same-day" installations for complex setups — it means rushed quality.',
            icon: '📅',
        },
        {
            num: '05', title: 'What\'s Actually Included in the Price',
            body: 'Request a fully itemised quote. Vague pricing sometimes excludes flooring, electricity, AC units, permits, and removal. Clarify upfront to avoid invoice surprises at the end.',
            icon: '💰',
        },
        {
            num: '06', title: 'Weather & Emergency Policy',
            body: 'While March in UAE is not storm season, unexpected winds occur. Confirm the structure is anchored and certified to Civil Defence standards, and ask about the company\'s policy during severe weather conditions.',
            icon: '🌬️',
        },
        {
            num: '07', title: 'Majlis Furniture & Fabric Finishes',
            body: 'Does the company do the full majlis or structure-only? Specify: floor cushions, carpet type, wall draping, table covers, and lighting. The details here are what separate a luxury setup from a basic one.',
            icon: '🛋️',
        },
        {
            num: '08', title: 'Emirate-Specific Requirements',
            body: 'Dubai, Abu Dhabi, and Sharjah have different regulatory bodies. Confirm the company knows the requirements for your specific emirate — not just Dubai. This is especially critical for hotel and commercial venues.',
            icon: '🗺️',
        },
        {
            num: '09', title: 'Power Supply Arrangement',
            body: 'Who provides the electricity connection? Is a generator needed? Who covers the cost? Power supply is often the gap in tent rental contracts — clarify upfront to avoid disputes later.',
            icon: '⚡',
        },
        {
            num: '10', title: 'Portfolio & Previous Work References',
            body: 'Ask for photos of similar setups they\'ve done. A company with 10+ years in Ramadan tent rental should have hundreds of portfolio photos. Lack of visual evidence is a red flag.',
            icon: '📸',
        },
        {
            num: '11', title: 'Cancellation & Delay Terms',
            body: 'What happens if you need to postpone? What if the company is late to install? Clarify these terms in the contract — especially during Ramadan where timelines are inflexible.',
            icon: '📜',
        },
        {
            num: '12', title: 'Post-Installation Support',
            body: 'Is there a field support line throughout the event period? Ramadan tents run for 30 consecutive days — AC units need maintenance, fabrics may need adjustment. Confirm 24-hour field response is available.',
            icon: '🔧',
        },
    ];

    return (
        <main className="min-h-screen bg-[#101622] text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={isAr
                    ? 'كل ما يجب التحقق منه قبل حجز خيمة إفطار في الإمارات — التصاريح والتكييف والحجم والديكور والتوقيت والتكلفة.'
                    : 'Everything to verify before booking an iftar tent in UAE — permits, AC, sizing, decor, timing, and cost.'}
                image="/images/tent-now/iftar-tents.jpg"
                datePublished="2026-03-05T08:00:00.000Z"
                author="Tent Now"
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4 flex-wrap">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {isAr ? 'دليل الحجز' : 'Booking Guide'}
                        </span>
                        <span>{isAr ? '5 مارس 2026' : 'March 5, 2026'}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{isAr ? '7 دقائق قراءة' : '7 min read'}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {isAr ? 'قائمة مراجعة تأجير خيمة الإفطار' : 'Iftar Tent Rental Checklist'}
                    </h1>
                    <p className="text-2xl text-white/80 font-semibold mb-4">
                        {isAr ? '12 نقطة يجب تأكيدها قبل الحجز' : '12 Things to Confirm Before Booking'}
                    </p>
                    <p className="text-[#9da6b9] text-lg max-w-2xl mx-auto">
                        {isAr
                            ? 'احجز بثقة — هذه القائمة تحميك من المفاجآت وتضمن فعالية ناجحة من اليوم الأول'
                            : 'Book with confidence — this checklist protects you from surprises and ensures a successful event from day one'}
                    </p>
                </header>

                <ShareButtons url={articleUrl} title={articleTitle} />

                {/* Intro */}
                <div className="bg-[#1a212e] border border-[#282e39] rounded-2xl p-6 mb-10">
                    <p className="text-white/85 leading-relaxed">
                        {isAr
                            ? 'بعد 30 عاماً من تنظيم فعاليات رمضان في الإمارات، سمعنا كل شيء — من إعدادات تأخرت ساعات قبل الإفطار، إلى خيام بدون تصاريح أوقفها الدفاع المدني. هذه القائمة تعكس كل ما تعلمناه حتى لا تمر بأي من هذه التجارب.'
                            : 'After 30 years of delivering Ramadan events across the UAE, we\'ve seen everything — from setups delayed hours before iftar to tents stopped by Civil Defence for missing permits. This checklist reflects everything we\'ve learned so you don\'t experience any of it.'}
                    </p>
                </div>

                {/* Checklist */}
                <div className="space-y-6">
                    {checklist.map((item) => (
                        <div key={item.num} className="flex gap-5 p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-colors">
                            <div className="flex-shrink-0 text-center">
                                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-display font-bold text-sm">
                                    {item.num}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xl">{item.icon}</span>
                                    <h2 className="text-white font-bold text-lg">{item.title}</h2>
                                </div>
                                <p className="text-[#9da6b9] leading-relaxed">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary box */}
                <div className="mt-12 bg-gold/10 border border-gold/30 rounded-2xl p-8">
                    <h3 className="text-gold font-display text-xl font-bold mb-4">
                        {isAr ? 'ملخص سريع — قائمة الاختيار' : 'Quick Summary — The Checklist'}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {checklist.map((item) => (
                            <li key={item.num} className="flex items-center gap-2 text-white/80 text-sm">
                                <span className="text-gold text-xs font-bold">{item.num}</span>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tent Now CTA */}
                <BlogServiceCTA variant="ramadan" />

                {/* Back to blog */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <Link href="/blog" className="text-gold hover:underline text-sm font-bold">
                        {isAr ? '← عودة إلى المدونة' : '← Back to Blog'}
                    </Link>
                </div>
            </article>
        </main>
    );
}
