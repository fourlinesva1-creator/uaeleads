export interface StorageTentFAQ {
    q: string;
    a: string;
}

export interface StorageTentFeature {
    title: string;
    body: string;
}

export interface StorageTentStat {
    value: string;
    label: string;
}

export interface StorageTentType {
    title: string;
    subtitle: string;
    body: string;
    href: string;
    stat: string;
}

export interface StorageTentHubContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: StorageTentStat[];
    whyTitle: string;
    whyBody: string;
    features: StorageTentFeature[];
    typesLabel: string;
    typesTitle: string;
    typesSubtitle: string;
    tentTypes: StorageTentType[];
    industriesTitle: string;
    industriesBody: string;
    industries: string[];
    faqTitle: string;
    faqs: StorageTentFAQ[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

export interface ClearSpanContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaBack: string;
    whatTitle: string;
    whatBody1: string;
    whatBody2: string;
    whatBody3: string;
    useCasesTitle: string;
    useCasesSubtitle: string;
    useCases: StorageTentFeature[];
    specsTitle: string;
    specs: { label: string; value: string }[];
    specsNote: string;
    faqTitle: string;
    faqs: StorageTentFAQ[];
    relatedTitle: string;
    related: { href: string; label: string; note: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

export interface WarehouseContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaBack: string;
    stats: StorageTentStat[];
    mainTitle: string;
    mainBody1: string;
    mainBody2: string;
    mainBody3: string;
    fitmentsTitle: string;
    fitmentsSubtitle: string;
    fitments: string[];
    useCasesTitle: string;
    useCases: StorageTentFeature[];
    faqTitle: string;
    faqs: StorageTentFAQ[];
    relatedTitle: string;
    related: { href: string; label: string; note: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

export interface IndustrialContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaBack: string;
    stats: StorageTentStat[];
    whatTitle: string;
    whatBody1: string;
    whatBody2: string;
    whatBody3: string;
    applicationsTitle: string;
    applicationsSubtitle: string;
    applications: { title: string; body: string; badge: string; alert: boolean }[];
    complianceTitle: string;
    complianceSubtitle: string;
    certifications: { standard: string; desc: string }[];
    differentiatorTitle: string;
    differentiators: StorageTentFeature[];
    faqTitle: string;
    faqs: StorageTentFAQ[];
    relatedTitle: string;
    related: { href: string; label: string; note: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

// ─── MAIN HUB ─────────────────────────────────────────────────────────────────

export const storageTentHubContent: Record<string, StorageTentHubContent> = {
    en: {
        heroLabel: 'UAE Warehousing Market — AED 11.1 Billion by 2030',
        heroTitle: 'Storage Tent Solutions for Industrial UAE Projects',
        heroBody: 'When UAE warehousing vacancy sits at 3% and Dubai logistics demand has surged 225%, waiting for permanent construction is not an option. Tent Now deploys Civil Defence-approved storage structures within days — not months.',
        ctaPrimary: 'Get a Free Site Assessment',
        ctaSecondary: 'Request a Quote',
        stats: [
            { value: '$3.02B', label: 'UAE Warehousing Market 2024' },
            { value: '9.9%', label: 'Industrial Tent CAGR 2026–2033' },
            { value: '3%', label: 'Dubai Warehousing Vacancy Rate' },
            { value: '50–70%', label: 'Cost Saving vs Permanent Build' },
        ],
        whyTitle: 'Why UAE Businesses Choose Tent Structures Over Permanent Warehouses',
        whyBody: 'A permanent warehouse in Dubai takes 12–18 months to permit, construct, and fit out. A Tent Now clear span structure is operational in under two weeks — at 30 to 50 percent of the capital cost. With UAE industrial rents up 33% year-on-year and availability at historic lows, modular tent warehousing has become a critical infrastructure tool for contractors, logistics operators, and manufacturers.',
        features: [
            { title: 'Operational in Days', body: 'Clear span and frame tent structures deploy in 3–10 days. No concrete foundations, no waiting for structural permits that take months.' },
            { title: 'Civil Defence Compliant', body: 'All frames and fabric covers meet UAE Civil Defence standards. DIN 4102 B1 and NFPA 701 fire-rated materials as standard on every structure.' },
            { title: 'No Permanent Footprint', body: 'Lease your land or build on temporary permits without altering the ground. Structures relocate or reconfigure as your project evolves.' },
            { title: 'Engineered for UAE Climate', body: '850 gsm PVC-coated polyester resists UV degradation, sand abrasion, and Shamal wind loads. Tested to withstand Gulf environmental extremes.' },
            { title: 'Scalable from 100 m² to 15,000 m²', body: 'Modular bays extend in 5-metre increments. Start with what you need today and expand without rebuilding the structure.' },
            { title: '6061-T6 Aluminium Frames', body: 'Aerospace-grade aluminium alloy provides the highest strength-to-weight ratio — stronger than steel per kilogram, corrosion-free in UAE humidity.' },
        ],
        typesLabel: 'Three Proven Structure Types',
        typesTitle: 'Choose the Right Storage Tent for Your Project',
        typesSubtitle: 'Each type is engineered for specific site conditions, load requirements, and operational timelines.',
        tentTypes: [
            { title: 'Clear Span Tents', subtitle: '3 m – 50 m+ widths. Zero interior columns.', body: 'Maximum usable floor area with no obstructing pillars. Ideal for heavy machinery, vehicle parking, aircraft hangars, and large-footprint construction staging.', href: '/services/storage-tents/clear-span-tents', stat: 'Up to 15,000 m² column-free' },
            { title: 'Warehouse & Frame Tents', subtitle: 'No ground staking. Any hard surface.', body: 'Modular frame tents that install on concrete, asphalt, or compacted ground without excavation or foundations. Perfect for logistics hubs, e-commerce fulfilment, and port storage.', href: '/services/storage-tents/warehouse-tents', stat: 'Ballast-anchored — no digging' },
            { title: 'Industrial & Specialised Tents', subtitle: 'Cold storage, oil & gas, labour camps.', body: 'Purpose-engineered for demanding industrial environments: temperature-controlled cold stores, hazardous-goods containment, oil field workshops, and modular labour accommodation.', href: '/services/storage-tents/industrial-tents', stat: 'Operating range –20 °C to +55 °C' },
        ],
        industriesTitle: 'Industries We Serve Across the UAE',
        industriesBody: 'From JAFZA and Khalifa Industrial Zone to remote oil fields and construction super-sites, Tent Now structures power critical operations across all sectors.',
        industries: ['Construction & Contracting', 'Logistics & E-Commerce', 'Oil & Gas', 'Manufacturing', 'Government Projects', 'Events & Exhibitions'],
        faqTitle: 'Storage Tent FAQs',
        faqs: [
            { q: 'How much does storage tent rental cost in the UAE?', a: 'Storage tent rental in the UAE ranges from AED 15 to AED 40 per square metre per month, depending on tent type, size, and included fittings. Purchase prices range from AED 200 to AED 500 per sqm. Tent Now provides free site assessments and transparent quotes with no hidden fees.' },
            { q: 'How quickly can a storage tent be installed on my site?', a: 'Clear span and warehouse-frame tents can typically be operational within 3 to 10 days depending on site conditions and size. This compares to 6–18 months for permanent construction, making temporary tent structures ideal for urgent or seasonal storage demands.' },
            { q: 'Are storage tents Civil Defence approved in the UAE?', a: 'Yes. All Tent Now storage structures comply with UAE Civil Defence regulations and international standards including DIN 4102 B1, NFPA 701, and BS 7837 for fire resistance. Structural frames use 6061-T6 and 6082-T6 aerospace-grade aluminium.' },
            { q: 'What sizes of storage tents are available?', a: 'We offer clear span tents from 3 metres to over 50 metres in width with unlimited length configurations, providing column-free interiors up to 15,000 sqm and beyond. Custom widths and heights are engineered to your project specifications.' },
            { q: 'Can storage tents withstand UAE weather conditions?', a: 'Yes. Our tent covers use 850 gsm PVC-coated polyester fabric engineered for UV resistance, sand, and wind loads common in the UAE and GCC. Structures are engineered for local climatic conditions including Shamal winds.' },
            { q: 'What industries use storage tents in the UAE?', a: 'Storage tents serve construction contractors, logistics and e-commerce operators, oil and gas companies, manufacturing facilities, event infrastructure, and government projects. With Dubai logistics demand up 225% and warehousing vacancy at 3%, temporary structures are increasingly mission-critical.' },
        ],
        ctaTitle: 'Need Storage Space in the UAE — Fast?',
        ctaBody: 'Our team assesses your site, proposes the right structure, and can have you operational in under two weeks. Free consultation, no obligation.',
        ctaButton: 'WhatsApp Us Now',
    },
    ar: {
        heroLabel: 'سوق المستودعات في الإمارات — 11.1 مليار درهم بحلول 2030',
        heroTitle: 'حلول خيام التخزين للمشاريع الصناعية في الإمارات',
        heroBody: 'عندما تبلغ نسبة شغور المستودعات في الإمارات 3% وارتفع الطلب على الخدمات اللوجستية في دبي بنسبة 225%، فإن الانتظار للإنشاء الدائم ليس خياراً مناسباً. تنت ناو تنشر منشآت تخزين معتمدة من الدفاع المدني خلال أيام — لا أشهر.',
        ctaPrimary: 'احصل على تقييم موقع مجاني',
        ctaSecondary: 'طلب عرض أسعار',
        stats: [
            { value: '3.02 مليار$', label: 'سوق المستودعات الإماراتي 2024' },
            { value: '9.9%', label: 'معدل نمو سوق الخيام الصناعية 2026–2033' },
            { value: '3%', label: 'نسبة شغور المستودعات في دبي' },
            { value: '50–70%', label: 'توفير في التكاليف مقارنة بالإنشاء الدائم' },
        ],
        whyTitle: 'لماذا تختار شركات الإمارات خيام التخزين بدلاً من المستودعات الدائمة؟',
        whyBody: 'يستغرق بناء مستودع دائم في دبي 12–18 شهراً للحصول على التصاريح والإنشاء والتجهيز. بينما تكون المنشأة التي تبنيها تنت ناو جاهزة للتشغيل في أقل من أسبوعين — وبتكلفة تتراوح بين 30 و50 بالمئة من التكلفة الرأسمالية. مع ارتفاع إيجارات المناطق الصناعية في الإمارات بنسبة 33% سنوياً وانخفاض المعروض إلى مستويات تاريخية، أصبحت خيام المستودعات المعيارية أداة بنية تحتية حيوية للمقاولين والمشغلين اللوجستيين والمصنّعين.',
        features: [
            { title: 'جاهزة للتشغيل في أيام', body: 'تُركَّب خيام الامتداد الحر وخيام الإطار في 3–10 أيام. لا أساسات خرسانية، ولا انتظار لتصاريح إنشائية تستغرق أشهراً.' },
            { title: 'متوافقة مع الدفاع المدني', body: 'جميع الهياكل والأغطية تستوفي معايير الدفاع المدني الإماراتية. مواد مقاومة للحريق DIN 4102 B1 وNFPA 701 معيارية في كل منشأة.' },
            { title: 'بدون بصمة دائمة في الأرض', body: 'استأجر أرضك أو ابنِ بتصاريح مؤقتة دون تغيير طبيعة الأرض. يمكن نقل المنشآت أو إعادة تهيئتها مع تطور مشروعك.' },
            { title: 'مهندسة لمناخ الإمارات', body: 'أقمشة PVC المطلية بوزن 850 جرام/م² تقاوم التدهور من الأشعة فوق البنفسجية وعوامل تآكل الرمال وأحمال رياح الشمال. مختبرة لتحمل الظروف البيئية الخليجية القاسية.' },
            { title: 'قابلة للتوسع من 100 م² إلى 15,000 م²', body: 'الوحدات المعيارية تمتد بزيادات 5 أمتار. ابدأ بما تحتاجه اليوم وتوسع دون الحاجة لإعادة بناء الهيكل.' },
            { title: 'هياكل ألومنيوم 6061-T6', body: 'سبيكة الألومنيوم المستخدمة في صناعة الفضاء توفر أعلى نسبة قوة إلى وزن — أقوى من الفولاذ لكل كيلوغرام، ومقاومة للتآكل في رطوبة الإمارات.' },
        ],
        typesLabel: 'ثلاثة أنواع من المنشآت المجربة',
        typesTitle: 'اختر خيمة التخزين المناسبة لمشروعك',
        typesSubtitle: 'كل نوع مهندس لظروف موقع محددة ومتطلبات حمل وجداول تشغيل خاصة.',
        tentTypes: [
            { title: 'خيام الامتداد الحر', subtitle: 'عرض 3م حتى أكثر من 50م. بدون أعمدة داخلية.', body: 'أقصى مساحة أرضية قابلة للاستخدام بدون ركائز عائقة. مثالية للآلات الثقيلة وإيقاف المركبات وأنظرة الطائرات ومواقع البناء الكبيرة.', href: '/services/storage-tents/clear-span-tents', stat: 'حتى 15,000 م² خالية من الأعمدة' },
            { title: 'خيام المستودعات والإطارات', subtitle: 'بدون تثبيت أرضي. على أي سطح صلب.', body: 'خيام إطار معيارية تُركَّب على الخرسانة أو الأسفلت أو الأرض المدموكة دون حفريات أو أساسات. مثالية لمحاور الخدمات اللوجستية والتجارة الإلكترونية وتخزين الموانئ.', href: '/services/storage-tents/warehouse-tents', stat: 'تثبيت بالأثقال — بدون حفر' },
            { title: 'الخيام الصناعية المتخصصة', subtitle: 'التخزين المبرد، النفط والغاز، مخيمات العمال.', body: 'مهندسة خصيصاً للبيئات الصناعية الصعبة: مخازن باردة خاضعة للتحكم في درجات الحرارة، احتواء البضائع الخطرة، ورش عمل حقول النفط، وإقامة العمال المعيارية.', href: '/services/storage-tents/industrial-tents', stat: 'نطاق تشغيل من –20°م إلى +55°م' },
        ],
        industriesTitle: 'القطاعات التي نخدمها في جميع أنحاء الإمارات',
        industriesBody: 'من جافزا ومنطقة خليفة الصناعية إلى حقول النفط النائية ومواقع البناء العملاقة، تدعم منشآت تنت ناو العمليات الحيوية عبر جميع القطاعات.',
        industries: ['البناء والمقاولات', 'الخدمات اللوجستية والتجارة الإلكترونية', 'النفط والغاز', 'التصنيع', 'المشاريع الحكومية', 'الفعاليات والمعارض'],
        faqTitle: 'الأسئلة الشائعة حول خيام التخزين',
        faqs: [
            { q: 'كم تكلفة تأجير خيمة تخزين في الإمارات؟', a: 'تتراوح تكلفة تأجير خيام التخزين في الإمارات من 15 إلى 40 درهماً لكل متر مربع شهرياً، وذلك حسب نوع الخيمة وحجمها والتجهيزات المضمنة. تتراوح أسعار الشراء من 200 إلى 500 درهم لكل متر مربع. تقدم تنت ناو تقييمات مواقع مجانية وعروض أسعار شفافة بدون رسوم خفية.' },
            { q: 'كم من الوقت يستغرق تركيب خيمة تخزين في موقعي؟', a: 'يمكن عادةً تشغيل خيام الامتداد الحر وخيام الإطار خلال 3 إلى 10 أيام حسب ظروف الموقع والحجم. يُقارن ذلك بـ 6–18 شهراً للإنشاء الدائم، مما يجعل الخيام المؤقتة مثالية لاحتياجات التخزين العاجلة أو الموسمية.' },
            { q: 'هل خيام التخزين معتمدة من الدفاع المدني في الإمارات؟', a: 'نعم. جميع منشآت التخزين من تنت ناو تمتثل للوائح الدفاع المدني الإماراتية والمعايير الدولية بما فيها DIN 4102 B1 وNFPA 701 وBS 7837 لمقاومة الحريق. هياكل الإطارات من ألومنيوم الدرجة الفضائية 6061-T6 و6082-T6.' },
            { q: 'ما هي أحجام خيام التخزين المتاحة؟', a: 'نوفر خيام امتداد حر بعرض من 3 أمتار إلى أكثر من 50 متراً مع إمكانية تمديد الطول غير محدود، لتوفير مساحات داخلية خالية من الأعمدة تصل إلى 15,000 متر مربع وأكثر. يتم تصميم الأعراض والارتفاعات المخصصة وفق مواصفات مشروعك.' },
            { q: 'هل تتحمل خيام التخزين ظروف الطقس في الإمارات؟', a: 'نعم. تستخدم أغطية خيامنا قماش بوليستر مطلي بـ PVC بوزن 850 جرام/م² مصمم لمقاومة أشعة الأشعة فوق البنفسجية والرمال وأحمال الرياح الشائعة في الإمارات ودول الخليج. الهياكل مهندسة لأحوال المناخ المحلي بما فيها رياح الشمال.' },
            { q: 'ما هي القطاعات التي تستخدم خيام التخزين في الإمارات؟', a: 'تخدم خيام التخزين مقاولي البناء ومشغلي الخدمات اللوجستية والتجارة الإلكترونية وشركات النفط والغاز والمنشآت التصنيعية والبنية التحتية للفعاليات والمشاريع الحكومية. مع ارتفاع الطلب اللوجستي في دبي بنسبة 225% ونسبة شغور المستودعات عند 3%، أصبحت الهياكل المؤقتة بالغة الأهمية.' },
        ],
        ctaTitle: 'تحتاج مساحة تخزين في الإمارات — وبسرعة؟',
        ctaBody: 'يقيّم فريقنا موقعك ويقترح الهيكل المناسب ويمكن أن يجعلك جاهزاً للتشغيل في أقل من أسبوعين. استشارة مجانية، بدون التزامات.',
        ctaButton: 'تواصل معنا عبر واتساب',
    },
};

// ─── CLEAR SPAN ───────────────────────────────────────────────────────────────

export const clearSpanContent: Record<string, ClearSpanContent> = {
    en: {
        heroLabel: 'Clear Span Structures — Zero Interior Columns',
        heroTitle: 'Clear Span Tents for Industrial UAE Projects',
        heroBody: 'Clear span tents provide the maximum usable floor area of any temporary structure type. With no interior columns from wall to wall, every square metre of your AED investment works. Widths from 3 metres to over 50 metres. Operational in days, not months.',
        ctaPrimary: 'Get Free Site Assessment',
        ctaBack: 'All Storage Tent Types',
        whatTitle: 'What Makes a Clear Span Tent Different?',
        whatBody1: 'In a conventional frame tent, interior columns divide the floor into bays. Every column is an obstacle for forklifts, cranes, racking systems, and large equipment. A clear span tent transfers 100% of the roof load to the perimeter frame — leaving the interior completely open.',
        whatBody2: 'The result: a single uninterrupted column-free space that can span 50 metres or more in width and extend to any length in 5-metre bay increments. For a project requiring 10,000 sqm of storage without a single obstruction — this is the structure.',
        whatBody3: 'UAE industrial rents rose 33% in 2024 while vacancy hit 3%. Businesses that cannot wait 12–18 months for a permanent warehouse are turning to clear span tent structures as a reliable, compliant alternative that costs 50–70% less and deploys in under two weeks.',
        useCasesTitle: 'Ideal Applications for Clear Span Tents in the UAE',
        useCasesSubtitle: 'Any operation where a forklift, crane, aircraft, or oversized load must move without obstruction benefits from a clear span structure.',
        useCases: [
            { title: 'Construction Equipment Staging', body: 'Store excavators, cranes, and heavy plant on active construction sites. Clear egress for large machinery with no column obstructions.' },
            { title: 'Vehicle & Fleet Storage', body: 'Protect fleets from UAE sun and sandstorms. Column-free spans allow multiple vehicle lanes and turning radius without compromise.' },
            { title: 'Aircraft Maintenance Hangars', body: 'Temporarily house aircraft during hangar maintenance, base expansions, or emergency shelter needs. Widths exceed 40 metres.' },
            { title: 'Port & Logistics Overflow', body: 'With Jebel Ali and Khalifa Port operating at capacity, clear span tents provide compliant overflow storage adjacent to port operations.' },
            { title: 'Exhibition & Trade Show Infrastructure', body: 'Column-free hall space for exhibitions, product launches, and trade shows. Flooring, lighting, and HVAC integrated to specification.' },
            { title: 'Disaster Recovery & Emergency Storage', body: 'Government and humanitarian operations require rapid deployment of secure, climate-capable storage — clear span structures answer in 72 hours.' },
        ],
        specsTitle: 'Technical Specifications',
        specs: [
            { label: 'Width Range', value: '3 m – 50 m+ (single span)' },
            { label: 'Length', value: 'Unlimited (5 m bay increments)' },
            { label: 'Max Height', value: 'Up to 10 m eave / 14 m ridge' },
            { label: 'Frame Material', value: '6061-T6 / 6082-T6 Aluminium' },
            { label: 'Cover Fabric', value: '850 gsm PVC-Coated Polyester' },
            { label: 'Fire Rating', value: 'DIN 4102 B1 / NFPA 701 / BS 7837' },
            { label: 'Floor Load', value: 'Up to 500 kg/m² (engineered)' },
            { label: 'Deployment', value: '3–14 days (size dependent)' },
        ],
        specsNote: 'All specifications are subject to site survey and engineering review. Custom widths, heights, and load ratings are available on request. Structural calculations and Civil Defence documentation provided with every installation.',
        faqTitle: 'Clear Span Tent FAQs',
        faqs: [
            { q: 'What is a clear span tent?', a: 'A clear span tent is a free-standing aluminium frame structure with no interior support columns. The roof load transfers entirely to the perimeter frame, leaving 100% of the floor area unobstructed. This makes clear span tents the preferred choice for vehicle storage, heavy machinery, aircraft maintenance, and any application where column-free space is critical.' },
            { q: 'How wide can a clear span tent be?', a: 'Tent Now clear span structures are available from 3 metres to over 50 metres in a single span. Beyond 50 metres, multi-span configurations combine modules to create effectively unlimited widths. Standard bay depths extend in 5-metre increments, so total floor area scales to project requirements.' },
            { q: 'How long does clear span tent installation take in the UAE?', a: 'A standard clear span tent of 500–2,000 sqm installs in 3–7 days on a prepared surface. Larger structures of 5,000–15,000 sqm typically complete in 7–14 days. Our crews carry full Civil Defence compliance documentation and coordinate with site managers to minimise disruption.' },
            { q: 'Do clear span tents require concrete foundations?', a: 'No permanent foundations are required. On soft ground, ground anchors or screw-pile footings secure the frame. On hard surfaces (concrete or asphalt), ballast weights achieve the same result without digging. This preserves ground conditions for future use and avoids foundation permit requirements.' },
            { q: 'What is the wind and load rating of your clear span tents?', a: 'Our clear span structures are engineered to UAE climatic loads including Shamal wind speeds. Frame sections are 6061-T6 or 6082-T6 aerospace-grade aluminium, and roof covers are 850 gsm PVC-coated polyester with DIN 4102 B1 fire classification. Engineering calculations and load certificates are provided on request.' },
        ],
        relatedTitle: 'Other Storage Tent Types',
        related: [
            { href: '/services/storage-tents/warehouse-tents', label: 'Warehouse & Frame Tents', note: 'No staking — installs on any hard surface' },
            { href: '/services/storage-tents/industrial-tents', label: 'Industrial & Specialised Tents', note: 'Cold storage, oil & gas, labour accommodation' },
        ],
        ctaTitle: 'Ready to Eliminate Your Column Problem?',
        ctaBody: 'Tell us your required width, length, and intended use. We will engineer a clear span solution and have it on-site within two weeks.',
        ctaButton: 'WhatsApp Us Now',
    },
    ar: {
        heroLabel: 'هياكل الامتداد الحر — بدون أعمدة داخلية',
        heroTitle: 'خيام الامتداد الحر للمشاريع الصناعية في الإمارات',
        heroBody: 'توفر خيام الامتداد الحر أقصى مساحة أرضية قابلة للاستخدام من بين جميع أنواع الهياكل المؤقتة. بدون أعمدة داخلية من جدار إلى جدار، كل متر مربع من استثمارك بالدرهم الإماراتي يعمل بكامل طاقته. أعراض من 3 أمتار إلى أكثر من 50 متراً. جاهزة للتشغيل في أيام، لا أشهر.',
        ctaPrimary: 'احصل على تقييم موقع مجاني',
        ctaBack: 'جميع أنواع خيام التخزين',
        whatTitle: 'ما الذي يميز خيمة الامتداد الحر؟',
        whatBody1: 'في خيمة الإطار التقليدية، تقسم الأعمدة الداخلية المساحة إلى أقسام. كل عمود عائق أمام الرافعات الشوكية والرافعات الأنظمة والمعدات الضخمة. تنقل خيمة الامتداد الحر 100% من حمل السقف إلى الإطار المحيطي — تاركةً المساحة الداخلية مفتوحة تماماً.',
        whatBody2: 'النتيجة: مساحة واحدة غير منقطعة خالية من الأعمدة يمكن أن تمتد بعرض 50 متراً أو أكثر وتمتد لأي طول بزيادات 5 أمتار. لمشروع يحتاج 10,000 متر مربع من التخزين بدون أي عائق — هذا هو الهيكل المناسب.',
        whatBody3: 'ارتفعت إيجارات المناطق الصناعية في الإمارات بنسبة 33% في 2024 فيما وصل الشغور إلى 3%. الشركات التي لا تستطيع الانتظار 12–18 شهراً للحصول على مستودع دائم تتجه إلى هياكل خيام الامتداد الحر كبديل موثوق ومتوافق يكلف 50–70% أقل ويُنشر في أقل من أسبوعين.',
        useCasesTitle: 'التطبيقات المثالية لخيام الامتداد الحر في الإمارات',
        useCasesSubtitle: 'أي عملية يجب أن تتحرك فيها رافعة شوكية أو رافعة أو طائرة أو حمولة ضخمة دون عوائق تستفيد من هيكل الامتداد الحر.',
        useCases: [
            { title: 'تخزين معدات البناء', body: 'تخزين الحفارات والرافعات والمعدات الثقيلة في مواقع البناء النشطة. منفذ واضح للآلات الكبيرة بدون عوائق الأعمدة.' },
            { title: 'تخزين المركبات والأساطيل', body: 'حماية الأساطيل من شمس الإمارات والعواصف الرملية. تتيح الامتدادات الخالية من الأعمدة مسارات متعددة للمركبات ونصف قطر دوران دون تنازلات.' },
            { title: 'أنظرة صيانة الطائرات', body: 'إيواء الطائرات مؤقتاً خلال صيانة الأنظرة أو توسعات القواعد أو حاجات الملجأ الطارئة. الأعراض تتجاوز 40 متراً.' },
            { title: 'تجاوز طاقة الموانئ والخدمات اللوجستية', body: 'مع عمل ميناء جبل علي وميناء خليفة بكامل طاقتهما، توفر خيام الامتداد الحر تخزيناً متوافقاً متاخماً للعمليات الميناءية.' },
            { title: 'بنية تحتية للمعارض وعروض التجزئة', body: 'مساحة قاعة خالية من الأعمدة للمعارض وإطلاق المنتجات وعروض التجزئة. الأرضيات والإضاءة وأنظمة التكيف متكاملة وفق المواصفات.' },
            { title: 'التعافي من الكوارث والتخزين الطارئ', body: 'تتطلب العمليات الحكومية والإنسانية النشر السريع لتخزين آمن وقادر على التحكم في المناخ — تستجيب هياكل الامتداد الحر في 72 ساعة.' },
        ],
        specsTitle: 'المواصفات التقنية',
        specs: [
            { label: 'نطاق العرض', value: '3م – أكثر من 50م (امتداد واحد)' },
            { label: 'الطول', value: 'غير محدود (زيادات 5م)' },
            { label: 'الارتفاع الأقصى', value: 'حتى 10م حافة / 14م قمة' },
            { label: 'مادة الإطار', value: 'ألومنيوم 6061-T6 / 6082-T6' },
            { label: 'قماش الغطاء', value: '850 جرام/م² بوليستر مطلي PVC' },
            { label: 'تصنيف الحريق', value: 'DIN 4102 B1 / NFPA 701 / BS 7837' },
            { label: 'حمل الأرضية', value: 'حتى 500 كجم/م² (مهندس)' },
            { label: 'وقت التركيب', value: '3–14 يوم (حسب الحجم)' },
        ],
        specsNote: 'جميع المواصفات خاضعة لمسح الموقع والمراجعة الهندسية. الأعراض والارتفاعات وتقييمات الحمل المخصصة متاحة عند الطلب. الحسابات الإنشائية ووثائق الدفاع المدني مقدمة مع كل تركيب.',
        faqTitle: 'الأسئلة الشائعة حول خيام الامتداد الحر',
        faqs: [
            { q: 'ما هي خيمة الامتداد الحر؟', a: 'خيمة الامتداد الحر هي هيكل إطار ألومنيوم قائم بذاته بدون أعمدة دعم داخلية. ينتقل حمل السقف كلياً إلى الإطار المحيطي، تاركاً 100% من مساحة الأرض دون عوائق. هذا يجعل خيام الامتداد الحر الخيار المفضل لتخزين المركبات والآلات الثقيلة وصيانة الطائرات وأي تطبيق تكون فيه المساحة الخالية من الأعمدة ضرورية.' },
            { q: 'ما هو أقصى عرض لخيمة الامتداد الحر؟', a: 'هياكل الامتداد الحر من تنت ناو متاحة من 3 أمتار إلى أكثر من 50 متراً في امتداد واحد. وراء الـ 50 متراً، تجمع تكوينات متعددة الامتداد الوحدات لإنشاء أعراض غير محدودة عملياً. أعماق الأجنحة المعيارية تمتد بزيادات 5 أمتار، لذا تتوسع المساحة الإجمالية لتلبية متطلبات المشروع.' },
            { q: 'كم من الوقت يستغرق تركيب خيمة الامتداد الحر في الإمارات؟', a: 'خيمة الامتداد الحر المعيارية من 500–2,000 متر مربع تُركَّب في 3–7 أيام على سطح مجهز. الهياكل الأكبر من 5,000–15,000 متر مربع عادةً تكتمل في 7–14 يوم. طواقم العمل تحمل وثائق امتثال كاملة للدفاع المدني وتنسق مع مديري المواقع لتقليل الإزعاج.' },
            { q: 'هل تتطلب خيام الامتداد الحر أساسات خرسانية؟', a: 'لا توجد حاجة لأساسات دائمة. على الأرض الناعمة، تؤمن مراسي الأرض أو الركائز اللولبية الإطار. على الأسطح الصلبة (الخرسانة أو الأسفلت)، تحقق أوزان الاتزان نفس النتيجة دون حفر. هذا يحافظ على حالة الأرض للاستخدام المستقبلي ويتجنب متطلبات تصاريح الأساسات.' },
            { q: 'ما هو تصنيف الرياح والأحمال لخيام الامتداد الحر لديكم؟', a: 'هياكلنا ذات الامتداد الحر مهندسة لأحمال مناخ الإمارات بما فيها سرعات رياح الشمال. أقسام الإطار من ألومنيوم الدرجة الفضائية 6061-T6 أو 6082-T6، وأغطية السقف من بوليستر مطلي PVC بوزن 850 جرام/م² مع تصنيف حريق DIN 4102 B1. الحسابات الهندسية وشهادات الحمل تُقدم عند الطلب.' },
        ],
        relatedTitle: 'أنواع خيام التخزين الأخرى',
        related: [
            { href: '/services/storage-tents/warehouse-tents', label: 'خيام المستودعات والإطارات', note: 'بدون تثبيت — تُركَّب على أي سطح صلب' },
            { href: '/services/storage-tents/industrial-tents', label: 'الخيام الصناعية المتخصصة', note: 'التخزين المبرد، النفط والغاز، إقامة العمال' },
        ],
        ctaTitle: 'جاهز للتخلص من مشكلة الأعمدة؟',
        ctaBody: 'أخبرنا بالعرض والطول والاستخدام المطلوب. سنهندس حل امتداد حر ونوصله إلى موقعك في غضون أسبوعين.',
        ctaButton: 'تواصل معنا عبر واتساب',
    },
};

// ─── WAREHOUSE ────────────────────────────────────────────────────────────────

export const warehouseContent: Record<string, WarehouseContent> = {
    en: {
        heroLabel: 'Warehouse Frame Tents — No Ground Penetration Required',
        heroTitle: 'Warehouse Tents for UAE Logistics & Storage',
        heroBody: 'Dubai warehousing vacancy is 3%. Industrial rents are up 33%. E-commerce logistics demand has risen 225%. If you need warehouse space now — not in 18 months — a ballast-anchored frame tent on your existing concrete is the answer.',
        ctaPrimary: 'Get Free Site Assessment',
        ctaBack: 'All Storage Tent Types',
        stats: [
            { value: '+225%', label: 'Dubai Logistics Demand Growth' },
            { value: '3%', label: 'UAE Warehousing Vacancy Rate' },
            { value: '+33%', label: 'UAE Industrial Rent Increase' },
            { value: '5–8 days', label: 'Typical Deployment Timeline' },
        ],
        mainTitle: 'Warehouse Space on Your Existing Concrete — Deployed in Days',
        mainBody1: 'A warehouse frame tent installs on any flat, hard-standing surface without digging, drilling, or damaging the ground. Ballast anchoring — concrete blocks, water tanks, or steel plate — provides the required wind resistance without altering the substrate.',
        mainBody2: 'When the structure is demobilised, your hardstand is exactly as you left it. No filled excavations, no remediation costs. For port yards, logistics parks, and industrial plots where tenants change and ground conditions must be preserved, this is operationally critical.',
        mainBody3: 'Modular 5-metre bay increments allow structures to grow with demand. A 1,000 sqm starting footprint can expand to 5,000 sqm within days — using the same frame components — as your storage requirement scales.',
        fitmentsTitle: 'Turnkey Warehouse Fitments Available',
        fitmentsSubtitle: 'Tent Now supplies and integrates all ancillary warehouse infrastructure. Your tent arrives as a complete, operational facility.',
        fitments: [
            'Roller-shutter loading doors (4 m × 4.5 m standard)',
            'LED high-bay lighting (200–400 lux)',
            'Industrial HVAC & evaporative cooling',
            'Personnel access doors with keyed locks',
            'PVC strip curtains for temperature zoning',
            'Polycarbonate daylight ridge panels',
            'Hardwood decking or interlocking floor panels',
            'Loading dock levellers and wheel stops',
            'Electrical distribution boards (3-phase)',
            'CCTV conduit and networking trunking',
        ],
        useCasesTitle: 'Who Uses Warehouse Tents in the UAE?',
        useCases: [
            { title: 'E-Commerce & Fulfilment', body: 'Peak-season overflow for last-mile operators in Dubai South, DIP, and JAFZA. Temporary racking and handling systems integrated to your WMS specifications.' },
            { title: 'Freight Forwarding & 3PL', body: 'Bonded and non-bonded storage annexes adjacent to existing facilities. Civil Defence-compliant structures that meet CCTV and access control requirements.' },
            { title: 'Port & Terminal Overflow', body: 'Covered staging for containers, break-bulk cargo, and project cargo at Jebel Ali, Khalifa Port, and Fujairah Port. Hard-standing deployment only — no soft-ground anchors required.' },
            { title: 'Construction Material Storage', body: 'On-site covered storage for cement, gypsum, MEP materials, and sensitive building products on contractor plots. Relocate between sites as the project progresses.' },
            { title: 'Automotive & Fleet Storage', body: 'Covered vehicle storage for rental fleets, dealer stock, and government fleets. Full-width roller shutter doors enable drive-through access.' },
            { title: 'Manufacturing Overflow', body: 'Buffer warehousing adjacent to production lines in Dubai Industrial City, Abu Dhabi Industrial Area, and Sharjah Industrial Zone. Expand capacity without capital construction approval delays.' },
        ],
        faqTitle: 'Warehouse Tent FAQs',
        faqs: [
            { q: 'What is a warehouse frame tent and how does it differ from a clear span tent?', a: 'A warehouse frame tent uses a modular push-fit or bolt-together frame system that can be erected on any hard, level surface without ground anchors or excavation. Unlike clear span tents that transfer loads to perimeter walls only, frame tents use internal cross-bracing which may include some mid-span supports depending on width. Frame tents are faster and cheaper to deploy on concrete or asphalt, making them ideal for logistics parks and port yards.' },
            { q: 'Can warehouse tents be installed on existing concrete or asphalt?', a: 'Yes — this is one of their primary advantages. Frame tents use ballast weights (concrete blocks, water-filled tanks, or steel plate) to achieve the required anchor force on hard surfaces. No drilling, no ground penetration, and no damage to existing surfaces. Footings can be removed entirely when the structure is demobilised, leaving the surface intact.' },
            { q: 'How quickly can a warehouse tent be set up in the UAE?', a: 'A 1,000 sqm warehouse tent typically deploys in 5–8 working days on a prepared hard-standing surface. Our crews arrive with all materials pre-cut and pre-fabricated — no on-site welding or heavy lifting equipment is required beyond a standard telehandler. We coordinate with your site manager to minimise disruption to ongoing operations.' },
            { q: 'What is the maximum size warehouse tent available?', a: 'Standard frame tent widths range from 6 metres to 30 metres in single-span configurations. Multi-span systems connect modules side by side to deliver 60+ metre-wide integrated warehouse spaces. Length is unlimited — bays extend in 5-metre increments. Tent Now has supplied warehouse tent complexes exceeding 8,000 sqm for logistics operators in Dubai and Abu Dhabi.' },
            { q: 'Are warehouse tents suitable for e-commerce and fulfillment operations?', a: 'Yes. Warehouse tents are routinely used by e-commerce operators to handle seasonal demand spikes and as permanent-equivalent overflow facilities. With Dubai\'s e-commerce logistics demand up 225% and warehousing vacancy at 3%, frame tents provide the speed and flexibility that conventional real estate cannot. Internal fits including racking, lighting, HVAC, and flooring are fully integrated.' },
            { q: 'What ancillary fitments can be added to a warehouse tent?', a: 'Tent Now integrates loading dock levellers, roller-shutter doors (single and double-width), personnel access doors, PVC strip curtains, LED high-bay lighting, industrial HVAC and evaporative cooling units, polycarbonate ridge lighting panels, and hardwood or interlocking floor systems. We deliver a turnkey warehouse solution, not a bare tent.' },
        ],
        relatedTitle: 'Other Storage Tent Types',
        related: [
            { href: '/services/storage-tents/clear-span-tents', label: 'Clear Span Tents', note: 'Zero interior columns — maximum usable floor area' },
            { href: '/services/storage-tents/industrial-tents', label: 'Industrial & Specialised Tents', note: 'Cold storage, oil & gas, labour accommodation' },
        ],
        ctaTitle: 'Need Warehouse Space on Your Existing Concrete?',
        ctaBody: 'Send us your site dimensions and we will quote a turnkey warehouse tent — frame, fabric, doors, lighting, and HVAC — within 24 hours.',
        ctaButton: 'WhatsApp Us Now',
    },
    ar: {
        heroLabel: 'خيام إطار المستودعات — بدون حاجة لاختراق الأرض',
        heroTitle: 'خيام المستودعات للخدمات اللوجستية والتخزين في الإمارات',
        heroBody: 'نسبة شغور المستودعات في دبي 3%. الإيجارات الصناعية ارتفعت بنسبة 33%. الطلب اللوجستي للتجارة الإلكترونية ارتفع بنسبة 225%. إذا كنت تحتاج مساحة مستودع الآن — وليس بعد 18 شهراً — فإن خيمة الإطار المثبتة بالأثقال على خرسانتك الموجودة هي الحل.',
        ctaPrimary: 'احصل على تقييم موقع مجاني',
        ctaBack: 'جميع أنواع خيام التخزين',
        stats: [
            { value: '+225%', label: 'نمو الطلب اللوجستي في دبي' },
            { value: '3%', label: 'نسبة شغور المستودعات في الإمارات' },
            { value: '+33%', label: 'ارتفاع الإيجارات الصناعية في الإمارات' },
            { value: '5–8 أيام', label: 'الجدول الزمني المعتاد للتركيب' },
        ],
        mainTitle: 'مساحة المستودع على خرسانتك الموجودة — يُنشر في أيام',
        mainBody1: 'تُركَّب خيمة إطار المستودع على أي سطح مستوٍ صلب دون حفر أو ثقب أو إتلاف الأرض. التثبيت بالأثقال — كتل خرسانية أو خزانات مياه أو صفائح فولاذية — يوفر مقاومة الرياح المطلوبة دون تغيير طبيعة الأرض.',
        mainBody2: 'عند تفكيك الهيكل، تجد أرضك الصلبة كما تركتها تماماً. لا حفريات مردومة، لا تكاليف معالجة. بالنسبة لساحات الموانئ والمناطق اللوجستية والمناطق الصناعية حيث يتغير المستأجرون ويجب الحفاظ على حالة الأرض، هذا أمر بالغ الأهمية تشغيلياً.',
        mainBody3: 'تتيح زيادات الأجنحة المعيارية بمقدار 5 أمتار نمو الهياكل مع الطلب. يمكن توسيع مساحة بداية 1,000 متر مربع إلى 5,000 متر مربع في غضون أيام — باستخدام نفس مكونات الإطار — مع تطور متطلبات التخزين.',
        fitmentsTitle: 'تجهيزات المستودع الجاهزة للتشغيل',
        fitmentsSubtitle: 'تنت ناو توفر وتدمج جميع البنية التحتية المساعدة للمستودع. تصل خيمتك كمنشأة كاملة وجاهزة للتشغيل.',
        fitments: [
            'أبواب تحميل بالشتر الدوار (4م × 4.5م معياري)',
            'إضاءة LED عالية (200–400 لكس)',
            'تكييف صناعي وتبريد تبخيري',
            'أبواب دخول للأفراد بأقفال مفتاحية',
            'ستائر PVC لتقسيم مناطق درجة الحرارة',
            'ألواح بولي كربونات لإضاءة الضوء النهاري',
            'أرضية خشب صلب أو ألواح أرضية متشابكة',
            'رافعات رصيف التحميل وأوقاف العجلات',
            'لوحات توزيع كهربائية (ثلاثية الأطوار)',
            'مجاري كابلات كاميرات المراقبة والشبكات',
        ],
        useCasesTitle: 'من يستخدم خيام المستودعات في الإمارات؟',
        useCases: [
            { title: 'التجارة الإلكترونية والتنفيذ', body: 'تجاوز طاقة موسم الذروة لمشغلي التوصيل الأخير في دبي الجنوب ومجمع دبي للاستثمار وجافزا. أنظمة رفوف ومعالجة مؤقتة متكاملة وفق مواصفات نظام إدارة المستودعات الخاص بك.' },
            { title: 'شحن البضائع والخدمات اللوجستية', body: 'ملحقات تخزين مرتبطة وغير مرتبطة مجاورة للمنشآت الموجودة. هياكل متوافقة مع الدفاع المدني تستوفي متطلبات كاميرات المراقبة والتحكم في الوصول.' },
            { title: 'تجاوز طاقة الموانئ والمحطات', body: 'تخزين مغطى للحاويات والبضائع السائبة وبضائع المشاريع في ميناء جبل علي وميناء خليفة وميناء الفجيرة. نشر على أسطح صلبة فقط — لا حاجة لمراسي أرض ناعمة.' },
            { title: 'تخزين مواد البناء', body: 'تخزين مغطى في الموقع للأسمنت والجبس ومواد الكهرباء والسباكة والتهوية والمنتجات الحساسة على قطع أراضي المقاولين. إعادة النقل بين المواقع مع تقدم المشروع.' },
            { title: 'تخزين السيارات والأساطيل', body: 'تخزين مغطى للمركبات لأساطيل الإيجار ومخزون الوكالات والأساطيل الحكومية. أبواب شتر دوار بعرض كامل تتيح الدخول والخروج بالقيادة.' },
            { title: 'تجاوز طاقة التصنيع', body: 'تخزين احتياطي مجاور لخطوط الإنتاج في مدينة دبي الصناعية والمنطقة الصناعية بأبوظبي والمنطقة الصناعية بالشارقة. توسيع الطاقة دون تأخيرات موافقة الإنشاء الرأسمالية.' },
        ],
        faqTitle: 'الأسئلة الشائعة حول خيام المستودعات',
        faqs: [
            { q: 'ما هي خيمة إطار المستودع وكيف تختلف عن خيمة الامتداد الحر؟', a: 'تستخدم خيمة إطار المستودع نظام إطار معياري قابل للتركيب بالدفع أو الربط يمكن نصبه على أي سطح صلب ومستوٍ دون مراسي أرض أو حفريات. على عكس خيام الامتداد الحر التي تنقل الأحمال إلى الجدران المحيطية فقط، تستخدم خيام الإطار تعزيزاً متقاطعاً داخلياً قد يشمل بعض الدعامات على الامتداد حسب العرض. خيام الإطار أسرع وأقل تكلفة في النشر على الخرسانة أو الأسفلت، مما يجعلها مثالية للمناطق اللوجستية وساحات الموانئ.' },
            { q: 'هل يمكن تركيب خيام المستودعات على خرسانة أو أسفلت موجود؟', a: 'نعم — هذه إحدى مزاياها الرئيسية. تستخدم خيام الإطار أوزان اتزان (كتل خرسانية أو خزانات مملوءة بالماء أو صفائح فولاذية) لتحقيق قوة الارتساء المطلوبة على الأسطح الصلبة. لا حفر، لا اختراق للأرض، ولا ضرر بالأسطح الموجودة. يمكن إزالة القواعد كلياً عند تفكيك الهيكل، تاركةً السطح سليماً.' },
            { q: 'ما مدى سرعة إعداد خيمة المستودع في الإمارات؟', a: 'عادةً تُنشر خيمة مستودع 1,000 متر مربع في 5–8 أيام عمل على سطح صلب مجهز. تصل طواقم عملنا بجميع المواد المقطوعة والمصنوعة مسبقاً — لا لحام في الموقع ولا معدات رفع ثقيلة مطلوبة سوى رافعة تلسكوبية معيارية. ننسق مع مدير موقعك لتقليل الإزعاج للعمليات الجارية.' },
            { q: 'ما هو الحجم الأقصى لخيمة المستودع المتاحة؟', a: 'تتراوح أعراض خيام الإطار المعيارية من 6 أمتار إلى 30 متراً في تكوينات امتداد واحد. تربط الأنظمة متعددة الامتداد الوحدات جنباً إلى جنب لتوفير مساحات مستودعات متكاملة بعرض 60 متراً وأكثر. الطول غير محدود — الأجنحة تمتد بزيادات 5 أمتار. تنت ناو قدمت مجمعات خيام مستودعات تتجاوز 8,000 متر مربع لمشغلي خدمات لوجستية في دبي وأبوظبي.' },
            { q: 'هل خيام المستودعات مناسبة لعمليات التجارة الإلكترونية والتنفيذ؟', a: 'نعم. تُستخدم خيام المستودعات بشكل روتيني من قبل مشغلي التجارة الإلكترونية للتعامل مع ارتفاعات الطلب الموسمية ومنشآت تجاوز الطاقة المعادلة للدائمة. مع ارتفاع الطلب اللوجستي للتجارة الإلكترونية في دبي بنسبة 225% وشغور المستودعات عند 3%، توفر خيام الإطار السرعة والمرونة التي لا تستطيع العقارات التقليدية توفيرها. التجهيزات الداخلية بما فيها الرفوف والإضاءة والتكييف والأرضيات متكاملة بالكامل.' },
            { q: 'ما هي التجهيزات الإضافية التي يمكن إضافتها لخيمة المستودع؟', a: 'تنت ناو تدمج رافعات رصيف التحميل وأبواب الشتر الدوار (أحادية ومزدوجة العرض) وأبواب دخول الأفراد وستائر PVC وإضاءة LED عالية وأنظمة تكييف صناعي وتبريد تبخيري وألواح إضاءة بولي كربونات وأنظمة أرضية خشب صلب أو متشابكة. نقدم حل مستودع جاهز للتشغيل، وليس مجرد خيمة فارغة.' },
        ],
        relatedTitle: 'أنواع خيام التخزين الأخرى',
        related: [
            { href: '/services/storage-tents/clear-span-tents', label: 'خيام الامتداد الحر', note: 'بدون أعمدة داخلية — أقصى مساحة أرضية قابلة للاستخدام' },
            { href: '/services/storage-tents/industrial-tents', label: 'الخيام الصناعية المتخصصة', note: 'التخزين المبرد، النفط والغاز، إقامة العمال' },
        ],
        ctaTitle: 'تحتاج مساحة مستودع على خرسانتك الموجودة؟',
        ctaBody: 'أرسل لنا أبعاد موقعك وسنقدم عرض أسعار لخيمة مستودع جاهزة للتشغيل — إطار، قماش، أبواب، إضاءة، وتكييف — في غضون 24 ساعة.',
        ctaButton: 'تواصل معنا عبر واتساب',
    },
};

// ─── INDUSTRIAL ───────────────────────────────────────────────────────────────

export const industrialContent: Record<string, IndustrialContent> = {
    en: {
        heroLabel: 'Industrial & Specialised Tent Structures UAE',
        heroTitle: 'Industrial Tents for Demanding UAE Environments',
        heroBody: 'When the environment is extreme — sub-zero cold chains, oil field hazardous zones, or remote desert worksites — standard tent structures are not sufficient. Tent Now engineers industrial-specification structures for the UAE\'s most demanding project conditions.',
        ctaPrimary: 'Discuss Your Project',
        ctaBack: 'All Storage Tent Types',
        stats: [
            { value: '–20°C', label: 'Cold Storage Minimum Temp' },
            { value: '+55°C', label: 'Max Operating Ambient Temp' },
            { value: '9.9%', label: 'Industrial Tent CAGR 2026–2033' },
            { value: '72 hrs', label: 'Emergency Deployment Minimum' },
        ],
        whatTitle: 'Engineered for Conditions Where Standard Tents Fail',
        whatBody1: 'An industrial tent is not a larger version of an event tent. It is a purpose-engineered structure with specifications that match the most demanding operational environments the UAE presents.',
        whatBody2: 'A cold storage tent must maintain –20°C when the ambient temperature outside reaches +48°C. An oil field workshop must use non-sparking materials in a classified hazardous area. A labour accommodation camp must meet UAE Ministry of Human Resources standards for worker welfare.',
        whatBody3: 'Each of these requirements demands a different engineering specification. Tent Now has the design capability and the supply chain to deliver structures that meet UAE regulatory requirements across all industrial categories.',
        applicationsTitle: 'Industrial Tent Applications',
        applicationsSubtitle: 'Each application category requires distinct engineering, materials, and compliance documentation. Tent Now designs to specification — not from a catalogue.',
        applications: [
            { title: 'Cold Storage & Refrigerated Tents', body: 'Insulated tent modules with integrated refrigeration systems maintain –20°C to +10°C in UAE ambient conditions. Used by food distributors, pharmaceutical logistics operators, and FMCG supply chains requiring temporary cold chain infrastructure.', badge: '–20°C to +10°C', alert: false },
            { title: 'Oil & Gas Field Workshops', body: 'Anti-static frames and ATEX-rated electrical systems for hazardous area deployment. Sandstorm-resistant fabric rated for Shamal conditions. Accommodates heavy workshop equipment, pipe storage, and tool rooms on remote UAE and GCC oil field sites.', badge: 'ATEX-ready', alert: true },
            { title: 'Hazardous Goods Containment', body: 'Impermeable flooring systems with bunded perimeters contain chemical spills to regulatory standards. Used for temporary chemical storage, hazardous waste containment, and regulated substance holding on construction and industrial sites.', badge: 'Spill-contained', alert: true },
            { title: 'Labour Accommodation Camps', body: 'Modular sleeping bays, ablution blocks, dining halls, and site offices combine to form compliant worker accommodation camps for infrastructure and construction projects. Meets UAE Ministry of Human Resources accommodation standards.', badge: 'MoHRE compliant', alert: false },
        ],
        complianceTitle: 'Compliance & Certification',
        complianceSubtitle: 'Industrial projects in the UAE require documented compliance evidence. Tent Now provides the complete engineering and certification package.',
        certifications: [
            { standard: 'DIN 4102 B1', desc: 'Fire behaviour — building materials Class B1 (flame retardant)' },
            { standard: 'NFPA 701', desc: 'Standard methods of fire tests for flame propagation of textiles' },
            { standard: 'BS 7837', desc: 'British Standard for fire performance of fabric used in temporary structures' },
            { standard: 'UAE Civil Defence', desc: 'Full CD documentation package — stamps and inspection coordination' },
            { standard: 'ATEX Directive', desc: 'Equipment for explosive atmospheres (oil & gas hazardous area classifications)' },
            { standard: 'MoHRE Standards', desc: 'UAE Ministry of Human Resources accommodation standards for labour camps' },
        ],
        differentiatorTitle: 'Why Choose Tent Now for Industrial Structures?',
        differentiators: [
            { title: 'Engineering-First Approach', body: 'Every industrial structure begins with a site survey and engineering brief. Load calculations, wind analysis, and thermal modelling are completed before any frame is cut.' },
            { title: 'In-House Civil Defence Coordination', body: 'We manage the Civil Defence documentation, permit applications, and inspection scheduling on your behalf — reducing your administrative overhead significantly.' },
            { title: 'GCC-Wide Supply Chain', body: 'With 30 years of operations across the UAE and GCC, our supply chain for insulated panels, refrigeration units, ATEX electrical components, and specialist fabrics is established and reliable.' },
        ],
        faqTitle: 'Industrial Tent FAQs',
        faqs: [
            { q: 'What types of industrial tent are available for UAE projects?', a: 'Tent Now supplies four main categories of industrial tent structure: (1) Cold storage tents with integrated refrigeration maintaining –20°C to +10°C; (2) Oil & gas field tents engineered for hazardous area classification and sandstorm resistance; (3) Hazardous goods containment tents with impermeable floors and ATEX-rated electrical systems; and (4) Modular labour accommodation tent complexes for construction and infrastructure projects.' },
            { q: 'Can industrial tents be used in oil and gas environments in the UAE?', a: 'Yes. Our oil and gas field structures use non-sparking aluminium frames, ATEX-rated electrical components where required, and anti-static fabric liners. Structures are designed for remote site deployment using standard flatbed transport — no cranes required for most frame assemblies. We have supplied field workshops, pipe storage covers, and contractor accommodation for upstream and midstream operations in the UAE and wider GCC.' },
            { q: 'What temperature range can a cold storage tent maintain?', a: 'Cold storage tent modules maintain operating temperatures from –20°C (deep freeze) to +10°C (chilled), depending on the refrigeration specification. Insulated PVC panel walls with a U-value below 0.25 W/m²K are standard. In the UAE ambient temperature of up to +48°C, our systems are engineered with sufficient cooling capacity reserve to hold setpoint without risk of failure.' },
            { q: 'Are industrial tents Civil Defence approved in the UAE?', a: 'All Tent Now industrial structures meet UAE Civil Defence requirements. Fabric covers carry DIN 4102 B1, NFPA 701, and BS 7837 fire classifications. Structural engineering calculations are stamped by UAE-registered engineers. Full Civil Defence documentation packages are provided with every installation — essential for project-site and free-zone permit compliance.' },
            { q: 'How long does it take to set up a labour accommodation tent camp?', a: 'A modular labour accommodation tent complex for 100–500 workers typically installs in 10–21 days, including sleeping bays, ablution blocks, dining facilities, and site office modules. Pre-fabricated insulated panels, steel-frame substructures, and flat-pack MEP modules reduce on-site labour to a minimum. Tent Now coordinates all ancillary services including electrical connection, water supply, and waste management.' },
            { q: 'What is the cost of industrial tent rental in the UAE?', a: 'Industrial tent rental pricing depends on the specification required: standard insulated industrial tents range from AED 25 to AED 55 per sqm per month. Cold storage modules are priced on refrigeration capacity and temperature setpoint. Oil & gas field structures carry an additional premium for ATEX and anti-static specifications. All quotes include a free site visit and engineering consultation.' },
        ],
        relatedTitle: 'Other Storage Tent Types',
        related: [
            { href: '/services/storage-tents/clear-span-tents', label: 'Clear Span Tents', note: 'Zero interior columns — maximum usable floor area' },
            { href: '/services/storage-tents/warehouse-tents', label: 'Warehouse & Frame Tents', note: 'No staking — installs on any hard surface' },
        ],
        ctaTitle: 'Tell Us Your Industrial Requirement',
        ctaBody: 'Cold chain, oil field, hazardous containment, or labour camp — our engineering team scopes the right solution and provides a compliant, costed proposal within 48 hours.',
        ctaButton: 'WhatsApp Us Now',
    },
    ar: {
        heroLabel: 'الخيام الصناعية والمتخصصة في الإمارات',
        heroTitle: 'خيام صناعية للبيئات الإماراتية الصعبة',
        heroBody: 'عندما تكون البيئة قاسية — سلاسل تبريد تحت الصفر، مناطق خطر في حقول النفط، أو مواقع عمل صحراوية نائية — لا تكفي هياكل الخيام المعيارية. تنت ناو تهندس هياكل بمواصفات صناعية لأصعب ظروف المشاريع في الإمارات.',
        ctaPrimary: 'ناقش مشروعك معنا',
        ctaBack: 'جميع أنواع خيام التخزين',
        stats: [
            { value: '–20°م', label: 'أدنى درجة حرارة للتخزين المبرد' },
            { value: '+55°م', label: 'أقصى درجة حرارة بيئية للتشغيل' },
            { value: '9.9%', label: 'معدل نمو سوق الخيام الصناعية 2026–2033' },
            { value: '72 ساعة', label: 'أدنى وقت للنشر الطارئ' },
        ],
        whatTitle: 'مهندسة للظروف التي تفشل فيها الخيام المعيارية',
        whatBody1: 'الخيمة الصناعية ليست نسخة أكبر من خيمة الفعاليات. إنها هيكل مهندس خصيصاً بمواصفات تتطابق مع أصعب البيئات التشغيلية في الإمارات.',
        whatBody2: 'يجب أن تحافظ خيمة التخزين المبرد على درجة –20°م عندما تصل درجة الحرارة الخارجية إلى +48°م. يجب أن تستخدم ورشة عمل حقل النفط مواد غير مشعة للشرارة في منطقة خطر مصنفة. يجب أن تستوفي مخيمات إقامة العمال معايير وزارة الموارد البشرية الإماراتية لرعاية العمال.',
        whatBody3: 'كل هذه المتطلبات تستدعي مواصفات هندسية مختلفة. تنت ناو تمتلك قدرة التصميم وسلسلة التوريد لتوصيل هياكل تستوفي المتطلبات التنظيمية الإماراتية عبر جميع الفئات الصناعية.',
        applicationsTitle: 'تطبيقات الخيام الصناعية',
        applicationsSubtitle: 'كل فئة تطبيق تتطلب هندسة ومواد ووثائق امتثال مختلفة. تنت ناو تصمم وفق المواصفات — وليس من كتالوج.',
        applications: [
            { title: 'خيام التخزين المبرد والتبريد', body: 'وحدات خيام معزولة بأنظمة تبريد متكاملة تحافظ على درجات حرارة من –20°م إلى +10°م في الظروف المناخية الإماراتية. تُستخدم من قبل موزعي الأغذية ومشغلي الخدمات اللوجستية الصيدلانية وسلاسل التوريد السلعية التي تحتاج بنية تحتية مؤقتة للسلسلة الباردة.', badge: '–20°م إلى +10°م', alert: false },
            { title: 'ورش عمل حقول النفط والغاز', body: 'إطارات مضادة للشحنات الكهربائية وأنظمة كهربائية مصنفة ATEX للنشر في مناطق الخطر. أقمشة مقاومة للعواصف الرملية مصنفة لظروف رياح الشمال. تستوعب معدات الورشة الثقيلة وتخزين الأنابيب وغرف الأدوات في مواقع حقول النفط النائية في الإمارات ودول الخليج.', badge: 'ATEX-جاهز', alert: true },
            { title: 'احتواء البضائع الخطرة', body: 'أنظمة أرضيات غير نفاذة بحواجز محيطية تحتوي التسربات الكيميائية وفق المعايير التنظيمية. تُستخدم للتخزين الكيميائي المؤقت واحتواء النفايات الخطرة وحفظ المواد الخاضعة للرقابة في مواقع البناء والصناعة.', badge: 'تحتوي التسربات', alert: true },
            { title: 'مخيمات إقامة العمال', body: 'تجمع وحدات النوم وكتل الغسيل وصالات الطعام ومكاتب الموقع المعيارية لتشكيل مخيمات إقامة عمال متوافقة لمشاريع البنية التحتية والبناء. تستوفي معايير وزارة الموارد البشرية الإماراتية لإقامة العمال.', badge: 'متوافق مع وزارة الموارد البشرية', alert: false },
        ],
        complianceTitle: 'الامتثال والشهادات',
        complianceSubtitle: 'المشاريع الصناعية في الإمارات تتطلب دليل امتثال موثقاً. تنت ناو توفر حزمة الهندسة والشهادات الكاملة.',
        certifications: [
            { standard: 'DIN 4102 B1', desc: 'سلوك الحريق — مواد البناء الفئة B1 (مقاومة للاشتعال)' },
            { standard: 'NFPA 701', desc: 'طرق قياسية لاختبارات الحريق لانتشار اللهب في المنسوجات' },
            { standard: 'BS 7837', desc: 'المعيار البريطاني لأداء الحريق للأقمشة المستخدمة في الهياكل المؤقتة' },
            { standard: 'الدفاع المدني الإماراتي', desc: 'حزمة وثائق الدفاع المدني الكاملة — الأختام وتنسيق التفتيش' },
            { standard: 'توجيه ATEX', desc: 'معدات الأجواء المتفجرة (تصنيفات مناطق الخطر في النفط والغاز)' },
            { standard: 'معايير وزارة الموارد البشرية', desc: 'معايير وزارة الموارد البشرية الإماراتية لإقامة العمال في المخيمات' },
        ],
        differentiatorTitle: 'لماذا تختار تنت ناو للهياكل الصناعية؟',
        differentiators: [
            { title: 'نهج هندسي أولاً', body: 'كل هيكل صناعي يبدأ بمسح الموقع وملف هندسي. حسابات الحمل وتحليل الرياح والنمذجة الحرارية تكتمل قبل قطع أي إطار.' },
            { title: 'تنسيق الدفاع المدني داخلياً', body: 'ندير وثائق الدفاع المدني وطلبات التصاريح وجدولة التفتيش نيابةً عنك — مما يقلل من عبءك الإداري بشكل كبير.' },
            { title: 'سلسلة توريد على مستوى الخليج', body: 'مع 30 عاماً من العمليات في الإمارات ودول الخليج، سلسلة توريدنا للألواح المعزولة ووحدات التبريد والمكونات الكهربائية ATEX والأقمشة المتخصصة راسخة وموثوقة.' },
        ],
        faqTitle: 'الأسئلة الشائعة حول الخيام الصناعية',
        faqs: [
            { q: 'ما هي أنواع الخيام الصناعية المتاحة للمشاريع في الإمارات؟', a: 'تنت ناو توفر أربعة فئات رئيسية من الهياكل الصناعية: (1) خيام التخزين المبرد بتبريد متكامل يحافظ على درجات –20°م إلى +10°م؛ (2) خيام حقول النفط والغاز المهندسة لتصنيف مناطق الخطر ومقاومة العواصف الرملية؛ (3) خيام احتواء البضائع الخطرة بأرضيات غير نفاذة وأنظمة كهربائية مصنفة ATEX؛ و(4) مجمعات خيام إقامة العمال المعيارية لمشاريع البناء والبنية التحتية.' },
            { q: 'هل يمكن استخدام الخيام الصناعية في بيئات النفط والغاز في الإمارات؟', a: 'نعم. هياكل حقول النفط والغاز لدينا تستخدم إطارات ألومنيوم غير مشعة للشرارة ومكونات كهربائية مصنفة ATEX حيثما دعت الحاجة وبطانات قماشية مضادة للكهرباء الساكنة. الهياكل مصممة للنشر في المواقع النائية باستخدام شاحنات مسطحة معيارية — معظم تجميعات الإطارات لا تحتاج رافعات. قدمنا ورش عمل ميدانية وأغطية تخزين أنابيب وإقامة مقاولين للعمليات الأولية والوسيطة في الإمارات وأوسع الخليج.' },
            { q: 'ما نطاق درجة الحرارة التي تحافظ عليها خيمة التخزين المبرد؟', a: 'وحدات خيام التخزين المبرد تحافظ على درجات تشغيل من –20°م (تجميد عميق) إلى +10°م (مبرد)، حسب مواصفات التبريد. جدران الألواح البلاستيكية المعزولة بقيمة U أدنى من 0.25 واط/م²ك معيارية. في درجة الحرارة المحيطة في الإمارات التي تصل إلى +48°م، أنظمتنا مهندسة بسعة تبريد احتياطية كافية للحفاظ على نقطة الضبط دون خطر الفشل.' },
            { q: 'هل الخيام الصناعية معتمدة من الدفاع المدني في الإمارات؟', a: 'جميع الهياكل الصناعية من تنت ناو تستوفي متطلبات الدفاع المدني الإماراتي. أغطية الأقمشة تحمل تصنيفات حريق DIN 4102 B1 وNFPA 701 وBS 7837. الحسابات الهندسية الإنشائية مختومة من مهندسين مسجلين في الإمارات. حزم وثائق الدفاع المدني الكاملة مقدمة مع كل تركيب — ضرورية لامتثال تصاريح مواقع المشاريع والمناطق الحرة.' },
            { q: 'كم من الوقت يستغرق إعداد مخيم خيام إقامة العمال؟', a: 'مجمع خيام إقامة عمال معياري لـ 100–500 عامل عادةً يُركَّب في 10–21 يوم، متضمناً وحدات النوم وكتل الغسيل ومرافق الطعام ووحدات مكتب الموقع. الألواح المعزولة المصنوعة مسبقاً والهياكل الفرعية الفولاذية ووحدات الكهرباء والسباكة والتهوية المسطحة الحزمة تقلل عمالة الموقع إلى الحد الأدنى. تنت ناو تنسق جميع الخدمات المساعدة بما فيها الوصل الكهربائي وإمدادات المياه وإدارة النفايات.' },
            { q: 'ما هي تكلفة تأجير الخيام الصناعية في الإمارات؟', a: 'تعتمد أسعار تأجير الخيام الصناعية على المواصفات المطلوبة: الخيام الصناعية المعزولة المعيارية تتراوح من 25 إلى 55 درهماً لكل متر مربع شهرياً. وحدات التخزين المبرد تُسعَّر حسب سعة التبريد ونقطة ضبط درجة الحرارة. هياكل حقول النفط والغاز تحمل علاوة إضافية لمواصفات ATEX ومكافحة الكهرباء الساكنة. جميع عروض الأسعار تشمل زيارة موقع مجانية واستشارة هندسية.' },
        ],
        relatedTitle: 'أنواع خيام التخزين الأخرى',
        related: [
            { href: '/services/storage-tents/clear-span-tents', label: 'خيام الامتداد الحر', note: 'بدون أعمدة داخلية — أقصى مساحة أرضية قابلة للاستخدام' },
            { href: '/services/storage-tents/warehouse-tents', label: 'خيام المستودعات والإطارات', note: 'بدون تثبيت — تُركَّب على أي سطح صلب' },
        ],
        ctaTitle: 'أخبرنا بمتطلبك الصناعي',
        ctaBody: 'سلسلة تبريد، حقل نفط، احتواء خطر، أو مخيم عمال — فريقنا الهندسي يحدد الحل المناسب ويقدم عرضاً متوافقاً ومحدد التكلفة في غضون 48 ساعة.',
        ctaButton: 'تواصل معنا عبر واتساب',
    },
};
