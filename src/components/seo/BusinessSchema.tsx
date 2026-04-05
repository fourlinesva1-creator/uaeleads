import React from 'react';
import JsonLd from './JsonLd';

export default function BusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "EventVenue"],
        "@id": "https://www.tentnow.ae/#business",
        "name": "Tent Now",
        "legalName": "Tent Now UAE",
        "image": [
            "https://www.tentnow.ae/images/og-image.jpg",
            "https://www.tentnow.ae/images/tent-now/home-majlis.jpg"
        ],
        "url": "https://www.tentnow.ae",
        "telephone": "+971501826969",
        "email": "info@tentnow.ae",
        "foundingDate": "1994",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "SAIF Zone",
            "addressLocality": "Sharjah",
            "addressRegion": "Sharjah",
            "addressCountry": "AE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 25.32830,
            "longitude": 55.51360
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday"
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
            { "@type": "City", "name": "Dubai" },
            { "@type": "City", "name": "Abu Dhabi" },
            { "@type": "City", "name": "Sharjah" },
            { "@type": "City", "name": "Ajman" },
            { "@type": "City", "name": "Ras Al Khaimah" },
            { "@type": "City", "name": "Fujairah" },
            { "@type": "City", "name": "Umm Al Quwain" }
        ],
        "description": "30 years of expertise in premium Ramadan tents, Majlis, Iftar setups, and industrial storage tents across all 7 Emirates. Civil Defence-approved structures. Free quote.",
        "priceRange": "AED 15–40/sqm/month",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Ahmed Al Mansoori" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Exceptional service. Tent Now set up our hotel Ramadan majlis within 48 hours — impeccable quality and the team handled all municipality permits seamlessly.",
                "datePublished": "2026-02-15"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sarah Thompson" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "We used Tent Now for our corporate iftar event in Abu Dhabi. The setup was stunning, on time, and the team was incredibly professional. Will book again.",
                "datePublished": "2026-02-20"
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Khalid Al Rashidi" },
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                "reviewBody": "Best tent rental company in Dubai. 30 years of experience really shows — everything from the sadu fabric to the lighting was perfect for our family majlis.",
                "datePublished": "2026-03-01"
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Tent Rental Services UAE",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ramadan Tent Rental",
                        "description": "Premium Ramadan tent rental for hotels, corporates, and families across UAE"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Majlis Rental UAE",
                        "description": "Authentic sadu-fabric Majlis setups for Ramadan and events across all Emirates"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Industrial Storage Tent Rental",
                        "description": "Civil Defence-approved clear span warehouse tents for construction, logistics, and industrial sectors"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Iftar Tent Rental",
                        "description": "Corporate and hotel Iftar tent setups with complete decor and furniture packages"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Tarpaulin Supply UAE",
                        "description": "PE200 heavy-duty tarpaulins for construction, agriculture, and industrial use across UAE"
                    }
                }
            ]
        }
    };

    return <JsonLd data={schema} />;
}
