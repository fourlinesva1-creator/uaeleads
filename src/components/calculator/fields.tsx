'use client';

import { useEffect, useId, useState, type ReactNode } from 'react';
import { Minus, Plus } from 'lucide-react';
import { useTranslations } from 'next-intl';

const box = 'bg-[#101622] border border-[#282e39] rounded-xl text-white focus:border-[#D4AF37] outline-none transition-colors';

export function Section({ step, title, children }: { step: number; title: string; children: ReactNode }) {
    return (
        <section className="border-t border-[#282e39] pt-6 first:border-t-0 first:pt-0">
            <h3 className="flex items-center gap-3 text-lg font-display text-white mb-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-bold">
                    {step}
                </span>
                {title}
            </h3>
            <div className="space-y-5">{children}</div>
        </section>
    );
}

export function Hint({ children }: { children: ReactNode }) {
    return <p className="text-xs text-[#9da6b9] leading-relaxed">{children}</p>;
}

interface StepperProps {
    label: string;
    value: number;
    onChange: (n: number) => void;
    min: number;
    max: number;
    step?: number;
    hint?: ReactNode;
}

/** Number input with -/+ buttons. Typing is free; the value is clamped on blur. */
export function Stepper({ label, value, onChange, min, max, step = 1, hint }: StepperProps) {
    const t = useTranslations('calculator.fields');
    const id = useId();
    const [text, setText] = useState(String(value));
    useEffect(() => setText(String(value)), [value]);

    const commit = (n: number) => {
        const clamped = Math.min(max, Math.max(min, Math.round(n / step) * step));
        onChange(clamped);
        setText(String(clamped));
    };

    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-[#9da6b9]">
                {label}
            </label>
            <div className="flex items-stretch gap-2">
                <button
                    type="button"
                    onClick={() => commit(value - step)}
                    disabled={value <= min}
                    aria-label={t('decrease', { label })}
                    className={`${box} w-11 shrink-0 flex items-center justify-center hover:border-[#D4AF37] disabled:opacity-40 disabled:hover:border-[#282e39]`}
                >
                    <Minus className="h-4 w-4" aria-hidden />
                </button>
                <input
                    id={id}
                    type="number"
                    inputMode="decimal"
                    min={min}
                    max={max}
                    step={step}
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        const n = Number(e.target.value);
                        if (e.target.value !== '' && Number.isFinite(n) && n >= min && n <= max) onChange(n);
                    }}
                    onBlur={() => commit(text === '' || !Number.isFinite(Number(text)) ? min : Number(text))}
                    className={`${box} w-full min-w-0 px-3 py-2.5 text-center tabular-nums`}
                />
                <button
                    type="button"
                    onClick={() => commit(value + step)}
                    disabled={value >= max}
                    aria-label={t('increase', { label })}
                    className={`${box} w-11 shrink-0 flex items-center justify-center hover:border-[#D4AF37] disabled:opacity-40 disabled:hover:border-[#282e39]`}
                >
                    <Plus className="h-4 w-4" aria-hidden />
                </button>
            </div>
            {hint && <Hint>{hint}</Hint>}
        </div>
    );
}

export interface Choice<T extends string | number> {
    value: T;
    label: string;
    hint?: string;
}

/** Radio group drawn as buttons. Arrow keys move between options (native radio behaviour). */
export function Segmented<T extends string | number>({
    legend,
    options,
    value,
    onChange,
    columns = 2,
}: {
    legend: string;
    options: Choice<T>[];
    value: T;
    onChange: (v: T) => void;
    columns?: 2 | 3 | 4 | 5;
}) {
    const name = useId();
    const grid = { 2: 'grid-cols-2', 3: 'grid-cols-1 sm:grid-cols-3', 4: 'grid-cols-2 sm:grid-cols-4', 5: 'grid-cols-5' }[columns];
    return (
        <fieldset>
            <legend className="mb-2 text-sm font-medium text-[#9da6b9]">{legend}</legend>
            <div className={`grid ${grid} gap-2`}>
                {options.map((o) => {
                    const checked = o.value === value;
                    return (
                        <label
                            key={String(o.value)}
                            className={`relative cursor-pointer rounded-xl border px-3 py-2.5 text-start transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#D4AF37]/50 ${
                                checked
                                    ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-white'
                                    : 'border-[#282e39] bg-[#101622] text-[#9da6b9] hover:border-[#3b4354]'
                            }`}
                        >
                            <input
                                type="radio"
                                name={name}
                                value={String(o.value)}
                                checked={checked}
                                onChange={() => onChange(o.value)}
                                className="sr-only"
                            />
                            <span className="block text-sm font-semibold">{o.label}</span>
                            {o.hint && <span className="mt-0.5 block text-xs text-[#9da6b9]">{o.hint}</span>}
                        </label>
                    );
                })}
            </div>
        </fieldset>
    );
}

export function Toggle({
    label,
    checked,
    onChange,
    hint,
}: {
    label: string;
    checked: boolean;
    onChange: (v: boolean) => void;
    hint?: ReactNode;
}) {
    const id = useId();
    return (
        <div className="flex items-start justify-between gap-4">
            <div>
                <label htmlFor={id} className="block text-sm font-medium text-white cursor-pointer">
                    {label}
                </label>
                {hint && <div className="mt-0.5">{typeof hint === 'string' ? <Hint>{hint}</Hint> : hint}</div>}
            </div>
            <button
                id={id}
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/50 ${
                    checked ? 'bg-[#D4AF37]' : 'bg-[#3b4354]'
                }`}
            >
                <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
                        checked ? 'start-[1.375rem]' : 'start-0.5'
                    }`}
                />
            </button>
        </div>
    );
}

export function Select<T extends string | number>({
    label,
    value,
    onChange,
    options,
    hint,
}: {
    label: string;
    value: T;
    onChange: (v: T) => void;
    options: Choice<T>[];
    hint?: ReactNode;
}) {
    const id = useId();
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-[#9da6b9]">
                {label}
            </label>
            <select
                id={id}
                value={String(value)}
                onChange={(e) => {
                    const picked = options.find((o) => String(o.value) === e.target.value);
                    if (picked) onChange(picked.value);
                }}
                className={`${box} w-full px-3 py-2.5`}
            >
                {options.map((o) => (
                    <option key={String(o.value)} value={String(o.value)}>
                        {o.label}
                    </option>
                ))}
            </select>
            {hint && <Hint>{hint}</Hint>}
        </div>
    );
}
