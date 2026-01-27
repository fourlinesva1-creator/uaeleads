'use client';

import { useTranslations } from 'next-intl';

export default function TrustBar() {
  const t = useTranslations('stats');

  const stats = [
    { value: t('events'), label: t('eventsLabel') },
    { value: t('vip'), label: t('vipLabel') },
    { value: t('support'), label: t('supportLabel') },
  ];

  return (
    <section className="bg-bg-dark border-b border-border">
      <div className="container-luxury py-8">
        <div className="flex flex-wrap gap-8 lg:gap-20 justify-center lg:justify-start items-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-8">
              <div className="stat-item text-center lg:text-left">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden lg:block w-px h-8 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
