import React from 'react';
import JsonLd from './JsonLd';

export default function WebsiteSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Tent Now",
        "alternateName": "Tent Now UAE",
        "url": "https://tentnow.ae",
        "description": "30 years of expertise in premium Ramadan tent & Majlis rentals across UAE. Complete solutions for hotels, corporates & families.",
        "inLanguage": ["en", "ar"],
        "publisher": {
            "@type": "Organization",
            "name": "Tent Now",
            "url": "https://tentnow.ae",
            "logo": {
                "@type": "ImageObject",
                "url": "https://tentnow.ae/images/tent-now-logo.gif"
            }
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://tentnow.ae/en?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    return <JsonLd data={schema} />;
}
