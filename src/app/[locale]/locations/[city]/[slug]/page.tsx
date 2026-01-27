import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

type Props = {
    params: Promise<{ locale: string; city: string; slug: string }>;
};

const cities = ['dubai', 'abu-dhabi', 'sharjah', 'ajman', 'ras-al-khaimah', 'fujairah', 'umm-al-quwain'];
const slugs = ['ramadan-tent-rental', 'majlis-tent-rental', 'iftar-tent-rental', 'suhoor-tent-rental'];

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

export default async function LocationServicePage({ params }: Props) {
    const { locale, city, slug } = await params;
    setRequestLocale(locale);

    if (!cities.includes(city) || !slugs.includes(slug)) notFound();

    return <LocationServiceContent city={city} slug={slug} />;
}

function LocationServiceContent({ city, slug }: { city: string; slug: string }) {
    const common = useTranslations('common');

    // Note: For actual content, we'll need to define it in message files 
    // or use the already provided copy in a data map for now.

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>30 Years of Excellence</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide capitalize">
                        {slug.replace(/-/g, ' ')} in {city.replace(/-/g, ' ')}
                    </h1>
                    <p className="text-xl text-[#9da6b9] leading-relaxed">
                        Premium solutions tailored for the 2026 Ramadan season.
                    </p>
                </div>

                <div className="p-12 bg-[#1a212e] border border-[#282e39] rounded-3xl text-center">
                    <h2 className="text-2xl font-display text-white mb-6">Luxury Setups for {city}</h2>
                    <p className="text-[#9da6b9] mb-8 max-w-2xl mx-auto">
                        Our expert team is ready to deliver high-end {slug.replace(/-/g, ' ')} in {city}.
                        Blending tradition with modern engineering to create the perfect atmosphere.
                    </p>
                    <button className="btn-gold-fill px-8 py-4 rounded-xl font-display">
                        Request Custom Proposal
                    </button>
                </div>
            </div>
        </div>
    );
}
