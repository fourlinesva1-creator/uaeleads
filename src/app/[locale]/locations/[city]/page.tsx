import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { cityOverviews } from '@/data/city-content';
import { Link } from '@/i18n/navigation';
import CityOverviewUI from '@/components/sections/CityOverviewUI';

type Props = {
    params: Promise<{ locale: string; city: string }>;
};

const cities = ['dubai', 'abu-dhabi', 'sharjah', 'ajman', 'ras-al-khaimah', 'fujairah', 'umm-al-quwain'];

export async function generateStaticParams() {
    const params: { locale: string; city: string }[] = [];
    routing.locales.forEach(locale => {
        cities.forEach(city => {
            params.push({ locale, city });
        });
    });
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, city } = await params;
    const content = cityOverviews[locale]?.[city];
    const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    if (!content) return { title: `Ramadan Tent Rental in ${cityName}` };

    return {
        title: content.title,
        description: content.intro,
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/locations/${city}`,
            languages: {
                'en': `https://www.tentnow.ae/en/locations/${city}`,
                'ar': `https://www.tentnow.ae/ar/locations/${city}`,
            },
        }
    };
}

export default async function CityPage({ params }: Props) {
    const { locale, city } = await params;
    setRequestLocale(locale);

    if (!cities.includes(city)) notFound();

    const content = cityOverviews[locale]?.[city];

    // Fallback for cities without overview content
    if (!content) {
        return <FallbackContent city={city} locale={locale} />;
    }

    return <CityOverviewUI city={city} content={content} />;
}

function FallbackContent({ city, locale }: { city: string; locale: string }) {
    const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                <div className="max-w-4xl mb-16 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>Premium Majlis Rentals</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        Ramadan Tent Rental in {cityName}
                    </h1>
                    <p className="text-xl text-[#9da6b9] mb-12">
                        30 years of expertise delivering premium Ramadan tent and Majlis solutions across {cityName}.
                    </p>
                </div>

                {/* Service Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {['ramadan-tent-rental', 'majlis-tent-rental', 'iftar-tent-rental', 'suhoor-tent-rental'].map((slug) => (
                        <Link
                            key={slug}
                            href={`/locations/${city}/${slug}`}
                            className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/50 transition-all group"
                        >
                            <h3 className="text-xl font-display text-white mb-3 group-hover:text-gold transition-colors capitalize">
                                {slug.replace(/-/g, ' ')}
                            </h3>
                            <p className="text-[#9da6b9] text-sm">
                                Professional {slug.replace(/-/g, ' ')} services in {cityName}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="p-12 bg-gold rounded-3xl text-center">
                    <h2 className="text-3xl font-display text-[#101622] mb-6">Ready to Start Planning?</h2>
                    <p className="text-[#101622]/80 mb-8 max-w-2xl mx-auto">
                        Get a custom quote for your {cityName} Ramadan setup. Our team responds within 24 hours.
                    </p>
                    <Link href="/request-quote" className="px-10 py-4 bg-[#101622] text-white rounded-xl font-display inline-block hover:bg-[#1a212e] transition-colors">
                        Request Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
