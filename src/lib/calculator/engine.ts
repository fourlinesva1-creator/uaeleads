/**
 * Tent cost calculator: pure pricing functions. No React, no DOM.
 * Spec: kb/tent-cost-calculator/03-pricing-engine.md
 */

import {
    BAY_LENGTH,
    DAYS_PER_MONTH,
    DELIVERY_FACTOR,
    EVENT_AC_PER_TON,
    EVENT_BASE_DAYS,
    EVENT_BASE_SIDES,
    EVENT_CHAIR,
    EVENT_DURATION,
    EVENT_MAJLIS_PER_GUEST,
    EVENT_MAX_DAYS,
    EVENT_SHADE_FACTOR,
    EVENT_SIDE_STEP,
    EVENT_TABLE,
    EVENT_TENT_CURVE,
    EXTRA_SPACE_SQM,
    GENERATOR_LONG_HIRE_DAYS,
    GENERATOR_PER_DAY,
    GENERATOR_SHORT_HIRE,
    INCLUSIONS,
    LONGTERM_BED,
    LONGTERM_CHAIR,
    LONGTERM_COOLING_UNIT,
    LONGTERM_CURVE,
    LONGTERM_MAX_MONTHS,
    LONGTERM_MIN_MONTHS,
    LONGTERM_TABLE,
    MAX_SIDE_M,
    MAX_TENTS,
    MIN_SIDE_M,
    RANGE_HIGH,
    ROUND_TO,
    SPACE_PER_GUEST,
    SQM_PER_TON_BY_MONTH,
    TENT_SPANS,
    USE_CASE_PRESETS,
    VAT_RATE,
    WALKWAY_FACTOR,
    type Confidence,
    type Emirate,
    type GeneratorKva,
    type LongTermTier,
    type RatePoint,
    type SeatingStyle,
    type UseCase,
} from '../../data/calculator/rates';

export type Mode = 'event' | 'longterm';
export type EventPackage = 'furnished' | 'shade';

export interface CalculatorSetup {
    mode: Mode;
    useCase: UseCase;
    emirate: Emirate;
    /** Size of ONE tent, in metres. */
    width: number;
    length: number;
    tents: number;
    guests: number;
    seating: SeatingStyle;
    /** Size-suggester extras (bars, buffet stations, a stage). */
    bars: number;
    buffets: number;
    stage: boolean;
    /** 1-12, drives AC sizing. */
    month: number;
    generatorKva: GeneratorKva;
    chairs: number;
    tables: number;
    // Event only
    days: number;
    package: EventPackage;
    sides: number;
    ac: boolean;
    majlisSeats: number;
    // Long-term only
    months: number;
    tier: LongTermTier;
    beds: number;
    coolingUnits: number;
}

export type LineKey =
    | 'tent'
    | 'sides'
    | 'ac'
    | 'majlis'
    | 'chairs'
    | 'tables'
    | 'generator'
    | 'delivery'
    | 'beds'
    | 'coolingUnits';

export interface Line {
    key: LineKey;
    /** Quantity shown next to the line (m², tons, chairs, days...). */
    qty: number;
    /** Before VAT; null = price on request. */
    amount: number | null;
    confidence: Confidence;
}

export interface Estimate {
    mode: Mode;
    lines: Line[];
    sqm: number;
    /** Exact sum of priced lines, before VAT and before the range is applied. */
    subtotal: number;
    worstConfidence: Exclude<Confidence, 'null'>;
    /** Both rounded to ROUND_TO, before VAT. Zero when nothing could be priced. */
    low: number;
    high: number;
    vatLow: number;
    vatHigh: number;
    totalLow: number;
    totalHigh: number;
    /** Lines priced on request (no basis for a number). */
    onRequest: LineKey[];
    perGuestLow: number | null;
    perDayLow: number | null;
    perSqmMonthLow: number | null;
    acTons: number;
    included: string[];
    excluded: string[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CONFIDENCE_ORDER: Confidence[] = ['verified', 'derived', 'estimated', 'null'];

export function worst(...levels: Confidence[]): Confidence {
    return levels.reduce((a, b) => (CONFIDENCE_ORDER.indexOf(b) > CONFIDENCE_ORDER.indexOf(a) ? b : a), 'verified');
}

export function clamp(n: number, min: number, max: number): number {
    if (!Number.isFinite(n)) return min;
    return Math.min(max, Math.max(min, n));
}

export function roundTo(n: number, step = ROUND_TO): number {
    return Math.round(n / step) * step;
}

/** Money to 2 decimals without float noise. */
function money(n: number): number {
    return Math.round(n * 100) / 100;
}

/**
 * Price per m² at `sqm` from a curve. Straight-line between points; flat beyond the ends.
 * Confidence: an exact point keeps its own; between points it's the worse of the two;
 * beyond the ends it's at best `estimated`.
 */
export function rateFromCurve(curve: RatePoint[], sqm: number): { rate: number; confidence: Confidence } {
    const first = curve[0];
    const last = curve[curve.length - 1];
    if (sqm <= first.sqm) {
        return { rate: first.rate, confidence: sqm === first.sqm ? first.confidence : worst(first.confidence, 'estimated') };
    }
    if (sqm >= last.sqm) {
        return { rate: last.rate, confidence: sqm === last.sqm ? last.confidence : worst(last.confidence, 'estimated') };
    }
    for (let i = 1; i < curve.length; i++) {
        const a = curve[i - 1];
        const b = curve[i];
        if (sqm === b.sqm) return { rate: b.rate, confidence: b.confidence };
        if (sqm < b.sqm) {
            const t = (sqm - a.sqm) / (b.sqm - a.sqm);
            return { rate: a.rate + t * (b.rate - a.rate), confidence: worst(a.confidence, b.confidence) };
        }
    }
    return { rate: last.rate, confidence: last.confidence };
}

/** Multiplier on the 2-day event price. 1-2 days = 1, then +15%/day to day 6, 1.6 at 7 days, 2.5 at 30. */
export function eventDurationFactor(days: number): { factor: number; confidence: Confidence } {
    const d = clamp(Math.ceil(days), 1, EVENT_MAX_DAYS);
    if (d <= EVENT_BASE_DAYS) return { factor: 1, confidence: 'verified' };
    const { extraDay, week, month, confidence } = EVENT_DURATION;
    if (d < 7) return { factor: 1 + extraDay * (d - EVENT_BASE_DAYS), confidence };
    return { factor: week + ((d - 7) / (30 - 7)) * (month - week), confidence };
}

/** Tons of AC for an area in a given month (1-12), rounded up to whole tons. */
export function acTons(sqm: number, month: number): number {
    if (sqm <= 0) return 0;
    const perTon = SQM_PER_TON_BY_MONTH[clamp(Math.round(month), 1, 12) - 1];
    return Math.ceil(sqm / perTon);
}

export interface SizeExtras {
    bars?: number;
    buffets?: number;
    stage?: boolean;
}

/** Floor area (m²) needed for a number of guests in a seating style. */
export function sqmFromGuests(guests: number, seating: SeatingStyle, extras: SizeExtras = {}): number {
    if (guests <= 0) return 0;
    const { sqm, walkways } = SPACE_PER_GUEST[seating];
    let area = guests * sqm;
    area += (extras.bars ?? 0) * EXTRA_SPACE_SQM.bar;
    area += (extras.buffets ?? 0) * EXTRA_SPACE_SQM.buffet;
    if (extras.stage) area += EXTRA_SPACE_SQM.stage;
    if (walkways) area *= WALKWAY_FACTOR;
    return Math.ceil(area);
}

/**
 * Nearest standard tent (span x length in 5 m bays) covering `sqm`.
 * Picks the least wasted area, keeping length at most 4x the span; ties go to the narrower tent.
 */
export function suggestTentSize(sqm: number): { width: number; length: number; sqm: number } {
    const need = Math.max(sqm, MIN_SIDE_M * MIN_SIDE_M);
    let best: { width: number; length: number; sqm: number } | null = null;
    for (const span of TENT_SPANS) {
        const bay = span < BAY_LENGTH ? span : BAY_LENGTH;
        const length = Math.max(span, Math.ceil(need / span / bay) * bay);
        if (length > span * 4 || length > MAX_SIDE_M) continue;
        const area = span * length;
        if (!best || area < best.sqm) best = { width: span, length, sqm: area };
    }
    if (best) return best;
    // Bigger than one 40 m span tent at 4:1, so go long on the widest span.
    const span = TENT_SPANS[TENT_SPANS.length - 1];
    const length = Math.min(MAX_SIDE_M, Math.ceil(need / span / BAY_LENGTH) * BAY_LENGTH);
    return { width: span, length, sqm: span * length };
}

export const DEFAULT_SETUP: CalculatorSetup = {
    mode: 'event',
    useCase: 'home-majlis',
    emirate: 'dubai',
    width: 8,
    length: 10,
    tents: 1,
    guests: 20,
    seating: 'majlis',
    bars: 0,
    buffets: 0,
    stage: false,
    month: 2, // Ramadan 2027 starts around 8 February
    generatorKva: 0,
    chairs: 0,
    tables: 0,
    days: 2,
    package: 'furnished',
    sides: 3,
    ac: true,
    majlisSeats: 20,
    months: 3,
    tier: 'tentOnly',
    beds: 0,
    coolingUnits: 0,
};

/** Furniture that matches a guest count: majlis seats, chairs + tables (8 per banquet table, 10 per dining table) or beds. */
export function furnitureForGuests(
    guests: number,
    seating: SeatingStyle,
): Pick<CalculatorSetup, 'majlisSeats' | 'chairs' | 'tables' | 'beds'> {
    const seated = seating === 'banquet' || seating === 'banquetDance' || seating === 'dining' ? guests : 0;
    return {
        majlisSeats: seating === 'majlis' ? guests : 0,
        chairs: seated,
        tables: seated ? Math.ceil(seated / (seating === 'dining' ? 10 : 8)) : 0,
        beds: seating === 'sleeping' ? guests : 0,
    };
}

/** Applies a use-case preset: mode, seating, guests, a suggested tent size and matching furniture. */
export function applyUseCase(prev: CalculatorSetup, useCase: UseCase): CalculatorSetup {
    const p = USE_CASE_PRESETS[useCase];
    const s = { ...prev, bars: 0, buffets: 0, stage: false };
    const sqm = useCase === 'storage' ? 1000 : sqmFromGuests(p.guests, p.seating, s);
    const size = suggestTentSize(sqm);
    return {
        ...s,
        ...furnitureForGuests(p.guests, p.seating),
        useCase,
        mode: p.mode,
        seating: p.seating,
        guests: p.guests,
        width: size.width,
        length: size.length,
        tents: 1,
        ac: p.ac,
        sides: p.mode === 'event' ? s.sides : 4,
        tier: p.tier ?? s.tier,
    };
}

/** Cleans any input (URL, form) into a setup the engine can trust. */
export function normalizeSetup(s: CalculatorSetup): CalculatorSetup {
    const int = (n: number, min: number, max: number) => Math.round(clamp(n, min, max));
    return {
        ...s,
        width: clamp(s.width, MIN_SIDE_M, MAX_SIDE_M),
        length: clamp(s.length, MIN_SIDE_M, MAX_SIDE_M),
        tents: int(s.tents, 1, MAX_TENTS),
        guests: int(s.guests, 0, 20000),
        bars: int(s.bars, 0, 20),
        buffets: int(s.buffets, 0, 20),
        stage: Boolean(s.stage),
        month: int(s.month, 1, 12),
        chairs: int(s.chairs, 0, 20000),
        tables: int(s.tables, 0, 5000),
        days: int(s.days, 1, EVENT_MAX_DAYS),
        sides: int(s.sides, 0, 4),
        majlisSeats: int(s.majlisSeats, 0, 5000),
        months: Math.round(clamp(s.months, LONGTERM_MIN_MONTHS, LONGTERM_MAX_MONTHS) * 2) / 2,
        beds: int(s.beds, 0, 20000),
        coolingUnits: int(s.coolingUnits, 0, 200),
    };
}

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

function generatorLine(kva: GeneratorKva, days: number): Line | null {
    if (!kva) return null;
    const { rate, confidence } = GENERATOR_PER_DAY[kva];
    const short = days < GENERATOR_LONG_HIRE_DAYS;
    const perDay = short ? rate * GENERATOR_SHORT_HIRE.rate : rate;
    return {
        key: 'generator',
        qty: days,
        amount: money(perDay * days),
        confidence: short ? worst(confidence, GENERATOR_SHORT_HIRE.confidence) : confidence,
    };
}

export function priceEvent(input: CalculatorSetup): Line[] {
    const s = normalizeSetup(input);
    const tentSqm = s.width * s.length;
    const sqm = tentSqm * s.tents;
    const duration = eventDurationFactor(s.days);
    const lines: Line[] = [];

    // Tent: rate depends on the size of one tent.
    const curve = rateFromCurve(EVENT_TENT_CURVE, tentSqm);
    let tentRate = curve.rate;
    let tentConf = worst(curve.confidence, duration.confidence);
    if (s.package === 'shade') {
        tentRate *= EVENT_SHADE_FACTOR.rate;
        tentConf = worst(tentConf, EVENT_SHADE_FACTOR.confidence);
    }
    const tent = tentRate * sqm * duration.factor;
    lines.push({ key: 'tent', qty: sqm, amount: money(tent), confidence: tentConf });

    if (s.sides !== EVENT_BASE_SIDES) {
        lines.push({
            key: 'sides',
            qty: s.sides,
            amount: money(tent * EVENT_SIDE_STEP.rate * (s.sides - EVENT_BASE_SIDES)),
            confidence: EVENT_SIDE_STEP.confidence,
        });
    }

    if (s.ac) {
        const tons = acTons(sqm, s.month);
        lines.push({
            key: 'ac',
            qty: tons,
            amount: money(tons * EVENT_AC_PER_TON.rate * duration.factor),
            confidence: worst(EVENT_AC_PER_TON.confidence, duration.confidence),
        });
    }

    // Furniture is priced per event; longer hires scale like the tent.
    const furniture: [LineKey, number, { rate: number; confidence: Confidence }][] = [
        ['majlis', s.majlisSeats, EVENT_MAJLIS_PER_GUEST],
        ['chairs', s.chairs, EVENT_CHAIR],
        ['tables', s.tables, EVENT_TABLE],
    ];
    for (const [key, qty, r] of furniture) {
        if (qty <= 0) continue;
        lines.push({
            key,
            qty,
            amount: money(qty * r.rate * duration.factor),
            confidence: worst(r.confidence, duration.confidence),
        });
    }

    const gen = generatorLine(s.generatorKva, s.days);
    if (gen) lines.push(gen);

    const delivery = DELIVERY_FACTOR[s.emirate];
    if (delivery.rate > 0) {
        lines.push({ key: 'delivery', qty: 1, amount: money(tent * delivery.rate), confidence: delivery.confidence });
    }

    return lines;
}

export function priceLongTerm(input: CalculatorSetup): Line[] {
    const s = normalizeSetup(input);
    const sqm = s.width * s.length * s.tents;
    const lines: Line[] = [];

    // Rate falls with the TOTAL area across all tents.
    const curve = rateFromCurve(LONGTERM_CURVE[s.tier], sqm);
    lines.push({ key: 'tent', qty: sqm, amount: money(curve.rate * sqm * s.months), confidence: curve.confidence });

    const units: [LineKey, number, { rate: number; confidence: Confidence }][] = [
        ['chairs', s.chairs, LONGTERM_CHAIR],
        ['tables', s.tables, LONGTERM_TABLE],
        ['beds', s.beds, LONGTERM_BED],
        ['coolingUnits', s.coolingUnits, LONGTERM_COOLING_UNIT],
    ];
    for (const [key, qty, r] of units) {
        if (qty <= 0) continue;
        lines.push({ key, qty, amount: money(qty * r.rate * s.months), confidence: r.confidence });
    }

    const gen = generatorLine(s.generatorKva, Math.round(s.months * DAYS_PER_MONTH));
    if (gen) lines.push(gen);

    return lines;
}

export function inclusions(s: CalculatorSetup): { included: string[]; excluded: string[] } {
    if (s.mode === 'event') {
        const e = INCLUSIONS.event;
        const included: string[] = [...e.always];
        if (s.package === 'furnished') included.push(...e.furnished);
        if (s.ac) included.push('ac');
        const excluded: string[] = [...e.excluded];
        if (!s.generatorKva) excluded.unshift('generator');
        return { included, excluded };
    }
    const l = INCLUSIONS.longterm;
    const included: string[] = [...l.always];
    if (s.tier === 'standard') included.push(...l.standard);
    if (s.tier === 'full') included.push(...l.full);
    const excluded: string[] = [...l.excluded];
    if (s.generatorKva) excluded.splice(excluded.indexOf('power'), 1, 'diesel');
    return { included, excluded };
}

/** Turns priced lines into a range, VAT and per-unit figures. */
export function toEstimate(input: CalculatorSetup): Estimate {
    const s = normalizeSetup(input);
    const lines = s.mode === 'event' ? priceEvent(s) : priceLongTerm(s);
    const sqm = s.width * s.length * s.tents;

    const priced = lines.filter((l) => l.amount !== null && l.confidence !== 'null');
    const onRequest = lines.filter((l) => l.amount === null || l.confidence === 'null').map((l) => l.key);
    const subtotal = money(priced.reduce((sum, l) => sum + (l.amount as number), 0));
    const worstConfidence = worst(...priced.map((l) => l.confidence)) as Exclude<Confidence, 'null'>;

    const low = subtotal > 0 ? roundTo(subtotal) : 0;
    const high = subtotal > 0 ? Math.max(low + ROUND_TO, roundTo(subtotal * RANGE_HIGH[worstConfidence])) : 0;

    const { included, excluded } = inclusions(s);
    const acLine = lines.find((l) => l.key === 'ac');
    const acTonsShown = s.mode === 'event' ? acLine?.qty ?? 0 : s.tier === 'tentOnly' ? 0 : acTons(sqm, s.month);

    return {
        mode: s.mode,
        lines,
        sqm,
        subtotal,
        worstConfidence,
        low,
        high,
        vatLow: money(low * VAT_RATE),
        vatHigh: money(high * VAT_RATE),
        totalLow: money(low * (1 + VAT_RATE)),
        totalHigh: money(high * (1 + VAT_RATE)),
        onRequest,
        perGuestLow: s.guests > 0 && low > 0 ? money(low / s.guests) : null,
        perDayLow: s.mode === 'event' && low > 0 ? money(low / s.days) : null,
        perSqmMonthLow: s.mode === 'longterm' && low > 0 ? money(low / sqm / s.months) : null,
        acTons: acTonsShown,
        included,
        excluded,
    };
}
