import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function ServicesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ServicesContent />;
}

function ServicesContent() {
    const t = useTranslations('services');

    const services = [
        { id: 'hotel', slug: 'hotel-majlis', image: '/images/Tent Now/hotel.jpg' },
        { id: 'corporate', slug: 'corporate-events', image: '/images/Tent Now/corporate.jpg' },
        { id: 'home', slug: 'home-majlis', image: '/images/Tent Now/home majis.jpg' },
        { id: 'furniture', slug: 'furniture-rental', image: '/images/Tent Now/furniture.jpg' },
        { id: 'decor', slug: 'decor-lighting', image: '/images/Tent Now/lighting and decor.jpg' }
    ];

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>Our Expertise</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-[#9da6b9]">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="group block bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all duration-500"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={t(`items.${service.id}.title`)}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                                    {t(`items.${service.id}.title`)}
                                </h3>
                                <p className="text-[#9da6b9] mb-6 line-clamp-3">
                                    {t(`items.${service.id}.description`)}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm uppercase tracking-widest text-[#D4AF37]">
                                        {t(`items.${service.id}.priceLabel`)} {t(`items.${service.id}.price`)}
                                    </span>
                                    <span className="w-10 h-10 rounded-full border border-[#282e39] flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all group-hover:translate-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
