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
    const t = await getTranslations({ locale, namespace: 'nav' });

    return {
        title: `Our Event Portfolio | Premium Tent & Majlis Rentals UAE | ${t('portfolio')}`,
        description: 'Explore Tent Now\'s legacy of over 5,000 successful Ramadan Majlis, corporate Iftar tents, and industrial event setups across Dubai and the UAE.',
    };
}

const portfolioItems = [
    { id: 'brandLaunch', image: '/images/tent-now/portfolio/brand-launch-events.jpg' },
    { id: 'gulfFood', image: '/images/tent-now/portfolio/gulf-food.jpg' },
    { id: 'festivals', image: '/images/tent-now/portfolio/festivals.jpg' },
    { id: 'labourCamps', image: '/images/tent-now/portfolio/labour-camps.jpg' },
    { id: 'indoorEvents', image: '/images/tent-now/portfolio/indoor-events.jpg' },
    { id: 'weddingMarquee', image: '/images/tent-now/portfolio/wedding-marquee.jpg' },
    { id: 'heritageMajlis', image: '/images/tent-now/home-majlis.jpg' },
    { id: 'hotelTents', image: '/images/tent-now/hotel.jpg' },
];

export default async function PortfolioPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <PortfolioContent />;
}

function PortfolioContent() {
    const t = useTranslations('portfolio');

    return (
        <div className="bg-[#101622]">
            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/tent-now/homepage-hero.jpg"
                        alt="UAE Premium Event Portfolio"
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
                            {t('title')}<br /><span className="text-gold">{t('titleGold')}</span>
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed max-w-3xl">
                            {t('description')}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-luxury py-20 relative z-10">
                {/* SEO Text Block */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-display text-white mb-6">{t('sectionStoryTitle')}</h2>
                        <p className="text-[#9da6b9] leading-relaxed mb-6">
                            {t('sectionStoryBody1')}
                        </p>
                        <p className="text-[#9da6b9] leading-relaxed">
                            {t('sectionStoryBody2')}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl text-center">
                            <span className="block text-3xl font-display text-gold mb-2">5,000+</span>
                            <span className="text-sm text-text-muted uppercase tracking-wider">{t('stats.events')}</span>
                        </div>
                        <div className="p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl text-center">
                            <span className="block text-3xl font-display text-gold mb-2">30+</span>
                            <span className="text-sm text-text-muted uppercase tracking-wider">{t('stats.experience')}</span>
                        </div>
                        <div className="p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl text-center">
                            <span className="block text-3xl font-display text-gold mb-2">100%</span>
                            <span className="text-sm text-text-muted uppercase tracking-wider">{t('stats.compliance')}</span>
                        </div>
                        <div className="p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl text-center">
                            <span className="block text-3xl font-display text-gold mb-2">7/7</span>
                            <span className="text-sm text-text-muted uppercase tracking-wider">{t('stats.emirates')}</span>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item) => (
                        <div key={item.id} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#282e39] bg-[#1a212e]">
                            <Image
                                src={item.image}
                                alt={`${t(`items.${item.id}.title`)} - ${t(`items.${item.id}.category`)} Event Infrastructure`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform w-full">
                                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-display mb-2 block">
                                    {t(`items.${item.id}.category`)}
                                </span>
                                <h3 className="text-2xl font-display text-white">
                                    {t(`items.${item.id}.title`)}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-32 p-12 bg-gradient-to-r from-[#1a212e] to-[#101622] border border-[#282e39] rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <h2 className="text-3xl md:text-5xl font-display text-white mb-6">{t('cta.title')}</h2>
                    <p className="text-[#9da6b9] mb-10 max-w-2xl mx-auto text-lg">
                        {t('cta.body')}
                    </p>
                    <a href="/contact" className="btn-gold-fill px-12 py-5 rounded-xl font-display inline-block text-lg shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] transition-all">
                        {t('cta.btn')}
                    </a>
                </div>
            </div>
        </div>
    );
}
