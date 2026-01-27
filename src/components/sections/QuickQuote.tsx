'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Send, Loader2 } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';

export default function QuickQuote() {
    const t = useTranslations('quickQuote');
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        router.push('/thank-you');
    };

    return (
        <section className="py-24 bg-[#1a212e] relative overflow-hidden">
            <div className="container-luxury relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="section-label mb-6">
                            <span>Start Planning</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                            {t('title')}
                        </h2>
                        <p className="text-xl text-[#9da6b9] mb-10">
                            {t('subtitle')}
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-6 bg-[#101622] border border-[#282e39] rounded-2xl">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold italic">1</span>
                                </div>
                                <p className="text-white font-medium">Simple configuration of your requirements</p>
                            </div>
                            <div className="flex items-center gap-4 p-6 bg-[#101622] border border-[#282e39] rounded-2xl">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold italic">2</span>
                                </div>
                                <p className="text-white font-medium">Live availability check from our 2026 inventory</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 sm:p-12 bg-[#101622] border border-[#282e39] rounded-[2.5rem] shadow-2xl relative">
                        <div className="absolute top-0 right-12 w-24 h-1 bg-[#D4AF37] rounded-full -translate-y-1/2" />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm text-[#9da6b9] ml-1">{t('fields.name')}</label>
                                <input
                                    type="text"
                                    required
                                    placeholder={t('placeholders.name')}
                                    className="w-full bg-[#1a212e] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-[#9da6b9] ml-1">{t('fields.phone')}</label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder={t('placeholders.phone')}
                                        className="w-full bg-[#1a212e] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-[#9da6b9] ml-1">{t('fields.service')}</label>
                                    <select className="w-full bg-[#1a212e] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all appearance-none cursor-pointer">
                                        <option value="hotel">{t('services.hotel')}</option>
                                        <option value="corporate">{t('services.corporate')}</option>
                                        <option value="private">{t('services.private')}</option>
                                        <option value="furniture">{t('services.furniture')}</option>
                                        <option value="other">{t('services.other')}</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-gold-fill w-full py-5 rounded-2xl font-display text-lg flex items-center justify-center gap-3 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        {t('fields.submit')}
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
