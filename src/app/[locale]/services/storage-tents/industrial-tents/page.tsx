import { setRequestLocale } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { CheckCircle2, ArrowRight, ChevronDown, AlertTriangle } from 'lucide-react';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { industrialContent } from '@/data/storage-tent-content';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr
            ? 'تأجير الخيام الصناعية في الإمارات | التخزين المبرد، النفط والغاز، مخيمات العمال | تنت ناو'
            : 'Industrial Tent Rental UAE | Cold Storage, Oil & Gas, Labour Camps | Tent Now',
        description: isAr
            ? 'هياكل خيام صناعية متخصصة للتخزين المبرد وعمليات النفط والغاز واحتواء الخطر وإقامة العمال في الإمارات. معتمدة من الدفاع المدني. نطاق تشغيل من –20°م إلى +55°م.'
            : 'Purpose-engineered industrial tent structures for cold storage, oil & gas operations, hazardous containment, and labour accommodation across UAE. Civil Defence approved. Operating range –20°C to +55°C.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/storage-tents/industrial-tents`,
        },
        openGraph: {
            title: 'Industrial Tent Structures UAE — Cold Storage, Oil & Gas | Tent Now',
            description: 'Specialised industrial tents engineered for demanding UAE environments. Temperature-controlled cold stores, hazardous containment, oil field workshops, and labour accommodation.',
            images: [{ url: 'https://www.tentnow.ae/images/storage-tents/storage-tent-3.jpeg' }],
        },
    };
}

export default async function IndustrialTentsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const c = industrialContent[locale] ?? industrialContent['en'];
    const pageUrl = `https://www.tentnow.ae/${locale}/services/storage-tents/industrial-tents`;
    const isRtl = locale === 'ar';

    return (
        <div className="bg-[#101622]" dir={isRtl ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name="Industrial Tent Structures UAE — Cold Storage, Oil & Gas, Labour Camps"
                description="Purpose-engineered industrial tent structures for cold storage, oil & gas operations, hazardous containment, and labour accommodation. Civil Defence approved. Operating range –20°C to +55°C."
                url={pageUrl}
                image="https://www.tentnow.ae/images/storage-tents/storage-tent-3.jpeg"
            />
            <FAQSchema items={c.faqs} />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: isRtl ? 'الخدمات' : 'Services', href: '/services' },
                    { name: isRtl ? 'خيام التخزين' : 'Storage Tents', href: '/services/storage-tents' },
                    { name: isRtl ? 'الخيام الصناعية' : 'Industrial Tents', href: '/services/storage-tents/industrial-tents' },
                ]}
            />

            {/* Hero */}
            <section className="relative pt-32 lg:pt-48 pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/images/storage-tents/storage-tent-3.jpeg" alt="Industrial tent UAE" fill priority className="object-cover opacity-20 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>
                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8"><span>{c.heroLabel}</span></div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">{c.heroTitle}</h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-xl md:text-2xl text-[#9da6b9] font-light leading-relaxed max-w-3xl">{c.heroBody}</p>
                        <div className="flex flex-wrap gap-4 mt-12">
                            <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="btn-gold-fill px-8 py-4 rounded-xl font-display inline-flex items-center gap-3">
                                {c.ctaPrimary}
                            </a>
                            <Link href="/services/storage-tents" className="btn-secondary px-8 py-4 rounded-xl font-display inline-flex items-center gap-3">
                                <ArrowRight size={18} className={isRtl ? '' : 'rotate-180'} />
                                {c.ctaBack}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 border-y border-[#1a212e]">
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

            {/* What Makes Industrial Different */}
            <section className="container-luxury py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-6">{c.whatTitle}</h2>
                        <p className="text-[#9da6b9] leading-relaxed mb-6">{c.whatBody1}</p>
                        <p className="text-[#9da6b9] leading-relaxed mb-6">{c.whatBody2}</p>
                        <p className="text-[#9da6b9] leading-relaxed">{c.whatBody3}</p>
                    </div>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#282e39]">
                        <Image src="/images/storage-tents/storage-tent-4.jpeg" alt="Industrial tent specialised UAE" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 border-t border-[#1a212e]">
                <div className="container-luxury">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-4">{c.applicationsTitle}</h2>
                    <p className="text-[#9da6b9] mb-12 max-w-2xl">{c.applicationsSubtitle}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {c.applications.map(({ title, body, badge, alert }) => (
                            <div key={title} className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <h3 className="text-white text-xl font-bold">{title}</h3>
                                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shrink-0 ${alert ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-gold/20 text-gold border border-gold/30'}`}>
                                        {alert && <AlertTriangle size={12} />}
                                        {badge}
                                    </div>
                                </div>
                                <p className="text-[#9da6b9] text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance */}
            <section className="py-24 bg-[#0d1219] border-t border-[#1a212e]">
                <div className="container-luxury">
                    <h2 className="text-3xl font-display text-white mb-4">{c.complianceTitle}</h2>
                    <p className="text-[#9da6b9] mb-12 max-w-2xl">{c.complianceSubtitle}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {c.certifications.map(({ standard, desc }) => (
                            <div key={standard} className="p-6 bg-[#1a212e] border border-[#282e39] rounded-xl">
                                <div className="text-gold font-bold font-display text-lg mb-2">{standard}</div>
                                <p className="text-[#9da6b9] text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-24 container-luxury border-t border-[#1a212e]">
                <h2 className="text-3xl font-display text-white mb-12">{c.differentiatorTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {c.differentiators.map((item) => (
                        <div key={item.title} className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all group">
                            <CheckCircle2 className="text-gold mb-4 group-hover:scale-110 transition-transform" size={28} />
                            <h3 className="text-white text-lg font-bold mb-3">{item.title}</h3>
                            <p className="text-[#9da6b9] text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 container-luxury border-t border-[#1a212e]">
                <h2 className="text-3xl font-display text-white mb-12">{c.faqTitle}</h2>
                <div className="space-y-4 max-w-3xl">
                    {c.faqs.map((faq, idx) => (
                        <details key={idx} className="group bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden hover:border-gold/30 transition-colors">
                            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                                <h3 className="text-white font-display text-base md:text-lg leading-snug">{faq.q}</h3>
                                <ChevronDown className="text-gold shrink-0 transition-transform group-open:rotate-180" size={20} />
                            </summary>
                            <div className="px-6 pb-5">
                                <p className="text-[#9da6b9] leading-relaxed text-sm md:text-base">{faq.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </section>

            {/* Related */}
            <section className="container-luxury pb-16 border-t border-[#1a212e] pt-16">
                <h2 className="text-2xl font-display text-white mb-8">{c.relatedTitle}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {c.related.map(({ href, label, note }) => (
                        <Link key={href} href={href} className="p-6 bg-[#1a212e] border border-[#282e39] rounded-xl hover:border-gold/40 transition-all group flex items-center justify-between">
                            <div>
                                <span className="text-white font-display group-hover:text-gold transition-colors block mb-1">{label}</span>
                                <span className="text-[#9da6b9] text-xs">{note}</span>
                            </div>
                            <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity shrink-0" size={18} />
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="container-luxury pb-24">
                <div className="p-12 lg:p-16 bg-gold rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-16 opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700">
                        <ArrowRight size={300} strokeWidth={1} />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-display text-[#101622] font-bold mb-4">{c.ctaTitle}</h2>
                            <p className="text-[#101622]/80 font-medium">{c.ctaBody}</p>
                        </div>
                        <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-[#101622] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#1a212e] transition-all shadow-2xl whitespace-nowrap">
                            {c.ctaButton}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
