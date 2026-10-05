# 06 — Build Plan

> Resume at the first unchecked box. Tick boxes in the same commit as the work.

---

## File map (planned)

| Path | Purpose |
|---|---|
| `src/data/calculator/rates.ts` | **Single source of truth**: public base rates, `MARKUP`, `VAT_RATE`, `RANGE_HIGH`, `RATES_UPDATED`, included/excluded lists. Typed |
| `src/lib/calculator/engine.ts` | Pure functions: `sqmFromGuests`, `suggestTentSize`, `applyUseCase`, `priceEvent`, `priceLongTerm`, `inclusions`, `toEstimate` (range + VAT) |
| `scripts/check-calculator.mjs` | Engine checks against the invoice cases (`npm run check:calculator`, Node ≥ 22.18) |
| `src/lib/calculator/urlState.ts` | Save/load the setup ↔ short query string (`?c=`) |
| `src/lib/calculator/lead.ts` | Payload builder, `quoteRef`, `leadScore`, WhatsApp message builder |
| `src/components/calculator/TentCalculator.tsx` | Client component that holds the calculator's state |
| `src/components/calculator/*` | Built: `fields.tsx` (Section, Stepper, Segmented, Toggle, Select), `SetupPanel`, `ResultsPanel`, `MobileSummaryBar`. Phase 3 adds `LeadActions`, `QuoteLeadForm`; (v2) `LayoutPreview` |
| `src/lib/calculator/format.ts` | AED / number / date formatting (Latin digits in both locales) |
| `src/app/[locale]/tent-cost-calculator/page.tsx` | Server page: metadata, schema, written content, mounts the calculator. **Now: hero + calculator only, `noindex` until Phase 4** |
| `src/app/[locale]/tent-cost-calculator/print/page.tsx` | Printable quote (rebuilt from `?c=` + `ref`) |
| `src/messages/{en,ar}.json` → `calculator` namespace | All interface text and content |

---

## Phase 0 — Data

- [x] Competitor research (01)
- [x] First event rates received (chairs, tables, 5×5 package)
- [x] Long-term rates taken from the existing invoices
- [ ] Owner sends more invoices → fill data gaps 1–6 in [03](03-pricing-engine.md#data-gaps)
- [x] Write private notes on where each price came from in `seo audit/pricing/PRICE-SOURCES.md` (gitignored)
- [ ] Owner signs off on `RANGE_HIGH` (proposed 1.12) and whether permits are included
- [x] AC sizing rule taken from the scope spec (≈ 8 m²/TR summer); majlis density 4 m²/guest from the 8×10 job
- [x] Estimated rates for missing data, each with a confidence level (03)
- [ ] Owner re-downloads the 6 PDFs that are 0 bytes
- [ ] Supplier partner shares their costing sheet, if they have one
- [ ] Ops team checks the estimated rates in 03

## Phase 1 — Engine (can start now)

- [x] `rates.ts` with every rate in 03, each with `confidence` (`verified` / `derived` / `estimated` / `null`)
- [x] `engine.ts` pure functions + a node check script covering the known invoice cases (5×5 package = 3,850; 150 chairs + 11 tables = 3,382.50). Run `npm run check:calculator` (17 checks; also reproduces the 8×10 majlis = 14,300 and 20×50 tent-only = 29.33/m²/month)
- [x] `urlState.ts` save/load round-trip (`?c=1_…`, indexes into the lists in `rates.ts`, so only ever append to those lists)

## Phase 2 — Calculator UI

- [x] Mode switch, presets, guests → size (+ bars, buffets, stage), manual size, number of tents
- [x] Package (furnished / shade only), walls, AC, furniture, duration (+ Full Ramadan), event month (AC sizing), generator, emirate
- [x] Results panel: range, breakdown with "estimate" tags, VAT, per-guest / per-day / per-m²-month, included/not included, assumptions, "updated" date, copy-link
- [x] Mobile sticky summary bar (hides while the results panel is on screen; lifts the WhatsApp float)
- [x] Right-to-left check in Arabic (browser, 2026-10-05), keyboard: native radios/buttons/switches with labels, `aria-live` on the total
- [ ] Real screen-reader pass (NVDA/VoiceOver) — not done yet

- [x] Header menu item "Cost Calculator" (`nav.calculator`), footer links, sitemaps

## Phase 3 — Leads

- [x] `formType: 'calculator'` payload + `quoteRef` + `leadScore` (04) — `src/lib/calculator/lead.ts`. Lists are sent as joined strings (one sheet column each), not arrays
- [x] WhatsApp handoff (capture first with `keepalive`, then `wa.me`, then `/thank-you`), EN/AR message via `encodeURIComponent`
- [x] "Send me this quote" form (`QuoteLeadForm`) with partial capture on valid name + phone, honeypot, reCAPTCHA; success shows quote ref + printable quote + WhatsApp
- [x] Callback via `CallbackModal` with the setup attached (`openCallback(context)` in `ModalProvider`; prefills emirate + use, shows a summary line)
- [x] Printable quote page `/[locale]/tent-cost-calculator/print?c=…&ref=…` (noindex) + print stylesheet in `globals.css`
- [x] zod check + 16 KB cap on `/api/capture-lead` (flat objects only; `formType` must be quote/callback/calculator; calculator leads need a valid `quoteRef`, `shareUrl`, etc.)
- [ ] Google Sheet: `Calculator` tab/columns ready **before** launch — **owner task** (Apps Script must accept the new keys, see payload in 04)
- [ ] (v2) Email copy via an email provider. Choose SendGrid vs Resend first

## Phase 4 — Content and SEO

- [x] EN + AR written content, sections 1–10 (05) — `src/data/calculator/content.ts` (server-only, not in messages)
- [x] Price tables in the content generated from `rates.ts` (`src/lib/calculator/tables.ts`)
- [x] `WebApplication` + `FAQPage` + `BreadcrumbList` schema
- [x] Metadata, canonical, hreflang, dedicated OG image (`opengraph-image.tsx`, generated from the rates). Page is now **indexable**
- [x] Add to the 3 live sitemaps (one `mainPages` entry in `src/app/sitemap.ts` feeds all three)
- [x] Internal links: `CalculatorBanner` on `/pricing`, `/services/[slug]`, storage-tents hub, location + city pages, 3 price blogs; footer links; `llms.txt` (its pricing figures are hand-copied, update them when rates change)
- [x] Update `PricingNote` date text (now reads `RATES_UPDATED`)
- [ ] Make `/pricing` ranges match the calculator — **agreed 2026-10-06: owner is getting updated prices; then update `rates.ts` and match `/pricing` (and `llms.txt`) to it.** Gap today: calculator is 2–5× higher (e.g. 50-guest home majlis 2 days AED 28,850–36,050 vs `/pricing` 7,000–12,000; storage 22–35/m²/month vs 10–25). `/pricing` also says permits are included

## Phase 5 — Launch

- [x] `npm run type-check` + `npm run build` clean (2026-10-06)
- [x] Test a lead end to end against a local mock webhook: WhatsApp, quote form (partial + complete) and callback all arrive with the right fields. **Repeat against the real Sheet after deploy**
- [ ] Commit (no private data, check with `git diff --cached`) → push → check the Vercel deploy
- [ ] Search Console: request indexing for both locales
- [ ] (needs analytics wiring) GA4 events + conversions
- [ ] Update `PROJECT-KB.md` (route inventory, §8 lead capture, change log) and the README status log

## Acceptance criteria

1. Known invoice cases reproduce exactly at +10% (before the range is applied).
2. Every rate carries a `confidence`. Estimated lines widen the range (×1.25) and show an "estimate" label. Rates with no basis (`null`) show "Price on request" and still capture a lead.
3. The price tables in the written content and the calculator always show the same numbers (one rates file).
4. Every lead reaches the Sheet **before** WhatsApp opens, with `shareUrl` reopening the exact setup.
5. EN and AR are both complete. The right-to-left layout has no mirroring bugs.
6. Nothing committed contains client names, invoice numbers, bank details or raw rates.
