'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';

const PROJECT_HREF = '/portfolio/abu-dhabi-storage-tent';

const portfolioImages = [
  { src: '/images/projects/abu-dhabi-storage-tent/abu-dhabi-storage-tent-hero.jpg', alt: '4,000 sqm storage tent project in Abu Dhabi', href: PROJECT_HREF },
  { src: '/images/projects/abu-dhabi-storage-tent/storage-tent-interior-goods.jpg', alt: 'Inside the Abu Dhabi storage tent with palletised goods', href: PROJECT_HREF },
  { src: '/images/tent-now/home-majlis.jpg', alt: 'Tent Now home majlis tent setup' },
  { src: '/images/tent-now/hotel.jpg', alt: 'Tent Now hotel Ramadan tent setup' },
  { src: '/images/tent-now/corporate.jpg', alt: 'Tent Now corporate event tent' },
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
          {portfolioImages.map((image, index) => {
            const tile = (
              <>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes={index === 0 ? '(max-width: 768px) 50vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                />
                {index === 0 ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/20 to-transparent flex items-end p-4 md:p-8">
                    <div>
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold font-display block mb-1 md:mb-2">
                        {t('recentProject.label')}
                      </span>
                      <span className="text-sm md:text-2xl font-display text-white block">
                        {t('recentProject.title')}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Hover Overlay */
                  <div className="image-overlay">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                )}
              </>
            );
            const className = `relative block overflow-hidden rounded-xl image-zoom-container ${index === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`;

            return image.href ? (
              <Link key={index} href={image.href} className={className}>
                {tile}
              </Link>
            ) : (
              <div key={index} className={className}>
                {tile}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
