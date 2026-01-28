export interface SEOContent {
    title: string;
    subtitle: string;
    intro: string;
    mainBody: string;
    features: { title: string; body: string }[];
    cta: string;
}

export const cityContent: Record<string, Record<string, Record<string, SEOContent>>> = {
    en: {
        dubai: {
            'ramadan-tent-rental': {
                title: 'Premium Ramadan Tent Rental in Dubai',
                subtitle: '30 Years of Architectural Excellence across Jumeirah, DIFC, and Downtown Dubai',
                intro: 'From the luxury villas of Jumeirah and Al Barsha to the high-profile corporate events in DIFC and Downtown, RMT UAE has been the trusted name in Dubai for three decades. We don’t just rent tents; we engineer environments that honor tradition and define luxury.',
                mainBody: 'Dubai’s Ramadan season is a unique blend of heritage and global sophistication. Whether you are hosting a private Iftar in Dubai Marina or a massive industrial catering setup in Jebel Ali or Dubai Investment Park (DIP), your choice of venue defines your hospitality. RMT UAE brings thirty years of logistical mastery to the table, ensuring that your tent is not only beautiful but fully compliant with Dubai Civil Defense regulations and optimized for the unique humidity levels of February in the UAE.',
                features: [
                    { title: 'Logistical Mastery', body: 'We know Dubai’s roads and regulations from Al Quoz to Deira. We handle all permits and logistics, ensuring zero stress for you.' },
                    { title: 'Elite Design', body: 'Our themes are tailored for Dubai’s aesthetic—from ultra-modern minimalist white tents for DIFC to rich, traditional majlis setups for private villas.' },
                    { title: 'Climate Control', body: 'Industrial-grade AC systems calculated specifically for Dubai’s volume and occupancy, guaranteeing a cool 21°C even at peak capacity.' }
                ],
                cta: 'Secure Your Dubai Majlis'
            },
            'majlis-tent-rental': {
                title: 'Luxury Majlis Tent Rental in Dubai',
                subtitle: 'Traditional Sophistication for Jumeirah and Emirates Hills Private Estates',
                intro: 'A private Majlis is the heart of Ramadan. We specialize in creating intimate, high-end environments for Dubai’s most discerning families in Jumeirah, Emirates Hills, and beyond.',
                mainBody: 'Our Majlis tent solutions in Dubai are designed to be an extension of your home or corporate headquarters. We focus on the details—from custom-made low-seating floor majlis to sophisticated wall paneling and ambient lighting. Whether it’s a tight villa courtyard in Jumeirah or a sprawling estate in Al Khawaneej, every installation is supervised by veteran project managers to ensure 5-star quality.',
                features: [
                    { title: 'Bespoke Interiors', body: 'Custom fabric selections and furniture layouts tailored to your guest count and aesthetic preferences.' },
                    { title: 'Privacy Focused', body: 'Thoughtful spatial planning to ensure complete privacy for your family or guests, a core requirement for Dubai’s private Majalis.' },
                    { title: 'Dubai Standards', body: 'Built to withstand February breezes and coastal humidity while maintaining a perfect internal climate.' }
                ],
                cta: 'Request Majlis Design'
            },
            'iftar-tent-rental': {
                title: 'Grand Iftar Tent Solutions in Dubai',
                subtitle: 'Hospitality Infrastructure for Corporate DIFC and Industrial Jebel Ali',
                intro: 'Hosting a large-scale Iftar in Dubai requires precision. We provide the infrastructure for mass hospitality from hotel terraces to industrial zones.',
                mainBody: 'RMT UAE specializes in high-capacity Iftar tents for Dubai’s corporate sector and community organizations. We design for flow—ensuring buffet lines, seating zones, and prayer areas work in harmony. Our structures in areas like Dubai Investment Park (DIP) and Al Quoz are engineered for maximum safety and comfort for hundreds of guests simultaneously.',
                features: [
                    { title: 'Rapid Deployment', body: 'Expert teams capable of installing large-scale structures in record time across Dubai Marina, DIFC, and Al Quoz.' },
                    { title: 'Buffet Integration', body: 'Specific zones designed for food service with extra reinforced flooring and ventilation optimized for hot buffet stations.' },
                    { title: 'Safe & Secure', body: 'Full compliance with Dubai Municipality hygiene and safety standards for all dining temporary structures.' }
                ],
                cta: 'Plan Your Iftar Setup'
            },
            'suhoor-tent-rental': {
                title: 'Sophisticated Suhoor Tents in Dubai',
                subtitle: 'Intimate Lounges for Late Night Gastronomy in Luxury Hotel Venues',
                intro: 'Suhoor is about atmosphere. We create low-light, high-comfort lounge environments for the pre-dawn hours across Dubai’s top-tier hotels.',
                mainBody: 'Our Suhoor tents in Dubai are the gold standard for luxury hotel partnerships in locations like Palm Jumeirah and DIFC. We move away from traditional seating towards modern lounge furniture, integrated audio-visual systems, and specific ventilation for shisha-permissible zones in full compliance with DCD.',
                features: [
                    { title: 'Lounge Aesthetic', body: 'Plush velvet sofas, marble tables, and contemporary Arabic decor tailored for Dubai’s nightlife aesthetic.' },
                    { title: 'AV & Lighting', body: 'Customizable smart lighting and sound systems to set the perfect nocturnal mood for late-night gatherings.' },
                    { title: 'Ventilation Experts', body: 'Certified smoke extraction systems for Suhoor lounges, ensuring fresh air flow even in high-density shisha areas.' }
                ],
                cta: 'Design Suhoor Lounge'
            }
        }
    },
    ar: {
        dubai: {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان فخمة في دبي',
                subtitle: '30 عاماً من التميز المعماري في جميرا، ومركز دبي المالي العالمي، وداون تاون',
                intro: 'من الفلل الفاخرة في جميرا والبرشاء إلى فعاليات الشركات المرموقة في DIFC وداون تاون، كانت RMT UAE الاسم الموثوق به في دبي لمدة ثلاثة عقود. نحن لا نكتفي بتأجير الخيام؛ بل نصمم بيئات تكرم التقاليد وتحدد الفخامة.',
                mainBody: 'يعد موسم رمضان في دبي مزيجاً فريداً من التراث والرقي العالمي. سواء كنت تستضيف إفطاراً خاصاً في مرسى دبي أو تجهيزاً صناعياً ضخماً في جبل علي أو مجمع دبي للاستثمار (DIP)، فإن اختيارك للمكان يحدد ضيافتك. تقدم RMT UAE ثلاثين عاماً من الإتقان اللوجستي، مما يضمن أن خيمتك متوافقة تماماً مع لوائح الدفاع المدني في دبي ومحسنة للتعامل مع مستويات الرطوبة في شهر فبراير.',
                features: [
                    { title: 'إتقان لوجستي', body: 'نحن نعرف طرق ولوائح دبي من القوز إلى ديرة. نتولى جميع التصاريح والخدمات اللوجستية، مما يضمن لك راحة البال التامة.' },
                    { title: 'تصميم النخبة', body: 'تصاميمنا مصممة خصيصاً لجماليات دبي - من الخيام البيضاء الحديثة لمركز دبي المالي العالمي إلى تجهيزات المجالس التقليدية للفلل الخاصة.' },
                    { title: 'التحكم في المناخ', body: 'أنظمة تكييف من الدرجة الصناعية مصممة خصيصاً لحجم الخيمة وعدد الحضور، مما يضمن درجة حرارة مثالية تبلغ 21 درجة مئوية.' }
                ],
                cta: 'احجز مجلسك في دبي'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيام مجالس فاخرة في دبي',
                subtitle: 'رقي تقليدي مخصص لفلل جميرا وتلال الإمارات',
                intro: 'المجلس الخاص هو قلب رمضان. نحن متخصصون في إنشاء بيئات حميمية وراقية للعائلات الأكثر تميزاً في جميرا، وتلال الإمارات، وما وراءها.',
                mainBody: 'تم تصميم حلول خيام المجلس لدينا في دبي لتكون امتداداً لمنزلك أو مقر شركتك. نحن نركز على التفاصيل - من المجالس الأرضية المخصصة إلى الألواح الجدارية المتطورة. سواء كان فناء فيلا ضيقاً في جميرا أو عقاراً مترامياً في الخوانيج، يتم الإشراف على كل تركيب لضمان جودة 5 نجوم.',
                features: [
                    { title: 'تصميمات داخلية مخصصة', body: 'اختيارات أقمشة مخصصة وتوزيع أثاث مصمم ليتناسب مع عدد ضيوفك وتفضيلاتك الجمالية.' },
                    { title: 'التركيز على الخصوصية', body: 'تخطيط مكاني مدروس لضمان الخصوصية الكاملة، وهي متطلب أساسي للمجالس الخاصة في دبي.' },
                    { title: 'معايير دبي', body: 'بنيت لتتحمل نسائم شهر فبراير ورطوبة السواحل مع الحفاظ على مناخ داخلي مثالي.' }
                ],
                cta: 'اطلب تصميم المجلس'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام الإفطار الكبرى في دبي',
                subtitle: 'بنية تحتية للضيافة للشركات في DIFC والمناطق الصناعية في جبل علي',
                intro: 'استضافة إفطار واسع النطاق في دبي تتطلب الدقة. نحن نوفر البنية التحتية لضيافة جماعية من تراسات الفنادق إلى المناطق الصناعية.',
                mainBody: 'متخصصون في خيام الإفطار ذات السعة العالية لقطاع الشركات في دبي. نحن نصمم من أجل التدفق - لضمان عمل خطوط البوفيه ومناطق الجلوس في وئام. تم تصميم هياكلنا في مناطق مثل مجمع دبي للاستثمار (DIP) والقوز لتحقيق أقصى قدر من السلامة والراحة لمئات الضيوف.',
                features: [
                    { title: 'انتشار سريع', body: 'فرق خبراء قادرة على تركيب هياكل واسعة النطاق في وقت قياسي في مرسى دبي، ومركز دبي المالي العالمي، والقوز.' },
                    { title: 'تكامل البوفيه', body: 'مناطق محددة مصممة لخدمة الطعام مع أرضيات معززة وتوية مثالية لمحطات البوفيه الساخنة.' },
                    { title: 'آمن ومضمون', body: 'الالتزام الكامل بمعايير النظافة والسلامة ببلدية دبي لجميع هياكل الطعام المؤقتة.' }
                ],
                cta: 'خطط لتجهيز الإفطار'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور متطورة في دبي',
                subtitle: 'صالات حميمية لتناول الطعام في فنادق دبي الفاخرة',
                intro: 'السحور يدور حول الأجواء. نحن ننشئ بيئات صالة ذات إضاءة منخفضة وراحة عالية في أرقى فنادق دبي.',
                mainBody: 'تعد خيام السحور الخاصة بنا في دبي المعيار الذهبي لشراكات الفنادق في مواقع مثل نخلة جميرا ومركز دبي المالي العالمي. نحن نوفر أثاث صالات حديث، وأنظمة صوت وصورة متكاملة، وتهوية مخصصة للشيشة وفقاً للدفاع المدني.',
                features: [
                    { title: 'جماليات الصالة', body: 'أرائك مخملية فاخرة، طاولات رخامية، وديكور عربي معاصر يلائم الحياة الليلية في دبي.' },
                    { title: 'الصوت والإضاءة', body: 'إضاءة ذكية وأنظمة صوت لتوفير الأجواء الليلية المثالية للتجمعات المتأخرة.' },
                    { title: 'خبراء التهوية', body: 'أنظمة استخراج دخان معتمدة لصالات السحور، مما يضمن تدفق الهواء النقي حتى في المناطق المزدحمة.' }
                ],
                cta: 'صمم صالة السحور'
            }
        }
    }
};
