/**
 * Saves a calculator setup to a short `?c=` value and loads it back.
 *
 * Format: "<version>_<field>_<field>...", fields in FIELDS order. Lists are stored as indexes,
 * so only ever APPEND to the lists in rates.ts, and bump VERSION if a field changes meaning.
 * Every loaded value is untrusted and goes through normalizeSetup().
 */

import { EMIRATES, GENERATOR_KVA, LONGTERM_TIERS, SEATING_STYLES, USE_CASES } from '../../data/calculator/rates';
import { DEFAULT_SETUP, normalizeSetup, type CalculatorSetup } from './engine';

const VERSION = '1';
const SEP = '_';

type Field = keyof CalculatorSetup;

const FIELDS: Field[] = [
    'mode',
    'useCase',
    'emirate',
    'width',
    'length',
    'tents',
    'guests',
    'seating',
    'month',
    'generatorKva',
    'chairs',
    'tables',
    'days',
    'package',
    'sides',
    'ac',
    'majlisSeats',
    'months',
    'tier',
    'beds',
    'coolingUnits',
    'bars',
    'buffets',
    'stage',
];

const ENUMS: Partial<Record<Field, readonly (string | number)[]>> = {
    mode: ['event', 'longterm'],
    useCase: USE_CASES,
    emirate: EMIRATES,
    seating: SEATING_STYLES,
    generatorKva: [0, ...GENERATOR_KVA],
    package: ['furnished', 'shade'],
    tier: LONGTERM_TIERS,
};

export function encodeSetup(setup: CalculatorSetup): string {
    const s = normalizeSetup(setup);
    const parts = FIELDS.map((f) => {
        const value = s[f];
        const list = ENUMS[f];
        if (list) return String(Math.max(0, list.indexOf(value as string | number)));
        if (typeof value === 'boolean') return value ? '1' : '0';
        return String(value);
    });
    return [VERSION, ...parts].join(SEP);
}

/** Returns null for anything that isn't a valid saved setup. */
export function decodeSetup(raw: string | null | undefined): CalculatorSetup | null {
    if (!raw || raw.length > 300) return null;
    const [version, ...parts] = raw.split(SEP);
    if (version !== VERSION || parts.length !== FIELDS.length) return null;

    const out: Record<string, unknown> = { ...DEFAULT_SETUP };
    for (let i = 0; i < FIELDS.length; i++) {
        const f = FIELDS[i];
        const p = parts[i];
        if (!/^\d+(\.\d+)?$/.test(p)) return null;
        const n = Number(p);
        const list = ENUMS[f];
        if (list) {
            if (!Number.isInteger(n) || n >= list.length) return null;
            out[f] = list[n];
        } else if (typeof DEFAULT_SETUP[f] === 'boolean') {
            out[f] = n === 1;
        } else {
            out[f] = n;
        }
    }
    return normalizeSetup(out as unknown as CalculatorSetup);
}
