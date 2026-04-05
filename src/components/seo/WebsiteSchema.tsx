import React from 'react';
import JsonLd from './JsonLd';

export default function WebsiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Tent Now",
        "alternateName": "Tent Now UAE",
        "url": "https://www.tentnow.ae",
        "description": "30 years of expertise in premium Ramadan tent & Majlis rentals across UAE. Complete solutions for hotels, corporates & families.",
        "inLanguage": ["en", "ar"],
        "publisher": {
            "@type": "Organization",
            "name": "Tent Now",
            "@id": "https://www.tentnow.ae/#business",
            "url": "https://www.tentnow.ae",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.tentnow.ae/images/og-image.jpg",
                "width": 1200,
                "height": 630
            }
        }
    };

    return <JsonLd data={schema} />;
}
