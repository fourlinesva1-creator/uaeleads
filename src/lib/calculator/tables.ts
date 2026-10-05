/**
 * Price tables and worked examples for the calculator page's written content.
 * Built from the same engine and rates file, so the content can never disagree with the calculator.
 */

import {
    EVENT_AC_PER_TON,
    EVENT_CHAIR,
    EVENT_MAJLIS_PER_GUEST,
    EVENT_TABLE,
    GENERATOR_PER_DAY,
    LONGTERM_BED,
    LONGTERM_CHAIR,
    LONGTERM_COOLING_UNIT,
    LONGTERM_CURVE,
    LONGTERM_TABLE,
    LONGTERM_TIERS,
    type Confidence,
    type LongTermTier,
} from '../../data/calculator/rates';
import { DEFAULT_SETUP, applyUseCase, rateFromCurve, toEstimate, type CalculatorSetup } from './engine';
import { encodeSetup } from './urlState';

export interface Range {
    low: number;
    high: number;
}

const bare: CalculatorSetup = {
    ...DEFAULT_SETUP,
    mode: 'event',
    guests: 0,
    majlisSeats: 0,
    chairs: 0,
    tables: 0,
    beds: 0,
    ac: false,
    emirate: 'dubai',
    days: 2,
    sides: 3,
};

function range(s: CalculatorSetup): Range {
    const e = toEstimate(s);
    return { low: e.low, high: e.high };
}

export interface EventRow {
    width: number;
    length: number;
    sqm: number;
    furnished: Range;
    shade: Range;
    /** Winter AC (February), on top of the furnished package. */
    withAc: Range;
}

/** Event tents, 2-day hire in Dubai, 3 sides closed, no furniture. */
export function eventPriceTable(): EventRow[] {
    const sizes: [number, number][] = [
        [5, 5],
        [8, 10],
        [10, 20],
        [20, 25],
    ];
    return sizes.map(([width, length]) => {
        const s = { ...bare, width, length };
        return {
            width,
            length,
            sqm: width * length,
            furnished: range({ ...s, package: 'furnished' }),
            shade: range({ ...s, package: 'shade' }),
            withAc: range({ ...s, package: 'furnished', ac: true, month: 2 }),
        };
    });
}

export interface LongTermRow {
    sqm: number;
    /** AED per m² per month, before VAT. */
    rates: Record<LongTermTier, { rate: number; confidence: Confidence }>;
}

/** Long-term tents: price per m² per month by total area and fit-out level. */
export function longTermPriceTable(): LongTermRow[] {
    return [500, 1000, 2000, 4000].map((sqm) => ({
        sqm,
        rates: Object.fromEntries(LONGTERM_TIERS.map((tier) => [tier, rateFromCurve(LONGTERM_CURVE[tier], sqm)])) as LongTermRow['rates'],
    }));
}

export type AddOnKey =
    | 'chair'
    | 'table'
    | 'majlis'
    | 'acTon'
    | 'gen100'
    | 'gen250'
    | 'gen500'
    | 'gen1000'
    | 'ltChair'
    | 'ltTable'
    | 'ltBed'
    | 'ltCoolingUnit';

export function addOnRates(): { key: AddOnKey; rate: number; unit: 'event' | 'day' | 'month'; confidence: Confidence }[] {
    return [
        { key: 'chair', ...EVENT_CHAIR, unit: 'event' },
        { key: 'table', ...EVENT_TABLE, unit: 'event' },
        { key: 'majlis', ...EVENT_MAJLIS_PER_GUEST, unit: 'event' },
        { key: 'acTon', ...EVENT_AC_PER_TON, unit: 'event' },
        { key: 'gen100', ...GENERATOR_PER_DAY[100], unit: 'day' },
        { key: 'gen250', ...GENERATOR_PER_DAY[250], unit: 'day' },
        { key: 'gen500', ...GENERATOR_PER_DAY[500], unit: 'day' },
        { key: 'gen1000', ...GENERATOR_PER_DAY[1000], unit: 'day' },
        { key: 'ltChair', ...LONGTERM_CHAIR, unit: 'month' },
        { key: 'ltTable', ...LONGTERM_TABLE, unit: 'month' },
        { key: 'ltBed', ...LONGTERM_BED, unit: 'month' },
        { key: 'ltCoolingUnit', ...LONGTERM_COOLING_UNIT, unit: 'month' },
    ];
}

export type ExampleKey = 'homeMajlis' | 'corporateIftar' | 'fullRamadan' | 'storage';

export interface WorkedExample {
    key: ExampleKey;
    setup: CalculatorSetup;
    /** `?c=` value that loads this setup in the calculator. */
    code: string;
    low: number;
    high: number;
    sqm: number;
    acTons: number;
}

/** Real-world setups shown under "Worked examples", each with a "load this setup" link. */
export function workedExamples(): WorkedExample[] {
    const list: [ExampleKey, CalculatorSetup][] = [
        ['homeMajlis', { ...applyUseCase(DEFAULT_SETUP, 'home-majlis'), emirate: 'sharjah', days: 2, month: 2 }],
        ['corporateIftar', { ...applyUseCase(DEFAULT_SETUP, 'corporate-iftar'), emirate: 'dubai', days: 2, month: 2 }],
        ['fullRamadan', { ...applyUseCase(DEFAULT_SETUP, 'hotel-majlis'), emirate: 'abu-dhabi', days: 30, month: 2 }],
        ['storage', { ...applyUseCase(DEFAULT_SETUP, 'storage'), emirate: 'abu-dhabi', months: 3, width: 20, length: 50 }],
    ];
    return list.map(([key, setup]) => {
        const e = toEstimate(setup);
        return { key, setup, code: encodeSetup(setup), low: e.low, high: e.high, sqm: e.sqm, acTons: e.acTons };
    });
}
