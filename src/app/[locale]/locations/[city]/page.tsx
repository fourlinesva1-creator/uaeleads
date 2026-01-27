import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

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

export default async function CityPage({ params }: Props) {
    const { locale, city } = await params;
    setRequestLocale(locale);

    if (!cities.includes(city)) notFound();

    return <CityContent city={city} />;
}

function CityContent({ city }: { city: string }) {
    const t = useTranslations('locations');
    const common = useTranslations('common');

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>Premium Majlis Rentals</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide capitalize">
                        {t(`cities.${city.replace('-', 'Dhabi').replace('ras-al-khaimah', 'rak')}`)} {t('title')}
                    </h1>
                    <p className="text-xl text-[#9da6b9]">
                        {t('subtitle')} in {t(`cities.${city.replace('-', 'Dhabi').replace('ras-al-khaimah', 'rak')}`)}.
                    </p>
                </div>

                {/* Placeholder for city specific content */}
                <div className="p-12 bg-[#1a212e] border border-[#282e39] rounded-3xl text-center">
                    <h2 className="text-2xl font-display text-white mb-6">Coming Soon</h2>
                    <p className="text-[#9da6b9] mb-8">We are crafting the perfect experience for {city}.</p>
                    <button className="btn-gold-fill px-8 py-4 rounded-xl font-display">
                        {common('contactUs')}
                    </button>
                </div>
            </div>
        </div>
    );
}
