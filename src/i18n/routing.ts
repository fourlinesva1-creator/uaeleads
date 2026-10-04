import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
  // Pages declare hreflang in <head>. The middleware's Link header pointed
  // x-default at the un-prefixed URL (a redirect), contradicting the HTML.
  alternateLinks: false,
});
