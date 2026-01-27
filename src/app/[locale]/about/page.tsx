import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <AboutContent />;
}

function AboutContent() {
    const t = useTranslations('experience');
    const brand = useTranslations('brand');

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                {/* Header Section */}
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>{t('label')}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        {t('ourStory.title')}
                    </h1>
                    <p className="text-xl text-[#D4AF37] mb-8 font-medium italic">
                        {t('ourStory.subtitle')}
                    </p>
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-[#9da6b9] leading-relaxed mb-6">
                            {t('ourStory.body')}
                        </p>
                        <p className="text-lg text-[#9da6b9] leading-relaxed">
                            {t('ourStory.ethos')}
                        </p>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    {['integrity', 'respect', 'quality'].map((value) => (
                        <div key={value} className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl group hover:border-[#D4AF37] transition-all duration-500">
                            <h3 className="text-2xl font-display text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                                {t(`values.${value}.title`)}
                            </h3>
                            <p className="text-[#9da6b9] leading-relaxed">
                                {t(`values.${value}.description`)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-32 p-12 bg-gradient-to-r from-[#1a212e] to-[#101622] border border-[#282e39] rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <p className="text-4xl font-display text-white mb-2">1994</p>
                            <p className="text-sm text-[#D4AF37] uppercase tracking-widest">{brand('established')}</p>
                        </div>
                        <div>
                            <p className="text-4xl font-display text-white mb-2">30+</p>
                            <p className="text-sm text-[#D4AF37] uppercase tracking-widest">{brand('experience')}</p>
                        </div>
                        <div>
                            <p className="text-4xl font-display text-white mb-2">5,000+</p>
                            <p className="text-sm text-[#D4AF37] uppercase tracking-widest">Events Curated</p>
                        </div>
                        <div>
                            <p className="text-4xl font-display text-white mb-2">24/7</p>
                            <p className="text-sm text-[#D4AF37] uppercase tracking-widest">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
