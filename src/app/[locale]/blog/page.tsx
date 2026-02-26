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

    const title = locale === 'ar'
        ? 'رؤى رمضان 2026 ودليل الفعاليات | Tent Now'
        : 'Ramadan 2026 Insights & Event Guide | Tent Now';

    const description = locale === 'ar'
        ? 'ابق على اطلاع بأحدث فعاليات رمضان 2026، وتأجير الخيام، واتجاهات تصميم المجالس في دبي وجميع أنحاء الإمارات.'
        : 'Stay updated with the latest Ramadan 2026 events, tent rentals, and majlis design trends in Dubai and across the UAE.';

    return {
        title,
        description,
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog',
                'ar': 'https://www.tentnow.ae/ar/blog',
            },
        },
    };
}

export default function BlogPage() {
    const t = useTranslations('blog');
    const locale = useLocale();

    const blogPosts = locale === 'ar' ? [
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
