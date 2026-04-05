import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Manrope, Tajawal } from 'next/font/google';
import '../globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { ModalProvider } from '@/components/ui/ModalProvider';
import CallbackModal from '@/components/ui/CallbackModal';
import UrgencyBanner from '@/components/ui/UrgencyBanner';
import BusinessSchema from '@/components/seo/BusinessSchema';
import WebsiteSchema from '@/components/seo/WebsiteSchema';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const baseUrl = 'https://www.tentnow.ae';

  return {
    title: {
      template: '%s | Tent Now UAE',
      default:
        locale === 'ar'
          ? 'تأجير خيام رمضان ومجالس | دبي | أبوظبي | الشارقة | Tent Now'
          : 'Ramadan Tent Rental & Majlis Supplier Dubai | Abu Dhabi | Sharjah | Tent Now',
    },
    description:
      locale === 'ar'
        ? '30 عاماً من الخبرة في توفير خيام رمضان الفاخرة وتجهيزات الإفطار والمجالس في جميع أنحاء الإمارات. حلول اقتصادية ومتوافقة وأصيلة لرمضان 2026. احصل على عرض سعر مجاني اليوم.'
        : '30 years of expertise in premium Ramadan tents, Iftar setups, and Majlis for rent across UAE. Cost-effective, compliant, and authentic solutions for Ramadan 2026. Get a free quote today.',
    keywords: [
      // English keywords
      'Ramadan tent rental Dubai',
      'Majlis rental UAE',
      'Iftar tent Dubai',
      'Corporate Ramadan tent',
      'Ramadan tent supplier',
      'Majlis for rent Dubai',
      'Suhoor tent rental',
      'tent rental sharjah',
      'ramadan rental tents',
      'ramadan tents 2026',
      'majlis tents',
      // Arabic keywords - from Search Console high impressions
      'خيام فعاليات في دبي',
      'تاجير خيام في ابوظبي',
      'تاجير خيام في دبي',
      'خيام للإيجار في دبي',
      'خيام للإيجار في الشارقة',
      'خيام الفعاليات في دبي',
      'تأجير خيام رمضان دبي',
      'مجالس رمضان الإمارات',
      'خيمة إفطار دبي',
    ],
    authors: [{ name: 'Tent Now' }],
    creator: 'Tent Now',
    publisher: 'Tent Now',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title:
        locale === 'ar'
          ? 'Tent Now - تأجير خيام رمضان ومجالس في دبي وأبوظبي والشارقة'
          : 'Tent Now - Ramadan Tent Rental & Majlis Supplier in Dubai, Abu Dhabi, Sharjah',
      description:
        locale === 'ar'
          ? '30 عاماً من الخبرة في توفير خيام رمضان الفاخرة والمجالس. احصل على عرض سعر مجاني لرمضان 2026.'
          : '30 years providing premium Ramadan tents, Iftar setups & Majlis for rent. Get a free quote for Ramadan 2026.',
      url: baseUrl,
      siteName: 'Tent Now',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Tent Now - Ramadan Tent Rental & Majlis Supplier UAE',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tent Now - Ramadan Tent Rental Dubai | Abu Dhabi | Sharjah',
      description: '30 years providing premium Ramadan tents & Majlis rentals across UAE. Get your free quote for 2026.',
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'iHU6ZGYxHQp5Ds7bltEhaeroA5MuhUuPrf8fyzy6enQ',
      yandex: 'eaba13e4d8ebad35',
      other: {
        'msvalidate.01': '5CBE911555122AA9CF8B502891454EF1',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as 'en' | 'ar')) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} className={`${manrope.variable} ${tajawal.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-display">
        <NextIntlClientProvider messages={messages}>
          <BusinessSchema />
          <WebsiteSchema />
          <ModalProvider>
            {/* <UrgencyBanner /> */}
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppButton />
            <CallbackModal />
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
