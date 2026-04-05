import JsonLd from '@/components/seo/JsonLd';

interface BlogSchemaProps {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    url: string;
}

const BASE_URL = 'https://www.tentnow.ae';

export default function BlogSchema({ title, description, image, datePublished, dateModified, author, url }: BlogSchemaProps) {
    const absoluteImage = image.startsWith('/') ? `${BASE_URL}${image}` : image;
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        image: absoluteImage,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization',
            name: 'Tent Now',
            url: BASE_URL,
            sameAs: ['https://www.facebook.com/tentnow', 'https://x.com/tentnowae']
        },
        publisher: {
            '@type': 'Organization',
            name: 'Tent Now',
            url: BASE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${BASE_URL}/images/og-image.jpg`,
                width: 1200,
                height: 630
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        }
    };

    return <JsonLd data={schema} />;
}
