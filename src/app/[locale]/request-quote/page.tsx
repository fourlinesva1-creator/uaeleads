import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'quote' });

    const title = locale === 'ar'
        ? 'طلب عرض سعر | خيام رمضان والمجالس الفاخرة في الإمارات'
        : 'Request a Quote | Premium Ramadan Tent & Majlis Rentals UAE';

    const description = locale === 'ar'
        ? 'احصل على عرض سعر مخصص لخيمة رمضان أو مجلس الإفطار. خبرة 30 عاماً في خدمة دبي وأبوظبي والشارقة وجميع الإمارات.'
        : 'Get a custom quote for your Ramadan tent or Iftar Majlis setup. 30 years of expertise serving Dubai, Abu Dhabi, Sharjah and all UAE Emirates.';

    return {
        title,
        description,
        alternates: {
            canonical: `https://tentnow.ae/${locale}/request-quote`,
        },
    };
}

export default async function RequestQuotePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <RequestQuoteContent />;
}

function RequestQuoteContent() {
    const t = useTranslations('quote');

    return (
        <div className="bg-[#101622] pt-32 pb-20 min-h-screen">
            <div className="container-luxury">
                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
                    <div className="section-label justify-center mb-6">
                        <span>{t('title')}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8">
                        {t('title')} <span className="text-gold">{t('titleBold')}</span>
                    </h1>
                    <p className="text-[#9da6b9] text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
                        {t('subtitle')}
                    </p>
                    <div className="h-px w-24 bg-gold mx-auto mb-8 opacity-50" />
                    <p className="text-[#9da6b9] text-base max-w-2xl mx-auto mb-4 italic">
                        "{t('intro')}"
                    </p>
                    <p className="text-gold font-bold uppercase tracking-widest text-sm mb-6">
                        {t('precision')}
                    </p>
                    <p className="text-[#9da6b9] text-lg max-w-3xl mx-auto leading-relaxed">
                        {t('partnership')}
                    </p>
                </div>

                {/* Form Section */}
                <div className="mb-20">
                    <QuoteForm />
                </div>

                {/* Benefits Grid */}
                <div className="max-w-5xl mx-auto mb-20 animate-fade-in">
                    <h2 className="text-3xl font-display text-white text-center mb-12">{t('whyHeader')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['budget', 'availability', 'insight'].map((benefit) => (
                            <div key={benefit} className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl group hover:border-gold/30 transition-all">
                                <h3 className="text-xl font-display text-gold mb-4 group-hover:translate-x-1 transition-transform">
                                    {t(`benefits.${benefit}.title`)}
                                </h3>
                                <p className="text-[#9da6b9] text-sm leading-relaxed">
                                    {t(`benefits.${benefit}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Process Section */}
                <div className="max-w-5xl mx-auto p-12 bg-[#1a212e] border border-[#282e39] rounded-[2.5rem] animate-fade-in relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px]" />
                    <h2 className="text-3xl font-display text-white mb-12 text-center">{t('process.title')}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-24 right-24 h-px bg-gradient-to-r from-gold/5 via-gold/40 to-gold/5" />

                        {['submit', 'review', 'receive'].map((step, idx) => (
                            <div key={step} className="flex flex-col items-center text-center relative z-10">
                                <div className="w-16 h-16 rounded-full bg-[#101622] border-2 border-gold flex items-center justify-center text-gold font-display text-2xl mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                    {idx + 1}
                                </div>
                                <h3 className="text-white font-bold mb-4">{t(`process.${step}.title`)}</h3>
                                <p className="text-[#9da6b9] text-sm leading-relaxed">{t(`process.${step}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
