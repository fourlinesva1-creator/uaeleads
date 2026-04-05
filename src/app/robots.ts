import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.tentnow.ae';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
            // AI crawlers explicitly allowed for brand visibility in AI search
            // (ChatGPT, Perplexity, Claude, Gemini, Copilot)
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'CCBot',
                    'anthropic-ai',
                    'Claude-Web',
                    'ClaudeBot',
                    'PerplexityBot',
                    'Google-Extended',
                    'Bytespider',
                ],
                allow: '/',
            },
        ],
        sitemap: [
            `${baseUrl}/sitemap.xml`,
            `${baseUrl}/en/sitemap.xml`,
            `${baseUrl}/ar/sitemap.xml`,
        ],
    };
}
