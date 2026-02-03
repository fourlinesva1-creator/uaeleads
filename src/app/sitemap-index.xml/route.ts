import { NextResponse } from 'next/server';

const baseUrl = 'https://tentnow.ae';

export async function GET() {
    const lastMod = new Date().toISOString().split('T')[0];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${baseUrl}/sitemap-en.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${baseUrl}/sitemap-ar.xml</loc>
        <lastmod>${lastMod}</lastmod>
    </sitemap>
</sitemapindex>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        },
    });
}
