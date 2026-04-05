import React from 'react';
import JsonLd from './JsonLd';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
}

const UAE_CITIES = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'];

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "url": url,
        "image": image ? (image.startsWith('/') ? `https://www.tentnow.ae${image}` : image) : "https://www.tentnow.ae/images/og-image.jpg",
        "provider": {
            "@type": "LocalBusiness",
            "@id": "https://www.tentnow.ae/#business",
            "name": "Tent Now",
            "url": "https://www.tentnow.ae",
            "telephone": "+971501826969"
        },
        "areaServed": UAE_CITIES.map(city => ({ "@type": "City", "name": city })),
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": url,
            "servicePhone": "+971501826969",
            "availableLanguage": ["English", "Arabic"]
        }
    };

    return <JsonLd data={schema} />;
}
