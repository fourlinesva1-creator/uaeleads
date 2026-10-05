/**
 * Calculator leads: quote reference, lead score, the payload sent to /api/capture-lead
 * and the WhatsApp message. Pure functions, no React. Spec: kb/tent-cost-calculator/04-lead-capture.md
 */

import { RATES_UPDATED } from '../../data/calculator/rates';
import type { CalculatorSetup, Estimate } from './engine';

export type LeadChannel = 'whatsapp' | 'quote' | 'callback' | 'site-visit';
export type LeadTier = 'hot' | 'warm' | 'cold';

export const WHATSAPP_NUMBER = '971501826969';

/** UAE mobile or landline, same rule as the other site forms. */
export const UAE_PHONE = /^(?:\+971|00971|0)?(?:50|51|52|54|55|56|58|2|3|4|6|7|9)\d{7}$/;

export function isUaePhone(phone: string): boolean {
    return UAE_PHONE.test(phone.replace(/[\s-]/g, ''));
}

// No 0/O/1/I, so a reference read out over the phone can't be misheard.
const REF_ALPHABET = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';

/** e.g. TN-C-261006-4F7Q (date in UAE time + 4 random characters). */
export function makeQuoteRef(now = new Date(), random: () => number = Math.random): string {
    const uae = new Date(now.getTime() + 4 * 60 * 60 * 1000);
    const date = uae.toISOString().slice(2, 10).replace(/-/g, '');
    let tail = '';
    for (let i = 0; i < 4; i++) tail += REF_ALPHABET[Math.floor(random() * REF_ALPHABET.length)];
    return `TN-C-${date}-${tail}`;
}

export const QUOTE_REF = /^TN-C-\d{6}-[2-9A-HJ-NP-Z]{4}$/;

export interface ScoreInput {
    mode: CalculatorSetup['mode'];
    months: number;
    estimateLow: number;
    /** ISO date (yyyy-mm-dd), if given. */
    eventDate?: string;
    company?: string;
    email?: string;
}

/** Sales priority. See the table in 04-lead-capture.md. */
export function leadScore(input: ScoreInput, now = new Date()): { score: number; tier: LeadTier } {
    let score = 0;
    if (input.estimateLow >= 50000) score += 3;
    else if (input.estimateLow >= 15000) score += 2;
    else if (input.estimateLow >= 5000) score += 1;

    if (input.eventDate) {
        const days = (new Date(`${input.eventDate}T00:00:00Z`).getTime() - now.getTime()) / 86400000;
        if (days >= -1 && days <= 30) score += 2;
    }
    if (input.mode === 'longterm' && input.months >= 3) score += 2;
    if (input.company?.trim()) score += 1;
    if (input.email?.trim()) score += 1;

    return { score, tier: score >= 5 ? 'hot' : score >= 3 ? 'warm' : 'cold' };
}

export interface Contact {
    name?: string;
    phone?: string;
    email?: string;
    company?: string;
    eventDate?: string;
    message?: string;
}

export interface Attribution {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    referrer?: string;
}

/** Reads UTM tags and the referrer in the browser. */
export function readAttribution(): Attribution {
    if (typeof window === 'undefined') return {};
    const q = new URLSearchParams(window.location.search);
    const out: Attribution = {};
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign'] as const) {
        const v = q.get(k);
        if (v) out[k] = v.slice(0, 100);
    }
    if (document.referrer && !document.referrer.startsWith(window.location.origin)) out.referrer = document.referrer.slice(0, 300);
    return out;
}

/**
 * Flat payload for the Google Sheet: one column per key, lists joined into strings.
 * The sheet must reopen the exact setup from `shareUrl`.
 */
export function buildLeadPayload(args: {
    setup: CalculatorSetup;
    estimate: Estimate;
    channel: LeadChannel;
    step: 'partial' | 'complete';
    quoteRef: string;
    locale: string;
    shareUrl: string;
    contact?: Contact;
    attribution?: Attribution;
}): Record<string, string | number | boolean> {
    const { setup: s, estimate: e, contact = {}, attribution = {} } = args;
    const isEvent = s.mode === 'event';
    const { score, tier } = leadScore({
        mode: s.mode,
        months: s.months,
        estimateLow: e.low,
        eventDate: contact.eventDate,
        company: contact.company,
        email: contact.email,
    });

    const furniture = [
        s.majlisSeats && isEvent ? `${s.majlisSeats} majlis seats` : '',
        s.chairs ? `${s.chairs} chairs` : '',
        s.tables ? `${s.tables} tables` : '',
        s.beds && !isEvent ? `${s.beds} beds` : '',
        s.coolingUnits && !isEvent ? `${s.coolingUnits} cooling units` : '',
    ].filter(Boolean);

    const payload: Record<string, string | number | boolean> = {
        formType: 'calculator',
        formStep: args.step,
        channel: args.channel,
        quoteRef: args.quoteRef,
        locale: args.locale,
        name: contact.name?.trim() ?? '',
        phone: contact.phone?.trim() ?? '',
        email: contact.email?.trim() ?? '',
        company: contact.company?.trim() ?? '',
        message: contact.message?.trim() ?? '',
        mode: s.mode,
        useCase: s.useCase,
        emirate: s.emirate,
        eventDate: contact.eventDate ?? '',
        duration: isEvent ? `${s.days} days` : `${s.months} months`,
        guests: s.guests,
        seating: s.seating,
        sizeM2: e.sqm,
        dimensions: `${s.tents > 1 ? `${s.tents} × ` : ''}${s.width}x${s.length}`,
        package: isEvent ? s.package : s.tier,
        sides: isEvent ? s.sides : 4,
        ac: isEvent ? s.ac : s.tier !== 'tentOnly',
        acTons: e.acTons,
        generatorKva: s.generatorKva,
        furniture: furniture.join(', '),
        included: e.included.join(', '),
        estimateLow: e.low,
        estimateHigh: e.high,
        vat: e.vatLow,
        confidence: e.worstConfidence,
        shareUrl: args.shareUrl,
        ratesVersion: RATES_UPDATED,
        leadScore: score,
        leadTier: tier,
    };
    for (const [k, v] of Object.entries(attribution)) if (v) payload[k] = v;
    return payload;
}

/** Joins non-empty lines and encodes the whole message once for a wa.me link. */
export function whatsappUrl(lines: (string | false | null | undefined)[], number = WHATSAPP_NUMBER): string {
    const text = lines.filter(Boolean).join('\n');
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/** Fire-and-forget POST to the lead sink. Never throws, never blocks the visitor. */
export function sendLead(payload: Record<string, unknown>): void {
    try {
        fetch('/api/capture-lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
        }).catch(() => {});
    } catch {
        // ignore
    }
}
