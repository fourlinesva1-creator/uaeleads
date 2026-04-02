import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';

    const title = isAr
        ? 'مدونة Tent Now — خيام التخزين الصناعية والفعاليات المؤسسية في الإمارات'
        : 'Tent Now Blog — Industrial Storage Tents, Corporate Events & UAE Guides';

    const description = isAr
        ? 'أدلة متخصصة لخيام التخزين الصناعية، الفعاليات المؤسسية، المشامع، والحلول اللوجستية في الإمارات. موارد احترافية للمقاولين والشركات ومديري الفعاليات.'
        : 'Expert guides on industrial storage tents, corporate event tents, tarpaulins, and logistics solutions across the UAE. Professional resources for contractors, businesses, and event managers.';

    return {
        title,
        description,
        keywords: isAr
            ? ['خيام تخزين صناعية الإمارات', 'خيام فعاليات مؤسسية دبي', 'تأجير خيام كبيرة الإمارات', 'مشمع للبيع الإمارات', 'خيام مستودعات دبي', 'حلول تخزين مؤقتة الإمارات', 'خيام رمضان', 'تأجير خيام الإمارات']
            : ['industrial storage tents UAE', 'corporate event tents Dubai', 'large tent rental UAE', 'warehouse tent UAE', 'tarpaulin supplier UAE', 'temporary storage UAE', 'tent rental UAE', 'storage tent cost UAE'],
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog',
                'ar': 'https://www.tentnow.ae/ar/blog',
            },
        },
        openGraph: {
            title,
            description,
            type: 'website',
            locale: isAr ? 'ar_AE' : 'en_US',
            alternateLocale: isAr ? ['en_US'] : ['ar_AE'],
            images: [{ url: 'https://www.tentnow.ae/images/storage-tents/storage-tent-hero.jpg', width: 1200, height: 630, alt: isAr ? 'خيام التخزين الصناعية والفعاليات في الإمارات' : 'Industrial Storage Tents & Corporate Events UAE' }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://www.tentnow.ae/images/storage-tents/storage-tent-hero.jpg'],
        },
    };
}

export default function BlogPage() {
    const t = useTranslations('blog');
    const locale = useLocale();

    const blogPosts = locale === 'ar' ? [
        {
            slug: 'tarpaulin-vs-storage-tent-uae',
            title: 'مشمع أم خيمة تخزين؟ كيف يختار المقاولون الإماراتيون الحل الصحيح',
            excerpt: 'الدليل الشامل لاختيار بين مشمع PE والخيمة الصناعية لمشاريع الإمارات. جدول مقارنة، تحليل التكاليف، ودليل القرار حسب نوع المشروع.',
            image: '/images/tarpaulins/tarpaulin-uses.png',
            date: '2 أبريل 2026',
            readTime: '11 دقيقة قراءة',
            category: 'دليل القرار'
        },
        {
            slug: 'tarpaulin-price-guide-uae-2026',
            title: 'دليل أسعار المشمع في الإمارات 2026: PE مقابل PVC، تقييمات GSM، ودليل الشراء',
            excerpt: 'دليل شامل لأسعار المشمع في الإمارات 2026. مقارنة PE مقابل PVC مقابل HDPE، فهم تقييمات GSM، جدول الأسعار الكامل بالدرهم.',
            image: '/images/tarpaulins/tarpaulin-main.png',
            date: '2 أبريل 2026',
            readTime: '10 دقائق قراءة',
            category: 'دليل شراء'
        },
        {
            slug: 'corporate-event-tents-dubai-2026',
            title: 'خيام الفعاليات المؤسسية: إنشاء أماكن خارجية احترافية في دبي',
            excerpt: 'الدليل الشامل لكيفية إحداث خيام الفعاليات المؤسسية ثورة في صناعة الفعاليات في دبي، مع رؤى قابلة للتنفيذ لزيادة عائد استثمار فعاليتك لعام 2026.',
            image: '/images/tent-now/corporate.jpg',
            date: '20 مارس 2026',
            readTime: '8 دقائق قراءة',
            category: 'فعاليات مؤسسية'
        },
        {
            slug: 'iftar-tent-rental-checklist-uae-2026',
            title: 'قائمة مراجعة تأجير خيمة الإفطار: 12 نقطة يجب تأكيدها قبل الحجز',
            excerpt: 'احجز بثقة — هذه القائمة تحميك من المفاجآت وتضمن فعالية ناجحة. التصاريح، التكييف، الحجم، الديكور، والتكلفة.',
            image: '/images/tent-now/iftar-tents.jpg',
            date: '5 مارس 2026',
            readTime: '7 دقائق قراءة',
            category: 'دليل الحجز'
        },
        {
            slug: 'hotel-majlis-setup-guide-uae-2026',
            title: 'دليل إعداد مجلس الفنادق الرمضاني: ما الذي تتوقعه من شركة تأجير الخيام',
            excerpt: 'الدليل الشامل لمديري الفنادق حول إعداد مجالس رمضان — من الجداول الزمنية للتركيب إلى مواصفات المناطق والأسئلة الأساسية.',
            image: '/images/tent-now/hotel.jpg',
            date: '5 مارس 2026',
            readTime: '9 دقائق قراءة',
            category: 'دليل الفنادق'
        },
        {
            slug: 'how-to-choose-tent-rental-company-uae',
            title: 'كيف تختار شركة تأجير خيام في الإمارات: 7 معايير أساسية',
            excerpt: 'الدليل العملي لاختيار شركة تأجير الخيام المناسبة — لا تقتصر على السعر. تحقق من التصاريح والخبرة والمحفظة والدعم الميداني.',
            image: '/images/tent-now/ramadan-tents.jpg',
            date: '5 مارس 2026',
            readTime: '6 دقائق قراءة',
            category: 'دليل الشراء'
        },
        {
            slug: 'uae-drone-missile-survival-guide-2026',
            title: 'دليل البقاء في الإمارات: ماذا تفعل عند هجوم بالطائرات المسيّرة أو الصواريخ',
            excerpt: 'دليل عملي للمقيمين والزوار في الإمارات — خطوات فورية مثبتة، أفضل أماكن الإيواء، الإسعافات الأولية، وأرقام الطوارئ. مبني على بروتوكولات نسما والدفاع المدني.',
            image: '/images/blog/uae-survival-guide-hero.jpg',
            date: '3 مارس 2026',
            readTime: '10 دقائق قراءة',
            category: 'السلامة العامة'
        },
        {
            slug: 'industrial-storage-tent-rental-uae-2026',
            title: 'تأجير خيام التخزين الصناعية في الإمارات: الدليل الكامل للتكاليف والتصاريح 2026',
            excerpt: 'معدل شغور مستودعات دبي 3% والإيجارات ارتفعت 33%. اكتشف كيف تحل الشركات الإماراتية أزمة التخزين بخيام صناعية معتمدة بتوفير يصل 70%.',
            image: '/images/storage-tents/storage-tent-hero.jpg',
            date: '1 مارس 2026',
            readTime: '9 دقائق قراءة',
            category: 'دليل صناعي'
        },
        {
            slug: 'tent-rental-uae',
            title: 'تأجير خيام في الإمارات: الدليل الشامل لجميع أنواع الخيام 2026',
            excerpt: 'من خيام رمضان والمجالس إلى خيام المستودعات والقباب—دليلك الكامل لكل ما تحتاج معرفته عن تأجير الخيام في الإمارات.',
            image: '/images/blog/tent-uae-1.jpg',
            date: '25 فبراير 2026',
            readTime: '8 دقائق قراءة',
            category: 'دليل'
        },
        {
            slug: 'top-tent-suppliers-uae-2026',
            title: 'أفضل 10 شركات لتأجير وتوريد الخيام في الإمارات لرمضان 2026',
            excerpt: 'دليلك لأفضل شركاء فعاليات وخيام رمضان في دبي وأبوظبي والشارقة وجميع الإمارات.',
            image: '/images/tent-now/ramadan-tents.jpg',
            date: '12 فبراير 2026',
            readTime: '6 دقائق قراءة',
            category: 'دليل'
        },
        {
            slug: 'ramadan-tent-pricing-guide-uae-2026',
            title: 'أسعار تأجير خيام رمضان في الإمارات: دليل تقديري 2026',
            excerpt: 'دليل شامل لأسعار تأجير خيام رمضان 2026 في الإمارات مع مقارنة بين الموردين ونصائح للميزانية.',
            image: '/images/blog/ramadan-night-market.png',
            date: '12 فبراير 2026',
            readTime: '5 دقائق قراءة',
            category: 'دليل'
        },
        {
            slug: 'ramadan-calendar-uae-2026',
            title: 'تقويم رمضان الإمارات 2026: دليل شامل لمواقيت الصلاة والإفطار',
            excerpt: 'تقويم رمضان 2026 الكامل مع التواريخ المؤكدة، مواقيت الإفطار والسحور، وجداول الصلاة لدبي وأبوظبي والشارقة.',
            image: '/images/blog/Dubai-Calendar-2026-Ramadan.jpg',
            date: '2 فبراير 2026',
            readTime: '8 دقائق قراءة',
            category: 'دليل'
        },
        {
            slug: 'upcoming-ramadan-events-dubai-2026',
            title: 'رمضان 2026 في دبي: دليلك المحلي الشامل',
            excerpt: 'دليلك الداخلي لفعاليات حي رمضان في مدينة إكسبو، ومهرجان الكرامة للمأكولات، وأفضل خيام الإفطار لعام 2026.',
            image: '/images/blog/ramadan-dubai-skyline-2026.png',
            date: '1 فبراير 2026',
            readTime: '5 دقائق قراءة',
            category: 'فعاليات'
        }
    ] : [
        {
            slug: 'tarpaulin-vs-storage-tent-uae',
            title: 'Tarpaulin or Storage Tent? How UAE Contractors Choose the Right Site Cover',
            excerpt: 'The definitive guide to choosing between PE tarpaulins and industrial storage tents for UAE projects. Comparison table, cost analysis, and decision guide by project type.',
            image: '/images/tarpaulins/tarpaulin-uses.png',
            date: 'April 2, 2026',
            readTime: '11 min read',
            category: 'Decision Guide'
        },
        {
            slug: 'tarpaulin-price-guide-uae-2026',
            title: 'Tarpaulin Price Guide UAE 2026: PE vs PVC, GSM Ratings & What to Buy',
            excerpt: 'Complete UAE tarpaulin buyer\'s guide for 2026. PE vs PVC vs HDPE comparison, GSM rating explained, full AED price table, and how to choose the right tarp.',
            image: '/images/tarpaulins/tarpaulin-main.png',
            date: 'April 2, 2026',
            readTime: '10 min read',
            category: 'Buyer\'s Guide'
        },
        {
            slug: 'corporate-event-tents-dubai-2026',
            title: 'Corporate Event Tents: Creating Professional Outdoor Venues in Dubai',
            excerpt: 'The comprehensive guide on how corporate event tents are revolutionizing the events industry in Dubai, with actionable insights for maximizing your event investment in 2026.',
            image: '/images/tent-now/corporate.jpg',
            date: 'March 20, 2026',
            readTime: '8 min read',
            category: 'Corporate Events'
        },
        {
            slug: 'iftar-tent-rental-checklist-uae-2026',
            title: 'Iftar Tent Rental Checklist: 12 Things to Confirm Before Booking',
            excerpt: 'Book with confidence — this checklist protects you from surprises and ensures a successful event. Permits, AC, sizing, decor, and cost all covered.',
            image: '/images/tent-now/iftar-tents.jpg',
            date: 'March 5, 2026',
            readTime: '7 min read',
            category: 'Booking Guide'
        },
        {
            slug: 'hotel-majlis-setup-guide-uae-2026',
            title: 'Hotel Ramadan Majlis Setup Guide: What to Expect From a Tent Rental Company',
            excerpt: 'The complete guide for hotel managers on setting up Ramadan majlis — from installation timelines to zone planning, technical specs, and the right questions to ask.',
            image: '/images/tent-now/hotel.jpg',
            date: 'March 5, 2026',
            readTime: '9 min read',
            category: 'Hotel Guide'
        },
        {
            slug: 'how-to-choose-tent-rental-company-uae',
            title: 'How to Choose a Tent Rental Company in UAE: 7 Must-Check Criteria',
            excerpt: 'The practical guide to selecting the right tent rental company — don\'t go on price alone. Check permits, experience, portfolio, field support, and emergency policy.',
            image: '/images/tent-now/ramadan-tents.jpg',
            date: 'March 5, 2026',
            readTime: '6 min read',
            category: 'Buyer\'s Guide'
        },
        {
            slug: 'uae-drone-missile-survival-guide-2026',
            title: 'UAE Survival Guide: What To Do During a Drone or Missile Attack',
            excerpt: 'A practical guide for UAE residents and visitors — proven immediate steps, best shelter locations, first aid basics, and emergency contacts. Based on NCEMA and UAE Civil Defence protocols.',
            image: '/images/blog/uae-survival-guide-hero.jpg',
            date: 'March 3, 2026',
            readTime: '10 min read',
            category: 'Public Safety'
        },
        {
            slug: 'industrial-storage-tent-rental-uae-2026',
            title: 'Industrial Storage Tent Rental UAE: Complete Cost & Permit Guide 2026',
            excerpt: "Dubai warehouse vacancy is 3% and industrial rents are up 33%. Here's how UAE businesses are solving the storage crisis with Civil Defence-approved industrial tents — at 50–70% less than permanent construction.",
            image: '/images/storage-tents/storage-tent-hero.jpg',
            date: 'March 1, 2026',
            readTime: '9 min read',
            category: 'Industry Guide'
        },
        {
            slug: 'tent-rental-uae',
            title: 'Tent Rental in UAE: Complete Guide to Every Tent Type (2026)',
            excerpt: 'From Ramadan Majlis and event tents to warehouse structures and architectural domes — your complete guide to tent hire across all 7 Emirates.',
            image: '/images/blog/tent-uae-1.jpg',
            date: 'February 25, 2026',
            readTime: '8 min read',
            category: 'Guide'
        },
        {
            slug: 'top-tent-suppliers-uae-2026',
            title: 'Top 10 Tent Rental & Supplier Companies in UAE for Ramadan 2026',
            excerpt: 'Your guide to the best event and Ramadan tent partners across Dubai, Abu Dhabi, Sharjah, and all Emirates.',
            image: '/images/tent-now/ramadan-tents.jpg',
            date: 'February 12, 2026',
            readTime: '6 min read',
            category: 'Guide'
        },
        {
            slug: 'ramadan-tent-pricing-guide-uae-2026',
            title: 'Ramadan Tent Rental Pricing in UAE: 2026 Estimated Guide',
            excerpt: 'Realistic pricing ranges for Ramadan 2026 tent rentals across the UAE with supplier comparison and budgeting tips.',
            image: '/images/blog/ramadan-night-market.png',
            date: 'February 12, 2026',
            readTime: '5 min read',
            category: 'Guide'
        },
        {
            slug: 'ramadan-calendar-uae-2026',
            title: 'Ramadan Calendar UAE 2026: Complete Guide to Prayer Times & Iftar Schedule',
            excerpt: 'Complete Ramadan 2026 calendar with confirmed dates, daily Iftar & Suhoor timings, and prayer schedules for Dubai, Abu Dhabi, and Sharjah.',
            image: '/images/blog/Dubai-Calendar-2026-Ramadan.jpg',
            date: 'February 2, 2026',
            readTime: '8 min read',
            category: 'Guide'
        },
        {
            slug: 'upcoming-ramadan-events-dubai-2026',
            title: 'Ramadan 2026 in Dubai: The Definitive "Local\'s Guide"',
            excerpt: 'Your insider guide to Hai Ramadan at Expo City, Karama Food Festival, and the best Iftar tents for 2026.',
            image: '/images/blog/ramadan-dubai-skyline-2026.png',
            date: 'February 1, 2026',
            readTime: '5 min read',
            category: 'Events'
        }
    ];

    return (
        <main className="min-h-screen bg-bg-dark" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-dark.png')] opacity-10" />
                <div className="container-luxury relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold to-white mb-6">
                        {t('title')}
                    </h1>
                    <p className="text-text-muted max-w-2xl mx-auto text-lg">
                        {t('subtitle')}
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-20">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block bg-bg-elevated rounded-2xl overflow-hidden border border-border hover:border-gold/50 transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-gold text-bg-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-text-muted mb-4 font-medium uppercase tracking-wider">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-gold rounded-full" />
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-display text-white group-hover:text-gold transition-colors mb-4 line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-text-muted text-sm line-clamp-3 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                                        {t('readMore')} <span className={`text-lg ${locale === 'ar' ? 'rotate-180' : ''}`}>→</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
