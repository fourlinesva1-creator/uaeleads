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
import BusinessSchema from '@/components/seo/BusinessSchema';

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

  const baseUrl = 'https://tentnow.ae';

  return {
    title: {
      template: '%s | Tent Now',
      default:
        locale === 'ar'
          ? 'Tent Now - ثلاثة عقود من التميز في خيام ومجالس رمضان'
          : 'Tent Now - Three Decades of Defining the Ramadan Majlis Experience',
    },
    description:
      locale === 'ar'
        ? 'خبرة 30 عاماً في تأجير خيام ومجالس رمضان الفاخرة في الإمارات. حلول متكاملة للفنادق والشركات والعائلات في دبي وأبوظبي والشارقة.'
        : "30 years of expertise in premium Ramadan tent & Majlis rentals across UAE. Complete solutions for hotels, corporates & families in Dubai, Abu Dhabi & Sharjah.",
    keywords: [
      'Ramadan tent rental Dubai',
      'Majlis rental UAE',
      'Iftar tent Dubai',
      'Corporate Ramadan tent',
      'تأجير خيام رمضان دبي',
      'مجالس رمضان الإمارات',
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
      },
    },
    openGraph: {
      title:
        locale === 'ar'
          ? 'Tent Now - حلول خيام ومجالس رمضان الفاخرة'
          : 'Tent Now - Premium Ramadan Majlis Tent Solutions',
      description:
        locale === 'ar'
          ? '30 عاماً من التميز في تأجير خيام ومجالس رمضان'
          : '30 years of excellence in Ramadan tent & Majlis rentals',
      url: baseUrl,
      siteName: 'Tent Now',
      locale: locale === 'ar' ? 'ar_AE' : 'en_AE',
      type: 'website',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Tent Now - Premium Ramadan Majlis Tent Solutions',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Tent Now - Premium Ramadan Majlis Tent Solutions',
      description: 'Premium Ramadan tent & Majlis rentals across UAE since 1994',
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
          <ModalProvider>
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
