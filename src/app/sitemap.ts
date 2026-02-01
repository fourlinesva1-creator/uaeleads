import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tentnow.ae';
    const locales = ['en', 'ar'];

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

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Add main pages for each locale
    locales.forEach((locale) => {
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
        const standaloneServices = [
            'hotel-majlis',
            'corporate-events',
            'home-majlis',
            'iftar-tent-rental',
            'suhoor-tent-rental',
            'sadu-tent-rental',
            'furniture-rental',
            'decor-lighting'
        ];

        standaloneServices.forEach((service) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}/services/${service}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.7,
            });
        });

        // Add blog pages
        const blogPosts = [
            'upcoming-ramadan-events-dubai-2026',
            'ramadan-calendar-uae-2026'
        ];

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
    });

    return sitemapEntries;
}
