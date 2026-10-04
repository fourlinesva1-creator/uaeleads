# Tent Now (tentnow.ae) — Topical Cluster + AEO Plan — 2026-07-24

Adapts the methodology used on the Helixal project (topical-authority clusters, internal-link graph, AEO/cross-platform monitoring, link-building) to **Tent Now's local-service, seasonal, bilingual (EN/AR), lead-gen** profile. Builds ON the existing `SEO-AUDIT-REPORT.md` (2026-04-05, health 79/100) — this is the *growth* layer on top of those technical fixes.

## What's different here vs Helixal (read first)
| Dimension | Helixal | Tent Now |
|---|---|---|
| Model | US product ecommerce | **UAE local-service + lead-gen** (quote form, no cart) |
| SEO center of gravity | Product/keyword clusters | **Local SEO** (GBP, Bing Places, city pages) + clusters |
| Seasonality | Evergreen | **Seasonal spike** (Ramadan/iftar) + evergreen (storage/shades) |
| Language | EN | **Bilingual EN/AR** (hreflang, RTL, AR content parity) |
| Conversion | Direct checkout | **Quote request / WhatsApp / call** |
| AEO local | n/a | **Bing Places = ChatGPT local** (15.9% convert) — critical |

**Implication:** the #1 AEO lever for Tent Now is **claiming Bing Places + Google Business Profile + Apple Business Connect** (ChatGPT/Copilot/Siri source local from these), not just content. Content clusters are the #2 lever.

---

## 1. Topical cluster map (grounded in current routes)
Money pages = service pages + `/request-quote`. Blog/informational content must **feed** them via internal links (same principle as Helixal Phase 1).

### Cluster A — Ramadan / Iftar Tents ⭐ (the seasonal revenue driver)
- **Hubs:** `/services/iftar-tent-rental-dubai` · `-abu-dhabi` · `-sharjah`
- **Supporting content:** `blog/ramadan-calendar-uae-2026`, `ramadan-tent-pricing-guide-uae-2026`, `iftar-tent-rental-checklist-uae-2026`, `upcoming-ramadan-events-dubai-2026`, `hotel-majlis-setup-guide-uae-2026`
- **Gap / fix (from audit H3):** the `/locations/[city]` hubs are titled for *storage* tents, but Ramadan is the money + search volume. **Restructure city hubs to lead with iftar/Ramadan** (or add a Ramadan-tent section per city) so footer links "Ramadan Tent Dubai" land on matching content.

### Cluster B — Storage / Industrial Tents (evergreen B2B)
- **Hub:** `/services/storage-tents` → `clear-span-tents`, `industrial-tents`, `warehouse-tents`
- **Supporting:** `blog/industrial-storage-tent-rental-uae-2026`, `tarpaulin-vs-storage-tent-uae`
- Route to `/request-quote` + city storage pages (JAFZA, KIZAD industrial zones).

### Cluster C — Shades (parking / garden)
- **Hubs:** `/services/parking-shades-dubai` · `-abu-dhabi` · `-ajman` · `/services/garden-shades`
- **Gap:** thin cross-linking between shade pages and to `/request-quote`; few blog spokes. Consider 1 pillar: "Car Parking Shade Cost & Types in UAE."

### Cluster D — Tarpaulins
- **Hub:** `/services/tarpaulins`
- **Supporting:** `blog/tarpaulin-price-guide-uae-2026`, `tarpaulin-vs-storage-tent-uae`

### Cluster E — Corporate / Event Tents
- **Supporting:** `blog/corporate-event-tents-dubai-2026`; needs a service hub (`/services/corporate-event-tents`?) if there's demand — currently blog-only.

### Cross-cluster / trust
- `how-to-choose-tent-rental-company-uae`, `top-tent-suppliers-uae-2026` = decision-stage; must link to service hubs + quote.
- `uae-drone-missile-survival-guide` = off-topic traffic magnet; keep, but link it into storage/shelter clusters where natural.

---

## 2. Internal-link plan (Phase-1-equivalent — do first, no new content)
Run the same audit we ran on Helixal: crawl the sitemap, build the link graph from source, then fix. Targets:
- [ ] **Every blog post links to ≥1 service hub + `/request-quote`** (the money pages). Decision-stage posts (how-to-choose, top-suppliers, pricing) especially.
- [ ] **Every service page links to its cluster's blog spokes** (e.g., iftar Dubai ↔ ramadan-pricing, ramadan-calendar, iftar-checklist).
- [ ] **City hubs link down to each service offered in that city** and up-link from footer with matching anchors (fixes H3 mismatch).
- [ ] **De-orphan** any blog reachable only from the blog index (add contextual cross-links between topically adjacent posts — Ramadan posts ↔ each other, storage posts ↔ each other).
- [ ] **Bilingual parity:** confirm AR pages carry the same internal links as EN (and correct hreflang — audit H5 flags `/request-quote` missing alternates).

## 3. Local SEO — the highest-ROI layer (do in parallel)
- [ ] **Claim Google Business Profile** (per Emirate service-area if applicable) — categories, photos, services, hours, WhatsApp.
- [ ] **Claim Bing Places** (audit L2) — *powers ChatGPT/Copilot local*. Highest AEO ROI.
- [ ] **Claim Apple Business Connect** (audit L3) — Apple Maps/Siri.
- [ ] **NAP consistency** across GBP/Bing/Apple + site schema (already clean per audit).
- [ ] **UAE Chamber of Commerce membership badge** (audit notes: #1 AI-visibility trust factor per Whitespark 2026).
- [ ] Google Maps embed on `/contact` (audit L4).
- [ ] **Doorway-page guard (audit M2):** run the "swap test" on the 56 city×slug pages — if swapping the city keeps content valid, it's a doorway pattern (ranking risk). Add genuinely city-specific detail (local zones, permits/Civil Defence, venues) or consolidate.

## 4. AEO plan (UAE tent queries)
- [x] `llms.txt` present · GPTBot/ClaudeBot/PerplexityBot allowed (audit done).
- [ ] **Answer-first formatting** on FAQ/blog intros (audit flagged partial) — lead with the direct answer; LLMs extract these.
- [ ] **Named author entity** (audit H2) — add "Editorial Team / [named expert], Tent Now UAE" byline + author schema (E-E-A-T + AI author signal).
- [ ] **Monthly AI visibility test** — run a fixed prompt set on ChatGPT/Perplexity/Gemini/Copilot and log whether Tent Now is cited/linked:
  - "iftar tent rental Dubai", "Ramadan majlis rental UAE", "storage tent rental JAFZA", "car parking shade Dubai cost", "best tent rental company UAE"
- [ ] **Bing AI Performance** (Bing Webmaster Tools) — the free Copilot-citation report (as used on Helixal). Verify site is verified there.
- [ ] Keep quotable stats in content (audit noted "72 hours deployment", "3% vacancy" — strong citation hooks).

## 5. Measurement (mirror Helixal)
- **GA4 + GSC** (per-locale): filter by URL folder to track each cluster; watch iftar/Ramadan seasonality.
- **Bing Webmaster** → Search Performance + **AI Performance** (Copilot citations).
- **Ahrefs / GSC Links** → backlink profile (expect UAE directory + supplier links; ignore nofollow spam as we confirmed on Helixal — DR is a vanity metric, Google doesn't use it).
- After any content change: bump sitemap lastmod → **implement IndexNow** (audit L1 — not yet done; add the `scripts/indexnow.mjs`-style hook).

## 6. Link-building (UAE-adapted)
- **Local citations/directories:** Google/Bing/Apple (above), Yellow Pages UAE, Connect.ae, dubup, UAE business directories, Chamber of Commerce.
- **Editorial/PR:** UAE event/wedding/hospitality blogs, Ramadan roundups, hotel/F&B trade press (iftar season). Model = a genuinely useful contributed piece with one contextual link.
- **Community/AEO:** answer relevant questions (Reddit r/dubai, UAE forums, Quora) — nofollow but feeds AI citations + referral. Use a warmed, non-brand-obvious account (lesson from Helixal Reddit).
- **Seasonal push:** time iftar/Ramadan outreach 2-3 months before Ramadan (peak demand).

---

## Phased execution (recommended order)
**Phase 1 — Internal-link + local (fastest ROI, mostly free):** run the link-graph audit + fixes; claim Bing Places + GBP + Apple; fix city-hub focus mismatch (H3). *This is the "free authority" pass.*
**Phase 2 — Fill content gaps:** parking-shade cost pillar, corporate-event hub (if demand), answer-first rewrites, author bylines.
**Phase 3 — Seasonal + link-building:** Ramadan content refresh + outreach ahead of the season; UAE directory + editorial links.
**Ongoing:** monthly AI-visibility prompt test; IndexNow on changes; GSC/Bing monitoring.

## Notes / carry-over from the Helixal playbook
- **One domain, consolidate** — no subdomain networks (PBN trap).
- **DR 0 / low DR ≠ penalty** — Google doesn't use Ahrefs DR; earn a few genuine editorial links, ignore nofollow spam.
- **Cannibalization:** don't create multiple pages for the same query (e.g., three "iftar tent Dubai" pages) — one canonical page per intent, cross-linked.
- **Git discipline:** targeted `git add <files>`, never `-A`; verify with `tsc` + `next build` before deploy; verify live via curl poll; then IndexNow.

## Log
- 2026-07-24 — Plan created (adapted from Helixal methodology). Next: run the Phase-1 internal-link audit on tentnow's sitemap + claim Bing Places/GBP.
