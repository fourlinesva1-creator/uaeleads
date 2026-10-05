# 02 — Feature Spec

> Tags: **MVP** = must ship at launch · **v2** = shortly after launch · **v3** = later differentiators.
> Features marked ⛔ need data we don't have yet (see [03](03-pricing-engine.md#data-gaps)).

---

## A. Calculator core

| # | Feature | Tag | Notes |
|---|---|---|---|
| A1 | **Mode switch**: *Event / Ramadan* (per day) vs *Long-term* (per m² per month) | MVP | Two engines that share one rates file |
| A2 | **Use-case presets**: Home majlis, Corporate iftar, Hotel majlis, Wedding, Storage/warehouse, Labour camp/site office, Dining hall, Sleeping/accommodation | MVP | Each preset fills in defaults (e.g. 4 m²/guest majlis, 2 m² dining, 6 m² sleeping) |
| A2b | **Fit-out tier** for long-term: Tent only / Standard / Full fit-out | MVP | See 03 |
| A3 | **Guests → size suggester**: guest count + seating style (+ bars, buffets, stage) → suggested m² and nearest standard tent size | MVP | Uses the space-per-guest table in 01. The visitor can change the size |
| A4 | **Manual size** input (L × W in m), rounded to available sizes | MVP | |
| A5 | **Duration**: days (events), months (long-term), plus a "Full Ramadan (30 days)" shortcut | MVP ⛔ | Pricing per extra day is still a data gap |
| A6 | **Walls**: open / 1 / 2 / 3 / all sides closed | MVP ⛔ | Price of each side needed |
| A7 | **Add-ons the visitor switches on and off**: flooring, carpet, lining, lighting, AC, doors (single / double / roller shutter), fire extinguisher and exit signs | MVP ⛔ | |
| A8 | **Furniture**: chairs, tables with cover, majlis sofas, round tables, beds (long-term) | MVP (chairs/tables), v2 (rest) | |
| A9 | **AC estimate**: m² × season → tons/units and cost (summer 1 TR per 8 m², winter 1 TR per 15 m²; see 03) | MVP | Unique in the market. Rule taken from the scope spec |
| A10 | **Emirate selector**: delivery/setup adjustment + permit note for each emirate | MVP ⛔ | |
| A11 | **Event date**: flags Ramadan peak season and short notice (under 14 days) | v2 | Ramadan 2027 begins around 8 Feb 2027 |
| A12 | **Basic / Standard / Premium tiers** side by side | v2 | The same setup priced at three levels of fit-out |

## B. Results panel

| # | Feature | Tag |
|---|---|---|
| B1 | **Price range**, e.g. "AED 3,850 – 4,300 + VAT". Wider, with an "estimate" label, when any line is estimated (see 03) | MVP |
| B2 | **Itemised breakdown** with a cost per line, subtotal, 5% VAT and total | MVP |
| B3 | **Included ✓ / Not included ✗** list that changes with the selections | MVP |
| B4 | **Assumptions** listed (e.g. "level ground, 2 days, Dubai") | MVP |
| B5 | Per-day and per-guest cost ("≈ AED 26 per guest") | MVP |
| B6 | "Prices updated: <date>" label read from the rates file | MVP |
| B7 | Sticky summary bar on mobile (total + WhatsApp button) | MVP |

## C. Lead features (detail in [04](04-lead-capture.md))

| # | Feature | Tag |
|---|---|---|
| C1 | **"Get exact quote on WhatsApp"**: message filled with the full setup + estimate + share link | MVP |
| C2 | **"Send me this quote"** form (name, phone, email optional) → Google Sheet + quote reference | MVP |
| C3 | **Printable quote** (print stylesheet → "Save as PDF") with the quote reference, breakdown, inclusions and terms | MVP |
| C4 | **Shareable link**: the whole setup saved in the URL | MVP |
| C5 | **Callback request** (reuses `CallbackModal`) | MVP |
| C6 | **Email copy of the quote** to the customer and to sales | v2 (needs an email provider) |
| C7 | **Site visit request** for large/long-term jobs (over 1,000 m² or over 3 months) | v2 |
| C8 | Capture the phone number as soon as it's valid, before submit (same pattern as `QuoteForm`) | MVP |

## D. Differentiators

| # | Feature | Tag |
|---|---|---|
| D1 | **Top-down layout drawing** (SVG): tent outline + tables/chairs/sofas drawn to scale, updates as the visitor changes options | v2 |
| D2 | **Storage tent vs warehouse rent** comparison for long-term mode (AED/m²/month), linking to the Abu Dhabi case study | v2 |
| D3 | **Rent vs buy** break-even for long-term jobs over 12 months | v3 |
| D4 | **Permit helper**: which approvals each emirate needs + "permit handling included" | v2 |
| D5 | Compare two setups side by side | v3 |
| D6 | Embeddable widget for partners/blogs (earns backlinks, as Reservety does) | v3 |

## E. Cross-cutting requirements

- **Bilingual**: full EN/AR, right-to-left layout correct (mirrored layout, Arabic digits optional, AED formatting).
- **Works without JavaScript for content**: the written sections are rendered on the server. Only the calculator runs in the browser.
- **Accessible**: labelled inputs, keyboard support, `aria-live` on the total.
- **Fast**: no heavy libraries (no chart or PDF libraries); calculator script ≤ ~40 KB gzipped.
- **The prices in the written content come from the same rates file**, so the page can never contradict itself.
