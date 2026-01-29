import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import FAQSchema from '@/components/seo/FAQSchema';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'faq' });

    return {
        title: t('title'),
        description: t('intro'),
        alternates: {
            canonical: `https://tentnow.ae/${locale}/faq`,
        },
    };
}

export default async function FAQPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <FAQContent />;
}

function FAQContent() {
    const t = useTranslations('faq');

    const faqKeys = ['when', 'howEarly', 'difference', 'permits', 'cooling', 'custom'];
    const faqItems = faqKeys.map(key => ({
        q: t(`items.${key}.q`),
        a: t(`items.${key}.a`)
    }));

    return (
        <div className="bg-[#101622]">
            <FAQSchema items={faqItems} />
            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tent-now/home-majlis.jpg"
                        alt="Tent Now Support"
                        fill
                        priority
                        className="object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>30 Years of Expertise</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            {t('title')}
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed max-w-3xl">
                            {t('intro')}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-luxury py-20 relative z-10">

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {faqKeys.map((item) => (
                        <div key={item} className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-[#D4AF37]/50 transition-all duration-300">
                            <h3 className="text-xl font-display text-white mb-4 flex gap-4">
                                <span className="text-[#D4AF37]">Q:</span>
                                {t(`items.${item}.q`)}
                            </h3>
                            <div className="pl-8 text-[#9da6b9] leading-relaxed border-l border-[#282e39]">
                                <p>{t(`items.${item}.a`)}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-32 p-12 bg-[#D4AF37] rounded-3xl text-[#101622] text-center">
                    <h2 className="text-3xl md:text-4xl font-display mb-6">{t('cta')}</h2>
                    <p className="text-lg font-medium max-w-2xl mx-auto mb-10 opacity-90">
                        {t('ctaBody')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="tel:+971501826969" className="px-8 py-4 bg-[#101622] text-white rounded-xl font-display hover:scale-105 transition-transform">
                            Call Support Now
                        </a>
                        <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#101622] rounded-xl font-display hover:scale-105 transition-transform">
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
