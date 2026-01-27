'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const features = [
  {
    key: 'buyingPower',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: 'design',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    key: 'logistics',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
];

export default function Experience() {
  const t = useTranslations('hero');
  const exp = useTranslations('experience');

  return (
    <section className="section-dark">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Label */}
            <div className="section-label">
              <span>{exp('label')}</span>
            </div>

            {/* Heading */}
            <h2 className="heading-lg">
              {t('whyUs.title')}
            </h2>

            {/* Introduction Hook */}
            <div className="space-y-4">
              <p className="text-xl text-[#D4AF37] font-medium italic">
                {t('introduction.hook')}
              </p>
              <p className="body-md max-w-xl opacity-80 leading-loose">
                {t('introduction.body')}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              {features.map((feature) => (
                <div key={feature.key} className="card-feature">
                  <span className="text-gold">{feature.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-sm">{t(`whyUs.features.${feature.key}.title`)}</h3>
                    <p className="text-text-muted text-xs mt-1">{t(`whyUs.features.${feature.key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/about" className="btn-gold-text w-fit mt-4">
              <span>{exp('cta')}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="frame-gold">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] image-zoom-container">
                <Image
                  src="/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.32_9e63a6c4.jpg"
                  alt="Premium Majlis Interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
