export interface ParkingShadesFAQ {
    q: string;
    a: string;
}

export interface ParkingShadesFeature {
    title: string;
    body: string;
}

export interface ParkingShadesStat {
    value: string;
    label: string;
}

export interface ParkingShadesType {
    title: string;
    body: string;
}

export interface ParkingShadesMaterial {
    title: string;
    body: string;
}

export interface ParkingShadesHubContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: ParkingShadesStat[];
    typesTitle: string;
    types: ParkingShadesType[];
    materialsTitle: string;
    materials: ParkingShadesMaterial[];
    whyTitle: string;
    whyBody: string;
    features: ParkingShadesFeature[];
    faqTitle: string;
    faqs: ParkingShadesFAQ[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

export const parkingShadeHubContent: Record<string, ParkingShadesHubContent> = {
    en: {
        heroLabel: 'UAE Parking Shade Specialists',
        heroTitle: 'Parking Shade Structures UAE',
        heroBody:
            'Tent Now designs, supplies, and installs parking shade structures across all UAE emirates. From residential villa canopies to large-scale commercial car park shading — Civil Defence compliant, municipality permit-ready, and engineered to perform in UAE heat.',
        ctaPrimary: 'WhatsApp for Shade Quote',
        ctaSecondary: 'Request a Site Survey',
        stats: [
            { value: '50°C+', label: 'UAE Summer Heat Blocked' },
            { value: '70%', label: 'Reduction in Vehicle Interior Temp' },
            { value: '15 yr', label: 'Fabric Warranty Available' },
            { value: '7', label: 'Emirates Covered' },
        ],
        typesTitle: 'Types of Parking Shade Structures',
        types: [
            {
                title: 'Cantilever Shade',
                body: 'Single-post, one-sided overhang design — no columns in the parking area. Ideal for residential villas, commercial car parks, and driveways. Available in widths from 3 m to 10 m, maximising the usable area beneath.',
            },
            {
                title: 'Tensile Sail Shade',
                body: 'HDPE woven fabric stretched between anchor points to form a lightweight, contemporary canopy. Popular for hotel pools, outdoor seating zones, walkways, and compact parking bays. Low visual impact, high UV protection.',
            },
            {
                title: 'Flat / Pyramid Shade',
                body: 'Steel frame topped with fabric or polycarbonate. Covers large uniform areas efficiently — supermarkets, schools, factory yards, and hospital car parks. Modular design allows straightforward extension as requirements grow.',
            },
            {
                title: 'Polycarbonate Car Park Shade',
                body: 'Solid translucent or tinted polycarbonate panel roof mounted on a powder-coated steel frame. Fully weatherproof while allowing natural light through. Preferred for premium residential developments, showrooms, and valet bays.',
            },
        ],
        materialsTitle: 'Shade Fabric & Materials',
        materials: [
            {
                title: 'HDPE Shade Cloth (95% UV Block)',
                body: 'The most common choice across UAE installations. Breathable weave prevents heat build-up underneath, UV-stabilised for an 8–12 year service life. Available in 30+ colours including green, beige, charcoal, sand, and custom RAL shades.',
            },
            {
                title: 'PVC Coated Polyester',
                body: 'Waterproof and heavier-duty than HDPE — the right choice where rain protection is also required. Longer lifespan and higher tensile strength, at a correspondingly higher cost. Widely used for covered walkways and premium commercial car parks.',
            },
            {
                title: 'Polycarbonate Panels',
                body: 'Solid roofing panels that provide full weather protection while allowing diffused light through. UV-protected and impact-resistant as standard. Warranty options of 10–15 years. The premium choice for residential garages, showrooms, and valet forecourts.',
            },
        ],
        whyTitle: 'Why Tent Now for Parking Shades?',
        whyBody:
            'Tent Now manages every step of the process — from initial site survey and AutoCAD layout plan through municipality permit applications, Civil Defence compliance documentation, in-house fabrication, and post-installation support. With teams operating across all seven UAE emirates, we deliver projects on time and to specification, whether you need a single residential bay or a 500-bay commercial car park solution.',
        features: [
            {
                title: 'Municipality & Civil Defence Permits Included',
                body: 'We prepare and submit all permit documentation to Dubai Municipality, Abu Dhabi DM, and equivalent authorities in all seven emirates — no paperwork burden on you.',
            },
            {
                title: 'Engineered for UAE Wind Loads',
                body: 'All structures are designed to a 45 m/s wind speed standard, accounting for UAE Shamal conditions and coastal salt-air environments. Structural calculations provided on request.',
            },
            {
                title: 'Hot-Dip Galvanised or Powder-Coated Steel Frames',
                body: 'Frame finish is selected for the application: hot-dip galvanising for maximum corrosion resistance in coastal or exposed sites; powder coating in RAL colours for premium aesthetics.',
            },
            {
                title: 'Minimum 8-Year Fabric Warranty',
                body: 'All HDPE and PVC fabrics carry a minimum 8-year manufacturer warranty. Extended 15-year warranty options are available on selected premium fabric grades.',
            },
            {
                title: 'Installation in 3–7 Days',
                body: 'Small residential installations (1–4 bays) complete in 1–2 days. Mid-size commercial projects (up to 50 bays) are typically finished within 3–5 days. Large-scale projects are scheduled with a detailed programme.',
            },
            {
                title: 'Free Site Survey & AutoCAD Layout Plan',
                body: 'Every enquiry includes a no-obligation site visit. Our engineer takes measurements, assesses ground and anchor conditions, and produces a full AutoCAD layout with the quotation.',
            },
        ],
        faqTitle: 'Parking Shade FAQs',
        faqs: [
            {
                q: 'How much does a parking shade structure cost in UAE?',
                a: 'Pricing depends on type, size, and material. HDPE cantilever shades for a single car bay start from AED 800–1,500. Large commercial flat shade structures for 50–100 bays range from AED 40,000–150,000+. Contact Tent Now for a free site survey and itemised quote.',
            },
            {
                q: 'Do parking shade structures require municipality permits in UAE?',
                a: 'Yes. Dubai Municipality, Abu Dhabi DM, and other emirate authorities require permits for permanent shade structures. Tent Now handles all permit applications as part of our service — no paperwork for you.',
            },
            {
                q: 'How long does installation take?',
                a: 'Small residential installations (1–4 bays) take 1–2 days. Large commercial projects (50+ bays) typically take 5–10 days depending on site access and ground conditions.',
            },
            {
                q: 'What is the lifespan of a parking shade in UAE?',
                a: 'HDPE fabric has an 8–12 year lifespan with UV stabilisation. Steel frames, if hot-dip galvanised, last 20–25 years. Polycarbonate panels carry 10–15 year warranties. Annual inspections are recommended.',
            },
            {
                q: 'Can parking shades withstand UAE sandstorms and high winds?',
                a: 'Yes. Tent Now structures are engineered to UAE wind load standards (design wind speed 45 m/s). Fabric grades, frame gauges, and anchor systems are all sized for UAE conditions.',
            },
            {
                q: 'What colours and fabrics are available?',
                a: 'HDPE shade cloth is available in 30+ colours including green, beige, charcoal, sand, and custom RAL colours. Polycarbonate options include clear, opal, bronze tint, and blue tint panels.',
            },
        ],
        ctaTitle: 'Get a Free Parking Shade Survey',
        ctaBody:
            "Tell us your location and number of parking bays. We'll visit the site, produce a layout plan, and give you a full itemised quote — no obligation.",
        ctaButton: 'WhatsApp Us Now',
    },

    ar: {
        heroLabel: 'متخصصون في مظلات مواقف السيارات بالإمارات',
        heroTitle: 'مظلات مواقف السيارات في الإمارات',
        heroBody:
            'تنت ناو تصمم وتورد وتركب مظلات مواقف السيارات في جميع إمارات الدولة. من مظلات الفلل السكنية إلى مظلات مواقف السيارات التجارية الكبيرة — متوافقة مع اشتراطات الدفاع المدني، مستوفية لمتطلبات تصاريح البلديات، ومصممة هندسياً لمواجهة حرارة الإمارات الشديدة.',
        ctaPrimary: 'واتساب للحصول على عرض سعر',
        ctaSecondary: 'طلب مسح موقعي',
        stats: [
            { value: '+50°C', label: 'حرارة صيف الإمارات المحجوبة' },
            { value: '70%', label: 'انخفاض في درجة حرارة السيارة من الداخل' },
            { value: '15 سنة', label: 'ضمان القماش المتاح' },
            { value: '7', label: 'إمارات مغطاة' },
        ],
        typesTitle: 'أنواع مظلات مواقف السيارات',
        types: [
            {
                title: 'مظلة كابولية (Cantilever)',
                body: 'تصميم بعمود واحد وامتداد أحادي الجانب — بدون أعمدة داخل منطقة الوقوف. مثالية للفلل السكنية والمواقف التجارية والممرات. متوفرة بعروض من 3 أمتار إلى 10 أمتار لتعظيم المساحة القابلة للاستخدام.',
            },
            {
                title: 'مظلة شراعية شدّ (Tensile Sail)',
                body: 'قماش HDPE مبروم يُشدّ بين نقاط التثبيت لتشكيل مظلة خفيفة الوزن بمظهر عصري. شائعة لحمامات السباحة الفندقية ومناطق الجلوس الخارجية والممشيات ومواقف السيارات المدمجة. حضور بصري خفيف مع حماية عالية من الأشعة فوق البنفسجية.',
            },
            {
                title: 'مظلة مسطحة / هرمية',
                body: 'هيكل فولاذي علوي بقماش أو بولي كربونات. تغطي المساحات الكبيرة المنتظمة بكفاءة — السوبرماركت والمدارس والمصانع والمستشفيات. التصميم المعياري يتيح التوسعة بسهولة عند الحاجة.',
            },
            {
                title: 'مظلة بولي كربونات للسيارات',
                body: 'سقف من ألواح بولي كربونات شفافة أو ملونة مثبتة على هيكل فولاذي مطلي بالبودرة. مقاومة كاملة للطقس مع إدخال الضوء الطبيعي. الخيار المفضل للمجمعات السكنية الراقية وصالات العرض ومواقف الخدمة الذاتية.',
            },
        ],
        materialsTitle: 'أقمشة وخامات الظلال',
        materials: [
            {
                title: 'قماش HDPE (حجب 95% من الأشعة فوق البنفسجية)',
                body: 'الخيار الأكثر شيوعاً في الإمارات. النسيج التهوية يمنع تراكم الحرارة، ومثبَّت ضد الأشعة فوق البنفسجية لعمر تشغيلي 8–12 سنة. متوفر بأكثر من 30 لوناً منها الأخضر والبيج والأسود الفحمي والرملي وألوان مخصصة.',
            },
            {
                title: 'بوليستر مطلي بـ PVC',
                body: 'مقاوم للمياه وأكثر متانة من HDPE — الخيار الأمثل حين تكون الحماية من المطر ضرورة إضافية. عمر افتراضي أطول وقوة شد أعلى مع تكلفة أعلى نسبياً. مستخدم على نطاق واسع في الممرات المسقوفة والمواقف التجارية الراقية.',
            },
            {
                title: 'ألواح بولي كربونات',
                body: 'ألواح سقف صلبة توفر حماية كاملة من الطقس مع السماح بمرور الضوء المنتشر. مقاومة للأشعة فوق البنفسجية والصدمات كمعيار أساسي. خيارات ضمان 10–15 سنة. الاختيار الأمثل للمراآب السكنية وصالات العرض ومواقف الخدمة.',
            },
        ],
        whyTitle: 'لماذا تنت ناو لمظلات المواقف؟',
        whyBody:
            'تُدير تنت ناو كل مرحلة من مراحل المشروع — من المسح الأولي للموقع وإعداد مخطط AutoCAD إلى تقديم طلبات تصاريح البلديات ووثائق الامتثال للدفاع المدني والتصنيع الداخلي والدعم بعد التركيب. بفرق عمل تغطي جميع الإمارات السبع، نُنجز المشاريع في الوقت المحدد وبالمواصفات المطلوبة، سواء احتجت لمظلة فيلا واحدة أو حل لموقف سيارات تجاري بـ500 باي.',
        features: [
            {
                title: 'تصاريح البلدية والدفاع المدني مشمولة',
                body: 'نُعدّ ونُقدّم جميع وثائق التصاريح إلى بلدية دبي وبلدية أبوظبي والجهات المختصة في الإمارات السبع — دون أي عبء إداري عليك.',
            },
            {
                title: 'مصممة هندسياً لأحمال رياح الإمارات',
                body: 'تُصمَّم جميع الهياكل لسرعة رياح 45 م/ث مع مراعاة ظروف رياح الشمال وبيئات الهواء المالح الساحلية. الحسابات الإنشائية متاحة عند الطلب.',
            },
            {
                title: 'هياكل فولاذية مجلفنة أو مطلية بالبودرة',
                body: 'يُختار تشطيب الهيكل حسب التطبيق: الجلفنة بالغمس الساخن للمقاومة القصوى للتآكل في المواقع الساحلية، والطلاء بالبودرة بألوان RAL للمظهر الراقي.',
            },
            {
                title: 'ضمان قماش لا يقل عن 8 سنوات',
                body: 'جميع أقمشة HDPE وPVC تحمل ضمان المصنّع لمدة 8 سنوات على الأقل. خيارات ضمان ممتد 15 سنة متوفرة لدرجات القماش المميزة المحددة.',
            },
            {
                title: 'التركيب في 3–7 أيام',
                body: 'التركيبات السكنية الصغيرة (1–4 بايات) تكتمل في 1–2 يوم. المشاريع التجارية المتوسطة (حتى 50 باي) تنتهي عادةً خلال 3–5 أيام. المشاريع الكبيرة تُجدول ببرنامج زمني مفصّل.',
            },
            {
                title: 'مسح موقعي مجاني ومخطط AutoCAD',
                body: 'كل استفسار يشمل زيارة موقع دون التزام. يأخذ مهندسنا القياسات ويقيّم ظروف الأرض والتثبيت ويُنتج مخطط AutoCAD كاملاً مع عرض السعر.',
            },
        ],
        faqTitle: 'الأسئلة الشائعة حول مظلات المواقف',
        faqs: [
            {
                q: 'كم تكلفة مظلة موقف سيارات في الإمارات؟',
                a: 'تتوقف الأسعار على النوع والمساحة والخامة. مظلات HDPE الكابولية لباي سيارة واحدة تبدأ من 800–1,500 درهم. هياكل مظلات مسطحة تجارية كبيرة لـ50–100 باي تتراوح من 40,000–150,000+ درهم. تواصل مع تنت ناو للحصول على مسح موقعي مجاني وعرض سعر مفصّل.',
            },
            {
                q: 'هل تحتاج مظلات مواقف السيارات إلى تصاريح بلدية في الإمارات؟',
                a: 'نعم. تشترط بلدية دبي وبلدية أبوظبي وسائر الجهات الإماراتية الحصول على تصاريح للهياكل الثابتة. تنت ناو تتولى جميع طلبات التصاريح كجزء من خدمتنا — دون أي أعباء إدارية عليك.',
            },
            {
                q: 'كم يستغرق التركيب؟',
                a: 'التركيبات السكنية الصغيرة (1–4 بايات) تستغرق 1–2 يوم. المشاريع التجارية الكبيرة (+50 باي) تستغرق عادةً 5–10 أيام حسب إمكانية الوصول إلى الموقع وطبيعة الأرض.',
            },
            {
                q: 'ما هو العمر الافتراضي لمظلة موقف السيارات في الإمارات؟',
                a: 'قماش HDPE له عمر افتراضي 8–12 سنة مع تثبيت الأشعة فوق البنفسجية. الهياكل الفولاذية المجلفنة تدوم 20–25 سنة. ألواح البولي كربونات تحمل ضمانات 10–15 سنة. يُنصح بإجراء فحص سنوي.',
            },
            {
                q: 'هل تتحمل مظلات المواقف عواصف الرمال والرياح الشديدة في الإمارات؟',
                a: 'نعم. هياكل تنت ناو مصممة هندسياً وفق معايير أحمال الرياح الإماراتية (سرعة تصميمية 45 م/ث). درجات القماش وأسماك الإطارات وأنظمة التثبيت محسوبة جميعها لظروف الإمارات.',
            },
            {
                q: 'ما الألوان والأقمشة المتاحة؟',
                a: 'قماش ظلال HDPE متوفر بأكثر من 30 لوناً منها الأخضر والبيج والفحمي والرملي وألوان RAL المخصصة. خيارات البولي كربونات تشمل الشفاف والعاجي والبرونزي والأزرق.',
            },
        ],
        ctaTitle: 'احصل على مسح موقعي مجاني لمظلة الموقف',
        ctaBody:
            'أخبرنا بموقعك وعدد بايات الوقوف المطلوبة. سنزور الموقع ونُعدّ مخطط التوزيع ونقدم لك عرض سعر مفصّلاً — دون أي التزام.',
        ctaButton: 'راسلنا عبر واتساب الآن',
    },
};
