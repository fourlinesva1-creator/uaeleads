'use client';

import { useModal } from '@/components/ui/ModalProvider';
import { Link } from '@/i18n/navigation';
import { CityOverview } from '@/data/city-content';
import { CheckCircle2, Shield, MapPin, ArrowRight, Users, Building2, Home } from 'lucide-react';

interface Props {
    city: string;
    content: CityOverview;
}

const audienceIcons = [Building2, Users, Home];

export default function CityOverviewUI({ city, content }: Props) {
    const { openCallback } = useModal();
    const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="bg-[#101622]">
            {/* Hero Section */}
            <section className="pt-32 lg:pt-40 pb-20">
                <div className="container-luxury">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>30 Years Serving {cityName}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            {content.title}
                        </h1>
                        <div className="w-24 h-1 bg-gold mb-10" />
                        <p className="text-xl md:text-2xl text-gold font-medium mb-8">
                            {content.subtitle}
                        </p>
                        <p className="text-lg md:text-xl text-text-light leading-relaxed max-w-3xl">
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
                            { slug: 'suhoor-tent-rental', label: 'Suhoor Tent Setups' }
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
                </div>
            </section>

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
