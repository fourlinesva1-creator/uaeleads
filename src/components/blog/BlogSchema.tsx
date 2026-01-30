import Script from 'next/script';

interface BlogSchemaProps {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    author: string;
    url: string;
}

export default function BlogSchema({ title, description, image, datePublished, author, url }: BlogSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        image: image,
        datePublished: datePublished,
        author: {
            '@type': 'Organization',
            name: author,
            url: 'https://tentnow.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'Tent Now',
            logo: {
                '@type': 'ImageObject',
                url: 'https://tentnow.com/images/tent-now-logo.gif'
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
