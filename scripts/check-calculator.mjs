// Checks the tent cost calculator engine against known invoice cases.
// Run: node scripts/check-calculator.mjs   (Node >= 22.18, which strips TypeScript types)
import { register } from 'node:module';
import assert from 'node:assert/strict';

// Let Node resolve the extensionless relative imports used by the TS sources.
register(
    'data:text/javascript,' +
        encodeURIComponent(`
export async function resolve(spec, ctx, next) {
  try { return await next(spec, ctx); }
  catch (e) {
    if (spec.startsWith('.') && !/\\.\\w+$/.test(spec)) return next(spec + '.ts', ctx);
    throw e;
  }
}`),
);

const { DEFAULT_SETUP, toEstimate, priceEvent, applyUseCase, suggestTentSize, sqmFromGuests, eventDurationFactor, rateFromCurve } =
    await import('../src/lib/calculator/engine.ts');
const { encodeSetup, decodeSetup } = await import('../src/lib/calculator/urlState.ts');
const { EVENT_TENT_CURVE } = await import('../src/data/calculator/rates.ts');

const blank = { ...DEFAULT_SETUP, ac: false, majlisSeats: 0, chairs: 0, tables: 0, generatorKva: 0 };
const sum = (lines) => Math.round(lines.reduce((s, l) => s + l.amount, 0) * 100) / 100;
let passed = 0;
function check(name, fn) {
    fn();
    passed++;
    console.log('  ok  ' + name);
}

console.log('Known invoice cases (+10%, before the range)');

check('5x5 package, 3 sides, 2 days, Dubai = 3,850', () => {
    const e = toEstimate({ ...blank, width: 5, length: 5 });
    assert.equal(e.subtotal, 3850);
    assert.equal(e.worstConfidence, 'verified');
    assert.equal(e.low, 3850);
    assert.equal(e.high, 4300); // 3,850 x 1.12 = 4,312 -> 4,300
});

check('150 chairs + 11 tables = 3,382.50', () => {
    const lines = priceEvent({ ...blank, chairs: 150, tables: 11 }).filter((l) => l.key === 'chairs' || l.key === 'tables');
    assert.equal(sum(lines), 3382.5);
});

check('8x10 majlis, AC, 20 guests, 2 days, Sharjah, summer = 14,300', () => {
    const e = toEstimate({ ...blank, width: 8, length: 10, emirate: 'sharjah', month: 7, ac: true, majlisSeats: 20 });
    assert.equal(e.subtotal, 14300);
    assert.equal(e.acTons, 10);
});

check('1000 kVA generator, 50 days = 68,750', () => {
    const e = toEstimate({ ...blank, mode: 'longterm', tier: 'tentOnly', width: 20, length: 50, months: 1, generatorKva: 1000 });
    const gen = e.lines.find((l) => l.key === 'generator');
    assert.equal(gen.amount / gen.qty, 1375);
});

check('20x50 tent only, 3 months = 29.33 / m² / month', () => {
    const e = toEstimate({ ...blank, mode: 'longterm', tier: 'tentOnly', width: 20, length: 50, months: 3 });
    assert.equal(e.subtotal, 29.33 * 1000 * 3);
    assert.equal(e.worstConfidence, 'verified');
});

console.log('Engine rules');

check('estimated lines widen the range to x1.25', () => {
    const e = toEstimate({ ...blank, width: 10, length: 20 });
    assert.equal(e.worstConfidence, 'estimated');
    assert.equal(e.high, Math.round((e.subtotal * 1.25) / 50) * 50);
});

check('curve interpolates and is flat beyond the ends', () => {
    assert.equal(rateFromCurve(EVENT_TENT_CURVE, 25).rate, 154);
    assert.equal(rateFromCurve(EVENT_TENT_CURVE, 10).rate, 154);
    assert.equal(rateFromCurve(EVENT_TENT_CURVE, 140).rate, (129.375 + 110) / 2);
    assert.equal(rateFromCurve(EVENT_TENT_CURVE, 140).confidence, 'estimated');
    assert.equal(rateFromCurve(EVENT_TENT_CURVE, 2000).rate, 90);
});

check('duration factor is continuous: 2d=1, 6d=1.6, 7d=1.6, 30d=2.5', () => {
    assert.equal(eventDurationFactor(2).factor, 1);
    assert.ok(Math.abs(eventDurationFactor(6).factor - 1.6) < 1e-9);
    assert.equal(eventDurationFactor(7).factor, 1.6);
    assert.equal(eventDurationFactor(30).factor, 2.5);
});

check('price per m² falls as tents get bigger', () => {
    let prev = Infinity;
    for (const [w, l] of [[5, 5], [8, 10], [10, 20], [20, 30], [25, 40]]) {
        const e = toEstimate({ ...blank, width: w, length: l });
        const perSqm = e.subtotal / (w * l);
        assert.ok(perSqm <= prev, `${w}x${l}: ${perSqm} > ${prev}`);
        prev = perSqm;
    }
});

check('open sides cost less, all sides closed cost more', () => {
    const base = toEstimate({ ...blank, width: 5, length: 5 }).subtotal;
    assert.ok(toEstimate({ ...blank, width: 5, length: 5, sides: 0 }).subtotal < base);
    assert.ok(toEstimate({ ...blank, width: 5, length: 5, sides: 4 }).subtotal > base);
});

check('delivery outside the northern emirates adds a line', () => {
    const e = toEstimate({ ...blank, width: 5, length: 5, emirate: 'western-region' });
    assert.equal(e.lines.find((l) => l.key === 'delivery').amount, 3850 * 0.12);
});

check('VAT is 5% on its own line', () => {
    const e = toEstimate({ ...blank, width: 5, length: 5 });
    assert.equal(e.vatLow, 192.5);
    assert.equal(e.totalLow, 4042.5);
});

check('garbage input is clamped, never NaN', () => {
    const e = toEstimate({ ...blank, width: NaN, length: -4, days: 999, chairs: -10, sides: 9 });
    assert.ok(Number.isFinite(e.low) && e.low > 0);
});

console.log('Sizing');

check('20 majlis guests -> 80 m²; suggested tent covers it', () => {
    assert.equal(sqmFromGuests(20, 'majlis'), 80);
    const t = suggestTentSize(80);
    assert.ok(t.sqm >= 80 && t.length <= t.width * 4);
});

check('every preset prices without errors', () => {
    for (const uc of ['home-majlis', 'corporate-iftar', 'hotel-majlis', 'wedding', 'storage', 'site-office', 'dining-hall', 'accommodation']) {
        const e = toEstimate(applyUseCase(DEFAULT_SETUP, uc));
        assert.ok(e.low > 0 && e.high > e.low, uc);
    }
});

console.log('URL state');

check('encode -> decode round-trip', () => {
    const s = applyUseCase({ ...DEFAULT_SETUP, emirate: 'abu-dhabi', generatorKva: 250, months: 4.5 }, 'dining-hall');
    const c = encodeSetup(s);
    assert.ok(c.length < 120, c);
    assert.deepEqual(decodeSetup(c), s);
});

check('bad strings decode to null', () => {
    for (const bad of [null, '', 'x', '2_0', '1_0_0', encodeSetup(DEFAULT_SETUP).replace(/_\d+$/, '_abc'), '1' + '_99'.repeat(24)]) {
        assert.equal(decodeSetup(bad), null, String(bad));
    }
});

console.log(`\n${passed} checks passed`);
