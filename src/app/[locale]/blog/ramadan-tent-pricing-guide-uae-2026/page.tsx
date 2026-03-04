import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogServiceCTA from '@/components/blog/BlogServiceCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'أسعار تأجير خيام رمضان في الإمارات: دليل تقديري 2026 | Tent Now'
        : 'Ramadan Tent Rental Pricing in UAE: 2026 Estimated Guide | Tent Now';

    const description = locale === 'ar'
        ? 'دليل شامل لأسعار تأجير خيام رمضان 2026 في الإمارات. تعرف على تكاليف خيام المجالس العائلية وخيام الإفطار للشركات والفنادق مع مقارنة بين أفضل الشركات.'
        : 'Complete guide to Ramadan tent rental pricing in UAE for 2026. Explore costs for family Majlis tents, corporate Iftar setups, hotel Ramadan tents, and mega government installations with supplier comparison.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: '/images/blog/ramadan-night-market.png', width: 1200, height: 630 }],
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
            images: ['/images/blog/ramadan-night-market.png'],
        },
        alternates: {
            languages: {
                'en': '/en/blog/ramadan-tent-pricing-guide-uae-2026',
                'ar': '/ar/blog/ramadan-tent-pricing-guide-uae-2026',
            },
        },
    };
}

export default function RamadanTentPricingGuidePage() {
    const locale = useLocale();
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/ramadan-tent-pricing-guide-uae-2026`;
    const articleTitle = locale === 'ar'
        ? 'أسعار تأجير خيام رمضان في الإمارات: دليل تقديري 2026'
        : 'Ramadan Tent Rental Pricing in UAE: 2026 Estimated Guide';

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={locale === 'ar'
                    ? 'دليل شامل لأسعار تأجير خيام رمضان 2026 في الإمارات مع مقارنة الشركات ونصائح التوفير.'
                    : 'Complete guide to Ramadan tent rental pricing in UAE for 2026 with supplier comparison and budgeting tips.'}
                image='/images/blog/ramadan-night-market.png'
                datePublished='2026-02-12T08:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/blog/ramadan-night-market.png"
                            alt={locale === 'ar' ? 'دليل أسعار خيام رمضان في الإمارات 2026' : 'Ramadan tent pricing guide UAE 2026'}
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

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    {locale === 'ar' ? (
                        <>
                            <p>
                                تختلف أسعار تأجير خيام رمضان بناءً على الحجم، ومتطلبات التكييف، ونوع الأرضيات، ومستوى الديكور، ورسوم التصاريح، والموقع. يقدم لك هذا الدليل نطاقات أسعار واقعية لموسم رمضان 2026 في جميع أنحاء الإمارات لمساعدتك في التخطيط ووضع الميزانية بشكل فعال.
                            </p>

                            <hr className="border-border my-12" />

                            <h2>فئات أسعار خيام رمضان 2026</h2>

                            {/* Pricing Tier 1 */}
                            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">خيمة مجلس عائلي صغير</div>
                                    <div className="text-sm text-text-muted mb-3">50-80 ضيفاً | 100-200 متر مربع</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 8,000 - 18,000</div>
                                    <div className="text-sm text-text-muted">
                                        يشمل: سجاد أساسي، جلسات، إضاءة
                                    </div>
                                </div>

                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">خيمة إفطار شركات متوسطة</div>
                                    <div className="text-sm text-text-muted mb-3">100-250 ضيفاً | 250-500 متر مربع</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 25,000 - 75,000</div>
                                    <div className="text-sm text-text-muted">
                                        يشمل: تكييف، مسرح، تجهيز بوفيه، إضاءة، أرضيات
                                    </div>
                                </div>

                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">خيمة رمضان فندقية فاخرة</div>
                                    <div className="text-sm text-text-muted mb-3">300-800+ ضيف | 600-1,500+ متر مربع</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 120,000 - 450,000+</div>
                                    <div className="text-sm text-text-muted">
                                        يشمل: ديكور مخصص، ثريات، نظام تكييف مركزي، هوية بصرية، حواجز
                                    </div>
                                </div>

                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">تجهيز حكومي / مجتمعي ضخم</div>
                                    <div className="text-sm text-text-muted mb-3">1,500-5,000 متر مربع</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 500,000+</div>
                                    <div className="text-sm text-text-muted">
                                        يشمل: هندسة كاملة، موافقات الدفاع المدني، تكييف شديد التحمل، شاشات LED
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-900/20 border-r-4 border-blue-500 p-4 rounded-r my-6 not-prose">
                                <p className="text-sm text-blue-200">
                                    <strong>ملاحظة:</strong> الأسعار تقديرية بناءً على اتجاهات سوق الإمارات لعام 2026. تختلف التكاليف الفعلية حسب الموقع والموسمية ومتطلبات التخصيص. <Link href="/request-quote" className="text-gold underline">اطلب عرض أسعار مخصص</Link> للحصول على تسعير دقيق.
                                </p>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>مقارنة شركات تأجير خيام رمضان في الإمارات</h2>

                            {/* Comparison Table - Mobile Cards */}
                            <div className="my-8 not-prose">
                                {/* Desktop Table */}
                                <div className="hidden lg:block overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-right py-3 px-4 text-gold font-semibold">الشركة</th>
                                                <th className="text-right py-3 px-4 text-gold font-semibold">الخبرة</th>
                                                <th className="text-right py-3 px-4 text-gold font-semibold">خبرة رمضان</th>
                                                <th className="text-right py-3 px-4 text-gold font-semibold">تغطية الإمارات</th>
                                                <th className="text-right py-3 px-4 text-gold font-semibold">تصميم مخصص</th>
                                                <th className="text-right py-3 px-4 text-gold font-semibold">إدارة التصاريح</th>
                                                <th className="text-right py-3 px-4 text-gold font-semibold">الأفضل لـ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-bg-elevated border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Tent Now</td>
                                                <td className="py-3 px-4 text-text-muted">+30 سنة</td>
                                                <td className="py-3 px-4 text-gold font-semibold">ممتازة</td>
                                                <td className="py-3 px-4 text-text-muted">جميع الإمارات</td>
                                                <td className="py-3 px-4 text-text-muted">مخصص بالكامل</td>
                                                <td className="py-3 px-4 text-text-muted">نعم</td>
                                                <td className="py-3 px-4 text-text-muted">الشركات، الفنادق، المجالس الفاخرة</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Alfares</td>
                                                <td className="py-3 px-4 text-text-muted">+25 سنة</td>
                                                <td className="py-3 px-4 text-text-muted">جيدة جداً</td>
                                                <td className="py-3 px-4 text-text-muted">الإمارات + الخليج</td>
                                                <td className="py-3 px-4 text-text-muted">قياسي + مخصص</td>
                                                <td className="py-3 px-4 text-text-muted">نعم</td>
                                                <td className="py-3 px-4 text-text-muted">الفعاليات الكبيرة</td>
                                            </tr>
                                            <tr className="bg-bg-elevated border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Star Tents</td>
                                                <td className="py-3 px-4 text-text-muted">+20 سنة</td>
                                                <td className="py-3 px-4 text-text-muted">جيدة جداً</td>
                                                <td className="py-3 px-4 text-text-muted">الشارقة + الإمارات</td>
                                                <td className="py-3 px-4 text-text-muted">متوسط</td>
                                                <td className="py-3 px-4 text-text-muted">نعم</td>
                                                <td className="py-3 px-4 text-text-muted">الأعراس ورمضان</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Al Aydi</td>
                                                <td className="py-3 px-4 text-text-muted">+15 سنة</td>
                                                <td className="py-3 px-4 text-text-muted">جيدة</td>
                                                <td className="py-3 px-4 text-text-muted">الإمارات</td>
                                                <td className="py-3 px-4 text-text-muted">مخصص</td>
                                                <td className="py-3 px-4 text-text-muted">نعم</td>
                                                <td className="py-3 px-4 text-text-muted">الخيام الممتدة والمجالس</td>
                                            </tr>
                                            <tr className="bg-bg-elevated border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Professionals Tents</td>
                                                <td className="py-3 px-4 text-text-muted">+15 سنة</td>
                                                <td className="py-3 px-4 text-text-muted">جيدة</td>
                                                <td className="py-3 px-4 text-text-muted">الإمارات</td>
                                                <td className="py-3 px-4 text-text-muted">قياسي</td>
                                                <td className="py-3 px-4 text-text-muted">محدود</td>
                                                <td className="py-3 px-4 text-text-muted">الفعاليات الخاصة</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">BA Tents</td>
                                                <td className="py-3 px-4 text-text-muted">+30 سنة</td>
                                                <td className="py-3 px-4 text-text-muted">جيدة جداً</td>
                                                <td className="py-3 px-4 text-text-muted">الإمارات</td>
                                                <td className="py-3 px-4 text-text-muted">مخصص</td>
                                                <td className="py-3 px-4 text-text-muted">نعم</td>
                                                <td className="py-3 px-4 text-text-muted">الصناعي والفعاليات</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Cards */}
                                <div className="lg:hidden space-y-4">
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-gold/20">
                                        <div className="text-lg font-bold text-white mb-2">Tent Now</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">الخبرة:</span><span className="text-white">+30 سنة</span>
                                            <span className="text-text-muted">خبرة رمضان:</span><span className="text-gold font-semibold">ممتازة</span>
                                            <span className="text-text-muted">التغطية:</span><span className="text-white">جميع الإمارات</span>
                                            <span className="text-text-muted">تصميم:</span><span className="text-white">مخصص بالكامل</span>
                                            <span className="text-text-muted">التصاريح:</span><span className="text-white">نعم</span>
                                            <span className="text-text-muted">الأفضل لـ:</span><span className="text-white">الشركات، الفنادق، المجالس الفاخرة</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Alfares</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">الخبرة:</span><span className="text-white">+25 سنة</span>
                                            <span className="text-text-muted">خبرة رمضان:</span><span className="text-white">جيدة جداً</span>
                                            <span className="text-text-muted">التغطية:</span><span className="text-white">الإمارات + الخليج</span>
                                            <span className="text-text-muted">تصميم:</span><span className="text-white">قياسي + مخصص</span>
                                            <span className="text-text-muted">التصاريح:</span><span className="text-white">نعم</span>
                                            <span className="text-text-muted">الأفضل لـ:</span><span className="text-white">الفعاليات الكبيرة</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Star Tents</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">الخبرة:</span><span className="text-white">+20 سنة</span>
                                            <span className="text-text-muted">خبرة رمضان:</span><span className="text-white">جيدة جداً</span>
                                            <span className="text-text-muted">التغطية:</span><span className="text-white">الشارقة + الإمارات</span>
                                            <span className="text-text-muted">تصميم:</span><span className="text-white">متوسط</span>
                                            <span className="text-text-muted">التصاريح:</span><span className="text-white">نعم</span>
                                            <span className="text-text-muted">الأفضل لـ:</span><span className="text-white">الأعراس ورمضان</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Al Aydi</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">الخبرة:</span><span className="text-white">+15 سنة</span>
                                            <span className="text-text-muted">خبرة رمضان:</span><span className="text-white">جيدة</span>
                                            <span className="text-text-muted">التغطية:</span><span className="text-white">الإمارات</span>
                                            <span className="text-text-muted">تصميم:</span><span className="text-white">مخصص</span>
                                            <span className="text-text-muted">التصاريح:</span><span className="text-white">نعم</span>
                                            <span className="text-text-muted">الأفضل لـ:</span><span className="text-white">الخيام الممتدة والمجالس</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Professionals Tents</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">الخبرة:</span><span className="text-white">+15 سنة</span>
                                            <span className="text-text-muted">خبرة رمضان:</span><span className="text-white">جيدة</span>
                                            <span className="text-text-muted">التغطية:</span><span className="text-white">الإمارات</span>
                                            <span className="text-text-muted">تصميم:</span><span className="text-white">قياسي</span>
                                            <span className="text-text-muted">التصاريح:</span><span className="text-white">محدود</span>
                                            <span className="text-text-muted">الأفضل لـ:</span><span className="text-white">الفعاليات الخاصة</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">BA Tents</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">الخبرة:</span><span className="text-white">+30 سنة</span>
                                            <span className="text-text-muted">خبرة رمضان:</span><span className="text-white">جيدة جداً</span>
                                            <span className="text-text-muted">التغطية:</span><span className="text-white">الإمارات</span>
                                            <span className="text-text-muted">تصميم:</span><span className="text-white">مخصص</span>
                                            <span className="text-text-muted">التصاريح:</span><span className="text-white">نعم</span>
                                            <span className="text-text-muted">الأفضل لـ:</span><span className="text-white">الصناعي والفعاليات</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>لماذا تتميز Tent Now في رمضان 2026</h2>

                            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">+30 عاماً من الخبرة في سوق الإمارات</h3>
                                            <p className="text-text-muted">خبرة عميقة في تأجير الخيام عبر جميع الإمارات السبع مع سجل حافل في مشاريع رمضان الكبرى.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">أسعار أفضل بنفس الجودة الفاخرة</h3>
                                            <p className="text-text-muted">أسعار تنافسية دون التنازل عن جودة المواد أو مستوى التشطيب أو معايير السلامة.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">حلول متكاملة جاهزة للتسليم</h3>
                                            <p className="text-text-muted">التصميم، موافقات الدفاع المدني، تصاريح البلدية، أنظمة التكييف، الأثاث، والإضاءة - كل شيء في مكان واحد.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">نشر سريع في جميع أنحاء الإمارات</h3>
                                            <p className="text-text-muted">فرق عمل ومستودعات في مواقع استراتيجية عبر الإمارات لضمان التركيب السريع والدعم الفوري.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>الأسئلة الشائعة</h2>

                            <div className="space-y-4 my-8 not-prose">
                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>ما هو الوقت المناسب لحجز خيمة رمضان في الإمارات؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">يُفضل الحجز قبل 4-6 أسابيع من بداية رمضان. التجهيزات الفاخرة تُحجز بسرعة، خاصة في دبي وأبوظبي.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>هل أحتاج إلى تصاريح لخيام رمضان؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">نعم. موافقات البلدية والدفاع المدني مطلوبة للخيام الكبيرة. الموردون المحترفون مثل Tent Now يديرون عملية الموافقة الكاملة.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>هل يمكن تكييف خيام رمضان؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">بالتأكيد. معظم خيام الشركات والفنادق في الإمارات تستخدم أنظمة تكييف شديدة التحمل للحفاظ على الراحة.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>ما حجم الخيمة المناسب لـ 200 ضيف؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">حوالي 300-400 متر مربع، حسب تصميم الجلوس وترتيبات البوفيه.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>هل تتوفر تصاميم داخلية عربية تقليدية؟</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">نعم - بما في ذلك أقمشة السدو، والسجاد العربي، وجلسات المجلس، وإضاءة الفوانيس، وثيمات الديكور الإسلامي.</p>
                                </details>
                            </div>

                            <hr className="border-border my-12" />

                            {/* CTA Section */}
                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12 not-prose">
                                <h2 className="text-3xl font-display text-white mb-4">هل تخطط لخيمة رمضان في الإمارات؟</h2>
                                <p className="text-text-muted mb-6">
                                    احصل على عرض أسعار مخصص من Tent Now. نقدم أكثر من 30 عاماً من الخبرة، وأسعار تنافسية، ودعم كامل للتصاريح.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">+30 عاماً من الخبرة في سوق الإمارات</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">أسعار تنافسية بجودة فاخرة</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">دعم كامل للتصاريح والموافقات</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">حلول متكاملة من التصميم حتى التسليم</span>
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

                            <p className="text-center italic text-text-muted mt-12 mb-12">
                                <strong>مع Tent Now، تحصل على أفضل قيمة لميزانيتك مع ضمان جودة فاخرة.</strong> سواء كنت تخطط لمجلس عائلي حميم أو خيمة إفطار ضخمة للشركات، نحن هنا لنجعل رمضان 2026 استثنائياً. رمضان كريم!
                            </p>
                        </>
                    ) : (
                        <>
                            <p>
                                Pricing for Ramadan tent rentals varies based on size, AC requirement, flooring, decor level, permit fees, and location. This guide gives you realistic pricing ranges for Ramadan 2026 across the UAE to help you plan and budget effectively.
                            </p>

                            <hr className="border-border my-12" />

                            <h2>Ramadan Tent Pricing Tiers for 2026</h2>

                            {/* Pricing Tiers */}
                            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">Small Family Majlis Tent</div>
                                    <div className="text-sm text-text-muted mb-3">50-80 Guests | 100-200 sqm</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 8,000 - 18,000</div>
                                    <div className="text-sm text-text-muted">
                                        Includes: Basic carpeting, seating, lighting
                                    </div>
                                </div>

                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">Medium Corporate Iftar Tent</div>
                                    <div className="text-sm text-text-muted mb-3">100-250 Guests | 250-500 sqm</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 25,000 - 75,000</div>
                                    <div className="text-sm text-text-muted">
                                        Includes: AC, stage, buffet setup, lighting, flooring
                                    </div>
                                </div>

                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">Premium Hotel Ramadan Tent</div>
                                    <div className="text-sm text-text-muted mb-3">300-800+ Guests | 600-1,500+ sqm</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 120,000 - 450,000+</div>
                                    <div className="text-sm text-text-muted">
                                        Includes: Custom decor, chandeliers, HVAC system, branding, partitions
                                    </div>
                                </div>

                                <div className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                    <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">Government / Community Mega Setup</div>
                                    <div className="text-sm text-text-muted mb-3">1,500-5,000 sqm</div>
                                    <div className="text-3xl font-bold text-gold mb-3">AED 500,000+</div>
                                    <div className="text-sm text-text-muted">
                                        Includes: Full engineering, civil defense approvals, heavy-duty AC, LED walls
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-l my-6 not-prose">
                                <p className="text-sm text-blue-200">
                                    <strong>Note:</strong> Prices are estimates based on 2026 UAE market trends. Actual costs vary by location, seasonality, and customization requirements. <Link href="/request-quote" className="text-gold underline">Request a custom quote</Link> for accurate pricing.
                                </p>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>UAE Ramadan Tent Supplier Comparison</h2>

                            {/* Comparison Table */}
                            <div className="my-8 not-prose">
                                {/* Desktop Table */}
                                <div className="hidden lg:block overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-border">
                                                <th className="text-left py-3 px-4 text-gold font-semibold">Company</th>
                                                <th className="text-left py-3 px-4 text-gold font-semibold">Experience</th>
                                                <th className="text-left py-3 px-4 text-gold font-semibold">Ramadan Expertise</th>
                                                <th className="text-left py-3 px-4 text-gold font-semibold">UAE Coverage</th>
                                                <th className="text-left py-3 px-4 text-gold font-semibold">Custom Design</th>
                                                <th className="text-left py-3 px-4 text-gold font-semibold">Permit Handling</th>
                                                <th className="text-left py-3 px-4 text-gold font-semibold">Best For</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-bg-elevated border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Tent Now</td>
                                                <td className="py-3 px-4 text-text-muted">30+ Years</td>
                                                <td className="py-3 px-4 text-gold font-semibold">Excellent</td>
                                                <td className="py-3 px-4 text-text-muted">All Emirates</td>
                                                <td className="py-3 px-4 text-text-muted">Full Custom</td>
                                                <td className="py-3 px-4 text-text-muted">Yes</td>
                                                <td className="py-3 px-4 text-text-muted">Corporate, Hotels, Premium Majlis</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Alfares</td>
                                                <td className="py-3 px-4 text-text-muted">25+ Years</td>
                                                <td className="py-3 px-4 text-text-muted">Very Good</td>
                                                <td className="py-3 px-4 text-text-muted">UAE + GCC</td>
                                                <td className="py-3 px-4 text-text-muted">Standard + Custom</td>
                                                <td className="py-3 px-4 text-text-muted">Yes</td>
                                                <td className="py-3 px-4 text-text-muted">Large Events</td>
                                            </tr>
                                            <tr className="bg-bg-elevated border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Star Tents</td>
                                                <td className="py-3 px-4 text-text-muted">20+ Years</td>
                                                <td className="py-3 px-4 text-text-muted">Very Good</td>
                                                <td className="py-3 px-4 text-text-muted">Sharjah + UAE</td>
                                                <td className="py-3 px-4 text-text-muted">Moderate</td>
                                                <td className="py-3 px-4 text-text-muted">Yes</td>
                                                <td className="py-3 px-4 text-text-muted">Weddings & Ramadan</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Al Aydi</td>
                                                <td className="py-3 px-4 text-text-muted">15+ Years</td>
                                                <td className="py-3 px-4 text-text-muted">Good</td>
                                                <td className="py-3 px-4 text-text-muted">UAE</td>
                                                <td className="py-3 px-4 text-text-muted">Custom</td>
                                                <td className="py-3 px-4 text-text-muted">Yes</td>
                                                <td className="py-3 px-4 text-text-muted">Clear Span & Majlis</td>
                                            </tr>
                                            <tr className="bg-bg-elevated border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">Professionals Tents</td>
                                                <td className="py-3 px-4 text-text-muted">15+ Years</td>
                                                <td className="py-3 px-4 text-text-muted">Good</td>
                                                <td className="py-3 px-4 text-text-muted">UAE</td>
                                                <td className="py-3 px-4 text-text-muted">Standard</td>
                                                <td className="py-3 px-4 text-text-muted">Limited</td>
                                                <td className="py-3 px-4 text-text-muted">Private Events</td>
                                            </tr>
                                            <tr className="border-b border-border/50">
                                                <td className="py-3 px-4 font-bold text-white">BA Tents</td>
                                                <td className="py-3 px-4 text-text-muted">30+ Years</td>
                                                <td className="py-3 px-4 text-text-muted">Very Good</td>
                                                <td className="py-3 px-4 text-text-muted">UAE</td>
                                                <td className="py-3 px-4 text-text-muted">Custom</td>
                                                <td className="py-3 px-4 text-text-muted">Yes</td>
                                                <td className="py-3 px-4 text-text-muted">Industrial & Event</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                {/* Mobile Cards */}
                                <div className="lg:hidden space-y-4">
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-gold/20">
                                        <div className="text-lg font-bold text-white mb-2">Tent Now</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">Experience:</span><span className="text-white">30+ Years</span>
                                            <span className="text-text-muted">Ramadan Expertise:</span><span className="text-gold font-semibold">Excellent</span>
                                            <span className="text-text-muted">Coverage:</span><span className="text-white">All Emirates</span>
                                            <span className="text-text-muted">Design:</span><span className="text-white">Full Custom</span>
                                            <span className="text-text-muted">Permits:</span><span className="text-white">Yes</span>
                                            <span className="text-text-muted">Best For:</span><span className="text-white">Corporate, Hotels, Premium Majlis</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Alfares</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">Experience:</span><span className="text-white">25+ Years</span>
                                            <span className="text-text-muted">Ramadan Expertise:</span><span className="text-white">Very Good</span>
                                            <span className="text-text-muted">Coverage:</span><span className="text-white">UAE + GCC</span>
                                            <span className="text-text-muted">Design:</span><span className="text-white">Standard + Custom</span>
                                            <span className="text-text-muted">Permits:</span><span className="text-white">Yes</span>
                                            <span className="text-text-muted">Best For:</span><span className="text-white">Large Events</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Star Tents</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">Experience:</span><span className="text-white">20+ Years</span>
                                            <span className="text-text-muted">Ramadan Expertise:</span><span className="text-white">Very Good</span>
                                            <span className="text-text-muted">Coverage:</span><span className="text-white">Sharjah + UAE</span>
                                            <span className="text-text-muted">Design:</span><span className="text-white">Moderate</span>
                                            <span className="text-text-muted">Permits:</span><span className="text-white">Yes</span>
                                            <span className="text-text-muted">Best For:</span><span className="text-white">Weddings & Ramadan</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Al Aydi</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">Experience:</span><span className="text-white">15+ Years</span>
                                            <span className="text-text-muted">Ramadan Expertise:</span><span className="text-white">Good</span>
                                            <span className="text-text-muted">Coverage:</span><span className="text-white">UAE</span>
                                            <span className="text-text-muted">Design:</span><span className="text-white">Custom</span>
                                            <span className="text-text-muted">Permits:</span><span className="text-white">Yes</span>
                                            <span className="text-text-muted">Best For:</span><span className="text-white">Clear Span & Majlis</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">Professionals Tents</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">Experience:</span><span className="text-white">15+ Years</span>
                                            <span className="text-text-muted">Ramadan Expertise:</span><span className="text-white">Good</span>
                                            <span className="text-text-muted">Coverage:</span><span className="text-white">UAE</span>
                                            <span className="text-text-muted">Design:</span><span className="text-white">Standard</span>
                                            <span className="text-text-muted">Permits:</span><span className="text-white">Limited</span>
                                            <span className="text-text-muted">Best For:</span><span className="text-white">Private Events</span>
                                        </div>
                                    </div>
                                    <div className="bg-bg-elevated rounded-xl p-5 border border-border">
                                        <div className="text-lg font-bold text-white mb-2">BA Tents</div>
                                        <div className="grid grid-cols-2 gap-2 text-sm">
                                            <span className="text-text-muted">Experience:</span><span className="text-white">30+ Years</span>
                                            <span className="text-text-muted">Ramadan Expertise:</span><span className="text-white">Very Good</span>
                                            <span className="text-text-muted">Coverage:</span><span className="text-white">UAE</span>
                                            <span className="text-text-muted">Design:</span><span className="text-white">Custom</span>
                                            <span className="text-text-muted">Permits:</span><span className="text-white">Yes</span>
                                            <span className="text-text-muted">Best For:</span><span className="text-white">Industrial & Event</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>Why Tent Now Stands Out</h2>

                            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">30+ Years of UAE Market Experience</h3>
                                            <p className="text-text-muted">Deep expertise in tent rentals across all seven emirates with a proven track record in large-scale Ramadan projects.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Better Rates, Same Premium Quality</h3>
                                            <p className="text-text-muted">Competitive pricing without compromising on material quality, finishing standards, or safety compliance.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">Complete Turnkey Solutions</h3>
                                            <p className="text-text-muted">Design, civil defense approvals, municipality permits, HVAC systems, furniture, and lighting -- everything under one roof.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-bg-elevated rounded-xl p-6 border border-border hover:border-gold/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">UAE-Wide Rapid Deployment</h3>
                                            <p className="text-text-muted">Strategically located teams and warehouses across the UAE for fast installation and immediate on-site support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="my-6">
                                Whether you are looking for an <Link href="/services/iftar-tent-rental-dubai">Iftar tent rental in Dubai</Link> or planning a <Link href="/services/corporate-events">corporate Ramadan event</Link>, understanding pricing helps you make informed decisions and allocate your budget wisely.
                            </p>

                            <hr className="border-border my-12" />

                            <h2>Frequently Asked Questions</h2>

                            <div className="space-y-4 my-8 not-prose">
                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>How early should I book a Ramadan tent in UAE?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">Ideally 4-6 weeks before Ramadan. Premium setups get booked quickly, especially in Dubai and Abu Dhabi.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>Do I need permits for Ramadan tents?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">Yes. Municipality and Civil Defense approvals are required for large tents. Professional suppliers like Tent Now manage the full approval process.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>Can Ramadan tents be air-conditioned?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">Absolutely. Most corporate and hotel tents in the UAE use heavy-duty HVAC systems to maintain comfort throughout the Ramadan season.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>What size tent do I need for 200 guests?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">Approximately 300-400 sqm, depending on seating layout and buffet arrangements.</p>
                                </details>

                                <details className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                                        <span>Are traditional Arabic interiors available?</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">Yes -- including Sadu fabric, Arabic carpets, Majlis seating, lantern lighting, and Islamic decor themes.</p>
                                </details>
                            </div>

                            <hr className="border-border my-12" />

                            {/* CTA Section */}
                            <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12 not-prose">
                                <h2 className="text-3xl font-display text-white mb-4">Planning a Ramadan Tent in UAE?</h2>
                                <p className="text-text-muted mb-6">
                                    Get a custom quote from Tent Now. We bring over 30 years of expertise, competitive pricing, and full permit support to every project.
                                </p>

                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">30+ years of UAE market expertise</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">Competitive pricing, premium quality</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">Full permit and approval support</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-text-muted">End-to-end turnkey solutions</span>
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

                            <p className="text-center italic text-text-muted mt-12 mb-12">
                                <strong>With Tent Now, you get the best value for your budget with guaranteed premium quality.</strong> Whether you are planning an intimate family Majlis or a grand corporate Iftar tent, we are here to make Ramadan 2026 exceptional. Ramadan Kareem!
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
                                {locale === 'ar' ? 'انضم إلى النقاش حول أسعار خيام رمضان 2026!' : 'Join the discussion about Ramadan tent pricing 2026!'}
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
