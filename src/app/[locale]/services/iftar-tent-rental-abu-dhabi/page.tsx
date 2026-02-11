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
        ? 'تأجير خيام الإفطار في أبوظبي 2026 | تجهيز خيام رمضان ومجالس - Tent Now'
        : 'Iftar Tent Rental Abu Dhabi 2026 | Ramadan Tent Setup & Majlis Solutions - Tent Now';

    const description = locale === 'ar'
        ? 'أفضل تأجير خيام إفطار في أبوظبي للجهات الحكومية والشركات والفنادق والعائلات. خيام مكيفة مع بوابات أمنية وأقمشة مقاومة للحريق. نتولى تصاريح بلدية أبوظبي والدفاع المدني. احصل على عرض أسعار مجاني!'
        : 'Top Iftar tent rental in Abu Dhabi for government, corporate, hotel & family events. Air-conditioned tents with security gates, fire-repellent fabric & full safety systems. Abu Dhabi Municipality & Civil Defense permits handled. Get a free quote!';

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
            canonical: `https://tentnow.ae/${locale}/services/iftar-tent-rental-abu-dhabi`,
            languages: {
                'en': 'https://tentnow.ae/en/services/iftar-tent-rental-abu-dhabi',
                'ar': 'https://tentnow.ae/ar/services/iftar-tent-rental-abu-dhabi',
            },
        },
    };
}

export default async function IftarTentRentalAbuDhabiPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <IftarTentSetupContent
            slug="iftar-tent-rental-abu-dhabi"
            heroImage="/images/tent-now/ramadan-tents-for-rentals.jpg"
            contentImage="/images/tent-now/ramadan-tents.jpg"
        />
    );
}
