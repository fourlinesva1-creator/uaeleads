import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { CheckCircle2, ArrowRight, MapPin, Ruler } from 'lucide-react';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import JsonLd from '@/components/seo/JsonLd';
import EquipmentRental from '@/components/sections/EquipmentRental';
import {
    abuDhabiStorageProjectContent,
    abuDhabiStorageProjectImages as images,
} from '@/data/abu-dhabi-storage-tent-project';

type Props = {
    params: Promise<{ locale: string }>;
};

const PATH = '/portfolio/abu-dhabi-storage-tent';
const BASE = 'https://www.tentnow.ae';

export async function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const c = abuDhabiStorageProjectContent[locale] ?? abuDhabiStorageProjectContent['en'];
    return {
        title: c.metaTitle,
        description: c.metaDescription,
        alternates: {
            canonical: `${BASE}/${locale}${PATH}`,
            languages: {
                'en': `${BASE}/en${PATH}`,
                'ar': `${BASE}/ar${PATH}`,
                'x-default': `${BASE}/en${PATH}`,
            },
        },
        openGraph: {
            title: c.metaTitle,
            description: c.metaDescription,
            url: `${BASE}/${locale}${PATH}`,
            siteName: 'Tent Now',
            images: [{ url: `${BASE}${images.og}`, width: 1200, height: 630 }],
            type: 'article',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: c.metaTitle,
            description: c.metaDescription,
            images: [`${BASE}${images.og}`],
        },
    };
}

export default async function AbuDhabiStorageTentProjectPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = abuDhabiStorageProjectContent[locale] ?? abuDhabiStorageProjectContent['en'];
    const isRtl = locale === 'ar';
    const pageUrl = `${BASE}/${locale}${PATH}`;

    const caseStudySchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: c.heroTitle,
        description: c.metaDescription,
        url: pageUrl,
        inLanguage: isRtl ? 'ar' : 'en',
        image: [`${BASE}${images.hero}`, ...images.gallery.map(g => `${BASE}${g.src}`)],
        datePublished: '2026-10-04',
        author: { '@id': `${BASE}/#business` },
        publisher: { '@id': `${BASE}/#business` },
        about: {
            '@type': 'Service',
            name: 'Storage Tent Rental',
            areaServed: { '@type': 'City', name: 'Abu Dhabi' },
            provider: { '@id': `${BASE}/#business` },
        },
    };

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <JsonLd data={caseStudySchema} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: c.breadcrumbPortfolio, href: '/portfolio' },
                    { name: c.breadcrumbProject, href: PATH },
                ]}
            />

            {/* Hero */}
            <section className="relative min-h-[80vh] flex items-end overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={images.hero}
                        alt={c.heroAlt}
                        fill
                        priority
                        quality={70}
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/70 to-[#101622]/20" />
                </div>

                <div className="container-luxury relative z-10 pt-40 pb-16 lg:pb-24 w-full">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>{c.heroLabel}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-tight leading-[1.1]">
                            {c.heroTitle}
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-8 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-lg md:text-xl text-[#d5dae3] font-light leading-relaxed max-w-3xl">
                            {c.heroBody}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-10">
                            <a
                                href="https://wa.me/971501826969"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-gold inline-flex items-center gap-3"
                            >
                                {c.ctaPrimary}
                            </a>
                            <Link
                                href="/request-quote"
                                className="btn-secondary inline-flex items-center gap-3"
                            >
                                {c.ctaSecondary}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 border-y border-[#1a212e]">
                <div className="container-luxury">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {c.stats.map(({ value, label }) => (
                            <div key={label} className="text-center">
                                <div className="text-3xl md:text-4xl font-display text-gold mb-2">{value}</div>
                                <div className="text-[#9da6b9] text-sm">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brief + Spec */}
            <section className="container-luxury py-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                    <div className="lg:col-span-3">
                        <div className="section-label mb-6">
                            <span>{c.briefLabel}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-8 leading-tight">{c.briefTitle}</h2>
                        <div className="space-y-6">
                            {c.briefBody.map((para, i) => (
                                <p key={i} className="text-[#9da6b9] text-lg leading-relaxed">{para}</p>
                            ))}
                        </div>
                    </div>

                    <aside className="lg:col-span-2 space-y-8">
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h2 className="text-white text-xl font-display mb-6 flex items-center gap-3">
                                <MapPin className="text-gold" size={22} /> {c.specTitle}
                            </h2>
                            <dl className="divide-y divide-[#282e39]">
                                {c.specRows.map(row => (
                                    <div key={row.label} className="flex justify-between gap-4 py-3 text-sm">
                                        <dt className="text-[#9da6b9]">{row.label}</dt>
                                        <dd className="text-white font-medium text-end">{row.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h2 className="text-white text-xl font-display mb-6 flex items-center gap-3">
                                <Ruler className="text-gold" size={22} /> {c.structuresTitle}
                            </h2>
                            <table className="w-full text-sm">
                                <tbody>
                                    {c.structures.map(s => (
                                        <tr key={s.name} className="border-b border-[#282e39]">
                                            <th scope="row" className="py-3 text-start text-[#9da6b9] font-normal">{s.name}</th>
                                            <td className="py-3 text-white" dir="ltr">{s.size}</td>
                                            <td className="py-3 text-end text-white">{s.area}</td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <th scope="row" colSpan={2} className="pt-4 text-start text-gold font-bold">{c.structuresTotal.label}</th>
                                        <td className="pt-4 text-end text-gold font-bold">{c.structuresTotal.area}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-4">{c.galleryTitle}</h2>
                    <p className="text-[#9da6b9] mb-12 max-w-2xl">{c.gallerySubtitle}</p>
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>figure]:mb-6">
                        {images.gallery.map(img => (
                            <figure
                                key={img.key}
                                className="break-inside-avoid overflow-hidden rounded-2xl border border-[#282e39] bg-[#1a212e] image-zoom-container"
                            >
                                <Image
                                    src={img.src}
                                    alt={c.alts[img.key]}
                                    width={img.w}
                                    height={img.h}
                                    className="w-full h-auto"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <figcaption className="px-5 py-4 text-sm text-[#9da6b9]">{c.alts[img.key]}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="container-luxury py-24 border-t border-[#1a212e]">
                <h2 className="text-3xl md:text-4xl font-display text-white mb-12">{c.featuresTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {c.features.map(item => (
                        <div
                            key={item.title}
                            className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all group"
                        >
                            <CheckCircle2 className="text-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
                            <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                            <p className="text-[#9da6b9] text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <EquipmentRental locale={locale} className="bg-[#0d1219]" />

            {/* Related */}
            <section className="py-20 border-t border-[#1a212e]">
                <div className="container-luxury">
                    <h2 className="text-2xl md:text-3xl font-display text-gold mb-8">{c.relatedTitle}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {c.related.map(({ href, title }) => (
                            <Link
                                key={href}
                                href={href}
                                className="group flex items-center justify-between gap-4 p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/40 transition-all"
                            >
                                <span className="text-white font-semibold group-hover:text-gold transition-colors">{title}</span>
                                <ArrowRight size={16} className="text-gold shrink-0 rtl:rotate-180" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-luxury pb-24">
                <div className="p-12 lg:p-16 bg-gold rounded-3xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl text-center md:text-start">
                            <h2 className="text-3xl md:text-4xl font-display text-[#101622] font-bold mb-4">{c.ctaTitle}</h2>
                            <p className="text-[#101622]/80 font-medium">{c.ctaBody}</p>
                        </div>
                        <a
                            href="https://wa.me/971501826969"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-[#101622] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#1a212e] transition-all shadow-2xl whitespace-nowrap"
                        >
                            {c.ctaButton}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
