'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Send, Loader2 } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';
import { useRecaptcha } from '@/hooks/useRecaptcha';

const uaePhoneRegex = /^(?:\+971|00971|0)?(?:50|51|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/;
const WHATSAPP_NUMBER = '971501826969';

export default function QuickQuote() {
    const t = useTranslations('quickQuote');
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('hotel');
    const [phoneError, setPhoneError] = useState('');
    const [submitError, setSubmitError] = useState('');
    const honeypotRef = useRef<HTMLInputElement>(null);
    const { executeRecaptcha } = useRecaptcha();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError('');

        if (honeypotRef.current?.value) {
            router.push('/thank-you');
            return;
        }

        const cleanPhone = phone.replace(/\s/g, '');
        if (!uaePhoneRegex.test(cleanPhone)) {
            setPhoneError('Please enter a valid UAE phone number');
            return;
        }
        setPhoneError('');
        setIsSubmitting(true);

        try {
            const token = await executeRecaptcha('submit_quick_quote');
            const res = await fetch('/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });
            if (!res.ok) {
                const err = await res.json();
                setSubmitError(err.error || 'Verification failed. Please try again.');
                setIsSubmitting(false);
                return;
            }
        } catch {
            setSubmitError('Security check failed. Please try again.');
            setIsSubmitting(false);
            return;
        }

        const waMessage =
            `*Quick Quote Request from Tent Now Website*%0A` +
            `--------------------------------%0A` +
            `*Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Service:* ${service}%0A` +
            `--------------------------------`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

        await new Promise(resolve => setTimeout(resolve, 800));
        setIsSubmitting(false);
        window.open(whatsappUrl, '_blank');
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
                            {/* Honeypot - hidden from real users, filled by bots */}
                            <input
                                ref={honeypotRef}
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}
                                aria-hidden="true"
                            />

                            <div className="space-y-2">
                                <label className="text-sm text-[#9da6b9] ml-1">{t('fields.name')}</label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
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
                                        value={phone}
                                        onChange={(e) => { setPhone(e.target.value); setPhoneError(''); }}
                                        placeholder={t('placeholders.phone')}
                                        className={`w-full bg-[#1a212e] border ${phoneError ? 'border-red-500' : 'border-[#282e39]'} rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all`}
                                    />
                                    {phoneError && <p className="text-xs text-red-500 mt-1 ml-1">{phoneError}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-[#9da6b9] ml-1">{t('fields.service')}</label>
                                    <select
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
                                        className="w-full bg-[#1a212e] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="hotel">{t('services.hotel')}</option>
                                        <option value="corporate">{t('services.corporate')}</option>
                                        <option value="private">{t('services.private')}</option>
                                        <option value="furniture">{t('services.furniture')}</option>
                                        <option value="other">{t('services.other')}</option>
                                    </select>
                                </div>
                            </div>

                            {submitError && (
                                <p className="text-xs text-red-500 text-center">{submitError}</p>
                            )}

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
