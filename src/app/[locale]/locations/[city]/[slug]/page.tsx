import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { cityContent } from '@/data/city-content';
import { Link } from '@/i18n/navigation';
import LocationServiceUI from '@/components/sections/LocationServiceUI';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ServiceSchema from '@/components/seo/ServiceSchema';

type Props = {
    params: Promise<{ locale: string; city: string; slug: string }>;
};

const cities = ['dubai', 'abu-dhabi', 'sharjah', 'ajman', 'ras-al-khaimah', 'fujairah', 'umm-al-quwain'];
const slugs = ['ramadan-tent-rental', 'majlis-tent-rental', 'iftar-tent-rental', 'suhoor-tent-rental', 'sadu-tent-rental', 'storage-tent-rental', 'warehouse-tent-rental', 'labor-accommodation-tents'];

export async function generateStaticParams() {
    const params: { locale: string; city: string; slug: string }[] = [];
    routing.locales.forEach(locale => {
        cities.forEach(city => {
            slugs.forEach(slug => {
                params.push({ locale, city, slug });
            });
        });
    });
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, city, slug } = await params;
    const content = cityContent[locale]?.[city]?.[slug];

    if (!content) return { title: `${slug.replace(/-/g, ' ')} in ${city.replace(/-/g, ' ')}` };

    const description = content.intro.length > 160
        ? content.intro.substring(0, 157) + '…'
        : content.intro;

    return {
        title: content.title,
        description,
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/locations/${city}/${slug}`,
            languages: {
                'en': `https://www.tentnow.ae/en/locations/${city}/${slug}`,
                'ar': `https://www.tentnow.ae/ar/locations/${city}/${slug}`,
                'x-default': `https://www.tentnow.ae/en/locations/${city}/${slug}`,
            },
        },
        openGraph: {
            title: content.title,
            description,
            url: `https://www.tentnow.ae/${locale}/locations/${city}/${slug}`,
            siteName: 'Tent Now',
            locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
            type: 'website',
            images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: content.title }],
        },
    };
}

export default async function LocationServicePage({ params }: Props) {
    const { locale, city, slug } = await params;
    setRequestLocale(locale);

    if (!cities.includes(city) || !slugs.includes(slug)) notFound();

    const content = cityContent[locale]?.[city]?.[slug];

    // Fallback if content is missing for a specific city/slug combo
    if (!content) {
        return (
            <div className="bg-[#101622] pt-40 pb-20 min-h-screen">
                <div className="container-luxury text-center">
                    <h1 className="text-4xl font-display text-white mb-6 capitalize">{slug.replace(/-/g, ' ')} in {city.replace(/-/g, ' ')}</h1>
                    <p className="text-text-muted mb-8">Detailed content for this location is coming soon.</p>
                    <Link href="/request-quote" className="btn-gold px-8 py-4 rounded-xl inline-block">Request Quote</Link>
                </div>
            </div>
        );
    }

    const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const slugLabel = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const pageUrl = `https://www.tentnow.ae/${locale}/locations/${city}/${slug}`;

    return (
        <>
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: locale === 'ar' ? 'المواقع' : 'Locations', href: '/locations' },
                    { name: cityName, href: `/locations/${city}` },
                    { name: slugLabel, href: `/locations/${city}/${slug}` },
                ]}
            />
            <ServiceSchema
                name={content.title}
                description={content.intro.substring(0, 200)}
                url={pageUrl}
            />
            <LocationServiceUI city={city} slug={slug} content={content} />
        </>
    );
}
