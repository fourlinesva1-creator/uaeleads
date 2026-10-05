# 05 — Page, Content and SEO

---

## URL and metadata

| Item | Value |
|---|---|
| Route | `src/app/[locale]/tent-cost-calculator/page.tsx` → `/en/tent-cost-calculator`, `/ar/tent-cost-calculator` |
| Title (EN) | `Tent Rental Cost Calculator UAE 2026 — Instant Estimate \| Tent Now` |
| Title (AR) | `حاسبة تكلفة تأجير الخيام في الإمارات 2026 — تقدير فوري \| Tent Now` |
| Meta description (EN) | Free tent rental cost calculator for Dubai, Abu Dhabi & all UAE. Pick size, guests, AC and add-ons to see a price range, what's included, and get an exact quote on WhatsApp. |
| Canonical / hreflang | Absolute `https://www.tentnow.ae/...` with `en`, `ar`, `x-default` (site convention) |
| OG image | A dedicated image showing the calculator UI (the homepage OG image is already a 404, so don't copy it) |

### Target keywords

| Primary | Secondary |
|---|---|
| tent rental cost calculator | tent rental price Dubai · tent rental cost UAE · how much does a tent cost to rent |
| tent rental price UAE | iftar tent cost · majlis tent rental price · Ramadan tent price |
| حاسبة تكلفة الخيام | سعر تأجير خيمة · أسعار خيام رمضان · تكلفة خيمة مجلس |
| storage tent cost per sqm | warehouse tent rental price · industrial tent rent per month |

The Arabic searches have **no competitor**, so treat the Arabic page as a full page, not a translation afterthought.

---

## Page layout (top to bottom)

1. **Breadcrumb** → Home › Pricing › Tent Cost Calculator
2. **H1** + one-line promise + "Prices updated <date>" + note that prices exclude VAT
3. **Calculator** (presets → inputs → results panel with included/not included → lead buttons)
4. `PricingNote` disclaimer (**update its stale "December 2025" text** to read `RATES_UPDATED`)
5. **Written content**, rendered on the server, about 1,200–1,800 words per language:

| # | H2 | Content |
|---|---|---|
| 1 | How tent rental pricing works in the UAE | Per-day events vs per-m² long-term; why small tents cost more per m² |
| 2 | Typical tent prices (2026) | Tables **generated from the rates file** for events and long-term |
| 3 | What size tent do I need? | Space-per-guest table (majlis, banquet, theatre, standing) + example sizes |
| 4 | What's included and what costs extra | The same included/not included lists the calculator uses |
| 5 | Air conditioning: how many tons? | Summer vs winter sizing, why it drives cost |
| 6 | Permits by emirate | Civil Defence + municipality, the AED 10,000 fine for unpermitted tents, "we handle permits" |
| 7 | Ramadan peak season: book early | Ramadan 2027 timing, lead times, link to the Ramadan 2027 page |
| 8 | Storage tent vs renting a warehouse | AED/m² comparison, link to the Abu Dhabi storage case study |
| 9 | Worked examples | 3 or 4 real setups ("150-guest corporate iftar, 2 days, Dubai → AED X–Y") with a "load this setup" button |
| 10 | FAQ | 8–10 questions, in `FAQSchema` |

6. **Final call to action**: WhatsApp + request quote + phone
7. **Related links**: `/pricing`, `/services/iftar-tent-rental`, `/services/storage-tents`, `/blog/ramadan-tent-pricing-guide-uae-2026`, `/portfolio/abu-dhabi-storage-tent`

---

## Structured data (reuse `src/components/seo/`)

| Schema | Component | Notes |
|---|---|---|
| `WebApplication` | new, via the `JsonLd` primitive | `applicationCategory: "BusinessApplication"`, `operatingSystem: "Any"`, `offers: { price: 0, priceCurrency: "AED" }`, `inLanguage` |
| `FAQPage` | `FAQSchema` | FAQ text must match what's visible on the page |
| `BreadcrumbList` | `BreadcrumbSchema` | |
| `Service` + `PriceSpecification` | as on `/pricing` | Built from the rates file so the numbers match |

Don't add HowTo markup. Google no longer shows HowTo rich results.

---

## Internal linking (add links **to** the calculator)

- `/pricing`: banner near the top, "Calculate your exact setup →"
- Header or footer nav: "Cost Calculator"
- Every service page's price section and every location page's call to action
- Blog posts about price: `ramadan-tent-pricing-guide-uae-2026`, `tarpaulin-price-guide-uae-2026`, `tent-rental-uae`
- `llms.txt`: list the calculator page and what it does (for AI search)

## Sitemaps

Add the route to **`src/app/sitemap.ts`, `src/app/en/sitemap.ts` and `src/app/ar/sitemap.ts`**.
Do **not** edit `src/app/[locale]/sitemap.xml/route.ts`. It's hidden behind the other routes and
never serves (`PROJECT-KB.md` §7). After deploying, submit the URL in Search Console. Only 46 pages are indexed
today, so request indexing directly.

## Keeping it ranking

- Change `RATES_UPDATED` whenever rates change. The visible "updated" date is a freshness signal.
- Add real worked examples from new jobs each season.
- v3: the embeddable widget earns backlinks.
