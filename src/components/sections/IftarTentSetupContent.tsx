'use client';

import { useLocale } from 'next-intl';
import { useModal } from '@/components/ui/ModalProvider';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import PricingNote from '@/components/ui/PricingNote';
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
    ArrowRight,
} from 'lucide-react';

// ─── City-specific content ─────────────────────────────────────────────────────

interface CityContent {
    en: PageContent;
    ar: PageContent;
}

interface PageContent {
    badge: string;
    h1: string;
    h1Accent: string;
    subtitle: string;
    intro: string;
    featuresLabel: string;
    featuresTitle: string;
    featuresSubtitle: string;
    features: { icon: string; title: string; body: string }[];
    contentTitle: string;
    contentBody1: string;
    contentBody2: string;
    contentBody3: string;
    audienceTitle: string;
    audiences: { title: string; body: string }[];
    statsLabel: string;
    stats: { value: string; label: string }[];
    processTitle: string;
    processSteps: { step: string; title: string; body: string }[];
    faqTitle: string;
    faqs: { q: string; a: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaWhatsapp: string;
    ctaNote: string;
    breadcrumbServices: string;
    breadcrumbPage: string;
}

// Shared features used across all city pages
const sharedFeaturesEn = [
    { icon: 'snowflake', title: 'Air-Conditioned Tents', body: 'Industrial-grade climate control systems maintain comfortable temperatures throughout the evening, even during the warmest Ramadan nights in the UAE.' },
    { icon: 'doorOpen', title: 'Security Gates & Access Control', body: 'Professional entry and exit management with security screening, VIP access lanes, and crowd control barriers for safe, orderly guest flow.' },
    { icon: 'shieldCheck', title: 'Safety Control Systems', body: 'Comprehensive safety infrastructure including emergency exits, first-aid stations, fire extinguishers, and 24/7 on-site safety personnel.' },
    { icon: 'flame', title: 'Fire-Repellent Tent Fabric', body: 'All tent materials are certified fire-retardant and comply with UAE Civil Defense codes. Every installation includes a fire safety certificate.' },
    { icon: 'utensils', title: 'Catering-Ready Interiors', body: 'Pre-wired for buffet stations, serving areas, and commercial kitchen connections. Integrated waste management and hygiene facilities.' },
    { icon: 'armchair', title: 'Luxury Furniture & Carpeting', body: 'Premium Arabic-style seating, majlis floor cushions, dining tables, and plush carpeting — all coordinated with your chosen theme and colour palette.' },
    { icon: 'lightbulb', title: 'Ambient Lighting & Decor', body: 'Atmospheric Ramadan lighting with traditional lantern accents, chandelier installations, and customizable mood lighting for an authentic ambiance.' },
    { icon: 'clock', title: '24/7 Support & Maintenance', body: 'Round-the-clock technical support throughout the entire Ramadan season. On-call maintenance teams ensure zero downtime for your Iftar events.' },
];

const sharedFeaturesAr = [
    { icon: 'snowflake', title: 'خيام مكيفة الهواء', body: 'أنظمة تكييف صناعية تحافظ على درجات حرارة مريحة طوال المساء، حتى في أكثر ليالي رمضان حرارة في الإمارات.' },
    { icon: 'doorOpen', title: 'بوابات أمنية ونظام دخول', body: 'إدارة احترافية للدخول والخروج مع فحص أمني، ممرات VIP، وحواجز تنظيم الحشود لتدفق آمن ومنظم للضيوف.' },
    { icon: 'shieldCheck', title: 'أنظمة تحكم بالسلامة', body: 'بنية تحتية شاملة للسلامة تشمل مخارج الطوارئ، محطات الإسعافات الأولية، طفايات الحريق، وفريق سلامة متواجد على مدار الساعة.' },
    { icon: 'flame', title: 'قماش خيام مقاوم للحريق', body: 'جميع مواد الخيام معتمدة ومقاومة للحريق وتتوافق مع معايير الدفاع المدني الإماراتي. كل تركيب يتضمن شهادة سلامة من الحريق.' },
    { icon: 'utensils', title: 'تصميم داخلي جاهز للتقديم', body: 'توصيلات مسبقة لمحطات البوفيه ومناطق التقديم والمطابخ التجارية. مرافق إدارة النفايات والنظافة المتكاملة.' },
    { icon: 'armchair', title: 'أثاث فاخر وسجاد', body: 'جلسات عربية فاخرة، وسائد مجلس أرضية، طاولات طعام، وسجاد فخم — كلها منسقة مع الثيم واللوحة اللونية المختارة.' },
    { icon: 'lightbulb', title: 'إضاءة وديكور رمضاني', body: 'إضاءة رمضانية ساحرة مع لمسات فوانيس تقليدية، تركيبات ثريات، وإضاءة مزاجية قابلة للتخصيص لأجواء أصيلة.' },
    { icon: 'clock', title: 'دعم وصيانة على مدار الساعة', body: 'دعم فني على مدار الساعة طوال موسم رمضان بالكامل. فرق صيانة تحت الطلب تضمن عدم توقف فعاليات الإفطار.' },
];

const sharedProcessEn = [
    { step: '01', title: 'Consultation', body: 'Share your vision, guest count, and venue details. Our team visits the site within 24 hours for a free assessment.' },
    { step: '02', title: 'Design & Quote', body: 'Receive a detailed 3D layout, itemized quote, and timeline. We handle all municipality permits and Civil Defense approvals.' },
    { step: '03', title: 'Installation', body: 'Our experienced crew installs your complete Iftar tent setup — structure, AC, furniture, lighting, and decor — before Ramadan begins.' },
    { step: '04', title: 'Support & Removal', body: '24/7 maintenance throughout Ramadan. After Eid, we handle complete dismantling and site restoration at no extra charge.' },
];

const sharedProcessAr = [
    { step: '٠١', title: 'الاستشارة', body: 'شاركنا رؤيتك وعدد الضيوف وتفاصيل الموقع. فريقنا يزور الموقع خلال 24 ساعة لتقييم مجاني.' },
    { step: '٠٢', title: 'التصميم والعرض', body: 'احصل على تخطيط ثلاثي الأبعاد مفصل، عرض أسعار مفصّل، وجدول زمني. نتولى جميع تصاريح البلدية وموافقات الدفاع المدني.' },
    { step: '٠٣', title: 'التركيب', body: 'فريقنا المحترف يركّب تجهيز خيمة الإفطار بالكامل — الهيكل، التكييف، الأثاث، الإضاءة، والديكور — قبل بداية رمضان.' },
    { step: '٠٤', title: 'الدعم والإزالة', body: 'صيانة على مدار الساعة طوال رمضان. بعد العيد، نتولى التفكيك الكامل وإعادة الموقع بدون تكلفة إضافية.' },
];

const sharedStatsEn = [
    { value: '30+', label: 'Years of Experience' },
    { value: '5,000+', label: 'Tents Installed' },
    { value: '7', label: 'Emirates Covered' },
    { value: '24/7', label: 'Ramadan Support' },
];

const sharedStatsAr = [
    { value: '+30', label: 'عامًا من الخبرة' },
    { value: '+5,000', label: 'خيمة تم تركيبها' },
    { value: '7', label: 'إمارات مغطاة' },
    { value: '24/7', label: 'دعم رمضاني' },
];

// ─── Dubai content ──────────────────────────────────────────────────────────────

const dubaiContent: CityContent = {
    en: {
        badge: '30+ Years Serving Dubai',
        h1: 'Iftar Tent Rental Dubai',
        h1Accent: 'Your Ramadan Experience, Elevated',
        subtitle: 'Create unforgettable Dubai Iftar gatherings with premium, climate-controlled Ramadan tents — from Jumeirah villas to Downtown corporate events and hotel extensions.',
        intro: 'At TentNow.ae, we understand that Iftar is more than a meal — it\'s a moment of connection, comfort, and celebration. As Dubai\'s leading Ramadan tent rental specialists, we design and deliver Iftar tent solutions that reflect the spirit of the Holy Month: warm, welcoming, and beautifully executed. Dubai\'s Ramadan tent culture is unique — it blends deep tradition with modern hospitality expectations. From large buffet experiences at Atlantis The Palm to community Majlis spaces at DWTC and Madinat Jumeirah, Iftar tents are an integral part of the city\'s Ramadan rhythm. Our team brings three decades of Dubai-specific expertise to every setup.',
        featuresLabel: 'Why Dubai Clients Choose Us',
        featuresTitle: 'Premium Features for Dubai Iftar Tents',
        featuresSubtitle: 'Every tent we install in Dubai is engineered for the city\'s climate and meets strict Dubai Municipality and Civil Defense requirements.',
        features: sharedFeaturesEn,
        contentTitle: 'Dubai\'s Premier Iftar Tent Experience',
        contentBody1: 'An Iftar tent is more than a structure — it is the heart of Dubai\'s Ramadan hospitality. Your tent\'s layout is designed for flow: from buffet stations to seating, prayer areas to queueing zones. Every detail matters — the gentle hum of cool air as guests arrive after a day of fasting, the warm glow of lanterns casting golden light across traditional carpets, cushions and floor seating that honour tradition alongside high-performance AC for Dubai\'s evening temperatures.',
        contentBody2: 'We know Dubai\'s neighbourhoods, climate challenges, and permit landscape inside out — from Marina humidity concerns to desert winds near Jebel Ali. Our setups aren\'t generic; they\'re adapted for local conditions and guest comfort. We serve all areas across Dubai including Downtown Dubai, Dubai Marina, Business Bay, Jumeirah, Umm Suqeim, DIFC, Al Barsha, Emirates Hills, Palm Jumeirah, Jebel Ali, Dubai Silicon Oasis, Dubai Investment Park, and all surrounding communities.',
        contentBody3: 'Temporary structures in Dubai require approvals from Dubai Municipality, Civil Defence, and relevant authorities. We manage every step — permits, inspections, and structural compliance — so you avoid costly fines and delays. Whether you\'re a hotel expanding Iftar capacity at Jumeirah Beach, a corporation hosting employees in Business Bay, or a family creating a private Ramadan retreat in Emirates Hills, Tent Now tailors every Dubai installation to your exact requirements and budget.',
        audienceTitle: 'Who We Serve in Dubai',
        audiences: [
            { title: 'Hotels & Resorts', body: 'Expand your Ramadan dining capacity at Jumeirah, Palm, Marina, and Downtown properties with seamless luxury tent extensions.' },
            { title: 'Corporate & DIFC', body: 'Large-scale corporate Iftar events in Business Bay, DIFC, Dubai Investment Park, and free zones with branding and structured guest flow.' },
            { title: 'Residential & Family', body: 'Private Ramadan Majlis setups for villas in Jumeirah, Emirates Hills, Al Barsha, Arabian Ranches, and residential compounds across Dubai.' },
            { title: 'Community & Charity', body: 'Dignified, comfortable Iftar tent spaces for charitable events, mosque gatherings, and public community Iftars across Dubai.' },
        ],
        statsLabel: 'By the Numbers',
        stats: sharedStatsEn,
        processTitle: 'How It Works in Dubai',
        processSteps: sharedProcessEn,
        faqTitle: 'Dubai Iftar Tent FAQs',
        faqs: [
            { q: 'What makes an Iftar tent different from a regular event tent?', a: 'An Iftar tent is purpose-built for Ramadan gatherings — it includes traditional seating, cultural décor, prayer spaces, and layouts that support buffet service and Iftar timing around sunset. Our Dubai setups reflect the city\'s blend of tradition and modern luxury.' },
            { q: 'How far in advance should I book in Dubai?', a: 'Ramadan tents in Dubai fill up fast. We recommend booking 6-8 weeks before Ramadan. Corporate and hotel clients typically begin securing tents as early as January for the February/March season. Booking early ensures availability and better pricing.' },
            { q: 'Do you handle Dubai Municipality permits?', a: 'Yes, we manage the entire permit process with Dubai Municipality and Civil Defense — from application to final inspection. Our 30-year relationship with Dubai authorities means faster processing and zero compliance surprises.' },
            { q: 'Which areas in Dubai do you cover?', a: 'We serve all of Dubai — Downtown, Marina, Business Bay, Jumeirah, Palm Jumeirah, DIFC, Al Barsha, Emirates Hills, Jebel Ali, Silicon Oasis, Dubai Investment Park, and every neighbourhood in between. If your event is in Dubai, we\'ve got you covered.' },
            { q: 'Can you handle large corporate or hotel Iftars in Dubai?', a: 'Absolutely. From 50 guests to 500+ capacity, we design scalable tent installations with comfort, branding, and flow in mind. We\'ve delivered major Iftar events for hotels, corporations, and government entities across Dubai.' },
        ],
        ctaTitle: 'Plan Your Dubai Iftar Tent',
        ctaBody: 'Secure your preferred Ramadan 2026 dates in Dubai. From Marina to Jumeirah, our team delivers premium Iftar tent setups across the city.',
        ctaButton: 'Get a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        ctaNote: 'Ramadan 2026 starts February 19th — Dubai bookings filling fast',
        breadcrumbServices: 'Services',
        breadcrumbPage: 'Iftar Tent Rental Dubai',
    },
    ar: {
        badge: 'أكثر من 30 عامًا في خدمة دبي',
        h1: 'تأجير خيام الإفطار في دبي',
        h1Accent: 'تجربة رمضان الخاصة بك، مرتقية',
        subtitle: 'اصنع تجمعات إفطار لا تُنسى في دبي مع خيام رمضان الفاخرة والمكيفة — من فلل جميرا إلى فعاليات الشركات في داون تاون وامتدادات الفنادق.',
        intro: 'في TentNow.ae، نفهم أن الإفطار أكثر من مجرد وجبة — إنه لحظة تواصل وراحة واحتفال. كمتخصصين رائدين في تأجير خيام رمضان في دبي، نصمم ونقدم حلول خيام إفطار تعكس روح الشهر الفضيل: دافئة، مرحّبة، ومنفذة بإتقان. ثقافة خيام رمضان في دبي فريدة — تمزج بين التقاليد العريقة وتوقعات الضيافة العصرية. من تجارب البوفيه الكبرى في أتلانتس النخلة إلى مساحات المجالس المجتمعية في مركز دبي التجاري العالمي ومدينة جميرا، خيام الإفطار جزء لا يتجزأ من إيقاع رمضان في المدينة. فريقنا يجلب ثلاثة عقود من الخبرة الخاصة بدبي لكل تجهيز.',
        featuresLabel: 'لماذا يختارنا عملاء دبي',
        featuresTitle: 'مميزات فاخرة لخيام الإفطار في دبي',
        featuresSubtitle: 'كل خيمة نركبها في دبي مصممة لمناخ المدينة وتلبي متطلبات بلدية دبي والدفاع المدني الصارمة.',
        features: sharedFeaturesAr,
        contentTitle: 'تجربة خيمة الإفطار الأولى في دبي',
        contentBody1: 'خيمة الإفطار أكثر من مجرد هيكل — إنها قلب ضيافة رمضان في دبي. تصميم الخيمة مصمم للتدفق: من محطات البوفيه إلى الجلسات، ومناطق الصلاة إلى مناطق الانتظار. كل تفصيل مهم — همهمة الهواء البارد اللطيفة عند وصول الضيوف بعد يوم من الصيام، التوهج الدافئ للفوانيس التي تلقي ضوءها الذهبي على السجاد التقليدي، والوسائد والجلسات الأرضية التي تكرّم التقاليد مع تكييف عالي الأداء لدرجات حرارة دبي المسائية.',
        contentBody2: 'نعرف أحياء دبي وتحديات المناخ ومتطلبات التصاريح من الداخل — من مخاوف رطوبة المارينا إلى رياح الصحراء قرب جبل علي. تجهيزاتنا ليست عامة؛ إنها مكيفة للظروف المحلية وراحة الضيوف. نخدم جميع المناطق في دبي بما فيها وسط دبي، دبي مارينا، الخليج التجاري، جميرا، أم سقيم، مركز دبي المالي، البرشاء، تلال الإمارات، نخلة جميرا، جبل علي، واحة السيليكون، مجمع دبي للاستثمار، وجميع المناطق المحيطة.',
        contentBody3: 'الهياكل المؤقتة في دبي تتطلب موافقات من بلدية دبي والدفاع المدني والجهات المختصة. نتولى كل خطوة — التصاريح، التفتيشات، والامتثال الإنشائي — لتتجنب الغرامات والتأخيرات المكلفة. سواء كنت فندقًا يوسع طاقة الإفطار على شاطئ جميرا، أو شركة تستضيف الموظفين في الخليج التجاري، أو عائلة تصنع ملاذًا رمضانيًا خاصًا في تلال الإمارات، Tent Now تصمم كل تركيب في دبي وفقًا لمتطلباتك وميزانيتك بالضبط.',
        audienceTitle: 'من نخدم في دبي',
        audiences: [
            { title: 'الفنادق والمنتجعات', body: 'وسّع طاقة الإفطار في عقاراتك بجميرا والنخلة والمارينا وداون تاون مع امتدادات خيام فاخرة سلسة.' },
            { title: 'الشركات ومركز دبي المالي', body: 'فعاليات إفطار كبيرة للشركات في الخليج التجاري ومركز دبي المالي ومجمع دبي للاستثمار والمناطق الحرة مع العلامة التجارية وتدفق الضيوف المنظم.' },
            { title: 'السكني والعائلي', body: 'تجهيزات مجالس رمضانية خاصة للفلل في جميرا وتلال الإمارات والبرشاء والمرابع العربية والمجمعات السكنية عبر دبي.' },
            { title: 'المجتمعي والخيري', body: 'مساحات خيام إفطار كريمة ومريحة للفعاليات الخيرية وتجمعات المساجد والإفطارات المجتمعية العامة عبر دبي.' },
        ],
        statsLabel: 'بالأرقام',
        stats: sharedStatsAr,
        processTitle: 'كيف نعمل في دبي',
        processSteps: sharedProcessAr,
        faqTitle: 'الأسئلة الشائعة عن خيام الإفطار في دبي',
        faqs: [
            { q: 'ما الذي يميز خيمة الإفطار عن خيمة الفعاليات العادية؟', a: 'خيمة الإفطار مصممة خصيصًا لتجمعات رمضان — تشمل جلوسًا تقليديًا وديكورًا ثقافيًا ومساحات صلاة وتخطيطات تدعم خدمة البوفيه وتوقيت الإفطار عند غروب الشمس. تجهيزاتنا في دبي تعكس مزج المدينة بين التقاليد والفخامة العصرية.' },
            { q: 'ما الوقت المناسب للحجز في دبي؟', a: 'خيام رمضان في دبي تمتلئ بسرعة. ننصح بالحجز قبل 6-8 أسابيع من رمضان. عملاء الشركات والفنادق عادة يبدأون تأمين الخيام في يناير لموسم فبراير/مارس. الحجز المبكر يضمن التوفر وأسعار أفضل.' },
            { q: 'هل تتولون تصاريح بلدية دبي؟', a: 'نعم، نتولى عملية التصاريح بالكامل مع بلدية دبي والدفاع المدني — من التقديم إلى التفتيش النهائي. علاقتنا الممتدة 30 عامًا مع سلطات دبي تعني معالجة أسرع وصفر مفاجآت في الامتثال.' },
            { q: 'ما المناطق التي تغطونها في دبي؟', a: 'نخدم كل دبي — داون تاون، المارينا، الخليج التجاري، جميرا، نخلة جميرا، مركز دبي المالي، البرشاء، تلال الإمارات، جبل علي، واحة السيليكون، مجمع دبي للاستثمار، وكل حي بينهم. إذا كانت فعاليتك في دبي، نحن نغطيها.' },
            { q: 'هل يمكنكم التعامل مع إفطارات الشركات والفنادق الكبيرة في دبي؟', a: 'بالتأكيد. من 50 ضيفًا إلى أكثر من 500 شخص، نصمم تركيبات خيام قابلة للتوسيع مع الراحة والعلامة التجارية والتدفق في الاعتبار. قدمنا فعاليات إفطار كبرى للفنادق والشركات والجهات الحكومية عبر دبي.' },
        ],
        ctaTitle: 'خطط لخيمة الإفطار في دبي',
        ctaBody: 'احجز مواعيدك المفضلة لرمضان 2026 في دبي. من المارينا إلى جميرا، فريقنا يقدم تجهيزات خيام إفطار فاخرة عبر المدينة.',
        ctaButton: 'احصل على عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        ctaNote: 'رمضان 2026 يبدأ 19 فبراير — حجوزات دبي تمتلئ بسرعة',
        breadcrumbServices: 'الخدمات',
        breadcrumbPage: 'تأجير خيام الإفطار في دبي',
    },
};

// ─── Abu Dhabi content ──────────────────────────────────────────────────────────

const abuDhabiContent: CityContent = {
    en: {
        badge: '30+ Years Serving Abu Dhabi',
        h1: 'Iftar Tent Rental Abu Dhabi',
        h1Accent: 'Ramadan Tent Setup & Majlis Solutions',
        subtitle: 'Elevate your Abu Dhabi Iftar gatherings with premium, climate-controlled Ramadan tents — from government Iftars to private family Majlis across the capital.',
        intro: 'Abu Dhabi holds a special place in Ramadan culture — as the capital of the UAE, it hosts some of the most prestigious Iftar events in the region, from grand government gatherings at Emirates Palace to community Iftars at Sheikh Zayed Grand Mosque\'s surroundings. At TentNow.ae, we\'ve been the trusted Iftar tent rental partner for Abu Dhabi\'s hotels, government entities, corporations, and families for over 30 years. Our deep understanding of Abu Dhabi Municipality regulations, Department of Municipalities and Transport (DMT) permit requirements, and the capital\'s unique climate conditions ensures every installation is flawless.',
        featuresLabel: 'Why Abu Dhabi Clients Choose Us',
        featuresTitle: 'Premium Features for Abu Dhabi Iftar Tents',
        featuresSubtitle: 'Every tent we install in Abu Dhabi is engineered for the capital\'s climate and meets strict Abu Dhabi Civil Defense and DMT requirements.',
        features: sharedFeaturesEn,
        contentTitle: 'Abu Dhabi\'s Premier Iftar Tent Experience',
        contentBody1: 'Abu Dhabi\'s Ramadan atmosphere is distinguished by its blend of governmental prestige, cultural authenticity, and community spirit. Whether you\'re hosting a ministerial Iftar for dignitaries, a corporate gathering at Yas Island, or a family Majlis in Khalifa City — the tent must reflect both modern sophistication and Emirati heritage. Our layouts are designed for seamless flow: from grand entrance to buffet stations, prayer corners to VIP seating areas.',
        contentBody2: 'We serve all major areas across Abu Dhabi including Corniche, Al Reem Island, Saadiyat Island, Yas Island, Al Maryah Island, Khalifa City, Mohammed Bin Zayed City, Al Mushrif, Al Bateen, Al Shamkha, Masdar City, and Al Ain. Each installation is tailored to the specific venue — from beachfront hotel extensions to villa garden Majlis and government compound setups.',
        contentBody3: 'Abu Dhabi\'s permit landscape is unique — requiring coordination with Abu Dhabi Municipality, DMT, and Civil Defense. We handle every approval, from structural permits to fire safety certificates and occupancy clearances. Our 30-year relationship with Abu Dhabi authorities means faster processing and zero compliance surprises for your Ramadan event.',
        audienceTitle: 'Who We Serve in Abu Dhabi',
        audiences: [
            { title: 'Government & Diplomatic', body: 'Prestigious Iftar tent setups for ministries, embassies, and government entities — with protocol-level quality and security compliance.' },
            { title: 'Hotels & Hospitality', body: 'Expand Ramadan capacity for properties on Saadiyat Island, Yas Island, Corniche, and across the capital with seamless luxury extensions.' },
            { title: 'Corporate & Oil & Gas', body: 'Large-scale Iftar events for Abu Dhabi\'s leading corporations, energy companies, and financial institutions in ADGM, Masdar City, and business districts.' },
            { title: 'Residential & Family', body: 'Private Ramadan Majlis setups for villas in Khalifa City, Al Raha, Saadiyat, and residential compounds across Abu Dhabi.' },
        ],
        statsLabel: 'By the Numbers',
        stats: sharedStatsEn,
        processTitle: 'How It Works in Abu Dhabi',
        processSteps: sharedProcessEn,
        faqTitle: 'Abu Dhabi Iftar Tent FAQs',
        faqs: [
            { q: 'What permits are needed for an Iftar tent in Abu Dhabi?', a: 'Abu Dhabi requires permits from the Department of Municipalities and Transport (DMT) and Abu Dhabi Civil Defense. We handle the entire permit process — from application to inspection — so you don\'t have to worry about compliance.' },
            { q: 'Do you serve areas outside Abu Dhabi city?', a: 'Yes, we cover all of Abu Dhabi emirate including Al Ain, Al Dhafra region, Yas Island, Saadiyat Island, Reem Island, and all suburban communities. Delivery and installation are included in our pricing.' },
            { q: 'How large can an Iftar tent be in Abu Dhabi?', a: 'We install tents from intimate 20-person family setups to grand 2,000+ capacity government and corporate installations. We\'ve successfully delivered major Iftar events across Abu Dhabi Corniche, Yas Island, and ADNEC.' },
            { q: 'Can you match the hospitality standards of Abu Dhabi\'s luxury hotels?', a: 'Absolutely. We\'ve partnered with five-star properties across the capital. Our furniture, lighting, and decor options match the highest hospitality standards — from traditional Emirati elegance to contemporary luxury.' },
            { q: 'What is the lead time for Abu Dhabi installations?', a: 'We recommend booking 6-8 weeks before Ramadan. Government and large corporate events should book 2-3 months ahead. Our Abu Dhabi team can handle expedited setups when needed, subject to permit timelines.' },
        ],
        ctaTitle: 'Plan Your Abu Dhabi Iftar Tent',
        ctaBody: 'Secure your Ramadan 2026 dates in Abu Dhabi. From Corniche to Al Ain, our team delivers premium Iftar tent setups across the capital.',
        ctaButton: 'Get a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        ctaNote: 'Ramadan 2026 starts February 19th — Abu Dhabi bookings filling fast',
        breadcrumbServices: 'Services',
        breadcrumbPage: 'Iftar Tent Rental Abu Dhabi',
    },
    ar: {
        badge: 'أكثر من 30 عامًا في خدمة أبوظبي',
        h1: 'تأجير خيام الإفطار في أبوظبي',
        h1Accent: 'تجهيز خيام رمضان وحلول المجالس',
        subtitle: 'ارتقِ بتجمعات الإفطار في أبوظبي مع خيام رمضان الفاخرة والمكيفة — من إفطارات الجهات الحكومية إلى المجالس العائلية الخاصة في العاصمة.',
        intro: 'تحتل أبوظبي مكانة خاصة في ثقافة رمضان — كعاصمة للإمارات، تستضيف بعض أرقى فعاليات الإفطار في المنطقة، من التجمعات الحكومية الكبرى في قصر الإمارات إلى الإفطارات المجتمعية حول جامع الشيخ زايد الكبير. في TentNow.ae، كنا الشريك الموثوق لتأجير خيام الإفطار لفنادق أبوظبي والجهات الحكومية والشركات والعائلات لأكثر من 30 عامًا. فهمنا العميق للوائح بلدية أبوظبي ومتطلبات تصاريح دائرة البلديات والنقل والظروف المناخية الفريدة للعاصمة يضمن أن كل تركيب يكون بلا عيوب.',
        featuresLabel: 'لماذا يختارنا عملاء أبوظبي',
        featuresTitle: 'مميزات فاخرة لخيام الإفطار في أبوظبي',
        featuresSubtitle: 'كل خيمة نركبها في أبوظبي مصممة لمناخ العاصمة وتلبي متطلبات الدفاع المدني ودائرة البلديات والنقل الصارمة.',
        features: sharedFeaturesAr,
        contentTitle: 'تجربة خيمة الإفطار الأولى في أبوظبي',
        contentBody1: 'أجواء رمضان في أبوظبي تتميز بمزيجها من الهيبة الحكومية والأصالة الثقافية والروح المجتمعية. سواء كنت تستضيف إفطارًا وزاريًا لكبار الشخصيات، أو تجمعًا للشركات في جزيرة ياس، أو مجلسًا عائليًا في مدينة خليفة — يجب أن تعكس الخيمة الرقي العصري والتراث الإماراتي. تصاميمنا مصممة للتدفق السلس: من المدخل الكبير إلى محطات البوفيه، وزوايا الصلاة إلى مناطق جلوس كبار الشخصيات.',
        contentBody2: 'نخدم جميع المناطق الرئيسية في أبوظبي بما فيها الكورنيش، جزيرة الريم، جزيرة السعديات، جزيرة ياس، جزيرة المارية، مدينة خليفة، مدينة محمد بن زايد، المشرف، البطين، الشامخة، مدينة مصدر، والعين. كل تركيب مخصص للموقع المحدد — من امتدادات الفنادق على الشاطئ إلى مجالس حدائق الفلل وتجهيزات المجمعات الحكومية.',
        contentBody3: 'بيئة التصاريح في أبوظبي فريدة — تتطلب التنسيق مع بلدية أبوظبي ودائرة البلديات والنقل والدفاع المدني. نتولى كل موافقة، من تصاريح الهياكل إلى شهادات السلامة من الحريق وتصاريح الإشغال. علاقتنا الممتدة 30 عامًا مع سلطات أبوظبي تعني معالجة أسرع وصفر مفاجآت في الامتثال لفعالية رمضان الخاصة بك.',
        audienceTitle: 'من نخدم في أبوظبي',
        audiences: [
            { title: 'الحكومة والدبلوماسية', body: 'تجهيزات خيام إفطار مرموقة للوزارات والسفارات والجهات الحكومية — بجودة على مستوى البروتوكول والامتثال الأمني.' },
            { title: 'الفنادق والضيافة', body: 'وسّع طاقة رمضان لممتلكاتك في جزيرة السعديات وجزيرة ياس والكورنيش وعبر العاصمة بامتدادات فاخرة سلسة.' },
            { title: 'الشركات والنفط والغاز', body: 'فعاليات إفطار كبيرة لأبرز شركات أبوظبي وشركات الطاقة والمؤسسات المالية في سوق أبوظبي العالمي ومدينة مصدر والمناطق التجارية.' },
            { title: 'السكني والعائلي', body: 'تجهيزات مجالس رمضانية خاصة للفلل في مدينة خليفة والراحة والسعديات والمجمعات السكنية عبر أبوظبي.' },
        ],
        statsLabel: 'بالأرقام',
        stats: sharedStatsAr,
        processTitle: 'كيف نعمل في أبوظبي',
        processSteps: sharedProcessAr,
        faqTitle: 'الأسئلة الشائعة عن خيام الإفطار في أبوظبي',
        faqs: [
            { q: 'ما التصاريح المطلوبة لخيمة إفطار في أبوظبي؟', a: 'تتطلب أبوظبي تصاريح من دائرة البلديات والنقل والدفاع المدني في أبوظبي. نتولى عملية التصاريح بالكامل — من التقديم إلى التفتيش — حتى لا تقلق بشأن الامتثال.' },
            { q: 'هل تخدمون مناطق خارج مدينة أبوظبي؟', a: 'نعم، نغطي كامل إمارة أبوظبي بما فيها العين ومنطقة الظفرة وجزيرة ياس وجزيرة السعديات وجزيرة الريم وجميع المجتمعات الضواحي. التوصيل والتركيب مشمولان في أسعارنا.' },
            { q: 'ما الحجم الأقصى لخيمة إفطار في أبوظبي؟', a: 'نركب خيام من تجهيزات عائلية لـ 20 شخصًا إلى تركيبات حكومية وشركات كبرى لأكثر من 2,000 شخص. نجحنا في تقديم فعاليات إفطار كبرى عبر كورنيش أبوظبي وجزيرة ياس وأدنيك.' },
            { q: 'هل يمكنكم مطابقة معايير الضيافة لفنادق أبوظبي الفاخرة؟', a: 'بالتأكيد. تعاملنا مع فنادق خمس نجوم عبر العاصمة. خيارات الأثاث والإضاءة والديكور لدينا تطابق أعلى معايير الضيافة — من الأناقة الإماراتية التقليدية إلى الفخامة المعاصرة.' },
            { q: 'ما المدة المطلوبة للتركيب في أبوظبي؟', a: 'ننصح بالحجز قبل 6-8 أسابيع من رمضان. الفعاليات الحكومية والشركات الكبيرة يجب أن تحجز قبل 2-3 أشهر. فريقنا في أبوظبي يمكنه التعامل مع التركيبات المستعجلة عند الحاجة، حسب جداول التصاريح.' },
        ],
        ctaTitle: 'خطط لخيمة الإفطار في أبوظبي',
        ctaBody: 'احجز مواعيدك لرمضان 2026 في أبوظبي. من الكورنيش إلى العين، فريقنا يقدم تجهيزات خيام إفطار فاخرة عبر العاصمة.',
        ctaButton: 'احصل على عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        ctaNote: 'رمضان 2026 يبدأ 19 فبراير — حجوزات أبوظبي تمتلئ بسرعة',
        breadcrumbServices: 'الخدمات',
        breadcrumbPage: 'تأجير خيام الإفطار في أبوظبي',
    },
};

// ─── Sharjah content ────────────────────────────────────────────────────────────

const sharjahContent: CityContent = {
    en: {
        badge: '30+ Years Serving Sharjah',
        h1: 'Iftar Tent Rental Sharjah',
        h1Accent: 'Ramadan Tent Setup & Majlis Solutions',
        subtitle: 'Honour Sharjah\'s rich Islamic heritage with beautifully crafted Iftar tents — from cultural district gatherings to residential Majlis and corporate Ramadan events.',
        intro: 'Sharjah — the Cultural Capital of the Arab World — takes Ramadan more seriously than perhaps any other emirate. Known for its deep Islamic heritage, strict cultural values, and vibrant community spirit, Sharjah\'s Ramadan season features some of the UAE\'s most authentic Iftar experiences. At TentNow.ae, we\'ve been providing premium Iftar tent rental services across Sharjah for over 30 years. We understand Sharjah Municipality regulations, the emirate\'s unique urban planning requirements, and the cultural sensitivity that Sharjah Ramadan events demand.',
        featuresLabel: 'Why Sharjah Clients Choose Us',
        featuresTitle: 'Premium Features for Sharjah Iftar Tents',
        featuresSubtitle: 'Every tent we install in Sharjah is designed with cultural authenticity in mind and built to meet Sharjah Civil Defense and Municipality standards.',
        features: sharedFeaturesEn,
        contentTitle: 'Sharjah\'s Authentic Iftar Tent Experience',
        contentBody1: 'Sharjah\'s Ramadan is defined by its cultural depth. The emirate\'s Heart of Sharjah heritage district, its mosques, and its residential communities come alive with Iftar gatherings that prioritise tradition and community over spectacle. Our Iftar tent setups in Sharjah reflect this — with careful attention to authentic Emirati design elements, traditional seating arrangements, and decor that respects the emirate\'s cultural identity. From Sadu-inspired patterns to handcrafted lanterns and traditional carpets.',
        contentBody2: 'We serve all areas across Sharjah including Al Majaz, Al Nahda, Al Qasimia, Al Khan, Al Taawun, University City, Muwaileh, Al Zahia, Sharjah Industrial Area, Sharjah Waterfront City — and extending to Kalba, Khor Fakkan, and Dibba Al Hisn on the East Coast. Each installation respects the local neighbourhood character while delivering modern comfort.',
        contentBody3: 'Sharjah Municipality has specific requirements for temporary structures during Ramadan — including strict setback rules, noise considerations, and cultural compliance. We manage every permit and inspection, working closely with Sharjah Civil Defense and the municipality to ensure full compliance. Our 30-year presence in Sharjah means we know the regulatory landscape intimately, saving you time and avoiding costly delays.',
        audienceTitle: 'Who We Serve in Sharjah',
        audiences: [
            { title: 'Cultural Institutions', body: 'Iftar tent setups for Sharjah\'s museums, cultural foundations, heritage sites, and Islamic arts organizations during Ramadan.' },
            { title: 'Mosques & Community', body: 'Large-scale community Iftar tents near mosques and public spaces — comfortable, dignified spaces for charitable and community gatherings.' },
            { title: 'Corporate & Industrial', body: 'Ramadan Iftar solutions for Sharjah\'s thriving business and industrial sectors — from free zones to corporate headquarters.' },
            { title: 'Residential & Family', body: 'Private family Majlis tents for villas and compounds across Sharjah\'s residential neighbourhoods — honouring tradition in your own home.' },
        ],
        statsLabel: 'By the Numbers',
        stats: sharedStatsEn,
        processTitle: 'How It Works in Sharjah',
        processSteps: sharedProcessEn,
        faqTitle: 'Sharjah Iftar Tent FAQs',
        faqs: [
            { q: 'What makes Sharjah\'s Iftar tent requirements different?', a: 'Sharjah Municipality has specific cultural and zoning requirements for Ramadan structures. These include strict setback rules, noise regulations, and cultural sensitivity requirements. We handle all Sharjah-specific permits and ensure your setup fully complies with local regulations.' },
            { q: 'Do you cover Sharjah\'s East Coast areas?', a: 'Yes, we serve all of Sharjah emirate including Kalba, Khor Fakkan, and Dibba Al Hisn. Our teams are equipped for East Coast installations with appropriate logistics and local permit coordination.' },
            { q: 'Can you provide traditional Emirati-style Iftar tents in Sharjah?', a: 'Absolutely — this is our speciality. We offer authentic Sadu tents, traditional Arabic Majlis setups, heritage-inspired decor, and cultural design elements that align perfectly with Sharjah\'s identity as the Cultural Capital.' },
            { q: 'How do Sharjah Iftar tent prices compare to Dubai?', a: 'Sharjah generally offers more competitive pricing due to different permit structures and venue costs. We provide transparent, itemized quotes tailored to Sharjah\'s market. Contact us for a free, no-obligation estimate.' },
            { q: 'Can you set up near Sharjah\'s heritage areas?', a: 'Yes, we have extensive experience installing Iftar tents near Heart of Sharjah, Al Majaz Waterfront, and other heritage zones. We coordinate with relevant authorities to respect heritage preservation requirements while delivering premium Ramadan experiences.' },
        ],
        ctaTitle: 'Plan Your Sharjah Iftar Tent',
        ctaBody: 'Secure your Ramadan 2026 dates in Sharjah. From Al Majaz to the East Coast, our team delivers culturally authentic Iftar tent setups.',
        ctaButton: 'Get a Free Quote',
        ctaWhatsapp: 'WhatsApp Us',
        ctaNote: 'Ramadan 2026 starts February 19th — Sharjah bookings filling fast',
        breadcrumbServices: 'Services',
        breadcrumbPage: 'Iftar Tent Rental Sharjah',
    },
    ar: {
        badge: 'أكثر من 30 عامًا في خدمة الشارقة',
        h1: 'تأجير خيام الإفطار في الشارقة',
        h1Accent: 'تجهيز خيام رمضان وحلول المجالس',
        subtitle: 'كرّم تراث الشارقة الإسلامي الغني مع خيام إفطار مصممة بعناية — من تجمعات المناطق الثقافية إلى المجالس السكنية وفعاليات رمضان للشركات.',
        intro: 'الشارقة — العاصمة الثقافية للعالم العربي — تأخذ رمضان بجدية أكبر من أي إمارة أخرى. تشتهر بتراثها الإسلامي العميق وقيمها الثقافية الراسخة وروحها المجتمعية النابضة، ويتميز موسم رمضان في الشارقة ببعض أكثر تجارب الإفطار أصالة في الإمارات. في TentNow.ae، نقدم خدمات تأجير خيام الإفطار الفاخرة في الشارقة منذ أكثر من 30 عامًا. نفهم لوائح بلدية الشارقة ومتطلبات التخطيط العمراني الفريدة للإمارة والحساسية الثقافية التي تتطلبها فعاليات رمضان في الشارقة.',
        featuresLabel: 'لماذا يختارنا عملاء الشارقة',
        featuresTitle: 'مميزات فاخرة لخيام الإفطار في الشارقة',
        featuresSubtitle: 'كل خيمة نركبها في الشارقة مصممة مع مراعاة الأصالة الثقافية ومبنية لتلبي معايير الدفاع المدني وبلدية الشارقة.',
        features: sharedFeaturesAr,
        contentTitle: 'تجربة خيمة الإفطار الأصيلة في الشارقة',
        contentBody1: 'رمضان في الشارقة يتميز بعمقه الثقافي. منطقة قلب الشارقة التراثية ومساجدها ومجتمعاتها السكنية تنبض بالحياة مع تجمعات الإفطار التي تعطي الأولوية للتقاليد والمجتمع. تجهيزات خيام الإفطار لدينا في الشارقة تعكس ذلك — مع اهتمام دقيق بعناصر التصميم الإماراتي الأصيل، وترتيبات الجلوس التقليدية، والديكور الذي يحترم الهوية الثقافية للإمارة. من أنماط السدو المستوحاة إلى الفوانيس المصنوعة يدويًا والسجاد التقليدي.',
        contentBody2: 'نخدم جميع المناطق في الشارقة بما فيها المجاز، النهدة، القاسمية، الخان، التعاون، المدينة الجامعية، مويلح، الزاهية، المنطقة الصناعية في الشارقة، الشارقة الواجهة المائية — وامتدادًا إلى كلباء وخورفكان ودبا الحصن على الساحل الشرقي. كل تركيب يحترم طابع الحي المحلي مع تقديم الراحة العصرية.',
        contentBody3: 'بلدية الشارقة لديها متطلبات محددة للهياكل المؤقتة خلال رمضان — تشمل قواعد ارتداد صارمة واعتبارات الضوضاء والامتثال الثقافي. نتولى كل تصريح وتفتيش، نعمل بشكل وثيق مع الدفاع المدني والبلدية في الشارقة لضمان الامتثال الكامل. وجودنا في الشارقة منذ 30 عامًا يعني أننا نعرف المشهد التنظيمي بعمق، مما يوفر لك الوقت ويتجنب التأخيرات المكلفة.',
        audienceTitle: 'من نخدم في الشارقة',
        audiences: [
            { title: 'المؤسسات الثقافية', body: 'تجهيزات خيام إفطار لمتاحف الشارقة والمؤسسات الثقافية والمواقع التراثية ومنظمات الفنون الإسلامية خلال رمضان.' },
            { title: 'المساجد والمجتمع', body: 'خيام إفطار مجتمعية كبيرة قرب المساجد والأماكن العامة — مساحات مريحة وكريمة للتجمعات الخيرية والمجتمعية.' },
            { title: 'الشركات والصناعة', body: 'حلول إفطار رمضانية لقطاع الأعمال والصناعة المزدهر في الشارقة — من المناطق الحرة إلى مقرات الشركات.' },
            { title: 'السكني والعائلي', body: 'خيام مجالس عائلية خاصة للفلل والمجمعات في أحياء الشارقة السكنية — تكريم التقاليد في منزلك.' },
        ],
        statsLabel: 'بالأرقام',
        stats: sharedStatsAr,
        processTitle: 'كيف نعمل في الشارقة',
        processSteps: sharedProcessAr,
        faqTitle: 'الأسئلة الشائعة عن خيام الإفطار في الشارقة',
        faqs: [
            { q: 'ما الذي يميز متطلبات خيام الإفطار في الشارقة؟', a: 'بلدية الشارقة لديها متطلبات ثقافية وتنظيمية محددة لهياكل رمضان. تشمل قواعد ارتداد صارمة ولوائح الضوضاء ومتطلبات الحساسية الثقافية. نتولى جميع التصاريح الخاصة بالشارقة ونضمن أن تجهيزك يمتثل بالكامل للوائح المحلية.' },
            { q: 'هل تغطون مناطق الساحل الشرقي في الشارقة؟', a: 'نعم، نخدم كامل إمارة الشارقة بما فيها كلباء وخورفكان ودبا الحصن. فرقنا مجهزة لتركيبات الساحل الشرقي مع اللوجستيات المناسبة وتنسيق التصاريح المحلية.' },
            { q: 'هل يمكنكم توفير خيام إفطار بالطراز الإماراتي التقليدي في الشارقة؟', a: 'بالتأكيد — هذا تخصصنا. نقدم خيام سدو أصيلة، تجهيزات مجالس عربية تقليدية، ديكور مستوحى من التراث، وعناصر تصميم ثقافية تتناسب تمامًا مع هوية الشارقة كعاصمة ثقافية.' },
            { q: 'كيف تقارن أسعار خيام الإفطار في الشارقة بدبي؟', a: 'الشارقة عمومًا تقدم أسعارًا أكثر تنافسية بسبب هياكل تصاريح وتكاليف مواقع مختلفة. نقدم عروض أسعار شفافة ومفصلة مخصصة لسوق الشارقة. تواصل معنا للحصول على تقدير مجاني بدون التزام.' },
            { q: 'هل يمكنكم التركيب قرب المناطق التراثية في الشارقة؟', a: 'نعم، لدينا خبرة واسعة في تركيب خيام الإفطار قرب قلب الشارقة وواجهة المجاز المائية ومناطق التراث الأخرى. ننسق مع الجهات المعنية لاحترام متطلبات حماية التراث مع تقديم تجارب رمضانية فاخرة.' },
        ],
        ctaTitle: 'خطط لخيمة الإفطار في الشارقة',
        ctaBody: 'احجز مواعيدك لرمضان 2026 في الشارقة. من المجاز إلى الساحل الشرقي، فريقنا يقدم تجهيزات خيام إفطار أصيلة ثقافيًا.',
        ctaButton: 'احصل على عرض أسعار مجاني',
        ctaWhatsapp: 'تواصل عبر واتساب',
        ctaNote: 'رمضان 2026 يبدأ 19 فبراير — حجوزات الشارقة تمتلئ بسرعة',
        breadcrumbServices: 'الخدمات',
        breadcrumbPage: 'تأجير خيام الإفطار في الشارقة',
    },
};

// ─── Content registry ───────────────────────────────────────────────────────────

export const cityContentMap: Record<string, CityContent> = {
    'iftar-tent-rental-dubai': dubaiContent,
    'iftar-tent-rental-abu-dhabi': abuDhabiContent,
    'iftar-tent-rental-sharjah': sharjahContent,
};

// ─── Icon map ───────────────────────────────────────────────────────────────────

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

// ─── Reusable page component ────────────────────────────────────────────────────

interface IftarTentSetupContentProps {
    slug?: string;
    heroImage?: string;
    contentImage?: string;
}

// Derive the city slug from the service slug (e.g. 'iftar-tent-rental-dubai' → 'dubai')
const serviceSlugToCitySlug: Record<string, string> = {
    'iftar-tent-rental-dubai': 'dubai',
    'iftar-tent-rental-abu-dhabi': 'abu-dhabi',
    'iftar-tent-rental-sharjah': 'sharjah',
};

export default function IftarTentSetupContent({
    slug = 'iftar-tent-rental-dubai',
    heroImage = '/images/tent-now/ramadan-tents-for-rentals.jpg',
    contentImage = '/images/tent-now/ramadan-tents.jpg',
}: IftarTentSetupContentProps) {
    const locale = useLocale();
    const { openCallback } = useModal();
    const cityData = cityContentMap[slug] || dubaiContent;
    const t = locale === 'ar' ? cityData.ar : cityData.en;
    const pageUrl = `https://www.tentnow.ae/${locale}/services/${slug}`;
    const citySlug = serviceSlugToCitySlug[slug];
    const cityName = citySlug ? citySlug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '';

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            <ServiceSchema
                name={`${t.h1} ${t.h1Accent}`}
                description={t.subtitle}
                url={pageUrl}
                image={heroImage}
            />
            <BreadcrumbSchema
                locale={locale}
                items={[
                    { name: t.breadcrumbServices, href: '/services' },
                    { name: t.breadcrumbPage, href: `/services/${slug}` },
                ]}
            />

            {/* HERO SECTION */}
            <section className="relative pt-32 lg:pt-44 pb-20 lg:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
                </div>

                <div className="container-luxury relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

                        <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
                                <Image
                                    src={heroImage}
                                    alt={t.h1}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/40 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-2xl rtl:-right-auto rtl:-left-4 rtl:border-r-0 rtl:border-l-2 rtl:rounded-br-none rtl:rounded-bl-2xl" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl rtl:-left-auto rtl:-right-4 rtl:border-l-0 rtl:border-r-2 rtl:rounded-tl-none rtl:rounded-tr-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
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

            {/* INTRO CONTENT */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
                            {t.intro}
                        </p>
                    </div>
                </div>
            </section>

            {/* KEY FEATURES GRID */}
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

            {/* CONTENT + SECOND IMAGE */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
                                <Image
                                    src={contentImage}
                                    alt={t.contentTitle}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/30 via-transparent to-transparent" />
                            </div>
                        </div>

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

            {/* WHO WE SERVE */}
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

            {/* HOW IT WORKS */}
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

            {/* FAQ SECTION */}
            <section className="py-20 lg:py-28 bg-bg-darker">
                <div className="container-luxury">
                    <div className="max-w-3xl mx-auto">
                        <PricingNote locale={locale} className="mb-10" />
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

            {/* LOCATION CROSS-LINKS */}
            {citySlug && (
                <section className="py-20 lg:py-24 border-t border-border/30">
                    <div className="container-luxury">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                            <h2 className="text-2xl font-display text-white">
                                {locale === 'ar'
                                    ? `استكشف جميع خدمات ${cityName}`
                                    : `Explore All ${cityName} Tent Services`}
                            </h2>
                            <Link
                                href={`/locations/${citySlug}`}
                                className="text-gold hover:text-white transition-colors text-sm flex items-center gap-2 shrink-0"
                            >
                                {locale === 'ar' ? `نظرة عامة على ${cityName}` : `${cityName} Overview`}
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { slug: 'ramadan-tent-rental', labelEn: 'Ramadan Tent Rental', labelAr: 'تأجير خيام رمضان' },
                                { slug: 'majlis-tent-rental', labelEn: 'Majlis Tent Rental', labelAr: 'تأجير خيام مجالس' },
                                { slug: 'suhoor-tent-rental', labelEn: 'Suhoor Tent Setups', labelAr: 'خيام السحور' },
                                { slug: 'sadu-tent-rental', labelEn: 'Sadu Tent Rental', labelAr: 'تأجير خيام سدو' },
                            ].map(({ slug: serviceSlug, labelEn, labelAr }) => (
                                <Link
                                    key={serviceSlug}
                                    href={`/locations/${citySlug}/${serviceSlug}`}
                                    className="p-5 bg-bg-card border border-border rounded-xl hover:border-gold/40 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-white text-sm font-display group-hover:text-gold transition-colors">
                                        {locale === 'ar' ? labelAr : labelEn}
                                    </span>
                                    <ArrowRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity shrink-0" size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FINAL CTA */}
            <section className="py-20 lg:py-28">
                <div className="container-luxury">
                    <div className="relative p-12 lg:p-20 bg-gold rounded-3xl overflow-hidden group">
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

            {/* FAQ SCHEMA (JSON-LD) */}
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
