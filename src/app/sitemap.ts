import { MetadataRoute } from 'next';

const baseUrl = 'https://www.tentnow.ae';

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
    '/locations',
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
    'uae-drone-missile-survival-guide-2026',
    'industrial-storage-tent-rental-uae-2026',
    'tent-rental-uae',
    'upcoming-ramadan-events-dubai-2026',
    'ramadan-calendar-uae-2026',
    'top-tent-suppliers-uae-2026',
    'ramadan-tent-pricing-guide-uae-2026',
];

export function generateSitemapForLocale(locale: string): MetadataRoute.Sitemap {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Add main pages
    mainPages.forEach((page) => {
        sitemapEntries.push({
            url: `${baseUrl}/${locale}${page}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: page === '' ? 1 : 0.8,
        });
    });

    // Add city pages
    cities.forEach((city) => {
        sitemapEntries.push({
            url: `${baseUrl}/${locale}/locations/${city}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        });

        // Add service pages for each city
        slugs.forEach((slug) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/locations/${city}/${slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.6,
            });
        });
    });

    // Add standalone service pages
    standaloneServices.forEach((service) => {
        sitemapEntries.push({
            url: `${baseUrl}/${locale}/services/${service}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        });
    });

    // Storage tent hub and sub-pages
    const storageTentPages = [
        '/services/storage-tents',
        '/services/storage-tents/clear-span-tents',
        '/services/storage-tents/warehouse-tents',
        '/services/storage-tents/industrial-tents',
    ];
    storageTentPages.forEach((page) => {
        sitemapEntries.push({
            url: `${baseUrl}/${locale}${page}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: page === '/services/storage-tents' ? 0.8 : 0.7,
        });
    });

    // Blog index page
    sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
    });

    // Individual blog posts
    blogPosts.forEach((post) => {
        sitemapEntries.push({
            url: `${baseUrl}/${locale}/blog/${post}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        });
    });

    return sitemapEntries;
}

// Default sitemap (combined - for backward compatibility)
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...generateSitemapForLocale('en'),
        ...generateSitemapForLocale('ar'),
    ];
}
