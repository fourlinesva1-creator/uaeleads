import React from 'react';
import JsonLd from './JsonLd';

interface FAQItem {
    q: string;
    a: string;
}

interface FAQSchemaProps {
    items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return <JsonLd data={schema} />;
}
