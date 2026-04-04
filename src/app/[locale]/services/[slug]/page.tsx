import { setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';

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
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services/${slug}`,
            languages: {
                'en': `https://www.tentnow.ae/en/services/${slug}`,
                'ar': `https://www.tentnow.ae/ar/services/${slug}`,
                'x-default': `https://www.tentnow.ae/en/services/${slug}`,
            },
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    if (!serviceMap[slug]) notFound();

    return <ServiceDetailContent serviceId={serviceMap[slug]} slug={slug} />;
}

const serviceFaqsBySlug: Record<string, { en: { q: string; a: string }[]; ar: { q: string; a: string }[] }> = {
    'hotel-majlis': {
        en: [
            { q: 'What sizes are available for hotel Ramadan majlis tents?', a: 'We supply hotel majlis tents from 50 to over 1,000 sqm. Most 5-star hotel properties in the UAE use our 200–500 sqm setups, accommodating 100–400 guests in a premium seated arrangement.' },
            { q: 'Do you handle hotel municipality permits for Ramadan tent setups?', a: 'Yes. We manage Dubai Municipality, Abu Dhabi City Municipality, and Civil Defence approvals for hotel properties. We have established approval workflows with major hotel groups.' },
            { q: 'How long does a hotel majlis tent installation take?', a: 'For hotel properties we typically mobilise within 3–5 days. Complex multi-zone setups with full decor and AC may require up to 7 days. We work around hotel operations to minimise disruption.' },
            { q: 'What is included in a hotel majlis package?', a: 'Standard hotel packages include the tent structure, flooring, air conditioning, Arabic majlis seating, lighting, and sadu or luxury fabric finishes. Full catering tent annexes are available separately.' },
        ],
        ar: [
            { q: 'ما الأحجام المتاحة لخيام مجالس رمضان الفندقية؟', a: 'نوفر خيام مجالس فندقية من 50 متر مربع وحتى أكثر من 1,000 متر مربع. معظم فنادق الدرجة الأولى في الإمارات تستخدم إعداداتنا من 200–500 متر مربع لاستيعاب 100–400 ضيف.' },
            { q: 'هل تتولون استخراج تصاريح البلدية للفنادق؟', a: 'نعم. نتولى موافقات بلدية دبي وأبوظبي والدفاع المدني للمنشآت الفندقية، ولدينا مسارات موافقة راسخة مع كبرى المجموعات الفندقية.' },
            { q: 'كم يستغرق تركيب خيمة المجلس الفندقي؟', a: 'للمنشآت الفندقية نتحرك عادةً خلال 3–5 أيام. الإعدادات المعقدة متعددة المناطق مع ديكور وتكييف قد تحتاج حتى 7 أيام.' },
            { q: 'ماذا يشمل باقة المجلس الفندقي؟', a: 'تشمل الباقات القياسية: الهيكل، الأرضيات، التكييف، الجلسات العربية، الإضاءة، وأقمشة السدو الفاخرة. خيام الضيافة المرفقة متاحة بشكل منفصل.' },
        ],
    },
    'iftar-tent-rental': {
        en: [
            { q: 'How much does an iftar tent rental cost in Dubai?', a: 'Iftar tent rental in Dubai ranges from AED 5,000 for a compact 20-person setup to AED 50,000+ for large corporate or hotel events. Price depends on size, duration, decor level, and AC requirements. Request a quote for exact pricing.' },
            { q: 'Can I rent an iftar tent for just one night?', a: 'We can arrange single-night rentals but minimum engagement is typically 3 days due to setup and teardown logistics. Ramadan-long rentals (30 days) offer the best value.' },
            { q: 'Do iftar tents come with air conditioning?', a: 'Yes. All our iftar tent packages include industrial-grade air conditioning units suitable for UAE temperatures. We size the AC load appropriately for your guest count and tent dimensions.' },
            { q: 'What is the minimum size iftar tent available?', a: 'Our smallest iftar tent setups start at 4m x 6m (24 sqm), suitable for 15–20 guests. We scale up to large multi-section structures for 1,000+ guests.' },
        ],
        ar: [
            { q: 'كم تكلفة تأجير خيمة إفطار في دبي؟', a: 'تتراوح تكلفة تأجير خيمة الإفطار في دبي من 5,000 درهم لإعداد 20 شخصاً إلى 50,000 درهم وأكثر للفعاليات المؤسسية والفندقية الكبرى. اطلب عرض سعر للحصول على تسعيرة دقيقة.' },
            { q: 'هل يمكنني استئجار خيمة إفطار لليلة واحدة؟', a: 'يمكن ترتيب ذلك، لكن الحد الأدنى عادةً 3 أيام نظراً لمتطلبات التركيب والتفكيك. الإيجار لشهر رمضان كامل يوفر أفضل قيمة.' },
            { q: 'هل تشمل خيام الإفطار التكييف؟', a: 'نعم. جميع باقات خيام الإفطار تشمل وحدات تكييف صناعية مناسبة لمناخ الإمارات.' },
            { q: 'ما هو أصغر حجم لخيمة إفطار متاحة؟', a: 'تبدأ أصغر إعداداتنا من 4م × 6م (24 متر مربع) وتناسب 15–20 ضيفاً، وتصل هياكلنا إلى أكثر من 1,000 ضيف.' },
        ],
    },
    'corporate-events': {
        en: [
            { q: 'Can Tent Now handle corporate Ramadan events for 500+ guests?', a: 'Yes. We regularly execute corporate iftar and Ramadan events for 200–1,500 guests. We provide full turnkey solutions including tent, furniture, decor, lighting, flooring, and permit management.' },
            { q: 'What corporate sectors do you serve most?', a: 'We work with banking and finance, real estate, hospitality, logistics, oil and gas, and government entities across the UAE. We understand the protocol requirements for high-profile corporate events.' },
            { q: 'Do you have references from corporate clients?', a: 'Yes. Our client list includes UAE-based multinationals, government departments, and major hospitality groups. References are available upon request during the quotation process.' },
            { q: 'Can we customise the tent with our brand colours and logo?', a: 'Absolutely. We offer branded tent structures, custom printed backdrops, logo panels, and full custom decor theming to match your brand identity.' },
        ],
        ar: [
            { q: 'هل تتعامل Tent Now مع فعاليات مؤسسية لأكثر من 500 ضيف؟', a: 'نعم. ننجز بانتظام فعاليات إفطار مؤسسية لـ 200–1,500 ضيف، بحلول متكاملة تشمل الخيمة والأثاث والديكور والإضاءة والتصاريح.' },
            { q: 'ما القطاعات التي تخدمونها؟', a: 'نخدم قطاعات البنوك والعقارات والضيافة واللوجستيات والنفط والغاز والجهات الحكومية في الإمارات.' },
            { q: 'هل يمكن تخصيص الخيمة بألوان وشعار الشركة؟', a: 'بالتأكيد. نوفر هياكل خيام بشعارات مطبوعة ولوحات مخصصة وديكور متكامل يتناسب مع هوية علامتك التجارية.' },
            { q: 'هل لديكم مراجع من عملاء مؤسسيين؟', a: 'نعم. قائمة عملائنا تشمل شركات متعددة الجنسيات ودوائر حكومية ومجموعات ضيافة كبرى. المراجع متاحة عند الطلب أثناء عملية تقديم العرض.' },
        ],
    },
};

const defaultFaqs = {
    en: [
        { q: 'How do I get a quote for tent rental?', a: 'Request a quote via tentnow.ae/request-quote, WhatsApp +971 50 182 6969, or call us directly. We respond within 24 hours with a full proposal.' },
        { q: 'Do you serve all Emirates?', a: 'Yes. Tent Now covers all 7 UAE Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.' },
        { q: 'How quickly can you install a tent?', a: 'Standard installations are completed within 48–72 hours. Larger or more complex setups may take 3–7 days.' },
        { q: 'Are your structures Civil Defence approved?', a: 'Yes. All Tent Now structures are Civil Defence approved and meet UAE fire safety standards. We handle all approvals on your behalf.' },
    ],
    ar: [
        { q: 'كيف أحصل على عرض سعر؟', a: 'اطلب عرضاً عبر tentnow.ae/request-quote أو واتساب 971501826969+ أو اتصل مباشرة. نرد خلال 24 ساعة.' },
        { q: 'هل تغطون جميع الإمارات؟', a: 'نعم. تغطي Tent Now جميع الإمارات السبع.' },
        { q: 'ما هو وقت التركيب؟', a: 'التركيبات القياسية خلال 48–72 ساعة. الإعدادات الكبيرة قد تستغرق 3–7 أيام.' },
        { q: 'هل هياكلكم معتمدة من الدفاع المدني؟', a: 'نعم. جميع هياكلنا معتمدة من الدفاع المدني وتلتزم بمعايير السلامة الإماراتية.' },
    ],
};

function ServiceDetailContent({ serviceId, slug }: { serviceId: string; slug: string }) {
    const t = useTranslations('services');
    const common = useTranslations('common');
    const locale = useLocale(); // Need useLocale
    const isAr = locale === 'ar';
    const pageUrl = `https://www.tentnow.ae/${locale}/services/${slug}`;
    const faqData = serviceFaqsBySlug[slug] ?? defaultFaqs;
    const faqs = isAr ? faqData.ar : faqData.en;

    return (
        <div className="bg-[#101622]">
            <ServiceSchema
                name={t(`items.${serviceId}.title`)}
                description={t(`items.${serviceId}.description`)}
                url={pageUrl}
                image={imageMap[slug]}
            />
            <FAQSchema items={faqs} />
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

                    {/* City-specific deep-dive pages for iftar-tent-rental */}
                    {slug === 'iftar-tent-rental' && (
                        <div className="mt-16 pt-12 border-t border-[#282e39]">
                            <h2 className="text-2xl font-display text-white mb-2">City-Specific Iftar Tent Guides</h2>
                            <p className="text-[#9da6b9] text-sm mb-8">
                                Detailed pricing, permit requirements, and setup guides for each emirate.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { city: 'Dubai', citySlug: 'iftar-tent-rental-dubai', locationSlug: 'dubai', note: 'Municipality & Civil Defense permits handled' },
                                    { city: 'Abu Dhabi', citySlug: 'iftar-tent-rental-abu-dhabi', locationSlug: 'abu-dhabi', note: 'DMT & Abu Dhabi Civil Defense approvals' },
                                    { city: 'Sharjah', citySlug: 'iftar-tent-rental-sharjah', locationSlug: 'sharjah', note: 'Cultural Capital — authentic Emirati setups' },
                                ].map(({ city, citySlug, locationSlug, note }) => (
                                    <div key={citySlug} className="p-6 bg-[#1a212e] border border-[#282e39] rounded-xl hover:border-[#D4AF37]/40 transition-all group">
                                        <h3 className="text-white font-display mb-1 group-hover:text-[#D4AF37] transition-colors">
                                            Iftar Tents in {city}
                                        </h3>
                                        <p className="text-[#9da6b9] text-xs mb-4">{note}</p>
                                        <div className="flex flex-col gap-2">
                                            <Link
                                                href={`/services/${citySlug}`}
                                                className="text-[#D4AF37] text-sm hover:underline"
                                            >
                                                Full {city} Guide →
                                            </Link>
                                            <Link
                                                href={`/locations/${locationSlug}`}
                                                className="text-[#9da6b9] text-sm hover:text-white transition-colors"
                                            >
                                                {city} Service Hub →
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Value Propositions */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h3 className="text-xl font-display text-white mb-4">{isAr ? 'إتقان اللوجستيات' : 'Logistical Mastery'}</h3>
                            <p className="text-[#9da6b9]">{isAr ? 'فرق تركيب دقيقة ومحترمة تعرف الطرق واللوائح.' : 'Precise, punctual, and respectful installation teams who know the roads and regulations.'}</p>
                        </div>
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h3 className="text-xl font-display text-white mb-4">{isAr ? 'ذكاء التصميم' : 'Design Intelligence'}</h3>
                            <p className="text-[#9da6b9]">{isAr ? 'تصاميم فريدة تعكس التراث الإماراتي والفخامة العصرية.' : 'Unique themes that resonate with Emirati heritage and modern luxury, not just templates.'}</p>
                        </div>
                        <div className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl">
                            <h3 className="text-xl font-display text-white mb-4">{isAr ? 'معتمد من الدفاع المدني' : 'Civil Defense Approved'}</h3>
                            <p className="text-[#9da6b9]">{isAr ? 'جميع الهياكل تستوفي اشتراطات السلامة والحريق الإماراتية.' : 'All structures meet strict UAE fire and safety codes for your complete peace of mind.'}</p>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-24 pt-16 border-t border-[#1a212e]">
                        <h2 className="text-3xl font-display text-white mb-2">
                            {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                        </h2>
                        <p className="text-[#9da6b9] mb-10">
                            {isAr ? 'أسئلة يطرحها عملاؤنا قبل الحجز.' : 'What our clients ask before booking.'}
                        </p>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-[#1e2736] transition-colors">
                                        <span className="text-white font-semibold">{faq.q}</span>
                                        <span className="text-[#D4AF37] flex-shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
                                    </summary>
                                    <div className="px-6 pb-6 text-[#9da6b9] leading-relaxed">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/request-quote" className="bg-[#D4AF37] text-[#101622] px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors">
                                {isAr ? 'احصل على عرض سعر مجاني' : 'Get a Free Quote'}
                            </Link>
                            <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="border border-[#D4AF37]/40 text-[#D4AF37] px-6 py-3 rounded-xl font-bold text-sm hover:border-[#D4AF37] transition-colors">
                                {isAr ? 'واتساب للحصول على سعر فوري' : 'WhatsApp for Instant Quote'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
