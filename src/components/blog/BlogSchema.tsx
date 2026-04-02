import Script from 'next/script';

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
            '@type': 'Person',
            name: author,
            url: 'https://www.tentnow.ae/en/about',
            sameAs: ['https://www.facebook.com/tentnow', 'https://x.com/tentnowae']
        },
        publisher: {
            '@type': 'Organization',
            name: 'Tent Now',
            url: 'https://www.tentnow.ae',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.tentnow.ae/images/tent-now-logo.gif'
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        }
    };

    return (
        <Script
            id="blog-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
