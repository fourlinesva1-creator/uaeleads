import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'experience' });

    return {
        title: t('ourStory.title'),
        description: t('ourStory.subtitle'),
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/about`,
            languages: {
                'en': 'https://www.tentnow.ae/en/about',
                'ar': 'https://www.tentnow.ae/ar/about',
                'x-default': 'https://www.tentnow.ae/en/about',
            },
        },
    };
}

export default async function AboutPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <AboutContent />;
}

function AboutContent() {
    const t = useTranslations('experience');
    const brand = useTranslations('brand');

    return (
        <div className="bg-[#101622]">
            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tent-now/hotel.jpg"
                        alt="Tent Now Heritage"
                        fill
                        priority
                        className="object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>{t('label')}</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            {t('ourStory.title')}
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <h2 className="text-xl md:text-2xl text-gold font-medium mb-10 italic leading-relaxed">
                            {t('ourStory.subtitle')}
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg text-[#9da6b9] leading-relaxed mb-6">
                                {t('ourStory.body')}
                            </p>
                            <p className="text-lg text-[#9da6b9] leading-relaxed">
                                {t('ourStory.ethos')}
                            </p>
                            <p className="text-lg text-[#9da6b9] leading-relaxed mt-6">
                                {t('ourStory.subsidiaryPre')} <a href="https://almumtaztents.com/" className="text-[#D4AF37] hover:text-white transition-colors" target="_blank">{t('ourStory.mumtazGroup')}</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-luxury py-20 relative z-10">

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
