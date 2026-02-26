import React from 'react';
import JsonLd from './JsonLd';

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
    image?: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": name,
        "description": description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Tent Now",
            "url": "https://www.tentnow.ae"
        },
        "url": url,
        "image": image || "https://www.tentnow.ae/images/og-image.jpg"
    };

    return <JsonLd data={schema} />;
}
