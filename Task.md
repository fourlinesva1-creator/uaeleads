# Ramadan Majlis Website - Task Tracker

## Phase 1: Foundation (Week 1) ✅ COMPLETED
- [x] Initialize Next.js 16 with TypeScript and App Router
- [x] Configure Tailwind CSS v4 with RTL support
- [x] Setup next-intl for bilingual routes (/en/, /ar/)
- [x] Create global design system (`globals.css`)
- [x] Build Header component with language switcher
- [x] Build Footer component
- [x] Build Mobile Navigation component (integrated in Header)
- [x] Create WhatsApp floating button component
- [x] Setup basic folder structure
- [ ] Create CLAUDE.md context file for AI assistance

## Premium Design Redesign ✅ COMPLETED
- [x] Create luxury dark theme design system (globals.css)
- [x] Colors: #101622 (bg-dark), #D4AF37 (gold), #1152d4 (primary blue)
- [x] Manrope font with wide letter-spacing
- [x] Update Hero section with gradient overlay
- [x] Update TrustBar with stats
- [x] Create Experience section with gold frame
- [x] Update Services grid with hover effects
- [x] Update Portfolio gallery with zoom effects
- [x] Update Locations section with card design
- [x] Update CTA section with feature cards
- [x] Update Header with dark theme
- [x] Update Footer with premium styling
- [x] Update LanguageSwitcher with dark theme
- [x] Update EN translations (en.json)
- [x] Update AR translations (ar.json)

## Phase 2: Core Pages (Week 2) 🔄 IN PROGRESS
- [x] Homepage
  - [x] Hero section with dual CTA
  - [x] Trust bar (stats, badges)
  - [x] Experience section (Our Heritage)
  - [x] Services grid
  - [x] Portfolio gallery section
  - [x] Cities Served section (internal links)
  - [x] CTA section (Bespoke Services)
  - [x] Testimonials section
  - [x] Luxury Header with dropdown for services
  - [x] Multi-level mobile menu for services
- [ ] Service Pages (EN + AR)
  - [x] Hotel & Restaurant Majlis
  - [x] Corporate Event Tents
  - [x] Home & Family Majlis
  - [x] Furniture & Accessories
  - [x] Décor & Lighting
- [x] About page
- [x] FAQ page
- [x] Request a Quote page (multi-step form)
  - [x] Specialized form for different service types
  - [x] UAE Phone number validation
  - [x] WhatsApp redirection logic with pre-filled message
- [x] Portfolio/Gallery page (full page)
- [x] Mobile responsiveness testing
- [x] RTL testing for all Arabic pages
- [x] Vercel Deployment Readiness
  - [x] Successful local production build (`next build`)
  - [x] Linting and type-check passing
  - [x] Verification of dynamic route static generation
  - [ ] Final asset check (images and metadata)

## Phase 5: Final Review & Launch Prepek 3)
- [ ] Dubai Pages
  - [ ] /locations/dubai/ramadan-tent-rental
  - [ ] /locations/dubai/majlis-tent-rental
  - [ ] /locations/dubai/iftar-tent-rental
  - [ ] /locations/dubai/suhoor-tent-rental
- [ ] Abu Dhabi Pages
  - [ ] /locations/abu-dhabi/ramadan-tent-rental
  - [ ] /locations/abu-dhabi/majlis-tent-rental
  - [ ] /locations/abu-dhabi/iftar-tent-rental
  - [ ] /locations/abu-dhabi/suhoor-tent-rental
- [ ] Sharjah Pages
  - [ ] /locations/sharjah/ramadan-tent-rental
  - [ ] /locations/sharjah/majlis-tent-rental
  - [ ] /locations/sharjah/iftar-tent-rental
  - [ ] /locations/sharjah/suhoor-tent-rental
- [ ] Other Emirates (Main pages only)
  - [ ] /locations/ajman/ramadan-tent-rental
  - [ ] /locations/ras-al-khaimah/ramadan-tent-rental
  - [ ] /locations/fujairah/ramadan-tent-rental
  - [ ] /locations/umm-al-quwain/ramadan-tent-rental
- [x] Unique content structure for city pages
- [ ] Schema markup for all city pages
- [ ] Internal linking between city and service pages

## Phase 4: Lead Capture (Week 4)
- [ ] Multi-step Quote Form
  - [ ] Step 1: Event Details
  - [ ] Step 2: Requirements
  - [ ] Step 3: Add-ons
  - [ ] Step 4: Contact Info
  - [ ] Progress indicator
  - [ ] Form validation with Zod
- [ ] API Routes
  - [ ] /api/submit-lead
  - [ ] /api/send-notification
  - [ ] /api/whatsapp tracking
- [ ] Database Setup
  - [ ] Configure Vercel Postgres or Supabase
  - [ ] Create Leads table with schema
  - [ ] Test lead storage
- [x] Email notifications placeholder (ready for SendGrid)
- [x] WhatsApp quick response integration (pre-filled links)
- [x] Callback request popup (global component)
- [x] Click-to-call for mobile
- [x] Exit intent popup placeholder
- [x] Thank you page with conversion tracking support

## Phase 5: SEO & Launch (Week 5)
- [ ] Metadata Implementation
  - [x] Base meta titles (layout.tsx)
  - [x] Base meta descriptions (layout.tsx)
  - [x] Open Graph tags (layout.tsx)
  - [x] hreflang tags (EN ↔ AR)
  - [ ] Unique meta for all pages
- [ ] Technical SEO
  - [ ] XML sitemap generation
  - [ ] robots.txt configuration
  - [ ] Canonical URLs
  - [ ] Schema markup validation
- [ ] Analytics
  - [ ] Google Analytics 4 setup
  - [ ] Google Tag Manager setup
  - [ ] Conversion tracking
- [ ] Performance Optimization
  - [ ] Image optimization (WebP, lazy loading)
  - [ ] Lighthouse score 90+ all categories
  - [ ] Core Web Vitals "Good"
- [ ] Google Search Console setup
- [ ] Final QA and testing
- [ ] Deploy to production (Vercel)

## Phase 6: Marketing (Ongoing)
- [ ] Google Business Profile setup
- [ ] UAE business directory submissions
- [ ] Google Ads campaign setup
- [ ] Meta Ads campaign setup
- [ ] Content marketing (blog posts)
- [ ] Performance monitoring

---

## Content Assets Status

### Available ✅
- [x] Contact information (phone, WhatsApp: +971 55 510 1069)
- [x] Physical address (SAIF Zone, Sharjah)
- [x] High-quality photos of tent setups (318+ images)
- [x] Brand guidelines and voice
- [x] Keyword research completed
- [x] Official brand name: **RMT UAE** / Ramadan Majlis Tent Solutions
- [x] Company logo: `images/RMT-Logo.png`
- [x] Pricing strategy: "As low as" with Request Quote for specific sizes
- [x] Tent sizes and specifications documented
- [x] Business history: Established 1994 (30+ years)
- [x] Portfolio stats: 5,000+ successful events

### Needed ❓
- [ ] Client testimonials
- [ ] Past client logos (if available)

---

## Tech Stack

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **i18n**: next-intl (EN + AR with RTL support)
- **Forms**: React Hook Form + Zod validation
- **Fonts**: Manrope (display), Tajawal (Arabic)
- **Images**: Next.js Image optimization
- **Deployment**: Vercel (planned)

## Design System

- **Primary BG**: #101622 (bg-dark)
- **Gold Accent**: #D4AF37
- **Primary Blue**: #1152d4
- **Border**: #282e39
- **Text Muted**: #9da6b9
- **WhatsApp**: #25D366
