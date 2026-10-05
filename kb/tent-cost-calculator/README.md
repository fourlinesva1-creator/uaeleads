# Tent Cost Calculator — Knowledge Base

> Public, bilingual (EN/AR) tent cost calculator for `tentnow.ae`.
> Started **2026-10-05**. Status: **built — Phases 1–4 done; Phase 5 (launch) waits on owner: Sheet columns, /pricing decision, push.**
> The calculator sits at the top of the page. Below it is long-form content that explains the pricing and helps the page rank.

---

## Reading order

| # | File | What it holds |
|---|---|---|
| 1 | [01-competitor-research.md](01-competitor-research.md) | What exists online, what it misses, and where we can win |
| 2 | [02-features.md](02-features.md) | Full feature spec, with each feature tagged MVP, v2 or v3 |
| 3 | [03-pricing-engine.md](03-pricing-engine.md) | Pricing model, formulas, the +10% markup, VAT, public rates, data gaps |
| 4 | [04-lead-capture.md](04-lead-capture.md) | How leads flow, what we capture, the WhatsApp/email/PDF paths, anti-spam, tracking |
| 5 | [05-page-content-seo.md](05-page-content-seo.md) | Page layout, written sections, schema, keywords, internal links, sitemaps |
| 6 | [06-build-plan.md](06-build-plan.md) | Phased checklist, file map, acceptance criteria. **Resume at the first unchecked box.** |

---

## Locked decisions

| Decision | Value | Source |
|---|---|---|
| Audience | **Public**, on the website, not an internal sales tool | Owner, 2026-10-05 |
| Price level | **10% above** real invoice rates, to absorb market swings | Owner, 2026-10-05 |
| VAT | Prices shown **before VAT**, with the 5% VAT on its own line | Matches all invoices |
| Transparency | Every estimate shows **what is included and what is not** | Owner, 2026-10-05 |
| Ambition | "Advanced, feature-rich", built to outrank competitors | Owner, 2026-10-05 |
| Page shape | Calculator on top, written content below | Owner, 2026-10-05 |
| Lead feature | Required. Every estimate must have a clear path to a lead | Owner, 2026-10-05 |
| Estimate gating | The **estimate is never hidden behind a form**. Only the detailed quote/PDF asks for a phone number | See 04 |

---

## Confidentiality rules (read before committing anything)

- The GitHub repo `fourlinesva1-creator/uaeleads` is **PUBLIC**.
- Raw invoice data and scope files live only in `seo audit/`. The **whole folder is gitignored**. Private notes on
  where each price came from go in `seo audit/pricing/PRICE-SOURCES.md` (also ignored).
- **Never commit** client names, PO or invoice numbers, bank details, supplier letterheads, or
  raw (pre-markup) rates. Committed files hold only **public rates**, meaning invoice rate × 1.10.
- The source invoices carry the former parent company's letterhead. Tent Now is independent
  (see `PROJECT-KB.md` §1), so the site must never name that company or reference its documents.
- Public rates are bundled into the page's JavaScript, so anyone can read them. That's fine
  because they are the same prices the page displays.

---

## Status log

| Date | Event |
|---|---|
| 2026-10-05 | Competitor research done. KB created. Event rates for chairs, tables and the 5×5 canopy received. Owner is gathering more past invoices. |
| 2026-10-06 | Received: 8×10 majlis package (2 days, Sharjah), 1000 kVA generator (50 days). 10×50 and 10×10 tent prices received but missing duration and fit-out. 4,000 m² AC tent quote received, period unknown. |
| 2026-10-06 | Received: 1,000 m² tent-only for 90 days, 10×20 frame+PVC price (possibly a sale price), scope spec photos (AC sizing, space per person, standard inclusions). 6 new PDFs are 0 bytes, so re-download is needed. Estimated rates added with confidence levels. Asked the supplier partner for their costing sheet. |
| 2026-10-06 | Online market price list reviewed and **rejected by owner, not used**. Plan: wait for more invoice data (6 PDFs to re-download, supplier partner's costing sheet). If none arrives, **build with the current data and estimates in 03**. Session paused for the usage limit; resume after 4 pm at 06-build-plan.md Phase 0/1. |
| 2026-10-05 | Still no new data (6 PDFs still 0 bytes), so building with current data + estimates. **Phase 1 done:** `rates.ts`, `engine.ts`, `urlState.ts`, `scripts/check-calculator.mjs` (17 checks pass, `tsc` clean). Long-term "Standard" tier now includes AC to match its only data point. Next: Phase 2 UI. |
| 2026-10-05 | **Phase 2 done:** calculator UI at `/[locale]/tent-cost-calculator` (EN/AR, `noindex` until Phase 4). Checked in the browser: presets, long-term, typing, share link reopening in Arabic, RTL, 390 px mobile bar. `npm run build` clean. "Get my exact quote" links to `/request-quote` for now; Phase 3 replaces it with capture + WhatsApp. Permits are listed as *not included (fees confirmed in quote)* while the owner decides, which contradicts `/pricing` ("all permits included"). |
| 2026-10-06 | **Phases 3–4 done:** lead capture (WhatsApp, quote form with ref + printable quote, callback with setup attached, zod on `/api/capture-lead`), EN/AR content + generated price tables, schema, OG image, sitemap, internal links, `PricingNote` date. Page now indexable. Build clean; leads tested against a mock webhook. Open: owner sets up Sheet columns, decides `/pricing` ranges + permits, approves push. |
| 2026-10-06 | Calculator added to the header menu. Owner is collecting **updated prices**; when they arrive, update `rates.ts` (+ `RATES_UPDATED`) and make `/pricing` and `llms.txt` match the calculator. Committed locally, not pushed yet. |
