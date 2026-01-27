import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type Props = {
    params: Promise<{ locale: string }>;
};

const galleryItems = [
    { id: 1, category: 'Traditional', image: '/images/WEB/WhatsApp-Image-2024-02-02-at-12.23.01_cba3d622.jpg', title: 'Heritage Majlis' },
    { id: 2, category: 'Modern', image: '/images/WEB/WhatsApp-Image-2024-02-02-at-12.22.42_90cd4d75.jpg', title: 'Contemporary Suite' },
    { id: 3, category: 'Commercial', image: '/images/WEB/WhatsApp-Image-2024-02-02-at-12.23.06_300bc714.jpg', title: 'Hotel Ramadan Tent' },
    { id: 4, category: 'Traditional', image: '/images/WEB/WhatsApp-Image-2024-02-02-at-12.22.56_0f854972.jpg', title: 'Royal Interior' },
    { id: 5, category: 'Modern', image: '/images/WEB/New folder/WhatsApp Image 2024-02-02 at 12.22.32_9e63a6c4.jpg', title: 'Modern Minimalist' },
    { id: 6, category: 'Commercial', image: '/images/WEB/WhatsApp-Image-2024-02-02-at-12.23.08_25c6a1e5.jpg', title: 'Corporate Iftar' },
];

export default async function PortfolioPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <PortfolioContent />;
}

function PortfolioContent() {
    const t = useTranslations('nav');

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>Our Legacy</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        Portfolio of Excellence
                    </h1>
                    <p className="text-xl text-[#9da6b9]">
                        A showcase of over 5,000 successful events across the UAE since 1984.
                    </p>
                </div>

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
