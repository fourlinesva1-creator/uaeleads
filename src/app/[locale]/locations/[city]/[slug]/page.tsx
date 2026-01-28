import { setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { cityContent } from '@/data/city-content';
import { useModal } from '@/components/ui/ModalProvider';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';

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
    const locale = useLocale();
    const { openCallback } = useModal();
    const t = useTranslations('common');

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

    return (
        <div className="bg-[#101622] pt-32 lg:pt-40 pb-20">
            <div className="container-luxury">
                {/* Hero Section */}
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-8">
                        <span>30 Years of Specialized Excellence</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                        {content.title}
                    </h1>
                    <div className="w-24 h-1 bg-gold mb-10" />
                    <h2 className="text-xl md:text-2xl text-gold font-medium mb-8">
                        {content.subtitle}
                    </h2>
                    <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed max-w-3xl">
                        {content.intro}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 item-start">
                    {/* Content Column */}
                    <div className="lg:col-span-12">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-text-muted text-lg leading-relaxed mb-12">
                                {content.mainBody}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
                                {content.features.map((feature, idx) => (
                                    <div key={idx} className="p-8 bg-[#1a212e] border border-border/50 rounded-2xl hover:border-gold/30 transition-all group">
                                        <CheckCircle2 className="text-gold mb-4 group-hover:scale-110 transition-transform" size={32} />
                                        <h3 className="text-white text-xl font-bold mb-4">{feature.title}</h3>
                                        <p className="text-text-muted text-sm leading-relaxed">{feature.body}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sticky CTA Bar / Final Call */}
                        <div className="mt-20 p-12 lg:p-16 bg-[#D4AF37] rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-16 opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700">
                                <ArrowRight size={300} strokeWidth={1} />
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="max-w-xl text-center md:text-left">
                                    <h2 className="text-3xl md:text-4xl font-display text-[#101622] font-bold mb-4">
                                        Let's Design Your {city.replace(/-/g, ' ')} Majlis
                                    </h2>
                                    <p className="text-[#101622]/80 font-medium">
                                        Secure your inventory for the 2026 Ramadan season with Dubai's most veteran architectural team.
                                    </p>
                                </div>
                                <button
                                    onClick={openCallback}
                                    className="px-10 py-5 bg-[#101622] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#1a212e] transition-all shadow-2xl"
                                >
                                    {content.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
