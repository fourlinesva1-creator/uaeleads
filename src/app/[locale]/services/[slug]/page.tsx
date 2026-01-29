import { setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServiceSchema from '@/components/seo/ServiceSchema';

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

const serviceMap: Record<string, string> = {
    'hotel-majlis': 'hotel',
    'corporate-events': 'corporate',
    'home-majlis': 'home',
    'iftar-tent-rental': 'iftar',
    'suhoor-tent-rental': 'suhoor',
    'sadu-tent-rental': 'sadu',
    'furniture-rental': 'furniture',
    'decor-lighting': 'decor'
};

const imageMap: Record<string, string> = {
    'hotel-majlis': '/images/tent-now/hotel.jpg',
    'corporate-events': '/images/tent-now/corporate.jpg',
    'home-majlis': '/images/tent-now/home-majlis.jpg',
    'iftar-tent-rental': '/images/tent-now/iftar-tents.jpg',
    'suhoor-tent-rental': '/images/tent-now/home-majlis.jpg',
    'sadu-tent-rental': '/images/tent-now/sadu-tents.jpg',
    'furniture-rental': '/images/tent-now/furniture.jpg',
    'decor-lighting': '/images/tent-now/lighting-and-decor.jpg'
};

export async function generateStaticParams() {
    const params: { locale: string; slug: string }[] = [];
    routing.locales.forEach(locale => {
        Object.keys(serviceMap).forEach(slug => {
            params.push({ locale, slug });
        });
    });
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const serviceId = serviceMap[slug];
    if (!serviceId) return {};

    const t = await getTranslations({ locale, namespace: 'services' });

    return {
        title: t(`items.${serviceId}.title`),
        description: t(`items.${serviceId}.description`),
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    if (!serviceMap[slug]) notFound();

    return <ServiceDetailContent serviceId={serviceMap[slug]} slug={slug} />;
}

function ServiceDetailContent({ serviceId, slug }: { serviceId: string; slug: string }) {
    const t = useTranslations('services');
    const common = useTranslations('common');
    const locale = useLocale(); // Need useLocale
    const pageUrl = `https://tentnow.ae/${locale}/services/${slug}`;

    return (
        <div className="bg-[#101622]">
            <ServiceSchema
                name={t(`items.${serviceId}.title`)}
                description={t(`items.${serviceId}.description`)}
                url={pageUrl}
                image={imageMap[slug]}
            />
            <div className="pt-32 pb-20">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 animate-fade-in-up">
                        <div>
                            <div className="section-label mb-6">
                                <span>{t(`items.${serviceId}.priceLabel`)} {t(`items.${serviceId}.price`)}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                                {t(`items.${serviceId}.title`)}
                            </h1>
                            <p className="text-xl text-[#9da6b9] leading-relaxed mb-10">
                                {t(`items.${serviceId}.detailedBody`)}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/request-quote"
                                    className="btn-gold-fill px-8 py-4 rounded-xl font-display flex items-center justify-center"
                                >
                                    {common('requestQuote')}
                                </Link>
                                <a
                                    href="https://wa.me/971501826969"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary px-8 py-4 rounded-xl font-display flex items-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {common('whatsappUs')}
                                </a>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-3xl overflow-hidden border border-[#282e39]">
                            <Image
                                src={imageMap[slug]}
                                alt={t(`items.${serviceId}.title`)}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Value Propositions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h3 className="text-xl font-display text-white mb-4">Logistical Mastery</h3>
                            <p className="text-[#9da6b9]">Precise, punctual, and respectful installation teams who know the roads and regulations.</p>
                        </div>
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h3 className="text-xl font-display text-white mb-4">Design Intelligence</h3>
                            <p className="text-[#9da6b9]">Unique themes that resonate with Emirati heritage and modern luxury, not just templates.</p>
                        </div>
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h3 className="text-xl font-display text-white mb-4">Civil Defense Approved</h3>
                            <p className="text-[#9da6b9]">All structures meet strict UAE fire and safety codes for your complete peace of mind.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
