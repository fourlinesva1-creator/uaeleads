import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export const metadata: Metadata = {
    title: 'Ramadan 2026 Insights & Event Guide | Tent Now',
    description: 'Stay updated with the latest Ramadan 2026 events, tent rentals, and majlis design trends in Dubai and across the UAE.',
};

export default function BlogPage() {
    const t = useTranslations('blog');
    const locale = useLocale();

    const blogPosts = locale === 'ar' ? [
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
