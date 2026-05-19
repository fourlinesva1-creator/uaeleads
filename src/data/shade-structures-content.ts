export interface ShadeStructuresFAQ {
    q: string;
    a: string;
}

export interface ShadeStructuresFeature {
    title: string;
    body: string;
}

export interface ShadeStructuresStat {
    value: string;
    label: string;
}

export interface ShadeStructuresApplication {
    title: string;
    body: string;
    icon: string;
}

export interface ShadeStructuresMaterial {
    title: string;
    body: string;
}

export interface ShadeStructuresHubContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: ShadeStructuresStat[];
    applicationsTitle: string;
    applications: ShadeStructuresApplication[];
    materialsTitle: string;
    materials: ShadeStructuresMaterial[];
    whyTitle: string;
    whyBody: string;
    features: ShadeStructuresFeature[];
    faqTitle: string;
    faqs: ShadeStructuresFAQ[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

export const shadeStructuresHubContent: Record<string, ShadeStructuresHubContent> = {
    en: {
        heroLabel: 'UAE Outdoor Shade Specialists',
        heroTitle: 'Shade Structures UAE',
        heroBody:
            "Tent Now designs, supplies, and installs outdoor shade structures across all UAE emirates. Car park canopies, pedestrian walkway covers, children's play area shades, pool shades, sports court shading, school compounds, mosque courtyards, and commercial outdoor areas — all engineered for UAE heat, Civil Defence compliant, municipality permits included.",
        ctaPrimary: 'WhatsApp for a Free Quote',
        ctaSecondary: 'Request a Site Survey',
        stats: [
            { value: '50°C+', label: 'UAE Summer Heat Blocked' },
            { value: '95%', label: 'UV Protection (HDPE Fabric)' },
            { value: '7', label: 'Emirates Covered' },
            { value: '15 yr', label: 'Fabric Warranty Available' },
        ],
        applicationsTitle: 'Shade Structures for Every Application',
        applications: [
            {
                title: 'Car Park & Vehicle Shading',
                body: 'Cantilever, flat-frame, and polycarbonate canopies for residential driveways, villa compounds, commercial car parks, and multi-storey facilities. Sizes from a single bay to 500+ spaces.',
                icon: '🚗',
            },
            {
                title: 'Pedestrian Walkway Shades',
                body: 'Covered walkway structures connecting buildings, gates, car parks, and amenity areas. Common in schools, hospitals, shopping centres, and housing developments. Modular spans up to 50 m unobstructed width.',
                icon: '🚶',
            },
            {
                title: "Children's Play Area Shades",
                body: 'Bright HDPE shade sails and frame structures over playground equipment, sand pits, and outdoor learning areas. Provides 95% UV protection for children at peak UAE heat hours.',
                icon: '🛝',
            },
            {
                title: 'Swimming Pool & Leisure Shades',
                body: 'Tensile sail shades and frame canopies over pools, pool decks, and leisure areas. Reduces water temperature, minimises chemical evaporation, and provides comfort for bathers.',
                icon: '🏊',
            },
            {
                title: 'Sports Court Shading',
                body: 'Shade structures over basketball, tennis, football, and padel courts. Purpose-engineered clear spans allow full-court coverage without obstructing play. UV fabric plus optional translucent options for light sport.',
                icon: '⚽',
            },
            {
                title: 'School & Educational Shades',
                body: 'Shade solutions for assembly areas, courtyards, canteen zones, waiting areas, and outdoor classrooms. Designed to Ministry of Education specifications. Covers entire school compound if required.',
                icon: '🏫',
            },
            {
                title: 'Mosque & Prayer Area Shades',
                body: 'Shade canopies for mosque courtyards, ablution areas, overflow prayer areas, and Eid prayer grounds. Respectful aesthetics, durable materials, permit-compliant.',
                icon: '🕌',
            },
            {
                title: 'Commercial & F&B Outdoor Shades',
                body: 'Outdoor seating shades for restaurants, cafés, hotels, retail outlets, and markets. Branded colour options, integrated lighting, and heating/misting compatibility.',
                icon: '☕',
            },
        ],
        materialsTitle: 'Shade Materials & Fabrics',
        materials: [
            {
                title: 'HDPE Shade Cloth (95% UV Block)',
                body: 'Breathable, UV-stabilised woven fabric. 8–12 year service life. The most cost-effective choice for playgrounds, car parks, walkways, and school compounds. 30+ colour options.',
            },
            {
                title: 'PVC Coated Polyester',
                body: 'Waterproof, heavy-duty. Ideal where full rain protection is needed alongside shade. Used for commercial outdoor seating, market shading, and covered walkways.',
            },
            {
                title: 'Polycarbonate Panels',
                body: 'Rigid, weatherproof, allows diffused light through. Premium choice for car parks, pool areas, and leisure facilities requiring full enclosure.',
            },
        ],
        whyTitle: 'Why Choose Tent Now?',
        whyBody:
            'Tent Now manages the full shade project lifecycle — free site survey, AutoCAD layout design, municipality permit applications, Civil Defence compliance, in-house fabrication, installation, and post-install support. We have installed shade structures for schools, hotels, mosques, government facilities, and private villas across all seven UAE emirates.',
        features: [
            {
                title: 'Municipality & Civil Defence Permits Included',
                body: 'DM, ADM, SEDD, and all 7 emirate authorities handled in-house. No paperwork burden on the client.',
            },
            {
                title: 'Engineered for UAE Wind & Heat',
                body: 'Structures designed to 45 m/s wind load standard. UV-stabilised materials rated for 60°C+ ambient temperatures.',
            },
            {
                title: 'Free Site Survey & AutoCAD Plan',
                body: 'Every enquiry includes a site visit, measurements, and a full layout drawing with the quote.',
            },
            {
                title: 'All Applications & Sectors',
                body: 'Residential, commercial, industrial, educational, hospitality, government, and religious applications covered.',
            },
            {
                title: 'Custom Colours & Branding',
                body: 'Shade cloth in 30+ standard colours, custom RAL, and printed branding for commercial clients.',
            },
            {
                title: 'In-House Fabrication & Installation',
                body: 'No subcontracting. Tent Now crews handle design, fabrication, and site installation directly.',
            },
        ],
        faqTitle: 'Shade Structures FAQ',
        faqs: [
            {
                q: 'What types of shade structures are available in UAE?',
                a: 'Tent Now installs cantilever car park shades, flat-frame shades, tensile sail shades, polycarbonate canopies, pedestrian walkway covers, play area shades, pool deck shades, sports court shading, school compound shades, and mosque courtyard canopies. All types are available across all seven UAE emirates.',
            },
            {
                q: 'Do shade structures in UAE require municipality permits?',
                a: 'Yes. Permanent shade structures require permits from Dubai Municipality, Abu Dhabi DM, Sharjah SEDD, or equivalent authority in each emirate. Tent Now manages all permit applications as part of the project — no paperwork burden on the client.',
            },
            {
                q: 'How much does a shade structure cost in UAE?',
                a: 'Cost varies widely by type, size, and material. A single-bay car park canopy starts from AED 800–1,500. A children\'s play area shade sail starts from AED 3,000. Large school compound or sports court shading can range from AED 50,000–300,000+. Contact Tent Now for a free site survey and itemised quote.',
            },
            {
                q: 'How long does installation take?',
                a: 'Small shade structures (1–4 bays, single sail) take 1–2 days. Medium projects (school compound, 20–50 bay car park) take 3–7 days. Large-scale installations are programmed with a detailed construction schedule.',
            },
            {
                q: "What is the lifespan of a shade structure in UAE's climate?",
                a: 'HDPE shade cloth: 8–12 years with UV stabilisation. Steel frames (hot-dip galvanised): 20–25 years. Polycarbonate panels: 10–15 years with UV-protected coating. Annual inspection after each summer is recommended.',
            },
            {
                q: 'Can you shade a children\'s play area or school compound?',
                a: 'Yes — this is one of our most common applications. We install HDPE shade sails and frame canopies over playground equipment, sandpits, outdoor learning areas, and full school courtyards. Shade cloth provides 95% UV protection for children during peak heat hours.',
            },
        ],
        ctaTitle: 'Get a Free Shade Structure Survey',
        ctaBody:
            "Tell us your application, location, and approximate area. We'll visit the site, produce a layout plan, and deliver a full itemised quote — no obligation.",
        ctaButton: 'WhatsApp for a Free Quote',
    },

    ar: {
        heroLabel: 'متخصصون في مظلات خارجية بالإمارات',
        heroTitle: 'مظلات الإمارات',
        heroBody:
            'تنت ناو تصمم وتورد وتركب مظلات خارجية في جميع أنحاء الإمارات. مظلات مواقف السيارات والممشيات وأماكن اللعب والمسابح والملاعب الرياضية والمدارس وساحات المساجد والمناطق التجارية المفتوحة — جميعها مصممة هندسياً لمواجهة حرارة الإمارات، متوافقة مع الدفاع المدني، والتصاريح البلدية مشمولة.',
        ctaPrimary: 'واتساب للحصول على عرض مجاني',
        ctaSecondary: 'طلب مسح موقعي',
        stats: [
            { value: '+50°C', label: 'حرارة صيف الإمارات المحجوبة' },
            { value: '95%', label: 'حماية من الأشعة فوق البنفسجية (قماش HDPE)' },
            { value: '7', label: 'إمارات مغطاة' },
            { value: '15 سنة', label: 'ضمان القماش المتاح' },
        ],
        applicationsTitle: 'مظلات لكل تطبيق وقطاع',
        applications: [
            {
                title: 'مظلات مواقف السيارات',
                body: 'مظلات كابولية وهياكل مسطحة وبولي كربونات للممرات السكنية ومجمعات الفلل ومواقف السيارات التجارية والمرافق متعددة الطوابق. أحجام من باي واحد حتى أكثر من 500 موقف.',
                icon: '🚗',
            },
            {
                title: 'مظلات الممشيات',
                body: 'هياكل ممشى مسقوفة تربط المباني والبوابات والمواقف والمرافق الخدمية. شائعة في المدارس والمستشفيات ومراكز التسوق والمجمعات السكنية. فترات معيارية تصل إلى 50 متر دون عوائق.',
                icon: '🚶',
            },
            {
                title: 'مظلات مناطق اللعب للأطفال',
                body: 'أشرعة ظلال HDPE وهياكل إطارية فوق ألعاب الملاعب وحفر الرمل ومناطق التعلم الخارجية. توفر حماية 95% من الأشعة فوق البنفسجية للأطفال خلال أشد ساعات الحر في الإمارات.',
                icon: '🛝',
            },
            {
                title: 'مظلات حمامات السباحة والترفيه',
                body: 'أشرعة شدّ وإطارات فوق المسابح وأسطح المسابح والمناطق الترفيهية. تخفض درجة حرارة المياه وتقلل تبخر المواد الكيميائية وتوفر راحة للمستحمين.',
                icon: '🏊',
            },
            {
                title: 'مظلات الملاعب الرياضية',
                body: 'هياكل مظلات فوق ملاعب كرة السلة والتنس وكرة القدم والبادل. فترات واضحة مصممة هندسياً لتغطية الملعب بالكامل دون عرقلة اللعب. قماش UV مع خيارات شفافة اختيارية.',
                icon: '⚽',
            },
            {
                title: 'مظلات المدارس والمنشآت التعليمية',
                body: 'حلول تظليل لمناطق التجمع والفناء ومناطق الكانتين وأماكن الانتظار والفصول الخارجية. مصممة وفق مواصفات وزارة التربية والتعليم. تغطي المجمع المدرسي بالكامل عند الحاجة.',
                icon: '🏫',
            },
            {
                title: 'مظلات المساجد وأماكن الصلاة',
                body: 'مظلات لأفنية المساجد ومناطق الوضوء ومناطق الصلاة الإضافية وساحات صلاة العيد. تصاميم راقية محترمة، مواد متينة، متوافقة مع متطلبات التصاريح.',
                icon: '🕌',
            },
            {
                title: 'مظلات تجارية ومطاعم ومقاهي',
                body: 'مظلات جلوس خارجي للمطاعم والمقاهي والفنادق ومنافذ البيع بالتجزئة والأسواق. خيارات ألوان مخصصة بالعلامة التجارية وإضاءة متكاملة وتوافق مع أنظمة التدفئة والرذاذ.',
                icon: '☕',
            },
        ],
        materialsTitle: 'مواد وأقمشة الظلال',
        materials: [
            {
                title: 'قماش HDPE (حجب 95% من الأشعة فوق البنفسجية)',
                body: 'قماش منسوج قابل للتنفس ومثبَّت ضد الأشعة فوق البنفسجية. عمر تشغيلي 8–12 سنة. الخيار الأكثر فعالية من حيث التكلفة للملاعب ومواقف السيارات والممشيات والمدارس. أكثر من 30 خيار لوني.',
            },
            {
                title: 'بوليستر مطلي بـ PVC',
                body: 'مقاوم للمياه وعالي الأداء. مثالي حيث تُحتاج الحماية الكاملة من المطر إلى جانب الظل. يُستخدم للجلوس التجاري الخارجي وتظليل الأسواق والممشيات المسقوفة.',
            },
            {
                title: 'ألواح بولي كربونات',
                body: 'صلبة ومقاومة للطقس وتسمح بمرور الضوء المنتشر. الخيار المتميز لمواقف السيارات والمسابح والمرافق الترفيهية التي تتطلب تغليفاً كاملاً.',
            },
        ],
        whyTitle: 'لماذا تختار تنت ناو؟',
        whyBody:
            'تُدير تنت ناو دورة حياة مشروع الظلال بالكامل — مسح موقعي مجاني، تصميم مخطط AutoCAD، طلبات تصاريح البلديات، الامتثال للدفاع المدني، التصنيع الداخلي، التركيب، والدعم بعد التركيب. ركّبنا مظلات للمدارس والفنادق والمساجد والمرافق الحكومية والفلل الخاصة في جميع الإمارات السبع.',
        features: [
            {
                title: 'تصاريح البلديات والدفاع المدني مشمولة',
                body: 'بلدية دبي وبلدية أبوظبي وهيئة الشارقة وجميع جهات الإمارات السبع نتولى التعامل معها داخلياً. لا أعباء إدارية على العميل.',
            },
            {
                title: 'مصممة هندسياً لرياح وحرارة الإمارات',
                body: 'هياكل مصممة لمعيار حمل رياح 45 م/ث. مواد مثبَّتة ضد الأشعة فوق البنفسجية مصنّفة لدرجات حرارة بيئية تتجاوز 60°C.',
            },
            {
                title: 'مسح موقعي مجاني ومخطط AutoCAD',
                body: 'كل استفسار يشمل زيارة الموقع والقياسات ورسم تخطيطي كامل مع عرض السعر.',
            },
            {
                title: 'جميع التطبيقات والقطاعات',
                body: 'تطبيقات سكنية وتجارية وصناعية وتعليمية وضيافة وحكومية ودينية جميعها مشمولة.',
            },
            {
                title: 'ألوان وعلامات تجارية مخصصة',
                body: 'قماش ظلال بأكثر من 30 لوناً قياسياً وألوان RAL مخصصة وطباعة العلامة التجارية للعملاء التجاريين.',
            },
            {
                title: 'تصنيع وتركيب داخلي',
                body: 'لا تعاقد من الباطن. فرق تنت ناو تتولى التصميم والتصنيع والتركيب في الموقع مباشرةً.',
            },
        ],
        faqTitle: 'الأسئلة الشائعة حول المظلات',
        faqs: [
            {
                q: 'ما أنواع المظلات المتوفرة في الإمارات؟',
                a: 'تركّب تنت ناو مظلات مواقف كابولية وهياكل مسطحة وأشرعة شدّ ومظلات بولي كربونات وأغطية ممشيات ومظلات مناطق اللعب وأسطح المسابح والملاعب الرياضية والمجمعات المدرسية وأفنية المساجد. جميع الأنواع متوفرة في الإمارات السبع.',
            },
            {
                q: 'هل تحتاج المظلات في الإمارات إلى تصاريح بلدية؟',
                a: 'نعم. تتطلب المظلات الثابتة تصاريح من بلدية دبي أو بلدية أبوظبي أو هيئة الشارقة للتنمية والاستثمار أو الجهة المختصة في كل إمارة. تنت ناو تتولى جميع طلبات التصاريح كجزء من المشروع — دون أي عبء إداري على العميل.',
            },
            {
                q: 'كم تكلفة المظلة في الإمارات؟',
                a: 'تتفاوت التكلفة تفاوتاً كبيراً حسب النوع والمساحة والمادة. مظلة موقف سيارات لباي واحد تبدأ من 800–1,500 درهم. شراع ظلال منطقة لعب للأطفال يبدأ من 3,000 درهم. تظليل مجمع مدرسي أو ملعب رياضي كبير يتراوح من 50,000–300,000+ درهم. تواصل مع تنت ناو للحصول على مسح موقعي مجاني وعرض سعر مفصّل.',
            },
            {
                q: 'كم يستغرق التركيب؟',
                a: 'المظلات الصغيرة (1–4 بايات أو شراع واحد) تستغرق 1–2 يوم. المشاريع المتوسطة (مجمع مدرسي أو موقف 20–50 باي) تستغرق 3–7 أيام. التركيبات الكبيرة تُجدول ببرنامج بناء مفصّل.',
            },
            {
                q: 'ما العمر الافتراضي للمظلة في مناخ الإمارات؟',
                a: 'قماش HDPE: 8–12 سنة مع التثبيت ضد الأشعة فوق البنفسجية. الهياكل الفولاذية (مجلفنة بالغمس الساخن): 20–25 سنة. ألواح البولي كربونات: 10–15 سنة بطلاء UV واقٍ. يُنصح بإجراء فحص سنوي بعد كل صيف.',
            },
            {
                q: 'هل يمكنكم تظليل ملعب أطفال أو مجمع مدرسي؟',
                a: 'نعم — هذا من أكثر تطبيقاتنا شيوعاً. نركّب أشرعة ظلال HDPE وإطارات فوق ألعاب الملاعب وحفر الرمل ومناطق التعلم الخارجية وأفنية المدارس بالكامل. قماش الظلال يوفر حماية 95% من الأشعة فوق البنفسجية للأطفال خلال ساعات الذروة الحرارية.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني للمظلات',
        ctaBody:
            'أخبرنا بالتطبيق المطلوب وموقعك والمساحة التقريبية. سنزور الموقع ونُعدّ مخطط التوزيع ونقدم لك عرض سعر مفصّلاً — دون أي التزام.',
        ctaButton: 'واتساب للحصول على عرض مجاني',
    },
};
