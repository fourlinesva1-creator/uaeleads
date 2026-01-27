import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

type Props = {
    params: Promise<{ locale: string }>;
};

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
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>Get in Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        Contact Our Experts
                    </h1>
                    <p className="text-xl text-[#9da6b9]">
                        Have questions about your Ramadan setup? Our team of specialists is ready to assist you.
                    </p>
                </div>

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
                            {/* Simplified Contact Form */}
                            <div className="p-8 sm:p-12">
                                <h2 className="text-3xl font-display text-white mb-8">Send a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm text-[#9da6b9]">Full Name</label>
                                            <input type="text" className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-colors" placeholder="E.g. John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm text-[#9da6b9]">Phone Number</label>
                                            <input type="tel" className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-colors" placeholder="050 123 4567" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-[#9da6b9]">Message</label>
                                        <textarea rows={4} className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                                    </div>
                                    <button type="submit" className="btn-gold-fill w-full py-4 rounded-xl font-display text-lg">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
