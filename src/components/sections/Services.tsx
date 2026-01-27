'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const services = [
  {
    key: 'hotel',
    href: '/services/hotel-majlis',
    image: '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.32_9e63a6c4.jpg',
    popular: true,
  },
  {
    key: 'corporate',
    href: '/services/corporate-events',
    image: '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 14.38.09_8a40018e.jpg',
    popular: false,
  },
  {
    key: 'home',
    href: '/services/home-majlis',
    image: '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.31_347a7ef2.jpg',
    popular: false,
  },
];

export default function Services() {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');

  return (
    <section className="section-elevated border-t border-border">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="heading-md text-white mb-2">{t('title')}</h2>
            <p className="text-text-muted">{t('subtitle')}</p>
          </div>
          <Link
            href="/services"
            className="text-white font-semibold border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            {t('viewAll')}
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group relative flex flex-col gap-4"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-bg-card relative image-zoom-container">
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 left-4 z-10 badge-popular">
                    POPULAR
                  </div>
                )}

                {/* Image */}
                <Image
                  src={service.image}
                  alt={t(`items.${service.key}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="image-overlay">
                  <button className="bg-white text-bg-dark px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {tCommon('quickView')}
                  </button>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {t(`items.${service.key}.title`)}
                  </h3>
                  <p className="text-primary font-bold text-sm">
                    {t(`items.${service.key}.price`)}{' '}
                    <span className="text-text-muted font-normal text-xs">
                      / {t(`items.${service.key}.priceLabel`)}
                    </span>
                  </p>
                </div>
                <p className="text-text-muted text-sm mt-2 line-clamp-2">
                  {t(`items.${service.key}.description`)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
