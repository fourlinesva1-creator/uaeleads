import React from 'react';
import JsonLd from './JsonLd';

export default function BusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tent Now",
        "image": "https://www.tentnow.ae/images/og-image.jpg",
        "@id": "https://www.tentnow.ae",
        "url": "https://www.tentnow.ae",
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
            "https://www.facebook.com/tentnow",
            "https://x.com/tentnowae",
            "https://wa.me/971501826969"
        ],
        "areaServed": [
            "Dubai",
            "Abu Dhabi",
            "Sharjah",
            "Ajman",
            "Ras Al Khaimah",
            "Fujairah",
            "Umm Al Quwain"
        ],
        "description": "30 years of expertise in premium Ramadan tents, Iftar setups, and Majlis for rent across all 7 Emirates of the UAE. Civil Defense approved structures for hotels, corporates, and families.",
        "priceRange": "$$$"
    };

    return <JsonLd data={schema} />;
}
