'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from '@/i18n/navigation';
import { Send } from 'lucide-react';
import { useRecaptcha } from '@/hooks/useRecaptcha';

const uaePhoneRegex = /^(?:\+971|00971|0)?(?:50|51|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/;
const WHATSAPP_NUMBER = '971501826969';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string().regex(uaePhoneRegex, 'Please enter a valid UAE phone number'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const honeypotRef = useRef<HTMLInputElement>(null);
    const { executeRecaptcha } = useRecaptcha();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setSubmitError('');

        if (honeypotRef.current?.value) {
            router.push('/thank-you');
            return;
        }

        setIsSubmitting(true);

        try {
            const token = await executeRecaptcha('submit_contact');
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
            `*New Message from Tent Now Website*%0A` +
            `--------------------------------%0A` +
            `*Name:* ${data.name}%0A` +
            `*Phone:* ${data.phone}%0A` +
            `*Message:* ${data.message}%0A` +
            `--------------------------------`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

        setTimeout(() => {
            setIsSubmitting(false);
            window.open(whatsappUrl, '_blank');
            router.push('/thank-you');
        }, 800);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-[#9da6b9]">Full Name</label>
                    <input
                        {...register('name')}
                        type="text"
                        placeholder="E.g. John Doe"
                        className={`w-full bg-[#101622] border ${errors.name ? 'border-red-500' : 'border-[#282e39]'} rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-colors`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-[#9da6b9]">Phone Number</label>
                    <input
                        {...register('phone')}
                        type="tel"
                        placeholder="050 123 4567"
                        className={`w-full bg-[#101622] border ${errors.phone ? 'border-red-500' : 'border-[#282e39]'} rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-colors`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm text-[#9da6b9]">Message</label>
                <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="How can we help you?"
                    className={`w-full bg-[#101622] border ${errors.message ? 'border-red-500' : 'border-[#282e39]'} rounded-xl p-4 text-white focus:border-[#D4AF37] outline-none transition-colors resize-none`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            {submitError && (
                <p className="text-xs text-red-500 mt-1 text-center">{submitError}</p>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold-fill w-full py-4 rounded-xl font-display text-lg flex items-center justify-center gap-3 disabled:opacity-70"
            >
                {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#101622] border-t-transparent rounded-full animate-spin" />
                ) : (
                    <>Send Message <Send size={18} /></>
                )}
            </button>
        </form>
    );
}
