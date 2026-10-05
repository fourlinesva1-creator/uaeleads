/**
 * Written content under the tent cost calculator (EN + AR). Server-only: kept out of the
 * messages files so it isn't shipped to the browser.
 *
 * Every number comes from the engine / rates file, so the text can't disagree with the calculator.
 * Spec: kb/tent-cost-calculator/05-page-content-seo.md
 */

import {
    DELIVERY_FACTOR,
    EVENT_AC_PER_TON,
    LONGTERM_MIN_MONTHS,
    SPACE_PER_GUEST,
    SQM_PER_TON_BY_MONTH,
    WALKWAY_FACTOR,
} from './rates';
import { acTons, sqmFromGuests, suggestTentSize } from '../../lib/calculator/engine';
import { eventPriceTable, longTermPriceTable, workedExamples } from '../../lib/calculator/tables';
import { makeAed, numberFormat } from '../../lib/calculator/format';

export type Block =
    | { p: string }
    | { ul: string[] }
    | { table: 'event' | 'longterm' | 'addons' | 'space' | 'ac' }
    | { examples: true }
    | { cta: true };

export interface ContentSection {
    id: string;
    h2: string;
    blocks: Block[];
}

export interface CalculatorContent {
    sections: ContentSection[];
    faq: { q: string; a: string }[];
    tableLabels: {
        size: string;
        area: string;
        furnished: string;
        shade: string;
        withAc: string;
        tentOnly: string;
        standard: string;
        full: string;
        perSqmMonth: string;
        item: string;
        price: string;
        perEvent: string;
        perDay: string;
        perMonth: string;
        layout: string;
        sqmPerGuest: string;
        for100: string;
        month: string;
        sqmPerTon: string;
        tonsFor200: string;
        estimate: string;
        loadSetup: string;
        caption: { event: string; longterm: string; addons: string; space: string; ac: string };
    };
    addOnLabels: Record<string, string>;
    exampleText: Record<string, { title: string; detail: string }>;
    finalCta: { h2: string; p: string; quote: string; call: string };
    related: { h2: string; links: { href: string; label: string }[] };
}

export function calculatorContent(locale: string): CalculatorContent {
    const aed = makeAed(locale);
    const nf = numberFormat(locale, 1);
    const ev = eventPriceTable();
    const lt = longTermPriceTable();
    const ex = Object.fromEntries(workedExamples().map((e) => [e.key, e]));

    const small = ev[0];
    const large = ev[ev.length - 1];
    const smallPerSqm = small.furnished.low / small.sqm;
    const largePerSqm = large.furnished.low / large.sqm;
    const ltLow = Math.min(...lt.map((r) => r.rates.tentOnly.rate));
    const ltHigh = Math.max(...lt.map((r) => r.rates.tentOnly.rate));
    const banquet100 = sqmFromGuests(100, 'banquet');
    const banquet100Tent = suggestTentSize(banquet100);
    const majlis30 = sqmFromGuests(30, 'majlis');
    const summerTons = acTons(200, 7);
    const winterTons = acTons(200, 2);
    const remote = Math.round(DELIVERY_FACTOR['abu-dhabi'].rate * 100);
    const farRemote = Math.round(DELIVERY_FACTOR['western-region'].rate * 100);
    const walk = Math.round((WALKWAY_FACTOR - 1) * 100);
    const r = (x: { low: number; high: number }) => `${aed(x.low)} – ${aed(x.high)}`;

    if (locale === 'ar') {
        return {
            sections: [
                {
                    id: 'how-pricing-works',
                    h2: 'كيف تُحسب أسعار تأجير الخيام في الإمارات',
                    blocks: [
                        {
                            p: `هناك طريقتان للتسعير. خيام الفعاليات ورمضان والأعراس تُسعَّر لكل فعالية، وأساسها إيجار لمدة يومين يشمل التركيب والفك. كل يوم إضافي يرفع السعر بنسبة أقل من اليوم الأول، لذلك يكون إيجار شهر رمضان كاملاً أرخص بكثير يومياً من فعالية ليلة واحدة.`,
                        },
                        {
                            p: `أما الخيام طويلة الأمد، مثل خيام التخزين والمستودعات وقاعات الطعام ومكاتب المواقع، فتُسعَّر بالمتر المربع شهرياً، والحد الأدنى ${nf.format(LONGTERM_MIN_MONTHS)} شهر. كلما كبرت المساحة الإجمالية انخفض سعر المتر.`,
                        },
                        {
                            p: `الخيام الصغيرة أغلى للمتر المربع لأن تكلفة النقل والتركيب والطاقم ثابتة تقريباً مهما كان المقاس. خيمة ${small.width}×${small.length} م مجهزة تكلف نحو ${aed(Math.round(smallPerSqm))} للمتر، بينما تنخفض خيمة ${large.width}×${large.length} م إلى نحو ${aed(Math.round(largePerSqm))} للمتر.`,
                        },
                        {
                            p: 'جميع الأسعار في هذه الصفحة بالدرهم الإماراتي وقبل ضريبة القيمة المضافة 5%، وهي مبنية على فواتير مشاريعنا الفعلية الأخيرة. البنود التي نقدّرها لعدم توفر فاتورة حديثة لها تظهر بعلامة «تقدير» ونطاق سعري أوسع.',
                        },
                    ],
                },
                {
                    id: 'typical-prices',
                    h2: 'الأسعار المعتادة للخيام (2026–2027)',
                    blocks: [
                        { p: 'خيام الفعاليات: إيجار يومين في دبي، ثلاثة جوانب مغلقة، دون أثاث. الباقة المجهزة تشمل الأرضية والسجاد والبطانة الداخلية.' },
                        { table: 'event' },
                        { p: `الخيام طويلة الأمد: السعر لكل متر مربع شهرياً حسب المساحة الإجمالية ومستوى التجهيز. خيمة فقط تتراوح بين ${aed(ltLow)} و${aed(ltHigh)} للمتر شهرياً.` },
                        { table: 'longterm' },
                        { p: 'الأثاث والمعدات الإضافية:' },
                        { table: 'addons' },
                    ],
                },
                {
                    id: 'tent-size',
                    h2: 'ما مقاس الخيمة الذي أحتاجه؟',
                    blocks: [
                        { p: `المساحة تعتمد على طريقة الجلوس أكثر من عدد الضيوف. نضيف ${walk}% للممرات في الترتيبات التي لا تشملها. الجلسة العربية (المجلس) تحتاج مساحة أكبر بكثير من الطاولات لأن الضيوف يجلسون على الأرض حول الجدران.` },
                        { table: 'space' },
                        { p: `مثال: 100 ضيف على طاولات مستديرة يحتاجون نحو ${nf.format(banquet100)} م²، أي خيمة ${banquet100Tent.width}×${banquet100Tent.length} م. ومجلس لـ30 ضيفاً يحتاج نحو ${nf.format(majlis30)} م². أضف 9 م² لكل بوفيه أو ركن مشروبات و18 م² للمسرح. الحاسبة تقترح المقاس تلقائياً من عدد الضيوف.` },
                    ],
                },
                {
                    id: 'included',
                    h2: 'ما المشمول في السعر وما الذي يُحسب بشكل منفصل',
                    blocks: [
                        { p: 'خيام الفعاليات تشمل دائماً الهيكل الألمنيوم والسقف والجوانب من PVC والإنارة والأعمال الكهربائية والتركيب والفك. الباقة المجهزة تضيف الأرضية والسجاد والبطانة الداخلية. التكييف يُضاف حسب الحاجة ويُحسب بالطن.' },
                        { p: 'غير مشمول: وقود المولد، والديكور والثريات، والضيافة والطاقم والتنظيف، والتركيب على أسطح خرسانية (يحتاج أثقالاً ويُسعَّر بعد معاينة الموقع)، ورسوم تصاريح الجهات الحكومية.' },
                        { p: 'الخيام طويلة الأمد تشمل النقل والتركيب والصيانة مع استجابة للأعطال خلال 4 ساعات، وبابين على الأقل (4 أبواب لما فوق 300 م²). المستوى القياسي يضيف التكييف والإنارة، والتجهيز الكامل يضيف أرضية خشبية مرتفعة مع فينيل ومعدات السلامة من الحريق.' },
                    ],
                },
                {
                    id: 'air-conditioning',
                    h2: 'التكييف: كم طناً أحتاج؟',
                    blocks: [
                        { p: `التكييف غالباً أكبر بند بعد الخيمة نفسها. في الصيف يبرّد الطن الواحد نحو ${SQM_PER_TON_BY_MONTH[6]} م² فقط، بينما يكفي في الشتاء لنحو ${SQM_PER_TON_BY_MONTH[1]} م². لذلك خيمة 200 م² تحتاج نحو ${summerTons} طناً في يوليو مقابل ${winterTons} أطنان في فبراير.` },
                        { table: 'ac' },
                        { p: `سعر التكييف للفعاليات نحو ${aed(EVENT_AC_PER_TON.rate)} للطن لكل فعالية (يومان). اختر شهر الفعالية في الحاسبة ليُحسب التكييف بدقة.` },
                    ],
                },
                {
                    id: 'permits',
                    h2: 'التصاريح حسب الإمارة',
                    blocks: [
                        { p: 'أي خيمة مؤقتة يدخلها الناس تحتاج موافقة البلدية والدفاع المدني في الإمارة التي تُقام فيها، وقد تحتاج المناطق الصناعية والحرة موافقات إضافية. تركيب خيمة دون تصريح قد يؤدي إلى غرامة وإزالة الخيمة.' },
                        { p: 'نتولى تقديم طلبات التصاريح والرسومات الفنية نيابة عنك. رسوم الجهات الحكومية تختلف حسب الإمارة والمساحة ومدة الإيجار، لذلك نؤكدها في عرض السعر النهائي ولا تظهر في الحاسبة.' },
                    ],
                },
                {
                    id: 'ramadan',
                    h2: 'موسم رمضان: احجز مبكراً',
                    blocks: [
                        { p: 'يبدأ رمضان 2027 في حدود 8 فبراير 2027 (حسب رؤية الهلال). الخيام والمكيفات تُحجز بالكامل تقريباً في الأسابيع الأخيرة قبل رمضان، والطلب الأعلى على الخيام المتوسطة للإفطارات الرسمية ومجالس الفنادق.' },
                        { p: 'ننصح بتأكيد الحجز قبل 6 إلى 8 أسابيع على الأقل، وقبل ذلك إذا كنت تحتاج خيمة كبيرة أو تصريحاً في موقع جديد. إيجار الشهر كاملاً أوفر يومياً من حجز عدة فعاليات منفصلة.' },
                    ],
                },
                {
                    id: 'storage-vs-warehouse',
                    h2: 'خيمة تخزين أم استئجار مستودع؟',
                    blocks: [
                        { p: `خيمة التخزين تبدأ من نحو ${aed(ltLow)} للمتر المربع شهرياً للمساحات الكبيرة، والحد الأدنى للإيجار شهر واحد، وتُركَّب في موقعك خلال أيام. المستودع عادة يتطلب عقداً سنوياً وتأميناً وتجهيزاً ونقل البضائع إليه.` },
                        { p: 'الخيمة مناسبة عندما تحتاج المساحة لأشهر محدودة، أو قرب موقع المشروع، أو لتخزين معدات كبيرة. المستودع أنسب للتخزين الدائم لسنوات. قارن عرض المستودع الذي لديك مع تقدير الحاسبة لنفس المساحة والمدة.' },
                    ],
                },
                {
                    id: 'examples',
                    h2: 'أمثلة واقعية',
                    blocks: [{ p: 'إعدادات حقيقية مع نطاقاتها السعرية. اضغط «افتح هذا الإعداد» لتعديله في الحاسبة.' }, { examples: true }],
                },
            ],
            faq: [
                {
                    q: 'كم تكلفة تأجير خيمة في الإمارات؟',
                    a: `خيمة فعاليات ${small.width}×${small.length} م مجهزة لمدة يومين تبدأ من ${aed(small.furnished.low)} قبل الضريبة، وخيمة ${large.width}×${large.length} م من ${aed(large.furnished.low)}. خيام التخزين طويلة الأمد بين ${aed(ltLow)} و${aed(ltHigh)} للمتر المربع شهرياً. استخدم الحاسبة لمعرفة سعر إعدادك بالضبط.`,
                },
                {
                    q: 'ما مدى دقة الحاسبة؟',
                    a: 'الأسعار مبنية على فواتير مشاريعنا الأخيرة. البنود المؤكدة تعطي نطاقاً ضيقاً، والبنود المقدّرة تظهر بعلامة «تقدير» ونطاق أوسع. السعر النهائي يُؤكد في عرض السعر بعد مراجعة الموقع والتفاصيل.',
                },
                { q: 'هل الأسعار شاملة ضريبة القيمة المضافة؟', a: 'لا. الأسعار قبل ضريبة القيمة المضافة 5%، والحاسبة تعرض المبلغ مع الضريبة في سطر منفصل.' },
                {
                    q: 'كم تكلفة خيمة مجلس لشهر رمضان كاملاً؟',
                    a: `مثال: مجلس فندقي لـ60 ضيفاً (${ex.fullRamadan.setup.width}×${ex.fullRamadan.setup.length} م) مع التكييف والجلسات لمدة 30 يوماً في أبوظبي: ${r(ex.fullRamadan)} قبل الضريبة.`,
                },
                { q: 'كم طن تكييف أحتاج لخيمتي؟', a: `في الصيف نحو طن لكل ${SQM_PER_TON_BY_MONTH[6]} م²، وفي الشتاء طن لكل ${SQM_PER_TON_BY_MONTH[1]} م² تقريباً. خيمة 200 م² تحتاج ${summerTons} طناً في يوليو و${winterTons} أطنان في فبراير.` },
                { q: 'ما مقاس الخيمة المناسب لـ100 ضيف؟', a: `على طاولات مستديرة نحو ${nf.format(banquet100)} م²، أي خيمة ${banquet100Tent.width}×${banquet100Tent.length} م. للجلسة العربية تحتاج نحو 4 م² لكل ضيف.` },
                { q: 'هل تتولون استخراج التصاريح؟', a: 'نعم، نقدم طلبات تصاريح البلدية والدفاع المدني نيابة عنك. رسوم الجهات الحكومية تُؤكد في عرض السعر لأنها تختلف حسب الإمارة والمساحة والمدة.' },
                { q: 'متى يجب أن أحجز خيمة رمضان؟', a: 'قبل 6 إلى 8 أسابيع على الأقل من بداية رمضان، وقبل ذلك للخيام الكبيرة أو المواقع التي تحتاج تصريحاً جديداً.' },
                { q: 'هل يختلف السعر خارج دبي؟', a: `دبي والشارقة وعجمان وأم القيوين بنفس السعر. أبوظبي والعين ورأس الخيمة والفجيرة تضيف نحو ${remote}% على سعر الخيمة للنقل، ومنطقة الظفرة نحو ${farRemote}%.` },
            ],
            tableLabels: {
                size: 'المقاس',
                area: 'المساحة',
                furnished: 'مجهزة',
                shade: 'مظلة فقط',
                withAc: 'مجهزة + تكييف (شتاء)',
                tentOnly: 'خيمة فقط',
                standard: 'قياسي',
                full: 'تجهيز كامل',
                perSqmMonth: 'درهم / م² / شهر',
                item: 'البند',
                price: 'السعر',
                perEvent: 'لكل فعالية',
                perDay: 'لكل يوم',
                perMonth: 'لكل شهر',
                layout: 'طريقة الجلوس',
                sqmPerGuest: 'م² لكل ضيف',
                for100: 'لـ100 ضيف',
                month: 'الشهر',
                sqmPerTon: 'م² لكل طن',
                tonsFor200: 'أطنان لخيمة 200 م²',
                estimate: 'التقدير قبل الضريبة',
                loadSetup: 'افتح هذا الإعداد',
                caption: {
                    event: 'أسعار خيام الفعاليات، يومان، دبي، قبل الضريبة',
                    longterm: 'أسعار الخيام طويلة الأمد لكل م² شهرياً، قبل الضريبة',
                    addons: 'أسعار الأثاث والمعدات، قبل الضريبة',
                    space: 'المساحة المطلوبة لكل ضيف',
                    ac: 'حجم التكييف حسب الشهر',
                },
            },
            addOnLabels: {
                chair: 'كرسي',
                table: 'طاولة مع غطاء',
                majlis: 'جلسة مجلس (مرتبة + مسند) لكل ضيف',
                acTon: 'تكييف، لكل طن',
                gen100: 'مولد 100 كيلو فولت أمبير (الوقود منفصل)',
                gen250: 'مولد 250 كيلو فولت أمبير (الوقود منفصل)',
                gen500: 'مولد 500 كيلو فولت أمبير (الوقود منفصل)',
                gen1000: 'مولد 1000 كيلو فولت أمبير (الوقود منفصل)',
                ltChair: 'كرسي، إيجار طويل',
                ltTable: 'طاولة، إيجار طويل',
                ltBed: 'سرير، إيجار طويل',
                ltCoolingUnit: 'وحدة تبريد/استراحة 25 م² (تكييف، 10 كراسٍ، طاولتان)',
            },
            exampleText: {
                homeMajlis: { title: 'مجلس منزلي لـ20 ضيفاً، الشارقة', detail: `خيمة ${ex.homeMajlis.setup.width}×${ex.homeMajlis.setup.length} م مجهزة، جلسات مجلس، ${ex.homeMajlis.acTons} أطنان تكييف، يومان` },
                corporateIftar: { title: 'إفطار شركة لـ150 ضيفاً، دبي', detail: `خيمة ${ex.corporateIftar.setup.width}×${ex.corporateIftar.setup.length} م مجهزة، ${ex.corporateIftar.setup.chairs} كرسياً و${ex.corporateIftar.setup.tables} طاولة، ${ex.corporateIftar.acTons} طناً تكييف، يومان` },
                fullRamadan: { title: 'مجلس فندقي لشهر رمضان كاملاً، أبوظبي', detail: `خيمة ${ex.fullRamadan.setup.width}×${ex.fullRamadan.setup.length} م لـ60 ضيفاً، جلسات مجلس، ${ex.fullRamadan.acTons} طناً تكييف، 30 يوماً` },
                storage: { title: 'خيمة تخزين 1,000 م²، أبوظبي', detail: `خيمة ${ex.storage.setup.width}×${ex.storage.setup.length} م، خيمة فقط، 3 أشهر` },
            },
            finalCta: {
                h2: 'هل تريد السعر الدقيق؟',
                p: 'أرسل إعدادك عبر واتساب أو اطلب عرض سعر، ويؤكد فريقنا السعر النهائي غالباً في اليوم نفسه.',
                quote: 'اطلب عرض سعر',
                call: 'اتصل بنا',
            },
            related: {
                h2: 'صفحات ذات صلة',
                links: [
                    { href: '/pricing', label: 'دليل الأسعار' },
                    { href: '/services/iftar-tent-rental', label: 'تأجير خيام الإفطار' },
                    { href: '/services/storage-tents', label: 'خيام التخزين' },
                    { href: '/blog/ramadan-tent-pricing-guide-uae-2026', label: 'دليل أسعار خيام رمضان' },
                    { href: '/portfolio/abu-dhabi-storage-tent', label: 'مشروع خيمة تخزين في أبوظبي' },
                    { href: '/blog/ramadan-calendar-uae-2027', label: 'تقويم رمضان 2027' },
                ],
            },
        };
    }

    return {
        sections: [
            {
                id: 'how-pricing-works',
                h2: 'How tent rental pricing works in the UAE',
                blocks: [
                    {
                        p: 'There are two ways tents are priced. Event, Ramadan and wedding tents are priced per event, based on a 2-day hire with installation and dismantling included. Each extra day adds less than the first two, so a full month of Ramadan costs far less per day than a single night.',
                    },
                    {
                        p: `Long-term tents, such as storage and warehouse tents, dining halls and site offices, are priced per square metre per month, with a minimum of ${nf.format(LONGTERM_MIN_MONTHS)} month. The bigger the total area, the lower the rate per m².`,
                    },
                    {
                        p: `Small tents cost more per m² because transport, crew and installation cost about the same whatever the size. A furnished ${small.width}×${small.length} m tent works out at about ${aed(Math.round(smallPerSqm))} per m², while a ${large.width}×${large.length} m tent falls to about ${aed(Math.round(largePerSqm))} per m².`,
                    },
                    {
                        p: 'All prices on this page are in AED, before 5% VAT, and based on invoices from our recent jobs. Where we have no recent invoice for an item we use our own estimate, mark it "estimate" and widen the range.',
                    },
                ],
            },
            {
                id: 'typical-prices',
                h2: 'Typical tent prices (2026–2027)',
                blocks: [
                    { p: 'Event tents: 2-day hire in Dubai, 3 sides closed, no furniture. The furnished package includes flooring, carpet and inner lining.' },
                    { table: 'event' },
                    { p: `Long-term tents: price per m² per month by total area and fit-out level. Tent only runs from ${aed(ltLow)} to ${aed(ltHigh)} per m² per month.` },
                    { table: 'longterm' },
                    { p: 'Furniture and equipment:' },
                    { table: 'addons' },
                ],
            },
            {
                id: 'tent-size',
                h2: 'What size tent do I need?',
                blocks: [
                    { p: `Floor space depends more on how guests are seated than on the guest count. We add ${walk}% for walkways where the figure doesn't already include them. A majlis needs far more room than tables, because guests sit on floor seating around the walls.` },
                    { table: 'space' },
                    { p: `Example: 100 guests at round tables need about ${nf.format(banquet100)} m², so a ${banquet100Tent.width}×${banquet100Tent.length} m tent. A majlis for 30 guests needs about ${nf.format(majlis30)} m². Add 9 m² for each buffet or drinks station and 18 m² for a stage. The calculator suggests the size from your guest count.` },
                ],
            },
            {
                id: 'included',
                h2: "What's included and what costs extra",
                blocks: [
                    { p: 'Event tents always include the aluminium frame, PVC roof and your chosen sides, lighting and electrical work, installation and dismantling. The furnished package adds flooring, carpet and inner lining. AC is added as needed and priced by the ton.' },
                    { p: 'Not included: generator diesel, decor and chandeliers, catering, staff and cleaning, installing on concrete or paving (needs weights, quoted after a site visit), and authority permit fees.' },
                    { p: 'Long-term tents include transport, installation, maintenance with fault response within 4 hours, and at least 2 doors (4 above 300 m²). Standard fit-out adds AC and lighting; full fit-out adds a raised wooden floor with vinyl, plus fire extinguishers and exit signs.' },
                ],
            },
            {
                id: 'air-conditioning',
                h2: 'Air conditioning: how many tons?',
                blocks: [
                    { p: `AC is usually the biggest cost after the tent itself. In summer one ton cools only about ${SQM_PER_TON_BY_MONTH[6]} m²; in winter it covers about ${SQM_PER_TON_BY_MONTH[1]} m². So a 200 m² tent needs about ${summerTons} tons in July but ${winterTons} tons in February.` },
                    { table: 'ac' },
                    { p: `Event AC costs about ${aed(EVENT_AC_PER_TON.rate)} per ton per event (2 days). Pick your event month in the calculator to size it correctly.` },
                ],
            },
            {
                id: 'permits',
                h2: 'Permits by emirate',
                blocks: [
                    { p: 'Any temporary tent that people use needs approval from the municipality and Civil Defence of the emirate it stands in; industrial and free zones may need extra approvals. Putting up a tent without a permit can lead to a fine and forced removal.' },
                    { p: 'We prepare and submit the permit applications and technical drawings for you. Authority fees vary by emirate, area and hire period, so we confirm them in your final quote rather than in the calculator.' },
                ],
            },
            {
                id: 'ramadan',
                h2: 'Ramadan peak season: book early',
                blocks: [
                    { p: 'Ramadan 2027 is expected to start around 8 February 2027 (subject to moon sighting). Tents and AC units are close to fully booked in the last weeks before Ramadan, with the highest demand for mid-size tents for corporate iftars and hotel majlis.' },
                    { p: 'Confirm at least 6–8 weeks ahead, earlier for large tents or a site that needs a new permit. Hiring for the whole month is cheaper per day than booking several separate events.' },
                ],
            },
            {
                id: 'storage-vs-warehouse',
                h2: 'Storage tent vs renting a warehouse',
                blocks: [
                    { p: `A storage tent starts from about ${aed(ltLow)} per m² per month for large areas, with a 1-month minimum, and goes up on your own site within days. A warehouse usually means a yearly lease, deposits, fit-out and moving your goods to it.` },
                    { p: 'A tent fits when you need the space for a limited number of months, next to a project site, or for bulky equipment. A warehouse suits permanent storage over years. Compare any warehouse offer against the calculator for the same area and period.' },
                ],
            },
            {
                id: 'examples',
                h2: 'Worked examples',
                blocks: [{ p: 'Real setups and their price ranges. Press "Load this setup" to change it in the calculator.' }, { examples: true }],
            },
        ],
        faq: [
            {
                q: 'How much does it cost to rent a tent in the UAE?',
                a: `A furnished ${small.width}×${small.length} m event tent for 2 days starts at ${aed(small.furnished.low)} before VAT, and a ${large.width}×${large.length} m tent at ${aed(large.furnished.low)}. Long-term storage tents run from ${aed(ltLow)} to ${aed(ltHigh)} per m² per month. Use the calculator for your exact setup.`,
            },
            {
                q: 'How accurate is the calculator?',
                a: 'Prices come from invoices on our recent jobs. Lines we have invoices for give a narrow range; lines we estimate are marked "estimate" and widen the range. Your final quote confirms the exact price after we check the site and details.',
            },
            { q: 'Do the prices include VAT?', a: 'No. Prices are before 5% VAT; the calculator shows the total with VAT on its own line.' },
            {
                q: 'How much does a majlis tent cost for the whole of Ramadan?',
                a: `Example: a hotel majlis for 60 guests (${ex.fullRamadan.setup.width}×${ex.fullRamadan.setup.length} m) with AC and majlis seating for 30 days in Abu Dhabi: ${r(ex.fullRamadan)} before VAT.`,
            },
            { q: 'How many tons of AC does my tent need?', a: `About 1 ton per ${SQM_PER_TON_BY_MONTH[6]} m² in summer and 1 ton per ${SQM_PER_TON_BY_MONTH[1]} m² in winter. A 200 m² tent needs ${summerTons} tons in July and ${winterTons} tons in February.` },
            { q: 'What size tent do I need for 100 guests?', a: `At round tables, about ${nf.format(banquet100)} m², so a ${banquet100Tent.width}×${banquet100Tent.length} m tent. A majlis needs about 4 m² per guest.` },
            { q: 'Do you handle permits?', a: 'Yes. We submit the municipality and Civil Defence permit applications for you. Authority fees are confirmed in your quote because they vary by emirate, area and hire period.' },
            { q: 'When should I book a Ramadan tent?', a: 'At least 6–8 weeks before Ramadan starts, and earlier for large tents or sites that need a new permit.' },
            { q: 'Is it more expensive outside Dubai?', a: `Dubai, Sharjah, Ajman and Umm Al Quwain are priced the same. Abu Dhabi, Al Ain, Ras Al Khaimah and Fujairah add about ${remote}% to the tent price for transport, and Al Dhafra about ${farRemote}%.` },
        ],
        tableLabels: {
            size: 'Size',
            area: 'Area',
            furnished: 'Furnished',
            shade: 'Shade only',
            withAc: 'Furnished + AC (winter)',
            tentOnly: 'Tent only',
            standard: 'Standard',
            full: 'Full fit-out',
            perSqmMonth: 'AED / m² / month',
            item: 'Item',
            price: 'Price',
            perEvent: 'per event',
            perDay: 'per day',
            perMonth: 'per month',
            layout: 'Layout',
            sqmPerGuest: 'm² per guest',
            for100: 'For 100 guests',
            month: 'Month',
            sqmPerTon: 'm² per ton',
            tonsFor200: 'Tons for a 200 m² tent',
            estimate: 'Estimate before VAT',
            loadSetup: 'Load this setup',
            caption: {
                event: 'Event tent prices, 2 days, Dubai, before VAT',
                longterm: 'Long-term tent prices per m² per month, before VAT',
                addons: 'Furniture and equipment prices, before VAT',
                space: 'Floor space needed per guest',
                ac: 'AC sizing by month',
            },
        },
        addOnLabels: {
            chair: 'Chair',
            table: 'Table with cover',
            majlis: 'Majlis seating (mattress + arm rest), per guest',
            acTon: 'Air conditioning, per ton',
            gen100: 'Generator 100 kVA (diesel extra)',
            gen250: 'Generator 250 kVA (diesel extra)',
            gen500: 'Generator 500 kVA (diesel extra)',
            gen1000: 'Generator 1000 kVA (diesel extra)',
            ltChair: 'Chair, long-term',
            ltTable: 'Table, long-term',
            ltBed: 'Bed, long-term',
            ltCoolingUnit: 'Cooling / rest unit 25 m² (AC, 10 chairs, 2 tables)',
        },
        exampleText: {
            homeMajlis: { title: 'Home majlis for 20 guests, Sharjah', detail: `Furnished ${ex.homeMajlis.setup.width}×${ex.homeMajlis.setup.length} m tent, majlis seating, ${ex.homeMajlis.acTons} tons AC, 2 days` },
            corporateIftar: { title: 'Corporate iftar for 150 guests, Dubai', detail: `Furnished ${ex.corporateIftar.setup.width}×${ex.corporateIftar.setup.length} m tent, ${ex.corporateIftar.setup.chairs} chairs and ${ex.corporateIftar.setup.tables} tables, ${ex.corporateIftar.acTons} tons AC, 2 days` },
            fullRamadan: { title: 'Hotel majlis for the whole of Ramadan, Abu Dhabi', detail: `${ex.fullRamadan.setup.width}×${ex.fullRamadan.setup.length} m tent for 60 guests, majlis seating, ${ex.fullRamadan.acTons} tons AC, 30 days` },
            storage: { title: '1,000 m² storage tent, Abu Dhabi', detail: `${ex.storage.setup.width}×${ex.storage.setup.length} m, tent only, 3 months` },
        },
        finalCta: {
            h2: 'Want the exact price?',
            p: 'Send your setup on WhatsApp or request a quote. Our team confirms the final price, usually the same day.',
            quote: 'Request a quote',
            call: 'Call us',
        },
        related: {
            h2: 'Related pages',
            links: [
                { href: '/pricing', label: 'Tent rental pricing guide' },
                { href: '/services/iftar-tent-rental', label: 'Iftar tent rental' },
                { href: '/services/storage-tents', label: 'Storage tents' },
                { href: '/blog/ramadan-tent-pricing-guide-uae-2026', label: 'Ramadan tent pricing guide' },
                { href: '/portfolio/abu-dhabi-storage-tent', label: 'Abu Dhabi storage tent case study' },
                { href: '/blog/ramadan-calendar-uae-2027', label: 'Ramadan 2027 calendar' },
            ],
        },
    };
}

/** Rows for the "space per guest" table. */
export function spaceRows() {
    return (Object.keys(SPACE_PER_GUEST) as (keyof typeof SPACE_PER_GUEST)[]).map((style) => ({
        style,
        sqm: SPACE_PER_GUEST[style].sqm * (SPACE_PER_GUEST[style].walkways ? WALKWAY_FACTOR : 1),
        for100: sqmFromGuests(100, style),
    }));
}

/** Rows for the AC sizing table: a winter, shoulder and summer month. */
export function acRows() {
    return [2, 4, 7].map((month) => ({ month, sqmPerTon: SQM_PER_TON_BY_MONTH[month - 1], tons: acTons(200, month) }));
}

