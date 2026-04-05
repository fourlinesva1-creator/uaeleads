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
    'storage-tent-rental',
    'warehouse-tent-rental',
    'labor-accommodation-tents',
];

const mainPages = [
    '',
    '/services',
    '/pricing',
    '/locations',
    '/portfolio',
    '/about',
    '/contact',
    '/faq',
    '/request-quote',
    '/privacy',
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
    'tarpaulins',
];

const blogPosts = [
    'uae-drone-missile-survival-guide-2026',
    'industrial-storage-tent-rental-uae-2026',
    'iftar-tent-rental-checklist-uae-2026',
    'hotel-majlis-setup-guide-uae-2026',
    'how-to-choose-tent-rental-company-uae',
    'tent-rental-uae',
    'upcoming-ramadan-events-dubai-2026',
    'ramadan-calendar-uae-2026',
    'top-tent-suppliers-uae-2026',
    'ramadan-tent-pricing-guide-uae-2026',
    'corporate-event-tents-dubai-2026',
    'tarpaulin-price-guide-uae-2026',
    'tarpaulin-vs-storage-tent-uae',
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

// Key service images for image sitemap
const serviceImages: MetadataRoute.Sitemap = [
    {
        url: 'https://www.tentnow.ae/en/services/hotel-majlis',
        images: ['https://www.tentnow.ae/images/tent-now/hotel.jpg'],
    },
    {
        url: 'https://www.tentnow.ae/en/services/corporate-events',
        images: ['https://www.tentnow.ae/images/tent-now/corporate.jpg'],
    },
    {
        url: 'https://www.tentnow.ae/en/services/home-majlis',
        images: ['https://www.tentnow.ae/images/tent-now/home-majlis.jpg'],
    },
    {
        url: 'https://www.tentnow.ae/en/services/iftar-tent-rental',
        images: ['https://www.tentnow.ae/images/tent-now/iftar-tents.jpg'],
    },
    {
        url: 'https://www.tentnow.ae/en/services/storage-tents',
        images: ['https://www.tentnow.ae/images/storage-tents/storage-tent-hero.jpg'],
    },
    {
        url: 'https://www.tentnow.ae/en/services/tarpaulins',
        images: ['https://www.tentnow.ae/images/tarpaulins/tarpaulin-main.png'],
    },
    {
        url: 'https://www.tentnow.ae/en',
        images: ['https://www.tentnow.ae/images/og-image.jpg'],
    },
];

// Default sitemap (combined - for backward compatibility)
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        ...generateSitemapForLocale('en'),
        ...generateSitemapForLocale('ar'),
        ...serviceImages,
    ];
}
