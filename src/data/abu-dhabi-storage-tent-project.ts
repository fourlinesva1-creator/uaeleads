// Case study: 4,000 sqm storage tent project, Abu Dhabi (2026).
// Scope taken from the job's PO/invoice — client name and price are deliberately NOT published.
// 45-day rental, 4,000 sqm = 1 x 30x20m + 2 x 20x85m, nail-anchored, PVC roof + all sides closed,
// regular lights with full electrical works, AC units, 2 roller shutter doors,
// 2 lockable single doors with glass. Contents: palletised boxed goods + bagged material.

const IMG = '/images/projects/abu-dhabi-storage-tent';

export const abuDhabiStorageProjectImages = {
    hero: `${IMG}/abu-dhabi-storage-tent-hero.jpg`,
    og: `${IMG}/og-abu-dhabi-storage-tent.jpg`,
    gallery: [
        { src: `${IMG}/storage-tent-interior-goods.jpg`, w: 1600, h: 1092, key: 'interior' },
        { src: `${IMG}/aluminium-frame-installation.jpg`, w: 1920, h: 1440, key: 'frame' },
        { src: `${IMG}/pvc-storage-tent-exterior.jpg`, w: 960, h: 1280, key: 'exterior' },
        { src: `${IMG}/roller-shutter-door-entrance.jpg`, w: 960, h: 640, key: 'shutter' },
        { src: `${IMG}/clear-span-roof-frame.jpg`, w: 960, h: 1280, key: 'roof' },
        { src: `${IMG}/site-mobilisation-dusk.jpg`, w: 1280, h: 960, key: 'mobilisation' },
        { src: `${IMG}/storage-tent-dusk-abu-dhabi.jpg`, w: 960, h: 1280, key: 'dusk' },
    ],
} as const;

type GalleryKey = (typeof abuDhabiStorageProjectImages.gallery)[number]['key'];

type ProjectContent = {
    metaTitle: string;
    metaDescription: string;
    breadcrumbPortfolio: string;
    breadcrumbProject: string;
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    briefLabel: string;
    briefTitle: string;
    briefBody: string[];
    specTitle: string;
    specRows: { label: string; value: string }[];
    structuresTitle: string;
    structures: { name: string; size: string; area: string }[];
    structuresTotal: { label: string; area: string };
    galleryTitle: string;
    gallerySubtitle: string;
    alts: Record<GalleryKey, string>;
    heroAlt: string;
    featuresTitle: string;
    features: { title: string; body: string }[];
    relatedTitle: string;
    related: { href: string; title: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
};

export const abuDhabiStorageProjectContent: Record<string, ProjectContent> = {
    en: {
        metaTitle: '4,000 sqm Storage Tent Project Abu Dhabi',
        metaDescription:
            'Case study: a 4,000 sqm air-conditioned storage tent in Abu Dhabi — one 30x20m and two 20x85m structures with PVC roofs, closed sides, lighting and roller shutter doors on a 45-day rental.',
        breadcrumbPortfolio: 'Portfolio',
        breadcrumbProject: 'Abu Dhabi Storage Tent',
        heroLabel: 'Recent Project · Abu Dhabi · 2026',
        heroTitle: '4,000 sqm Storage Tent for Secure Goods Storage in Abu Dhabi',
        heroBody:
            'Three fully enclosed, air-conditioned PVC storage structures — one 30m x 20m and two 20m x 85m — installed beside an existing warehouse on a 45-day rental, giving our client secure, covered space for important goods.',
        ctaPrimary: 'Get a Quote for a Similar Tent',
        ctaSecondary: 'Request a Site Visit',
        stats: [
            { value: '4,000 m²', label: 'Covered storage area' },
            { value: '3', label: 'Storage structures' },
            { value: '100%', label: 'Enclosed — roof & all sides' },
            { value: '45 days', label: 'Short-term rental' },
        ],
        briefLabel: 'The Brief',
        briefTitle: 'Secure, cooled space for important goods — without a permanent build',
        briefBody: [
            'Our client had a surge of important stock — palletised boxed goods and bagged material — arriving at their Abu Dhabi warehouse, with nowhere to put it. A permanent extension would have taken months. They needed 4,000 sqm of covered, lockable, air-conditioned storage for a fixed 45-day period, installed on the paved yard right next to the warehouse.',
            'Tent Now designed a layout of three aluminium-frame storage tents: a 30m x 20m structure and two 20m x 85m long-span halls. Each frame was anchored to the existing paving with ground nails — no concrete foundations — and fully enclosed with PVC fabric on the roof and all four sides to keep out dust, sand and sun.',
            'Two roller shutter doors give wide access for forklifts and pallet jacks, and two lockable single doors with glass handle day-to-day staff access. We supplied the AC units to keep the stored goods cool, plus overhead lighting with all electrical works, so the client received one turnkey package from a single contractor. The column-free interiors leave the whole floor clear for stacked pallets.',
        ],
        specTitle: 'Project Specification',
        specRows: [
            { label: 'Location', value: 'Abu Dhabi, UAE' },
            { label: 'Application', value: 'Secure storage for important goods' },
            { label: 'Contents', value: 'Palletised boxed & bagged goods' },
            { label: 'Rental term', value: '45 days' },
            { label: 'Total area', value: '4,000 sqm' },
            { label: 'Structure', value: 'Aluminium frame storage tents' },
            { label: 'Roof', value: 'PVC fabric' },
            { label: 'Side walls', value: 'All sides closed — PVC fabric' },
            { label: 'Access', value: '2 roller shutter doors + 2 lockable single doors' },
            { label: 'Cooling', value: 'AC units, supplied & installed' },
            { label: 'Lighting', value: 'Overhead lights with full electrical works' },
            { label: 'Anchoring', value: 'Nail-anchored to existing paved yard' },
        ],
        structuresTitle: 'Structure Breakdown',
        structures: [
            { name: 'Structure A', size: '30m x 20m', area: '600 sqm' },
            { name: 'Structure B', size: '20m x 85m', area: '1,700 sqm' },
            { name: 'Structure C', size: '20m x 85m', area: '1,700 sqm' },
        ],
        structuresTotal: { label: 'Total covered area', area: '4,000 sqm' },
        galleryTitle: 'Project Gallery',
        gallerySubtitle: 'From frame installation to a fully enclosed, stocked storage facility.',
        heroAlt: 'Storage tent installation beside a warehouse in Abu Dhabi by Tent Now',
        alts: {
            interior: 'Inside the Abu Dhabi storage tent with palletised goods and overhead lighting',
            frame: 'Tent Now crew installing the aluminium frame of a 20m wide storage tent in Abu Dhabi',
            exterior: 'Fully enclosed PVC storage tent with AC units next to a warehouse in Abu Dhabi',
            shutter: 'Roller shutter door entrance of the PVC storage tent at dusk',
            roof: 'Aluminium roof frame of the long-span storage tent before PVC roofing',
            mobilisation: 'Frame components laid out on site during storage tent installation in Abu Dhabi',
            dusk: 'Completed storage tent at dusk in an Abu Dhabi industrial yard',
        },
        featuresTitle: 'Why This Setup Works for Goods Storage',
        features: [
            {
                title: 'Enclosed & Air-Conditioned',
                body: 'PVC fabric on the roof and all sides plus AC units keep stock clean, dry and cool — shielded from dust, sand, direct sun and rain.',
            },
            {
                title: 'Secure Access',
                body: 'Two roller shutter doors for forklifts and pallet jacks, two lockable glass single doors for staff — all locked down after hours.',
            },
            {
                title: 'Clear, Usable Floor Space',
                body: 'Column-free aluminium frames leave the whole floor available for stacked pallets — no internal posts to work around.',
            },
            {
                title: 'No Foundations, Fast Exit',
                body: 'Nail anchoring into the existing paving means no concrete work — ideal for a 45-day hire, with the yard handed back as found.',
            },
        ],
        relatedTitle: 'Related Services',
        related: [
            { href: '/services/storage-tents', title: 'Storage Tent Rental UAE' },
            { href: '/services/storage-tents/warehouse-tents', title: 'Warehouse Tents' },
            { href: '/services/storage-tents/clear-span-tents', title: 'Clear Span Tents' },
            { href: '/locations/abu-dhabi/storage-tent-rental', title: 'Storage Tent Rental Abu Dhabi' },
        ],
        ctaTitle: 'Need covered storage in the UAE?',
        ctaBody: 'Tell us your goods, floor area, rental period and site — we will design and price the tent, AC, power and lighting as one package.',
        ctaButton: 'WhatsApp Us',
    },
    ar: {
        metaTitle: 'مشروع خيمة تخزين 4,000 متر مربع في أبوظبي',
        metaDescription:
            'دراسة حالة: خيمة تخزين مكيفة بمساحة 4,000 متر مربع في أبوظبي — هيكل 30×20 م وهيكلان 20×85 م بسقف PVC وجوانب مغلقة وإضاءة وأبواب رول شتر بإيجار 45 يوماً.',
        breadcrumbPortfolio: 'أعمالنا',
        breadcrumbProject: 'خيمة تخزين أبوظبي',
        heroLabel: 'مشروع حديث · أبوظبي · 2026',
        heroTitle: 'خيمة تخزين بمساحة 4,000 متر مربع لتخزين البضائع المهمة في أبوظبي',
        heroBody:
            'ثلاثة هياكل تخزين مكيفة ومغلقة بالكامل من قماش PVC — هيكل 30 م × 20 م وهيكلان 20 م × 85 م — تم تركيبها بجوار مستودع قائم بنظام إيجار لمدة 45 يوماً لتوفير مساحة تخزين مغطاة وآمنة لبضائع عميلنا المهمة.',
        ctaPrimary: 'اطلب عرض سعر لخيمة مماثلة',
        ctaSecondary: 'اطلب زيارة للموقع',
        stats: [
            { value: '4,000 م²', label: 'مساحة تخزين مغطاة' },
            { value: '3', label: 'هياكل تخزين' },
            { value: '100%', label: 'مغلقة — السقف وجميع الجوانب' },
            { value: '45 يوماً', label: 'إيجار قصير الأجل' },
        ],
        briefLabel: 'متطلبات المشروع',
        briefTitle: 'مساحة آمنة ومكيفة للبضائع المهمة — دون بناء دائم',
        briefBody: [
            'وصلت إلى مستودع عميلنا في أبوظبي كميات كبيرة من البضائع المهمة — بضائع معبأة في كراتين على منصات ومواد في أكياس — دون مساحة كافية لتخزينها. كان بناء توسعة دائمة سيستغرق أشهراً، لذلك احتاج إلى 4,000 متر مربع من التخزين المغطى والمكيف والقابل للإغلاق لمدة 45 يوماً، يتم تركيبه على الساحة المرصوفة بجوار المستودع مباشرة.',
            'صممت Tent Now مخططاً من ثلاث خيام تخزين بهياكل ألمنيوم: هيكل بمقاس 30 م × 20 م وقاعتان طويلتان بمقاس 20 م × 85 م. تم تثبيت كل هيكل على الأرضية المرصوفة القائمة بمسامير أرضية — دون أساسات خرسانية — وإغلاقه بالكامل بقماش PVC على السقف والجوانب الأربعة لحماية البضائع من الغبار والرمال والشمس.',
            'يوفر بابا رول شتر مدخلاً واسعاً للرافعات الشوكية وعربات المنصات، بينما يخدم بابان فرديان زجاجيان قابلان للقفل حركة الموظفين اليومية. قمنا بتوريد وحدات التكييف للحفاظ على برودة البضائع، إضافة إلى الإضاءة العلوية مع جميع الأعمال الكهربائية، ليحصل العميل على حل متكامل من مقاول واحد. ويترك التصميم الخالي من الأعمدة كامل الأرضية متاحة للمنصات المكدسة.',
        ],
        specTitle: 'مواصفات المشروع',
        specRows: [
            { label: 'الموقع', value: 'أبوظبي، الإمارات' },
            { label: 'الاستخدام', value: 'تخزين آمن للبضائع المهمة' },
            { label: 'المحتويات', value: 'بضائع على منصات ومواد في أكياس' },
            { label: 'مدة الإيجار', value: '45 يوماً' },
            { label: 'المساحة الإجمالية', value: '4,000 متر مربع' },
            { label: 'الهيكل', value: 'خيام تخزين بهياكل ألمنيوم' },
            { label: 'السقف', value: 'قماش PVC' },
            { label: 'الجوانب', value: 'مغلقة بالكامل — قماش PVC' },
            { label: 'المداخل', value: 'بابا رول شتر + بابان فرديان قابلان للقفل' },
            { label: 'التبريد', value: 'وحدات تكييف — توريد وتركيب' },
            { label: 'الإضاءة', value: 'إضاءة علوية مع جميع الأعمال الكهربائية' },
            { label: 'التثبيت', value: 'مسامير أرضية على ساحة مرصوفة قائمة' },
        ],
        structuresTitle: 'تفاصيل الهياكل',
        structures: [
            { name: 'الهيكل A', size: '30 م × 20 م', area: '600 م²' },
            { name: 'الهيكل B', size: '20 م × 85 م', area: '1,700 م²' },
            { name: 'الهيكل C', size: '20 م × 85 م', area: '1,700 م²' },
        ],
        structuresTotal: { label: 'إجمالي المساحة المغطاة', area: '4,000 م²' },
        galleryTitle: 'معرض صور المشروع',
        gallerySubtitle: 'من تركيب الهيكل إلى منشأة تخزين مغلقة بالكامل ومليئة بالبضائع.',
        heroAlt: 'تركيب خيمة تخزين بجوار مستودع في أبوظبي من تنت ناو',
        alts: {
            interior: 'داخل خيمة التخزين في أبوظبي مع بضائع على منصات وإضاءة علوية',
            frame: 'فريق تنت ناو يركب هيكل الألمنيوم لخيمة تخزين بعرض 20 متراً في أبوظبي',
            exterior: 'خيمة تخزين PVC مغلقة بالكامل مع وحدات تكييف بجوار مستودع في أبوظبي',
            shutter: 'مدخل باب رول شتر لخيمة التخزين عند الغروب',
            roof: 'هيكل سقف الألمنيوم لخيمة التخزين قبل تركيب سقف PVC',
            mobilisation: 'مكونات الهيكل في الموقع أثناء تركيب خيمة التخزين في أبوظبي',
            dusk: 'خيمة التخزين المكتملة عند الغروب في ساحة صناعية بأبوظبي',
        },
        featuresTitle: 'لماذا يناسب هذا التصميم تخزين البضائع',
        features: [
            {
                title: 'مغلقة ومكيفة',
                body: 'قماش PVC على السقف وجميع الجوانب مع وحدات التكييف يحافظ على نظافة البضائع وجفافها وبرودتها ويحميها من الغبار والرمال والشمس والأمطار.',
            },
            {
                title: 'دخول آمن',
                body: 'بابا رول شتر للرافعات الشوكية وعربات المنصات، وبابان زجاجيان قابلان للقفل للموظفين — وتُغلق جميعها بإحكام بعد ساعات العمل.',
            },
            {
                title: 'مساحة أرضية خالية وقابلة للاستخدام',
                body: 'هياكل الألمنيوم الخالية من الأعمدة الداخلية تترك كامل الأرضية متاحة للمنصات المكدسة.',
            },
            {
                title: 'دون أساسات وفك سريع',
                body: 'التثبيت بالمسامير في الأرضية المرصوفة يعني عدم الحاجة لأعمال خرسانية — مثالي لإيجار 45 يوماً مع إعادة الساحة كما كانت.',
            },
        ],
        relatedTitle: 'خدمات ذات صلة',
        related: [
            { href: '/services/storage-tents', title: 'تأجير خيام التخزين في الإمارات' },
            { href: '/services/storage-tents/warehouse-tents', title: 'خيام المستودعات' },
            { href: '/services/storage-tents/clear-span-tents', title: 'خيام كلير سبان' },
            { href: '/locations/abu-dhabi/storage-tent-rental', title: 'تأجير خيام التخزين في أبوظبي' },
        ],
        ctaTitle: 'تحتاج إلى مساحة تخزين مغطاة في الإمارات؟',
        ctaBody: 'أخبرنا بنوع البضائع والمساحة ومدة الإيجار والموقع — وسنصمم ونسعّر الخيمة والتكييف والكهرباء والإضاءة كحزمة واحدة.',
        ctaButton: 'تواصل عبر واتساب',
    },
};
