import { NextResponse } from 'next/server';

const baseUrl = 'https://tentnow.ae';

const cities = [
    'dubai',
    'abu-dhabi',
    'sharjah',
    'ajman',
    'ras-al-khaimah',
    'fujairah',
    'umm-al-quwain',
];

const slugs = [
    'ramadan-tent-rental',
    'majlis-tent-rental',
    'iftar-tent-rental',
    'suhoor-tent-rental',
    'sadu-tent-rental',
];

const mainPages = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/contact',
    '/faq',
    '/request-quote',
];

const standaloneServices = [
    'hotel-majlis',
    'corporate-events',
    'home-majlis',
    'iftar-tent-rental',
    'suhoor-tent-rental',
    'sadu-tent-rental',
    'furniture-rental',
    'decor-lighting',
    'iftar-tent-rental-dubai',
    'iftar-tent-rental-abu-dhabi',
    'iftar-tent-rental-sharjah',
    'ramadan-iftar-tent-setup',
];

const blogPosts = [
    'upcoming-ramadan-events-dubai-2026',
    'ramadan-calendar-uae-2026',
    'top-tent-suppliers-uae-2026',
    'ramadan-tent-pricing-guide-uae-2026',
];

function generateSitemapXml(locale: string): string {
    const urls: string[] = [];
    const lastMod = new Date().toISOString().split('T')[0];

    // Main pages
    mainPages.forEach((page) => {
        const priority = page === '' ? '1.0' : '0.8';
        urls.push(`
    <url>
        <loc>${baseUrl}/${locale}${page}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
    </url>`);
    });

    // City pages
    cities.forEach((city) => {
        urls.push(`
    <url>
        <loc>${baseUrl}/${locale}/locations/${city}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`);

        // Service pages for each city
        slugs.forEach((slug) => {
            urls.push(`
    <url>
        <loc>${baseUrl}/${locale}/locations/${city}/${slug}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.6</priority>
    </url>`);
        });
    });

    // Standalone service pages
    standaloneServices.forEach((service) => {
        urls.push(`
    <url>
        <loc>${baseUrl}/${locale}/services/${service}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`);
    });

    // Blog index
    urls.push(`
    <url>
        <loc>${baseUrl}/${locale}/blog</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>`);

    // Blog posts
    blogPosts.forEach((post) => {
        urls.push(`
    <url>
        <loc>${baseUrl}/${locale}/blog/${post}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>`);
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}
</urlset>`;
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const xml = generateSitemapXml(locale);

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
