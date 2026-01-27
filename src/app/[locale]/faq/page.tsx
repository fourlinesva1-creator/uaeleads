import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function FAQPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <FAQContent />;
}

function FAQContent() {
    const t = useTranslations('faq');

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                {/* Header Section */}
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>30 Years of Expertise</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-[#9da6b9] leading-relaxed">
                        {t('intro')}
                    </p>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {['when', 'howEarly', 'difference', 'permits', 'cooling', 'custom'].map((item) => (
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
                        <a href="tel:+971555101069" className="px-8 py-4 bg-[#101622] text-white rounded-xl font-display hover:scale-105 transition-transform">
                            Call Support Now
                        </a>
                        <a href="https://wa.me/971555101069" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-[#101622] rounded-xl font-display hover:scale-105 transition-transform">
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
