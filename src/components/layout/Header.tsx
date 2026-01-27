'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import Image from 'next/image';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { ChevronDown, Menu, X } from 'lucide-react';

const serviceLinks = [
  { key: 'hotel', href: '/services/hotel-majlis' },
  { key: 'corporate', href: '/services/corporate-events' },
  { key: 'home', href: '/services/home-majlis' },
  { key: 'furniture', href: '/services/furniture-rental' },
  { key: 'decor', href: '/services/decor-lighting' },
];

const navigation = [
  { key: 'home', href: '/', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  {
    key: 'services',
    href: '/services',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    children: serviceLinks
  },
  { key: 'portfolio', href: '/portfolio', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { key: 'about', href: '/about', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { key: 'contact', href: '/contact', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
];

export default function Header() {
  const t = useTranslations('nav');
  const ts = useTranslations('services');
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-border py-2' : 'bg-transparent py-4'
      }`}>
      <nav className="container-luxury">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gold/30 shadow-lg group-hover:border-gold transition-colors">
              <Image
                src="/images/RMT-Logo.png"
                alt="RMT UAE"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-lg font-bold tracking-widest uppercase font-display">RMT UAE</span>
              <span className="text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase">{t('experience') || 'Ramadan Specialists'}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <div key={item.key} className="relative group/nav">
                {item.children ? (
                  <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${pathname.startsWith(item.href)
                    ? 'text-gold'
                    : 'text-text-muted hover:text-white'
                    }`}>
                    {t(item.key)}
                    <ChevronDown size={14} className="group-hover/nav:rotate-180 transition-transform duration-300" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${pathname === item.href
                      ? 'text-gold bg-gold/5'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {t(item.key)}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform translate-y-2 group-hover/nav:translate-y-0 z-50">
                    <div className="w-64 bg-[#1a212e] border border-[#282e39] rounded-2xl shadow-2xl overflow-hidden p-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          className="flex flex-col px-4 py-3 rounded-xl hover:bg-[#D4AF37]/5 transition-colors group/child"
                        >
                          <span className="text-white text-sm font-bold group-hover/child:text-[#D4AF37] transition-colors">
                            {ts(`items.${child.key}.title`)}
                          </span>
                          <span className="text-[10px] text-text-muted uppercase tracking-wider mt-0.5">
                            {ts(`items.${child.key}.priceLabel`)} {ts(`items.${child.key}.price`)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - CTA & Language */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>

            <Link
              href="/request-quote"
              className="hidden md:inline-flex px-6 py-3 bg-[#D4AF37] text-[#101622] text-xs font-bold tracking-widest uppercase rounded-lg hover:bg-[#E5C76B] transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              {t('getQuote')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-muted hover:text-white transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 top-[80px] bg-[#101622] z-40 transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } ${locale === 'ar' ? (isOpen ? 'translate-x-0' : '-translate-x-full') : ''}`}>
          <div className="h-full overflow-y-auto p-6 flex flex-col gap-2">
            {navigation.map((item) => (
              <div key={item.key} className="flex flex-col border-b border-border/50">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setActiveSubmenu(activeSubmenu === item.key ? null : item.key)}
                      className="flex items-center justify-between px-4 py-5 text-lg font-display text-white"
                    >
                      {t(item.key)}
                      <ChevronDown className={`transition-transform duration-300 ${activeSubmenu === item.key ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeSubmenu === item.key ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                      }`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="flex flex-col px-8 py-3 hover:bg-gold/5 rounded-xl"
                        >
                          <span className="text-white text-sm font-bold">
                            {ts(`items.${child.key}.title`)}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-5 text-lg font-display transition-all ${pathname === item.href ? 'text-gold' : 'text-white'
                      }`}
                  >
                    {t(item.key)}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-8 flex flex-col gap-4">
              <Link
                href="/request-quote"
                onClick={() => setIsOpen(false)}
                className="btn-gold py-5 rounded-2xl text-center text-lg shadow-xl shadow-gold/20"
              >
                {t('getQuote')}
              </Link>
              <div className="flex justify-center py-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

