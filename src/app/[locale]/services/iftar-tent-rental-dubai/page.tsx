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
        ? 'تأجير خيام الإفطار في دبي 2026 | تجهيز خيام رمضان ومجالس مكيفة - Tent Now'
        : 'Iftar Tent Rental Dubai 2026 | Ramadan Tent Setup, Majlis & AC Tents - Tent Now';

    const description = locale === 'ar'
        ? 'أفضل تأجير خيام إفطار في دبي للمجالس العائلية وإفطارات الشركات وفعاليات الفنادق والتجمعات المجتمعية. تجهيز كامل مع تكييف وديكور وتصاريح بلدية دبي والدفاع المدني. خبرة 30 عامًا. احصل على عرض أسعار اليوم!'
        : 'Top Iftar tent rental in Dubai for family Majlis, corporate gatherings, hotel Ramadan extensions & community events. Full setup with AC, décor, Dubai Municipality & Civil Defense permits handled. 30+ years expertise. Get a quote today!';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: '/images/tent-now/ramadan-tents-for-rentals.jpg', width: 1200, height: 630 }],
            type: 'website',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
            siteName: 'Tent Now UAE',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/tent-now/ramadan-tents-for-rentals.jpg'],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/iftar-tent-rental-dubai`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services/iftar-tent-rental-dubai',
                'ar': 'https://www.tentnow.ae/ar/services/iftar-tent-rental-dubai',
                'x-default': 'https://www.tentnow.ae/en/services/iftar-tent-rental-dubai',
            },
        },
    };
}

export default async function IftarTentRentalDubaiPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <IftarTentSetupContent
            slug="iftar-tent-rental-dubai"
            heroImage="/images/tent-now/ramadan-tents-for-rentals.jpg"
            contentImage="/images/tent-now/ramadan-tents.jpg"
        />
    );
}
