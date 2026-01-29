'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useModal } from '@/components/ui/ModalProvider';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { SEOContent } from '@/data/city-content';
import ServiceSchema from '@/components/seo/ServiceSchema';

interface Props {
    city: string;
    slug: string;
    content: SEOContent;
}

const cityImages: Record<string, string> = {
    'dubai': '/images/tent-now/dubai.jpg',
    'abu-dhabi': '/images/tent-now/abu-dhabi.jpg',
    'sharjah': '/images/tent-now/sharjah.jpg',
    'ajman': '/images/tent-now/other-cities.jpg',
    'ras-al-khaimah': '/images/tent-now/ras-al-khaimah.jpg',
    'fujairah': '/images/tent-now/other-cities.jpg',
    'umm-al-quwain': '/images/tent-now/other-cities.jpg',
};

const serviceImages: Record<string, string> = {
    'ramadan-tent-rental': '/images/tent-now/iftar-tents.jpg',
    'majlis-tent-rental': '/images/tent-now/home-majlis.jpg',
    'iftar-tent-rental': '/images/tent-now/iftar-tents.jpg',
    'suhoor-tent-rental': '/images/tent-now/home-majlis.jpg',
};

export default function LocationServiceUI({ city, slug, content }: Props) {
    const { openCallback } = useModal();
    const locale = useLocale();
    const pageUrl = `https://tentnow.ae/${locale}/locations/${city}/${slug}`;

    return (
        <div className="bg-[#101622]">
            <ServiceSchema
                name={content.title}
                description={content.intro}
                url={pageUrl}
                image={serviceImages[slug] || cityImages[city]}
            />
            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={serviceImages[slug] || cityImages[city] || cityImages['sharjah']}
                        alt={content.title}
                        fill
                        priority
                        className="object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>30 Years of Specialized Excellence</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            {content.title}
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <h2 className="text-xl md:text-2xl text-gold font-medium mb-10 italic leading-relaxed">
                            {content.subtitle}
                        </h2>
                        <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed max-w-3xl">
                            {content.intro}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-luxury py-20 relative z-10">
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
                                        Let's Design Your {city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Majlis
                                    </h2>
                                    <p className="text-[#101622]/80 font-medium">
                                        Secure your inventory for the 2026 Ramadan season with the UAE's most veteran architectural team.
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
