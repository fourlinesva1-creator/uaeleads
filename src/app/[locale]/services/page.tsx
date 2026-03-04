import { setRequestLocale } from 'next-intl/server';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import FAQSchema from '@/components/seo/FAQSchema';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'services' });

    return {
        title: t('title'),
        description: t('subtitle'),
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/services`,
            languages: {
                'en': 'https://www.tentnow.ae/en/services',
                'ar': 'https://www.tentnow.ae/ar/services',
            },
        },
    };
}

export default async function ServicesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ServicesContent />;
}

const serviceFaqsEn = [
    { q: 'How much does tent rental cost in UAE?', a: 'Tent rental prices in the UAE vary by type and duration. Ramadan majlis and iftar tents start from AED 3,000–5,000 for a basic home setup, while hotel and corporate event tents range from AED 15,000–80,000+. Industrial storage tents are priced from AED 15–40 per sqm per month. Contact Tent Now for a custom quote.' },
    { q: 'How quickly can Tent Now set up a tent?', a: 'Tent Now offers same-week setup in most cases. For standard Ramadan and event tents, we can typically mobilise within 48–72 hours. Industrial storage structures require 3–7 days depending on size and site conditions.' },
    { q: 'Does Tent Now handle permits and Civil Defence approvals?', a: 'Yes. Tent Now manages all required permits including Dubai Municipality, Abu Dhabi City Municipality, Civil Defence approvals, and free zone authority clearances. You do not need to follow up on any paperwork.' },
    { q: 'What areas do you serve in the UAE?', a: 'Tent Now serves all 7 Emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We have established relationships with the relevant authorities in each emirate.' },
    { q: 'What types of tents do you offer for Ramadan?', a: 'We offer hotel majlis tents, corporate iftar event tents, home majlis setups, suhoor tent packages, sadu-themed heritage tents, and full decor and furniture packages. Each can be customised to your space and guest count.' },
    { q: 'Are your tents safe for outdoor use in UAE weather?', a: 'All Tent Now structures are engineered for the UAE climate — UV-resistant PVC fabric, reinforced aluminium frames, and optional air conditioning. All structures carry Civil Defence fire safety certification.' },
    { q: 'Can I hire furniture and decor separately?', a: 'Yes. Tent Now offers standalone furniture rental and decor/lighting packages that can be added to any tent setup or delivered independently for existing venues.' },
    { q: 'How do I get a quote from Tent Now?', a: 'You can request a quote via our website form at tentnow.ae/request-quote, WhatsApp us directly at +971 50 182 6969, or call us for an immediate response. We typically provide quotes within 24 hours.' },
];

const serviceFaqsAr = [
    { q: 'كم تبلغ تكلفة تأجير الخيام في الإمارات؟', a: 'تتفاوت أسعار تأجير الخيام حسب النوع والمدة. تبدأ خيام المجالس والإفطار الرمضانية من 3,000–5,000 درهم للإعدادات المنزلية البسيطة، بينما تتراوح خيام الفنادق والفعاليات المؤسسية بين 15,000–80,000 درهم وأكثر. خيام التخزين الصناعية تبدأ من 15–40 درهم للمتر المربع شهرياً. تواصل معنا للحصول على عرض سعر مخصص.' },
    { q: 'ما هو وقت تركيب الخيمة لدى Tent Now؟', a: 'يمكننا التركيب خلال الأسبوع نفسه في معظم الحالات. للخيام الرمضانية العادية نتحرك خلال 48–72 ساعة. أما الهياكل الصناعية فتستغرق 3–7 أيام حسب الحجم وظروف الموقع.' },
    { q: 'هل تتولى Tent Now استخراج التصاريح والموافقات؟', a: 'نعم. نتولى جميع التصاريح اللازمة بما فيها بلدية دبي، بلدية أبوظبي، موافقات الدفاع المدني، وسلطات المناطق الحرة. لا تحتاج إلى متابعة أي أوراق.' },
    { q: 'ما المناطق التي تغطيها في الإمارات؟', a: 'تغطي Tent Now جميع الإمارات السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين.' },
    { q: 'ما أنواع خيام رمضان المتاحة؟', a: 'نوفر خيام مجالس للفنادق، خيام إفطار مؤسسية، إعدادات مجالس منزلية، باقات خيام سحور، خيام تراثية بتصميم السدو، وباقات ديكور وأثاث متكاملة.' },
    { q: 'هل خيامكم مناسبة للطقس الإماراتي الخارجي؟', a: 'جميع هياكل Tent Now مصممة لمناخ الإمارات — أقمشة PVC مقاومة للأشعة فوق البنفسجية، هياكل ألومنيوم مقوّاة، وتكييف هواء اختياري. جميع الهياكل تحمل شهادة سلامة الحريق من الدفاع المدني.' },
    { q: 'هل يمكنني استئجار الأثاث والديكور بشكل منفصل؟', a: 'نعم. نقدم خدمة تأجير الأثاث وباقات الديكور والإضاءة بشكل مستقل أو كإضافة لأي خيمة.' },
    { q: 'كيف أحصل على عرض سعر من Tent Now؟', a: 'يمكنك طلب عرض سعر عبر نموذج الموقع، أو عبر واتساب على الرقم 971501826969+، أو الاتصال المباشر. نرد عادةً خلال 24 ساعة.' },
];

function ServicesContent() {
    const t = useTranslations('services');
    const locale = useLocale();
    const isAr = locale === 'ar';
    const faqs = isAr ? serviceFaqsAr : serviceFaqsEn;

    const services = [
        { id: 'hotel', slug: 'hotel-majlis', image: '/images/tent-now/hotel.jpg' },
        { id: 'corporate', slug: 'corporate-events', image: '/images/tent-now/corporate.jpg' },
        { id: 'home', slug: 'home-majlis', image: '/images/tent-now/home-majlis.jpg' },
        { id: 'iftar', slug: 'iftar-tent-rental', image: '/images/tent-now/iftar-tents.jpg' },
        { id: 'suhoor', slug: 'suhoor-tent-rental', image: '/images/tent-now/home-majlis.jpg' },
        { id: 'sadu', slug: 'sadu-tent-rental', image: '/images/tent-now/sadu-tents.jpg' },
        { id: 'furniture', slug: 'furniture-rental', image: '/images/tent-now/furniture.jpg' },
        { id: 'decor', slug: 'decor-lighting', image: '/images/tent-now/lighting-and-decor.jpg' }
    ];

    return (
        <div className="bg-[#101622] pt-32 pb-20">
            <div className="container-luxury">
                <div className="max-w-4xl mb-20 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>Our Expertise</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        {t('title')}
                    </h1>
                    <p className="text-xl text-[#9da6b9]">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="group block bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all duration-500"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={t(`items.${service.id}.title`)}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                                    {t(`items.${service.id}.title`)}
                                </h3>
                                <p className="text-[#9da6b9] mb-6 line-clamp-3">
                                    {t(`items.${service.id}.description`)}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm uppercase tracking-widest text-[#D4AF37]">
                                        {t(`items.${service.id}.priceLabel`)} {t(`items.${service.id}.price`)}
                                    </span>
                                    <span className="w-10 h-10 rounded-full border border-[#282e39] flex items-center justify-center text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all group-hover:translate-x-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <FAQSchema items={faqs} />

                {/* Storage & Industrial Solutions */}
                <div className="mt-20 pt-16 border-t border-[#1a212e]">
                    <div className="max-w-2xl mb-10">
                        <div className="section-label mb-4">
                            <span>Industrial & Commercial Solutions</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                            Storage Tent Solutions for UAE Projects
                        </h2>
                        <p className="text-[#9da6b9]">
                            Civil Defence-approved clear span, warehouse frame, and industrial tent structures for construction, logistics, oil & gas, and manufacturing.
                        </p>
                    </div>
                    <div className="bg-[#1a212e] border border-[#282e39] rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="aspect-[16/9] lg:aspect-auto relative overflow-hidden min-h-[280px]">
                                <Image
                                    src="/images/storage-tents/storage-tent-hero.jpg"
                                    alt="Industrial storage tent structures UAE"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1a212e] hidden lg:block" />
                            </div>
                            <div className="p-10 lg:p-12 flex flex-col justify-center">
                                <div className="text-gold text-sm font-bold uppercase tracking-widest mb-4">
                                    AED 15–40 / sqm / month
                                </div>
                                <h3 className="text-3xl font-display text-white mb-4">
                                    Industrial Storage Tents
                                </h3>
                                <p className="text-[#9da6b9] mb-8 leading-relaxed">
                                    UAE warehousing vacancy is at 3% and industrial rents are up 33%. Deploy Civil Defence-approved storage structures within days — not months — at 50–70% less than permanent construction.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                                    {[
                                        { label: 'Clear Span', href: '/services/storage-tents/clear-span-tents' },
                                        { label: 'Warehouse', href: '/services/storage-tents/warehouse-tents' },
                                        { label: 'Industrial', href: '/services/storage-tents/industrial-tents' },
                                    ].map(({ label, href }) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className="px-4 py-2.5 bg-[#101622] border border-[#282e39] rounded-lg text-center text-[#9da6b9] text-sm hover:border-[#D4AF37]/40 hover:text-white transition-all"
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/services/storage-tents"
                                    className="flex items-center gap-2 text-[#D4AF37] font-bold hover:gap-4 transition-all"
                                >
                                    Explore Storage Solutions <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-24 pt-16 border-t border-[#1a212e]">
                    <div className="max-w-3xl mb-12">
                        <div className="section-label mb-4">
                            <span>{isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                            {isAr ? 'كل ما تحتاج معرفته عن تأجير الخيام في الإمارات' : 'Everything You Need to Know About Tent Rental in UAE'}
                        </h2>
                        <p className="text-[#9da6b9]">
                            {isAr ? 'أسئلة يطرحها عملاؤنا قبل الحجز.' : 'The questions our clients ask before booking.'}
                        </p>
                    </div>
                    <div className="space-y-4 max-w-4xl">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-[#1e2736] transition-colors">
                                    <span className="text-white font-semibold text-base">{faq.q}</span>
                                    <span className="text-[#D4AF37] flex-shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#9da6b9] leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="/faq" className="text-[#D4AF37] font-bold hover:underline text-sm">
                            {isAr ? 'عرض جميع الأسئلة الشائعة ←' : 'View All FAQs →'}
                        </Link>
                        <Link href="/request-quote" className="bg-[#D4AF37] text-[#101622] px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors">
                            {isAr ? 'احصل على عرض سعر مجاني' : 'Get a Free Quote'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
