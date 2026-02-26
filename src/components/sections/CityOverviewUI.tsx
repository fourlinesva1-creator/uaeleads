'use client';

import { useModal } from '@/components/ui/ModalProvider';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { CityOverview } from '@/data/city-content';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import { CheckCircle2, Shield, MapPin, ArrowRight, Users, Building2, Home, Landmark, ExternalLink, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface Props {
    city: string;
    content: CityOverview;
}

const audienceIcons = [Home, Landmark, Building2];

// City → dedicated service page slug (for cross-linking)
const cityServiceSlugMap: Record<string, string> = {
    'dubai': 'iftar-tent-rental-dubai',
    'abu-dhabi': 'iftar-tent-rental-abu-dhabi',
    'sharjah': 'iftar-tent-rental-sharjah',
};

// City background images mapping
const cityImages: Record<string, string> = {
    'dubai': '/images/locations/dubai.jpg',
    'abu-dhabi': '/images/locations/abu-dhabi.jpg',
    'sharjah': '/images/locations/sharjah.jpg',
    'ajman': '/images/locations/other-cities.jpg',
    'ras-al-khaimah': '/images/locations/ras-al-khaimah.jpg',
    'fujairah': '/images/locations/other-cities.jpg',
    'umm-al-quwain': '/images/locations/other-cities.jpg',
};

export default function CityOverviewUI({ city, content }: Props) {
    const { openCallback } = useModal();
    const locale = useLocale();
    const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const pageUrl = `https://www.tentnow.ae/${locale}/locations/${city}`;

    return (
        <div className="bg-[#101622]">
            <ServiceSchema
                name={content.title}
                description={content.intro}
                url={pageUrl}
                image={cityImages[city]}
            />
            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={cityImages[city] || cityImages['sharjah']}
                        alt={`${cityName} Ramadan Tent Services`}
                        fill
                        priority
                        className="object-cover opacity-30 scale-105 group-hover:scale-110 transition-transform duration-[20s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>Established Heritage in {cityName}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            {content.title}
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                        <p className="text-xl md:text-2xl text-gold font-medium mb-10 leading-relaxed italic">
                            {content.subtitle}
                        </p>
                        <p className="text-lg md:text-xl text-text-light leading-relaxed max-w-3xl font-light">
                            {content.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 border-t border-border/30">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl md:text-4xl font-display text-white mb-6">
                                Why Work With Us
                            </h2>
                            <div className="w-16 h-1 bg-gold" />
                        </div>
                        <div className="lg:col-span-7">
                            <p className="text-lg text-text-muted leading-relaxed">
                                {content.whyUs}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Audiences Section */}
            <section className="py-20 bg-[#0c1119]">
                <div className="container-luxury">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                            Who We Serve
                        </h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Three decades of experience means we understand what different clients actually need.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {content.audiences.map((audience, idx) => {
                            const Icon = audienceIcons[idx] || Users;
                            return (
                                <div
                                    key={idx}
                                    className="p-8 bg-[#1a212e] border border-border/50 rounded-2xl hover:border-gold/30 transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                        <Icon className="text-gold" size={28} />
                                    </div>
                                    <h3 className="text-xl font-display text-white mb-4">
                                        {audience.title}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                                        {audience.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {audience.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-start gap-3 text-sm">
                                                <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={16} />
                                                <span className="text-text-light">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="py-20">
                <div className="container-luxury">
                    <div className="p-10 lg:p-16 bg-[#1a212e] border border-border/50 rounded-3xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-2 flex justify-center lg:justify-start">
                                <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center">
                                    <Shield className="text-gold" size={40} />
                                </div>
                            </div>
                            <div className="lg:col-span-10">
                                <h3 className="text-2xl md:text-3xl font-display text-white mb-4">
                                    {content.compliance.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    {content.compliance.body}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas We Serve */}
            <section className="py-20 border-t border-border/30">
                <div className="container-luxury">
                    <div className="flex items-center gap-4 mb-10">
                        <MapPin className="text-gold" size={24} />
                        <h2 className="text-2xl font-display text-white">
                            Areas We Serve in {cityName}
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {content.areas.map((area, idx) => (
                            <span
                                key={idx}
                                className="px-5 py-2.5 bg-[#1a212e] border border-border/50 rounded-full text-text-light text-sm hover:border-gold/30 transition-colors"
                            >
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Links */}
            <section className="py-20 bg-[#0c1119]">
                <div className="container-luxury">
                    <h2 className="text-2xl md:text-3xl font-display text-white mb-10">
                        Our {cityName} Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { slug: 'ramadan-tent-rental', label: 'Ramadan Tent Rental' },
                            { slug: 'majlis-tent-rental', label: 'Majlis Tent Rental' },
                            { slug: 'iftar-tent-rental', label: 'Iftar Tent Solutions' },
                            { slug: 'suhoor-tent-rental', label: 'Suhoor Tent Setups' },
                            { slug: 'sadu-tent-rental', label: 'Sadu Tent Rental' },
                        ].map(({ slug, label }) => (
                            <Link
                                key={slug}
                                href={`/locations/${city}/${slug}`}
                                className="p-8 bg-[#1a212e] border border-border/50 rounded-2xl hover:border-gold/50 transition-all group flex items-center justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-display text-white mb-2 group-hover:text-gold transition-colors">
                                        {label}
                                    </h3>
                                    <p className="text-text-muted text-sm">
                                        Professional {label.toLowerCase()} in {cityName}
                                    </p>
                                </div>
                                <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                            </Link>
                        ))}
                    </div>

                    {/* Cross-link to city-specific service deep-dive page */}
                    {cityServiceSlugMap[city] && (
                        <div className="mt-8 p-6 bg-[#1a212e] border border-gold/20 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div>
                                <p className="text-text-muted text-sm mb-1">Complete {cityName} Guide</p>
                                <p className="text-white font-display">
                                    Iftar Tent Rental {cityName} — Full Setup Guide, Pricing & FAQs
                                </p>
                            </div>
                            <Link
                                href={`/services/${cityServiceSlugMap[city]}`}
                                className="shrink-0 flex items-center gap-2 px-6 py-3 border border-gold text-gold rounded-xl text-sm font-display hover:bg-gold hover:text-[#101622] transition-all"
                            >
                                View Guide
                                <ExternalLink size={16} />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ Section */}
            {content.faqs && content.faqs.length > 0 && (
                <section className="py-20 border-t border-border/30">
                    <FAQSchema items={content.faqs} />
                    <div className="container-luxury">
                        <h2 className="text-2xl md:text-3xl font-display text-white mb-10">
                            {locale === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                        </h2>
                        <div className="space-y-4 max-w-3xl">
                            {content.faqs.map((faq, idx) => (
                                <details
                                    key={idx}
                                    className="group bg-[#1a212e] border border-border/50 rounded-2xl overflow-hidden hover:border-gold/30 transition-colors"
                                >
                                    <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                                        <h3 className="text-white font-display text-base md:text-lg leading-snug">
                                            {faq.q}
                                        </h3>
                                        <ChevronDown
                                            className="text-gold shrink-0 transition-transform group-open:rotate-180"
                                            size={20}
                                        />
                                    </summary>
                                    <div className="px-6 pb-5">
                                        <p className="text-text-muted leading-relaxed text-sm md:text-base">
                                            {faq.a}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="py-20">
                <div className="container-luxury">
                    <div className="p-12 lg:p-20 bg-gold rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-16 opacity-10 transform translate-x-8 -translate-y-8">
                            <ArrowRight size={300} strokeWidth={1} />
                        </div>
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-3xl md:text-5xl font-display text-[#101622] mb-6">
                                Ready to Talk?
                            </h2>
                            <p className="text-[#101622]/80 text-lg mb-10 leading-relaxed">
                                Get a detailed quote for your {cityName} Ramadan setup. No generic pricing—we'll scope your exact requirements and give you real numbers within 24 hours.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={openCallback}
                                    className="px-10 py-5 bg-[#101622] text-white rounded-xl font-display tracking-wide hover:bg-[#1a212e] transition-colors"
                                >
                                    {content.cta}
                                </button>
                                <a
                                    href="https://wa.me/971501826969"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-5 bg-transparent border-2 border-[#101622] text-[#101622] rounded-xl font-display tracking-wide hover:bg-[#101622]/10 transition-colors text-center"
                                >
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
