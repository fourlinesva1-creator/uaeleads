import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import PricingNote from '@/components/ui/PricingNote';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogServiceCTA from '@/components/blog/BlogServiceCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'تأجير خيام في الإمارات: الدليل الشامل لجميع أنواع الخيام 2026 | Tent Now'
        : 'Tent Rental in UAE: Complete Guide to Every Tent Type (2026) | Tent Now';

    const description = locale === 'ar'
        ? 'كل ما تحتاج معرفته عن تأجير الخيام في الإمارات—من خيام رمضان والمجالس إلى خيام المستودعات والفعاليات الكبرى. تغطية كاملة لجميع أنواع الخيام مع الأسعار والمناطق المخدومة.'
        : 'Everything you need to know about tent rental in UAE — from Ramadan Majlis and event tents to warehouse and dome structures. Full coverage of tent types, pricing guidance, and all 7 Emirates.';

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: 'https://www.tentnow.ae/images/blog/tent-uae-1.jpg', width: 1200, height: 630 }],
            type: 'article',
            publishedTime: '2026-02-25T08:00:00.000Z',
            authors: ['Tent Now'],
            section: locale === 'ar' ? 'دليل' : 'Guide',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['https://www.tentnow.ae/images/blog/tent-uae-1.jpg'],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/tent-rental-uae`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/tent-rental-uae',
                'ar': 'https://www.tentnow.ae/ar/blog/tent-rental-uae',
                'x-default': 'https://www.tentnow.ae/en/blog/tent-rental-uae',
            },
        },
    };
}

export default function TentRentalUAEPage() {
    const locale = useLocale();
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/tent-rental-uae`;
    const articleTitle = locale === 'ar'
        ? 'تأجير خيام في الإمارات: الدليل الشامل لجميع أنواع الخيام 2026'
        : 'Tent Rental in UAE: Complete Guide to Every Tent Type (2026)';

    const checkIcon = (
        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
    );

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={articleTitle}
                description={locale === 'ar'
                    ? 'كل ما تحتاج معرفته عن تأجير الخيام في الإمارات—من خيام رمضان والمجالس إلى خيام المستودعات والفعاليات الكبرى.'
                    : 'Everything you need to know about tent rental in UAE — from Ramadan Majlis and event tents to warehouse and dome structures.'}
                image='/images/blog/tent-uae-1.jpg'
                datePublished='2026-02-25T08:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src="/images/blog/tent-uae-1.jpg"
                            alt={locale === 'ar' ? 'تأجير خيام في الإمارات 2026' : 'Tent rental UAE 2026'}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4 flex-wrap">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            {locale === 'ar' ? 'دليل' : 'Guide'}
                        </span>
                        <span>{locale === 'ar' ? '25 فبراير 2026' : 'February 25, 2026'}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full hidden sm:block" />
                        <span>{locale === 'ar' ? '8 دقائق قراءة' : '8 min read'}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {articleTitle}
                    </h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto mb-8">
                        {locale === 'ar'
                            ? 'من خيام رمضان الفاخرة إلى هياكل المستودعات الصناعية — دليلك الكامل لتأجير الخيام في الإمارات'
                            : 'From luxury Ramadan Majlis to industrial warehouse structures — your complete guide to tent hire across the UAE'}
                    </p>
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
                            <Image src="/images/tent-now-logo.gif" alt="Tent Now" fill className="object-cover" />
                        </div>
                        <div className={`text-${locale === 'ar' ? 'right' : 'left'}`}>
                            <p className="text-white font-bold text-sm">{locale === 'ar' ? 'فريق Tent Now' : 'Tent Now Team'}</p>
                            <p className="text-text-muted text-xs">{locale === 'ar' ? 'خبراء الخيام في الإمارات' : 'UAE Tent Specialists'}</p>
                        </div>
                    </div>
                </header>

                {/* Share Buttons */}
                <div className="mb-12 border-y border-border py-4 flex justify-between items-center">
                    <span className="text-text-muted text-sm uppercase tracking-widest">
                        {locale === 'ar' ? 'شارك هذا الدليل:' : 'Share this guide:'}
                    </span>
                    <ShareButtons url={articleUrl} title={articleTitle} />
                </div>

                <PricingNote locale={locale} className="mb-8" />

                {/* Content Body */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">

                    {locale === 'ar' ? (
                        <>
                            {/* ===== ARABIC CONTENT ===== */}
                            <p>
                                الإمارات العربية المتحدة من أكثر دول العالم استخداماً للخيام المؤقتة—سواء لموسم رمضان المبارك، أو الفعاليات الضخمة، أو تخزين البضائع الصناعية، أو حفلات الأعراس الراقية. وبفضل خبرة تمتد لأكثر من <strong>30 عاماً</strong> في خدمة جميع الإمارات السبع، تُقدّم Tent Now—المدعومة بقدرات مجموعة ممتاز—أوسع تشكيلة من الخيام المتاحة بأسعار تنافسية وجودة لا تُضاهى.
                            </p>
                            <p>
                                في هذا الدليل الشامل، ستتعرف على كل أنواع الخيام التي نوفرها، والمناطق التي نخدمها، وكيف نتولى كل شيء من التصاريح حتى التركيب والديكور الداخلي.
                            </p>

                            {/* Quick Stats */}
                            <div className="not-prose my-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { num: '30+', label: 'سنة خبرة' },
                                    { num: '7', label: 'إمارات مخدومة' },
                                    { num: '5', label: 'أنواع خيام' },
                                    { num: '500+', label: 'مشروع منجز' },
                                ].map((stat) => (
                                    <div key={stat.num} className="bg-bg-elevated border border-border rounded-xl p-5 text-center">
                                        <div className="text-3xl font-display text-gold mb-1">{stat.num}</div>
                                        <div className="text-text-muted text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-border my-12" />

                            <h2>أنواع الخيام التي نوفرها في الإمارات</h2>

                            {/* Type 1 - Ramadan & Majlis */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-2.jpg"
                                            alt="خيام رمضان والمجالس في الإمارات"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 right-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            رمضان
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🕌 خيام رمضان والمجالس</h3>
                                        <p className="text-text-muted mb-6">
                                            خيامنا الرمضانية هي الأكثر طلباً في الإمارات كل موسم. سواء كنت تبحث عن مجلس عائلي أصيل أو إفطار مؤسسي ضخم أو خيمة سحور فاخرة، نصمم كل خيمة بدقة تراعي الثقافة الإماراتية الأصيلة مع معايير الجودة العالمية. نتولى تصاريح بلدية دبي، الدفاع المدني، وجميع المتطلبات الرسمية.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                                            {[
                                                'ديكور سدو عربي أصيل',
                                                'أنظمة تكييف هندسية متطورة',
                                                'تصاريح الدفاع المدني شاملة',
                                                'إفطار وسحور للشركات والمؤسسات',
                                                'مجالس خاصة للعائلات والفلل',
                                                'تجهيزات الفنادق والمنتجعات',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Link href="/locations/dubai/ramadan-tent-rental" className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-full hover:bg-gold/20 transition-colors">
                                                رمضان دبي
                                            </Link>
                                            <Link href="/locations/abu-dhabi/ramadan-tent-rental" className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-full hover:bg-gold/20 transition-colors">
                                                رمضان أبوظبي
                                            </Link>
                                            <Link href="/locations/sharjah/ramadan-tent-rental" className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-full hover:bg-gold/20 transition-colors">
                                                رمضان الشارقة
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Type 2 - Warehouse & Storage */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-4.jpg"
                                            alt="خيام المستودعات والتخزين في الإمارات"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 right-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            صناعي
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🏗 خيام المستودعات والتخزين</h3>
                                        <p className="text-text-muted mb-6">
                                            للشركات اللوجستية وشركات البناء والمصانع التي تحتاج مساحات تخزين مؤقتة وسريعة. خيامنا الصناعية مصنوعة من PVC المقاوم للعوامل الجوية، وتتميز بتصاميم واسعة الفتحة (Clear-Span) تتيح مساحات ضخمة بلا أعمدة داخلية. البديل الأذكى عن الإنشاءات الدائمة المكلفة.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'هياكل مقاومة للعوامل الجوية',
                                                'فتحات واسعة بلا عوائق داخلية',
                                                'مثالية للوجستية والبناء والتصنيع',
                                                'تركيب سريع وفك فوري',
                                                'أحجام مخصصة حسب الطلب',
                                                'ترخيص هيئة المنطقة الصناعية',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Photo Gallery */}
                            <div className="not-prose my-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[3, 5, 6, 7, 8, 9].map((n) => (
                                    <div key={n} className="relative aspect-square rounded-xl overflow-hidden border border-border">
                                        <Image
                                            src={`/images/blog/tent-uae-${n}.jpg`}
                                            alt={`خيام Tent Now الإمارات ${n}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Type 3 - High Peak & Event */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-5.jpg"
                                            alt="خيام الفعاليات والمناسبات في الإمارات"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 right-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            فعاليات
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">⛺ خيام الذروة العالية وفعاليات التخييم</h3>
                                        <p className="text-text-muted mb-6">
                                            الخيام الكلاسيكية ذات القمة العالية (High Peak) هي الاختيار الأمثل للأعراس والمعارض الخارجية والحفلات الخاصة والفعاليات الحكومية. تتميز بمظهرها الجمالي الراقي وسهولة تخصيص تصميمها الداخلي ليتناسب مع أي مناسبة أو هوية بصرية.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'أعراس ومناسبات عائلية راقية',
                                                'معارض خارجية وعروض منتجات',
                                                'حفلات خاصة وتجمعات مجتمعية',
                                                'فعاليات حكومية ورسمية',
                                                'ديكور داخلي كامل مخصص',
                                                'أنظمة إضاءة وصوت متكاملة',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Type 4 - Double Decker & Polygonal */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-7.jpg"
                                            alt="خيام الطابقين والخيام متعددة الأضلاع في الإمارات"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 right-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            VIP
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🏟 خيام الطابقين والخيام متعددة الأضلاع</h3>
                                        <p className="text-text-muted mb-6">
                                            لأكبر الفعاليات وأرقاها—المعارض الضخمة، مناطق استقبال كبار الشخصيات، والفعاليات المؤسسية المميزة. خيام الطابقين توفر ضعف المساحة القابلة للاستخدام، بينما تضيف الخيام متعددة الأضلاع طابعاً معمارياً فريداً يجعل فعاليتك لا تُنسى.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'معارض ضخمة وعروض تجارية',
                                                'مناطق VIP ولوج كبار الشخصيات',
                                                'فعاليات مؤسسية مميزة',
                                                'طابقان لزيادة السعة الاستيعابية',
                                                'تصاميم معمارية فريدة',
                                                'واجهات قابلة للتخصيص بالعلامة التجارية',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Type 5 - Dome & Curve */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-10.jpg"
                                            alt="خيام القباب والمنحنيات في الإمارات"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 right-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            معماري
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🌐 خيام القباب والمنحنيات</h3>
                                        <p className="text-text-muted mb-6">
                                            الخيام الأكثر جاذبية وتميزاً من الناحية المعمارية—مثالية لإطلاق المنتجات، والتجارب الضيافية الفاخرة، والفضاءات الإبداعية. شكلها الكروي الفريد يخلق تجربة بصرية استثنائية لا تنساها، وتتوفر بأحجام تبدأ من 5 أمتار قطراً حتى مئات الأمتار.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'تصاميم هندسية معمارية مميزة',
                                                'مناسبة لإطلاق المنتجات الفاخرة',
                                                'تجارب ضيافة استثنائية',
                                                'فضاءات إبداعية ومعارض فنية',
                                                'عزل صوتي وحراري ممتاز',
                                                'خيارات شفافة وملونة',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>خدماتنا الشاملة — أكثر من مجرد خيمة</h2>

                            <p>
                                ما يميزنا ليس فقط الخيمة—بل التجربة الكاملة. نقدم حزمة متكاملة من الخدمات تجعل مشروعك يسير بسلاسة من الفكرة حتى التسليم:
                            </p>

                            <div className="not-prose my-8 grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: '🪵', title: 'أنظمة الأرضيات', desc: 'أرضيات خشبية فاخرة، ومطاط مقاوم للماء، وتشطيبات احترافية مناسبة لكل بيئة.' },
                                    { icon: '🪑', title: 'أثاث متكامل', desc: 'طاولات كوكتيل ودائرية وبنكيت، كراسي فاخرة، وأرائك لوج بمختلف التصاميم.' },
                                    { icon: '💡', title: 'إضاءة وثريات', desc: 'ثريات كريستال، إضاءة LED ذكية، ومؤثرات ضوئية تناسب هوية الفعالية.' },
                                    { icon: '❄️', title: 'أنظمة HVAC والتكييف', desc: 'تكييف مركزي مصمم هندسياً لحجم خيمتك وعدد ضيوفك—21° مضمونة.' },
                                    { icon: '📋', title: 'التصاريح والامتثال', desc: 'تصاريح البلدية والدفاع المدني وIACAD—نتولى كل الأوراق قبل بدء التركيب.' },
                                    { icon: '🎨', title: 'التصميم الداخلي والديكور', desc: 'من نسيج السدو التقليدي إلى التصاميم العصرية الفاخرة—فريق تصميم متخصص.' },
                                ].map((service) => (
                                    <div key={service.title} className="bg-bg-elevated border border-border rounded-xl p-5 flex gap-4">
                                        <span className="text-2xl flex-shrink-0">{service.icon}</span>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{service.title}</h4>
                                            <p className="text-text-muted text-sm">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-border my-12" />

                            <h2>المناطق التي نخدمها في الإمارات</h2>

                            <p>
                                نمتلك فرق تعبئة في كل إمارة، مما يضمن التسليم السريع والتركيب الاحترافي في أي موقع:
                            </p>

                            <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    { city: 'دبي', href: '/locations/dubai', areas: 'جميرا، DIFC، نخلة جميرا، داون تاون' },
                                    { city: 'أبوظبي', href: '/locations/abu-dhabi', areas: 'جزيرة الريم، السعديات، مصفح' },
                                    { city: 'الشارقة', href: '/locations/sharjah', areas: 'المجاز، الخان، الصناعية' },
                                    { city: 'عجمان', href: '/locations/ajman', areas: 'الراشدية، الجرف، الكورنيش' },
                                    { city: 'رأس الخيمة', href: '/locations/ras-al-khaimah', areas: 'جزيرة المرجان، الحمراء' },
                                    { city: 'الفجيرة', href: '/locations/fujairah', areas: 'المدينة، دبا، الشهداء' },
                                    { city: 'أم القيوين', href: '/locations/umm-al-quwain', areas: 'السلامة، الرملة' },
                                ].map((loc) => (
                                    <Link
                                        key={loc.city}
                                        href={loc.href}
                                        className="bg-bg-elevated border border-border rounded-xl p-4 hover:border-gold/40 transition-colors group"
                                    >
                                        <div className="text-gold font-display font-bold mb-1 group-hover:text-white transition-colors">{loc.city}</div>
                                        <div className="text-text-muted text-xs">{loc.areas}</div>
                                    </Link>
                                ))}
                            </div>

                            {/* Final gallery */}
                            <div className="not-prose my-10 grid grid-cols-2 gap-3">
                                {[11, 12].map((n) => (
                                    <div key={n} className="relative aspect-video rounded-xl overflow-hidden border border-border">
                                        <Image
                                            src={`/images/blog/tent-uae-${n}.jpg`}
                                            alt={`خيام Tent Now في الإمارات`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>

                            <hr className="border-border my-12" />

                            <h2>الأسئلة الشائعة</h2>

                            <div className="not-prose my-8 space-y-4">
                                {[
                                    {
                                        q: 'كم تكلفة تأجير الخيام في الإمارات؟',
                                        a: 'تتفاوت الأسعار بحسب نوع الخيمة والحجم والمدة والتجهيزات. خيام المجالس الصغيرة تبدأ من 3,000-5,000 درهم، بينما تبدأ هياكل الفعاليات الكبيرة من 15,000 درهم. للحصول على عرض سعر دقيق، تواصل مع فريقنا وسنزودك بعرض مخصص خلال 24 ساعة.',
                                    },
                                    {
                                        q: 'هل تحتاج الخيام إلى تصاريح في الإمارات؟',
                                        a: 'نعم، معظم الخيام المؤقتة تتطلب تصاريح من البلدية والدفاع المدني. نحن نتولى هذه العملية كاملة نيابة عنك—لا تقلق بشأن الأوراق.',
                                    },
                                    {
                                        q: 'ما أسرع وقت يمكنكم فيه تركيب خيمة؟',
                                        a: 'يمكننا التعبئة خلال 48-72 ساعة للطلبات العاجلة في معظم مناطق الإمارات. للمشاريع الكبيرة نوصي بالحجز قبل أسبوعين على الأقل.',
                                    },
                                    {
                                        q: 'هل توفرون الديكور الداخلي مع الخيمة؟',
                                        a: 'نعم، خدماتنا شاملة تماماً—من الهيكل الخارجي إلى الأثاث والإضاءة والتكييف والديكور الداخلي بما يشمل التراث العربي الأصيل مثل أقمشة السدو.',
                                    },
                                ].map((faq) => (
                                    <details key={faq.q} className="group bg-bg-elevated border border-border/50 rounded-2xl overflow-hidden hover:border-gold/30 transition-colors">
                                        <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                                            <h3 className="text-white font-display text-base leading-snug">{faq.q}</h3>
                                            <svg className="text-gold shrink-0 w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className="px-6 pb-5">
                                            <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="not-prose bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12">
                                <h2 className="text-3xl font-display text-white mb-4">احصل على عرض سعر مجاني</h2>
                                <p className="text-text-muted mb-6">
                                    أخبرنا عن مشروعك—نوع الخيمة، الموقع، الحجم، التاريخ—وسيتواصل معك أحد خبرائنا خلال 24 ساعة بعرض مخصص يلبي احتياجاتك بالضبط.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/request-quote"
                                        className="flex-1 text-center px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg"
                                    >
                                        اطلب عرض أسعار مجاني
                                    </Link>
                                    <a
                                        href="https://wa.me/971501826969"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-8 py-4 bg-transparent border-2 border-gold text-gold rounded-lg font-bold uppercase tracking-widest hover:bg-gold/10 transition-colors"
                                    >
                                        واتساب
                                    </a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* ===== ENGLISH CONTENT ===== */}
                            <p>
                                The UAE is home to some of the world's most spectacular temporary structures. From intimate Ramadan Majlis tents in Jumeirah villas to 5,000-capacity corporate event marquees in Abu Dhabi and industrial warehouse tents spanning thousands of square metres in Sharjah's industrial zones — tent rental in the UAE is a mature, sophisticated market.
                            </p>
                            <p>
                                At Tent Now, backed by the expertise of <strong>Mumtaz Group</strong>, we bring over <strong>30 years of combined industry knowledge</strong> across all seven Emirates. This is your complete guide to every tent type we offer, the full-service support behind each one, and how to choose the right structure for your needs.
                            </p>

                            {/* Quick Stats */}
                            <div className="not-prose my-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { num: '30+', label: 'Years Experience' },
                                    { num: '7', label: 'Emirates Served' },
                                    { num: '5', label: 'Tent Categories' },
                                    { num: '500+', label: 'Projects Delivered' },
                                ].map((stat) => (
                                    <div key={stat.num} className="bg-bg-elevated border border-border rounded-xl p-5 text-center">
                                        <div className="text-3xl font-display text-gold mb-1">{stat.num}</div>
                                        <div className="text-text-muted text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-border my-12" />

                            <h2>Types of Tents We Provide Across the UAE</h2>

                            {/* Type 1 - Ramadan & Majlis */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-2.jpg"
                                            alt="Ramadan and Majlis tent rental UAE"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 left-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            Ramadan
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🕌 Ramadan & Majlis Tents</h3>
                                        <p className="text-text-muted mb-6">
                                            Our most in-demand category, season after season. Whether you need an authentic family Majlis for a Jumeirah villa, a large-scale corporate Iftar for 500 guests, or a luxury Suhoor lounge at a 5-star hotel — we design every tent with meticulous attention to UAE Ramadan culture and world-class quality standards. We handle all municipality permits, Civil Defense approvals, and IACAD requirements so you don't have to.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3 mb-6">
                                            {[
                                                'Authentic Sadu fabric interiors',
                                                'Engineered AC & HVAC systems',
                                                'Full Civil Defense compliance',
                                                'Corporate Iftar & Suhoor setups',
                                                'Private family Majlis for villas',
                                                'Hotel & resort Ramadan extensions',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <Link href="/locations/dubai/ramadan-tent-rental" className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-full hover:bg-gold/20 transition-colors">
                                                Ramadan Dubai
                                            </Link>
                                            <Link href="/locations/abu-dhabi/ramadan-tent-rental" className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-full hover:bg-gold/20 transition-colors">
                                                Ramadan Abu Dhabi
                                            </Link>
                                            <Link href="/locations/sharjah/ramadan-tent-rental" className="text-xs bg-gold/10 border border-gold/20 text-gold px-3 py-1 rounded-full hover:bg-gold/20 transition-colors">
                                                Ramadan Sharjah
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Type 2 - Warehouse & Storage */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-4.jpg"
                                            alt="Warehouse and storage tent rental UAE"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 left-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            Industrial
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🏗 Warehouse & Storage Tents</h3>
                                        <p className="text-text-muted mb-6">
                                            For logistics companies, construction firms, and manufacturers that need fast, temporary storage solutions. Our industrial-grade tents are constructed from heavy-duty, weather-resistant PVC and feature clear-span designs — no internal columns, maximum usable floor area. A smart, cost-effective alternative to permanent construction, deployed in days rather than months.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'Weather-resistant PVC fabric',
                                                'Clear-span: zero internal columns',
                                                'Ideal for logistics & construction',
                                                'Rapid deployment & dismantling',
                                                'Custom widths and lengths available',
                                                'Industrial zone permit handling',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Photo Gallery */}
                            <div className="not-prose my-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[3, 5, 6, 7, 8, 9].map((n) => (
                                    <div key={n} className="relative aspect-square rounded-xl overflow-hidden border border-border">
                                        <Image
                                            src={`/images/blog/tent-uae-${n}.jpg`}
                                            alt={`Tent Now UAE tent rental project ${n}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Type 3 - High Peak & Event */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-5.jpg"
                                            alt="High peak event tent rental UAE"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 left-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            Events
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">⛺ High Peak & Event Tents</h3>
                                        <p className="text-text-muted mb-6">
                                            The classic silhouette for weddings, outdoor exhibitions, private parties, and government events. High Peak tents combine striking visual appeal with exceptional interior flexibility — their soaring rooflines create impressive volume that transforms any outdoor space into a memorable venue. Customisable from entrance canopies to complete interior design packages.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'Weddings & private celebrations',
                                                'Outdoor exhibitions & product shows',
                                                'Private parties & social gatherings',
                                                'Government & official events',
                                                'Full interior design & decor',
                                                'Integrated lighting & sound systems',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Type 4 - Double Decker & Polygonal */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-7.jpg"
                                            alt="Double decker and polygonal tent rental UAE"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 left-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            VIP
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🏟 Double Decker & Polygonal Tents</h3>
                                        <p className="text-text-muted mb-6">
                                            For the UAE's largest and most prestigious events — mega exhibitions, VIP hospitality zones, and branded corporate experiences. Double Decker tents double your usable floor space without increasing the footprint, while Polygonal tents add a striking architectural identity that makes your event unmistakable. Both are fully brandable and engineered for UAE wind loads.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'Large-scale exhibitions & trade shows',
                                                'VIP hospitality & reception zones',
                                                'Branded corporate experiences',
                                                'Double floor capacity, same footprint',
                                                'Distinctive architectural profiles',
                                                'Custom branded facade panels',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Type 5 - Dome & Curve */}
                            <div className="not-prose my-10">
                                <div className="bg-bg-elevated rounded-2xl overflow-hidden border border-border">
                                    <div className="relative h-64">
                                        <Image
                                            src="/images/blog/tent-uae-10.jpg"
                                            alt="Dome and curve tent rental UAE"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                                        <div className="absolute bottom-4 left-4 bg-gold text-bg-dark text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                            Architectural
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-display text-white mb-4">🌐 Dome & Curve Tents</h3>
                                        <p className="text-text-muted mb-6">
                                            The most architecturally distinctive tent category — ideal for product launches, luxury hospitality experiences, and immersive creative spaces. The geodesic sphere creates a visual experience unlike anything else, available from intimate 5-metre diameter pods to expansive structures spanning hundreds of square metres. Available in transparent or opaque finishes.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {[
                                                'Unique architectural identity',
                                                'Luxury product launch experiences',
                                                'VIP hospitality environments',
                                                'Creative spaces & art exhibitions',
                                                'Excellent acoustic & thermal insulation',
                                                'Transparent & opaque panel options',
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    {checkIcon}
                                                    <span className="text-sm text-text-muted">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-border my-12" />

                            <h2>Full-Service Solutions — More Than a Tent</h2>

                            <p>
                                What sets us apart is not just the structure — it is the complete experience. Every project we deliver includes the support infrastructure that makes a tent feel like a permanent, five-star venue:
                            </p>

                            <div className="not-prose my-8 grid md:grid-cols-2 gap-4">
                                {[
                                    { icon: '🪵', title: 'Flooring Systems', desc: 'Luxury timber floors, weather-resistant rubber matting, and polished finishes for every environment.' },
                                    { icon: '🪑', title: 'Complete Furniture', desc: 'Cocktail, round, and banquet tables — paired with premium seating and lounge collections.' },
                                    { icon: '💡', title: 'Lighting & Chandeliers', desc: 'Crystal chandeliers, smart LED rigs, and atmospheric lighting effects tailored to your event identity.' },
                                    { icon: '❄️', title: 'HVAC & Cooling', desc: 'Engineered air-conditioning systems calculated for your tent volume and guest count — 21°C guaranteed.' },
                                    { icon: '📋', title: 'Permits & Compliance', desc: 'Municipality, Civil Defense, and IACAD permits handled completely — zero surprises on installation day.' },
                                    { icon: '🎨', title: 'Interior Design & Decor', desc: 'From traditional Sadu-pattern Majlis to contemporary luxury lounges — bespoke design on every project.' },
                                ].map((service) => (
                                    <div key={service.title} className="bg-bg-elevated border border-border rounded-xl p-5 flex gap-4">
                                        <span className="text-2xl flex-shrink-0">{service.icon}</span>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{service.title}</h4>
                                            <p className="text-text-muted text-sm">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-border my-12" />

                            <h2>Serving All 7 Emirates</h2>

                            <p>
                                We maintain mobilization teams in every emirate, ensuring fast deployment and professional installation wherever your project is located:
                            </p>

                            <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                                {[
                                    { city: 'Dubai', href: '/locations/dubai', areas: 'Jumeirah, DIFC, Palm, Downtown' },
                                    { city: 'Abu Dhabi', href: '/locations/abu-dhabi', areas: 'Reem Island, Saadiyat, Mussafah' },
                                    { city: 'Sharjah', href: '/locations/sharjah', areas: 'Al Majaz, Al Khan, Industrial' },
                                    { city: 'Ajman', href: '/locations/ajman', areas: 'Al Rawda, Al Jurf, Corniche' },
                                    { city: 'Ras Al Khaimah', href: '/locations/ras-al-khaimah', areas: 'Al Marjan Island, Al Hamra' },
                                    { city: 'Fujairah', href: '/locations/fujairah', areas: 'City Centre, Dibba, Al Shohadaa' },
                                    { city: 'Umm Al Quwain', href: '/locations/umm-al-quwain', areas: 'Al Salamah, Al Ramlah' },
                                ].map((loc) => (
                                    <Link
                                        key={loc.city}
                                        href={loc.href}
                                        className="bg-bg-elevated border border-border rounded-xl p-4 hover:border-gold/40 transition-colors group"
                                    >
                                        <div className="text-gold font-display font-bold mb-1 group-hover:text-white transition-colors">{loc.city}</div>
                                        <div className="text-text-muted text-xs">{loc.areas}</div>
                                    </Link>
                                ))}
                            </div>

                            {/* Final gallery */}
                            <div className="not-prose my-10 grid grid-cols-2 gap-3">
                                {[11, 12].map((n) => (
                                    <div key={n} className="relative aspect-video rounded-xl overflow-hidden border border-border">
                                        <Image
                                            src={`/images/blog/tent-uae-${n}.jpg`}
                                            alt={`Tent Now UAE project`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>

                            <hr className="border-border my-12" />

                            <h2>Why Choose Tent Now UAE</h2>

                            <div className="not-prose my-8 space-y-4">
                                {[
                                    {
                                        num: '01',
                                        title: '30+ Years of UAE-Specific Experience',
                                        body: 'Our leadership team has decades of experience through Mumtaz Group — making us one of the most knowledgeable tent suppliers in the region. We know what works in Jumeirah villas, what survives RAK coastal wind loads, and what Civil Defense expects in every emirate.',
                                    },
                                    {
                                        num: '02',
                                        title: 'Competitive Pricing with Premium Quality',
                                        body: 'Because of our strong supplier relationships and inventory scale, we provide better rates without compromising fabric quality, structure safety, or interior finishing. We source smarter so you pay less for the same quality you\'d find at a luxury hotel.',
                                    },
                                    {
                                        num: '03',
                                        title: 'Permit-First Approach',
                                        body: 'Every project begins with a permit review — not an afterthought. We manage municipality, Civil Defense, IACAD, and industrial zone approvals before a single pole is driven into the ground. A 500,000 AED fine for an unlicensed structure is not something we let our clients encounter.',
                                    },
                                    {
                                        num: '04',
                                        title: 'Genuinely Full-Service',
                                        body: 'We do not hand you a tent and walk away. Every project we deliver includes structural engineering, climate systems, interior design, furniture, lighting, and post-installation support throughout the rental period.',
                                    },
                                ].map((point) => (
                                    <div key={point.num} className="bg-bg-elevated border border-border rounded-xl p-6 flex gap-5">
                                        <span className="text-3xl font-bold text-gold/30 font-display flex-shrink-0">{point.num}</span>
                                        <div>
                                            <h4 className="text-white font-semibold text-lg mb-2">{point.title}</h4>
                                            <p className="text-text-muted text-sm leading-relaxed">{point.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-border my-12" />

                            <h2>Frequently Asked Questions</h2>

                            <div className="not-prose my-8 space-y-4">
                                {[
                                    {
                                        q: 'How much does tent rental cost in UAE?',
                                        a: 'Pricing varies by tent type, size, duration, and included services. Small Majlis setups start from AED 3,000–5,000; large event structures from AED 15,000+. Contact our team for a detailed quote tailored to your exact requirements — we typically respond within 24 hours.',
                                    },
                                    {
                                        q: 'Do tents in UAE require permits?',
                                        a: 'Yes — most temporary tent structures require municipality and Civil Defense approvals. We manage the entire process on your behalf, including structural safety certifications and IACAD compliance where applicable.',
                                    },
                                    {
                                        q: 'What is your fastest installation time?',
                                        a: 'We can mobilize within 48–72 hours for urgent projects across most UAE areas. For large or complex structures, we recommend booking at least two weeks in advance to guarantee availability and permit processing time.',
                                    },
                                    {
                                        q: 'Do you provide interior design and furniture?',
                                        a: 'Yes — our service is completely turnkey. From flooring and lighting to traditional Sadu Majlis décor and contemporary luxury lounge furniture, we provide everything needed to transform the tent structure into a complete event space.',
                                    },
                                    {
                                        q: 'Do you service all seven Emirates?',
                                        a: 'Yes. We have mobilization teams based across the UAE and regularly install in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. No emirate is out of reach.',
                                    },
                                ].map((faq) => (
                                    <details key={faq.q} className="group bg-bg-elevated border border-border/50 rounded-2xl overflow-hidden hover:border-gold/30 transition-colors">
                                        <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                                            <h3 className="text-white font-display text-base leading-snug">{faq.q}</h3>
                                            <svg className="text-gold shrink-0 w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </summary>
                                        <div className="px-6 pb-5">
                                            <p className="text-text-muted text-sm leading-relaxed">{faq.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="not-prose bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12">
                                <h2 className="text-3xl font-display text-white mb-4">Get a Free Quote for Your Project</h2>
                                <p className="text-text-muted mb-6">
                                    Tell us your tent type, location, size, and date — one of our specialists will get back to you within 24 hours with a detailed, itemised quote built around your exact requirements.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/request-quote"
                                        className="flex-1 text-center px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg"
                                    >
                                        Request Free Quote
                                    </Link>
                                    <a
                                        href="https://wa.me/971501826969"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-8 py-4 bg-transparent border-2 border-gold text-gold rounded-lg font-bold uppercase tracking-widest hover:bg-gold/10 transition-colors"
                                    >
                                        WhatsApp Us
                                    </a>
                                </div>
                            </div>
                        </>
                    )}

                    <BlogServiceCTA variant="general" />

                    {/* Comments placeholder */}
                    <div className="border-t border-border pt-12">
                        <h3 className="text-2xl font-display text-white mb-6">
                            {locale === 'ar' ? 'التعليقات' : 'Comments'}
                        </h3>
                        <div className="bg-bg-elevated p-6 rounded-xl border border-border">
                            <p className="text-text-muted text-sm mb-4">
                                {locale === 'ar'
                                    ? 'شارك تجربتك مع تأجير الخيام في الإمارات أو اطرح سؤالاً!'
                                    : 'Share your experience with tent rental in UAE or ask a question!'}
                            </p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold flex-shrink-0">G</div>
                                <div className="flex-1">
                                    <textarea
                                        className="w-full bg-bg-dark border border-border rounded-lg p-3 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                                        rows={3}
                                        placeholder={locale === 'ar' ? 'شارك أفكارك أو اطرح سؤالاً...' : 'Share your thoughts or ask a question...'}
                                    />
                                    <button className="mt-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors">
                                        {locale === 'ar' ? 'نشر التعليق' : 'Post Comment'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}
