import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import Image from 'next/image';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'nav' });

    return {
        title: t('contact'),
        description: 'Get in touch with Tent Now for premium Ramadan tent and Majlis rentals in Dubai, Abu Dhabi, and across the UAE.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/contact`,
            languages: {
                'en': 'https://www.tentnow.ae/en/contact',
                'ar': 'https://www.tentnow.ae/ar/contact',
                'x-default': 'https://www.tentnow.ae/en/contact',
            },
        },
    };
}

export default async function ContactPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ContactContent />;
}

function ContactContent() {
    const t = useTranslations('nav');
    const footer = useTranslations('footer');
    const common = useTranslations('common');

    return (
        <div className="bg-[#101622]">
            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tent-now/corporate.jpg"
                        alt="Contact Tent Now"
                        fill
                        priority
                        className="object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>Get in Touch</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            Contact Our Experts
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed max-w-3xl">
                            Have questions about your Ramadan setup? Our team of specialists is ready to assist you.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-luxury py-20 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-display text-white mb-2">Our Office</h3>
                                    <p className="text-[#9da6b9] leading-relaxed">
                                        {footer('address')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-display text-white mb-2">Call/WhatsApp</h3>
                                    <a href={`tel:${footer('phone')}`} className="block text-[#D4AF37] hover:underline mb-1">
                                        {footer('phone')}
                                    </a>
                                    <p className="text-sm text-[#9da6b9]">Available 24/7 for support</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-display text-white mb-2">Working Hours</h3>
                                    <p className="text-[#9da6b9]">
                                        Mon - Sun: 9:00 AM - 10:00 PM
                                    </p>
                                    <p className="text-sm text-[#D4AF37] mt-1 italic">Extended hours during Ramadan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Map / Form Placeholder */}
                    <div className="lg:col-span-2">
                        <div className="h-full min-h-[400px] w-full bg-[#1a212e] border border-[#282e39] rounded-3xl relative overflow-hidden">
                            {/* Contact Form */}
                            <div className="p-8 sm:p-12">
                                <h2 className="text-3xl font-display text-white mb-8">Send a Message</h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
