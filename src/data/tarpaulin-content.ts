export interface TarpaulinSize {
    feet: string;
    meters: string;
    weight: string;
    price: number;
}

export interface TarpaulinContent {
    heroLabel: string;
    heroTitle: string;
    heroBody: string;
    ctaPrimary: string;
    ctaSecondary: string;
    specsTitle: string;
    specs: { label: string; value: string }[];
    featuresTitle: string;
    featuresBody: string;
    features: { title: string; body: string }[];
    colorsTitle: string;
    colors: { name: string; hex: string }[];
    pricingTitle: string;
    pricingSubtitle: string;
    pricingDisclaimer: string;
    pricingVatNote: string;
    pricingRateNote: string;
    tableHeaders: { size: string; metric: string; weight: string; price: string };
    rollsTitle: string;
    rollsBody: string;
    rollSizes: string[];
    usesTitle: string;
    usesBody: string;
    uses: string[];
    relatedTitle: string;
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
}

export const tarpaulinSizes: TarpaulinSize[] = [
    { feet: '12 × 12 ft', meters: '3.6 × 3.6 m', weight: '2.59 kg', price: 25.92 },
    { feet: '12 × 15 ft', meters: '3.6 × 4.5 m', weight: '3.24 kg', price: 32.40 },
    { feet: '12 × 18 ft', meters: '3.6 × 5.4 m', weight: '3.90 kg', price: 38.88 },
    { feet: '15 × 18 ft', meters: '4.5 × 5.7 m', weight: '5.13 kg', price: 48.60 },
    { feet: '18 × 24 ft', meters: '5.4 × 7.2 m', weight: '7.78 kg', price: 77.76 },
    { feet: '20 × 20 ft', meters: '6.0 × 6.0 m', weight: '7.20 kg', price: 72.00 },
    { feet: '20 × 30 ft', meters: '6.0 × 9.0 m', weight: '10.80 kg', price: 108.00 },
    { feet: '24 × 24 ft', meters: '7.2 × 7.2 m', weight: '10.36 kg', price: 103.68 },
    { feet: '24 × 30 ft', meters: '7.2 × 9.0 m', weight: '12.90 kg', price: 129.60 },
    { feet: '24 × 48 ft', meters: '7.2 × 14.5 m', weight: '20.00 kg', price: 207.36 },
    { feet: '30 × 30 ft', meters: '9.0 × 9.0 m', weight: '16.20 kg', price: 162.00 },
    { feet: '30 × 40 ft', meters: '9.0 × 12.0 m', weight: '21.60 kg', price: 216.00 },
    { feet: '40 × 40 ft', meters: '12.0 × 12.0 m', weight: '28.80 kg', price: 288.00 },
    { feet: '40 × 60 ft', meters: '12.0 × 18.0 m', weight: '43.20 kg', price: 432.00 },
    { feet: '50 × 60 ft', meters: '15.0 × 18.0 m', weight: '54.00 kg', price: 540.00 },
    { feet: '60 × 60 ft', meters: '18.0 × 18.0 m', weight: '64.80 kg', price: 648.00 },
];

export const tarpaulinContent: Record<string, TarpaulinContent> = {
    en: {
        heroLabel: 'Dutarp PE200 — UAE Construction Market Growing at 6% CAGR',
        heroTitle: 'PE Tarpaulins\nUAE Supply',
        heroBody:
            'With 95 new construction projects launched in Q1 2025 alone and the UAE construction market growing toward USD 96 billion by 2030, demand for quality tarpaulins has never been higher. Dutarp PE200 — 200 gsm reinforced, UV-stabilised, waterproof — supplies construction, logistics, transport, and agricultural sectors across all seven Emirates.',
        ctaPrimary: 'WhatsApp for Price',
        ctaSecondary: 'Request a Quote',
        specsTitle: 'Product Specifications',
        specs: [
            { label: 'Product Code', value: 'PE200' },
            { label: 'Type', value: 'Reinforced PE Tarpaulin' },
            { label: 'Material', value: 'HDPE fabric with LDPE lamination (both sides)' },
            { label: 'Weave', value: '14 × 14 per sq inch' },
            { label: 'Weight', value: 'Min 200 gsm (±5%)' },
            { label: 'UV Treatment', value: 'UV-stabilised — ISO1421 / ASTM 653/93. Max 5% tensile strength loss after 1,500 hrs' },
            { label: 'Tensile Strength', value: 'Min 600 N (warp & weft) — BS 2576, 50mm grab test' },
            { label: 'Tear Strength', value: 'Min 100 N (both directions) — BS 4303 Wing Tear' },
            { label: 'Flammability', value: 'Flash Point above 200°C' },
            { label: 'Grommets', value: 'Aluminium eyelets every 100 cm (±5 cm) on all 4 sides — nylon rope reinforced hem' },
            { label: 'Size Tolerance', value: '±5% acceptable in finished sizes' },
        ],
        featuresTitle: 'Built for UAE Conditions',
        featuresBody:
            'UAE construction sites demand coverings that survive 45°C+ summers, sandstorms, and intense UV — while logistics operators need tarps that hold under highway wind loads. The PE200 is engineered for all of it.',
        features: [
            {
                title: '100% Waterproof',
                body: 'LDPE lamination on both sides creates a completely waterproof barrier — protecting building materials, cargo, and machinery from UAE rainfall and coastal humidity.',
            },
            {
                title: 'UV-Stabilised for Gulf Summers',
                body: 'Stabilised against ultraviolet rays and excess heat, tested under ASTM 653/93. Standard PE degrades quickly under UAE sun — the PE200\'s UV treatment extends outdoor life significantly.',
            },
            {
                title: 'High Tear Resistance',
                body: 'Min 100 N tear strength in both directions. Reinforced nylon rope hem and aluminium eyelets resist tearing at anchor points — essential for truck transport and site scaffolding use.',
            },
            {
                title: 'Flash Point Above 200°C',
                body: 'Flash point above 200°C provides essential fire resistance for construction site storage, oil & gas site equipment covers, and industrial applications where fire risk exists.',
            },
            {
                title: '16 Sizes + Roll Supply',
                body: 'From 12×12 ft (3.6×3.6 m) to 60×60 ft (18×18 m) in standard sheets, plus 4M×50M and 2M×100M bulk rolls for cut-to-size requirements on large projects.',
            },
            {
                title: 'Most Popular GSM in UAE',
                body: '200 gsm sits in the medium-duty tier — the highest-volume segment in the UAE tarpaulin market. Balances durability and cost-effectiveness for construction, transport, and general industrial use.',
            },
        ],
        colorsTitle: 'Available Colours',
        colors: [
            { name: 'Silver / Orange', hex: '#C0C0C0' },
            { name: 'Silver / Green', hex: '#4A7C59' },
            { name: 'Blue / White', hex: '#1E4D8C' },
            { name: 'Camouflage', hex: '#4B5320' },
        ],
        pricingTitle: 'Pricing Guide',
        pricingSubtitle:
            'All 16 standard sizes with indicative prices. Prices are subject to change — contact us for current availability and confirmed pricing.',
        pricingDisclaimer:
            '⚠ Prices shown are indicative and subject to change based on material costs, market conditions, and order quantity. Contact us for current confirmed pricing before placing your order.',
        pricingVatNote: '5% VAT is charged extra on all prices.',
        pricingRateNote: 'Rate: AED 0.18 per sq ft',
        tableHeaders: {
            size: 'Size (Feet)',
            metric: 'Size (Metric)',
            weight: 'Weight',
            price: 'Price (AED)',
        },
        rollsTitle: 'Also Available in Rolls',
        rollsBody:
            'For projects requiring continuous coverage or custom-cut sizes, our PE200 tarpaulin is available in bulk rolls.',
        rollSizes: ['4M × 50M Roll', '2M × 100M Roll'],
        usesTitle: 'Applications Across UAE Industries',
        usesBody:
            'Construction consumes 40–50% of UAE tarpaulin volume. Logistics and transport accounts for 25–30%. Agriculture and other sectors make up the rest. PE200 serves them all.',
        uses: [
            'Construction site material protection (cement, steel, timber)',
            'Scaffolding wraps — dust and debris containment',
            'Truck and flatbed trailer cargo covers',
            'Shipping container and logistics yard covers',
            'Greenhouse and agricultural crop covers',
            'Irrigation pond and reservoir lining',
            'Swimming pool seasonal covers',
            'Car parking and outdoor shade covers',
            'Oil & gas site equipment and pipeline covers',
            'Warehouse partition curtains',
            'Scaffolding enclosures and façade wraps',
            'Emergency and temporary weather shelters',
        ],
        relatedTitle: 'Related Products & Services',
        faqTitle: 'Frequently Asked Questions',
        faqs: [
            {
                q: 'How long does a 200 gsm PE tarpaulin last in UAE conditions?',
                a: 'Standard PE tarpaulins typically have a 1–2 year outdoor lifespan. The PE200\'s UV-stabilisation treatment (tested under ASTM 653/93) extends this — it is rated for a maximum 5% tensile strength loss after 1,500 hours of UV exposure. For longer-term outdoor applications (3–5+ years), HDPE or PVC tarpaulins are recommended. For heavy industrial or truck use, PVC is the preferred choice.',
            },
            {
                q: 'What is the minimum order quantity for PE tarpaulins?',
                a: 'We supply single sheets in all 16 standard sizes with no minimum order. For roll supply (4M×50M or 2M×100M), please contact us for minimum quantities and bulk pricing.',
            },
            {
                q: 'Can tarpaulins be custom-cut to size?',
                a: 'Yes. Our roll supply option (4M×50M and 2M×100M) allows custom lengths to be cut. For non-standard sheet sizes, contact our team to discuss fabrication options.',
            },
            {
                q: 'Are prices shown inclusive of VAT?',
                a: 'No. All prices shown in the pricing table are exclusive of VAT. 5% UAE VAT is charged additionally on all orders.',
            },
            {
                q: 'How accurate are the listed prices? Will they change?',
                a: 'Prices listed are indicative based on a rate of AED 0.18 per sq ft. Tarpaulin raw material (polyethylene) prices are directly linked to oil and petroleum feedstock markets, which fluctuate. Geopolitical factors in the Middle East region can also affect supply chain costs. We strongly recommend WhatsApping or calling us for confirmed current pricing before placing any order.',
            },
            {
                q: 'What colours are available and can I order specific colours?',
                a: 'Standard colours are Silver/Orange, Silver/Green, Blue/White, and Camouflage. Availability varies by size. Please specify your colour requirement when enquiring.',
            },
            {
                q: 'Do you supply to all emirates?',
                a: 'Yes. We supply and deliver PE tarpaulins across all seven UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Delivery charges apply based on location and order size.',
            },
        ],
        ctaTitle: 'Get Current Pricing',
        ctaBody:
            'Prices change with market conditions. WhatsApp or call us for today\'s confirmed pricing, stock availability, and bulk order discounts.',
        ctaButton: 'WhatsApp for Today\'s Price',
    },

    ar: {
        heroLabel: 'Dutarp PE200 — سوق البناء الإماراتي ينمو بمعدل 6% سنوياً',
        heroTitle: 'مشمع PE\nالتوريد في الإمارات',
        heroBody:
            'مع إطلاق 95 مشروع بناء جديد في الربع الأول من 2025 وحده، وسوق البناء الإماراتي في طريقه نحو 96 مليار دولار بحلول 2030، لم يكن الطلب على المشاميع عالية الجودة بهذا الحجم من قبل. Dutarp PE200 — 200 جرام/م²، مقوّى، مستقر ضد UV، مقاوم للماء — يخدم قطاعات البناء والخدمات اللوجستية والنقل والزراعة في جميع الإمارات السبع.',
        ctaPrimary: 'واتساب للسعر',
        ctaSecondary: 'طلب عرض سعر',
        specsTitle: 'مواصفات المنتج',
        specs: [
            { label: 'رمز المنتج', value: 'PE200' },
            { label: 'النوع', value: 'مشمع PE مقوّى' },
            { label: 'المادة', value: 'قماش HDPE مع طبقة LDPE على الجانبين' },
            { label: 'نسيج', value: '14 × 14 لكل بوصة مربعة' },
            { label: 'وزن المادة', value: 'بحد أدنى 200 جرام/م² (±5%)' },
            { label: 'معالجة UV', value: 'مستقر ضد UV — ISO1421 / ASTM 653/93. حد أقصى 5% فقدان في قوة الشد بعد 1500 ساعة' },
            { label: 'قوة الشد', value: 'بحد أدنى 600 نيوتن (السدى واللحمة) — BS 2576' },
            { label: 'مقاومة التمزق', value: 'بحد أدنى 100 نيوتن (الاتجاهان) — BS 4303' },
            { label: 'قابلية الاشتعال', value: 'نقطة الوميض فوق 200 درجة مئوية' },
            { label: 'حلقات التثبيت', value: 'حلقات ألومنيوم كل 100 سم (±5 سم) على الجوانب الأربعة — حافة مقوّاة بحبل نايلون' },
            { label: 'تسامح المقاس', value: '±5% مقبول في المقاسات النهائية' },
        ],
        featuresTitle: 'مصمم لمناخ الإمارات',
        featuresBody:
            'مواقع البناء الإماراتية تتطلب أغطية تتحمل درجات حرارة تتجاوز 45°م والعواصف الرملية وأشعة UV الحادة، بينما يحتاج المشغلون اللوجستيون لمشاميع تصمد تحت أحمال الرياح على الطرق السريعة. PE200 مهندَس لكل ذلك.',
        features: [
            {
                title: 'مقاوم للماء 100%',
                body: 'طبقة LDPE على كلا الجانبين توفر حاجزاً مقاوماً تماماً للماء — تحمي مواد البناء والبضائع والمعدات من أمطار الإمارات والرطوبة الساحلية.',
            },
            {
                title: 'مستقر ضد UV لصيف الخليج',
                body: 'مستقر ضد الأشعة فوق البنفسجية والحرارة، مختبر وفق ASTM 653/93. المشمع العادي يتدهور بسرعة تحت شمس الإمارات — المعالجة UV في PE200 تمدد عمره الخارجي بشكل ملحوظ.',
            },
            {
                title: 'مقاومة تمزق عالية',
                body: 'بحد أدنى 100 نيوتن مقاومة تمزق في الاتجاهين. حافة مقوّاة بحبل نايلون وحلقات ألومنيوم — ضرورية لاستخدام نقل الشاحنات وسقالات المواقع.',
            },
            {
                title: 'نقطة وميض فوق 200°م',
                body: 'توفر مقاومة حريق أساسية لمواقع البناء وتخزين معدات النفط والغاز والتطبيقات الصناعية التي ينطوي على خطر الحريق.',
            },
            {
                title: '16 مقاساً + بكرات جملة',
                body: 'من 12×12 قدم (3.6×3.6 م) إلى 60×60 قدم (18×18 م) بأوراق قياسية، بالإضافة إلى بكرات 4م×50م و2م×100م لمتطلبات القطع المخصص في المشاريع الكبيرة.',
            },
            {
                title: 'الفئة الأكثر مبيعاً في الإمارات',
                body: '200 جرام/م² يقع في الفئة المتوسطة — القطاع الأعلى حجماً في سوق المشمع الإماراتي. يوازن بين المتانة وفعالية التكلفة للبناء والنقل والاستخدام الصناعي العام.',
            },
        ],
        colorsTitle: 'الألوان المتاحة',
        colors: [
            { name: 'فضي / برتقالي', hex: '#C0C0C0' },
            { name: 'فضي / أخضر', hex: '#4A7C59' },
            { name: 'أزرق / أبيض', hex: '#1E4D8C' },
            { name: 'مموّه', hex: '#4B5320' },
        ],
        pricingTitle: 'دليل الأسعار',
        pricingSubtitle:
            'جميع المقاسات الـ 16 القياسية مع الأسعار الاسترشادية. الأسعار قابلة للتغيير — تواصل معنا للحصول على توفر الأسعار المؤكدة.',
        pricingDisclaimer:
            '⚠ الأسعار المعروضة استرشادية وقابلة للتغيير بناءً على تكاليف المواد وظروف السوق وكمية الطلب. تواصل معنا للحصول على أسعار مؤكدة قبل تقديم طلبك.',
        pricingVatNote: 'يُضاف 5% ضريبة قيمة مضافة على جميع الأسعار.',
        pricingRateNote: 'السعر: 0.18 درهم إماراتي لكل قدم مربعة',
        tableHeaders: {
            size: 'المقاس (قدم)',
            metric: 'المقاس (متري)',
            weight: 'الوزن',
            price: 'السعر (درهم)',
        },
        rollsTitle: 'متوفر أيضاً بشكل بكرات',
        rollsBody:
            'للمشاريع التي تتطلب تغطية مستمرة أو مقاسات مخصصة، يتوفر مشمع PE200 في بكرات بالجملة.',
        rollSizes: ['بكرة 4م × 50م', 'بكرة 2م × 100م'],
        usesTitle: 'التطبيقات عبر قطاعات الإمارات',
        usesBody:
            'يستهلك البناء 40–50% من حجم المشمع في الإمارات. اللوجستيات والنقل تمثل 25–30%. الزراعة وغيرها تمثل الباقي. PE200 يخدمها جميعاً.',
        uses: [
            'حماية مواد البناء (الإسمنت والفولاذ والخشب)',
            'أغطية السقالات — احتواء الغبار والركام',
            'أغطية أحمال الشاحنات والمقطورات المسطحة',
            'أغطية الحاويات وساحات اللوجستيات',
            'أغطية البيوت المحمية والمحاصيل الزراعية',
            'تبطين أحواض الري والخزانات',
            'أغطية حمامات السباحة الموسمية',
            'أغطية مواقف السيارات والظلة الخارجية',
            'أغطية معدات وأنابيب النفط والغاز',
            'ستائر تقسيم المستودعات',
            'أغطية السقالات وأغلفة الواجهات',
            'ملاجئ طوارئ ومؤقتة من الطقس',
        ],
        relatedTitle: 'منتجات وخدمات ذات صلة',
        faqTitle: 'الأسئلة الشائعة',
        faqs: [
            {
                q: 'كم يدوم مشمع PE بوزن 200 جرام في ظروف الإمارات؟',
                a: 'مشاميع PE القياسية عادةً عمرها الخارجي 1–2 سنة. معالجة UV في PE200 (مختبرة وفق ASTM 653/93) تمدد هذا — بحد أقصى 5% فقدان في قوة الشد بعد 1500 ساعة UV. للتطبيقات الخارجية طويلة الأمد (3–5 سنوات+)، يُنصح بمشمع HDPE أو PVC. للاستخدام الصناعي الثقيل أو الشاحنات، PVC هو الخيار الأمثل.',
            },
            {
                q: 'ما الحد الأدنى لكمية الطلب لمشاميع PE؟',
                a: 'نورّد قطعاً مفردة بجميع المقاسات الـ 16 القياسية دون حد أدنى للطلب. لتوريد البكرات (4م×50م أو 2م×100م)، تواصل معنا للاطلاع على الحد الأدنى للكميات وأسعار الجملة.',
            },
            {
                q: 'هل يمكن قص المشمع بمقاسات مخصصة؟',
                a: 'نعم. يتيح خيار توريد البكرات (4م×50م و2م×100م) قص أطوال مخصصة. للمقاسات غير القياسية، تواصل مع فريقنا لمناقشة خيارات التصنيع.',
            },
            {
                q: 'هل الأسعار المعروضة شاملة ضريبة القيمة المضافة؟',
                a: 'لا. جميع الأسعار المعروضة في جدول التسعير لا تشمل ضريبة القيمة المضافة. يُضاف 5% ضريبة قيمة مضافة إماراتية على جميع الطلبات.',
            },
            {
                q: 'ما مدى دقة الأسعار المدرجة؟ هل ستتغير؟',
                a: 'الأسعار المدرجة استرشادية وتستند إلى سعر 0.18 درهم لكل قدم مربعة. أسعار المادة الخام (البولي إيثيلين) مرتبطة مباشرة بأسواق النفط ومشتقاته البترولية والتي تتقلب. العوامل الجيوسياسية في منطقة الشرق الأوسط يمكن أن تؤثر أيضاً على تكاليف سلسلة الإمداد. نوصي بالتواصل عبر واتساب أو الاتصال بنا للحصول على أسعار مؤكدة قبل تقديم أي طلب.',
            },
            {
                q: 'ما الألوان المتاحة وهل يمكنني طلب ألوان محددة؟',
                a: 'الألوان القياسية هي فضي/برتقالي، فضي/أخضر، أزرق/أبيض، ومموّه. التوفر يختلف حسب المقاس. يرجى تحديد متطلب اللون عند الاستفسار.',
            },
            {
                q: 'هل تورّدون لجميع إمارات الدولة؟',
                a: 'نعم. نورّد مشاميع PE ونسلّمها عبر جميع إمارات الإمارات السبع — دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين. رسوم التوصيل تُطبق بحسب الموقع وحجم الطلب.',
            },
        ],
        ctaTitle: 'احصل على السعر الحالي',
        ctaBody:
            'الأسعار تتغير مع ظروف السوق. راسلنا عبر واتساب أو اتصل بنا للحصول على أسعار اليوم المؤكدة وتوفر المخزون وخصومات الكميات الكبيرة.',
        ctaButton: 'واتساب لسعر اليوم',
    },
};
