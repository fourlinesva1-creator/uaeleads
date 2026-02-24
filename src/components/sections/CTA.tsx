'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.32_d085b4f3.jpg"
          alt="Premium Majlis Interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-bg-dark/90" />
      </div>

      {/* Content */}
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <div className="section-label">
              <span>{t('label')}</span>
            </div>

            {/* Heading */}
            <h2 className="heading-lg">
              {t('title')} <br />
              <span className="text-gold">{t('titleBold')}</span>
            </h2>

            {/* Description */}
            <p className="body-md max-w-xl">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-4">
              <a
                href="https://wa.me/971501826969"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-2"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('whatsapp')}
              </a>
              <a
                href="tel:+971501826969"
                className="btn-outline flex items-center gap-2"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {t('call')}
              </a>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="card-dark p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">VIP Protocol</h3>
              <p className="text-text-muted text-sm">White-glove service</p>
            </div>

            <div className="card-dark p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">24/7 Support</h3>
              <p className="text-text-muted text-sm">Always available</p>
            </div>

            <div className="card-dark p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">All 7 Emirates</h3>
              <p className="text-text-muted text-sm">Full UAE coverage</p>
            </div>

            <div className="card-dark p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-white font-bold mb-1">Custom Design</h3>
              <p className="text-text-muted text-sm">Tailored solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
