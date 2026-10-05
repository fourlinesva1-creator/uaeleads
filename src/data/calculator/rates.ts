/**
 * Tent cost calculator: single source of truth for every price on the site.
 *
 * PUBLIC RATES ONLY. Every figure below is already the invoice rate x MARKUP,
 * before 5% VAT. Raw rates and their sources live in the gitignored
 * `seo audit/pricing/PRICE-SOURCES.md` and must never be committed.
 *
 * Spec: kb/tent-cost-calculator/03-pricing-engine.md
 */

export type Confidence = 'verified' | 'derived' | 'estimated' | 'null';

/** Owner rule: public price = invoice rate + 10%. Already applied to every rate in this file. */
export const MARKUP = 1.1;
export const VAT_RATE = 0.05;
/** Shown on the page as "Prices updated ..." and sent with every lead. */
export const RATES_UPDATED = '2026-10-06';

/** Top of the range = bottom x this, chosen by the worst confidence in the estimate. */
export const RANGE_HIGH: Record<Exclude<Confidence, 'null'>, number> = {
    verified: 1.12,
    derived: 1.12,
    estimated: 1.25,
};
export const ROUND_TO = 50;

/** A point on a price curve: price per m² at a given area (m²). */
export interface RatePoint {
    sqm: number;
    rate: number;
    confidence: Confidence;
}

export interface Rate {
    rate: number;
    confidence: Confidence;
}

// ---------------------------------------------------------------------------
// Events (priced per event; the base is a 2-day hire)
// ---------------------------------------------------------------------------

export const EVENT_BASE_DAYS = 2;
/** Above this, the long-term model is the better fit. */
export const EVENT_MAX_DAYS = 30;

/**
 * Furnished tent package, 2 days, 3 sides closed: frame + PVC + flooring/carpet + lining.
 * Price per m² by the size of ONE tent; straight-line between points.
 */
export const EVENT_TENT_CURVE: RatePoint[] = [
    { sqm: 25, rate: 154, confidence: 'verified' }, // 5x5 package = 3,850
    { sqm: 80, rate: 129.375, confidence: 'derived' }, // 8x10 majlis job minus AC and seating
    { sqm: 200, rate: 110, confidence: 'estimated' },
    { sqm: 500, rate: 90, confidence: 'estimated' },
];

/** Shade only (frame + PVC roof + chosen sides, no floor, carpet or lining), as a share of the furnished package. */
export const EVENT_SHADE_FACTOR: Rate = { rate: 0.6, confidence: 'estimated' };

/** The package price assumes 3 closed sides; each side more or less moves the tent price by this share. */
export const EVENT_BASE_SIDES = 3;
export const EVENT_SIDE_STEP: Rate = { rate: 0.05, confidence: 'estimated' };

/** Duration multipliers on the 2-day price. Days in between are straight-line. */
export const EVENT_DURATION = {
    /** Each extra day from day 3 to day 6. */
    extraDay: 0.15,
    week: 1.6, // 7 days
    month: 2.5, // 30 days
    confidence: 'estimated' as Confidence,
};

/** Air conditioning per ton per event (2 days). */
export const EVENT_AC_PER_TON: Rate = { rate: 275, confidence: 'estimated' };

/** Majlis floor seating (mattress + arm rest) per guest per event. */
export const EVENT_MAJLIS_PER_GUEST: Rate = { rate: 60, confidence: 'estimated' };

export const EVENT_CHAIR: Rate = { rate: 16.5, confidence: 'verified' };
export const EVENT_TABLE: Rate = { rate: 82.5, confidence: 'verified' };

// ---------------------------------------------------------------------------
// Air conditioning sizing (m² cooled per ton of refrigeration)
// ---------------------------------------------------------------------------

/** Index 0 = January. Summer (May-Sep) 8, Apr/Oct 10, winter 15 (winter is an estimate). */
export const SQM_PER_TON_BY_MONTH = [15, 15, 15, 10, 8, 8, 8, 8, 8, 10, 15, 15];

// ---------------------------------------------------------------------------
// Generators (per day, long hire; diesel always extra)
// ---------------------------------------------------------------------------

export const GENERATOR_KVA = [100, 250, 500, 1000] as const;
export type GeneratorKva = 0 | (typeof GENERATOR_KVA)[number];

export const GENERATOR_PER_DAY: Record<(typeof GENERATOR_KVA)[number], Rate> = {
    100: { rate: 330, confidence: 'estimated' },
    250: { rate: 550, confidence: 'estimated' },
    500: { rate: 880, confidence: 'estimated' },
    1000: { rate: 1375, confidence: 'verified' }, // 50-day hire
};
/** Hires shorter than this cost more per day. */
export const GENERATOR_LONG_HIRE_DAYS = 7;
export const GENERATOR_SHORT_HIRE: Rate = { rate: 1.5, confidence: 'estimated' };

// ---------------------------------------------------------------------------
// Delivery (events): share of the tent price by emirate
// ---------------------------------------------------------------------------

export const EMIRATES = [
    'dubai',
    'sharjah',
    'ajman',
    'umm-al-quwain',
    'abu-dhabi',
    'al-ain',
    'ras-al-khaimah',
    'fujairah',
    'western-region',
] as const;
export type Emirate = (typeof EMIRATES)[number];

export const DELIVERY_FACTOR: Record<Emirate, Rate> = {
    dubai: { rate: 0, confidence: 'estimated' },
    sharjah: { rate: 0, confidence: 'verified' }, // 8x10 job was in Sharjah
    ajman: { rate: 0, confidence: 'estimated' },
    'umm-al-quwain': { rate: 0, confidence: 'estimated' },
    'abu-dhabi': { rate: 0.07, confidence: 'estimated' },
    'al-ain': { rate: 0.07, confidence: 'estimated' },
    'ras-al-khaimah': { rate: 0.07, confidence: 'estimated' },
    fujairah: { rate: 0.07, confidence: 'estimated' },
    'western-region': { rate: 0.12, confidence: 'estimated' },
};

// ---------------------------------------------------------------------------
// Long-term (per m² per month, by TOTAL area across all tents)
// ---------------------------------------------------------------------------

export const LONGTERM_TIERS = ['tentOnly', 'standard', 'full'] as const;
export type LongTermTier = (typeof LONGTERM_TIERS)[number];

/**
 * tentOnly: frame + PVC roof/walls, installation, mobilisation + demobilisation.
 * standard: + AC, lighting and electrical work, doors (the only data we have for this tier includes AC).
 * full:     + raised wooden floor + vinyl, lockable doors, fire extinguishers + exit signs.
 */
export const LONGTERM_CURVE: Record<LongTermTier, RatePoint[]> = {
    tentOnly: [
        { sqm: 500, rate: 35, confidence: 'estimated' },
        { sqm: 1000, rate: 29.33, confidence: 'verified' }, // 20x50, 90 days, Western Region
        { sqm: 3000, rate: 22, confidence: 'estimated' },
    ],
    standard: [
        { sqm: 500, rate: 57.75, confidence: 'estimated' },
        { sqm: 1000, rate: 48.4, confidence: 'estimated' },
        { sqm: 4000, rate: 36.3, confidence: 'verified' }, // 45-day job, AC + lights + doors
    ],
    full: [
        { sqm: 675, rate: 82.65, confidence: 'derived' }, // average of the 600 m² and 750 m² tents
        { sqm: 7200, rate: 41.8, confidence: 'verified' }, // 12 x 600 m²
    ],
};

export const LONGTERM_MIN_MONTHS = 1;
export const LONGTERM_MAX_MONTHS = 36;

/** Per unit per month. */
export const LONGTERM_CHAIR: Rate = { rate: 33, confidence: 'derived' };
export const LONGTERM_TABLE: Rate = { rate: 55, confidence: 'derived' };
export const LONGTERM_BED: Rate = { rate: 86, confidence: 'derived' };
/** 25 m² cooling/rest unit with AC, 10 chairs and 2 tables. */
export const LONGTERM_COOLING_UNIT: Rate = { rate: 8250, confidence: 'verified' };

export const DAYS_PER_MONTH = 30;

// ---------------------------------------------------------------------------
// Sizing
// ---------------------------------------------------------------------------

export const SEATING_STYLES = [
    'standing',
    'theatre',
    'banquet',
    'banquetDance',
    'majlis',
    'dining',
    'sleeping',
] as const;
export type SeatingStyle = (typeof SEATING_STYLES)[number];

/** m² per guest. `walkways` adds 15% for aisles where the figure doesn't already include them. */
export const SPACE_PER_GUEST: Record<SeatingStyle, { sqm: number; walkways: boolean }> = {
    standing: { sqm: 0.7, walkways: true },
    theatre: { sqm: 0.85, walkways: true },
    banquet: { sqm: 1.1, walkways: true },
    banquetDance: { sqm: 1.6, walkways: true },
    majlis: { sqm: 4, walkways: false }, // 8x10 job for 20 guests
    dining: { sqm: 2, walkways: false }, // scope: 300 guests in 600 m², incl. serving area
    sleeping: { sqm: 6, walkways: false }, // scope minimum spacing
};
export const WALKWAY_FACTOR = 1.15;
export const EXTRA_SPACE_SQM = { bar: 9, buffet: 9, stage: 18 };

/** Widths (clear spans) of the frame tents we rent; lengths go in bays. */
export const TENT_SPANS = [3, 5, 6, 8, 10, 15, 20, 25, 30, 40];
export const BAY_LENGTH = 5;
export const MIN_SIDE_M = 3;
export const MAX_SIDE_M = 200;
export const MAX_TENTS = 50;

// ---------------------------------------------------------------------------
// Use-case presets
// ---------------------------------------------------------------------------

export const USE_CASES = [
    'home-majlis',
    'corporate-iftar',
    'hotel-majlis',
    'wedding',
    'storage',
    'site-office',
    'dining-hall',
    'accommodation',
] as const;
export type UseCase = (typeof USE_CASES)[number];

export interface UseCasePreset {
    mode: 'event' | 'longterm';
    seating: SeatingStyle;
    guests: number;
    ac: boolean;
    tier?: LongTermTier;
}

export const USE_CASE_PRESETS: Record<UseCase, UseCasePreset> = {
    'home-majlis': { mode: 'event', seating: 'majlis', guests: 20, ac: true },
    'corporate-iftar': { mode: 'event', seating: 'banquet', guests: 150, ac: true },
    'hotel-majlis': { mode: 'event', seating: 'majlis', guests: 60, ac: true },
    wedding: { mode: 'event', seating: 'banquetDance', guests: 300, ac: true },
    storage: { mode: 'longterm', seating: 'standing', guests: 0, ac: false, tier: 'tentOnly' },
    'site-office': { mode: 'longterm', seating: 'dining', guests: 30, ac: true, tier: 'full' },
    'dining-hall': { mode: 'longterm', seating: 'dining', guests: 300, ac: true, tier: 'full' },
    accommodation: { mode: 'longterm', seating: 'sleeping', guests: 100, ac: true, tier: 'full' },
};

// ---------------------------------------------------------------------------
// Included / not included (keys; text lives in messages `calculator.inclusions`)
// ---------------------------------------------------------------------------

export const INCLUSIONS = {
    event: {
        always: ['structure', 'installation', 'pvcRoof', 'lighting'],
        furnished: ['flooringCarpet', 'lining'],
        excluded: ['diesel', 'decor', 'catering', 'hardSurface', 'permits'],
    },
    longterm: {
        always: ['transport', 'maintenance', 'doors', 'trashCans'],
        standard: ['ac', 'lighting'],
        full: ['ac', 'lighting', 'raisedFloor', 'fireSafety'],
        excluded: ['power', 'cleaning', 'bedding', 'waste', 'toilets', 'permits'],
    },
} as const;
