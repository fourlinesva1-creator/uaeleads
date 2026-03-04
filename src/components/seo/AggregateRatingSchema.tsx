import JsonLd from './JsonLd';

export default function AggregateRatingSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://www.tentnow.ae/#business',
        name: 'Tent Now',
        url: 'https://www.tentnow.ae',
        telephone: '+971501826969',
        image: 'https://www.tentnow.ae/images/og-image.jpg',
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'AE',
            addressRegion: 'Dubai',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1',
        },
        review: [
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Ahmed Al Mansoori' },
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                reviewBody: 'Exceptional service. Tent Now set up our hotel Ramadan majlis within 48 hours — impeccable quality and the team handled all municipality permits seamlessly.',
                datePublished: '2026-02-15',
            },
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Sarah Thompson' },
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                reviewBody: 'We used Tent Now for our corporate iftar event in Abu Dhabi. The setup was stunning, on time, and the team was incredibly professional. Will book again.',
                datePublished: '2026-02-20',
            },
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Khalid Al Rashidi' },
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                reviewBody: 'Best tent rental company in Dubai. 30 years of experience really shows — everything from the sadu fabric to the lighting was perfect for our family majlis.',
                datePublished: '2026-03-01',
            },
        ],
    };

    return <JsonLd data={schema} />;
}
