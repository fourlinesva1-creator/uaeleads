'use client';

import React from 'react';
import JsonLd from './JsonLd';
import { useLocale } from 'next-intl';

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const locale = useLocale();
    const baseUrl = 'https://www.tentnow.ae';

    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${baseUrl}/${locale}`
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": `${baseUrl}/${locale}${item.href}`
            }))
        ]
    };

    return <JsonLd data={schema} />;
}
