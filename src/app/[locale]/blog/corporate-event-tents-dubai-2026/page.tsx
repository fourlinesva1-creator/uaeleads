import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogServiceCTA from '@/components/blog/BlogServiceCTA';
import { routing } from '@/i18n/routing';
import Image from 'next/image';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';

    const title = isAr
        ? 'خيام الفعاليات المؤسسية: إنشاء أماكن خارجية احترافية في دبي | Tent Now'
        : 'Corporate Event Tents: Creating Professional Outdoor Venues in Dubai | Tent Now';

    const description = isAr
        ? 'الدليل الشامل لكيفية إحداث خيام الفعاليات المؤسسية ثورة في صناعة الفعاليات في دبي، مع رؤى قابلة للتنفيذ لزيادة عائد استثمار فعاليتك لعام 2026.'
        : 'The comprehensive guide on how corporate event tents are revolutionizing the events industry in Dubai, providing actionable insights for maximizing your event investment in 2026.';

    return {
        title,
        description,
        keywords: isAr
            ? ['خيام فعاليات مؤسسية دبي', 'تأجير خيام شركات الإمارات', 'أماكن فعاليات خارجية دبي', 'خيام معارض 2026', 'أماكن مؤتمرات خارجية']
            : ['corporate event tents Dubai', 'corporate tent rental UAE', 'outdoor event venues Dubai', 'exhibition tents 2026', 'outdoor conference venues'],
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/corporate-event-tents-dubai-2026`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/corporate-event-tents-dubai-2026',
                'ar': 'https://www.tentnow.ae/ar/blog/corporate-event-tents-dubai-2026',
                'x-default': 'https://www.tentnow.ae/en/blog/corporate-event-tents-dubai-2026',
            },
        },
        openGraph: {
            title,
            description,
            images: [{ url: 'https://www.tentnow.ae/images/tent-now/corporate.jpg', width: 1200, height: 630, alt: isAr ? 'خيام الفعاليات المؤسسية في دبي' : 'Corporate Event Tents Dubai' }],
            type: 'article',
            publishedTime: '2026-03-12T10:00:00.000Z',
            authors: ['Tent Now'],
            section: isAr ? 'فعاليات مؤسسية' : 'Corporate Events',
            locale: isAr ? 'ar_AE' : 'en_US',
            alternateLocale: isAr ? ['en_US'] : ['ar_AE'],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://www.tentnow.ae/images/tent-now/corporate.jpg'],
        },
    };
}

export default function CorporateEventTents() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/corporate-event-tents-dubai-2026`;
    const articleTitle = isAr
        ? 'خيام الفعاليات المؤسسية: إنشاء أماكن خارجية احترافية في دبي'
        : 'Corporate Event Tents: Creating Professional Outdoor Venues in Dubai';

    return (
        <main className="min-h-screen bg-[#101622] text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={isAr
                    ? 'الدليل الشامل لكيفية إحداث خيام الفعاليات المؤسسية ثورة في صناعة الفعاليات في دبي.'
                    : 'The comprehensive guide on how corporate event tents are revolutionizing the events industry in Dubai.'}
                image="https://www.tentnow.ae/images/tent-now/corporate.jpg"
                datePublished="2026-03-12T10:00:00.000Z"
                author="Tent Now"
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4 flex-wrap">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {isAr ? 'رؤى مؤسسية' : 'Corporate Insights'}
                        </span>
                        <span>{isAr ? 'مارس 2026' : 'March 2026'}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <span>{isAr ? 'بواسطة TentNow Business Analyst' : 'By TentNow Business Analyst'}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {isAr ? 'خيام الفعاليات المؤسسية: إنشاء أماكن خارجية احترافية في دبي' : 'Corporate Event Tents: Creating Professional Outdoor Venues in Dubai'}
                    </h1>
                    <p className="text-2xl text-white/80 font-semibold mb-4">
                        {isAr ? 'تحويل الفعاليات الخارجية إلى نجاحات باهرة في عام 2026' : 'Transforming Outdoor Events into Resounding Successes in 2026'}
                    </p>
                </header>

                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 border border-white/10">
                    <Image
                        src="/images/tent-now/corporate.jpg"
                        alt={isAr ? 'إعداد خيمة فعاليات مؤسسية' : 'Corporate Event Tent Setup'}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <ShareButtons url={articleUrl} title={articleTitle} />

                <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/90 leading-relaxed mt-10">

                    {/* Introduction */}
                    <section>
                        <p>
                            {isAr
                                ? 'شهد مشهد الفعاليات المؤسسية في دبي تحولاً ملحوظاً في السنوات الأخيرة، حيث أصبحت الأماكن الخارجية الخيار المفضل بشكل متزايد للشركات التي تسعى إلى خلق تجارب لا تُنسى. مع ترسيخ الإمارة لمكانتها كمركز الأعمال الرائد في الشرق الأوسط، نما الطلب على مساحات الفعاليات المؤسسية المتطورة بشكل كبير.'
                                : 'Dubai\'s corporate event landscape has undergone a remarkable transformation in recent years, with outdoor venues increasingly becoming the preferred choice for businesses seeking to create memorable experiences. As the emirate solidifies its position as the Middle East\'s premier business hub, the demand for sophisticated corporate event spaces has grown exponentially.'}
                        </p>
                        <p className="mt-4">
                            {isAr
                                ? 'تمتد المزايا الاستراتيجية للفعاليات المؤسسية الخارجية إلى ما هو أبعد من الجاذبية الجمالية. تشير الأبحاث إلى أن الشركات التي تستضيف فعاليات في أماكن خارجية فريدة تُبلغ عن معدلات تفاعل أعلى بكثير للحضور.'
                                : 'The strategic advantages of outdoor corporate events extend far beyond aesthetic appeal. Research indicates that companies hosting events in unique outdoor settings report significantly higher attendee engagement rates, improved brand recall, and enhanced networking outcomes.'}
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">
                            {isAr ? '1. صعود الأماكن الخارجية للشركات في دبي' : '1. The Rise of Outdoor Corporate Venues in Dubai'}
                        </h2>

                        <h3 className="text-xl font-bold text-white mb-3">
                            {isAr ? '1.1 ديناميكيات السوق ودوافع النمو' : '1.1 Market Dynamics and Growth Drivers'}
                        </h3>
                        <p>
                            {isAr
                                ? 'شهدت صناعة الفعاليات المؤسسية في دبي نمواً غير مسبوق، مدفوعاً ببروز الإمارة كوجهة أعمال عالمية. تُظهر التقارير الحديثة أن سوق فعاليات الشركات سيستمر في التوسع السريع. توفر الفعاليات الخارجية مرونة لا تُضاهى وتأثيراً نفسياً إيجابياً مقارنة بالقاعات التقليدية المغلقة.'
                                : 'The corporate event industry in Dubai has experienced unprecedented growth, driven by the emirate\'s emergence as a global business destination. Recent reports show the corporate events market will continue its rapid expansion. Outdoor events offer unmatched flexibility and a positive psychological impact compared to conventional closed halls.'}
                        </p>

                        <h3 className="text-xl font-bold text-white mb-3 mt-6">
                            {isAr ? '1.2 القيمة الاستراتيجية للمساحات القابلة للتخصيص' : '1.2 The Strategic Value of Customizable Spaces'}
                        </h3>
                        <p>
                            {isAr
                                ? 'تمثل خيام الفعاليات المؤسسية قمة تخصيص الأماكن، حيث توفر للشركات قدرة غير مسبوقة على إنشاء بيئات تعكس هويتها التجارية بدقة. يمكن للشركات تحسين إنفاقها على الفعاليات من خلال الدفع فقط مقابل المساحة التي تحتاجها.'
                                : 'Corporate event tents represent the pinnacle of venue customization, offering businesses the unprecedented ability to create environments that precisely reflect their brand identity. Companies can optimize their event spend by paying only for the space they need.'}
                        </p>
                    </section>

                    {/* Image 1 */}
                    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden my-12 border border-white/10">
                        <Image
                            src="/images/tent-now/corporate-event-1.jpg"
                            alt={isAr ? 'خيمة فعاليات رئيسية لحدث مؤسسي' : 'Main Event Tent for Corporate Event'}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">
                            {isAr ? '2. أنواع خيام الفعاليات للتطبيقات المؤسسية' : '2. Types of Corporate Event Tents for Business Applications'}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-gold mb-3">
                                    {isAr ? 'خيام Clear Span: المعيار الذهبي' : 'Clear Span Marquees: The Corporate Standard'}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {isAr
                                        ? 'تمثل الخيام خالية الأعمدة المعيار الذهبي للفعاليات في دبي، بفضل مساحاتها الواسعة وتصميمها الهندسي المبتكر الذي يلغي الحاجة لأعمدة الدعم الداخلية.'
                                        : 'Clear span marquees have established themselves as the gold standard for corporate events in Dubai, featuring an innovative aluminum frame design that eliminates the need for interior support columns.'}
                                </p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-gold mb-3">
                                    {isAr ? 'التحكم في المناخ: ضرورة لبيئة دبي' : 'Climate Control: Essential for Dubai\'s Environment'}
                                </h3>
                                <p className="text-white/80 text-sm">
                                    {isAr
                                        ? 'تتطلب أجواء دبي حلول تحكم في درجات الحرارة متقدمة. تقدم شركات الخيام طرازات حديثة قادرة على تبريد الأجواء بفاعلية لتوفير راحة الحضور.'
                                        : 'Dubai\'s climate requires advanced temperature control solutions. Tent companies provide modern setups capable of effectively cooling environments for attendee comfort.'}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 Case Studies */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4 mt-12">
                            {isAr ? '3. دراسات حالة: قصص نجاح من الفعاليات المؤسسية' : '3. Case Studies: Corporate Event Success Stories'}
                        </h2>
                        <div className="space-y-6">
                            <div className="border-l-4 border-gold pl-4 bg-white/5 py-3 pr-4">
                                <h3 className="text-xl font-bold text-white">
                                    {isAr ? 'دراسة حالة: قمة التكنولوجيا الإقليمية 2025' : 'Case Study: Regional Tech Summit 2025'}
                                </h3>
                                <p className="mt-2 text-white/85">
                                    {isAr
                                        ? 'جمع الحدث 850 مندوباً. تم تصميم خيمة Clear Span بمساحة 2,500 متر مربع مقسمة لمناطق. أظهرت النتائج رضا 94% من الحاضرين وزيادة 35% في تفاعل الشركاء.'
                                        : 'Brought together 850 delegates. A 2,500 sqm clear span structure was divided into zones. Results showed a 94% satisfaction rate and a 35% increase in partner engagement.'}
                                </p>
                            </div>
                            <div className="border-l-4 border-gold pl-4 bg-white/5 py-3 pr-4">
                                <h3 className="text-xl font-bold text-white">
                                    {isAr ? 'دراسة حالة: إطلاق منتج لعلامة تجارية فاخرة' : 'Case Study: Luxury Brand Product Launch'}
                                </h3>
                                <p className="mt-2 text-white/85">
                                    {isAr
                                        ? 'إطلاق سيارة فاخرة جديدة في خيمة شفافة بإطلالة على دبي مارينا. ولّد الحدث تفاعلاً ضخماً وتجاوزت الطلبات المسبقة التوقعات بنسبة 40%.'
                                        : 'Launching a luxury vehicle in a transparent marquee with views of Dubai Marina. The event generated massive engagement, and pre-orders exceeded projections by 40%.'}
                                </p>
                            </div>
                            <div className="border-l-4 border-gold pl-4 bg-white/5 py-3 pr-4">
                                <h3 className="text-xl font-bold text-white">
                                    {isAr ? 'دراسة حالة: حفل العشاء السنوي' : 'Case Study: Corporate Annual Gala Dinner'}
                                </h3>
                                <p className="mt-2 text-white/85">
                                    {isAr
                                        ? 'حفل تكريم لـ 1,200 موظف. حققت الشركة وفورات بنسبة 40% مقارنة بقاعات الفنادق مع تقديم تجربة استثنائية زادت من تفاعل الموظفين بنسبة 28%.'
                                        : 'A recognition gala for 1,200 employees. The company achieved 40% savings compared to hotel ballrooms while delivering an exceptional experience that boosted engagement by 28%.'}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Image 2 */}
                    <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden my-12 border border-white/10">
                        <Image
                            src="/images/tent-now/corporate-event-2.jpg"
                            alt={isAr ? 'إضاءة وإعداد ليلي لخيمة فعالية' : 'Night Lighting and Setup for Event Tent'}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4 mt-12">
                            {isAr ? '4. أفضل الممارسات للفعاليات المؤسسية الخارجية الناجحة' : '4. Best Practices for Successful Corporate Outdoor Events'}
                        </h2>
                        <ul className="space-y-4">
                            <li className="flex flex-col">
                                <strong className="text-gold text-lg mb-1">{isAr ? 'التخطيط الزمني الاستراتيجي' : 'Strategic Timeline Planning'}</strong>
                                <span className="text-white/80">{isAr ? 'يجب بدء التخطيط قبل 8-12 أسبوعاً على الأقل للانتهاء من التصاريح والمتطلبات الفنية.' : 'Plan 8-12 weeks ahead to handle permits and technical requirements seamlessly.'}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gold text-lg mb-1">{isAr ? 'تخطيط الطوارئ' : 'Contingency Planning'}</strong>
                                <span className="text-white/80">{isAr ? 'يجب وضع بروتوكولات لمواجهة التغيرات الجوية والتقلبات الطارئة لضمان نجاح الحدث.' : 'Develop contingency protocols for weather changes and emergencies to ensure success.'}</span>
                            </li>
                            <li className="flex flex-col">
                                <strong className="text-gold text-lg mb-1">{isAr ? 'التكامل التكنولوجي' : 'Technology Integration'}</strong>
                                <span className="text-white/80">{isAr ? 'توفير بنية تحتية قوية للكهرباء والإنترنت لضمان عمل كافة الأجهزة المطلوبة للحدث بسلاسة.' : 'Ensure robust infrastructure for power and internet so all required equipment functions without issues.'}</span>
                            </li>
                        </ul>
                    </section>

                    {/* Tent Now section */}
                    <section>
                        <div className="bg-[#1a212e] border border-[#282e39] rounded-2xl p-8 mt-12">
                            <h2 className="text-2xl font-display text-gold mb-4">
                                {isAr ? 'الشراكة مع Tent Now لفعاليتك' : 'Partnering with Tent Now for Your Corporate Event'}
                            </h2>
                            <p className="text-white/85 mb-4">
                                {isAr
                                    ? 'لقد رسخت Tent Now مكانتها كمزود رائد لحلول الخيام للشركات في دبي عبر الإمارات. من الاستشارة الأولية وحتى تنفيذ الفعالية، نوفر لك خياماً مجهزة بأفضل الحلول لتلائم احتياجاتك.'
                                    : 'Tent Now has established itself as a leading provider of corporate event tent solutions in Dubai and across the UAE. From initial consultation through event execution, we provide tailored tent solutions for your specific needs.'}
                            </p>
                            <p className="text-white/85 font-bold mb-4">
                                {isAr ? 'هل أنت مستعد لتحويل فعاليتك المؤسسية؟' : 'Ready to Transform Your Corporate Event?'}
                            </p>
                            <Link href="/contact" className="inline-block bg-gold text-black font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors">
                                {isAr ? 'تواصل معنا اليوم للبدء' : 'Contact Us Today to Get Started'}
                            </Link>
                        </div>
                    </section>
                </div>

                <BlogServiceCTA variant="general" />
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <Link href="/blog" className="text-gold hover:underline text-sm font-bold">
                        {isAr ? '← عودة إلى المدونة' : '← Back to Blog'}
                    </Link>
                </div>
            </article>
        </main>
    );
} 
