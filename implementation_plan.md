# Ramadan Majlis Lead Generation Website - Implementation Plan

> **Domain:** RamadanMajlis.ae (pending availability)  
> **Repository:** https://github.com/fourlinesva1-creator/uaeleads.git  
> **Hosting:** Vercel + Vercel Storage/Supabase  
> **Target Launch:** Before Ramadan 2026

---

## Project Overview

A high-conversion, SEO-optimized lead generation website for Ramadan Majlis and tent rental services across UAE. This is **NOT** a corporate branding website—it's a **conversion machine** designed to capture leads through WhatsApp, forms, and calls.

### Core Objectives
1. **Capture high-intent leads** from hotels, corporations, and families
2. **Dominate local SEO** for city-specific Ramadan tent searches
3. **Enable quick scaling** with Google Ads and Meta Ads
4. **Bilingual support** (English + Arabic) for maximum UAE market reach

---

## Brand Identity

### Brand Tagline
> 🌙 **"Crafting Timeless Gatherings — From Tradition to Celebration"**

### Brand Mission
To create meaningful, culturally rich Ramadan and event experiences across the UAE through beautifully curated Majlis and tent environments — combining tradition with exceptional design, comfort, and service.

### Brand Vision
Be the UAE's most trusted Ramadan & Majlis experience provider — where every iftar and suhoor becomes a treasured memory.

### Brand Values

| Value | Meaning |
|-------|---------|
| **Heritage-Inspired** | We honour Emirati traditions of hospitality and Majlis culture |
| **Comfort First** | Every setup prioritizes guest comfort — climate, seating, flow |
| **Quality & Craftsmanship** | Premium materials & professional installation every time |
| **Modern Elegance** | A fresh take: traditional charm + contemporary design |
| **Trust & Reliability** | Transparent pricing and timely delivery |

### Brand Voice & Tone
- **For families:** Empathetic, inviting, heartfelt
- **For corporates:** Polished, professional, value-driven
- **For hotels/events:** Premium, reliable, detail-oriented

---

## Contact Information

| Type | Details |
|------|---------|
| **Address** | SAIF Zone, Sharjah, UAE |
| **WhatsApp** | +971 55 510 1069 |
| **Phone** | +971 55 510 1069 |
| **WhatsApp Link** | `https://wa.me/971555101069` |

---

## User Review Required

> [!NOTE]
> **Domain Decision**
> Domain not confirmed yet. Pending: `RamadanMajlis.ae` or alternative

> [!NOTE]
> **Brand Name**
> - **Brief:** RMT UAE
> - **Full:** Ramadan Majlis Tent Solutions
>
> **Business Stats:**
> - **Established:** 1984 (40+ years of experience)
> - **Portfolio:** 5,000+ successful events

> [!NOTE]
> **Logo**
> Located at: `images/RMT-Logo.png`

> [!NOTE]
> **Pricing Strategy**
> Use "As low as" pricing for each service. Customers request quotes for specific sizes.
> All prices shown are **10% below market rate** for competitive advantage.

---

## Tent Sizes & Specifications

### Small/Private (Family - 4-15 people)
| Size (Metric) | Size (Imperial) |
|---------------|-----------------|
| 3×3m | 10×10ft |
| 4×4m | 13×13ft |
| 5×5m | 8×8ft, 10×15ft |

### Medium/Commercial (20-50 people)
| Size (Metric) | Size (Imperial) | Notes |
|---------------|-----------------|-------|
| 10×10m | 12×12ft | Standard commercial |
| Custom | Custom | Long, narrow, or curved shapes available |

### Large (50-500+ people)
| Size (Metric) | Size (Imperial) | Notes |
|---------------|-----------------|-------|
| 15×6m+ | 15×20ft | Modular/expandable |
| 20×50m | Custom | Large events (Iftar, Suhoor, prayer) |
| Clear Span | Custom | High, unobstructed designs |

### Structure Types
- **Traditional Arabic Majlis Tents** - Authentic cultural design
- **Pagoda Tents** - Elegant peaked design
- **Clear Span Marquees** - Large, unobstructed interior

### Dimensions Reference
- **Ridge Height:** 6.4m to 7.8m
- **Internal Clearance:** 3m to 5m
- **Customization:** Modular, expandable, or custom sizes available

---

## Pricing Guide (10% Below Market)

> All prices are competitive rates, 10% below standard market pricing.
> Final quotes provided based on specific requirements.

### Private Rental & Setups

| Service | Starting Price | Notes |
|---------|----------------|-------|
| Premium Majlis Setup (3×3m, 9-person) | **As low as AED 3,276/month** | Full tent with traditional setup |
| Majlis Sofa Sets (7-9 pieces) | **As low as AED 360** | Up to AED 1,620 for premium designs |
| Luxury U-Shaped Majlis | **As low as AED 16,200** | Custom high-end setup |

### Hotel & Commercial Majlis

| Service | Starting Price | Notes |
|---------|----------------|-------|
| Private Hotel Majlis | **Minimum AED 5,400** | Premium locations, F&B separate |
| Public Iftar/Suhoor Setup | **As low as AED 162/person** | Buffet-style, up to AED 315/person |

### Pricing CTA Strategy
- Display "As low as AED X" on service pages
- Prominent "Request Quote" button for custom sizing
- Quote form captures: tent size, guest count, duration, add-ons

---

## Image Assets Inventory

✅ **318+ images and videos available** in `images/` folder:

| Folder | Contents | Count |
|--------|----------|-------|
| `Products/` | Product photos (tents, furniture) | 57 files |
| `WEB/` | Website-ready images | 10 files |
| `ramdan/` | Ramadan-specific setups | 4 files |
| `new ai images/` | AI-generated marketing images | 4 files |
| `steel/` | Steel structure images | 55 files |
| `New folder/` | Additional photos | 24 files |
| `New folder (2)/` | Additional photos | 150 files |
| Root images | WhatsApp photos + 1 video | 14 files |

> [!TIP]
> Images will need to be:
> 1. Renamed with SEO-friendly names (e.g., `ramadan-majlis-tent-dubai.jpg`)
> 2. Optimized for web (WebP format, compressed)
> 3. Organized by usage (hero, gallery, services, etc.)

---

## Technology Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 15 (App Router) | SSR/SSG for SEO, fast Core Web Vitals |
| **Language** | TypeScript | Type safety, better DX |
| **Styling** | Tailwind CSS v4 | Rapid development, RTL support |
| **i18n** | next-intl | SEO-friendly bilingual URLs |
| **Database** | Vercel Postgres or Supabase | Serverless, Vercel-native |
| **Forms** | React Hook Form + Zod | Multi-step forms with validation |
| **Email** | SendGrid or Resend | Lead notifications |
| **Analytics** | GA4 + Google Tag Manager | Conversion tracking |
| **Hosting** | Vercel | Optimized for Next.js |

---

## Proposed Changes

### Core Architecture

#### [NEW] Project Structure

```
ramadan-majlis-website/
├── app/
│   ├── [locale]/                     # Bilingual routes (en, ar)
│   │   ├── layout.tsx                # Root layout with RTL support
│   │   ├── page.tsx                  # Homepage
│   │   │
│   │   ├── services/                 # Service Pages
│   │   │   ├── page.tsx              # Services overview
│   │   │   ├── hotel-majlis/         # Hotel & Restaurant solutions
│   │   │   ├── corporate-events/     # Corporate event tents
│   │   │   ├── home-majlis/          # Family/home setups
│   │   │   ├── furniture-rental/     # Furniture & accessories
│   │   │   └── decor-lighting/       # Islamic décor & lighting
│   │   │
│   │   ├── locations/                # City SEO Pages (Critical!)
│   │   │   ├── [city]/               # Dynamic city pages
│   │   │   │   ├── page.tsx          # Main city page
│   │   │   │   ├── ramadan-tent-rental/
│   │   │   │   ├── majlis-tent-rental/
│   │   │   │   ├── iftar-tent-rental/
│   │   │   │   └── suhoor-tent-rental/
│   │   │
│   │   ├── portfolio/                # Gallery/Past Work
│   │   ├── get-quote/                # Multi-step lead form
│   │   ├── about/                    # Trust-building
│   │   ├── faq/                      # SEO + Trust
│   │   └── contact/                  # Contact information
│   │
│   ├── api/                          # API Routes
│   │   ├── submit-lead/route.ts      # Lead capture
│   │   ├── send-notification/route.ts
│   │   └── whatsapp/route.ts         # WhatsApp tracking
│   │
│   ├── sitemap.ts                    # Dynamic sitemap
│   └── robots.ts                     # Robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # With language switcher
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── forms/
│   │   ├── QuoteForm/                # Multi-step quote form
│   │   └── QuickContact.tsx          # Simple contact form
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── PortfolioGallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   └── ui/
│       ├── WhatsAppButton.tsx        # Floating sticky button
│       ├── CallButton.tsx
│       └── LanguageSwitcher.tsx
│
├── lib/
│   ├── db.ts                         # Database connection
│   ├── email.ts                      # Email service
│   ├── schema.ts                     # JSON-LD schemas
│   └── validation.ts                 # Zod schemas
│
├── messages/
│   ├── en.json                       # English translations
│   └── ar.json                       # Arabic translations
│
├── styles/
│   └── globals.css                   # Global design system
│
├── public/
│   ├── images/
│   └── icons/
│
├── middleware.ts                     # i18n middleware
├── i18n.ts                           # i18n configuration
├── next.config.js
├── tailwind.config.ts
└── CLAUDE.md                         # AI context file
```

---

### Design System

#### [NEW] globals.css

A global design system with consistent colors, typography, and components:

```css
/* ==========================================================================
   RAMADAN MAJLIS - GLOBAL DESIGN SYSTEM
   Based on Brand Identity: Modern Elegance + Heritage-Inspired
   ========================================================================== */

:root {
  /* Primary Colors - From Brand Guidelines */
  --color-primary: #C9A227;           /* Desert Gold - Warm hospitality */
  --color-primary-dark: #A88B1F;      /* Darker Gold */
  --color-primary-light: #E0C04D;     /* Lighter Gold */
  
  /* Secondary Colors - Islamic & Cultural */
  --color-secondary: #1A2A4A;         /* Midnight Blue - Night prayers & reflection */
  --color-secondary-light: #2A4A7A;   /* Lighter Midnight Blue */
  
  /* Accent Colors */
  --color-accent-green: #5C7A4A;      /* Olive Green - Cultural & spiritual resonance */
  --color-accent-green-light: #7A9A6A;
  
  /* Neutral Colors */
  --color-bg-primary: #F5F5F0;        /* Pearl White - Purity & traditional canvas */
  --color-bg-secondary: #FFFFFF;
  --color-bg-dark: #1A2A4A;           /* Midnight Blue for dark sections */
  --color-bg-cream: #FAF8F5;          /* Warm cream for sections */
  
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A4A4A;
  --color-text-muted: #6B7280;
  --color-text-light: #FFFFFF;
  --color-text-gold: #C9A227;         /* For accents on dark backgrounds */
  
  /* Functional Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-whatsapp: #25D366;          /* WhatsApp green for CTA */
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
  --shadow-gold: 0 4px 14px 0 rgb(201 162 39 / 0.25);
  
  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;
  
  /* Typography - Brand Guidelines */
  --font-display: 'Cairo', sans-serif;    /* Elegant, works for EN + AR */
  --font-body: 'Inter', sans-serif;       /* Clean modern sans-serif */
  --font-arabic: 'Tajawal', sans-serif;   /* Arabic-optimized */
  
  /* Spacing Scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  
  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
  --transition-slow: 500ms ease;
}

/* RTL Support - Arabic */
[dir="rtl"] {
  --font-body: var(--font-arabic);
  --font-display: 'Cairo', var(--font-arabic);
}

/* Dark Mode (Optional - for sections with dark backgrounds) */
.dark {
  --color-bg-primary: var(--color-secondary);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #E5E7EB;
}
```

---

### Page Strategy

#### Homepage - Conversion Hub

**Purpose:** Capture all traffic, convert visitors into leads

| Section | Description | Priority |
|---------|-------------|----------|
| **Hero** | "Ramadan Majlis & Tent Rental Across UAE" + Dual CTA (Quote + WhatsApp) | Critical |
| **Trust Bar** | Years in business, clients served, rating badges | High |
| **Services Overview** | 5 service cards with icons, links to service pages | High |
| **Who We Serve** | Hotels, Corporates, Mosques, Homes | High |
| **Cities Served** | Internal links to city pages (Dubai, Abu Dhabi, Sharjah) | Critical for SEO |
| **Portfolio Gallery** | High-quality images of past setups | Very Important |
| **Testimonials** | Client quotes with photos | High |
| **Quick Quote Form** | Sticky/floating form | Critical |
| **WhatsApp CTA** | Sticky floating button | Critical |

---

#### City Landing Pages (SEO Priority #1)

Each city gets 4 dedicated pages based on keyword research:

| City | Primary Pages |
|------|---------------|
| **Dubai** | `/en/locations/dubai/ramadan-tent-rental`, `/en/locations/dubai/majlis-tent-rental`, `/en/locations/dubai/iftar-tent-rental`, `/en/locations/dubai/suhoor-tent-rental` |
| **Abu Dhabi** | `/en/locations/abu-dhabi/ramadan-tent-rental`, `/en/locations/abu-dhabi/majlis-tent-rental`, `/en/locations/abu-dhabi/iftar-tent-rental`, `/en/locations/abu-dhabi/suhoor-tent-rental` |
| **Sharjah** | `/en/locations/sharjah/ramadan-tent-rental`, `/en/locations/sharjah/majlis-tent-rental`, `/en/locations/sharjah/iftar-tent-rental`, `/en/locations/sharjah/suhoor-tent-rental` |
| **Ajman** | `/en/locations/ajman/ramadan-tent-rental` (main only) |
| **RAK** | `/en/locations/ras-al-khaimah/ramadan-tent-rental` (main only) |
| **Fujairah** | `/en/locations/fujairah/ramadan-tent-rental` (main only) |
| **UAQ** | `/en/locations/umm-al-quwain/ramadan-tent-rental` (main only) |

**Each city page includes:**
- 800-1200 words of unique content
- Local intent keywords naturally integrated
- Services available in that city
- Gallery of past work in that city
- City-specific FAQs
- WhatsApp + Call CTA
- Schema markup (LocalBusiness + Service)

---

#### Service Pages

| Service | URL | Target Audience |
|---------|-----|-----------------|
| Hotel & Restaurant Majlis | `/en/services/hotel-majlis` | Hotels, restaurants |
| Corporate Event Tents | `/en/services/corporate-events` | Companies, offices |
| Home & Family Majlis | `/en/services/home-majlis` | Families, individuals |
| Furniture & Accessories | `/en/services/furniture-rental` | All segments |
| Décor & Lighting | `/en/services/decor-lighting` | Premium clients |

---

### Lead Capture System

#### Multi-Step Quote Form

```
Step 1: Event Details
├── Event Type (Hotel, Corporate, Home, Wedding, Other)
├── Event Date (Date picker)
└── Location (Dropdown: Dubai, Abu Dhabi, Sharjah, etc.)

Step 2: Requirements
├── Number of Guests (50, 100, 200, 300+)
├── Duration (Days)
└── Budget Range (Slider: 5K-15K, 15K-50K, 50K+)

Step 3: Add-ons
├── Furniture (checkbox)
├── AC/Cooling (checkbox)
├── Decoration (checkbox)
└── Catering Setup (checkbox)

Step 4: Contact
├── Full Name
├── Phone (UAE format validation)
├── Email
└── Company Name (optional)
```

#### Additional Lead Capture Points

| Method | Implementation |
|--------|----------------|
| **Sticky WhatsApp** | Floating button on all pages, click-to-chat |
| **Click-to-Call** | Prominent on mobile devices |
| **Exit Intent Popup** | "Get 15% off first booking" |
| **Quick Quote Form** | Simplified form on city/service pages |

---

### Bilingual Implementation (English + Arabic)

#### URL Structure

```
English: yoursite.com/en/...
Arabic:  yoursite.com/ar/...

Examples:
/en/locations/dubai/ramadan-tent-rental
/ar/locations/dubai/تأجير-خيام-رمضان
```

#### RTL Support

- Arabic pages render right-to-left
- Use RTL-compatible Tailwind classes (`ms-4` instead of `ml-4`)
- Arabic-optimized fonts (Tajawal, Cairo)
- Separate content strategies per language

---

### Database Schema

```prisma
model Lead {
  id              String   @id @default(cuid())
  
  // Contact Info
  fullName        String
  phone           String
  email           String?
  companyName     String?
  whatsappNumber  String?
  
  // Event Details
  eventType       String   // hotel, corporate, home, wedding
  eventDate       DateTime?
  location        String   // dubai, abu-dhabi, sharjah, etc.
  
  // Requirements
  guestCount      Int?
  duration        Int?     // days
  budgetRange     String?  // budget, mid-range, premium
  
  // Add-ons
  needsFurniture  Boolean  @default(false)
  needsAC         Boolean  @default(false)
  needsDecoration Boolean  @default(false)
  needsCatering   Boolean  @default(false)
  
  // Tracking
  source          String   // organic, google_ads, facebook, whatsapp
  landingPage     String?
  utmSource       String?
  utmMedium       String?
  utmCampaign     String?
  
  // Status
  status          String   @default("new") // new, contacted, quoted, converted
  notes           String?
  
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

---

### SEO Implementation

#### Required for Every Page

| Element | Implementation |
|---------|----------------|
| **Meta Title** | Unique, keyword-optimized, 50-60 chars |
| **Meta Description** | Compelling, with CTA, 150-160 chars |
| **H1** | One per page, matches title intent |
| **Schema Markup** | LocalBusiness + Service + FAQPage |
| **hreflang Tags** | Link English ↔ Arabic versions |
| **Canonical URLs** | Self-referencing canonicals |
| **XML Sitemap** | Auto-generated, all languages |
| **Open Graph** | Social sharing optimization |

#### Schema Markup Example

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RMT UAE - Ramadan Majlis Tent Solutions",
  "description": "Premium Ramadan majlis and tent rental across UAE",
  "image": "/images/RMT-Logo.png",
  "telephone": "+971 55 510 1069",
  "priceRange": "AED 360 - 16,200+",
  "areaServed": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sharjah",
    "addressRegion": "SAIF Zone",
    "addressCountry": "AE"
  }
}
```

---

## Development Timeline

### Phase 1: Foundation (Week 1)
- [ ] Clone repository and setup
- [ ] Initialize Next.js 15 with TypeScript
- [ ] Configure Tailwind CSS with RTL support
- [ ] Setup next-intl for bilingual routes
- [ ] Create global design system (globals.css)
- [ ] Create CLAUDE.md context file
- [ ] Basic layout components (Header, Footer)
- [ ] Language switcher component

### Phase 2: Core Pages (Week 2)
- [ ] Homepage with all sections
- [ ] 5 Service pages (EN + AR)
- [ ] About page
- [ ] FAQ page
- [ ] Contact page
- [ ] Portfolio/Gallery page
- [ ] Mobile responsiveness testing
- [ ] RTL testing

### Phase 3: City SEO Pages (Week 3)
- [ ] 12 primary city pages (Dubai, Abu Dhabi, Sharjah - 4 each)
- [ ] 4 secondary city pages (Ajman, RAK, Fujairah, UAQ)
- [ ] Unique content for each page (800+ words)
- [ ] Schema markup implementation
- [ ] Internal linking strategy

### Phase 4: Lead Capture (Week 4)
- [ ] Multi-step quote form component
- [ ] API routes for lead submission
- [ ] Database setup (Vercel Postgres/Supabase)
- [ ] Email notifications (SendGrid/Resend)
- [ ] WhatsApp integration
- [ ] Sticky CTAs and floating buttons
- [ ] Thank you pages with conversion tracking

### Phase 5: SEO & Launch (Week 5)
- [ ] All metadata implementation
- [ ] Sitemap generation
- [ ] Robots.txt configuration
- [ ] Google Search Console setup
- [ ] Google Analytics 4 + GTM
- [ ] Performance optimization (Lighthouse 90+)
- [ ] Final testing and QA
- [ ] Launch to production

### Phase 6: Marketing (Ongoing)
- [ ] Google Business Profile setup
- [ ] Directory submissions
- [ ] Google Ads campaigns
- [ ] Meta Ads campaigns
- [ ] Content expansion (blog posts)

---

## Verification Plan

### Automated Tests

```bash
# Build verification
npm run build

# TypeScript checks
npm run type-check

# Lint checks
npm run lint

# Lighthouse CI (all pages should score 90+)
npx lighthouse-ci autorun
```

### Manual Verification

1. **Responsive Testing**
   - Desktop: 1920px, 1440px, 1024px
   - Tablet: 768px
   - Mobile: 375px, 414px

2. **RTL Testing**
   - All Arabic pages render correctly RTL
   - Layout mirrors appropriately
   - No text overflow or alignment issues

3. **Form Testing**
   - All form validations work
   - Leads save to database
   - Email notifications send
   - WhatsApp links work

4. **SEO Verification**
   - All pages have unique meta titles/descriptions
   - Schema markup validates (use Google Rich Results Test)
   - Sitemap generates correctly
   - hreflang tags present and correct

5. **Performance**
   - Lighthouse Performance: 90+
   - Lighthouse SEO: 95+
   - Core Web Vitals: All "Good"
   - Images lazy load correctly

---

## Content Requirements

### Homepage Content
- [ ] Hero headline (EN + AR)
- [ ] Hero subheadline (EN + AR)
- [ ] Services descriptions (5x, EN + AR)
- [ ] Trust statistics (years, clients, etc.)

### City Pages Content (Per City)
- [ ] 800-1200 word unique content
- [ ] Local keywords integrated
- [ ] City-specific FAQs (5-10 each)
- [ ] Meta title and description

### Service Pages Content (Per Service)
- [ ] 500-800 word description
- [ ] Use cases and benefits
- [ ] Capacity ranges and pricing tiers
- [ ] FAQs specific to service

---

## Next Steps

1. **Confirm business details** (company name, pricing tiers)
2. **Finalize domain** once RamadanMajlis.ae availability is confirmed
3. **Clone repository** and begin Phase 1 development
4. **Setup Vercel project** with environment variables
