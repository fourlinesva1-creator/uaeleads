import React from 'react';
import JsonLd from './JsonLd';

export default function BusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tent Now",
        "image": "https://tentnow.ae/images/og-image.jpg",
        "@id": "https://tentnow.ae",
        "url": "https://tentnow.ae",
        "telephone": "+971501826969",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "SAIF Zone",
            "addressLocality": "Sharjah",
            "addressRegion": "Sharjah",
            "addressCountry": "AE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.3283,
            "longitude": 55.5136
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            // Add social media links here if available
        ],
        "priceRange": "$$$"
    };

    return <JsonLd data={schema} />;
}
