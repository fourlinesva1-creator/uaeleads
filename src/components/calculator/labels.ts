/**
 * Text built from a setup + estimate, shared by the results panel, the printable quote and the
 * WhatsApp message. `t` is a translator scoped to the `calculator` namespace (client or server).
 */

import { SQM_PER_TON_BY_MONTH } from '@/data/calculator/rates';
import type { CalculatorSetup, Estimate, Line } from '@/lib/calculator/engine';
import { makeAed, numberFormat } from '@/lib/calculator/format';

export interface Translate {
    (key: string, values?: Record<string, string | number>): string;
    raw(key: string): unknown;
}

export function lineLabel(t: Translate, s: CalculatorSetup, l: Line, locale: string): string {
    const nf = numberFormat(locale, 1);
    switch (l.key) {
        case 'tent':
            return s.mode === 'event'
                ? t('lines.tentEvent', { sqm: nf.format(l.qty), days: s.days })
                : t('lines.tentLongterm', { sqm: nf.format(l.qty), months: nf.format(s.months) });
        case 'sides':
            return t('lines.sides', { count: l.qty });
        case 'generator':
            return t('lines.generator', { kva: s.generatorKva, qty: l.qty });
        case 'delivery':
            return t('lines.delivery');
        default:
            return t(`lines.${l.key}`, { qty: nf.format(l.qty) });
    }
}

export function assumptionsFor(t: Translate, s: CalculatorSetup, e: Estimate, locale: string): string[] {
    const nf = numberFormat(locale, 1);
    const monthNames = t.raw('months') as string[];
    const isEvent = s.mode === 'event';
    return [
        t('assumptions.ground'),
        isEvent ? t('assumptions.days', { days: s.days }) : t('assumptions.months', { months: nf.format(s.months) }),
        t('assumptions.location', { emirate: t(`emirates.${s.emirate}`) }),
        ...(e.acTons > 0
            ? [t('assumptions.ac', { perTon: SQM_PER_TON_BY_MONTH[s.month - 1], month: monthNames[s.month - 1] })]
            : []),
        ...(isEvent ? [] : [t('assumptions.longtermArea')]),
        t('assumptions.prices'),
    ];
}

export function sizeText(s: CalculatorSetup): string {
    return `${s.tents > 1 ? `${s.tents} × ` : ''}${s.width} × ${s.length}`;
}

export function durationText(t: Translate, s: CalculatorSetup, locale: string): string {
    return s.mode === 'event' ? t('wa.days', { days: s.days }) : t('wa.months', { months: numberFormat(locale, 1).format(s.months) });
}

/** One line for the callback modal and the sheet. */
export function summaryText(t: Translate, s: CalculatorSetup, e: Estimate, locale: string): string {
    const aed = makeAed(locale);
    return t('lead.summary', {
        useCase: t(`useCases.${s.useCase}`),
        size: `${sizeText(s)} m`,
        low: aed(e.low),
        high: aed(e.high),
    });
}

/** WhatsApp message lines, in the visitor's language. */
export function whatsappLines(
    t: Translate,
    s: CalculatorSetup,
    e: Estimate,
    locale: string,
    ref: string,
    shareUrl: string,
    name?: string,
): string[] {
    const aed = makeAed(locale);
    const nf = numberFormat(locale, 1);
    const isEvent = s.mode === 'event';
    const furniture = [
        isEvent && s.majlisSeats ? t('wa.majlis', { qty: s.majlisSeats }) : '',
        s.chairs ? t('wa.chairs', { qty: s.chairs }) : '',
        s.tables ? t('wa.tables', { qty: s.tables }) : '',
        !isEvent && s.beds ? t('wa.beds', { qty: s.beds }) : '',
        !isEvent && s.coolingUnits ? t('wa.coolingUnits', { qty: s.coolingUnits }) : '',
    ].filter(Boolean);

    return [
        t('wa.title', { ref }),
        name ? t('wa.name', { name }) : '',
        t('wa.use', {
            useCase: t(`useCases.${s.useCase}`),
            emirate: t(`emirates.${s.emirate}`),
            duration: durationText(t, s, locale),
        }),
        t('wa.tent', {
            dims: sizeText(s),
            sqm: nf.format(e.sqm),
            sides: isEvent ? t('fields.sidesValue', { count: s.sides }) : t('fields.sidesValue', { count: 4 }),
        }),
        t('wa.package', { pkg: isEvent ? t(`fields.${s.package}`) : t(`fields.${s.tier}`) }),
        e.acTons > 0 ? t('wa.ac', { tons: e.acTons }) : '',
        s.generatorKva ? t('wa.generator', { kva: s.generatorKva }) : '',
        furniture.length ? t('wa.furniture', { items: furniture.join(locale === 'ar' ? '، ' : ', ') }) : '',
        e.low > 0 ? t('wa.estimate', { low: aed(e.low), high: aed(e.high) }) : '',
        t('wa.setup', { url: shareUrl }),
    ].filter(Boolean);
}
