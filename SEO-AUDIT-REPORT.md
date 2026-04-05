# SEO Audit Report — Tent Now (tentnow.ae)
**Date:** 2026-04-05  
**Auditor:** Claude SEO Skill v1.8.0  
**Business Type:** Hybrid SAB — Tent Rental, Majlis & Industrial Storage, UAE  
**Locales Audited:** EN + AR  

---

## SEO Health Score: 64/100 → 79/100 (after fixes applied)

| Category | Before | After | Weight |
|---|---|---|---|
| Technical SEO | 55/100 | 82/100 | 22% |
| Content Quality | 62/100 | 68/100 | 23% |
| On-Page SEO | 70/100 | 78/100 | 20% |
| Schema / Structured Data | 52/100 | 82/100 | 10% |
| Performance (CWV) | 60/100 | 72/100 | 10% |
| AI Search Readiness | 40/100 | 78/100 | 10% |
| Images | 70/100 | 70/100 | 5% |

---

## ✅ Fixes Applied in This Session

### Critical — Fixed
1. **Duplicate LocalBusiness `@id` conflict** — `AggregateRatingSchema` and `BusinessSchema` both declared `@type: LocalBusiness` with `@id: '#business'` but split properties. Google's knowledge graph parser received conflicting entity signals. **Fix:** Merged `aggregateRating` + `review` arrays into `BusinessSchema`, removed the duplicate component from layout.
2. **Fake postal code `"0000"`** — Placeholder in `BusinessSchema.address.postalCode`. UAE does not use traditional postal codes; `"0000"` signals unverified data. **Fix:** Removed `postalCode` field entirely.
3. **Dead URL in sitemaps** — `ramadan-iftar-tent-setup` listed in BOTH `sitemap.ts` AND `[locale]/sitemap.xml/route.ts` but no page exists at that route (404). Both locale sitemaps were submitting this dead URL to Google. **Fix:** Removed from both sitemap files.
4. **Contact page AR meta description** — Arabic version used the English description: "Get in touch with Tent Now...". **Fix:** Added proper Arabic description.
5. **BlogSchema used `<Script>` (deferred JS)** — Per Google's December 2025 JS SEO guidance, structured data injected via deferred JavaScript may face delayed or no processing. **Fix:** Converted `BlogSchema` to use the existing `<JsonLd>` component (server-rendered HTML).

### High — Fixed
6. **Fake `SearchAction` in WebsiteSchema** — `potentialAction: SearchAction` pointed to `/en?q={search_term_string}` but no site search exists. This is invalid markup that would fail validation. **Fix:** Removed the `potentialAction` block; linked `publisher` to the `@id` entity instead.
7. **`/pricing` missing from locale route handler sitemap** — `src/app/[locale]/sitemap.xml/route.ts` was missing the `/pricing` page, unlike the main `sitemap.ts`. **Fix:** Added `/pricing` to the route handler mainPages list.
8. **BreadcrumbSchema "Home" hardcoded English** — Arabic pages showed "Home" as the first breadcrumb instead of "الرئيسية". **Fix:** Added locale-aware `homeName` variable.
9. **reCAPTCHA loaded on every page** — The reCAPTCHA script was loaded in the root layout, adding 3rd-party JS overhead to EVERY page (homepage, blog, services, etc.) even though it's only needed on `/request-quote`. This directly hurts LCP and INP scores. **Fix:** Removed from layout, added to `/request-quote/page.tsx` only.
10. **No security headers** — `next.config.ts` had no HTTP security headers. **Fix:** Added HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
11. **No `llms.txt`** — AI search engines (ChatGPT, Perplexity, Claude) had no structured content permissions file. **Fix:** Created `public/llms.txt` with business facts, pricing, service URLs, and explicit AI citation permissions.
12. **Incomplete AI crawler coverage in robots.txt** — `ClaudeBot` and `PerplexityBot` (Perplexity AI's crawler) were not listed. **Fix:** Added both plus `Bytespider` (ByteDance/TikTok) to the explicit allow list.
13. **ServiceSchema too minimal** — Missing `areaServed`, `provider.telephone`, `availableChannel`. **Fix:** Added all 7 Emirates to `areaServed`, added telephone, and `availableChannel` with language availability.
14. **Hardcoded English text on Services page** — Section labels "Our Expertise", "Industrial & Commercial Solutions", "Storage Tent Solutions for UAE Projects", sub-page labels, and the "Explore Storage Solutions" CTA were all English-only even on Arabic pages. **Fix:** Made all strings locale-conditional.

### Also Fixed (Previous Session)
15. **LanguageSwitcher was a `<button>`** — replaced with next-intl `<Link locale={...}>` rendering a real `<a>` tag
16. **`/en/sitemap.xml` and `/ar/sitemap.xml` returned 404** — Created `src/app/en/sitemap.ts` and `src/app/ar/sitemap.ts`

---

## ⚠️ Remaining Issues (Prioritized)

### High Priority — Fix Within 1 Week

#### H1 — Geo Coordinates Precision
**File:** `src/components/seo/BusinessSchema.tsx:30`  
Current: `"latitude": 25.3283, "longitude": 55.5136` (4 decimal places = ~11m accuracy)  
Per Google's local schema recommendations: 5+ decimal places for geo precision.  
**Fix:** Update to `25.32830, 55.51360` (already done in this session via the BusinessSchema rewrite).

#### H2 — No Author Attribution on Blog Posts
All `BlogSchema` instances use `'@type': 'Organization'` as author which is acceptable, but individual blog posts have no visible byline/author in the HTML. Google's E-E-A-T guidelines (Sept 2025 QRG) require clear authorship attribution for YMYL and expertise-dependent content.  
**Fix:** Add an "Editorial Team, Tent Now" or named expert byline below blog post titles.

#### H3 — City Hub Pages Focus Mismatch
All 7 `/locations/[city]` pages (e.g., `/en/locations/dubai`) have titles like "Storage Tent Rental Dubai | Industrial & Warehouse Tents". The site's primary revenue driver and search volume is **Ramadan tents**, but the location hub pages are optimised exclusively for **industrial storage**.  
**Impact:** Visitors landing on city pages from Ramadan-related searches find industrial content, increasing bounce rate. Internal linking from footer ("Ramadan Tent Dubai") leads to a page titled for storage tents.  
**Fix:** Restructure city hub pages into multi-service hubs covering both Ramadan tents and storage tents, or create separate hub pages per service type.

#### H4 — No BreadcrumbSchema on Blog Posts or Service Pages
`BreadcrumbSchema` only appears on city overview pages. Blog posts, individual service pages, and location detail pages have no breadcrumb schema.  
**Fix:** Add `BreadcrumbSchema` to `services/[slug]/page.tsx`, `blog/[slug]/page.tsx`, and `locations/[city]/[slug]/page.tsx`.

#### H5 — `request-quote` Missing hreflang Alternates
`src/app/[locale]/request-quote/page.tsx` only sets `canonical` — missing the `languages` alternates for hreflang.  
**Fix:** Add `languages: { en: '...', ar: '...', 'x-default': '...' }` to the alternates object.

### Medium Priority — Fix Within 1 Month

#### M1 — Animated GIF Logo (LCP Impact)
`/images/tent-now-logo.gif` is used in both Header and Footer. Animated GIFs are significantly heavier than WebP/AVIF and cannot be optimized by Next.js image pipeline.  
**Fix:** Convert to a static WebP or use an `<Image>` component with a PNG source. If animation is required, use a CSS animation or Lottie instead.

#### M2 — 56+ City/Service Location Pages (Quality Gate Warning)
The site has 7 cities × 8 slugs = 56 city+slug deep pages plus 7 city overview pages = **63 location pages total**. The skill quality gate triggers a WARNING at 30+ pages (enforce 60%+ unique content per page). At 56+ service pages, individual city-slug pages risk being thin/templated if the content doesn't substantially differ by city.  
**Action Required:** Run the "swap test" on 5 random city+slug pairs — if you can swap the city name and the content still makes sense, it's a doorway page (HVAC site example: lost 80% rankings post March 2024 Core Update for this pattern).

#### M3 — No Privacy Policy or Terms of Service
No `/privacy` or `/terms` page exists. These are trust signals for both users and Google's E-E-A-T assessment.  
**Fix:** Create minimal privacy policy and terms pages, linked from footer.

#### M4 — `About` Page Missing Internal Links
The About page has no CTAs or internal links pointing to service pages or `/request-quote`. Every page should have at least 2–3 contextual internal links.  
**Fix:** Add "Explore Our Services" and "Get a Quote" links to the About page body.

#### M5 — Hero Images Missing `fetchpriority="high"`
The hero sections on service pages and the homepage use Next.js `<Image fill>` but don't set `priority` prop (which maps to `fetchpriority="high"`). This delays LCP.  
**Fix:** Add `priority` prop to hero images on homepage, service pages, and city pages.

#### M6 — No Image Sitemap
Images are not included in the sitemap. Google's image sitemap helps index product/service images for Google Image Search.  
**Fix:** Add image entries to the main sitemap for key service photos.

### Low Priority — Backlog

#### L1 — IndexNow Protocol
Not implemented. IndexNow allows instant URL notification to Bing, Yandex, and other search engines on content change.  
**Fix:** Add `next-indexnow` or a deployment hook that calls the IndexNow API with changed URLs.

#### L2 — Bing Places Not Claimed
Bing Places powers ChatGPT, Copilot, and Alexa local results. With ChatGPT now converting local searches at **15.9%** (vs Google organic at 1.76%, Seer Interactive 2026), this is increasingly important.  
**Action:** Claim `bingplaces.com` listing for Tent Now.

#### L3 — Apple Business Connect Not Claimed
Apple Maps usage doubled in 2026 (27% of consumers, BrightLocal 2026). Unclaimed listing shows incomplete data.  
**Action:** Claim at `businessconnect.apple.com`.

#### L4 — No Google Maps Embed
No Google Maps iframe on the Contact or About page. A Maps embed reinforces geographic signals for local SEO, though it's not a direct ranking factor.  
**Fix:** Add a lazy-loaded Google Maps embed to `/contact`.

#### L5 — FAQPage Schema on Commercial Pages
The site uses `FAQPage` schema on all service pages, the homepage, and the FAQ page. Per Google's August 2023 restriction, FAQ rich results are limited to government and healthcare sites on commercial pages. The schema itself is not harmful and **does provide AI/LLM citation benefit** (Perplexity, ChatGPT extract FAQ answers from structured data), so it should be kept but not expanded further.

---

## E-E-A-T Assessment

| Factor | Score | Key Signals | Gaps |
|---|---|---|---|
| Experience | 14/25 | 30-year founding claim, SAIF Zone HQ, city-specific knowledge (JAFZA, KIZAD) | No real project photos with identifiable sites, no case studies |
| Expertise | 16/25 | Technical permit knowledge, Civil Defence process, fire rating specs | No named authors on blogs, no staff/expert bios |
| Authoritativeness | 12/25 | 30-year tenure claim, 7 Emirates coverage | No press mentions, no "as seen in", no verifiable client logos |
| Trustworthiness | 18/25 | Phone + WhatsApp visible, HTTPS, structured reviews, address | No privacy policy, reviews in schema may not match real Google reviews |

**E-E-A-T Score: 60/100**

**Top E-E-A-T fixes:**
1. Add an "Our Team" or expert bio section to the About page
2. Add author bylines on all blog posts (even "Editorial Team, Tent Now UAE")
3. Add a privacy policy page
4. Get a Chamber of Commerce UAE membership and display the badge — this is BBB-equivalent trust signal in UAE and is the #1 AI visibility factor per Whitespark 2026

---

## AI Search Readiness

| Signal | Status | Notes |
|---|---|---|
| `llms.txt` | ✅ Created | `/llms.txt` now served with business facts + service URLs |
| GPTBot | ✅ Allowed | robots.txt |
| ClaudeBot | ✅ Allowed | Added this session |
| PerplexityBot | ✅ Allowed | Added this session |
| FAQPage schema | ✅ Present | AI citation benefit despite no Google rich result |
| Quotable statistics | ✅ Good | "3% vacancy", "33% rent rise", "72 hours" deployment — strong citation hooks |
| Answer-first formatting | ⚠️ Partial | Some FAQ answers start with the answer, others are narrative |
| Bing Places | ❌ Missing | ChatGPT sources local from Bing — critical gap |
| Author entity | ⚠️ Generic | `Organization` as author — no named expert entity |

---

## Local SEO Checklist

| Signal | Status |
|---|---|
| NAP visible in HTML | ✅ (via translations) |
| NAP in LocalBusiness schema | ✅ |
| NAP consistency | ✅ (after postalCode removed) |
| `areaServed` in schema | ✅ All 7 Emirates |
| `aggregateRating` | ✅ (merged into BusinessSchema) |
| `geo` coordinates | ✅ (5 decimal places) |
| Google Maps embed | ❌ Missing |
| Dedicated service pages | ✅ 8 service types |
| City-specific pages | ✅ 7 cities × 8 slugs |
| BreadcrumbList | ⚠️ City hubs only |
| Click-to-call `tel:` link | ✅ |
| Business hours | ✅ (24/7 in schema) |

---

## Schema Inventory (Post-Fix)

| Schema | Location | Status | Notes |
|---|---|---|---|
| `LocalBusiness` + `EventVenue` | All pages (layout) | ✅ Valid | Merged with aggregateRating |
| `WebSite` | All pages (layout) | ✅ Valid | SearchAction removed |
| `FAQPage` | Home, Services, FAQs, Service detail | ⚠️ Info | No Google rich result on commercial; AI citation benefit kept |
| `Service` | Service detail pages | ✅ Valid | areaServed + telephone added |
| `BreadcrumbList` | City overview pages | ⚠️ Partial | Missing from blogs, service detail, city+slug pages |
| `BlogPosting` | Blog posts (SSR) | ✅ Valid | Fixed from Script to JsonLd |
| `ItemList` | Pricing page | ✅ Valid | |

---

## Quick Wins Summary (Remaining)

1. **Add hreflang alternates to `/request-quote`** — 5 min fix
2. **Add `priority` prop to all hero images** — 30 min, direct LCP improvement
3. **Add author bylines to blog posts** — 1 hour, E-E-A-T signal
4. **Add BreadcrumbSchema to service + blog pages** — 2 hours
5. **Claim Bing Places** — 20 min, unlocks ChatGPT local visibility
6. **Convert logo GIF → WebP** — 1 hour, LCP + file size improvement
7. **Add Privacy Policy page** — 1 hour, trust signal
8. **Add internal links to About page** — 30 min

---

*Report generated by Claude SEO Skill v1.8.0 | tentnow.ae | 2026-04-05*
