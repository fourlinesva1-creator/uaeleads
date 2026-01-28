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
                subtitle: '30 Years of Architectural Excellence in Dubai’s Most Iconic Locations',
                intro: 'From the luxury villas of Jumeirah to the high-rise corporate events in DIFC, RMT UAE has been the trusted name in Dubai for three decades. We don’t just rent tents; we engineer environments that honor tradition and define luxury.',
                mainBody: 'Dubai’s Ramadan season is a unique blend of heritage and global sophistication. Whether you are hosting a private Iftar in Dubai Marina or a massive corporate gathering in Al Quoz, your choice of venue defines your hospitality. RMT UAE brings thirty years of logistical mastery to the table, ensuring that your tent is not only beautiful but fully compliant with Dubai Civil Defense regulations and optimized for the February humidity.',
                features: [
                    { title: 'Logistical Mastery', body: 'We know Dubai’s roads and regulations better than anyone. We handle all permits and logistics, ensuring zero stress for you.' },
                    { title: 'Elite Design', body: 'Our themes are tailored for Dubai’s aesthetic—from ultra-modern minimalist white tents to rich, traditional majlis setups.' },
                    { title: 'Climate Control', body: 'Industrial-grade AC systems calculated specifically for Dubai’s weather patterns, guaranteeing guest comfort regardless of occupancy.' }
                ],
                cta: 'Secure Your Dubai Majlis'
            },
            'majlis-tent-rental': {
                title: 'Luxury Majlis Tent Rental in Dubai',
                subtitle: 'Traditional Sophistication Meets Modern Architecture',
                intro: 'A private Majlis is the heart of Ramadan. We specialize in creating intimate, high-end environments for Dubai’s most discerning families and organizations.',
                mainBody: 'Our Majlis tent solutions in Dubai are designed to be an extension of your home or corporate headquarters. We focus on the details—from custom-made low-seating floor majlis to sophisticated wall paneling and ambient lighting. Every installation in Dubai is supervised by our veteran project managers to ensure 5-star quality.',
                features: [
                    { title: 'Bespoke Interiors', body: 'Custom fabric selections and furniture layouts tailored to your guest count and aesthetic preferences.' },
                    { title: 'Privacy Focused', body: 'Thoughtful spatial planning to ensure complete privacy for your family or guests.' },
                    { title: 'Dubai Standards', body: 'Built to withstand February breezes and humidity while maintaining a perfect internal climate.' }
                ],
                cta: 'Request Majlis Design'
            },
            'iftar-tent-rental': {
                title: 'Grand Iftar Tent Solutions in Dubai',
                subtitle: 'Efficiency and Elegance for the Breaking of the Fast',
                intro: 'Hosting a large-scale Iftar in Dubai requires precision. We provide the infrastructure for mass hospitality without compromising on luxury.',
                mainBody: 'RMT UAE specializes in high-capacity Iftar tents for Dubai’s corporate sector and community organizations. We design for flow—ensuring buffet lines, seating zones, and prayer areas work in harmony. Our structures are engineered for maximum safety and comfort for hundreds of guests.',
                features: [
                    { title: 'Rapid Deployment', body: 'Expert teams capable of installing large-scale structures in record time across Dubai.' },
                    { title: 'Buffet Integration', body: 'Specific zones designed for food service with extra reinforced flooring and ventilation.' },
                    { title: 'Safe & Secure', body: 'Full compliance with Dubai Municipality hygiene and safety standards.' }
                ],
                cta: 'Plan Your Iftar Setup'
            },
            'suhoor-tent-rental': {
                title: 'Sophisticated Suhoor Tents in Dubai',
                subtitle: 'Intimate Lounges for Late Night Gastronomy',
                intro: 'Suhoor is about atmosphere. We create low-light, high-comfort lounge environments for the pre-dawn hours in Dubai.',
                mainBody: 'Our Suhoor tents in Dubai are the gold standard for luxury hotel partnerships and private estates. We move away from traditional seating towards modern lounge furniture, integrated audio-visual systems, and specific ventilation for shisha-permissible zones.',
                features: [
                    { title: 'Lounge Aesthetic', body: 'Plush velvet sofas, marble tables, and contemporary Arabic decor.' },
                    { title: 'AV & Lighting', body: 'Customizable smart lighting and sound systems to set the perfect nocturnal mood.' },
                    { title: 'Ventilation Experts', body: 'Certified smoke extraction systems for Suhoor lounges in compliance with DCD.' }
                ],
                cta: 'Design Suhoor Lounge'
            }
        }
    },
    ar: {
        dubai: {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان فخمة في دبي',
                subtitle: '30 عاماً من التميز المعماري في أرقى مواقع دبي',
                intro: 'من الفلل الفاخرة في جميرا إلى فعاليات الشركات الكبرى في مركز دبي المالي العالمي، كانت RMT UAE الاسم الموثوق به في دبي لمدة ثلاثة عقود. نحن لا نكتفي بتأجير الخيام؛ بل نصمم بيئات تكرم التقاليد وتحدد الفخامة.',
                mainBody: 'يعد موسم رمضان في دبي مزيجاً فريداً من التراث والرقي العالمي. سواء كنت تستضيف إفطاراً خاصاً في مرسى دبي أو تجمعاً ضخماً للشركات في القوز، فإن اختيارك للمكان يحدد ضيافتك. تقدم RMT UAE ثلاثين عاماً من الإتقان اللوجستي، مما يضمن أن خيمتك ليست جميلة فحسب، بل متوافقة تماماً مع لوائح الدفاع المدني في دبي ومحسنة للتعامل مع رطوبة شهر فبراير.',
                features: [
                    { title: 'إتقان لوجستي', body: 'نحن نعرف طرق ولوائح دبي أفضل من أي شخص آخر. نتولى جميع التصاريح والخدمات اللوجستية، مما يضمن لك عدم القلق.' },
                    { title: 'تصميم النخبة', body: 'تصاميمنا مصممة خصيصاً لجماليات دبي - من الخيام البيضاء الحديثة والبسيطة إلى تجهيزات المجالس التقليدية الغنية.' },
                    { title: 'التحكم في المناخ', body: 'أنظمة تكييف من الدرجة الصناعية مصممة خصيصاً لأنماط الطقس في دبي، مما يضمن راحة الضيوف بغض النظر عن عدد الحضور.' }
                ],
                cta: 'احجز مجلسك في دبي'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيام مجالس فاخرة في دبي',
                subtitle: 'رقي تقليدي يلتقي مع العمارة الحديثة',
                intro: 'المجلس الخاص هو قلب رمضان. نحن متخصصون في إنشاء بيئات حميمية وراقية للعائلات والمؤسسات الأكثر تميزاً في دبي.',
                mainBody: 'تم تصميم حلول خيام المجلس لدينا في دبي لتكون امتداداً لمنزلك أو مقر شركتك. نحن نركز على التفاصيل - من المجالس الأرضية ذات الجلسات المنخفضة المصنوعة حسب الطلب إلى الألواح الجدارية المتطورة والإضاءة المحيطة. يتم الإشراف على كل تركيب في دبي من قبل مديري مشاريع مخضرمين لضمان جودة 5 نجوم.',
                features: [
                    { title: 'تصميمات داخلية مخصصة', body: 'اختيارات أقمشة مخصصة وتوزيع أثاث مصمم ليتناسب مع عدد ضيوفك وتفضيلاتك الجمالية.' },
                    { title: 'التركيز على الخصوصية', body: 'تخطيط مكاني مدروس لضمان الخصوصية الكاملة لعائلتك أو ضيوفك.' },
                    { title: 'معايير دبي', body: 'بنيت لتتحمل نسائم شهر فبراير ورطوبته مع الحفاظ على مناخ داخلي مثالي.' }
                ],
                cta: 'اطلب تصميم المجلس'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام الإفطار الكبرى في دبي',
                subtitle: 'الكفاءة والأناقة لكسر الصيام',
                intro: 'استضافة إفطار واسع النطاق في دبي تتطلب الدقة. نحن نوفر البنية التحتية للضيافة الجماعية دون المساومة على الفخامة.',
                mainBody: 'متخصصون في خيام الإفطار ذات السعة العالية لقطاع الشركات والمؤسسات المجتمعية في دبي. نحن نصمم من أجل التدفق - لضمان عمل خطوط البوفيه ومناطق الجلوس ومناطق الصلاة في وئام. تم تصميم هياكلنا لتحقيق أقصى قدر من السلامة والراحة لمئات الضيوف.',
                features: [
                    { title: 'انتشار سريع', body: 'فرق خبراء قادرة على تركيب هياكل واسعة النطاق في وقت قياسي في جميع أنحاء دبي.' },
                    { title: 'تكامل البوفيه', body: 'مناطق محددة مصممة لخدمة الطعام مع أرضيات معززة وتوية إضافية.' },
                    { title: 'آمن ومضمون', body: 'الالتزام الكامل بمعايير النظافة والسلامة ببلدية دبي.' }
                ],
                cta: 'خطط لتجهيز الإفطار'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور متطورة في دبي',
                subtitle: 'صالات حميمية لتناول الطعام في وقت متأخر من الليل',
                intro: 'السحور يدور حول الأجواء. نحن ننشئ بيئات صالة ذات إضاءة منخفضة وراحة عالية لساعات ما قبل الفجر في دبي.',
                mainBody: 'تعد خيام السحور الخاصة بنا في دبي المعيار الذهبي لشراكات الفنادق الفاخرة والعقارات الخاصة. نحن ننتقل من الجلوس التقليدي نحو أثاث الصالات الحديث، وأنظمة الصوت والصورة المتكاملة، والتهوية المخصصة للمناطق المسموح فيها بالشيشة.',
                features: [
                    { title: 'جماليات الصالة', body: 'أرائك مخملية فاخرة، طاولات رخامية، وديكور عربي معاصر.' },
                    { title: 'الصوت والإضاءة', body: 'إضاءة ذكية قابلة للتخصيص وأنظمة صوت لضبط الحالة الليلية المثالية.' },
                    { title: 'خبراء التهوية', body: 'أنظمة استخراج دخان معتمدة لصالات السحور بما يتوافق مع الدفاع المدني بدبي.' }
                ],
                cta: 'صمم صالة السحور'
            }
        }
    }
};
