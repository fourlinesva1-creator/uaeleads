'use client';

import { useLocale } from 'next-intl';
import { usePathname, Link } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const targetLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <Link
      href={pathname}
      locale={targetLocale}
      className="
        flex items-center gap-2 px-3 py-2 rounded-lg
        border border-border bg-bg-card
        text-sm font-medium text-text-muted
        transition-all duration-200
        hover:border-gold hover:text-gold
      "
      aria-label={locale === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span>{locale === 'en' ? 'العربية' : 'English'}</span>
    </Link>
  );
}
