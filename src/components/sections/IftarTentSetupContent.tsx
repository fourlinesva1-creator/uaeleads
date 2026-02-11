'use client';

import { useLocale } from 'next-intl';
import { useModal } from '@/components/ui/ModalProvider';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import {
    Snowflake,
    ShieldCheck,
    Flame,
    DoorOpen,
    Utensils,
    Armchair,
    Lightbulb,
    Clock,
    Users,
    Star,
    Phone,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react';

const content = {
    en: {
        badge: '30+ Years of Iftar Excellence',
        h1: 'Ramadan Tent Setup for Iftar',
        h1Accent: 'Across the UAE',
        subtitle: 'Create unforgettable Iftar gatherings with premium, fully-equipped Ramadan tents — designed for comfort, safety, and the spirit of togetherness.',
        intro: 'At TentNow.ae, we understand that Iftar is more than a meal — it\'s a moment of connection, comfort, and celebration. As specialists in Ramadan tent rental across Dubai, Abu Dhabi, Sharjah, and all seven emirates, we design and deliver tent solutions that reflect the spirit of the Holy Month: warm, welcoming, and beautifully executed. From intimate family Majlis to grand corporate Iftars hosting 1,000+ guests, our team brings three decades of regional expertise to every setup.',
        featuresLabel: 'Why Choose Tent Now',
        featuresTitle: 'Premium Features for Every Iftar Setup',
        featuresSubtitle: 'Every tent we install is engineered for the UAE climate and built to meet strict Civil Defense regulations — so you can focus on what matters: gathering together.',
        features: [
            {
                icon: 'snowflake',
                title: 'Air-Conditioned Tents',
                body: 'Industrial-grade climate control systems maintain comfortable temperatures throughout the evening, even during the warmest Ramadan nights in the UAE.',
            },
            {
                icon: 'doorOpen',
                title: 'Security Gates & Access Control',
                body: 'Professional entry and exit management with security screening, VIP access lanes, and crowd control barriers for safe, orderly guest flow.',
            },
            {
                icon: 'shieldCheck',
                title: 'Safety Control Systems',
                body: 'Comprehensive safety infrastructure including emergency exits, first-aid stations, fire extinguishers, and 24/7 on-site safety personnel.',
            },
            {
                icon: 'flame',
                title: 'Fire-Repellent Tent Fabric',
                body: 'All tent materials are certified fire-retardant and comply with UAE Civil Defense codes. Every installation includes a fire safety certificate.',
            },
            {
                icon: 'utensils',
                title: 'Catering-Ready Interiors',
                body: 'Pre-wired for buffet stations, serving areas, and commercial kitchen connections. Integrated waste management and hygiene facilities.',
            },
            {
                icon: 'armchair',
                title: 'Luxury Furniture & Carpeting',
                body: 'Premium Arabic-style seating, majlis floor cushions, dining tables, and plush carpeting — all coordinated with your chosen theme and colour palette.',
            },
            {
                icon: 'lightbulb',
                title: 'Ambient Lighting & Decor',
                body: 'Atmospheric Ramadan lighting with traditional lantern accents, chandelier installations, and customizable mood lighting for an authentic ambiance.',
            },
            {
                icon: 'clock',
                title: '24/7 Support & Maintenance',
                body: 'Round-the-clock technical support throughout the entire Ramadan season. On-call maintenance teams ensure zero downtime for your Iftar events.',
            },
        ],
        contentTitle: 'The Complete Iftar Tent Experience',
        contentBody1: 'An Iftar tent is more than a structure — it is the heart of Ramadan hospitality. Your tent\'s layout is designed for flow: from buffet stations to seating, prayer areas to queueing zones. Every detail matters — the gentle hum of cool air as guests arrive after a day of fasting, the warm glow of lanterns casting golden light across traditional carpets, cushions and floor seating that honour tradition alongside high-performance AC for evening temperatures.',
        contentBody2: 'Dubai\'s Ramadan tent culture is unique — it blends deep tradition with modern hospitality expectations. We know the UAE\'s neighbourhoods, climate challenges, and permit landscape inside out — from Marina humidity concerns to desert winds near Jebel Ali. Our setups aren\'t generic; they\'re adapted for local conditions and guest comfort. We serve areas including Downtown Dubai, Dubai Marina, Business Bay, Jumeirah, DIFC, Al Barsha, Emirates Hills, Silicon Oasis — and across Abu Dhabi, Sharjah, and all Northern Emirates.',
        contentBody3: 'Temporary structures require approvals from Municipality, Civil Defence, and relevant authorities. We manage every step — permits, inspections, and structural compliance — so you avoid costly fines and delays. Whether you\'re a hotel expanding Iftar capacity, a corporation hosting employees, a government ministry organizing community Iftars, or a family creating a private Ramadan retreat, Tent Now tailors every installation to your exact requirements and budget.',
        audienceTitle: 'Who We Serve',
        audiences: [
            { title: 'Hotels & Resorts', body: 'Expand your Ramadan dining capacity with seamless tent extensions that match your property\'s luxury standards.' },
            { title: 'Corporate & Government', body: 'Host large-scale Iftar events for employees, partners, and the community with fully managed tent solutions.' },
            { title: 'Residential & Family', body: 'Transform your villa garden or compound into a private Ramadan Majlis for intimate family gatherings.' },
            { title: 'Community & Charity', body: 'Provide dignified, comfortable Iftar spaces for charitable events and public community gatherings.' },
        ],
        statsLabel: 'By the Numbers',
        stats: [
            { value: '30+', label: 'Years of Experience' },
            { value: '5,000+', label: 'Tents Installed' },
            { value: '7', label: 'Emirates Covered' },
            { value: '24/7', label: 'Ramadan Support' },
        ],
        processTitle: 'How It Works',
        processSteps: [
            { step: '01', title: 'Consultation', body: 'Share your vision, guest count, and venue details. Our team visits the site within 24 hours for a free assessment.' },
            { step: '02', title: 'Design & Quote', body: 'Receive a detailed 3D layout, itemized quote, and timeline. We handle all municipality permits and Civil Defense approvals.' },
            { step: '03', title: 'Installation', body: 'Our experienced crew installs your complete Iftar tent setup — structure, AC, furniture, lighting, and decor — before Ramadan begins.' },
            { step: '04', title: 'Support & Removal', body: '24/7 maintenance throughout Ramadan. After Eid, we handle complete dismantling and site restoration at no extra charge.' },
        ],
        faqTitle: 'Frequently Asked Questions',
        faqs: [
            {
                q: 'How far in advance should I book an Iftar tent setup?',
                a: 'We recommend booking 6-8 weeks before Ramadan for the best availability and pricing. Corporate and hotel clients typically secure their setups 2-3 months ahead. Last-minute bookings are possible but subject to availability.',
            },
            {
                q: 'What sizes of Iftar tents are available?',
                a: 'We offer tents from intimate 20-person family setups to grand 2,000+ guest corporate installations. Standard sizes include 10x10m, 15x20m, 20x30m, and 30x60m — or fully custom dimensions to fit any venue.',
            },
            {
                q: 'Are the tents approved by UAE Civil Defense?',
                a: 'Absolutely. Every tent we install uses fire-retardant fabric certified to UAE standards. We obtain all necessary Civil Defense permits and provide fire safety certificates for each installation.',
            },
            {
                q: 'Can I customize the interior design and theme?',
                a: 'Yes, we offer full interior customization — from traditional Emirati Sadu themes to modern minimalist designs. Choose your colour palette, furniture style, lighting scheme, and decorative elements.',
            },
            {
                q: 'What is included in the rental price?',
                a: 'Our packages include the tent structure, installation, air conditioning, basic lighting, carpeting, and removal after Ramadan. Furniture, premium decor, catering equipment, and security setups are available as add-ons.',
            },
        ],
        ctaTitle: 'Ready to Set Up Your Iftar Tent?',
        ctaBody: 'Secure your preferred dates for Ramadan 2026. Our team is ready to design and install your perfect Iftar tent — anywhere in the UAE.',
        ctaButton: 'Get a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        ctaNote: 'Ramadan 2026 starts February 19th — Book early for best availability',
        breadcrumbServices: 'Services',
        breadcrumbPage: 'Ramadan Iftar Tent Setup',
    },
    ar: {
        badge: 'أكثر من 30 عامًا من التميز في خيام الإفطار',
        h1: 'تجهيز خيام رمضان للإفطار',
        h1Accent: 'في جميع أنحاء الإمارات',
        subtitle: 'اصنع تجمعات إفطار لا تُنسى مع خيام رمضان الفاخرة والمجهزة بالكامل — مصممة للراحة والأمان وروح التلاحم.',
        intro: 'في TentNow.ae، نفهم أن الإفطار أكثر من مجرد وجبة — إنه لحظة تواصل وراحة واحتفال. كمتخصصين في تأجير خيام رمضان في دبي وأبوظبي والشارقة وجميع الإمارات السبع، نصمم ونقدم حلول خيام تعكس روح الشهر الفضيل: دافئة، مرحّبة، ومنفذة بإتقان. من المجالس العائلية الحميمة إلى إفطارات الشركات الكبرى التي تستضيف أكثر من 1,000 ضيف، فريقنا يجلب ثلاثة عقود من الخبرة الإقليمية لكل تجهيز.',
        featuresLabel: 'لماذا تختار Tent Now',
        featuresTitle: 'مميزات فاخرة لكل تجهيز إفطار',
        featuresSubtitle: 'كل خيمة نركّبها مصممة لمناخ الإمارات ومبنية لتلبي لوائح الدفاع المدني الصارمة — حتى تتفرغ لما يهم: التجمع معًا.',
        features: [
            {
                icon: 'snowflake',
                title: 'خيام مكيفة الهواء',
                body: 'أنظمة تكييف صناعية تحافظ على درجات حرارة مريحة طوال المساء، حتى في أكثر ليالي رمضان حرارة في الإمارات.',
            },
            {
                icon: 'doorOpen',
                title: 'بوابات أمنية ونظام دخول',
                body: 'إدارة احترافية للدخول والخروج مع فحص أمني، ممرات VIP، وحواجز تنظيم الحشود لتدفق آمن ومنظم للضيوف.',
            },
            {
                icon: 'shieldCheck',
                title: 'أنظمة تحكم بالسلامة',
                body: 'بنية تحتية شاملة للسلامة تشمل مخارج الطوارئ، محطات الإسعافات الأولية، طفايات الحريق، وفريق سلامة متواجد على مدار الساعة.',
            },
            {
                icon: 'flame',
                title: 'قماش خيام مقاوم للحريق',
                body: 'جميع مواد الخيام معتمدة ومقاومة للحريق وتتوافق مع معايير الدفاع المدني الإماراتي. كل تركيب يتضمن شهادة سلامة من الحريق.',
            },
            {
                icon: 'utensils',
                title: 'تصميم داخلي جاهز للتقديم',
                body: 'توصيلات مسبقة لمحطات البوفيه ومناطق التقديم والمطابخ التجارية. مرافق إدارة النفايات والنظافة المتكاملة.',
            },
            {
                icon: 'armchair',
                title: 'أثاث فاخر وسجاد',
                body: 'جلسات عربية فاخرة، وسائد مجلس أرضية، طاولات طعام، وسجاد فخم — كلها منسقة مع الثيم واللوحة اللونية المختارة.',
            },
            {
                icon: 'lightbulb',
                title: 'إضاءة وديكور رمضاني',
                body: 'إضاءة رمضانية ساحرة مع لمسات فوانيس تقليدية، تركيبات ثريات، وإضاءة مزاجية قابلة للتخصيص لأجواء أصيلة.',
            },
            {
                icon: 'clock',
                title: 'دعم وصيانة على مدار الساعة',
                body: 'دعم فني على مدار الساعة طوال موسم رمضان بالكامل. فرق صيانة تحت الطلب تضمن عدم توقف فعاليات الإفطار.',
            },
        ],
        contentTitle: 'تجربة خيمة الإفطار المتكاملة',
        contentBody1: 'خيمة الإفطار أكثر من مجرد هيكل — إنها قلب ضيافة رمضان. تصميم الخيمة مصمم للتدفق: من محطات البوفيه إلى الجلسات، ومناطق الصلاة إلى مناطق الانتظار. كل تفصيل مهم — همهمة الهواء البارد اللطيفة عند وصول الضيوف بعد يوم من الصيام، التوهج الدافئ للفوانيس التي تلقي ضوءها الذهبي على السجاد التقليدي، والوسائد والجلسات الأرضية التي تكرّم التقاليد مع تكييف عالي الأداء لدرجات حرارة المساء.',
        contentBody2: 'ثقافة خيام رمضان في دبي فريدة — تمزج بين التقاليد العريقة وتوقعات الضيافة العصرية. نعرف أحياء الإمارات وتحديات المناخ ومتطلبات التصاريح من الداخل — من مخاوف رطوبة المارينا إلى رياح الصحراء قرب جبل علي. تجهيزاتنا ليست عامة؛ إنها مكيفة للظروف المحلية وراحة الضيوف. نخدم مناطق تشمل وسط دبي، دبي مارينا، الخليج التجاري، جميرا، مركز دبي المالي، البرشاء، تلال الإمارات، واحة السيليكون — وعبر أبوظبي والشارقة وجميع الإمارات الشمالية.',
        contentBody3: 'الهياكل المؤقتة تتطلب موافقات من البلدية والدفاع المدني والجهات المختصة. نتولى كل خطوة — التصاريح، التفتيشات، والامتثال الإنشائي — لتتجنب الغرامات والتأخيرات المكلفة. سواء كنت فندقًا يوسع طاقة الإفطار، أو شركة تستضيف الموظفين، أو وزارة حكومية تنظم إفطارات مجتمعية، أو عائلة تصنع ملاذًا رمضانيًا خاصًا، Tent Now تصمم كل تركيب وفقًا لمتطلباتك وميزانيتك بالضبط.',
        audienceTitle: 'من نخدم',
        audiences: [
            { title: 'الفنادق والمنتجعات', body: 'وسّع طاقة الإفطار مع امتدادات خيام سلسة تتناسب مع معايير الفخامة في منشأتك.' },
            { title: 'الشركات والحكومة', body: 'استضف فعاليات إفطار كبيرة للموظفين والشركاء والمجتمع مع حلول خيام مُدارة بالكامل.' },
            { title: 'السكني والعائلي', body: 'حوّل حديقة فيلتك أو مجمعك إلى مجلس رمضاني خاص لتجمعات عائلية حميمة.' },
            { title: 'المجتمعي والخيري', body: 'وفّر مساحات إفطار كريمة ومريحة للفعاليات الخيرية والتجمعات المجتمعية العامة.' },
        ],
        statsLabel: 'بالأرقام',
        stats: [
            { value: '+30', label: 'عامًا من الخبرة' },
            { value: '+5,000', label: 'خيمة تم تركيبها' },
            { value: '7', label: 'إمارات مغطاة' },
            { value: '24/7', label: 'دعم رمضاني' },
        ],
        processTitle: 'كيف نعمل',
        processSteps: [
            { step: '٠١', title: 'الاستشارة', body: 'شاركنا رؤيتك وعدد الضيوف وتفاصيل الموقع. فريقنا يزور الموقع خلال 24 ساعة لتقييم مجاني.' },
            { step: '٠٢', title: 'التصميم والعرض', body: 'احصل على تخطيط ثلاثي الأبعاد مفصل، عرض أسعار مفصّل، وجدول زمني. نتولى جميع تصاريح البلدية وموافقات الدفاع المدني.' },
            { step: '٠٣', title: 'التركيب', body: 'فريقنا المحترف يركّب تجهيز خيمة الإفطار بالكامل — الهيكل، التكييف، الأثاث، الإضاءة، والديكور — قبل بداية رمضان.' },
            { step: '٠٤', title: 'الدعم والإزالة', body: 'صيانة على مدار الساعة طوال رمضان. بعد العيد، نتولى التفكيك الكامل وإعادة الموقع بدون تكلفة إضافية.' },
        ],
        faqTitle: 'الأسئلة الشائعة',
        faqs: [
            {
                q: 'ما هو الوقت المناسب لحجز تجهيز خيمة الإفطار؟',
                a: 'ننصح بالحجز قبل 6-8 أسابيع من رمضان لأفضل توفر وأسعار. عملاء الشركات والفنادق عادة يؤمنون تجهيزاتهم قبل 2-3 أشهر. الحجوزات المتأخرة ممكنة حسب التوفر.',
            },
            {
                q: 'ما أحجام خيام الإفطار المتاحة؟',
                a: 'نقدم خيام من تجهيزات عائلية لـ 20 شخصًا إلى تركيبات شركات كبرى لأكثر من 2,000 ضيف. الأحجام القياسية تشمل 10×10م، 15×20م، 20×30م، و30×60م — أو أبعاد مخصصة بالكامل.',
            },
            {
                q: 'هل الخيام معتمدة من الدفاع المدني الإماراتي؟',
                a: 'بالتأكيد. كل خيمة نركبها تستخدم قماشًا مقاومًا للحريق معتمدًا وفق المعايير الإماراتية. نحصل على جميع تصاريح الدفاع المدني ونوفر شهادات السلامة من الحريق لكل تركيب.',
            },
            {
                q: 'هل يمكنني تخصيص التصميم الداخلي والثيم؟',
                a: 'نعم، نقدم تخصيصًا كاملًا للداخل — من ثيمات السدو الإماراتية التقليدية إلى التصاميم العصرية البسيطة. اختر لوحة ألوانك، نمط الأثاث، مخطط الإضاءة، والعناصر الزخرفية.',
            },
            {
                q: 'ماذا يشمل سعر الإيجار؟',
                a: 'تشمل باقاتنا هيكل الخيمة، التركيب، التكييف، الإضاءة الأساسية، السجاد، والإزالة بعد رمضان. الأثاث، الديكور الفاخر، معدات التقديم، وتجهيزات الأمن متاحة كإضافات.',
            },
        ],
        ctaTitle: 'جاهز لتجهيز خيمة الإفطار؟',
        ctaBody: 'احجز مواعيدك المفضلة لرمضان 2026. فريقنا جاهز لتصميم وتركيب خيمة الإفطار المثالية — في أي مكان في الإمارات.',
        ctaButton: 'احصل على عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        ctaNote: 'رمضان 2026 يبدأ 19 فبراير — احجز مبكرًا لأفضل توفر',
        breadcrumbServices: 'الخدمات',
        breadcrumbPage: 'تجهيز خيام الإفطار الرمضانية',
    },
};

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number; strokeWidth?: number }>> = {
    snowflake: Snowflake,
    shieldCheck: ShieldCheck,
    flame: Flame,
    doorOpen: DoorOpen,
    utensils: Utensils,
    armchair: Armchair,
    lightbulb: Lightbulb,
    clock: Clock,
};

export default function IftarTentSetupContent() {
    const locale = useLocale();
    const { openCallback } = useModal();
    const t = locale === 'ar' ? content.ar : content.en;
    const pageUrl = `https://tentnow.ae/${locale}/services/ramadan-iftar-tent-setup`;

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name={`${t.h1} ${t.h1Accent}`}
                description={t.subtitle}
                url={pageUrl}
                image="/images/tent-now/ramadan-tents-for-rentals.jpg"
            />
            <BreadcrumbSchema
                items={[
                    { name: t.breadcrumbServices, href: '/services' },
                    { name: t.breadcrumbPage, href: '/services/ramadan-iftar-tent-setup' },
                ]}
            />

            {/* ============================================ */}
            {/* HERO SECTION                                 */}
            {/* ============================================ */}
            <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-28 overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text Column */}
                        <div className="animate-fade-in-up">
                            <div className="section-label mb-6">
                                <span>{t.badge}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display text-white mb-4 tracking-tight leading-[1.1]">
                                {t.h1}
                                <span className="block text-gold">{t.h1Accent}</span>
                            </h1>
                            <div className="w-24 h-1.5 bg-gold mb-8 shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
                            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-10 max-w-xl">
                                {t.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={openCallback}
                                    className="btn-gold-fill px-8 py-4 rounded-xl font-display flex items-center gap-3 text-sm uppercase tracking-widest"
                                >
                                    {t.ctaButton}
                                    <ArrowRight size={18} />
                                </button>
                                <a
                                    href="https://wa.me/971501826969"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-whatsapp px-8 py-4 rounded-xl font-display flex items-center gap-3 text-sm uppercase tracking-widest"
                                >
                                    <Phone size={18} />
                                    {t.ctaWhatsapp}
                                </a>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
                                <Image
                                    src="/images/tent-now/ramadan-tents-for-rentals.jpg"
                                    alt={locale === 'ar' ? 'خيام رمضان للإيجار في الإمارات - Tent Now' : 'Ramadan tents for rental in UAE - Tent Now'}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent" />
                            </div>
                            {/* Decorative gold corner */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-2xl rtl:-right-auto rtl:-left-4 rtl:border-r-0 rtl:border-l-2 rtl:rounded-br-none rtl:rounded-bl-2xl" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl rtl:-left-auto rtl:-right-4 rtl:border-l-0 rtl:border-r-2 rtl:rounded-tl-none rtl:rounded-tr-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* STATS BAR                                    */}
            {/* ============================================ */}
            <section className="relative z-10">
                <div className="container-luxury">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border">
                        {t.stats.map((stat, idx) => (
                            <div key={idx} className="bg-bg-card p-8 text-center">
                                <div className="text-3xl md:text-4xl font-display font-bold text-gold mb-2">{stat.value}</div>
                                <div className="text-sm text-text-muted uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* INTRO CONTENT                                */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
                            {t.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* KEY FEATURES GRID                            */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28 bg-bg-darker">
                <div className="container-luxury">
                    <div className="text-center mb-16">
                        <div className="section-label justify-center mb-6">
                            <span>{t.featuresLabel}</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display text-white mb-6 tracking-tight">
                            {t.featuresTitle}
                        </h2>
                        <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
                            {t.featuresSubtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.features.map((feature, idx) => {
                            const IconComponent = iconMap[feature.icon];
                            return (
                                <div
                                    key={idx}
                                    className="group p-8 bg-bg-card border border-border rounded-2xl hover:border-gold/40 transition-all duration-500 hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                        {IconComponent && <IconComponent className="text-gold" size={28} strokeWidth={1.5} />}
                                    </div>
                                    <h3 className="text-lg font-display text-white mb-3 group-hover:text-gold transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-text-muted leading-relaxed">
                                        {feature.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* CONTENT + SECOND IMAGE                       */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
                                <Image
                                    src="/images/tent-now/ramadan-tents.jpg"
                                    alt={locale === 'ar' ? 'خيام رمضان الفاخرة - Tent Now' : 'Premium Ramadan tents - Tent Now'}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/30 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-display text-white mb-8 tracking-tight">
                                {t.contentTitle}
                            </h2>
                            <div className="space-y-6">
                                <p className="text-text-muted leading-relaxed">{t.contentBody1}</p>
                                <p className="text-text-muted leading-relaxed">{t.contentBody2}</p>
                                <p className="text-text-muted leading-relaxed">{t.contentBody3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* WHO WE SERVE                                 */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28 bg-bg-darker">
                <div className="container-luxury">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display text-white mb-6 tracking-tight">
                            {t.audienceTitle}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.audiences.map((audience, idx) => (
                            <div key={idx} className="p-8 bg-bg-card border border-border rounded-2xl hover:border-gold/30 transition-all group">
                                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                                    <Users className="text-gold" size={24} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-display text-white mb-3">{audience.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{audience.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* HOW IT WORKS                                 */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display text-white mb-6 tracking-tight">
                            {t.processTitle}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.processSteps.map((step, idx) => (
                            <div key={idx} className="relative">
                                <div className="text-6xl font-display font-bold text-gold/10 mb-4">{step.step}</div>
                                <h3 className="text-xl font-display text-white mb-3">{step.title}</h3>
                                <p className="text-sm text-text-muted leading-relaxed">{step.body}</p>
                                {idx < t.processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 rtl:right-auto rtl:left-0 rtl:-translate-x-1/2">
                                        <ArrowRight className="text-gold/20" size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FAQ SECTION                                  */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28 bg-bg-darker">
                <div className="container-luxury">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display text-white mb-12 text-center tracking-tight">
                            {t.faqTitle}
                        </h2>
                        <div className="space-y-4">
                            {t.faqs.map((faq, idx) => (
                                <details key={idx} className="bg-bg-card p-6 rounded-xl border border-border group">
                                    <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4">
                                        <span>{faq.q}</span>
                                        <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="mt-4 text-text-muted leading-relaxed">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FINAL CTA                                    */}
            {/* ============================================ */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="relative p-12 lg:p-20 bg-gold rounded-3xl overflow-hidden group">
                        {/* Background decorative element */}
                        <div className="absolute top-0 right-0 p-16 opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700">
                            <Star size={300} strokeWidth={1} />
                        </div>

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                            <div className="max-w-xl text-center lg:text-start">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-bg-dark font-bold mb-4">
                                    {t.ctaTitle}
                                </h2>
                                <p className="text-bg-dark/80 text-lg font-medium mb-2">
                                    {t.ctaBody}
                                </p>
                                <p className="text-bg-dark/60 text-sm uppercase tracking-widest">
                                    {t.ctaNote}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/request-quote"
                                    className="px-10 py-5 bg-bg-dark text-white rounded-xl font-bold tracking-widest uppercase hover:bg-bg-darker transition-all shadow-2xl text-center text-sm"
                                >
                                    {t.ctaButton}
                                </Link>
                                <a
                                    href="https://wa.me/971501826969"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-5 bg-white/20 text-bg-dark rounded-xl font-bold tracking-widest uppercase hover:bg-white/40 transition-all text-center text-sm border border-bg-dark/20"
                                >
                                    {t.ctaWhatsapp}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FAQ SCHEMA (JSON-LD)                         */}
            {/* ============================================ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: t.faqs.map(faq => ({
                            '@type': 'Question',
                            name: faq.q,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.a,
                            },
                        })),
                    }),
                }}
            />
        </main>
    );
}
