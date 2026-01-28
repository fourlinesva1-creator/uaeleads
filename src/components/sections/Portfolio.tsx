'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const portfolioImages = [
  '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.31_f7b77c61.jpg',
  '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.32_d085b4f3.jpg',
  '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.32_9e63a6c4.jpg',
  '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 14.38.09_8a40018e.jpg',
  '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.31_347a7ef2.jpg',
  '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.31_c2c01de9.jpg',
];

export default function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section className="section-dark">
      <div className="container-luxury">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="heading-md text-white mb-2">{t('title')}</h2>
            <p className="text-text-muted">{t('subtitle')}</p>
          </div>
          <Link
            href="/portfolio"
            className="text-white font-semibold border-b border-white pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            {t('viewMore')}
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl image-zoom-container ${
                index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <Image
                src={image}
                alt={`Tent Now Portfolio - Majlis Setup ${index + 1}`}
                fill
                className="object-cover"
                sizes={index === 0 ? '(max-width: 768px) 50vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
              />
              {/* Hover Overlay */}
              <div className="image-overlay">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
