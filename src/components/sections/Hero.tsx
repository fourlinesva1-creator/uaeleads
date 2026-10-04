'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { ArrowUpRight, Phone } from 'lucide-react';
import { abuDhabiStorageProjectImages } from '@/data/abu-dhabi-storage-tent-project';

const stagger = (step: number) => ({ animationDelay: `${150 + step * 120}ms` });

export default function Hero() {
  const t = useTranslations('hero');

  return (
    // Pulled up under the transparent sticky header so the photo runs edge to edge.
    <section className="relative isolate -mt-28 flex min-h-[100svh] items-end overflow-hidden bg-[#101622]">
      {/* Background photo — the real Abu Dhabi job */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/projects/abu-dhabi-storage-tent/abu-dhabi-storage-tent-hero.jpg"
          alt="4,000 sqm industrial storage tent installed by Tent Now in Abu Dhabi"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="hero-drift object-cover object-center"
        />
        {/* Keep the photo bright; darken only where text sits */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#101622]/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#101622]/90 via-[#101622]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101622]/80 via-[#101622]/25 to-transparent rtl:bg-gradient-to-l" />
      </div>

      <div className="container-luxury w-full pb-10 sm:pb-14 lg:pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Text — bottom start */}
          <div className="max-w-2xl [text-shadow:0_1px_18px_rgba(16,22,34,0.55)]">
            <p
              className="hero-reveal mb-4 inline-flex items-center gap-2 rounded-xl sm:rounded-full border border-gold/30 bg-[#101622]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm [text-shadow:none] sm:text-[11px]"
              style={stagger(0)}
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {t('label')}
            </p>

            <h1
              className="hero-reveal mb-5 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl rtl:leading-[1.25]"
              style={stagger(1)}
            >
              {t('titleBold')}
              <br />
              {t('titleLight')}
            </h1>

            <p
              className="hero-reveal mb-7 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base"
              style={stagger(2)}
            >
              {t('lede')}
            </p>

            <div className="hero-reveal flex items-center gap-2" style={stagger(3)}>
              <a
                href="https://wa.me/971501826969"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-[#101622] shadow-lg shadow-gold/20 transition-colors hover:bg-white"
              >
                <svg className="h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('cta.whatsapp')}
              </a>
              <a
                href="tel:+971501826969"
                aria-label={t('cta.call')}
                title={t('cta.call')}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-[#101622] transition-colors hover:bg-white"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Project card — bottom end */}
          <Link
            href="/portfolio/abu-dhabi-storage-tent"
            className="hero-reveal group flex w-full max-w-md items-center gap-4 rounded-2xl border border-white/15 bg-[#101622]/50 p-3 pe-5 backdrop-blur-md transition-colors hover:border-gold/60 lg:w-auto"
            style={stagger(4)}
          >
            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={abuDhabiStorageProjectImages.gallery[0].src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white lg:whitespace-nowrap">{t('caption')}</p>
              <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-gold">
                {t('captionCta')}
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:-scale-x-100" />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
