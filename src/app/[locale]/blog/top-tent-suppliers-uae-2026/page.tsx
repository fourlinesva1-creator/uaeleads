import type { Metadata } from 'next';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogServiceCTA from '@/components/blog/BlogServiceCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'أفضل 10 شركات لتأجير وتوريد الخيام في الإمارات لرمضان 2026 | Tent Now'
        : 'Top 10 Tent Rental & Supplier Companies in UAE for Ramadan 2026 | Tent Now';

    const description = locale === 'ar'
        ? 'دليلك لأفضل شركاء فعاليات وخيام رمضان في دبي وأبوظبي والشارقة وجميع الإمارات. قارن بين أفضل 10 موردين للخيام في الإمارات لموسم رمضان 2026.'
        : 'Your guide to the best event and Ramadan tent partners across Dubai, Abu Dhabi, Sharjah, and all Emirates. Compare the top 10 tent suppliers in UAE for Ramadan 2026 season.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: '/images/tent-now/ramadan-tents.jpg', width: 1200, height: 630 }],
            type: 'article',
            publishedTime: '2026-02-12T08:00:00.000Z',
            authors: ['Tent Now'],
            section: locale === 'ar' ? 'دليل' : 'Guide',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/tent-now/ramadan-tents.jpg'],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/top-tent-suppliers-uae-2026`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/top-tent-suppliers-uae-2026',
                'ar': 'https://www.tentnow.ae/ar/blog/top-tent-suppliers-uae-2026',
            },
        },
    };
}

export default function TopTentSuppliersPage() {
    const locale = useLocale();
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/top-tent-suppliers-uae-2026`;
    const articleTitle = locale === 'ar'
        ? 'أفضل 10 شركات لتأجير وتوريد الخيام في الإمارات لرمضان 2026'
        : 'Top 10 Tent Rental & Supplier Companies in UAE for Ramadan 2026';

    const checkIcon = (
        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    );

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={locale === 'ar'
                    ? 'دليلك لأفضل شركاء فعاليات وخيام رمضان في دبي وأبوظبي والشارقة وجميع الإمارات.'
                    : 'Your guide to the best event and Ramadan tent partners across Dubai, Abu Dhabi, Sharjah, and all Emirates.'}
                image='/images/tent-now/ramadan-tents.jpg'
                datePublished='2026-02-12T08:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/tent-now/ramadan-tents.jpg"
                            alt={locale === 'ar' ? 'أفضل موردي الخيام في الإمارات رمضان 2026' : 'Top tent suppliers UAE Ramadan 2026'}
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
                            {locale === 'ar' ? '12 فبراير 2026' : 'February 12, 2026'}
                        </span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        <span>
                            {locale === 'ar' ? '6 دقائق قراءة' : '6 min read'}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {articleTitle}
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
                        {locale === 'ar'
                            ? 'دليلك لأفضل شركاء فعاليات وخيام رمضان في دبي وأبوظبي والشارقة وجميع الإمارات'
                            : 'Your guide to the best event and Ramadan tent partners across Dubai, Abu Dhabi, Sharjah, and all Emirates'}
                    </p>
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

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    {locale === 'ar' ? (
                        <>
                            <p>
                                رمضان هو أحد أهم المواسم للعائلات والمجتمعات والشركات في جميع أنحاء الإمارات العربية المتحدة - وقت للتجمع والكرم والاحتفال. سواء كنت تخطط لإفطارات شركات واسعة النطاق، أو خيام مجالس عائلية حميمة، أو تجارب رمضانية فاخرة، فإن اختيار مورد الخيام المناسب يمكن أن يحدث فرقاً كبيراً في الراحة والامتثال والجمالية.
                            </p>
                            <p>
                                لقد قمنا بتجميع <strong>أفضل 10 شركات لتأجير وتوريد الخيام في الإمارات</strong> لمساعدتك في اتخاذ القرار الأفضل لموسم رمضان 2026.
                            </p>

                            <hr className="border-border my-12" />

                            <h2>أفضل 10 شركات لتوريد الخيام في الإمارات</h2>

                            {/* Supplier 1 - Tent Now (Featured) */}
                            <div className="not-prose my-8">
                                <div className="bg-bg-elevated rounded-2xl p-8 border-2 border-gold/30 shadow-xl shadow-gold/5 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-br-lg">
                                        #1 الاختيار الأفضل
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-display text-white mb-2">
                                            <Link href="/" className="hover:text-gold transition-colors">Tent Now</Link> - تأجير خيام رمضان والفعاليات الفاخرة في الإمارات
                                        </h3>
                                        <p className="text-text-muted mb-6">
                                            مزودك الأول لخيام رمضان الأصيلة، وتجهيزات المجالس، والبنية التحتية المخصصة للفعاليات في جميع الإمارات. مع أكثر من 30 عاماً من الخبرة المتخصصة في الإمارات، وقدرات تصميم استثنائية، والقدرة على توفير أفضل الأسعار دون المساومة على الجودة أو الخدمة.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">أكثر من 30 عاماً من الخبرة</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">مجموعة واسعة: مجالس فنادق ومطاعم، خيام فعاليات شركات، مجالس عائلية، أثاث فاخر، ديكور وإضاءة</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">إدارة جميع التصاريح ومتطلبات السلامة</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">خدمة على مستوى الإمارات بالكامل</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">دعم شخصي ومخصص</span>
                                            </div>
                                        </div>
                                        <div className="bg-bg-dark rounded-lg p-4 border border-border">
                                            <p className="text-sm text-gold font-semibold mb-1">{locale === 'ar' ? 'الأنسب لـ:' : 'Ideal for:'}</p>
                                            <p className="text-sm text-text-muted">إفطارات الشركات، امتدادات فعاليات رمضان للفنادق، تصميم المجالس العائلية الداخلية، تجمعات السحور المجتمعية</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 2 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">02</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Alfares International Tents</h3>
                                            <p className="text-text-muted text-sm">واحدة من أعرق شركات تصنيع الخيام في الإمارات، معروفة بالخيام العربية التقليدية، وتجهيزات المجالس، وخيام الفعاليات الكبيرة.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 3 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">03</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Star Tents</h3>
                                            <p className="text-text-muted text-sm">مورد مقره الشارقة يقدم مجموعة متنوعة من خيام الفعاليات والتجهيزات المناسبة لرمضان، معروف بالجودة والحرفية المحلية.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 4 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">04</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Al Aydi Tent & Metal Ind LLC</h3>
                                            <p className="text-text-muted text-sm">اسم موثوق في جميع الإمارات، يوفر خيام ذات فتحات واسعة، وخيام مجالس تقليدية، وهياكل مؤقتة بمواصفات صناعية.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 5 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">05</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2"><a href="https://almumtaztents.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Mumtaz Tents</a></h3>
                                            <p className="text-text-muted text-sm">من أكبر موردي الخيام في الإمارات، مقرها الشارقة وتخدم جميع الإمارات. تشتهر بالخيام العربية التقليدية والمجالس وهياكل الفعاليات الكبرى، وهي الشركة الأم لـ Tent Now مع عقود من الخبرة في السوق الإماراتي.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 6 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">06</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Professionals Tents & Shades LLC</h3>
                                            <p className="text-text-muted text-sm">حلول مخصصة مناسبة لفعاليات رمضان، والوظائف المؤسسية في الهواء الطلق، ومشاريع الخيام المخصصة في جميع أنحاء الإمارات.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 7 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">07</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Central Tents</h3>
                                            <p className="text-text-muted text-sm">مورد يركز على أبوظبي، معروف بالخدمة السريعة وخيارات التأجير المرنة لكل من الفعاليات المؤسسية والخاصة.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 8 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">08</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">BA Tents</h3>
                                            <p className="text-text-muted text-sm">مورد خيام فعاليات وصناعية فاخرة مع أكثر من 30 عاماً من الخبرة الإقليمية، مع تخصيص قوي لحفلات الزفاف والتجمعات وخيام رمضان.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 9 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">09</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">TentProject.ae</h3>
                                            <p className="text-text-muted text-sm">مصنع ومورد دولي بعمليات في الإمارات، يركز على الخيام النمطية وأنظمة الأقواس والهياكل الإطارية الحديثة للفعاليات الكبيرة.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 10 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">10</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Al Khayam Al Arabiah Tents & Shed Trd LLC</h3>
                                            <p className="text-text-muted text-sm">تشكيلة واسعة من الخيام التقليدية، وخيام رمضان، وهياكل التظليل بجودة أقمشة فائقة وتركيبات متينة.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>كيفية اختيار مورد الخيام المناسب لرمضان</h2>

                            <div className="not-prose my-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">الخبرة في رمضان والثقافة المحلية</h3>
                                        <p className="text-text-muted text-sm">اختر مورداً يفهم التقاليد الرمضانية الإماراتية وثقافة الضيافة والمتطلبات الخاصة بالموسم. الخبرة المحلية تضمن خيماً تعكس أصالة المناسبة.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">الدعم الشامل للخدمات</h3>
                                        <p className="text-text-muted text-sm">ابحث عن مورد يتولى كل شيء: السلامة الهيكلية، تصاريح الدفاع المدني، تصاريح البلدية، وأنظمة التحكم بالمناخ. المورد الشامل يوفر عليك الوقت والمتاعب.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">التخصيص والتصميم الداخلي</h3>
                                        <p className="text-text-muted text-sm">من المجالس التقليدية بأسلوب السدو إلى الخيام العصرية الفاخرة، يجب أن يقدم المورد خيارات تصميم داخلي تناسب رؤيتك وعلامتك التجارية.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">4</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">تغطية على مستوى الإمارات</h3>
                                        <p className="text-text-muted text-sm">تأكد من أن المورد يخدم إمارتك - سواء كنت في دبي أو أبوظبي أو الشارقة أو عجمان أو رأس الخيمة أو الفجيرة أو أم القيوين.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">5</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">شفافية التسعير والقيمة</h3>
                                        <p className="text-text-muted text-sm">اطلب عروض أسعار تفصيلية وقارن ما يشمله السعر. أفضل الموردين يقدمون أسعاراً شفافة تشمل التركيب والتفكيك والصيانة خلال فترة رمضان.</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>كلمة أخيرة</h2>

                            <p>
                                مع اقتراب رمضان 2026، الآن هو الوقت المثالي لتأمين شريكك في تأجير الخيام. سواء كنت تستضيف مجلساً عائلياً خاصاً أو إفطاراً مؤسسياً لمئات الضيوف أو تجربة رمضانية فاخرة في فندق، فإن اختيار المورد المناسب يضمن لك خيمة تجمع بين الراحة والجمال والامتثال. ننصح بالحجز المبكر - التواريخ الشعبية والتجهيزات الفاخرة تُحجز بسرعة خلال موسم رمضان.
                            </p>

                            {/* CTA Section */}
                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12 not-prose">
                                <h2 className="text-3xl font-display text-white mb-4">احصل على عرض أسعار مجاني من Tent Now</h2>
                                <p className="text-text-muted mb-6">
                                    بصفتنا المزود الأول لخيام رمضان في الإمارات، نقدم أكثر من 30 عاماً من الخبرة وخدمة شاملة تشمل التصميم والتركيب والتصاريح والصيانة. دعنا نجعل رمضان 2026 الأكثر تميزاً لك.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">خيام إفطار الشركات للأعمال والوزارات</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">خيام مجالس خاصة وعائلية لرمضان</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">امتدادات فعاليات رمضان للفنادق والمنتجعات</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">تصميم داخلي وديكور وأثاث فاخر</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                                        اطلب عرض أسعار مجاني
                                    </Link>
                                    <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                                        رمضان 2026 يبدأ 19 فبراير - احجز الآن
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>
                                Ramadan is one of the most significant seasons for families, communities, and businesses across the UAE — a time of gathering, generosity, and celebration. Whether you are planning large-scale corporate iftars, intimate family Majlis tents, or VIP Ramadan experiences, choosing the right tent supplier can make all the difference in comfort, compliance, and aesthetics.
                            </p>
                            <p>
                                We have compiled the <strong>top 10 tent rental and supplier companies in the UAE</strong> to help you make the best choice for the Ramadan 2026 season.
                            </p>

                            <hr className="border-border my-12" />

                            <h2>Top 10 Tent Supplier Companies in UAE</h2>

                            {/* Supplier 1 - Tent Now (Featured) */}
                            <div className="not-prose my-8">
                                <div className="bg-bg-elevated rounded-2xl p-8 border-2 border-gold/30 shadow-xl shadow-gold/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-lg">
                                        #1 Top Pick
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-display text-white mb-2">
                                            <Link href="/" className="hover:text-gold transition-colors">Tent Now</Link> – Premium Ramadan & Event Tent Rentals UAE
                                        </h3>
                                        <p className="text-text-muted mb-6">
                                            Your go-to provider for authentic Ramadan tents, Majlis setups, and bespoke event infrastructure across all Emirates. With over 30 years of UAE-specific tent experience, exceptional design capability, and the ability to source the best rates without compromising on quality or service.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">30+ years experience</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">Extensive range: hotel & restaurant Majlis, corporate event tents, family Majlis, premium furniture, decor & lighting</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">Handles all permits and safety compliance</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">UAE-wide service</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                {checkIcon}
                                                <span className="text-sm text-text-muted">Personalized support</span>
                                            </div>
                                        </div>
                                        <div className="bg-bg-dark rounded-lg p-4 border border-border">
                                            <p className="text-sm text-gold font-semibold mb-1">Ideal for:</p>
                                            <p className="text-sm text-text-muted">Corporate iftars, hotel Ramadan extensions, family Majlis interiors, community Suhoor gatherings</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 2 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">02</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Alfares International Tents</h3>
                                            <p className="text-text-muted text-sm">One of the UAE's most established tent manufacturers, known for traditional Arabic tents, Majlis setups, and large event marquees.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 3 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">03</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Star Tents</h3>
                                            <p className="text-text-muted text-sm">Sharjah-based supplier offering a diverse range of event tents and Ramadan-friendly setups, appreciated for quality and local craftsmanship.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 4 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">04</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Al Aydi Tent & Metal Ind LLC</h3>
                                            <p className="text-text-muted text-sm">Trusted name across the Emirates, providing clear-span tents, traditional Majlis tents, and industrial-grade temporary structures.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 5 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">05</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2"><a href="https://almumtaztents.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Mumtaz Tents</a></h3>
                                            <p className="text-text-muted text-sm">One of the largest tent suppliers in the UAE, based in Sharjah and serving all Emirates. Renowned for traditional Arabic tents, Majlis setups, and large-scale event structures, Mumtaz Tents is the parent company of Tent Now with decades of experience in the UAE market.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 6 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">06</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Professionals Tents & Shades LLC</h3>
                                            <p className="text-text-muted text-sm">Tailored solutions suitable for Ramadan events, outdoor corporate functions, and custom tent projects across the UAE.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 7 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">07</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Central Tents</h3>
                                            <p className="text-text-muted text-sm">Abu Dhabi-focused supplier known for responsive service and flexible rental options for both corporate and private events.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 8 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">08</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">BA Tents</h3>
                                            <p className="text-text-muted text-sm">Premium event and industrial tent supplier with over 30 years of regional experience, strong customization for weddings, gatherings, and Ramadan tents.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 9 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">09</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">TentProject.ae</h3>
                                            <p className="text-text-muted text-sm">International manufacturer & supplier with UAE operations, focusing on modular tents, arch systems, and modern frame structures for large events.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Supplier 10 */}
                            <div className="not-prose my-6">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border">
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl font-bold text-gold/50 font-display">10</span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Al Khayam Al Arabiah Tents & Shed Trd LLC</h3>
                                            <p className="text-text-muted text-sm">Wide variety of traditional tents, Ramadan tents, and shade structures with superior fabric quality and durable installations.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>How to Choose the Right Tent Supplier for Ramadan</h2>

                            <div className="not-prose my-8 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">1</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Experience in Ramadan & Local Culture</h3>
                                        <p className="text-text-muted text-sm">Choose a supplier who understands UAE Ramadan traditions, hospitality culture, and the specific requirements of the season. Local expertise ensures tents that reflect the authenticity of the occasion.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">2</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Full-Service Support</h3>
                                        <p className="text-text-muted text-sm">Look for a supplier who handles everything: structural safety, civil defense permits, municipality approvals, and climate control systems. A full-service provider saves you time and hassle.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">3</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Customization & Interior Design</h3>
                                        <p className="text-text-muted text-sm">From traditional Sadu-style Majlis to modern luxury lounges, the supplier should offer interior design options that match your vision and brand.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">4</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">UAE-Wide Coverage</h3>
                                        <p className="text-text-muted text-sm">Ensure the supplier serves your emirate — whether you are in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, or Umm Al Quwain.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0 border border-gold/20">
                                        <span className="text-gold font-bold font-display">5</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">Transparent Pricing & Value</h3>
                                        <p className="text-text-muted text-sm">Request detailed quotations and compare what is included. The best suppliers offer transparent pricing that covers installation, dismantling, and maintenance throughout Ramadan.</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>Final Thoughts</h2>

                            <p>
                                As Ramadan 2026 approaches, now is the ideal time to secure your tent rental partner. Whether you are hosting a private family Majlis, a corporate iftar for hundreds, or a luxury Ramadan experience at a hotel, choosing the right supplier ensures a tent that combines comfort, beauty, and compliance. We recommend booking early — popular dates and premium setups get reserved quickly during the Ramadan season.
                            </p>

                            {/* CTA Section */}
                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12 not-prose">
                                <h2 className="text-3xl font-display text-white mb-4">Get a Free Quote from Tent Now</h2>
                                <p className="text-text-muted mb-6">
                                    As the UAE's leading Ramadan tent provider, we bring over 30 years of expertise and full-service support including design, installation, permits, and maintenance. Let us make Ramadan 2026 your most memorable yet.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">Corporate Iftar Tents for businesses and ministries</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">Private Majlis & Family Ramadan Tents</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">Hotel & Resort Ramadan Event Extensions</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">Interior design, decor & premium furniture</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                                        Request Free Quote
                                    </Link>
                                    <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                                        Ramadan 2026 Starts Feb 19th - Book Now
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <BlogServiceCTA variant="ramadan" />

                    {/* Comment Section Placeholder */}
                    <div className="border-t border-border pt-12">
                        <h3 className="text-2xl font-display text-white mb-6">
                            {locale === 'ar' ? 'التعليقات' : 'Comments'}
                        </h3>
                        <div className="bg-bg-elevated p-6 rounded-xl border border-border">
                            <p className="text-text-muted text-sm mb-4">
                                {locale === 'ar' ? 'انضم إلى النقاش حول أفضل موردي الخيام في الإمارات!' : 'Join the discussion about top tent suppliers in UAE!'}
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
