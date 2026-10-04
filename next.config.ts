import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
    },
    {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
    },
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
    },
];

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Next 16 rejects any quality not listed here (400 from /_next/image).
        qualities: [60, 70, 75, 85],
    },
    // Old slugs for pages that were repurposed (Oct 2026): the "corporate" item became
    // labor accommodation and "decor" became cold storage.
    async redirects() {
        const moved = [
            ['corporate-events', 'labor-accommodation-tents'],
            ['decor-lighting', 'cold-storage-tents'],
        ];
        return moved.flatMap(([from, to]) => [
            { source: `/:locale(en|ar)/services/${from}`, destination: `/:locale/services/${to}`, permanent: true },
            { source: `/services/${from}`, destination: `/en/services/${to}`, permanent: true },
        ]);
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
};

export default withNextIntl(nextConfig);
