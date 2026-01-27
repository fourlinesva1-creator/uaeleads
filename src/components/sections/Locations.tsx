'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const cities = [
  { key: 'dubai', slug: 'dubai', featured: true },
  { key: 'abuDhabi', slug: 'abu-dhabi', featured: true },
  { key: 'sharjah', slug: 'sharjah', featured: true },
  { key: 'ajman', slug: 'ajman', featured: false },
  { key: 'rak', slug: 'ras-al-khaimah', featured: false },
  { key: 'fujairah', slug: 'fujairah', featured: false },
  { key: 'uaq', slug: 'umm-al-quwain', featured: false },
];

export default function Locations() {
  const t = useTranslations('locations');

  const featuredCities = cities.filter((c) => c.featured);
  const otherCities = cities.filter((c) => !c.featured);

  return (
    <section className="section-elevated border-t border-border">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-text-muted">
            {t('subtitle')}
          </p>
        </div>

        {/* Featured Cities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredCities.map((city) => (
            <Link
              key={city.key}
              href={`/locations/${city.slug}`}
              className="group card-dark p-8 text-center hover:border-gold/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {t(`cities.${city.key}`)}
              </h3>

              <span className="inline-flex items-center gap-1 text-gold text-sm">
                View Services
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>

              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-colors" />
            </Link>
          ))}
        </div>

        {/* Other Cities */}
        <div className="flex flex-wrap justify-center gap-4">
          {otherCities.map((city) => (
            <Link
              key={city.key}
              href={`/locations/${city.slug}`}
              className="px-6 py-3 rounded-full border border-border text-text-muted hover:border-gold hover:text-gold transition-colors"
            >
              {t(`cities.${city.key}`)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
