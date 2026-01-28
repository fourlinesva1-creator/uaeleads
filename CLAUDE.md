# Tent Now Website Context

## Project Overview
A premium, luxury lead-generation website for **Tent Now** (tentnow.ae). The site targets high-end residential, hotel, and corporate clients in the UAE for the 2026 Ramadan season.

## Tech Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **i18n**: `next-intl` (EN/AR)
- **Styling**: Tailwind CSS v4
- **Components**: Lucide React, Framer Motion (planned)
- **Forms**: React Hook Form + Zod

## Design Tokens
- **Background**: `#101622` (bg-dark)
- **Gold**: `#D4AF37`
- **Blue**: `#1152d4`
- **Muted Text**: `#9da6b9`

## Key Directories
- `src/messages`: Translation files (JSON)
- `src/components/layout`: Header, Footer
- `src/components/sections`: UI Sections for home and generic pages
- `src/data/city-content.ts`: Specialized SEO content for dynamic city/service routes
- `src/app/[locale]/locations/[city]/[slug]`: Dynamic route for localized SEO pages

## Development Rules
- **Formatting**: Always use GitHub Flavored Markdown for documentation.
- **RTL Support**: Ensure all components handle `dir="rtl"` for Arabic.
- **Image Optimization**: Use `next/image` with proper `sizes` and `alt` tags.
- **Naming**: Use PascalCase for components and camelCase for hooks/functions.
- **SEO**: Dynamic pages must use `generateStaticParams` for SSG.

## Production Checklist
- [x] Successful local build
- [x] Check images in `public/images`
- [x] Verify footer agency credit
- [x] Complete all 7 Emirates SEO content
