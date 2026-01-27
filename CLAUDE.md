# RMT UAE - Ramadan Majlis Tent Solutions

## Project Overview
A high-conversion, SEO-optimized bilingual (English + Arabic) lead generation website for Ramadan Majlis and tent rental services across UAE.

## Brand Information
- **Brand Name (Brief):** RMT UAE
- **Brand Name (Full):** Ramadan Majlis Tent Solutions
- **Established:** 1984 (40+ years of experience)
- **Portfolio:** 5,000+ successful events
- **Tagline:** "Crafting Timeless Gatherings — From Tradition to Celebration"

## Contact Information
- **Address:** SAIF Zone, Sharjah, UAE
- **Phone/WhatsApp:** +971 55 510 1069
- **WhatsApp Link:** https://wa.me/971555101069

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl (English + Arabic with RTL support)
- **Forms:** React Hook Form + Zod
- **Hosting:** Vercel

## Project Structure
```
src/
├── app/
│   ├── [locale]/           # Bilingual routes
│   │   ├── layout.tsx      # Root layout with RTL
│   │   ├── page.tsx        # Homepage
│   │   ├── services/       # Service pages
│   │   ├── locations/      # City SEO pages
│   │   └── get-quote/      # Lead capture form
│   └── globals.css         # Design system
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
├── i18n/                   # Internationalization config
├── messages/               # Translation files
│   ├── en.json
│   └── ar.json
└── middleware.ts           # i18n middleware
```

## Design System
- **Primary Color (Gold):** #C9A227
- **Secondary Color (Midnight):** #1A2A4A
- **Accent Color (Olive):** #5C7A4A
- **Fonts:** Cairo (display), Tajawal (Arabic), IBM Plex Sans Arabic (body)

## Key Features
1. **Bilingual Support** - English and Arabic with full RTL
2. **Lead Capture** - Multi-step quote form, WhatsApp integration
3. **SEO Optimized** - City-specific landing pages, schema markup
4. **Mobile First** - Responsive design with sticky CTAs

## Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # TypeScript check
```

## Important Notes
- Always use RTL-compatible Tailwind classes (ms-/me- instead of ml-/mr-)
- Images are in `/public/images/`
- Logo is at `/public/images/RMT-Logo.png`
- WhatsApp number: 971555101069
