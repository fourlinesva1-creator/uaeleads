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
        ? 'كيف تختار أفضل شركة تأجير خيام في الإمارات ودبي: 7 معايير أساسية | Tent Now'
        : 'How to Choose the Best Tent Rental Company in UAE & Dubai: 7 Must-Check Criteria | Tent Now';

    const description = isAr
        ? 'تجاهل التصاريح قد يُكلفك غرامة باهظة في الإمارات. تحقق من 7 معايير — الخبرة والتصاريح والمحفظة والدعم — قبل توقيع عقد. استشر شركة خيام موثوقة الآن.'
        : 'Avoid costly fines — check these 7 criteria before choosing a tent rental company in UAE: experience, permits, portfolio & field support. Free quote.';

    return {
        title,
        description,
        keywords: isAr
            ? ['أفضل شركة تأجير خيام الإمارات', 'كيف أختار شركة خيام دبي', 'معايير اختيار شركة تأجير خيام', 'شركة خيام موثوقة الإمارات']
            : ['how to choose tent rental company UAE', 'best tent rental company Dubai', 'tent rental company comparison UAE', 'reliable tent company UAE 2026'],
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/how-to-choose-tent-rental-company-uae`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/how-to-choose-tent-rental-company-uae',
                'ar': 'https://www.tentnow.ae/ar/blog/how-to-choose-tent-rental-company-uae',
                'x-default': 'https://www.tentnow.ae/en/blog/how-to-choose-tent-rental-company-uae',
            },
        },
        openGraph: {
            title,
            description,
            images: [{ url: 'https://www.tentnow.ae/images/tent-now/ramadan-tents.jpg', width: 1200, height: 630 }],
            type: 'article',
        },
    };
}

export default function HowToChooseTentCompany() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/how-to-choose-tent-rental-company-uae`;
    const articleTitle = isAr
        ? 'كيف تختار شركة تأجير خيام في الإمارات: 7 معايير أساسية'
        : 'How to Choose a Tent Rental Company in UAE: 7 Must-Check Criteria';

    const criteria = isAr ? [
        {
            num: '1', title: 'الخبرة والتخصص في السوق الإماراتي',
            body: 'سوق تأجير الخيام في الإمارات له متطلبات فريدة: مناخ حار، لوائح صارمة، وتوقعات عالية من العملاء. الشركة ذات الخبرة في السوق الإماراتي تعرف كيف تتعامل مع الجهات التنظيمية، وتعرف ما يصلح فنياً في حرارة المنطقة، وتعرف كيف تُترجم التراث العربي إلى تصميم عصري.',
            redFlag: 'شركة لم تعمل في السوق الإماراتي لأكثر من 3–5 سنوات على الأقل تمثل خطراً على فعاليتك.',
        },
        {
            num: '2', title: 'إدارة التصاريح والامتثال',
            body: 'في الإمارات، كل خيمة كبيرة تحتاج موافقة من الجهات المختصة — بلدية دبي أو أبوظبي، الدفاع المدني، وأحياناً هيئات المناطق الحرة. الشركة التي لا تتولى هذا الإجراء بنفسها إما لا تعلم ما تفعله أو تحاول تحميلك مسؤولية المخاطر.',
            redFlag: 'إذا قالت الشركة "التصاريح مسؤوليتك" — ابحث عن شركة أخرى.',
        },
        {
            num: '3', title: 'المحفظة المرئية والمراجع الموثقة',
            body: 'اطلب صور فعاليات مشابهة لما تحتاجه. شركة جادة لديها مئات الصور من إعدادات حقيقية — مجالس فنادق، فعاليات مؤسسية، مجالس منزلية. إذا أظهروا لك نفس 5–10 صور، هذا يعني أن محفظتهم محدودة. والأهم: اطلب مراجع من عملاء سابقين للتواصل معهم مباشرة.',
            redFlag: 'غياب المحفظة البصرية أو رفض تقديم مراجع يُعدّ علامة تحذير كبيرة.',
        },
        {
            num: '4', title: 'الشفافية الكاملة في التسعير',
            body: 'الفاتورة النهائية يجب ألا تختلف عن عرض السعر الأولي. اطلب عرضاً مُفصّلاً بند ببند يشمل: الهيكل، الأرضيات، التكييف، الإضاءة، التصاريح، التركيب، التفكيك، وأي إضافات. الشركات التي تقدم سعراً "شاملاً" دون تفصيل قد تفاجئك لاحقاً.',
            redFlag: 'تجنب الشركات التي تُحجم عن تفصيل مكونات السعر.',
        },
        {
            num: '5', title: 'الدعم الميداني طوال المدة',
            body: 'تأجير الخيمة لا ينتهي بيوم التركيب. خيام رمضان تعمل 30 يوماً — التكييف يحتاج صيانة، الأقمشة قد تتعرض للرياح، قد تحتاج تعديلات طارئة. تأكد من أن الشركة لديها فريق ميداني مستعد خلال ساعات للتدخل في أي طارئ.',
            redFlag: 'إذا لم يكن للشركة خط دعم ميداني واضح خلال فترة الإيجار، ستكون وحدك عند أول مشكلة.',
        },
        {
            num: '6', title: 'جودة المواد والشهادات الفنية',
            body: 'ليست كل الخيام متساوية. اسأل عن: نوع قماش PVC ومعامل الحرارة، نوع هيكل الألومنيوم ودرجة السبيكة، وشهادات الحريق (DIN 4102 B1 أو NFPA 701). مواد رديئة تعني إعادة تركيب مُحرجة وتكاليف غير متوقعة.',
            redFlag: 'أي شركة لا تستطيع ذكر مواصفات مواد الهيكل والقماش.',
        },
        {
            num: '7', title: 'التواصل والاستجابة',
            body: 'كيف تستجيب الشركة لك قبل التوقيع يُخبرك كيف ستتعامل معك بعده. هل يردون على رسائلك خلال ساعات؟ هل مديرهم يتحدث بوضوح عن متطلباتك؟ سرعة الاستجابة وجودة التواصل في مرحلة الاستفسار تعكس ثقافة الشركة بأكملها.',
            redFlag: 'الشركة التي تستغرق أياماً للرد على استفسار أولي لن تكون أفضل أثناء الفعالية.',
        },
    ] : [
        {
            num: '1', title: 'UAE Market Experience & Specialisation',
            body: 'The UAE tent rental market has unique requirements: extreme heat, strict regulations, and high client expectations. A company experienced in the UAE knows how to navigate regulatory bodies, understands what works technically in the region\'s climate, and can translate Arabic heritage into contemporary design.',
            redFlag: 'A company with less than 3–5 years of active UAE market presence is a risk to your event.',
        },
        {
            num: '2', title: 'Permit Management & Compliance',
            body: 'In the UAE, every large tent requires approval from relevant authorities — Dubai or Abu Dhabi Municipality, Civil Defence, and sometimes free zone authorities. A company that doesn\'t handle this process itself either doesn\'t know what it\'s doing or is trying to shift risk to you.',
            redFlag: 'If the company says "permits are your responsibility" — find another company.',
        },
        {
            num: '3', title: 'Visual Portfolio & Documented References',
            body: 'Ask for photos of setups similar to what you need. A serious company has hundreds of images from real events — hotel majlis, corporate iftars, residential setups. If they show you the same 5–10 photos, their portfolio is thin. More importantly: ask for past client references to contact directly.',
            redFlag: 'Lack of visual portfolio or refusal to provide references is a major red flag.',
        },
        {
            num: '4', title: 'Fully Transparent Pricing',
            body: 'The final invoice should not differ from the initial quote. Request a fully itemised quote covering: structure, flooring, AC, lighting, permits, installation, removal, and any add-ons. Companies that offer an "all-in" price without breakdown may surprise you later.',
            redFlag: 'Avoid companies that hesitate to break down price components.',
        },
        {
            num: '5', title: 'Field Support Throughout the Rental Period',
            body: 'Tent rental doesn\'t end on installation day. Ramadan tents run for 30 days — AC units need maintenance, fabrics may be affected by wind, emergency adjustments may be needed. Confirm the company has a field team ready to respond within hours to any issue.',
            redFlag: 'If the company has no clear field support line during the rental period, you\'ll be alone at the first problem.',
        },
        {
            num: '6', title: 'Material Quality & Technical Certifications',
            body: 'Not all tents are equal. Ask about: PVC fabric type and heat coefficient, aluminium frame alloy grade, and fire certifications (DIN 4102 B1 or NFPA 701). Poor materials mean embarrassing reinstallation and unexpected costs.',
            redFlag: 'Any company unable to state the material specifications of their structure and fabric.',
        },
        {
            num: '7', title: 'Communication & Responsiveness',
            body: 'How a company communicates before you sign tells you how they\'ll behave after. Do they respond to messages within hours? Does their manager speak clearly about your requirements? Response speed and quality during the enquiry phase reflects the company\'s culture entirely.',
            redFlag: 'A company that takes days to reply to an initial enquiry will not be better during your event.',
        },
    ];

    return (
        <main className="min-h-screen bg-[#101622] text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={isAr
                    ? 'الدليل العملي لاختيار شركة تأجير الخيام المناسبة في الإمارات — لا تقتصر على السعر.'
                    : 'The practical guide to selecting the right tent rental company in UAE — don\'t go on price alone.'}
                image="/images/tent-now/ramadan-tents.jpg"
                datePublished="2026-03-05T12:00:00.000Z"
                author="Tent Now"
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4 flex-wrap">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {isAr ? 'دليل الشراء' : 'Buyer\'s Guide'}
                        </span>
                        <span>{isAr ? '5 مارس 2026' : 'March 5, 2026'}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{isAr ? '6 دقائق قراءة' : '6 min read'}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {isAr ? 'كيف تختار شركة تأجير خيام في الإمارات' : 'How to Choose a Tent Rental Company in UAE'}
                    </h1>
                    <p className="text-2xl text-white/80 font-semibold mb-4">
                        {isAr ? '7 معايير أساسية' : '7 Must-Check Criteria'}
                    </p>
                    <p className="text-[#9da6b9] text-lg max-w-2xl mx-auto">
                        {isAr
                            ? 'تعلّمنا هذه الدروس من 30 عاماً في السوق — نشاركها معك حتى تختار الشريك الصحيح'
                            : 'We learned these lessons from 30 years in the market — we\'re sharing them so you choose the right partner'}
                    </p>
                </header>

                <ShareButtons url={articleUrl} title={articleTitle} />

                <div className="mt-10 bg-[#1a212e] border border-[#282e39] rounded-2xl p-6 mb-10">
                    <p className="text-white/85 leading-relaxed">
                        {isAr
                            ? <>بعد 30 عاماً في سوق تأجير الخيام الإماراتي، نعرف تماماً لماذا يندم بعض العملاء على اختياراتهم. ليس بسبب الأسعار — بل بسبب الوعود غير المُنجزة، والتصاريح المفقودة، والتكييف غير الكافي، والدعم الغائب وقت الحاجة. سواء كنت تبحث عن خدمات <Link href="/services" className="text-gold hover:underline font-semibold">تأجير الخيام</Link>، أو تحتاج إلى معرفة المزيد عن <Link href="/services/iftar-tent-rental" className="text-gold hover:underline font-semibold">خيام الإفطار</Link> و<Link href="/services/home-majlis" className="text-gold hover:underline font-semibold">المجالس المنزلية</Link>، هذا الدليل مكتوب بصدق تام — حتى لو اخترت شركة غيرنا في النهاية.</>
                            : <>After 30 years in the UAE tent rental market, we know exactly why some clients end up regretting their choices. Not because of price — but because of unkept promises, missing permits, insufficient AC, and absent support when needed. Whether you are exploring our full range of <Link href="/services" className="text-gold hover:underline font-semibold">tent rental services</Link>, or comparing options for <Link href="/services/iftar-tent-rental" className="text-gold hover:underline font-semibold">iftar tent rental</Link> or a <Link href="/services/home-majlis" className="text-gold hover:underline font-semibold">home majlis setup</Link>, this guide is written with full honesty — even if you choose a different company in the end.</>
                        }
                    </p>
                </div>

                <div className="space-y-8">
                    {criteria.map((c) => (
                        <div key={c.num} className="p-7 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-colors">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-display font-bold">
                                    {c.num}
                                </div>
                                <h2 className="text-xl font-display text-white pt-1.5">{c.title}</h2>
                            </div>
                            <p className="text-[#9da6b9] leading-relaxed mb-4">{c.body}</p>
                            <div className="flex items-start gap-2 bg-red-900/20 border border-red-500/20 rounded-xl p-3">
                                <span className="text-red-400 font-bold text-sm flex-shrink-0 mt-0.5">⚠</span>
                                <p className="text-red-300/80 text-sm">{c.redFlag}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final word */}
                <div className="mt-12 bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
                    <h3 className="text-gold font-display text-xl font-bold mb-3">
                        {isAr ? 'الاختيار الصحيح يوفر وقتك وميزانيتك وأعصابك' : 'The Right Choice Saves Your Time, Budget, and Nerves'}
                    </h3>
                    <p className="text-white/75 leading-relaxed max-w-xl mx-auto">
                        {isAr
                            ? 'الشركة الصحيحة لا تجعلك تقلق من يوم التوقيع حتى يوم التفكيك. اسأل الأسئلة الصحيحة، تحقق من المراجع، واطلب سعراً شاملاً — ثم ستعرف من تختار.'
                            : 'The right company makes you not worry from the day you sign to the day of removal. Ask the right questions, check the references, request a fully inclusive price — then you\'ll know who to choose.'}
                    </p>
                </div>

                <BlogServiceCTA variant="general" />

                {/* Related Articles */}
                <div className="mt-12 pt-10 border-t border-white/10">
                    <h3 className="text-xl font-display text-gold mb-6">
                        {isAr ? 'مقالات ذات صلة' : 'Related Articles'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            {
                                href: '/blog/top-tent-suppliers-uae-2026',
                                en: 'Top Tent Suppliers UAE 2026',
                                ar: 'أفضل موردي الخيام في الإمارات 2026',
                            },
                            {
                                href: '/blog/ramadan-tent-pricing-guide-uae-2026',
                                en: 'Ramadan Tent Pricing Guide UAE 2026',
                                ar: 'دليل أسعار خيام رمضان الإمارات 2026',
                            },
                            {
                                href: '/blog/tent-rental-uae',
                                en: 'Tent Rental UAE: Complete Guide',
                                ar: 'تأجير الخيام في الإمارات: دليل شامل',
                            },
                        ].map((article) => (
                            <Link
                                key={article.href}
                                href={article.href}
                                className="block p-5 bg-[#1a212e] border border-[#282e39] rounded-xl hover:border-gold/40 transition-colors group"
                            >
                                <p className="text-white/90 font-semibold text-sm leading-snug group-hover:text-gold transition-colors">
                                    {isAr ? article.ar : article.en}
                                </p>
                                <span className="mt-3 inline-block text-xs text-gold font-bold uppercase tracking-wider">
                                    {isAr ? 'اقرأ المزيد ←' : 'Read more →'}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <Link href="/blog" className="text-gold hover:underline text-sm font-bold">
                        {isAr ? '← عودة إلى المدونة' : '← Back to Blog'}
                    </Link>
                </div>
            </article>
        </main>
    );
}
