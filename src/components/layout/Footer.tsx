'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const cities = [
  { key: 'dubai', href: '/locations/dubai', labelEn: 'Ramadan Tent Dubai', labelAr: 'خيمة رمضان دبي' },
  { key: 'abuDhabi', href: '/locations/abu-dhabi', labelEn: 'Ramadan Tent Abu Dhabi', labelAr: 'خيمة رمضان أبوظبي' },
  { key: 'sharjah', href: '/locations/sharjah', labelEn: 'Ramadan Tent Sharjah', labelAr: 'خيمة رمضان الشارقة' },
  { key: 'ajman', href: '/locations/ajman', labelEn: 'Ramadan Tent Ajman', labelAr: 'خيمة رمضان عجمان' },
  { key: 'rak', href: '/locations/ras-al-khaimah', labelEn: 'Ramadan Tent Ras Al Khaimah', labelAr: 'خيمة رمضان رأس الخيمة' },
  { key: 'fujairah', href: '/locations/fujairah', labelEn: 'Ramadan Tent Fujairah', labelAr: 'خيمة رمضان الفجيرة' },
  { key: 'uaq', href: '/locations/umm-al-quwain', labelEn: 'Ramadan Tent Umm Al Quwain', labelAr: 'خيمة رمضان أم القيوين' },
];

const services = [
  { key: 'hotel', href: '/services/hotel-majlis' },
  { key: 'corporate', href: '/services/corporate-events' },
  { key: 'home', href: '/services/home-majlis' },
  { key: 'furniture', href: '/services/furniture-rental' },
  { key: 'decor', href: '/services/decor-lighting' },
];

const iftarPages = [
  { href: '/services/iftar-tent-rental-dubai', labelEn: 'Iftar Tent Dubai', labelAr: 'خيام الإفطار دبي' },
  { href: '/services/iftar-tent-rental-abu-dhabi', labelEn: 'Iftar Tent Abu Dhabi', labelAr: 'خيام الإفطار أبوظبي' },
  { href: '/services/iftar-tent-rental-sharjah', labelEn: 'Iftar Tent Sharjah', labelAr: 'خيام الإفطار الشارقة' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services.items');
  const locale = useLocale() as string;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-elevated border-t border-border">
      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative h-12 w-32">
                <Image
                  src="/images/tent-now-logo.gif"
                  alt="Tent Now"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-text-muted text-sm leading-relaxed mb-6">
              {t('description')}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://x.com/tentnowae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tent Now on X"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/tentnow"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tent Now on Facebook"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* City Pages */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">
              {t('cityPages')}
            </h3>
            <ul className="space-y-3">
              {cities.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {locale === 'ar' ? item.labelAr : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {tServices(`${item.key}.title`)}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-border/50">
                <span className="text-gold text-xs font-bold uppercase tracking-widest">
                  {locale === 'ar' ? 'خيام الإفطار' : 'Iftar Tents'}
                </span>
              </li>
              {iftarPages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-muted hover:text-gold transition-colors text-sm"
                  >
                    {locale === 'ar' ? item.labelAr : item.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">
              {t('contact')}
            </h3>
            <ul className="space-y-4">
              {/* Quick Links for Internal Linking */}
              <li>
                <Link href="/about" className="text-text-muted hover:text-gold transition-colors text-sm font-medium">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-muted hover:text-gold transition-colors text-sm font-medium">
                  {tNav('blog')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-text-muted hover:text-gold transition-colors text-sm font-medium">
                  {tNav('portfolio')}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-muted hover:text-gold transition-colors text-sm font-medium">
                  FAQ
                </Link>
              </li>
              <li className="pt-2 flex items-start gap-3">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-text-muted text-sm">{t('address')}</span>
              </li>
              <li>
                <a
                  href="tel:+971501826969"
                  className="flex items-center gap-3 text-text-muted hover:text-gold transition-colors"
                >
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">{t('phone')}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/971501826969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-lg hover:bg-[#20BD5A] transition-colors mt-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm">
              {t('copyright').replace('{year}', currentYear.toString())}
            </p>
            <p className="text-text-muted text-sm">
              {t('tagline')}
            </p>
            <a
              href="https://reachxl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-sm hover:text-gold transition-colors"
            >
              {t('designedBy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
