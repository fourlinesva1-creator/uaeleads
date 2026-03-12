import type { Metadata } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogServiceCTA from '@/components/blog/BlogServiceCTA';
import Script from 'next/script';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'رمضان 2026 في دبي: دليلك المحلي الشامل'
        : 'Ramadan 2026 in Dubai: The Definitive "Local\'s Guide"';

    const description = locale === 'ar'
        ? 'اكتشف أفضل الفعاليات الرمضانية القادمة في دبي لعام 2026، من حي رمضان في مدينة إكسبو إلى مهرجانات المأكولات الشعبية في الكرامة.'
        : 'Discover the best upcoming Ramadan events in Dubai for 2026, from Hai Ramadan at Expo City to the secret street food festivals in Karama.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: '/images/blog/ramadan-dubai-skyline-2026.png', width: 1200, height: 630 }],
            type: 'article',
            publishedTime: '2026-02-01T08:00:00.000Z',
            authors: ['Tent Now'],
            section: locale === 'ar' ? 'دليل' : 'Guide',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/blog/ramadan-dubai-skyline-2026.png'],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/upcoming-ramadan-events-dubai-2026`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/upcoming-ramadan-events-dubai-2026',
                'ar': 'https://www.tentnow.ae/ar/blog/upcoming-ramadan-events-dubai-2026',
            },
        },
    };
}

export default function ArticlePage() {
    const locale = useLocale();
    const articleUrl = `https://tentnow.com/${locale}/blog/upcoming-ramadan-events-dubai-2026`;
    const articleTitle = locale === 'ar'
        ? 'رمضان 2026 في دبي: دليلك المحلي الشامل'
        : 'Ramadan 2026 in Dubai: The Definitive "Local\'s Guide"';

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={locale === 'ar'
                    ? 'اكتشف أفضل الفعاليات الرمضانية القادمة في دبي لعام 2026، من حي رمضان في مدينة إكسبو إلى مهرجانات المأكولات الشعبية في الكرامة.'
                    : 'Discover the best upcoming Ramadan events in Dubai for 2026, from Hai Ramadan at Expo City to the secret street food festivals in Karama.'}
                image='/images/blog/ramadan-dubai-skyline-2026.png'
                datePublished='2026-02-01T08:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/blog/ramadan-dubai-skyline-2026.png"
                            alt="Ramadan 2026 Dubai Skyline"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {locale === 'ar' ? 'دليل' : 'Guide'}
                        </span>
                        <span>
                            {locale === 'ar' ? '1 فبراير 2026' : 'February 1, 2026'}
                        </span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        <span>
                            {locale === 'ar' ? '5 دقائق قراءة' : '5 min read'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {articleTitle}
                    </h1>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
                            <Image src="/images/tent-now-logo.gif" alt="Tent Now" fill className="object-cover" />
                        </div>
                        <div className={`text-${locale === 'ar' ? 'right' : 'left'}`}>
                            <p className="text-white font-bold text-sm">
                                {locale === 'ar' ? 'فريق Tent Now' : 'Tent Now Team'}
                            </p>
                            <p className="text-text-muted text-xs">
                                {locale === 'ar' ? 'خبراء رمضان' : 'Ramadan Specialists'}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Share Buttons */}
                <div className="mb-12 border-y border-border py-4 flex justify-between items-center">
                    <span className="text-text-muted text-sm uppercase tracking-widest">
                        {locale === 'ar' ? 'شارك هذا الدليل:' : 'Share this guide:'}
                    </span>
                    <ShareButtons url={articleUrl} title={articleTitle} />
                </div>

                {/* Content Body based on Locale */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    {locale === 'ar' ? (
                        <>
                            <p>
                                حسناً، دعونا نتحدث عن رمضان. إذا كنتم تخططون للتواجد في دبي حوالي <strong>منتصف فبراير 2026</strong> (نتوقع حوالي 19 فبراير)، فأنتم على موعد لمشاهدة أكبر تحول تشهده المدينة. في يوم تسير الأعمال كالمعتاد، وفي اليوم التالي تتباطأ الوتيرة، وتضاء الأنوار، وتفوح من المدينة بأكملها روائح العود الفاخر والأطباق الشهية.
                            </p>
                            <p>
                                لقد قمنا بالبحث في جداول الفعاليات (لنوفر عليكم العناء) لنقدم لكم خلاصة ما يحدث <em>فعلیاً</em> هذا العام. لقد تجاوزنا مجرد بوفيهات الفنادق المعتادة—هذا العام يتمحور حول مأكولات الشوارع، والأسواق الليلية الضخمة، والروح المجتمعية.
                            </p>
                            <p>إليكم دليلكم المختصر لرمضان 2026 في دبي.</p>

                            <hr className="border-border my-12" />

                            <h2>1. الحدث الأبرز: حي رمضان في مدينة إكسبو</h2>
                            <p>
                                هل تذكرون إكسبو 2020؟ بالطبع تذكرونه. حسناً، إنه يعود للحياة مرة أخرى من خلال <strong>"حي رمضان".</strong>
                            </p>
                            <ul>
                                <li><strong>الأجواء:</strong> تخيلوا "سوبر ماركت الجدة" (نعم، هذا شيء حقيقي هناك للأطفال)، ورواية القصص التقليدية، وأجواء تشبه قرية بدوية عصرية. إنه مكان ضخم، في الهواء الطلق، ومليء بالحنين.</li>
                                <li><strong>لماذا تذهبون:</strong> الأمر لا يتعلق بالطعام فقط؛ بل بالتجربة والمشهد. عادة ما يكون لديهم مدفع ضخم يطلق عند الغروب، والذي قد يفاجئكم بصوته القوي حتى لو كنتم تتوقعونه.</li>
                                <li><strong>الميزانية:</strong> الدخول عادة ما يكون رخيصاً (حوالي 20 درهم)، لكنكم ستنفقون ميزانيتكم على أكشاك الطعام الحرفية.</li>
                            </ul>

                            <h2>2. سر عشاق الطعام: مهرجان مأكولات الشوارع الرمضاني في الكرامة</h2>
                            <p>
                                انسوا فنادق الخمس نجوم للحظة. إذا كنتم تريدون أن تأكلوا مثل سكان دبي الحقيقيين، فعليكم بالتوجه إلى <strong>الكرامة</strong>.
                            </p>
                            <ul>
                                <li><strong>الأجواء:</strong> فوضى، ولكن من النوع اللذيذ. الأجواء هنا حقيقية، وأصلية، وحيوية.</li>
                                <li><strong>الطعام:</strong> نتحدث عن أكثر من 55 مطعماً يقدمون كل شيء من الكاري الهندي الجنوبي الحار إلى اللقيمات الأصيلة. إنه مفهوم "الطاولة الطويلة" في عطلات نهاية الأسبوع—غرباء يجلسون معاً ويتشاركون الطعام. إنه شيء جميل حقاً.</li>
                                <li><strong>الأفضل لـ:</strong> الأشخاص الذين يهتمون بالنكهة أكثر من أغطية الطاولات البيضاء.</li>
                            </ul>

                            <div className="relative w-full h-[400px] my-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                                <Image
                                    src="/images/blog/ramadan-night-market.png"
                                    alt="سوق رمضان الليلي دبي"
                                    fill
                                    className="object-cover"
                                />
                            </div>


                            <h2>3. تسوق حتى التعب: سوق رمضان الليلي في مركز دبي التجاري العالمي</h2>
                            <p>
                                إذا كنتم تكرهون النوم وتعشقون التسوق، فأهلاً بكم في منزلكم. <strong>سوق رمضان الليلي</strong> في مركز دبي التجاري العالمي هو وحش التسوق.
                            </p>
                            <ul>
                                <li><strong>الأجواء:</strong> بازار داخلي ضخم. إنه صاخب، ومزدحم، ويبيع كل شيء حرفياً. عطور، عبايات، أدوات عشوائية لم تكن تعلم أنك بحاجة إليها، وديكورات منزلية لن تتسع في حقيبتكم بنسبة 100%.</li>
                                <li><strong>نصيحة محترف:</strong> هذا هو المكان المناسب لشراء هدايا العيد. ساوموا على الأسعار. بجدية، لا تدفعوا السعر الأول أبداً. إنها رياضة هنا.</li>
                            </ul>

                            <h2>4. الأجواء العصرية: حي رمضان في أبراج الإمارات جميرا</h2>
                            <p>
                                هذا المكان للجمهور العصري. يحول <strong>حي رمضان</strong> قاعدة أبراج الإمارات إلى مكان تجمع فني ومضيء.
                            </p>
                            <ul>
                                <li><strong>الأجواء:</strong> أضواء الزينة في كل مكان، متاجر مؤقتة للحرفيين المحليين، ومقاهي ذات طابع جمالي جداً. إنه أقل شبهًا بـ "السوق التقليدي" وأكثر شبهًا بـ "لوحة Pinterest دبت فيها الحياة".</li>
                                <li><strong>الأفضل لـ:</strong> قصص Instagram الخاصة بكم. وأيضاً، مجرد الجلوس على كرسي مريح مع القهوة والرد على رسائل البريد الإلكتروني في الساعة 11 ليلاً.</li>
                            </ul>

                            <h2>5. نزهة المجتمع: رمضان في الحديقة (حديقة زعبيل)</h2>
                            <p>
                                هذه فعالية أحدث، تتماشى مع تركيز الإمارات على المجتمع. تخيلوا نزهة عملاقة في <strong>مدرج حديقة زعبيل</strong>.
                            </p>
                            <ul>
                                <li><strong>الأجواء:</strong> مناسبة جداً للعائلات. أطفال يركضون حول المكان، وعروض حية ليست صاخبة جداً، ومزيج من أكشاك الطعام العالمية.</li>
                                <li><strong>الأفضل لـ:</strong> العائلات التي تخشى اصطحاب أطفالها الصغار إلى مطعم فندق هادئ. هنا، الفوضى مرحب بها.</li>
                            </ul>

                            <hr className="border-border my-12" />

                            <h2>قسم "أشعر بالفخامة" (الإفطار والسحور)</h2>
                            <p>حسناً، لا يمكننا تجاهل الكلاسيكيات. إذا كنتم تريدون التألق وإنفاق بعض المال:</p>
                            <ul>
                                <li><strong>خيمة أساطير (أتلانتس):</strong> مشهورة الخيام. باهظة الثمن (~295 درهم إماراتي +)، ومزدحمة، لكنها مذهلة تماماً.</li>
                                <li><strong>مدينة جميرا:</strong> سحر "دبي القديمة" مع تكييف عالمي المستوى. رائعة لاجتماعات العمل حيث تريدون إبهار الضيوف ولكن أيضاً سماع الشخص الذي يتحدث.</li>
                                <li><strong>الهروب إلى الصحراء (باب الشمس / مزرعة جمال أوشي):</strong> اخرجوا من المدينة. افطروا تحت النجوم. أدركوا مدى هدوء الصحراء. إنها إعادة ضبط للأجواء.</li>
                            </ul>

                            <hr className="border-border my-12" />

                            <h2>بعض النصائح من "الداخل"</h2>
                            <ol>
                                <li><strong>الألعاب النارية:</strong> نعم، نحن نطلق الألعاب النارية لكل شيء. توقعوا عروضاً في عطلات نهاية الأسبوع في <strong>السيف</strong>، و<strong>دبي فستيفال سيتي</strong>، و<strong>بلوواترز</strong>.</li>
                                <li><strong>زحمة وقت المغرب:</strong> قلتها من قبل، وسأقولها مرة أخرى. لا تقودوا السيارة بين الساعة 5:30 مساءً و 6:30 مساءً إلا إذا كان لديكم صبر أيوب. الطرق تكون فوضى بسبب الجوع.</li>
                                <li><strong>ساعات عمل المراكز التجارية:</strong> المولات مفتوحة حتى الواحدة أو الثانية صباحاً. من الغريب شراء أحذية رياضية في منتصف الليل، لكن في دبي، هذا أمر طبيعي.</li>
                            </ol>

                            <hr className="border-border my-12" />

                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12">
                                <h2 className="text-3xl font-display text-white mb-4">هل تريد الاستضافة بدلاً من المعاناة في الزحام؟</h2>
                                <p className="text-text-muted mb-6">
                                    ربما قراءة ما ذكرناه عن الزحام جعلتكم ترغبون في البقاء في المنزل. أنا لا ألومكم.
                                </p>
                                <p className="text-text-muted mb-6">
                                    إذا كان لديكم فناء خلفي، أو حديقة فيلا، أو كنتم مديرين لفعالية تحاولون إنشاء "أساطير" مصغرة خاصة بكم، فلا داعي للتوتر. هنا يأتي دور <strong>Tent Now</strong> (نعم، هؤلاء نحن).
                                </p>
                                <p className="text-text-muted mb-8">
                                    نحن لا نؤجر الخيام فحسب؛ بل نبني أماكن فورية. نحن نجلب التكييف (ضروري للغاية)، والسجاد الفاخر، والإضاءة المزاجية، والهيكل نفسه. أنتم تدعون الناس؛ ونحن نبني القصر.
                                </p>
                                <div className="text-center">
                                    <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                                        ابنِ خيمتك الرمضانية
                                    </Link>
                                    <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                                        رمضان 2026 يبدأ 19 فبراير • احجز الآن
                                    </div>
                                </div>
                            </div>

                            <p className="text-center italic text-text-muted mt-12 mb-12">
                                <strong>رمضان 2026 يبدأ في منتصف فبراير.</strong> الأماكن الجيدة يتم حجزها بالكامل، وبصراحة، خيامنا أيضاً. خططوا مبكراً، وتناولوا طعاماً جيداً، ورمضان كريم!
                            </p>
                        </>
                    ) : (
                        <>
                            <p>
                                Alright, let’s talk Ramadan. If you’re going to be in Dubai around <strong>mid-February 2026</strong> (we’re looking at you, February 19th-ish), you are witnessing the city’s biggest transformation act. One day it’s business as usual, and the next, the pace slows down, the lights go up, and the entire city smells like Ouzi and expensive oud.
                            </p>
                            <p>
                                I’ve dug through the calendars (so you don’t have to) to bring you the lowdown on what’s <em>actually</em> happening this year. We’re moving beyond just hotel buffets—this year is about street food, massive night markets, and community vibes.
                            </p>
                            <p>Here is your cheatsheet for Ramadan 2026 in Dubai.</p>

                            <hr className="border-border my-12" />

                            <h2>1. The Heavy Hitter: Hai Ramadan at Expo City</h2>
                            <p>
                                Remember Expo 2020? Of course you do. Well, it comes alive again for <strong>"Hai Ramadan."</strong>
                            </p>
                            <ul>
                                <li><strong>The Vibe:</strong> Think "Grandmother’s Supermarket" (literally, that’s a thing there for kids), traditional storytelling, and a vibe that feels like a modern-day Bedouin village. It’s huge, it’s outdoors, and it’s nostalgic.</li>
                                <li><strong>Why Go:</strong> It’s not just about eating; it’s about the <em>scene</em>. They usually have a massive cannon firing at sunset which scares the life out of you even when you know it’s coming.</li>
                                <li><strong>Wallet Watch:</strong> Entry is usually cheap (around AED 20), but you’ll spend your budget on the artisanal food stalls.</li>
                            </ul>

                            <h2>2. The "Foodie's Secret": Ramadan Street Food Festival in Karama</h2>
                            <p>
                                Forget the 5-star hotels for a second. If you want to eat like a real Dubai resident, you go to <strong>Karama</strong>.
                            </p>
                            <ul>
                                <li><strong>The Vibe:</strong> Chaos, but the delicious kind. The vibe here is raw, authentic, and frantic.</li>
                                <li><strong>The Food:</strong> We’re taking over 55+ restaurants serving everything from spicy South Indian curries to authentic Luqaimat. It’s a "Long Table" concept on weekends—literally strangers sitting together sharing food. It’s beautiful.</li>
                                <li><strong>Best For:</strong> People who care more about flavor than white tablecloths.</li>
                            </ul>

                            <div className="relative w-full h-[400px] my-12 rounded-2xl overflow-hidden shadow-xl border border-border">
                                <Image
                                    src="/images/blog/ramadan-night-market.png"
                                    alt="Ramadan Night Market Dubai"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h2>3. The "Shop ‘Til You Drop": Ramadan Night Market at DWTC</h2>
                            <p>
                                If you hate sleeping and love shopping, welcome home. The <strong>Ramadan Night Market</strong> at the World Trade Centre is a beast.
                            </p>
                            <ul>
                                <li><strong>The Vibe:</strong> A massive indoor bazaar. It’s loud, it’s busy, and it sells literally everything. Perfumes, Abayas, random gadgets you didn’t know you needed, and home decor that will 100% not fit in your suitcase.</li>
                                <li><strong>Pro Tip:</strong> This is the place to buy your Eid gifts. Haggle. Seriously, don’t pay the first price. It’s a sport.</li>
                            </ul>

                            <h2>4. The "Vibe Check": Ramadan District at Jumeirah Emirates Towers</h2>
                            <p>
                                This is for the cool crowd. <strong>Ramadan District</strong> turns the base of the Emirates Towers into a glowing, artsy hangout spot.
                            </p>
                            <ul>
                                <li><strong>The Vibe:</strong> Fairy lights everywhere, local artisan pop-ups, and very aesthetic coffee shops. It’s less "traditional market" and more "Pinterest board came to life."</li>
                                <li><strong>Best For:</strong> Your Instagram story. Also, just sitting on a beanbag with a coffee responding to emails at 11 PM.</li>
                            </ul>

                            <h2>5. The "Community Picnic": Ramadan at the Park (Zabeel Park)</h2>
                            <p>
                                This is a newer one, aligning with the UAE’s focus on community. Picture a giant picnic at <strong>Zabeel Park Amphitheatre</strong>.
                            </p>
                            <ul>
                                <li><strong>The Vibe:</strong> Super family-friendly. Kids running around, live performances that aren’t too loud, and a mix of international food stalls.</li>
                                <li><strong>Best For:</strong> Families who are terrified of bringing their toddlers to a quiet hotel restaurant. Here, chaos is welcomed.</li>
                            </ul>

                            <hr className="border-border my-12" />

                            <h2>The "I'm Feeling Fancy" Section (Iftars & Suhoors)</h2>
                            <p>Okay, we can’t ignore the classics. If you want to dress up and spend some cash:</p>
                            <ul>
                                <li><strong>Asateer Tent (Atlantis):</strong> The celebrity of tents. Expensive (~AED 295+), crowded, but absolutely stunning.</li>
                                <li><strong>Madinat Jumeirah:</strong> The "Old Dubai" charm with world-class AC. Great for business meetings where you want to impress but also actually hear the person talking.</li>
                                <li><strong>The Desert Escape (Bab Al Shams / Camel Uschi Farm):</strong> Drive out of the city. Break your fast under the stars. Realize how quiet the desert is. It’s a vibe reset.</li>
                            </ul>

                            <hr className="border-border my-12" />

                            <h2>A Few "Insider" Tips</h2>
                            <ol>
                                <li><strong>The Fireworks:</strong> Yes, we blast fireworks for everything. Expect shows on weekends at <strong>Al Seef</strong>, <strong>Festival City</strong>, and <strong>Bluewaters</strong>.</li>
                                <li><strong>The "Maghrib Rush":</strong> I’ve said it before, I’ll say it again. Do not drive between 5:30 PM and 6:30 PM unless you have a death wish or supreme patience. The roads are a hungry, hangry mess.</li>
                                <li><strong>Mall Hours:</strong> The malls are open until 1 AM or 2 AM. It’s surreal to be buying sneakers at midnight, but in Dubai, it’s normal.</li>
                            </ol>

                            <hr className="border-border my-12" />

                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12">
                                <h2 className="text-3xl font-display text-white mb-4">Want to Host Instead of Roast (in Traffic)?</h2>
                                <p className="text-text-muted mb-6">
                                    Maybe reading about the traffic made you want to stay home. I don’t blame you.
                                </p>
                                <p className="text-text-muted mb-6">
                                    If you have a backyard, a villa garden, or you’re an event manager trying to create your own mini "Asateer," you don’t need to stress. This is where <strong>Tent Now</strong> comes in (yes, that’s us).
                                </p>
                                <p className="text-text-muted mb-8">
                                    We don’t just rent tents; we build instant venues. We bring the AC (crucial), the heavy carpets, the mood lighting, and the structure itself. You invite the people; we build the palace.
                                </p>
                                <div className="text-center">
                                    <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                                        Build My Ramadan Venue
                                    </Link>
                                    <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                                        Ramadan 2026 Starts Feb 19th • Book Now
                                    </div>
                                </div>
                            </div>
                            <p className="text-center italic text-text-muted mt-12 mb-12">
                                <strong>Ramadan 2026 is starting mid-February.</strong> The good venues book out, and honestly, so do our tents. Plan early, eat well, and Ramadan Kareem!
                            </p>
                        </>
                    )}

                    <BlogServiceCTA variant="ramadan" />

                    {/* Comment Section Placeholder (Using Giscus or similar in future, currently static for MVP) */}
                    <div className="border-t border-border pt-12">
                        <h3 className="text-2xl font-display text-white mb-6">
                            {locale === 'ar' ? 'التعليقات' : 'Comments'}
                        </h3>
                        <div className="bg-bg-elevated p-6 rounded-xl border border-border">
                            <p className="text-text-muted text-sm mb-4">
                                {locale === 'ar' ? 'انضم إلى النقاش حول فعاليات رمضان 2026!' : 'Join the discussion about Ramadan 2026 events!'}
                            </p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold">G</div>
                                <div className="flex-1">
                                    <textarea
                                        className="w-full bg-bg-dark border border-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                                        rows={3}
                                        placeholder={locale === 'ar' ? 'شارك أفكارك أو اطرح سؤالاً...' : 'Share your thoughts or ask a question...'}
                                    ></textarea>
                                    <button className="mt-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">
                                        {locale === 'ar' ? 'نشر التعليق' : 'Post Comment'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </main>
    );
}
