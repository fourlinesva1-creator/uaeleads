import React from 'react';
import JsonLd from './JsonLd';

interface CityLocalBusinessSchemaProps {
    city: string;
    locale: string;
    pageUrl: string;
    description: string;
}

const cityData: Record<string, {
    name: string;
    addressLocality: string;
    addressRegion: string;
    latitude: number;
    longitude: number;
    telephone: string;
}> = {
    dubai: {
        name: 'Tent Now — Dubai',
        addressLocality: 'Dubai',
        addressRegion: 'Dubai',
        latitude: 25.2048,
        longitude: 55.2708,
        telephone: '+971501826969',
    },
    'abu-dhabi': {
        name: 'Tent Now — Abu Dhabi',
        addressLocality: 'Abu Dhabi',
        addressRegion: 'Abu Dhabi',
        latitude: 24.4539,
        longitude: 54.3773,
        telephone: '+971501826969',
    },
    sharjah: {
        name: 'Tent Now — Sharjah (SAIF Zone)',
        addressLocality: 'Sharjah',
        addressRegion: 'Sharjah',
        latitude: 25.3283,
        longitude: 55.5136,
        telephone: '+971501826969',
    },
    ajman: {
        name: 'Tent Now — Ajman',
        addressLocality: 'Ajman',
        addressRegion: 'Ajman',
        latitude: 25.4052,
        longitude: 55.5136,
        telephone: '+971501826969',
    },
    'ras-al-khaimah': {
        name: 'Tent Now — Ras Al Khaimah',
        addressLocality: 'Ras Al Khaimah',
        addressRegion: 'Ras Al Khaimah',
        latitude: 25.7889,
        longitude: 55.9612,
        telephone: '+971501826969',
    },
    fujairah: {
        name: 'Tent Now — Fujairah',
        addressLocality: 'Fujairah',
        addressRegion: 'Fujairah',
        latitude: 25.1288,
        longitude: 56.3265,
        telephone: '+971501826969',
    },
    'umm-al-quwain': {
        name: 'Tent Now — Umm Al Quwain',
        addressLocality: 'Umm Al Quwain',
        addressRegion: 'Umm Al Quwain',
        latitude: 25.5645,
        longitude: 55.5552,
        telephone: '+971501826969',
    },
};

export default function CityLocalBusinessSchema({
    city,
    locale,
    pageUrl,
    description,
}: CityLocalBusinessSchemaProps) {
    const data = cityData[city];
    if (!data) return null;

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `https://www.tentnow.ae/${locale}/locations/${city}#business`,
        name: data.name,
        image: 'https://www.tentnow.ae/images/og-image.jpg',
        url: pageUrl,
        telephone: data.telephone,
        email: 'info@tentnow.ae',
        foundingDate: '1994',
        description,
        address: {
            '@type': 'PostalAddress',
            addressLocality: data.addressLocality,
            addressRegion: data.addressRegion,
            addressCountry: 'AE',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: data.latitude,
            longitude: data.longitude,
        },
        areaServed: {
            '@type': 'City',
            name: data.addressLocality,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday',
                'Friday', 'Saturday', 'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
        },
        parentOrganization: {
            '@type': 'Organization',
            '@id': 'https://www.tentnow.ae/#business',
            name: 'Tent Now',
            url: 'https://www.tentnow.ae',
        },
        sameAs: [
            'https://www.facebook.com/tentnow',
            'https://x.com/tentnowae',
            'https://wa.me/971501826969',
        ],
        priceRange: 'AED 15–40/sqm/month',
    };

    return <JsonLd data={schema} />;
}
