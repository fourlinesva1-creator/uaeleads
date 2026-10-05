'use client';

import { useId, useRef, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2, MessageCircle, Printer } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useRecaptcha } from '@/hooks/useRecaptcha';
import { isUaePhone } from '@/lib/calculator/lead';
import type { Mode } from '@/lib/calculator/engine';

export interface QuoteLeadValues {
    name: string;
    phone: string;
    email: string;
    company: string;
    eventDate: string;
    message: string;
}

interface Done {
    ref: string;
    printUrl: string;
    whatsappUrl: string;
}

interface Props {
    mode: Mode;
    /** Fired once, as soon as a name and a valid phone are entered. */
    onPartial: (v: QuoteLeadValues) => void;
    /** Sends the complete lead and returns where the visitor can go next. */
    onComplete: (v: QuoteLeadValues) => Done;
    onCancel: () => void;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const input =
    'w-full bg-[#101622] border border-[#282e39] rounded-xl px-3 py-2.5 text-sm text-white focus:border-[#D4AF37] outline-none transition-colors';

export default function QuoteLeadForm({ mode, onPartial, onComplete, onCancel }: Props) {
    const t = useTranslations('calculator.lead');
    const id = useId();
    const { executeRecaptcha } = useRecaptcha();
    const honeypot = useRef<HTMLInputElement>(null);
    const partialSent = useRef(false);
    const [v, setV] = useState<QuoteLeadValues>({ name: '', phone: '', email: '', company: '', eventDate: '', message: '' });
    const [errors, setErrors] = useState<Partial<Record<keyof QuoteLeadValues, string>>>({});
    const [submitError, setSubmitError] = useState('');
    const [sending, setSending] = useState(false);
    const [done, setDone] = useState<Done | null>(null);

    const set = (k: keyof QuoteLeadValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setV((prev) => ({ ...prev, [k]: e.target.value }));

    const maybePartial = () => {
        if (partialSent.current || honeypot.current?.value) return;
        if (v.name.trim().length >= 2 && isUaePhone(v.phone)) {
            partialSent.current = true;
            onPartial(v);
        }
    };

    const validate = () => {
        const next: typeof errors = {};
        if (v.name.trim().length < 2) next.name = t('errorName');
        if (!isUaePhone(v.phone)) next.phone = t('errorPhone');
        if (v.email && !EMAIL.test(v.email.trim())) next.email = t('errorEmail');
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError('');
        if (!validate()) return;

        // Bots fill the hidden field: pretend it worked, send nothing.
        if (honeypot.current?.value) {
            setDone({ ref: '—', printUrl: '', whatsappUrl: '' });
            return;
        }

        // Capture first, before reCAPTCHA can fail.
        const result = onComplete(v);
        setSending(true);
        try {
            const token = await executeRecaptcha('submit_calculator');
            const res = await fetch('/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token }),
            });
            if (res.status === 429) {
                setSubmitError(t('rateLimited'));
                setSending(false);
                return;
            }
        } catch {
            // reCAPTCHA not loaded or offline: the lead is already captured, carry on.
        }
        setSending(false);
        setDone(result);
    };

    if (done) {
        return (
            <div id="calc-quote-form" className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 space-y-3" role="status">
                <p className="flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden />
                    {t('successTitle')}
                </p>
                <p className="text-sm text-[#e5e7eb]">{t('successBody', { ref: done.ref })}</p>
                {done.printUrl && (
                    <div className="flex flex-col gap-2">
                        <a href={done.printUrl} target="_blank" rel="noopener" className="btn-outline normal-case tracking-normal py-2.5 text-sm">
                            <Printer className="h-4 w-4" aria-hidden />
                            {t('openPrint')}
                        </a>
                        <a href={done.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline normal-case tracking-normal py-2.5 text-sm">
                            <MessageCircle className="h-4 w-4" aria-hidden />
                            {t('continueWhatsapp')}
                        </a>
                    </div>
                )}
            </div>
        );
    }

    const field = (k: keyof QuoteLeadValues, label: string, el: ReactNode) => (
        <div className="space-y-1">
            <label htmlFor={`${id}-${k}`} className="block text-xs font-medium text-[#9da6b9]">
                {label}
            </label>
            {el}
            {errors[k] && (
                <p id={`${id}-${k}-err`} className="text-xs text-red-400">
                    {errors[k]}
                </p>
            )}
        </div>
    );
    const aria = (k: keyof QuoteLeadValues) => ({
        id: `${id}-${k}`,
        'aria-invalid': errors[k] ? true : undefined,
        'aria-describedby': errors[k] ? `${id}-${k}-err` : undefined,
    });

    return (
        <form id="calc-quote-form" onSubmit={onSubmit} noValidate className="rounded-xl border border-[#282e39] bg-[#101622]/60 p-4 space-y-3">
            <div>
                <p className="font-semibold text-white text-sm">{t('formTitle')}</p>
                <p className="text-xs text-[#9da6b9] mt-1">{t('formIntro')}</p>
            </div>
            <input
                ref={honeypot}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}
            />
            {field('name', `${t('name')} *`, <input {...aria('name')} className={input} value={v.name} onChange={set('name')} onBlur={maybePartial} autoComplete="name" required />)}
            {field(
                'phone',
                `${t('phone')} *`,
                <input
                    {...aria('phone')}
                    className={input}
                    value={v.phone}
                    onChange={set('phone')}
                    onBlur={maybePartial}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="050 123 4567"
                    dir="ltr"
                    required
                />,
            )}
            {field('email', t('email'), <input {...aria('email')} className={input} value={v.email} onChange={set('email')} type="email" autoComplete="email" dir="ltr" />)}
            {field('company', t('company'), <input {...aria('company')} className={input} value={v.company} onChange={set('company')} autoComplete="organization" />)}
            {mode === 'event' &&
                field('eventDate', t('eventDate'), <input {...aria('eventDate')} className={input} value={v.eventDate} onChange={set('eventDate')} type="date" />)}
            {field('message', t('message'), <textarea {...aria('message')} className={input} value={v.message} onChange={set('message')} rows={2} maxLength={1000} />)}
            {submitError && <p className="text-xs text-red-400">{submitError}</p>}
            <div className="flex gap-2">
                <button type="submit" disabled={sending} className="btn-gold flex-1 py-2.5 text-xs disabled:opacity-60">
                    {sending ? t('sending') : t('submit')}
                </button>
                <button type="button" onClick={onCancel} className="btn-outline normal-case tracking-normal py-2.5 px-4 text-xs">
                    {t('cancel')}
                </button>
            </div>
            <p className="text-[11px] text-[#6b7280]">
                {t('consent')}{' '}
                <Link href="/privacy" className="underline hover:text-[#9da6b9]">
                    {t('privacy')}
                </Link>
            </p>
        </form>
    );
}
