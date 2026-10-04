import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // next-intl redirects un-prefixed paths (e.g. /services/x -> /en/services/x)
  // with a temporary 307. Make those permanent so Google consolidates signals
  // onto the prefixed URL. "/" stays temporary: it picks a locale per visitor.
  const location = response.headers.get('location');
  if (response.status === 307 && location && request.nextUrl.pathname !== '/') {
    const permanent = NextResponse.redirect(new URL(location, request.url), 308);
    const cookie = response.headers.get('set-cookie');
    if (cookie) permanent.headers.set('set-cookie', cookie);
    return permanent;
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next (Next.js internals)
  // - static files (images, etc.)
  matcher: ['/', '/(ar|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
