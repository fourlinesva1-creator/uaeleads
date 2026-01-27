'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useModal } from './ModalProvider';
import { X } from 'lucide-react';
import { useRouter } from '@/i18n/navigation';

export default function CallbackModal() {
    const t = useTranslations('callback');
    const common = useTranslations('common');
    const { isCallbackOpen, closeCallback } = useModal();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        purpose: '',
        time: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    if (!isCallbackOpen) return null;

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = t('form.validation.name');

        // UAE Phone validation (simple regex: starting with 05 or +971 5)
        const uaePhoneRegex = /^(?:\+971|00971|0)?(?:50|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/;
        if (!formData.phone) {
            newErrors.phone = t('form.validation.phone');
        } else if (!uaePhoneRegex.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = t('form.validation.phone');
        }

        if (!formData.location) newErrors.location = t('form.validation.location');
        if (!formData.purpose) newErrors.purpose = t('form.validation.purpose');

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            closeCallback();
            router.push('/thank-you');
            setFormData({ name: '', phone: '', location: '', purpose: '', time: '' }); // Reset form after successful submission and redirect
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
                onClick={closeCallback}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-[#1a212e] border border-[#282e39] rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                <div className="p-6 sm:p-8">
                    {/* Close Button */}
                    <button
                        onClick={closeCallback}
                        className="absolute top-4 right-4 text-[#9da6b9] hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {isSuccess ? (
                        <div className="py-12 text-center">
                            <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-display text-white mb-2">{common('success')}</h3>
                            <p className="text-[#9da6b9]">{t('form.success')}</p>
                        </div>
                    ) : (
                        <>
                            <div className="mb-8">
                                <h3 className="text-2xl font-display text-white mb-2">{t('title')}</h3>
                                <p className="text-[#9da6b9]">{t('subtitle')}</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Full Name */}
                                <div>
                                    <label className="block text-sm font-medium text-[#9da6b9] mb-1.5">
                                        {t('form.name')} <span className="text-[#D4AF37]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`w-full bg-[#101622] border ${errors.name ? 'border-red-500' : 'border-[#282e39]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                        placeholder="E.g. Ahmed Al-Maktoum"
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-medium text-[#9da6b9] mb-1.5">
                                        {t('form.phone')} <span className="text-[#D4AF37]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className={`w-full bg-[#101622] border ${errors.phone ? 'border-red-500' : 'border-[#282e39]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                        placeholder="050 123 4567"
                                    />
                                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                                </div>

                                {/* Location & Purpose Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#9da6b9] mb-1.5">
                                            {t('form.location')} <span className="text-[#D4AF37]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.location}
                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                            className={`w-full bg-[#101622] border ${errors.location ? 'border-red-500' : 'border-[#282e39]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                            placeholder="E.g. Dubai"
                                        />
                                        {errors.location && <p className="mt-1 text-xs text-red-500">{errors.location}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#9da6b9] mb-1.5">
                                            {t('form.purpose')} <span className="text-[#D4AF37]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.purpose}
                                            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                                            className={`w-full bg-[#101622] border ${errors.purpose ? 'border-red-500' : 'border-[#282e39]'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors`}
                                            placeholder="E.g. Majlis Setup"
                                        />
                                        {errors.purpose && <p className="mt-1 text-xs text-red-500">{errors.purpose}</p>}
                                    </div>
                                </div>

                                {/* Time for Call */}
                                <div>
                                    <label className="block text-sm font-medium text-[#9da6b9] mb-1.5">
                                        {t('form.time')}
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.time}
                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                        className="w-full bg-[#101622] border border-[#282e39] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                                        placeholder="E.g. Monday afternoon"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-gold-fill py-4 rounded-xl font-display text-lg flex items-center justify-center gap-3 relative overflow-hidden group mt-6"
                                >
                                    <span className={`transition-opacity ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                        {t('form.submit')}
                                    </span>
                                    {isSubmitting && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-2 border-[#101622] border-t-transparent rounded-full animate-spin" />
                                        </div>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
