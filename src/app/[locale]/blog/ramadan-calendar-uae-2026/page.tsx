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
        ? 'تقويم رمضان الإمارات 2026 | مواقيت الصلاة والإفطار والسحور - دبي وأبوظبي'
        : 'Ramadan Calendar UAE 2026 | Prayer Times, Iftar & Suhoor Schedule Dubai, Abu Dhabi';

    const description = locale === 'ar'
        ? 'تقويم رمضان 2026 الكامل للإمارات مع التواريخ المؤكدة (19 فبراير - 20 مارس)، مواقيت الإفطار والسحور اليومية، جداول الصلاة لدبي وأبوظبي والشارقة. خطط لتأجير خيام رمضان الآن.'
        : 'Complete Ramadan 2026 calendar for UAE with confirmed dates (Feb 19 - Mar 20), daily Iftar & Suhoor timings, prayer schedules for Dubai, Abu Dhabi, Sharjah. Plan your Ramadan tent rentals now.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: '/images/blog/Dubai-Calendar-2026-Ramadan.jpg', width: 1200, height: 630 }],
            type: 'article',
            publishedTime: '2026-02-02T08:00:00.000Z',
            authors: ['Tent Now'],
            section: locale === 'ar' ? 'دليل' : 'Guide',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/blog/Dubai-Calendar-2026-Ramadan.jpg'],
        },
        alternates: {
            languages: {
                'en': '/en/blog/ramadan-calendar-uae-2026',
                'ar': '/ar/blog/ramadan-calendar-uae-2026',
            },
        },
    };
}

export default function RamadanCalendarPage() {
    const locale = useLocale();
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/ramadan-calendar-uae-2026`;
    const articleTitle = locale === 'ar'
        ? 'تقويم رمضان الإمارات 2026: دليل شامل لمواقيت الصلاة وجدول الإفطار'
        : 'Ramadan Calendar UAE 2026: Complete Guide to Prayer Times & Iftar Schedule';

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={locale === 'ar'
                    ? 'تقويم رمضان 2026 الكامل للإمارات مع التواريخ المؤكدة، مواقيت الإفطار والسحور، وجداول الصلاة لدبي وأبوظبي والشارقة.'
                    : 'Complete Ramadan 2026 calendar for UAE with confirmed dates, daily Iftar & Suhoor timings, and prayer schedules for Dubai, Abu Dhabi, and Sharjah.'}
                image='/images/blog/Dubai-Calendar-2026-Ramadan.jpg'
                datePublished='2026-02-02T08:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/blog/Dubai-Calendar-2026-Ramadan.jpg"
                            alt={locale === 'ar' ? 'تقويم رمضان 2026 دبي' : 'Ramadan 2026 Calendar Dubai'}
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
                            {locale === 'ar' ? '2 فبراير 2026' : 'February 2, 2026'}
                        </span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        <span>
                            {locale === 'ar' ? '8 دقائق قراءة' : '8 min read'}
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

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    {locale === 'ar' ? (
                        <>
                            <p>
                                من المتوقع أن يبدأ شهر رمضان المبارك 2026 في دولة الإمارات العربية المتحدة يوم <strong>الخميس 19 فبراير 2026</strong>، وينتهي حوالي يوم الخميس 19 مارس، مع بداية عيد الفطر المبارك يوم الجمعة 20 مارس 2026.
                            </p>
                            <p>
                                يجمع هذا الشهر الكريم الملايين في دبي وأبوظبي والشارقة والإمارات الشمالية في التأمل الروحي والصيام والتجمعات المجتمعية. مع ما يقرب من 13 ساعة صيام يومياً، يصبح التخطيط السليم لمواقيت الإفطار والسحور ضرورياً لتجربة رمضانية مباركة.
                            </p>

                            <hr className="border-border my-12" />

                            <h2>تواريخ رمضان 2026 الرئيسية في الإمارات</h2>

                            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">بداية رمضان</div>
                                    <div className="text-2xl font-bold text-white mb-1">19 فبراير 2026</div>
                                    <div className="text-sm text-text-muted">الخميس (رهناً برؤية الهلال)</div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">نهاية رمضان</div>
                                    <div className="text-2xl font-bold text-white mb-1">19 مارس 2026</div>
                                    <div className="text-sm text-text-muted">الخميس (29/30 يوماً)</div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">عيد الفطر</div>
                                    <div className="text-2xl font-bold text-white mb-1">20-22 مارس 2026</div>
                                    <div className="text-sm text-text-muted">عطلة رسمية 3 أيام</div>
                                </div>
                            </div>

                            <div className="bg-blue-900/20 border-r-4 border-blue-500 p-4 rounded-r my-6 not-prose">
                                <p className="text-sm text-blue-200">
                                    <strong>ملاحظة هامة:</strong> تاريخ بداية رمضان الرسمي رهناً برؤية هلال شهر رمضان من قبل لجنة تحري الهلال في دولة الإمارات. قد يختلف التاريخ الدقيق بيوم واحد.
                                </p>
                            </div>

                            <h2>مواقيت الإفطار والسحور لرمضان 2026</h2>

                            <div className="bg-bg-elevated rounded-xl p-8 my-8 not-prose">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">السحور (وجبة ما قبل الفجر)</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center p-3 bg-bg-dark rounded-lg">
                                                <span className="text-text-muted">صلاة الفجر</span>
                                                <span className="font-bold text-gold">4:45 - 5:20 صباحاً</span>
                                            </div>
                                            <p className="text-sm text-text-muted">ينتهي السحور عند أذان الفجر. تختلف الأوقات قليلاً بين الإمارات وتتقدم مبكراً مع تقدم رمضان.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">الإفطار (إفطار الصائم)</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center p-3 bg-bg-dark rounded-lg">
                                                <span className="text-text-muted">صلاة المغرب</span>
                                                <span className="font-bold text-gold">6:15 - 6:35 مساءً</span>
                                            </div>
                                            <p className="text-sm text-text-muted">يبدأ الإفطار عند أذان المغرب. تُطلق مدافع رمضان للإشارة إلى اللحظة الدقيقة في جميع مدن الإمارات.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-amber-900/20 rounded-lg border border-amber-700/30">
                                    <p className="text-sm text-amber-200">
                                        <strong>⏰ مدة الصيام:</strong> متوسط ساعات الصيام خلال رمضان 2026: حوالي 13 ساعة ودقيقتان يومياً
                                    </p>
                                </div>
                            </div>

                            <h2>تقاليد رمضان في الإمارات</h2>

                            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🌙</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">تجمعات الإفطار المجتمعية</h3>
                                            <p className="text-text-muted">الإفطار الجماعي هو جوهر ثقافة رمضان في الإمارات. من بوفيهات الفنادق الفاخرة إلى الخيام المجتمعية والمجالس العائلية، يجمع الإفطار الناس بروح الضيافة والكرم.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🕌</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">صلاة التراويح والقيام</h3>
                                            <p className="text-text-muted">تستضيف المساجد في جميع أنحاء الإمارات صلوات التراويح الخاصة بعد صلاة العشاء طوال رمضان. يقدم جامع الشيخ زايد الكبير في أبوظبي تجربة روحانية مؤثرة بشكل خاص.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🤲</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">العطاء الخيري والزكاة</h3>
                                            <p className="text-text-muted">يؤكد رمضان على الكرم. خيام الإفطار العامة وبرامج التبرع للشركات وتوزيع الزكاة منتشرة في جميع أنحاء دبي وأبوظبي وجميع الإمارات.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">👨‍👩‍👧‍👦</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">الفعاليات العائلية والثقافية</h3>
                                            <p className="text-text-muted">من احتفالات حق الليلة قبل رمضان إلى التجمعات العائلية الليلية في المجالس ولقاءات السحور، رمضان في الإمارات غني بالتقاليد الثقافية.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12 not-prose">
                                <h2 className="text-3xl font-display text-white mb-4">خطط لتأجير خيمة رمضان 2026</h2>
                                <p className="text-text-muted mb-6">
                                    سواء كنت تستضيف إفطاراً للشركات لـ 500 موظف، أو مجلساً عائلياً لـ 50 ضيفاً، أو تجمع سحور مجتمعي، يضمن تأجير الخيام الاحترافي الراحة والامتثال والأصالة.
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
                                        <span className="text-text-muted">خيام السدو التراثية للفعاليات الثقافية</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                                        اطلب عرض أسعار مجاني
                                    </Link>
                                    <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                                        رمضان 2026 يبدأ 19 فبراير • احجز الآن
                                    </div>
                                </div>
                            </div>

                            <h2>الأسئلة الشائعة</h2>

                            <div className="space-y-4 my-8 not-prose">
                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>كيف يتم تأكيد تاريخ بداية رمضان في الإمارات؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">تجتمع لجنة تحري الهلال في الإمارات، المكونة من علماء دين وفلكيين، في 29 من شعبان لرؤية هلال رمضان. إذا تمت الرؤية، يبدأ رمضان في اليوم التالي. وإن لم تتم الرؤية، يكمل شعبان 30 يوماً ويبدأ رمضان في اليوم التالي. يتم الإعلان الرسمي بعد غروب الشمس في يوم الرؤية.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>ما هي ساعات العمل خلال رمضان في الإمارات؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">يتم تقليل ساعات العمل في القطاعين العام والخاص خلال رمضان. عادة، يتم تقصير ساعات العمل بمقدار ساعتين يومياً. غالباً ما تعمل شركات القطاع الخاص من 9 صباحاً حتى 3 عصراً، بينما قد تكون للمكاتب الحكومية جداول مختلفة.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>متى يجب أن أحجز تأجير خيام رمضان لعام 2026؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">تُحجز التواريخ الشعبية والتجهيزات الفاخرة قبل 2-3 أشهر. بالنسبة لفعاليات الشركات أو إفطارات الحكومة أو التجمعات العائلية الكبيرة التي تتطلب تصاريح وتخصيص، نوصي بالحجز بحلول ديسمبر 2025 أو أوائل يناير 2026.</p>
                                </details>
                            </div>

                            <p className="text-center italic text-text-muted mt-12 mb-12">
                                <strong>مع التخطيط السليم والبنية التحتية المناسبة، يمكن أن يكون رمضان 2026 الأكثر تميزاً.</strong> من المجالس العائلية الحميمة إلى خيام الإفطار الكبرى للشركات، تقدم Tent Now 30 عاماً من الخبرة في الإمارات على عتبة داركم. رمضان كريم!
                            </p>
                        </>
                    ) : (
                        <>
                            <p>
                                Ramadan 2026 in the United Arab Emirates is expected to commence on <strong>Thursday, February 19, 2026</strong>, and conclude around Thursday, March 19, with Eid al-Fitr celebrations beginning on Friday, March 20, 2026.
                            </p>
                            <p>
                                This blessed month brings together millions across Dubai, Abu Dhabi, Sharjah, and the Northern Emirates in spiritual reflection, fasting, and community gatherings. With approximately 13 hours of daily fasting, proper planning of Iftar and Suhoor timings becomes essential for a blessed Ramadan experience.
                            </p>

                            <hr className="border-border my-12" />

                            <h2>Ramadan 2026 Key Dates for UAE</h2>

                            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">Ramadan Begins</div>
                                    <div className="text-2xl font-bold text-white mb-1">February 19, 2026</div>
                                    <div className="text-sm text-text-muted">Thursday (Subject to Moon Sighting)</div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">Ramadan Ends</div>
                                    <div className="text-2xl font-bold text-white mb-1">March 19, 2026</div>
                                    <div className="text-sm text-text-muted">Thursday (29/30 Days)</div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">Eid al-Fitr</div>
                                    <div className="text-2xl font-bold text-white mb-1">March 20-22, 2026</div>
                                    <div className="text-sm text-text-muted">3-Day Public Holiday</div>
                                </div>
                            </div>

                            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-l my-6 not-prose">
                                <p className="text-sm text-blue-200">
                                    <strong>Important Note:</strong> Official Ramadan start date is subject to the sighting of the crescent moon by the UAE Moon Sighting Committee. The exact date may vary by one day.
                                </p>
                            </div>

                            <h2>Iftar & Suhoor Timings for Ramadan 2026</h2>

                            <div className="bg-bg-elevated rounded-xl p-8 my-8 not-prose">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Suhoor (Pre-Dawn Meal)</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center p-3 bg-bg-dark rounded-lg">
                                                <span className="text-text-muted">Fajr Prayer</span>
                                                <span className="font-bold text-gold">4:45 AM - 5:20 AM</span>
                                            </div>
                                            <p className="text-sm text-text-muted">Suhoor ends at Fajr prayer time. Times vary slightly across emirates and advance earlier as Ramadan progresses.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-4">Iftar (Breaking Fast)</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center p-3 bg-bg-dark rounded-lg">
                                                <span className="text-text-muted">Maghrib Prayer</span>
                                                <span className="font-bold text-gold">6:15 PM - 6:35 PM</span>
                                            </div>
                                            <p className="text-sm text-text-muted">Iftar begins at Maghrib prayer time. Ramadan cannons fire to signal the exact moment across UAE cities.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-amber-900/20 rounded-lg border border-amber-700/30">
                                    <p className="text-sm text-amber-200">
                                        <strong>⏰ Fasting Duration:</strong> Average fasting hours during Ramadan 2026: approximately 13 hours and 2 minutes daily
                                    </p>
                                </div>
                            </div>

                            <h2>Ramadan Traditions in the UAE</h2>

                            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🌙</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Community Iftar Gatherings</h3>
                                            <p className="text-text-muted">Breaking fast together is central to UAE Ramadan culture. From luxury hotel buffets to community tents and family Majlis, Iftar brings people together in the spirit of hospitality and generosity.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🕌</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Taraweeh & Night Prayers</h3>
                                            <p className="text-text-muted">Mosques across UAE host special Taraweeh prayers after Isha throughout Ramadan. The Sheikh Zayed Grand Mosque in Abu Dhabi offers a particularly moving spiritual experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">🤲</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Charitable Giving & Zakat</h3>
                                            <p className="text-text-muted">Ramadan emphasizes generosity. Public Iftar tents, corporate donation programs, and Zakat distribution are widespread across Dubai, Abu Dhabi, and all emirates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="text-2xl">👨‍👩‍👧‍👦</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Family & Cultural Events</h3>
                                            <p className="text-text-muted">From Hag Al Laila celebrations before Ramadan to nightly family Majlis gatherings and Suhoor get-togethers, Ramadan in UAE is rich with cultural traditions.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12 not-prose">
                                <h2 className="text-3xl font-display text-white mb-4">Plan Your Ramadan Tent Rental for 2026</h2>
                                <p className="text-text-muted mb-6">
                                    Whether hosting a corporate Iftar for 500 employees, a family Majlis for 50 guests, or a community Suhoor gathering, professional tent rental ensures comfort, compliance, and authenticity.
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
                                        <span className="text-text-muted">Sadu Heritage Tents for Cultural Events</span>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                                        Request Free Quote
                                    </Link>
                                    <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">
                                        Ramadan 2026 Starts Feb 19th • Book Now
                                    </div>
                                </div>
                            </div>

                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 my-8 not-prose">
                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>How is the Ramadan start date confirmed in UAE?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">The UAE Moon Sighting Committee, composed of religious scholars and astronomers, meets on the 29th of Sha'ban to sight the crescent moon. If sighted, Ramadan begins the next day. If not, Sha'ban completes 30 days, and Ramadan starts the following day. The official announcement is made after sunset on the sighting day.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>What are the work hours during Ramadan in UAE?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">Both public and private sector working hours are reduced during Ramadan. Typically, work hours are shortened by 2 hours per day. Private sector companies often operate from 9 AM to 3 PM, while government offices may have different schedules. This applies to all employees, whether fasting or not.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>When should I book Ramadan tent rentals for 2026?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">Popular dates and premium setups book 2-3 months in advance. For corporate events, government Iftars, or large family gatherings requiring permits and customization, we recommend booking by December 2025 or early January 2026. Last-minute bookings (February) are possible but have limited availability and options.</p>
                                </details>
                            </div>

                            <p className="text-center italic text-text-muted mt-12 mb-12">
                                <strong>With proper planning and the right infrastructure, Ramadan 2026 can be your most memorable yet.</strong> From intimate family Majlis to grand corporate Iftar tents, Tent Now brings 30 years of UAE expertise to your doorstep. Ramadan Kareem!
                            </p>
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
                                {locale === 'ar' ? 'انضم إلى النقاش حول تقويم رمضان 2026!' : 'Join the discussion about Ramadan 2026 calendar!'}
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
