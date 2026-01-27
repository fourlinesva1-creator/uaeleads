'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, ChevronLeft, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';

// UAE Phone Validation Regex
const uaePhoneRegex = /^(?:\+971|00971|0)?(?:50|51|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/;

const quoteSchema = z.object({
    name: z.string().min(2, 'Name is too short'),
    company: z.string().optional(),
    phone: z.string().regex(uaePhoneRegex, 'Please enter a valid UAE phone number'),
    email: z.string().email('Please enter a valid email'),
    serviceType: z.enum(['corporate', 'private', 'hotel', 'staff', 'suhoor', 'other']),
    locationStatus: z.enum(['yes', 'no']),
    guests: z.enum(['under50', '50-150', '150-500', '500-1000', '1000plus']),
    date: z.string().optional(),
    message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
    const t = useTranslations('quote');
    const tf = useTranslations('quote.form');
    const ts = useTranslations('quickQuote.services'); // This is no longer used, but keeping it as per instruction to not make unrelated edits.
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        trigger,
        watch,
        formState: { errors },
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            serviceType: 'corporate',
            locationStatus: 'yes',
            guests: '50-150',
        },
    });

    const nextStep = async () => {
        let fieldsToValidate: (keyof QuoteFormData)[] = [];
        if (step === 1) fieldsToValidate = ['name', 'phone', 'email'];
        if (step === 2) fieldsToValidate = ['serviceType', 'locationStatus', 'guests'];

        const isValid = await trigger(fieldsToValidate);
        if (isValid) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    const onSubmit = async (data: QuoteFormData) => {
        setIsSubmitting(true);

        // Format the WhatsApp message
        const waMessage = `*New Quote Request from RMT UAE Website*%0A` +
            `--------------------------------%0A` +
            `*Name:* ${data.name}%0A` +
            `*Company:* ${data.company || 'N/A'}%0A` +
            `*Phone:* ${data.phone}%0A` +
            `*Email:* ${data.email}%0A` +
            `*Service:* ${data.serviceType}%0A` +
            `*Guest Count:* ${data.guests}%0A` +
            `*Location Confirmed:* ${data.locationStatus}%0A` +
            `*Date:* ${data.date || 'N/A'}%0A` +
            `*Details:* ${data.message || 'N/A'}%0A` +
            `--------------------------------`;

        const whatsappUrl = `https://wa.me/971555101069?text=${waMessage}`;

        // Small delay to show loading state
        setTimeout(() => {
            setIsSubmitting(false);
            // Redirect to WhatsApp
            window.open(whatsappUrl, '_blank');
            // Also redirect to thank you page on our site
            router.push('/thank-you');
        }, 1000);
    };

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
                <div className="flex justify-between mb-4">
                    {[1, 2, 3].map((s) => (
                        <div
                            key={s}
                            className={`flex items-center gap-2 ${step >= s ? 'text-gold' : 'text-[#4b5563]'}`}
                        >
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${step >= s ? 'border-gold bg-gold/10' : 'border-[#282e39]'
                                }`}>
                                {s}
                            </div>
                            <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">
                                {t(`steps.${s === 1 ? 'event' : s === 2 ? 'requirements' : 'contact'}`)}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="h-1 bg-[#1a212e] rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gold transition-all duration-500"
                        style={{ width: `${((step - 1) / 2) * 100}%` }}
                    />
                </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#1a212e] border border-[#282e39] rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden group">
                {/* Subtle background glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/5 blur-[80px] group-hover:bg-gold/10 transition-colors" />

                {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-2xl font-display text-white mb-8">{tf('headline')}</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('name')}</label>
                                <input
                                    {...register('name')}
                                    placeholder="Ahmed Ali"
                                    className={`w-full bg-[#101622] border ${errors.name ? 'border-red-500' : 'border-[#282e39]'} rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all`}
                                />
                                {errors.name && <p className="text-xs text-red-500 mt-1 ml-1">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('company')}</label>
                                <input
                                    {...register('company')}
                                    placeholder="Company Name"
                                    className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all"
                                />
                                <p className="text-[10px] text-[#4b5563] ml-1 italic">{tf('companyHelper')}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('phone')}</label>
                                <input
                                    {...register('phone')}
                                    placeholder="050 123 4567"
                                    className={`w-full bg-[#101622] border ${errors.phone ? 'border-red-500' : 'border-[#282e39]'} rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all`}
                                />
                                {errors.phone && <p className="text-xs text-red-500 mt-1 ml-1">{errors.phone.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('email')}</label>
                                <input
                                    {...register('email')}
                                    placeholder="example@mail.com"
                                    className={`w-full bg-[#101622] border ${errors.email ? 'border-red-500' : 'border-[#282e39]'} rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all`}
                                />
                                {errors.email && <p className="text-xs text-red-500 mt-1 ml-1">{errors.email.message}</p>}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={nextStep}
                            className="btn-gold-fill w-full py-5 rounded-2xl font-display text-lg flex items-center justify-center gap-3 group mt-8"
                        >
                            {tf('next')}
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                        <h2 className="text-2xl font-display text-white mb-8">{t('steps.requirements')}</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('eventType')}</label>
                                <select
                                    {...register('serviceType')}
                                    className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option value="corporate">{tf('eventTypeOptions.corporate')}</option>
                                    <option value="private">{tf('eventTypeOptions.private')}</option>
                                    <option value="hotel">{tf('eventTypeOptions.hotel')}</option>
                                    <option value="staff">{tf('eventTypeOptions.staff')}</option>
                                    <option value="suhoor">{tf('eventTypeOptions.suhoor')}</option>
                                    <option value="other">{tf('eventTypeOptions.other')}</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('guestCount')}</label>
                                <select
                                    {...register('guests')}
                                    className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option value="under50">{tf('guestOptions.under50')}</option>
                                    <option value="50-150">{tf('guestOptions.50-150')}</option>
                                    <option value="150-500">{tf('guestOptions.150-500')}</option>
                                    <option value="500-1000">{tf('guestOptions.500-1000')}</option>
                                    <option value="1000plus">{tf('guestOptions.1000plus')}</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('eventDate')}</label>
                                <input
                                    {...register('date')}
                                    type="date"
                                    className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all"
                                />
                                <p className="text-[10px] text-[#4b5563] ml-1 italic">{tf('dateHelper')}</p>
                            </div>
                            <div className="space-y-4">
                                <label className="text-sm font-medium text-[#9da6b9] ml-1 block">{tf('locationStatus')}</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="radio" value="yes" {...register('locationStatus')} className="sr-only peer" />
                                        <div className="w-5 h-5 rounded-full border-2 border-[#282e39] peer-checked:border-gold peer-checked:bg-gold/20 flex items-center justify-center transition-all">
                                            <div className="w-2.5 h-2.5 rounded-full bg-gold scale-0 peer-checked:scale-100 transition-transform" />
                                        </div>
                                        <span className="text-white text-sm group-hover:text-gold transition-colors">{tf('locationOptions.yes')}</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input type="radio" value="no" {...register('locationStatus')} className="sr-only peer" />
                                        <div className="w-5 h-5 rounded-full border-2 border-[#282e39] peer-checked:border-gold peer-checked:bg-gold/20 flex items-center justify-center transition-all">
                                            <div className="w-2.5 h-2.5 rounded-full bg-gold scale-0 peer-checked:scale-100 transition-transform" />
                                        </div>
                                        <span className="text-white text-sm group-hover:text-gold transition-colors">{tf('locationOptions.no')}</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="btn-secondary flex-1 py-5 rounded-2xl font-display text-lg flex items-center justify-center gap-3"
                            >
                                <ChevronLeft size={20} />
                                {tf('back')}
                            </button>
                            <button
                                type="button"
                                onClick={nextStep}
                                className="btn-gold-fill flex-[2] py-5 rounded-2xl font-display text-lg flex items-center justify-center gap-3 group"
                            >
                                {tf('next')}
                                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6 animate-fade-in">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                                <MessageSquare className="text-gold" size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-display text-white">{t('steps.addons')}</h2>
                                <p className="text-sm text-[#9da6b9]">Almost there! Add any specific requirements.</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#9da6b9] ml-1">{tf('message')}</label>
                            <textarea
                                {...register('message')}
                                placeholder={tf('messageHelper')}
                                rows={5}
                                className="w-full bg-[#101622] border border-[#282e39] rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-all resize-none"
                            />
                        </div>

                        <div className="flex gap-4 mt-8">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="btn-secondary flex-1 py-5 rounded-2xl font-display text-lg flex items-center justify-center gap-3"
                            >
                                <ChevronLeft size={20} />
                                {tf('back')}
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-gold-fill flex-[2] py-5 rounded-2xl font-display text-lg flex items-center justify-center gap-3 group disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-bg-dark border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        {tf('submit')}
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="space-y-4 mt-8">
                            <p className="text-center text-[11px] text-[#4b5563] italic">
                                {tf('privacy')}
                            </p>

                            <div className="pt-6 border-t border-[#282e39] text-center">
                                <p className="text-sm text-[#9da6b9] mb-4">{tf('directCall')}</p>
                                <p className="text-xs text-[#4b5563] mb-6 px-4">{tf('directCallBody')}</p>
                                <a
                                    href="tel:+971555101069"
                                    className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-display text-lg"
                                >
                                    <MessageSquare size={20} />
                                    {tf('callBtn')}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
