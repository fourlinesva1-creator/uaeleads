import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import IftarTentSetupContent from '@/components/sections/IftarTentSetupContent';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'تأجير خيام الإفطار في الشارقة 2026 | تجهيز خيام رمضان ومجالس - Tent Now'
        : 'Iftar Tent Rental Sharjah 2026 | Ramadan Tent Setup & Majlis Solutions - Tent Now';

    const description = locale === 'ar'
        ? 'أفضل تأجير خيام إفطار في الشارقة للمؤسسات الثقافية والمساجد والشركات والعائلات. خيام تقليدية أصيلة مع تكييف وسلامة من الحريق. خيام سدو تراثية متوفرة. نتولى تصاريح بلدية الشارقة. عرض أسعار مجاني!'
        : 'Top Iftar tent rental in Sharjah for cultural institutions, mosques, corporate & family events. Authentic traditional tents with AC & fire safety. Heritage Sadu tents available. Sharjah Municipality permits handled. Free quote!';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: '/images/tent-now/ramadan-tents.jpg', width: 1200, height: 630 }],
            type: 'website',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
            siteName: 'Tent Now UAE',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/tent-now/ramadan-tents.jpg'],
        },
        alternates: {
            canonical: `https://tentnow.ae/${locale}/services/iftar-tent-rental-sharjah`,
            languages: {
                'en': 'https://tentnow.ae/en/services/iftar-tent-rental-sharjah',
                'ar': 'https://tentnow.ae/ar/services/iftar-tent-rental-sharjah',
            },
        },
    };
}

export default async function IftarTentRentalSharjahPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <IftarTentSetupContent
            slug="iftar-tent-rental-sharjah"
            heroImage="/images/tent-now/ramadan-tents.jpg"
            contentImage="/images/tent-now/ramadan-tents-for-rentals.jpg"
        />
    );
}
