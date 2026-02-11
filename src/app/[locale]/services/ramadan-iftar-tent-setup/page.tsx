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
        ? 'تجهيز خيام رمضان للإفطار في دبي والإمارات 2026 | خيام مكيفة وآمنة - Tent Now'
        : 'Iftar Tent Rental Dubai & UAE 2026 | Ramadan Tent Setup, Majlis & AC Tents - Tent Now';

    const description = locale === 'ar'
        ? 'أفضل خدمة تأجير خيام الإفطار في دبي وأبوظبي والشارقة. خيام مكيفة، مقاومة للحريق، بوابات أمنية، ونظام سلامة متكامل. تجهيز كامل للمجالس العائلية وإفطارات الشركات وفعاليات الفنادق. احصل على عرض أسعار اليوم!'
        : 'Top Iftar tent rental in Dubai, Abu Dhabi & UAE for family Majlis, corporate gatherings, hotel Ramadan extensions & community events. Full setup with AC, décor, permits & safety handled. 30+ years expertise. Get a quote today!';

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
            canonical: `https://tentnow.ae/${locale}/services/ramadan-iftar-tent-setup`,
            languages: {
                'en': 'https://tentnow.ae/en/services/ramadan-iftar-tent-setup',
                'ar': 'https://tentnow.ae/ar/services/ramadan-iftar-tent-setup',
            },
        },
    };
}

export default async function RamadanIftarTentSetupPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <IftarTentSetupContent />;
}
