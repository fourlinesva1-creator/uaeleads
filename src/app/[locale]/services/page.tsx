import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'services' });

    return {
        title: t('title'),
        description: t('subtitle'),
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services',
                'ar': 'https://www.tentnow.ae/ar/services',
            },
        },
    };
}

export default async function ServicesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ServicesContent />;
}

function ServicesContent() {
    const t = useTranslations('services');

    const services = [
        { id: 'hotel', slug: 'hotel-majlis', image: '/images/tent-now/hotel.jpg' },
        { id: 'corporate', slug: 'corporate-events', image: '/images/tent-now/corporate.jpg' },
        { id: 'home', slug: 'home-majlis', image: '/images/tent-now/home-majlis.jpg' },
        { id: 'iftar', slug: 'iftar-tent-rental', image: '/images/tent-now/iftar-tents.jpg' },
        { id: 'suhoor', slug: 'suhoor-tent-rental', image: '/images/tent-now/home-majlis.jpg' },
        { id: 'sadu', slug: 'sadu-tent-rental', image: '/images/tent-now/sadu-tents.jpg' },
        { id: 'furniture', slug: 'furniture-rental', image: '/images/tent-now/furniture.jpg' },
        { id: 'decor', slug: 'decor-lighting', image: '/images/tent-now/lighting-and-decor.jpg' }
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

                {/* Storage & Industrial Solutions */}
                <div className="mt-20 pt-16 border-t border-[#1a212e]">
                    <div className="max-w-2xl mb-10">
                        <div className="section-label mb-4">
                            <span>Industrial & Commercial Solutions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                            Storage Tent Solutions for UAE Projects
                        </h2>
                        <p className="text-[#9da6b9]">
                            Civil Defence-approved clear span, warehouse frame, and industrial tent structures for construction, logistics, oil & gas, and manufacturing.
                        </p>
                    </div>
                    <div className="bg-[#1a212e] border border-[#282e39] rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="aspect-[16/9] lg:aspect-auto relative overflow-hidden min-h-[280px]">
                                <Image
                                    src="/images/storage-tents/storage-tent-hero.jpg"
                                    alt="Industrial storage tent structures UAE"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a212e] hidden lg:block" />
                            </div>
                            <div className="p-10 lg:p-12 flex flex-col justify-center">
                                <div className="text-gold text-sm font-bold uppercase tracking-widest mb-4">
                                    AED 15–40 / sqm / month
                                </div>
                                <h3 className="text-3xl font-display text-white mb-4">
                                    Industrial Storage Tents
                                </h3>
                                <p className="text-[#9da6b9] mb-8 leading-relaxed">
                                    UAE warehousing vacancy is at 3% and industrial rents are up 33%. Deploy Civil Defence-approved storage structures within days — not months — at 50–70% less than permanent construction.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                                    {[
                                        { label: 'Clear Span', href: '/services/storage-tents/clear-span-tents' },
                                        { label: 'Warehouse', href: '/services/storage-tents/warehouse-tents' },
                                        { label: 'Industrial', href: '/services/storage-tents/industrial-tents' },
                                    ].map(({ label, href }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="px-4 py-2.5 bg-[#101622] border border-[#282e39] rounded-lg text-center text-[#9da6b9] text-sm hover:border-[#D4AF37]/40 hover:text-white transition-all"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/services/storage-tents"
                                    className="flex items-center gap-2 text-[#D4AF37] font-bold hover:gap-4 transition-all"
                                >
                                    Explore Storage Solutions <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
