# Tent Now — Project Knowledge Base

> Living reference for `tentnow.ae`. Verified against the codebase on **2026-09-21**
> (build: 227 static pages, `tsc --noEmit` clean).
> Companion to `CLAUDE.md` — that file holds the rules, this one holds the facts.

---

## 1. What this is

A premium, bilingual (EN/AR) lead-generation site for **Tent Now** — tent, majlis and
shade-structure rental across all seven UAE Emirates. Built by **Fourlines Agency**;
credited in the footer as "Designed by ReachXL UAE" (`reachxl.com`).

The site sells four distinct verticals, not one:

| Vertical | Entry point | Audience |
|---|---|---|
| Ramadan / majlis tents | `/services/iftar-tent-rental`, `/locations/*` | Villas, hotels, corporates (seasonal) |
| Storage & industrial tents | `/services/storage-tents` | Construction, logistics, oil & gas |
| Shade structures | `/services/shade-structures` | Parking, pools, gardens, walkways, play areas |
| Tarpaulins | `/services/tarpaulins` | Product sale (PE 200gsm), not rental |

**Business is seasonal.** Ramadan 2026 drives the majlis/iftar demand curve; the storage,
shade and tarpaulin verticals exist to carry revenue through the rest of the year.

### Brand positioning — Tent Now is independent

**As of 2026-09-21, Tent Now presents itself as a fully independent company.** All
parent-, sister- and inherited-expertise framing referencing **Mumtaz Tents / Mumtaz
Group** was removed from the site, and the outbound link to `almumtaztents.com` was
deleted. See [§10](#10-change-log) for exactly what changed.

Two consequences to respect in all future content:

- **Never reintroduce** Mumtaz as parent, sister, group, or source of expertise.
  The only surviving mention is a neutral third-party listing in the
  `top-tent-suppliers-uae-2026` blog, where Mumtaz appears as supplier `05` among ten —
  deliberately kept, deliberately unlinked, with no relationship claim.
- The site still claims **"30+ years of experience"** and **"since 1994"** (footer,
  about page, `experience` namespace, several blogs). That claim originally rested on
  the Mumtaz lineage. It was left untouched because removing the affiliation was the
  instruction, not restating the track record — but it is now **asserted on Tent Now's
  own account** and should be confirmed defensible before the next content push.

---

## 2. Stack

| Concern | Choice |
|---|---|
| Framework | **Next.js 16.1.6**, App Router, React 19.2 |
| Language | TypeScript 5.9 (strict; `npm run type-check` is clean) |
| i18n | **`next-intl` 4.7** — locales `en`, `ar`; `localePrefix: 'always'` |
| Styling | **Tailwind CSS v4** (PostCSS plugin, no `tailwind.config.js`) |
| Icons | `lucide-react` |
| Forms | `react-hook-form` + `zod` + `@hookform/resolvers` |
| Sharing | `react-share` |
| Hosting | Vercel |

`framer-motion` is named in `CLAUDE.md` as planned but is **not installed** — all
animation is CSS (`animate-fade-in-up`, `image-zoom-container`, Tailwind transitions).

### Commands

```bash
npm run dev          # local dev
npm run build        # production build — 227 static pages
npm run type-check   # tsc --noEmit
npm run lint         # next lint
```

---

## 3. Design tokens

| Token | Value | Notes |
|---|---|---|
| Background (dark) | `#101622` | Also hardcoded literally in many files |
| Elevated surface | `#1a212e` | Cards, panels |
| Border | `#282e39` | |
| Gold (primary accent) | `#D4AF37` | `text-gold`, `btn-gold`, `btn-gold-fill` |
| Blue | `#1152d4` | Rarely used |
| Muted text | `#9da6b9` | `text-text-muted` |

**Gotcha:** tokens exist as Tailwind classes *and* as raw hex literals scattered through
the JSX (`bg-[#101622]`, `text-[#9da6b9]`). A palette change requires a hex sweep, not
just a config edit.

---

## 4. Routing and i18n

`src/i18n/routing.ts` — locales `['en','ar']`, default `en`, **prefix always**. So every
URL is `/(en|ar)/...`; there is no unprefixed canonical page.

- **Always** import `Link` from `@/i18n/navigation`, never `next/link`. The former keeps
  the locale prefix; a raw `<a href="/contact">` silently drops it.
  One such bug survives at `src/app/[locale]/portfolio/page.tsx:145`.
- Arabic pages must carry `dir="rtl"`. Blog pages set it per-page:
  `dir={locale === 'ar' ? 'rtl' : 'ltr'}`.
- `setRequestLocale(locale)` is required in every server page for static rendering.

### Route inventory

```
/[locale]                                  home
/[locale]/about  /contact  /faq  /pricing  /privacy  /portfolio
/[locale]/request-quote  /thank-you
/[locale]/blog                             index + 13 post routes
/[locale]/services                         hub
/[locale]/services/[slug]                  8 slugs, translation-driven
/[locale]/services/<15 hardcoded pages>    shades, storage tents, tarpaulins, iftar-by-city
/[locale]/locations                        hub
/[locale]/locations/[city]                 7 cities
/[locale]/locations/[city]/[slug]          7 cities x 8 slugs, gated on content existing
/api/capture-lead  /api/verify
```

`/[locale]/services/[slug]` — `serviceMap` in that file:
`hotel-majlis, corporate-events, home-majlis, iftar-tent-rental, suhoor-tent-rental,
sadu-tent-rental, furniture-rental, decor-lighting`.

`/[locale]/locations/[city]/[slug]` — cities `dubai, abu-dhabi, sharjah, ajman,
ras-al-khaimah, fujairah, umm-al-quwain` × slugs `ramadan-tent-rental,
majlis-tent-rental, iftar-tent-rental, suhoor-tent-rental, sadu-tent-rental,
storage-tent-rental, warehouse-tent-rental, labor-accommodation-tents`.
`generateStaticParams` only emits a combination when `cityContent['en'][city][slug]`
exists, so **adding content to the data file is what creates the page** — the route
list is data-driven, silently.

---

## 5. Where content actually lives

Three different mechanisms, and knowing which one owns a string is the main thing to
learn about this repo:

| Mechanism | Location | Owns |
|---|---|---|
| **Translation JSON** | `src/messages/en.json`, `ar.json` | Nav, footer, hero, services, testimonials, portfolio labels, about (`experience.ourStory`) |
| **Typed data files** | `src/data/*.ts` | Long-form SEO copy for cities, shades, storage tents, tarpaulins — **EN and AR side by side in one object** |
| **Hardcoded JSX** | `src/app/[locale]/blog/*/page.tsx` | Every blog post body, both languages |

### `src/data/`

| File | Lines | Exports |
|---|---|---|
| `city-content.ts` | 2107 | `cityOverviews`, `cityContent` (keyed `locale → city → slug`) |
| `storage-tent-content.ts` | 570 | hub + `clearSpan`, `warehouse`, `industrial` |
| `shade-structures-content.ts` | 314 | `shadeStructuresHubContent` |
| `tarpaulin-content.ts` | 318 | `tarpaulinSizes`, `tarpaulinContent` |
| `parking-shade-content.ts` | 265 | `parkingShadeHubContent` |

### Blog posts — the big caveat

13 posts, **8,006 lines** of JSX. Each post file holds **both languages inline**, split
by a top-level ternary (`locale === 'ar' ? (<>…</>) : (<>…</>)`), with
`{/* ===== ENGLISH CONTENT ===== */}` marker comments. Six posts use this pattern.

This means:

- A copy change usually has to be made **twice per file**, once per language block.
- Both blocks are frequently near-identical in structure, so **a find-and-replace that
  matches once has probably missed the other language.** Always assert the match count.
- Largest files: `uae-drone-missile-survival-guide-2026` (986), `tent-rental-uae` (985),
  `ramadan-tent-pricing-guide-uae-2026` (923).

Arabic caution: **`ممتاز` is the ordinary adjective "excellent"** and appears in pricing
tables and comparison grids. It is *not* a brand reference. Only `مجموعة ممتاز` /
`مجموعة شركات ممتاز` / `الشركة الأم` were affiliation strings.

---

## 6. Media

### Current state (measured, `public/images`)

| Metric | Value |
|---|---|
| Files on disk | **246** (55.0 MB) |
| Referenced by code | **51** |
| **Unreferenced** | **195 files — 43.9 MB (~80% of the folder)** |
| **Broken references** | **3** |
| Videos | **0** — no video files, no `<video>`, no embeds |

`public/` ships wholesale to Vercel, so **~44 MB of unused images is deployed on every
build**. Worst offenders: `/images/portfolio` (127 files, 33.5 MB),
`/images/gallery` (24 files, 3.4 MB), `/images/portfolio/new post` (16 files, 2.2 MB).

### Broken image references — live bugs

| Path referenced | Where |
|---|---|
| `/images/og-homepage.jpg` | `src/app/[locale]/page.tsx:40` — **homepage OG image; social shares have no preview.** `og-image.jpg` exists and is probably the intended file |
| `/images/blog/uae-survival-guide-hero.jpg` | `blog/page.tsx:117,235` + `uae-drone-missile-survival-guide-2026/page.tsx:32,43,71,502` (6 refs) |
| `/images/pattern-dark.png` | `blog/page.tsx:300` — CSS background, fails silently |

### Naming and duplication

`public/images` carries its import history in its filenames: `WEB/New folder (2)/`,
`portfolio/new post/`, `WhatsApp Image 2024-02-02 at 12.22.31_347a7ef2.jpg`,
`1 (1).jpg` … `7 (8).jpg`. Spaces and parentheses in paths break naive shell globbing —
use null-delimited or Python path handling when scripting over them.

Known duplicate pairs (same bytes, both present): `gulf food.jpg` / `gulf-food.jpg`,
`wedding marquee.jpg` / `wedding-marquee.jpg`, `97.jpg` / `97 (1).jpg`.
Several files are also byte-identical across folders (`locations/abu-dhabi.jpg` =
`tent-now/abu-dhabi.jpg` = `portfolio/307336654_…jpg`).

`public/images/RMT-Logo.png` is a **leftover from the previous brand** (RMT) and is
unreferenced; the live logo is `/images/tent-now-logo.gif` (a 2.3 KB GIF used in the
footer — a raster GIF for a logo is worth replacing with SVG).

### Rules when touching media

- `next/image` only, with real `sizes` and descriptive `alt` (per `CLAUDE.md`).
- `next.config.ts` already serves AVIF/WebP with a tuned `deviceSizes` ladder — no
  per-image conversion needed, but **source files should still be trimmed**; three
  used blog images exceed 700 KB (`ramadan-night-market.png` at 968 KB).
- `Portfolio.tsx` repeats `home-majlis.jpg` at index 0 and 3 — the homepage grid shows
  the same photo twice.

---

## 7. SEO apparatus

This site is SEO-heavy and the machinery is already dense — **read before adding.**

**Schema components** (`src/components/seo/`): `BusinessSchema`, `WebsiteSchema`,
`ServiceSchema`, `FAQSchema`, `BreadcrumbSchema`, `AggregateRatingSchema`,
`CityLocalBusinessSchema`, and a `JsonLd` primitive. `BlogSchema` lives in
`components/blog/`.

- `CityLocalBusinessSchema` sets `parentOrganization` to **Tent Now itself**
  (`https://www.tentnow.ae/#business`) — correct, and unaffected by the Mumtaz removal.

**Every page** sets `alternates.canonical` plus `languages` with `en`, `ar` and
`x-default`. Canonicals are absolute `https://www.tentnow.ae/...`. Three helper scripts
in the repo root (`fix_canonicals.py`, `fix_canonicals_all.py`, `fix_apostrophes.py`)
were one-off migrations — historical, not part of the build.

**`robots.ts`** allows all crawlers plus an explicit AI-crawler allowlist (`GPTBot`,
`ClaudeBot`, `PerplexityBot`, `Google-Extended`, …) for AI-search visibility.
`public/llms.txt` exists.

### Sitemaps — four generators, one is dead

| Route | Source | Status |
|---|---|---|
| `/sitemap.xml` | `src/app/sitemap.ts` (202 lines) | static, declared in robots |
| `/en/sitemap.xml` | `src/app/en/sitemap.ts` | static, declared |
| `/ar/sitemap.xml` | `src/app/ar/sitemap.ts` | static, declared |
| `/[locale]/sitemap.xml` | `src/app/[locale]/sitemap.xml/route.ts` (185 lines) | **dynamic — shadowed** |

The static `/en` and `/ar` routes win over the dynamic `[locale]` segment, and `en`/`ar`
are the only locales, so those **185 lines never serve a request** while duplicating the
URL logic. Editing the wrong one is a silent no-op — a real trap.

### Search Console context (from memory, May–Jun 2026)

28-day window: 19 clicks, 1,377 impressions, **1.38% CTR**. Homepage sat at position 42;
the Ramadan Calendar post took 283 impressions with **0 clicks**; ~77% of pages had zero
CTR. Traffic is impression-rich and click-poor — a titles/meta and intent-match problem
more than a coverage problem.

---

## 8. Lead capture

| Piece | Detail |
|---|---|
| Forms | `components/forms/QuoteForm.tsx`, `ContactForm.tsx` (RHF + Zod) |
| Endpoint | `POST /api/capture-lead` |
| Anti-spam | reCAPTCHA v3 — `hooks/useRecaptcha.ts` + `POST /api/verify` |
| Modal path | `components/ui/CallbackModal.tsx` via `ModalProvider` (Hero "request callback") |
| Direct channels | WhatsApp `wa.me/971501826969`, tel `+971501826969` — hardcoded in Hero, Footer, `WhatsAppButton` |
| Success | `/[locale]/thank-you` |
| Calculator leads | `formType: 'calculator'` from `/[locale]/tent-cost-calculator` (WhatsApp, quote form, callback with setup attached). Payload + score in `src/lib/calculator/lead.ts`; spec in `kb/tent-cost-calculator/04-lead-capture.md` |
| Validation | `/api/capture-lead` accepts only flat JSON ≤ 16 KB with `formType` quote/callback/calculator (zod) |

Env (`.env.example`): Postgres (`POSTGRES_*`), SendGrid (`SENDGRID_API_KEY`,
`EMAIL_FROM`), analytics (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`), reCAPTCHA
(`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`, `RECAPTCHA_SECRET_KEY`), WhatsApp number.

**The phone number is duplicated across many files** — changing it means a project-wide
sweep, not a config edit. Worth centralising.

Business NAP: **SAIF Zone, Sharjah, UAE**. Socials: `x.com/tentnowae`,
`facebook.com/tentnow`.

---

## 9. Known issues — ranked

| # | Issue | Where | Impact |
|---|---|---|---|
| 1 | Homepage OG image 404s | `[locale]/page.tsx:40` | Every social share of the homepage renders without a preview |
| 2 | Survival-guide hero image missing (6 refs) | `blog/page.tsx`, `uae-drone-.../page.tsx` | Broken blog card + broken OG/Twitter image |
| 3 | 195 unreferenced images, 43.9 MB | `public/images` | Deployed dead weight on every build |
| 4 | 185-line sitemap generator is shadowed | `[locale]/sitemap.xml/route.ts` | Edits there silently do nothing |
| 5 | Raw `<a href="/contact">` | `portfolio/page.tsx:145` | Drops locale prefix, full page reload |
| 6 | `pattern-dark.png` missing | `blog/page.tsx:300` | Blog header texture silently absent |
| 7 | Duplicate image in homepage grid | `Portfolio.tsx` idx 0 & 3 | Same photo twice |
| 8 | `RMT-Logo.png` — previous brand | `public/images/` | Stale asset, unreferenced |
| 9 | Logo is a 2.3 KB GIF | `tent-now-logo.gif` | Should be SVG |
| 10 | Phone number hardcoded in many files | Hero, Footer, WhatsAppButton, schema | Error-prone to change |
| 11 | No video anywhere | — | See §11 |
| 12 | Stale agent worktree in repo | `.claude/worktrees/agent-aa7af…/` | Full duplicate tree, gitignored; still holds the removed Mumtaz PDF |

Repo root also holds ~25 planning/research `.md` files, three `.pdf`s, a `.docx`, four
one-off Python scripts and a stray `nul` file — historical working material, not build
inputs.

---

## 10. Change log

### 2026-10-06 — Tent cost calculator (Phases 3–4)

- New route `/[locale]/tent-cost-calculator` (+ `/print`, `opengraph-image`), in all 3 sitemaps, indexable.
- Lead capture: `formType: 'calculator'`; `ModalProvider.openCallback(context?)` can attach a payload.
- `PricingNote` now shows `RATES_UPDATED` instead of "December 2025".
- `CalculatorBanner` links added to `/pricing`, service, location and price-blog pages; footer links to Pricing + Calculator.

### 2026-10-04 — SEO fixes from Search Console review

Search Console (3 months to Sep 29): 130 clicks, 11.1K impressions, avg position 10.5.
Only **46 pages indexed**; 161 "Discovered, not indexed", 22 "Crawled, not indexed".

- **Titles:** layout template is now `%s | Tent Now`; hardcoded ` | Tent Now` / ` - Tent Now`
  suffixes stripped from page titles (they doubled up as "| Tent Now | Tent Now UAE").
  `[locale]/page.tsx` and `layout.tsx` keep theirs (same segment, no template applied).
  New titles for About, Contact, FAQ, Portfolio, Request Quote; city-service title
  subtitles dropped. Abu Dhabi + Sharjah hub title/description rewritten for CTR.
- **Redirects:** `src/middleware.ts` turns next-intl's 307 for un-prefixed paths into 308.
  `/` stays 307 (locale detection). Matcher regex needs `\\.` — a heredoc once ate the
  backslash and every un-prefixed URL 404'd.
- **hreflang:** `alternateLinks: false` in `src/i18n/routing.ts`. The middleware Link header
  pointed x-default at the un-prefixed URL, contradicting the `<head>` tags.
- **Pruning:** `noindexCitySlugs` (suhoor, sadu) in `city-content.ts` → `noindex, follow` and
  dropped from sitemaps (18 URLs). Pages stay live.
- **Internal links:** city hubs now link storage / warehouse / labor sub-pages first (suhoor
  and sadu links removed); Abu Dhabi hub links the storage case study; footer "City Pages"
  now point at the city hubs instead of the Ramadan sub-pages.
- **New page:** `/blog/ramadan-calendar-uae-2027` (expected start 8 Feb 2027, Eid 9/10 Mar —
  IAC estimates; update when UAE confirms). Linked from blog index, sitemap, 2026 page.
- Found, not fixed: `/services/corporate-events` renders "Labor Accommodation Tents" and
  `/services/decor-lighting` renders "Cold Storage Tents" (repurposed `services.items`), but
  links across the site still call them "Corporate Events" / decor.

### 2026-10-04 — Abu Dhabi storage tent case study + homepage hero

- New page `/[locale]/portfolio/abu-dhabi-storage-tent` — content in
  `src/data/abu-dhabi-storage-tent-project.ts` (EN + AR). Facts: 4,000 sqm = 1 x 30x20m +
  2 x 20x85m, PVC roof, all sides closed, standard lighting, roller shutter doors, goods storage.
- Source photos: `images/new 9-21-26/` (**not** `images/2026 images/`, which is an event/iftar
  tent job). Graded + resized into `public/images/projects/abu-dhabi-storage-tent/`; interior
  shot cropped to remove third-party product branding on boxes.
- Homepage hero now uses the project photo (matches the "Industrial Storage Tents" copy);
  homepage portfolio grid features the project and no longer repeats `home-majlis.jpg`.
- `/images/og-homepage.jpg` created — fixes known issue #1.
- Featured card on `/portfolio` and `/services/storage-tents`; sitemap + image sitemap updated.
- `portfolio/page.tsx` raw `<a href="/contact">` replaced with locale `Link` — fixes issue #5.
- Found: `btn-gold-fill` is used on several pages but **not defined** in `globals.css`, so
  those CTAs render unstyled. Not fixed site-wide; the new page uses `btn-gold`.

### 2026-09-21 — Mumtaz affiliation removed; independent positioning

Instruction: Tent Now operates independently from now on. Remove all parent- and
sister-company framing. Keep the neutral supplier listing in the Top 10 blog.

| File | Change |
|---|---|
| `[locale]/about/page.tsx` | Deleted the "We are a proud subsidiary of Mumtaz Group of Companies" paragraph and its `almumtaztents.com` link |
| `messages/en.json`, `ar.json` | Removed `experience.ourStory.subsidiaryPre` and `.mumtazGroup` (both locales) |
| `blog/top-tent-suppliers-uae-2026/page.tsx` | Entry `05` **kept**; heading unlinked (now plain text, matching the other nine); "is the parent company of Tent Now" / "وهي الشركة الأم لـ Tent Now" removed from EN + AR descriptions |
| `blog/tent-rental-uae/page.tsx` | "backed by the expertise of Mumtaz Group" (EN intro), "المدعومة بقدرات مجموعة ممتاز" (AR intro), and "decades of experience through Mumtaz Group" (Why-Choose card 01) all rewritten to stand on Tent Now's own experience |
| `branding.md`, `tentforrentuae.md`, `toptentpost.md` | Same framing scrubbed from internal source docs so it can't creep back into new copy |
| `public/images/portfolio/about us/Mumtaz-Tents-PDF.pdf` | **Deleted** (5.6 MB, unreferenced, was publicly reachable by direct URL). Git-tracked → recoverable |
| `images/New folder (2)/about us/Mumtaz-Tents-PDF.pdf` | **Deleted** (gitignored → backed up to the session scratchpad first) |

Verified: `tsc --noEmit` clean; build clean (227 pages); `almumtaztents` and
"proud subsidiary" / "parent company of Tent Now" absent from `.next` output; built
`en/about.html` and `ar/about.html` contain zero Mumtaz hits.

Not touched: `.claude/worktrees/agent-aa7af…/` still contains a copy of the PDF (stale
agent worktree, gitignored, not published). Delete the worktree when convenient.

---

## 11. Open work

**Tent cost calculator** — public EN/AR calculator page with lead capture, started
2026-10-05. Full spec, pricing model and build checklist in
[`kb/tent-cost-calculator/`](kb/tent-cost-calculator/README.md). Built and indexable (2026-10-06); launch waits
on the Google Sheet columns, an owner decision on `/pricing` ranges + permits, and the push. Rates refine as invoices arrive.

**Content, image and video refresh** — the active brief. Media notes:

- **Video is greenfield.** No video files, no `<video>` element, no YouTube/Vimeo embed
  exists. The `aspect-video` classes in the blogs are Tailwind *aspect-ratio* utilities
  on image containers, not players — don't mistake them for a video implementation.
  Self-hosting MP4s in `public/` would add to a folder that is already 80% dead weight
  and has no CDN transcoding; a hosted embed or Vercel-friendly streaming source is the
  better default. Decide before adding assets.
- **"Recent projects"** is driven by two independent hardcoded lists that must be kept in
  sync by hand: `components/sections/Portfolio.tsx` (5 homepage images) and
  `[locale]/portfolio/page.tsx` (`portfolioItems`, 8 entries keyed to
  `portfolio.items.*` translations). Adding a project means editing the array **and**
  both locale JSONs.
- Fix the three broken references (§6) as part of the image pass — they are already bugs.
- Prune the 195 unreferenced files before adding more.

---

## 12. Conventions

- **GitHub Flavored Markdown** for all documentation (`CLAUDE.md` rule).
- PascalCase components, camelCase hooks/functions.
- Dynamic pages must use `generateStaticParams` for SSG.
- All components must handle `dir="rtl"`.
- `next/image` with proper `sizes` and `alt`.
- Locale-aware `Link` from `@/i18n/navigation` — never `next/link`.
- When editing bilingual blog JSX, **assert the replacement count**; near-identical EN
  and AR blocks make single-match replacements a silent half-edit.
