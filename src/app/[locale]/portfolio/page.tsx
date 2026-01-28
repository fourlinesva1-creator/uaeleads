import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type Props = {
    params: Promise<{ locale: string }>;
};

const galleryItems = [
    { id: 1, category: 'Traditional', image: '/images/Tent Now/majlis.jpg', title: 'Heritage Majlis' },
    { id: 2, category: 'Modern', image: '/images/Tent Now/hotel.jpg', title: 'Contemporary Suite' },
    { id: 3, category: 'Commercial', image: '/images/Tent Now/corporate.jpg', title: 'Hotel Ramadan Tent' },
    { id: 4, category: 'Traditional', image: '/images/Tent Now/home majis.jpg', title: 'Royal Interior' },
    { id: 5, category: 'Modern', image: '/images/Tent Now/lighting and decor.jpg', title: 'Modern Minimalist' },
    { id: 6, category: 'Commercial', image: '/images/Tent Now/furniture.jpg', title: 'Corporate Iftar' },
];

export default async function PortfolioPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <PortfolioContent />;
}

function PortfolioContent() {
    const t = useTranslations('nav');

    return (
        <div className="bg-[#101622]">
            {/* Hero Section */}
            <section className="relative pt-32 lg:pt-48 pb-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/Tent Now/homepage hero section.jpg"
                        alt="Tent Now Portfolio"
                        fill
                        priority
                        className="object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101622]/80 via-[#101622] to-[#101622]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="max-w-4xl animate-fade-in-up">
                        <div className="section-label mb-8">
                            <span>Our Legacy</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-display text-white mb-10 tracking-tight leading-[1.1]">
                            Portfolio of Excellence
                        </h1>
                        <div className="w-24 h-1.5 bg-gold mb-12 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                        <p className="text-xl md:text-2xl text-text-light font-light leading-relaxed max-w-3xl">
                            A showcase of over 5,000 successful events across the UAE since 1984.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-luxury py-20 relative z-10">

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#282e39] bg-[#1a212e]">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-display mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-display text-white">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 p-12 bg-gradient-to-r from-[#1a212e] to-[#101622] border border-[#282e39] rounded-3xl text-center">
                    <h2 className="text-3xl font-display text-white mb-6">Ready to create your masterpiece?</h2>
                    <p className="text-[#9da6b9] mb-8 max-w-xl mx-auto">
                        Let us bring our 30 years of expertise to your next Ramadan event.
                    </p>
                    <a href="/contact" className="btn-gold-fill px-12 py-4 rounded-xl font-display inline-block">
                        Start Planning Now
                    </a>
                </div>
            </div>
        </div>
    );
}
