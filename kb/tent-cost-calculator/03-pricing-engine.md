# 03 — Pricing Engine

> This file holds **public rates only** (invoice rate × 1.10), before 5% VAT.
> Raw rates and where each came from: `seo audit/pricing/PRICE-SOURCES.md` (gitignored, never commit).
> Last data update: **2026-10-06** (18 data points + the scope spec).

---

## Constants

| Constant | Value | Meaning |
|---|---|---|
| `MARKUP` | **1.10** | Owner rule: public price = invoice rate + 10% |
| `VAT_RATE` | **0.05** | UAE VAT, shown on its own line |
| `RANGE_HIGH.verified` | **1.12** *(proposed)* | Top of the range when every line is verified or derived |
| `RANGE_HIGH.estimated` | **1.25** *(proposed)* | Top of the range when **any** line is estimated |
| `RATES_UPDATED` | ISO date | Shown on the page as "Prices updated …" |

**Range rule:** `low = Σ(line × MARKUP)`, `high = low × RANGE_HIGH[worst confidence]`, both rounded to
the nearest AED 50. Never show a single exact figure. The exact price comes from the quote.

## Confidence levels

Every rate in `rates.ts` has a `confidence` value:

| Level | Meaning | Shown on the page |
|---|---|---|
| `verified` | Comes straight from an invoice, PO or quote | Normal range |
| `derived` | Calculated from verified data (e.g. per m² from a package) | Normal range |
| `estimated` | Our best guess where the data is missing (owner asked for estimates, 2026-10-06) | Wider range + "estimate, confirmed in your quote" label |
| `null` | No basis for a number at all | "Price on request" (still captures the lead) |

**Replace estimated rates with real invoices as they arrive.** The supplier partner has been asked
whether they have their own costing sheet. If it arrives, it replaces most of the estimates.

---

## Two pricing models

### 1. Event / Ramadan model (priced per event, by days)

```
tent      = sizeRate(m², fitOut) × m² × durationFactor(days)
ac        = tons(m², season) × acRatePerTon × durationFactor(days)
furniture = Σ qty × unitRate
power     = generatorRate(kVA, days)                    // optional, diesel always extra
delivery  = tent × emirateFactor(emirate)
subtotal  = (tent + ac + furniture + power + delivery) × MARKUP
```

**As built (2026-10-05):** the tent rate uses the size of **one** tent (× number of tents). Furniture
also scales with `durationFactor`. "Shade only" package (no floor, carpet or lining) = 0.6 × the
furnished package (estimated). Delivery is a share of the tent line only. Between curve points the
rate is straight-line and takes the worse confidence of the two points; beyond the ends it's flat and
at best `estimated`.

### 2. Long-term model (per m² per month)

```
ratePerSqm = curve(totalSqm, fitOutTier)    // estimated between known points (straight-line on m²)
tent       = totalSqm × ratePerSqm × months
furniture  = Σ qty × monthlyUnitRate × months
subtotal   = (tent + furniture + power) × MARKUP
```

### Fit-out tiers (long-term)

| Tier | Includes |
|---|---|
| **Tent only** | Aluminium frame + PVC roof/walls, installation, mobilisation + demobilisation |
| **Standard** | + AC, lighting and electrical work, doors (our only data point for this tier includes AC) |
| **Full fit-out** | + raised wooden flooring + vinyl, lockable doors (single/double/roller shutter), fire extinguishers + exit signs |

---

## Public rates — events

| Item | Public (AED) | Confidence |
|---|---|---|
| Chair | **16.50** / chair / event | verified |
| Table with cover | **82.50** / table / event | verified |
| 5×5 m canopy + flooring + carpet + lining, 3 sides closed, 2 days | **3,850** (154 / m²) | verified |
| 8×10 m majlis tent, 2 days: standing AC, lining roof + sides, carpet, majlis seating for 20 | **14,300** (179 / m², 715 / guest) | verified |
| Generator 1000 kVA, 50 days, 15 m cable, diesel extra | **68,750** (1,375 / day) | verified |

### Estimated event rates (fill the gaps; replace when invoices arrive)

| Item | Public (AED) | Basis |
|---|---|---|
| Tent package (frame + PVC + flooring + carpet + lining), 2 days, 80 m² | **129.38 / m²** | derived: 8×10 job minus AC (10 TR × 275) and seating (20 × 60) |
| Same, ≈ 200 m² | ≈ **110 / m²** | estimated |
| Same, ≥ 500 m² | ≈ **90 / m²** | estimated |
| Each extra day beyond 2 | **+15%** of the 2-day tent price | estimated |
| 1 week | **× 1.6** of the 2-day price | estimated |
| Full Ramadan (30 days) | **× 2.5** of the 2-day price | estimated |
| AC for an event | ≈ **275 / ton / event** (2 days) | derived from the 8×10 job, estimated split |
| Majlis seating (mattress + arm rest) | ≈ **60 / guest / event** | derived from the 8×10 job, estimated split |
| Sides: each closed side vs open | ≈ **+5%** of tent price per side | estimated |
| Generator 500 kVA / 250 kVA / 100 kVA | ≈ **880 / 550 / 330 per day** (long hire) | estimated, scaled from 1000 kVA |
| Generator short hire (< 7 days) | **+50%** per day | estimated |
| Delivery: Dubai, Sharjah, Ajman, UAQ | **+0%** | estimated (8×10 Sharjah job is the base) |
| Delivery: Abu Dhabi city, Al Ain, RAK, Fujairah | **+7%** of tent price | estimated |
| Delivery: Western Region (Ruwais, Madinat Zayed) | **+12%** of tent price | estimated |

## Public rates — long-term

| Job | Tier | Public (AED / m² / month) | Confidence |
|---|---|---|---|
| 1,000 m² (20×50), 90 days, Western Region | Tent only | **29.33** | verified |
| ≈ 600 m² single tent | Full fit-out | **≈ 80.50** | verified |
| ≈ 750 m² single tent | Full fit-out | **≈ 84.80** | verified |
| 4,000 m² (AC, lights, doors, no flooring) | Standard + AC | **≈ 36.30** | verified |
| 7,200 m² (12 × 600 m²) | Full fit-out | **≈ 41.80** | verified |
| 4,000 m² (2 × 20×100, AC, lights, roller shutter) | Standard + AC | **52.25 / m²**, period unknown | pending |
| 25 m² cooling unit, AC + 10 chairs + 2 tables | Full fit-out | **8,250 / unit / month** | verified |
| Tent only, ≤ 500 m² | Tent only | ≈ **35** | estimated |
| Tent only, ≥ 3,000 m² | Tent only | ≈ **22** | estimated |

Built curves (`rates.ts`): **standard** tier = 500 m² 57.75 (est), 1,000 m² 48.40 (est), 4,000 m²
36.30 (verified); the estimates assume standard ≈ 1.65 × tent-only. **Full** tier = 675 m² 82.65
(derived, average of the 600 and 750 m² tents) → 7,200 m² 41.80 (verified). Long-term rates use the
**total** m² across all tents.

Long-term furniture (per unit per month): tables ≈ 55, chairs ≈ 33 (the source ranges 11–33; use
the top until confirmed), beds ≈ 86. All derived.

**Takeaway:** a full fit-out costs roughly **2.7× tent-only** at 600–750 m². With a big job the
price per m² roughly halves.

### Possibly sale prices, not rentals (pending)

Three figures (10×20 frame + PVC, 10×50 and 10×10) look like **purchase** prices. As rentals they'd be
3–10× every other quote. Figures are in the private `seo audit/pricing/PRICE-SOURCES.md` only. If the owner
confirms they're sale prices, use them for **rent vs buy** (feature D3).

---

## AC sizing (from the scope spec, verified)

| Basis | Figure |
|---|---|
| 780 m² gym tent = 4 × 25 TR | **≈ 7.8 m² per ton** |
| 15 m² cooling tent = 1.5 TR | **10 m² per ton** |
| Target inside temperature | 21–25 °C |

Rule for the engine: **summer (May–Sep) 1 TR per 8 m²**, shoulder months (Apr, Oct) 1 TR per 10 m²,
**winter (Nov–Mar) 1 TR per 15 m²** (winter is an estimate). Round up to whole units.

## Space per person (verified data points)

| Use | m² per person | Source |
|---|---|---|
| Majlis (mattress + arm rest, with AC units) | **4** | 8×10 job for 20 guests |
| Dining incl. serving area | **2** | Scope: 300 guests in 600 m² |
| Sleeping / camp accommodation | **6** | Scope minimum spacing |

---

## Included / not included

### Events

| Included (ticked when selected) | Not included unless added |
|---|---|
| Structure, installation and dismantling on ground nails | Generator / power (add-on). **Diesel always extra** |
| PVC roof + chosen sides | Decor, chandeliers, entrance styling |
| Flooring / carpet / lining | Catering, staff, cleaning |
| Lighting + electrical work | Installing on concrete/paving (needs weights; quoted on site) |
| AC (if selected) | Permit fees ⛔ *(owner to confirm included vs at cost)* |

### Long-term (from the scope spec)

| Included | Not included |
|---|---|
| Transport, mobilisation, repositioning, demobilisation | Power generation + fuel |
| Maintenance (fault response within 4 h) | Daily cleaning labour + consumables |
| Fit-out items in the chosen tier | Beds, mattresses, lockers, linen |
| ≥ 2 doors (≥ 4 doors above 300 m²) | Waste collection, pest control |
| Trash cans | Toilets/showers |

Fabric and structure: non-flammable, rated for 80 km/h wind, 500 lux lighting on 2 circuits.
These make good trust points in the written content too.

---

## Remaining data gaps (priority order)

1. **Re-download the 6 PDFs in `seo audit/pricing/` that are 0 bytes.** They're probably full quotations and would replace many estimates.
2. Duration and fit-out for the 10×50, 10×10 and 10×20 figures, and whether they're **sale prices**.
3. Period for the 4,000 m² AC tent quote (per month or for the whole job?). See PRICE-SOURCES row 16.
4. Event tent packages at 10×10, 10×20, 20×20 and 20×30 to confirm the estimated sliding rates.
5. The duration curve: 1 day / 1 week / 30 days for one tent.
6. Delivery outside Dubai/Sharjah, minimum order, and whether permits are included.
7. Majlis sofa sets, round tables, VIP chairs.
8. The generator rate was quoted as a supplier rate: is it a trade price? If so, should the public price use a markup above 10%?
