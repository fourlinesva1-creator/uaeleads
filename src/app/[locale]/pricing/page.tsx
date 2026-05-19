import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import JsonLd from '@/components/seo/JsonLd';
import FAQSchema from '@/components/seo/FAQSchema';
import PricingNote from '@/components/ui/PricingNote';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';

    const title = isAr
        ? 'أسعار تأجير الخيام في الإمارات 2026 | دليل التسعير الكامل | Tent Now'
        : 'Tent Rental Prices in UAE 2026 | Complete Pricing Guide | Tent Now';
    const description = isAr
        ? 'دليل شامل لأسعار تأجير الخيام في الإمارات 2026. أسعار خيام رمضان والمجالس والفعاليات المؤسسية وخيام التخزين الصناعية في دبي وأبوظبي والشارقة.'
        : 'Complete guide to tent rental prices in UAE for 2026. Ramadan tent costs, majlis rental rates, corporate event tents, and industrial storage tent pricing across Dubai, Abu Dhabi, and Sharjah.';

    return {
        title,
        description,
        keywords: isAr
            ? ['أسعار تأجير خيام رمضان', 'تكلفة خيمة إفطار دبي', 'سعر المجلس رمضان الإمارات', 'أسعار خيام الفعاليات']
            : ['tent rental price UAE', 'iftar tent cost Dubai', 'Ramadan tent rental price', 'majlis tent rental cost', 'corporate event tent UAE price'],
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/pricing`,
            languages: {
                'en': 'https://www.tentnow.ae/en/pricing',
                'ar': 'https://www.tentnow.ae/ar/pricing',
                'x-default': 'https://www.tentnow.ae/en/pricing',
            },
        },
        openGraph: {
            title,
            description,
            url: `https://www.tentnow.ae/${locale}/pricing`,
            siteName: 'Tent Now',
            type: 'website',
        },
    };
}

export default function PricingPage() {
    const locale = useLocale();
    const isAr = locale === 'ar';

    const pricingSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: isAr ? 'أسعار تأجير الخيام — Tent Now الإمارات' : 'Tent Rental Prices — Tent Now UAE',
        description: isAr
            ? 'نطاقات أسعار تأجير الخيام في الإمارات لعام 2026'
            : 'Tent rental price ranges in the UAE for 2026',
        itemListElement: [
            {
                '@type': 'ListItem', position: 1,
                item: { '@type': 'Service', name: 'Home Majlis Tent Rental', description: 'Residential Ramadan majlis tent setup', provider: { '@type': 'Organization', name: 'Tent Now' }, offers: { '@type': 'PriceSpecification', minPrice: 3000, maxPrice: 12000, priceCurrency: 'AED', unitText: 'per Ramadan season' } },
            },
            {
                '@type': 'ListItem', position: 2,
                item: { '@type': 'Service', name: 'Corporate Iftar Tent Rental', description: 'Corporate Ramadan iftar event tent', provider: { '@type': 'Organization', name: 'Tent Now' }, offers: { '@type': 'PriceSpecification', minPrice: 15000, maxPrice: 80000, priceCurrency: 'AED', unitText: 'per event' } },
            },
            {
                '@type': 'ListItem', position: 3,
                item: { '@type': 'Service', name: 'Hotel Majlis Tent Rental', description: 'Hotel Ramadan majlis setup 100–500 guests', provider: { '@type': 'Organization', name: 'Tent Now' }, offers: { '@type': 'PriceSpecification', minPrice: 20000, maxPrice: 150000, priceCurrency: 'AED', unitText: 'per Ramadan season' } },
            },
            {
                '@type': 'ListItem', position: 4,
                item: { '@type': 'Service', name: 'Industrial Storage Tent', description: 'Civil Defence approved industrial storage tent UAE', provider: { '@type': 'Organization', name: 'Tent Now' }, offers: { '@type': 'PriceSpecification', minPrice: 15, maxPrice: 40, priceCurrency: 'AED', unitText: 'per sqm per month' } },
            },
        ],
    };

    const pricingFaqs = isAr ? [
        { q: 'كم تكلفة تأجير خيمة إفطار في دبي؟', a: 'تتراوح خيام الإفطار في دبي من 5,000 درهم للإعدادات المنزلية الصغيرة إلى 80,000 درهم وأكثر للفعاليات المؤسسية والفندقية الكبرى. يعتمد السعر على الحجم والمدة ومستوى الديكور ومتطلبات التكييف.' },
        { q: 'ما هو متوسط سعر خيمة المجلس لشهر رمضان كامل؟', a: 'المجالس المنزلية: 3,000–12,000 درهم. المجالس الفندقية: 20,000–150,000 درهم. الفعاليات المؤسسية: 15,000–80,000 درهم. تشمل هذه الأسعار الهيكل والتكييف والتركيب والتفكيك.' },
        { q: 'هل التسعيرة تشمل التصاريح والتركيب؟', a: 'نعم. جميع أسعار Tent Now شاملة: التصاريح من الجهات المعنية، التركيب والتفكيك، التكييف، والصيانة طوال فترة الإيجار.' },
        { q: 'كم تكلفة خيمة التخزين الصناعية؟', a: 'تبدأ أسعار خيام التخزين الصناعية من 15 إلى 40 درهم للمتر المربع شهرياً، مقارنة بإيجارات المستودعات التي تجاوزت 60–120 درهم للمتر المربع في دبي. وفر 50–70% عن بدائل التخزين الدائمة.' },
    ] : [
        { q: 'How much does an iftar tent cost in Dubai?', a: 'Iftar tents in Dubai range from AED 5,000 for compact home setups to AED 80,000+ for large corporate and hotel events. Price depends on size, duration, decor level, and AC requirements.' },
        { q: 'What is the average cost of a Ramadan majlis tent for the full month?', a: 'Home majlis: AED 3,000–12,000. Hotel majlis: AED 20,000–150,000. Corporate events: AED 15,000–80,000. All prices include structure, AC, installation, and removal.' },
        { q: 'Does the price include permits and installation?', a: 'Yes. All Tent Now pricing is fully inclusive: permits from all relevant authorities, installation, removal, air conditioning, and maintenance throughout the rental period.' },
        { q: 'How much does an industrial storage tent cost?', a: 'Industrial storage tents start from AED 15–40 per sqm per month, compared to warehouse rents exceeding AED 60–120 per sqm in Dubai. Save 50–70% vs permanent construction.' },
    ];

    const tiers = isAr ? [
        {
            category: 'المجالس المنزلية', icon: '🏠',
            subtitle: 'للعائلات والتجمعات السكنية',
            items: [
                { name: 'إعداد صغير (20–50 ضيفاً)', range: '3,000 – 7,000 درهم', note: 'شاملاً الهيكل والأرضية والمقاعد والتكييف' },
                { name: 'إعداد متوسط (50–100 ضيف)', range: '7,000 – 12,000 درهم', note: 'مع ديكور أساسي وإضاءة محيطية' },
                { name: 'إعداد فاخر (100+ ضيف)', range: '12,000 – 25,000 درهم', note: 'أثاث مجلس فاخر، أقمشة سدو، جلسات متعددة' },
            ],
        },
        {
            category: 'الفعاليات المؤسسية', icon: '🏢',
            subtitle: 'للشركات والمؤسسات والهيئات الحكومية',
            items: [
                { name: 'إفطار صغير (100–200 ضيف)', range: '15,000 – 30,000 درهم', note: 'شاملاً التصاريح والتركيب ووحدات التكييف' },
                { name: 'إفطار متوسط (200–500 ضيف)', range: '30,000 – 60,000 درهم', note: 'مع ديكور مؤسسي وطاولات وكراسي' },
                { name: 'فعالية كبرى (500+ ضيف)', range: '60,000 – 200,000+ درهم', note: 'حلول متكاملة مع مسرح وإضاءة احترافية' },
            ],
        },
        {
            category: 'مجالس الفنادق', icon: '⭐',
            subtitle: 'للفنادق من فئة الثلاث إلى الخمس نجوم',
            items: [
                { name: 'فندق صغير (100–200 ضيف)', range: '20,000 – 45,000 درهم', note: 'شامل جميع التصاريح الفندقية ومتطلبات السلامة' },
                { name: 'فندق متوسط (200–400 ضيف)', range: '45,000 – 90,000 درهم', note: 'هياكل متعددة المناطق مع مناطق تقديم الطعام والمجلس' },
                { name: 'فندق كبير (400+ ضيف)', range: '90,000 – 250,000+ درهم', note: 'مجمعات متكاملة وتصميم حصري حسب الطلب' },
            ],
        },
        {
            category: 'خيام التخزين الصناعية', icon: '🏭',
            subtitle: 'للمستودعات والبنية التحتية التجارية',
            items: [
                { name: 'هياكل صغيرة (حتى 500 م²)', range: '15 – 25 درهم / م² / شهر', note: 'هياكل إطار ألومنيوم، جاهزة خلال 3 أيام' },
                { name: 'هياكل متوسطة (500–2,000 م²)', range: '12 – 20 درهم / م² / شهر', note: 'هياكل صناعية كبيرة الامتداد، معتمدة CD' },
                { name: 'هياكل كبيرة (2,000+ م²)', range: '10 – 18 درهم / م² / شهر', note: 'حلول المستودعات طويلة المدى باقتصاد جزافي' },
            ],
        },
    ] : [
        {
            category: 'Home Majlis', icon: '🏠',
            subtitle: 'For families and residential gatherings',
            items: [
                { name: 'Small setup (20–50 guests)', range: 'AED 3,000 – 7,000', note: 'Includes structure, flooring, seating, and AC' },
                { name: 'Medium setup (50–100 guests)', range: 'AED 7,000 – 12,000', note: 'With basic decor and ambient lighting' },
                { name: 'Premium setup (100+ guests)', range: 'AED 12,000 – 25,000', note: 'Luxury majlis furniture, sadu fabrics, multi-zone seating' },
            ],
        },
        {
            category: 'Corporate Events', icon: '🏢',
            subtitle: 'For businesses, companies, and government entities',
            items: [
                { name: 'Small iftar (100–200 guests)', range: 'AED 15,000 – 30,000', note: 'Includes permits, installation, and AC units' },
                { name: 'Medium iftar (200–500 guests)', range: 'AED 30,000 – 60,000', note: 'With corporate decor, tables, and chairs' },
                { name: 'Large event (500+ guests)', range: 'AED 60,000 – 200,000+', note: 'Full turnkey with staging and professional lighting' },
            ],
        },
        {
            category: 'Hotel Majlis', icon: '⭐',
            subtitle: 'For 3–5 star hotel properties',
            items: [
                { name: 'Small hotel (100–200 guests)', range: 'AED 20,000 – 45,000', note: 'Full hotel permits and safety compliance' },
                { name: 'Mid-scale hotel (200–400 guests)', range: 'AED 45,000 – 90,000', note: 'Multi-zone structures with dining and majlis areas' },
                { name: 'Large hotel (400+ guests)', range: 'AED 90,000 – 250,000+', note: 'Full compound with bespoke custom design' },
            ],
        },
        {
            category: 'Industrial Storage Tents', icon: '🏭',
            subtitle: 'For warehousing and commercial infrastructure',
            items: [
                { name: 'Small structures (up to 500 sqm)', range: 'AED 15–25 / sqm / month', note: 'Aluminium frame structures, ready in 3 days' },
                { name: 'Medium structures (500–2,000 sqm)', range: 'AED 12–20 / sqm / month', note: 'Large-span industrial frames, CD approved' },
                { name: 'Large structures (2,000+ sqm)', range: 'AED 10–18 / sqm / month', note: 'Long-term warehouse solutions at bulk economy' },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-[#101622] text-white" dir={isAr ? 'rtl' : 'ltr'}>
            <JsonLd data={pricingSchema} />
            <FAQSchema items={pricingFaqs} />

            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" />
                <div className="container-luxury relative z-10">
                    <div className="section-label mb-6">
                        <span>{isAr ? 'دليل الأسعار 2026' : '2026 Pricing Guide'}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-6 max-w-3xl leading-tight">
                        {isAr
                            ? 'أسعار تأجير الخيام في الإمارات 2026'
                            : 'Tent Rental Prices in UAE — 2026 Guide'}
                    </h1>
                    <p className="text-xl text-[#9da6b9] max-w-2xl mb-8 leading-relaxed">
                        {isAr
                            ? 'نطاقات أسعار شفافة وواقعية لجميع أنواع الخيام في دبي وأبوظبي والشارقة وباقي الإمارات. لا رسوم مخفية، لا مفاجآت.'
                            : 'Transparent, realistic price ranges for all tent types across Dubai, Abu Dhabi, Sharjah, and all UAE Emirates. No hidden fees, no surprises.'}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/request-quote" className="bg-[#D4AF37] text-[#101622] px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors">
                            {isAr ? 'احصل على عرض سعر دقيق' : 'Get an Exact Quote'}
                        </Link>
                        <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="border border-[#D4AF37]/40 text-[#D4AF37] px-8 py-4 rounded-xl font-bold hover:border-[#D4AF37] transition-colors">
                            {isAr ? 'واتساب للسعر الفوري' : 'WhatsApp for Instant Price'}
                        </a>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-4">
                <div className="container-luxury">
                    <PricingNote locale={locale} className="text-sm py-4 px-5" />
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="py-16">
                <div className="container-luxury space-y-16">
                    {tiers.map((tier) => (
                        <div key={tier.category}>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-3xl">{tier.icon}</span>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-display text-white">{tier.category}</h2>
                                    <p className="text-[#9da6b9] text-sm mt-0.5">{tier.subtitle}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {tier.items.map((item) => (
                                    <div key={item.name} className="bg-[#1a212e] border border-[#282e39] rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all">
                                        <p className="text-white font-semibold mb-2">{item.name}</p>
                                        <p className="text-2xl font-display text-[#D4AF37] mb-3">{item.range}</p>
                                        <p className="text-[#9da6b9] text-xs leading-relaxed">{item.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What's Included */}
            <section className="py-16 bg-[#1a212e]/50">
                <div className="container-luxury">
                    <h2 className="text-3xl font-display text-white mb-4">
                        {isAr ? 'ماذا يشمل سعر التأجير؟' : "What's Included in the Rental Price?"}
                    </h2>
                    <p className="text-[#9da6b9] mb-10 max-w-2xl">
                        {isAr
                            ? 'جميع عروض Tent Now تشمل الخدمات التالية ما لم يُحدَّد خلاف ذلك:'
                            : 'All Tent Now quotes include the following unless otherwise specified:'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(isAr ? [
                            { icon: '📋', label: 'جميع التصاريح البلدية والدفاع المدني' },
                            { icon: '🔧', label: 'التركيب والتفكيك الاحترافي' },
                            { icon: '❄️', label: 'وحدات التكييف بحجم مناسب' },
                            { icon: '💡', label: 'الإضاءة الأساسية والكهرباء' },
                            { icon: '🛡️', label: 'شهادة سلامة الحريق من الدفاع المدني' },
                            { icon: '📞', label: 'دعم ميداني طوال مدة الإيجار' },
                        ] : [
                            { icon: '📋', label: 'All municipality & Civil Defence permits' },
                            { icon: '🔧', label: 'Professional installation and removal' },
                            { icon: '❄️', label: 'Correctly sized air conditioning units' },
                            { icon: '💡', label: 'Basic lighting and power connections' },
                            { icon: '🛡️', label: 'Civil Defence fire safety certificate' },
                            { icon: '📞', label: 'On-site support throughout the rental' },
                        ]).map((item) => (
                            <div key={item.label} className="flex items-center gap-3 bg-[#101622] border border-[#282e39] rounded-xl p-4">
                                <span className="text-2xl">{item.icon}</span>
                                <span className="text-white text-sm font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="container-luxury">
                    <h2 className="text-3xl font-display text-white mb-10">
                        {isAr ? 'أسئلة حول الأسعار' : 'Pricing FAQs'}
                    </h2>
                    <div className="space-y-4 max-w-3xl">
                        {pricingFaqs.map((faq, i) => (
                            <details key={i} className="group bg-[#1a212e] border border-[#282e39] rounded-2xl overflow-hidden">
                                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-[#1e2736] transition-colors">
                                    <span className="text-white font-semibold">{faq.q}</span>
                                    <span className="text-[#D4AF37] flex-shrink-0 text-xl transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#9da6b9] leading-relaxed">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-[#1a212e] to-[#101622]">
                <div className="container-luxury text-center">
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                        {isAr ? 'احصل على سعرك الدقيق خلال 24 ساعة' : 'Get Your Exact Price Within 24 Hours'}
                    </h2>
                    <p className="text-[#9da6b9] max-w-xl mx-auto mb-8">
                        {isAr
                            ? 'أخبرنا بمتطلباتك وسنرسل لك عرضاً مخصصاً مع السعر الكامل الشامل لجميع التصاريح والخدمات.'
                            : 'Tell us your requirements and we\'ll send a custom proposal with a full all-inclusive price covering permits, installation, and support.'}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/request-quote" className="bg-[#D4AF37] text-[#101622] px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors">
                            {isAr ? 'اطلب عرض سعر' : 'Request a Quote'}
                        </Link>
                        <a href="https://wa.me/971501826969" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            WhatsApp +971 50 182 6969
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
