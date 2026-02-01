import { useTranslations } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

type Props = {
    params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'RamadanCalendar' });

    return {
        title: t('meta.title'),
        description: t('meta.description'),
        keywords: t('meta.keywords'),
        openGraph: {
            title: t('meta.title'),
            description: t('meta.description'),
            images: ['/images/tent-now/Dubai-Calendar-2026-Ramadan.jpg'],
            type: 'article',
        },
        alternates: {
            canonical: `/${locale}/blog/ramadan-calendar-uae-2026`,
            languages: {
                en: '/en/blog/ramadan-calendar-uae-2026',
                ar: '/ar/blog/ramadan-calendar-uae-2026',
            },
        },
    };
}

export default function RamadanCalendarPage({ params: { locale } }: Props) {
    setRequestLocale(locale);
    const t = useTranslations('RamadanCalendar');

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-teal-700">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl text-emerald-50 mb-8">
                            {t('hero.subtitle')}
                        </p>
                        <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-semibold">{t('hero.dates')}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="container mx-auto px-4 py-16 max-w-5xl">
                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                    <p className="text-xl text-gray-700 leading-relaxed">
                        {t('intro.text')}
                    </p>
                </div>

                {/* Calendar Image */}
                <div className="my-12 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/tent-now/Dubai-Calendar-2026-Ramadan.jpg"
                        alt={t('calendar.alt')}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        priority
                    />
                    <div className="bg-gray-100 p-4 text-center">
                        <p className="text-sm text-gray-600">{t('calendar.caption')}</p>
                    </div>
                </div>

                {/* Key Dates Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-emerald-600 rounded"></span>
                        {t('dates.heading')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['start', 'end', 'eid'].map((key) => (
                            <div key={key} className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                                <div className="text-emerald-700 font-semibold mb-2">{t(`dates.${key}.label`)}</div>
                                <div className="text-2xl font-bold text-gray-900 mb-1">{t(`dates.${key}.date`)}</div>
                                <div className="text-sm text-gray-600">{t(`dates.${key}.day`)}</div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                        <p className="text-sm text-blue-900">
                            <strong>{t('dates.note.title')}</strong> {t('dates.note.text')}
                        </p>
                    </div>
                </section>

                {/* Prayer Times Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-emerald-600 rounded"></span>
                        {t('prayer.heading')}
                    </h2>
                    <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('prayer.suhoor.title')}</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="text-gray-700">{t('prayer.suhoor.fajr')}</span>
                                        <span className="font-bold text-emerald-600">4:45 AM - 5:20 AM</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{t('prayer.suhoor.note')}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('prayer.iftar.title')}</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="text-gray-700">{t('prayer.iftar.maghrib')}</span>
                                        <span className="font-bold text-emerald-600">6:15 PM - 6:35 PM</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{t('prayer.iftar.note')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                            <p className="text-sm text-amber-900">
                                <strong>⏰ {t('prayer.duration.title')}</strong> {t('prayer.duration.text')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Traditions Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-emerald-600 rounded"></span>
                        {t('traditions.heading')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {['iftar', 'prayers', 'charity', 'family'].map((key, index) => (
                            <div key={key} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">{['🌙', '🕌', '🤲', '👨‍👩‍👧‍👦'][index]}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(`traditions.${key}.title`)}</h3>
                                        <p className="text-gray-600">{t(`traditions.${key}.text`)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ramadan Tent Planning Section */}
                <section className="mb-16 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold mb-6">{t('tents.heading')}</h2>
                        <p className="text-emerald-50 text-lg mb-8">{t('tents.intro')}</p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {['corporate', 'family', 'events', 'private'].map((key) => (
                                <div key={key} className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-emerald-50">{t(`tents.types.${key}`)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/request-quote"
                                className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                            >
                                {t('tents.cta')}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/20"
                            >
                                {t('tents.services')}
                            </Link>
                        </div>
                    </div>
                </section>

                {/* City-Specific Information */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-emerald-600 rounded"></span>
                        {t('cities.heading')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {['dubai', 'abuDhabi', 'sharjah'].map((city) => (
                            <div key={city} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{t(`cities.${city}.name`)}</h3>
                                    <p className="text-gray-600 mb-4">{t(`cities.${city}.text`)}</p>
                                    <Link
                                        href={`/services/${city.toLowerCase()}/ramadan-tent-rental`}
                                        className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-2"
                                    >
                                        {t('cities.learnMore')}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                        <span className="w-2 h-8 bg-emerald-600 rounded"></span>
                        {t('faq.heading')}
                    </h2>
                    <div className="space-y-4">
                        {['moonSighting', 'workHours', 'tourists', 'booking'].map((key) => (
                            <details key={key} className="bg-white rounded-xl p-6 shadow-md group">
                                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                                    <span>{t(`faq.${key}.question`)}</span>
                                    <svg className="w-5 h-5 text-emerald-600 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed">{t(`faq.${key}.answer`)}</p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Conclusion CTA */}
                <section className="text-center bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('conclusion.heading')}</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t('conclusion.text')}</p>
                    <Link
                        href="/request-quote"
                        className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-lg shadow-lg hover:shadow-xl"
                    >
                        {t('conclusion.cta')}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </section>
            </article>

            {/* Schema Markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Article',
                        headline: t('meta.title'),
                        description: t('meta.description'),
                        image: '/images/tent-now/Dubai-Calendar-2026-Ramadan.jpg',
                        author: {
                            '@type': 'Organization',
                            name: 'Tent Now',
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'Tent Now',
                            logo: {
                                '@type': 'ImageObject',
                                url: '/logo.png',
                            },
                        },
                        datePublished: '2026-02-01',
                        dateModified: '2026-02-01',
                    }),
                }}
            />
        </main>
    );
}
