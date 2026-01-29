export interface SEOContent {
    title: string;
    subtitle: string;
    intro: string;
    mainBody: string;
    features: { title: string; body: string }[];
    cta: string;
}

export interface CityOverview {
    title: string;
    subtitle: string;
    intro: string;
    whyUs: string;
    audiences: {
        title: string;
        description: string;
        features: string[];
    }[];
    compliance: {
        title: string;
        body: string;
    };
    areas: string[];
    cta: string;
}

export const cityOverviews: Record<string, Record<string, CityOverview>> = {
    en: {
        dubai: {
            title: 'Ramadan Tent & Majlis Rental in Dubai',
            subtitle: 'Three Decades of Building Dubai\'s Most Memorable Iftar Experiences',
            intro: 'Ramadan 2026 runs from February 19th through mid-March. If you\'re reading this, you\'re already ahead of the curve. In Dubai, the best tent suppliers are booked out by January. The good news? We\'re still taking orders—and we\'ve been doing this longer than most of our competitors have been in business.',
            whyUs: 'Here\'s the thing about the Dubai Ramadan tent market: you can pay AED 300+ per head at a hotel tent, or you can work with someone who actually understands your budget. We\'ve spent 30 years building relationships with Dubai Municipality, Civil Defense, and IACAD. We know the permit process inside out. We know which neighborhoods need extra wind anchoring. We know that February humidity in Dubai Marina is different from February humidity in Al Quoz. This isn\'t our first Ramadan—it\'s our thirtieth.',
            audiences: [
                {
                    title: 'Corporate & HR Teams',
                    description: 'Your staff Iftar shouldn\'t break the department budget. We work with companies across DIFC, Business Bay, and Dubai Investment Park to create setups that look impressive without the inflated price tag. Full branding integration, proper seating flow, and yes—we handle the permits.',
                    features: ['Custom branded environments', 'Scalable from 50 to 500+ guests', 'Complete permit management', '15-20% below market rates']
                },
                {
                    title: 'Hotels & Restaurants',
                    description: 'Q1 is your biggest revenue quarter. You need capacity expansion that matches your brand standards without disrupting operations. We\'ve partnered with properties across Palm Jumeirah, JBR, and Downtown for over two decades. Quick install. Quick removal. Zero drama.',
                    features: ['Seamless brand integration', 'Climate-controlled extensions', 'ADAFSA-compliant food service zones', 'Minimal operational disruption']
                },
                {
                    title: 'Families & Private Gatherings',
                    description: 'A home Majlis is the heart of Ramadan. Whether you\'re in a Jumeirah villa or an apartment in Al Barsha, we build intimate setups that feel like an extension of your living room. Traditional floor seating, proper climate control, and pricing that doesn\'t assume you\'re a hotel.',
                    features: ['Setups from 20 to 100 guests', 'Traditional Majlis interiors', 'Full delivery and installation', 'Flexible rental terms']
                }
            ],
            compliance: {
                title: 'Dubai Permits: We Handle Everything',
                body: 'Setting up an Iftar tent without proper approvals can cost you up to AED 500,000 in fines. That\'s not a typo. Dubai Municipality, Civil Defense, and IACAD all have specific requirements for temporary structures. We\'ve navigated this process hundreds of times. Your permit paperwork, structural approvals, and safety certifications are all included in our service—no surprises, no extras.'
            },
            areas: ['Jumeirah', 'DIFC', 'Downtown Dubai', 'Dubai Marina', 'Business Bay', 'Al Barsha', 'Emirates Hills', 'Dubai Investment Park', 'Jebel Ali', 'Al Quoz', 'Palm Jumeirah', 'JBR'],
            cta: 'Get Your Dubai Quote'
        },
        'abu-dhabi': {
            title: 'Ramadan Tent & Majlis Rental in Abu Dhabi',
            subtitle: 'The Capital\'s Trusted Partner for Government, Corporate & Private Gatherings',
            intro: 'Abu Dhabi does Ramadan differently. This isn\'t about flash—it\'s about doing things properly. The capital expects a certain standard: structures that look like they belong, permits that are airtight, and vendors who understand protocol. We\'ve been serving Abu Dhabi for 30 years. We know how things work here.',
            whyUs: 'Look, you could book a spot at Emirates Palace for AED 400+ per head. Beautiful tent, no question. But if you need your own setup—at your ministry compound, your hotel terrace, or your family\'s private grounds—you need someone who actually builds these things. We\'ve worked with government entities across the capital for three decades. We understand VIP configurations, separate entrances, security considerations. We handle the DMT permits. We know that Abu Dhabi\'s coastal humidity in February requires different climate engineering than inland. And we deliver all of this at rates that won\'t trigger an audit.',
            audiences: [
                {
                    title: 'Government & Corporate',
                    description: 'Public sector budgets don\'t allow for Emirates Palace pricing, but your Iftar still needs to reflect the dignity of your institution. We build protocol-ready structures with VIP sections, proper Majlis Al Aali configurations, and discrete service areas. Full DMT compliance included—no last-minute permit scrambles.',
                    features: ['VIP and dignitary configurations', 'DMT permit management', 'Budget-conscious pricing', 'Rapid deployment teams']
                },
                {
                    title: 'Hotels & Restaurants',
                    description: 'Competing on the Corniche means your tent needs curb appeal. We build structures that draw eyes from the road—proper Arabic arches, heritage aesthetics, the kind of details that make people pull over. Climate-controlled, brand-integrated, and installed without disrupting your regular service.',
                    features: ['High curb-appeal facades', 'Heritage Arabic design elements', 'Chandelier and lighting rigging', 'Seamless brand integration']
                },
                {
                    title: 'Private & Family Majlis',
                    description: 'A home Majlis in Abu Dhabi often means covering a palace courtyard or villa garden—spaces that can run to 2,000 square meters. We handle palatial dimensions with seamless flooring, authentic Gahwa stations, deep-seating majlis furniture, and the kind of finishing that doesn\'t look temporary.',
                    features: ['Palatial scale (up to 2000 sqm)', 'Authentic Arabian furnishings', 'Traditional Gahwa & Mabkhara setups', 'Complete turnkey service']
                }
            ],
            compliance: {
                title: 'Abu Dhabi Permits: DMT & Safety Compliance',
                body: 'Abu Dhabi\'s Department of Municipalities and Transport has specific requirements for temporary structures—and they actually enforce them. Your tent needs to complement the capital\'s urban aesthetic, not look like a construction site. We\'ve navigated DMT approvals hundreds of times. Structural certifications, fire safety, aesthetic integration—it\'s all handled before we break ground.'
            },
            areas: ['Corniche', 'Khalifa City', 'Al Bateen', 'Al Mushrif', 'Saadiyat Island', 'Yas Island', 'Al Reem Island', 'Al Maryah Island', 'Mohammed Bin Zayed City', 'Al Shamkha', 'Masdar City', 'Al Raha'],
            cta: 'Get Your Abu Dhabi Quote'
        },
        sharjah: {
            title: 'Ramadan Tent & Majlis Rental in Sharjah',
            subtitle: 'Traditional Excellence in the Cultural Heart of the UAE',
            intro: 'Sharjah is where traditions are most deeply rooted. It\'s the UAE\'s cultural capital, and during Ramadan, the focus is on community, family, and heritage. We don\'t just bring tents to Sharjah—we bring structures that respect the Emirate\'s unique identity. Based in the SAIF Zone, we are Sharjah\'s local choice.',
            whyUs: 'Being based in Sharjah gives us a home-court advantage. We don\'t charge "out-of-town" mobilization fees because we are already here. We know the specific requirements of the Sharjah Municipality and Civil Defense. We understand that a Majlis in Al Rahmaniya has different community expectations than a corporate Iftar in University City. With 30 years of local presence, we provide the fastest response times and a level of cultural understanding that Dubai-centric companies simply can\'t match. We are the local experts, serving our own neighborhood.',
            audiences: [
                {
                    title: 'Community & Charity Organizations',
                    description: 'Sharjah is known for its massive community Iftars. We work with local charities and mosques to provide high-capacity, safe, and air-conditioned environments for thousands of guests. Our structures are built for heavy rotation and easy maintenance, ensuring dignity for every guest.',
                    features: ['High-capacity modular designs', 'Industrial-grade climate control', 'Sharjah Municipality compliance', 'Full-season technical support']
                },
                {
                    title: 'University & Educational Blocks',
                    description: 'Hosting University City\'s student and faculty Iftars requires a blend of modern efficiency and traditional hospitality. We build sophisticated structures that cater to Sharjah\'s academic community, featuring integrated AV for lectures and comfortable lounge areas.',
                    features: ['Integrated AV & lighting', 'Modern interior finishing', 'Scalable for large student groups', 'Rapid setup in University City']
                },
                {
                    title: 'Family & Residential Majlis',
                    description: 'In residential areas like Al Khan, Al Suyoh, and Al Tai, the Majlis is the center of the household. We create private, heritage-focused spaces for Sharjah families that feel like a permanent part of the home. Authentic fabrics, traditional seating, and complete privacy.',
                    features: ['Heritage-focused interiors', 'Traditional Sadu patterns', 'Privacy-first layouts', 'Quiet AC systems for homes']
                }
            ],
            compliance: {
                title: 'Sharjah Regulations: Local Expertise',
                body: 'Sharjah Municipality and Sharjah Civil Defense have strict seasonal guidelines. From fire-retardant fabric certifications to structural stability checks in wind-prone areas like the waterfront, we handle every detail. Being locally based means we can resolve any inspection issues within the hour, not the next day.'
            },
            areas: ['Al Majaz', 'University City', 'Al Rahmaniya', 'Al Khan', 'Al Suyoh', 'Muwaileh', 'Al Tai', 'Al Nahda', 'Sharjah Waterfront', 'SAIF Zone'],
            cta: 'Get Your Sharjah Quote'
        },
        ajman: {
            title: 'Ramadan Tent & Majlis Rental in Ajman',
            subtitle: 'Premium quality for Ajman\'s growing residential and business hub',
            intro: 'Ajman is known for its close-knit community and traditional hospitality. As the Emirate grows, so does the demand for professional event infrastructure. We provide 5-star quality tent solutions tailored for Ajman\'s residential centers and bustling business districts.',
            whyUs: 'We\'ve been serving Ajman for three decades, understanding that while it\'s close to Sharjah and Dubai, it has its own distinct market character. We handle all Ajman Municipality and Civil Defense permits, ensuring your seasonal setup is safe and compliant. Our Ajman teams focus on rapid mobilization and localized support, providing high-end aesthetics at rates that respect the Emirate\'s commercial reality.',
            audiences: [
                {
                    title: 'Residential & Family',
                    description: 'From Al Rawda to Al Mowaihat, the private Majlis is the center of Ramadan life. We create beautiful, climate-controlled environments for families that prioritize privacy and heritage.',
                    features: ['Privacy-focused layouts', 'Traditional Majlis interiors', 'Quick home installation', 'Advanced cooling systems']
                },
                {
                    title: 'Corporate & Hospitality',
                    description: 'Ajman\'s hotels and businesses require capacity expansion that matches their brand standards. We build seamless extensions for Iftars and Suhoors on the Corniche and within the commercial centers.',
                    features: ['Seamless brand integration', 'Industrial-grade AC', 'Scalable modular designs', 'Full permit management']
                }
            ],
            compliance: {
                title: 'Ajman Regulations: Complete Support',
                body: 'We handle the entire approval process with Ajman Municipality and Civil Defense. From structural inspections to fire safety certifications, we ensure your tent is legally compliant and safe for all guests.'
            },
            areas: ['Al Jurf', 'Al Rawda', 'Ajman Corniche', 'Al Tallah', 'Al Mowaihat', 'Al Hamidiya', 'Al Helioma'],
            cta: 'Get Your Ajman Quote'
        },
        'ras-al-khaimah': {
            title: 'Ramadan Tent & Majlis Rental in Ras Al Khaimah',
            subtitle: 'Iconic setups for Al Marjan Island and the Northern Coast',
            intro: 'Ras Al Khaimah\'s Ramadan season combines mountain majesty with coastal luxury. As a premier tourism destination, RAK requires temporary structures that meet international hospitality standards.',
            whyUs: 'Serving RAK requires understanding its unique environmental conditions—from coastal humidity on Al Marjan Island to mountain wind loads further inland. We bring 30 years of engineering expertise to the Northern Emirate, ensuring your tent is safe, stable, and stunningly beautiful. We handle all RAK Civil Defense and Municipality approvals, allowing resort managers and private owners to focus on their guests.',
            audiences: [
                {
                    title: 'Resorts & Hotels',
                    description: 'Q1 is a peak tourism season for RAK. We provide high-end, brand-integrated Iftar and Suhoor lounges for resorts on Al Marjan Island and the Al Hamra area.',
                    features: ['Luxury interior finishing', 'High-capacity cooling', 'Sea-front structural stability', 'Seamless guest flow']
                },
                {
                    title: 'Private Estates & Palaces',
                    description: 'RAK\'s private residences often require large-scale Majlis setups for hundreds of guests. We specialize in palatial dimensions with authentic Emirati heritage aesthetics.',
                    features: ['Authentic Arabian decor', 'Large-span structures', 'VIP dignitary sections', 'Full turnkey service']
                }
            ],
            compliance: {
                title: 'RAK Compliance: Safety & Aesthetics',
                body: 'We coordinate with RAK Municipality and Civil Defense to ensure all seasonal structures meet the Emirate\'s safety and urban aesthetic codes. Certified fire-retardant materials and structural engineering come standard.'
            },
            areas: ['Al Marjan Island', 'Al Hamra', 'Khuzam', 'Al Dhait', 'Mina Al Arab', 'RAK City', 'Al Nakheel'],
            cta: 'Get Your RAK Quote'
        },
        fujairah: {
            title: 'Ramadan Tent & Majlis Rental in Fujairah',
            subtitle: 'Rugged and reliable setups for the East Coast',
            intro: 'Fujairah\'s unique geography requires specialized tent expertise. Between the Hajar Mountains and the Indian Ocean, temporary structures must be engineered for both humidity and high wind loads.',
            whyUs: 'We are one of the few providers with specialized experience in the East Coast\'s environmental conditions. Whether it\'s a coastal Iftar in Dibba or a corporate setup in Fujairah City, our structures are built to perform. We handle all Fujairah Municipality and Civil Defense paperwork, providing a stress-free experience for the Emirate\'s residents and businesses.',
            audiences: [
                {
                    title: 'Corporate & Industrial',
                    description: 'Serving Fujairah\'s massive industrial and maritime workforce requires high-capacity, safe, and efficient Iftar environments. We build for scale and durability.',
                    features: ['Industrial-scale cooling', 'Reinforced structural stability', 'High-volume safety planning', 'Rapid deployment']
                },
                {
                    title: 'East Coast Families',
                    description: 'Honoring Ramadan traditions in Fujairah means a bespoke private Majlis. We bring 30 years of traditional design expertise to homes across the Emirate.',
                    features: ['Traditional heritage interiors', 'Mountain-wind reinforcement', 'Quick villa installation', 'Authentic Arabian finishing']
                }
            ],
            compliance: {
                title: 'Fujairah Permits: Local Knowledge',
                body: 'Fujairah\'s safety regulations are practical and strict. We ensure every tent meets the local Civil Defense fire codes and Municipality structural guidelines for the East Coast terrain.'
            },
            areas: ['Fujairah City', 'Dibba', 'Al Faseel', 'Merbeih', 'Al Badiyah', 'Qidfa'],
            cta: 'Get Your Fujairah Quote'
        },
        'umm-al-quwain': {
            title: 'Ramadan Tent & Majlis Rental in Umm Al Quwain',
            subtitle: 'Community-focused setups for the coastal Emirate',
            intro: 'Umm Al Quwain\'s Ramadan traditions are deeply rooted in heritage. We provide the professional infrastructure to support UAQ\'s legendary hospitality and community spirit.',
            whyUs: 'UAQ residents value quality and reliability. We\'ve been the trusted partner for UAQ families and businesses for three decades, providing 5-star tent solutions that respect the Emirate\'s quiet, traditional character. We handle all UAQ Civil Defense and Municipality permits, ensuring your Ramadan setup is handled with professional care from start to finish.',
            audiences: [
                {
                    title: 'Community Hospitality',
                    description: 'UAQ is known for its strong sense of community. We provide safe, air-conditioned spaces for community Iftars and charitable gatherings across the Emirate.',
                    features: ['High-capacity modular designs', 'Efficient food-service layouts', 'Full permit management', 'Cost-effective solutions']
                },
                {
                    title: 'Residential Majlis',
                    description: 'For private homes in Al Salamah and beyond, we create heritage-focused Majlis spaces that feel like a natural extension of the family home.',
                    features: ['Authentic Arabian decor', 'Quick and clean installation', 'Family-first privacy', 'Whisper-quiet climate control']
                }
            ],
            compliance: {
                title: 'UAQ Compliance: Local Expertise',
                body: 'We ensure full compliance with UAQ Municipality and Civil Defense codes. From seasonal tent permits to electrical safety certifications, we handle every detail for a worry-free Ramadan.'
            },
            areas: ['Al Salamah', 'Al Ramlah', 'Al Raudah', 'UAQ Waterfront', 'Al Maqtaa'],
            cta: 'Get Your UAQ Quote'
        }
    },
    ar: {
        dubai: {
            title: 'تأجير خيام ومجالس رمضان في دبي',
            subtitle: 'ثلاثة عقود من بناء أفضل تجارب الإفطار في دبي',
            intro: 'رمضان 2026 يبدأ من 19 فبراير حتى منتصف مارس. إذا كنت تقرأ هذا، فأنت متقدم بخطوة. في دبي، يتم حجز أفضل موردي الخيام بحلول يناير. الخبر السار؟ لا نزال نقبل الطلبات—ونحن نعمل في هذا المجال منذ فترة أطول من معظم منافسينا.',
            whyUs: 'الحقيقة عن سوق خيام رمضان في دبي: يمكنك دفع أكثر من 300 درهم للشخص في خيمة فندق، أو يمكنك العمل مع من يفهم ميزانيتك. قضينا 30 عاماً في بناء علاقات مع بلدية دبي والدفاع المدني وIACAD. نعرف عملية التصاريح من الداخل. نعرف الأحياء التي تحتاج تثبيتاً إضافياً ضد الرياح. نعرف أن رطوبة فبراير في مرسى دبي مختلفة عن القوز. هذا ليس رمضاننا الأول—إنه الثلاثون.',
            audiences: [
                {
                    title: 'الشركات وفرق الموارد البشرية',
                    description: 'إفطار موظفيك لا يجب أن يستنزف ميزانية القسم. نعمل مع شركات في DIFC وبزنس باي ومجمع دبي للاستثمار لإنشاء تجهيزات مبهرة بدون أسعار مبالغ فيها. تكامل كامل للعلامة التجارية، تدفق جلوس مناسب، ونعم—نتولى التصاريح.',
                    features: ['بيئات مخصصة بعلامتك التجارية', 'قابلة للتوسع من 50 إلى 500+ ضيف', 'إدارة تصاريح كاملة', '15-20% أقل من أسعار السوق']
                },
                {
                    title: 'الفنادق والمطاعم',
                    description: 'الربع الأول هو أكبر ربع إيراداتك. تحتاج توسعة سعة تتناسب مع معايير علامتك التجارية دون تعطيل العمليات. شراكاتنا مع منشآت في نخلة جميرا وJBR وداون تاون تمتد لأكثر من عقدين. تركيب سريع. إزالة سريعة. بدون مشاكل.',
                    features: ['تكامل سلس مع العلامة التجارية', 'توسعات مكيفة', 'مناطق خدمة طعام متوافقة مع ADAFSA', 'أقل تأثير على العمليات']
                },
                {
                    title: 'العائلات والتجمعات الخاصة',
                    description: 'المجلس المنزلي هو قلب رمضان. سواء كنت في فيلا بجميرا أو شقة في البرشاء، نبني تجهيزات حميمية تشعرك بأنها امتداد لغرفة معيشتك. جلسات أرضية تقليدية، تحكم مناسب في المناخ، وأسعار لا تفترض أنك فندق.',
                    features: ['تجهيزات من 20 إلى 100 ضيف', 'تصاميم مجالس تقليدية', 'توصيل وتركيب كامل', 'شروط إيجار مرنة']
                }
            ],
            compliance: {
                title: 'تصاريح دبي: نتولى كل شيء',
                body: 'إقامة خيمة إفطار بدون الموافقات المناسبة قد يكلفك حتى 500,000 درهم غرامات. هذا ليس خطأ مطبعي. بلدية دبي والدفاع المدني وIACAD لديهم متطلبات محددة للهياكل المؤقتة. تعاملنا مع هذه العملية مئات المرات. أوراق التصاريح والموافقات الهيكلية وشهادات السلامة—كلها مشمولة في خدمتنا. بدون مفاجآت، بدون إضافات.'
            },
            areas: ['جميرا', 'DIFC', 'داون تاون دبي', 'مرسى دبي', 'بزنس باي', 'البرشاء', 'تلال الإمارات', 'مجمع دبي للاستثمار', 'جبل علي', 'القوز', 'نخلة جميرا', 'JBR'],
            cta: 'احصل على عرض أسعار دبي'
        },
        'abu-dhabi': {
            title: 'تأجير خيام ومجالس رمضان في أبوظبي',
            subtitle: 'الشريك الموثوق في العاصمة للجهات الحكومية والشركات والتجمعات الخاصة',
            intro: 'أبوظبي تحتفل برمضان بطريقة مختلفة. الأمر لا يتعلق بالبهرجة—بل بإنجاز الأمور بالشكل الصحيح. العاصمة تتوقع معياراً معيناً: هياكل تبدو وكأنها تنتمي للمكان، تصاريح محكمة، ومورّدون يفهمون البروتوكول. نخدم أبوظبي منذ 30 عاماً. نحن نعرف كيف تسير الأمور هنا.',
            whyUs: 'نعم، يمكنك حجز مكان في قصر الإمارات بأكثر من 400 درهم للشخص. خيمة جميلة، بلا شك. لكن إذا كنت تحتاج تجهيزاً خاصاً بك—في مقر وزارتك، أو تراس فندقك، أو أرض عائلتك الخاصة—فأنت تحتاج من يبني هذه الأشياء فعلاً. عملنا مع جهات حكومية في العاصمة لثلاثة عقود. نفهم تجهيزات كبار الشخصيات، المداخل المنفصلة، الاعتبارات الأمنية. نتولى تصاريح دائرة البلديات والنقل. ونقدم كل هذا بأسعار لن تثير تساؤلات.',
            audiences: [
                {
                    title: 'الجهات الحكومية والشركات',
                    description: 'ميزانيات القطاع العام لا تسمح بأسعار قصر الإمارات، لكن إفطارك يجب أن يعكس هيبة مؤسستك. نبني هياكل جاهزة للبروتوكول مع أقسام لكبار الشخصيات، وتجهيزات مجلس الأعلى المناسبة، ومناطق خدمة منفصلة. امتثال كامل لدائرة البلديات والنقل—بدون مفاجآت في اللحظة الأخيرة.',
                    features: ['تجهيزات لكبار الشخصيات', 'إدارة تصاريح DMT', 'أسعار تراعي الميزانية', 'فرق نشر سريعة']
                },
                {
                    title: 'الفنادق والمطاعم',
                    description: 'المنافسة على الكورنيش تعني أن خيمتك تحتاج جاذبية من الشارع. نبني هياكل تلفت الأنظار من الطريق—أقواس عربية أصيلة، جماليات تراثية، تفاصيل تجعل الناس يتوقفون. مكيّفة، متكاملة مع علامتك التجارية، ومركّبة دون تعطيل خدمتك.',
                    features: ['واجهات عالية الجاذبية', 'عناصر تصميم عربي تراثي', 'تركيب ثريات وإضاءة', 'تكامل سلس مع العلامة التجارية']
                },
                {
                    title: 'المجالس الخاصة والعائلية',
                    description: 'المجلس المنزلي في أبوظبي غالباً يعني تغطية فناء قصر أو حديقة فيلا—مساحات قد تصل إلى 2000 متر مربع. نتعامل مع الأبعاد الضخمة بأرضيات متصلة، ومحطات قهوة عربية أصيلة، وأثاث مجالس عميق، وتشطيبات لا تبدو مؤقتة.',
                    features: ['مساحات ضخمة (حتى 2000 متر مربع)', 'مفروشات عربية أصيلة', 'تجهيزات قهوة ومبخرة تقليدية', 'خدمة شاملة متكاملة']
                }
            ],
            compliance: {
                title: 'تصاريح أبوظبي: امتثال DMT والسلامة',
                body: 'دائرة البلديات والنقل في أبوظبي لديها متطلبات محددة للهياكل المؤقتة—وهم يطبقونها فعلاً. خيمتك يجب أن تكمل الجمالية الحضرية للعاصمة، لا أن تبدو كموقع بناء. تعاملنا مع موافقات DMT مئات المرات. الشهادات الهيكلية، السلامة من الحريق، التكامل الجمالي—كله مُنجز قبل أن نبدأ العمل.'
            },
            areas: ['الكورنيش', 'مدينة خليفة', 'البطين', 'المشرف', 'جزيرة السعديات', 'جزيرة ياس', 'جزيرة الريم', 'جزيرة الماريه', 'مدينة محمد بن زايد', 'الشامخة', 'مدينة مصدر', 'الراحة'],
            cta: 'احصل على عرض أسعار أبوظبي'
        },
        sharjah: {
            title: 'تأجير خيام ومجالس رمضان في الشارقة',
            subtitle: 'التميز التقليدي في القلب الثقافي لدولة الإمارات',
            intro: 'الشارقة هي المكان الذي تتجذر فيه التقاليد بعمق. إنها العاصمة الثقافية لدولة الإمارات، وخلال شهر رمضان، ينصب التركيز على المجتمع والأسرة والتراث. نحن لا نجلب الخيام للشارقة فحسب، بل نجلب هياكل تحترم الهوية الفريدة للإمارة. يقع مقرنا في المنطقة الحرة لمطار الشارقة الدولي (SAIF Zone)، فنحن الخيار المحلي الأول.',
            whyUs: 'وجودنا في الشارقة يمنحنا ميزة تنافسية محلية. نحن لا نفرض رسوم نقل "خارج المدينة" لأننا متواجدون هنا بالفعل. نحن نعرف المتطلبات المحددة لبلدية الشارقة والدفاع المدني. ندرك أن لمجلس في الرحمانية تطلعات مجتمعية مختلفة عن إفطار الشركات في المدينة الجامعية. مع 30 عاماً من الوجود المحلي، نقدم أسرع أوقات الاستجابة ومستوى من الفهم الثقافي الذي لا تستطيع الشركات المتمركزة في دبي مضاهاته. نحن الخبراء المحليون، نخدم منطقتنا.',
            audiences: [
                {
                    title: 'المؤسسات المجتمعية والخيرية',
                    description: 'تشتهر الشارقة بإفطاراتها المجتمعية الضخمة. نعمل مع الجمعيات الخيرية والمساجد المحلية لتوفير بيئات عالية السعة وآمنة ومكيفة لآلاف الضيوف. هياكلنا مصممة للاستخدام المكثف والصيانة السهلة، مما يضمن الكرامة لكل ضيف.',
                    features: ['تصاميم وحدات عالية السعة', 'تحكم في المناخ بمستوى صناعي', 'امتثال لبلدية الشارقة', 'دعم فني طوال الموسم']
                },
                {
                    title: 'القطاعات الجامعية والتعليمية',
                    description: 'تتطلب استضافة إفطارات الطلاب وأعضاء التدريس في المدينة الجامعية مزيجاً من الكفاءة الحديثة والضيافة التقليدية. نبني هياكل متطورة تلبي احتياجات المجتمع الأكاديمي في الشارقة، وتتميز بأنظمة صوت وصورة متكاملة للمحاضرات ومناطق جلوس مريحة.',
                    features: ['أنظمة صوت وصورة وإضاءة متكاملة', 'تشطيبات داخلية حديثة', 'قابلة للتوسع لمجموعات الطلاب الكبيرة', 'تركيب سريع في المدينة الجامعية']
                },
                {
                    title: 'المجالس العائلية والسكنية',
                    description: 'في المناطق السكنية مثل الخان والسيوح والطي، يعتبر المجلس مركز المنزل. نحن ننشئ مساحات خاصة تركز على التراث لعائلات الشارقة تشعر وكأنها جزء دائم من المنزل. أقمشة أصيلة، جلسات تقليدية، وخصوصية تامة.',
                    features: ['تصاميم داخلية تراثية', 'أنماط "سدو" تقليدية', 'تخطيط يراعي الخصوصية', 'أنظمة تكييف هادئة للمنازل']
                }
            ],
            compliance: {
                title: 'لوائح الشارقة: خبرة محلية',
                body: 'لدى بلدية الشارقة والدفاع المدني بالشارقة إرشادات موسمية صارمة. من شهادات الأقمشة المقاومة للحريق إلى فحوصات الاستقرار الهيكلي في المناطق المعرضة للرياح مثل الواجهة البحرية، نحن نتولى كل التفاصيل. كوننا مقيمين محلياً يعني أنه يمكننا حل أي مشكلات تفتيش في غضون ساعة، وليس في اليوم التالي.'
            },
            areas: ['المجاز', 'المدينة الجامعية', 'الرحمانية', 'الخان', 'السيوح', 'مويلح', 'الطي', 'النهدة', 'واجهة الشارقة المائية', 'منطقة سيف زون'],
            cta: 'احصل على عرض أسعار الشارقة'
        },
        ajman: {
            title: 'تأجير خيام ومجالس رمضان في عجمان',
            subtitle: 'جودة ممتازة للمراكز السكنية والتجارية المتنامية في عجمان',
            intro: 'تشتهر عجمان بمجتمعها المتماسك وضيافتها التقليدية. مع نمو الإمارة، يزداد الطلب على البنية التحتية المهنية للفعاليات. نحن نقدم حلول خيام بجودة 5 نجوم مصممة للمراكز السكنية في عجمان والمناطق التجارية النابضة بالحياة.',
            whyUs: 'نحن نخدم عجمان منذ ثلاثة عقود، وندرك أنها رغم قربها من الشارقة ودبي، إلا أنها تتمتع بطابع سوق متميز خاص بها. نحن نتولى جميع تصاريح بلدية عجمان والدفاع المدني، مما يضمن أن يكون تجهيزك الموسمي آمناً ومتوافقاً. تركز فرقنا في عجمان على التعبئة السريعة والدعم المحلي، وتقديم جماليات راقية بأسعار تحترم الواقع التجاري للإمارة.',
            audiences: [
                {
                    title: 'القطاع السكني والعائلي',
                    description: 'من الروضة إلى المويهات، يعد المجلس الخاص مركز الحياة الرمضانية. نحن ننشئ بيئات جميلة ومكيفة للعائلات تعطي الأولوية للخصوصية والتراث.',
                    features: ['تخطيطات تركز على الخصوصية', 'تصاميم داخلية للمجالس التقليدية', 'تركيب منزلي سريع', 'أنظمة تكييف متطورة']
                },
                {
                    title: 'الشركات والضيافة',
                    description: 'تتطلب فنادق وشركات عجمان توسعة في السعة تتناسب مع معايير علامتها التجارية. نبني توسعات سلسة للإفطار والسحور على الكورنيش وضمن المراكز التجارية.',
                    features: ['تكامل سلس مع العلامة التجارية', 'تكييف بمستوى صناعي', 'تصاميم وحدات قابلة للتوسع', 'إدارة كاملة للتصاريح']
                }
            ],
            compliance: {
                title: 'لوائح عجمان: دعم كامل',
                body: 'نحن نتولى عملية الموافقة الكاملة مع بلدية عجمان والدفاع المدني. من عمليات التفتيش الهيكلي إلى شهادات السلامة من الحرائق، نضمن أن خيمتك متوافقة قانونياً وآمنة لجميع الضيوف.'
            },
            areas: ['الجرف', 'الروضة', 'كورنيش عجمان', 'التلة', 'المويهات', 'الحميدية', 'الحليو'],
            cta: 'احصل على عرض أسعار عجمان'
        },
        'ras-al-khaimah': {
            title: 'تأجير خيام ومجالس رمضان في رأس الخيمة',
            subtitle: 'تجهيزات أيقونية لجزيرة المرجان والساحل الشمالي',
            intro: 'تجمع أجواء رمضان في رأس الخيمة بين جلال الجبال وفخامة السواحل. وباعتبارها وجهة سياحية رائدة، تتطلب رأس الخيمة هياكل مؤقتة تلبي معايير الضيافة الدولية.',
            whyUs: 'تتطلب خدمة رأس الخيمة فهماً لظروفها البيئية الفريدة - من الرطوبة الساحلية في جزيرة المرجان إلى حمولات الرياح الجبلية في الداخل. نحن نقدم 30 عاماً من الخبرة الهندسية للإمارة الشمالية، مما يضمن أن خيمتك آمنة ومستقرة وجميلة بشكل مذهل. نحن نتولى جميع موافقات الدفاع المدني والبلدية في رأس الخيمة، مما يسمح لمديري المنتجعات والمالكين الخاصين بالتركيز على ضيوفهم.',
            audiences: [
                {
                    title: 'المنتجعات والفنادق',
                    description: 'الربع الأول هو ذروة الموسم السياحي في رأس الخيمة. نحن نوفر صالات إفطار وسحور فاخرة ومتكاملة مع العلامة التجارية للمنتجعات في جزيرة المرجان ومنطقة الحمراء.',
                    features: ['تشطيبات داخلية فاخرة', 'تكييف عالي السعة', 'استقرار هيكلي في مواجهة البحر', 'انسيابية سلسة للضيوف']
                },
                {
                    title: 'العقارات الخاصة والقصور',
                    description: 'تتطلب المساكن الخاصة في رأس الخيمة غالباً تجهيزات مجلس واسعة لمئات الضيوف. نحن متخصصون في الأبعاد الضخمة مع جماليات التراث الإماراتي الأصيل.',
                    features: ['ديكور عربي أصيل', 'هياكل ذات امتداد واسع', 'أقسام لكبار الشخصيات', 'خدمة شاملة متكاملة']
                }
            ],
            compliance: {
                title: 'امتثال رأس الخيمة: السلامة والجماليات',
                body: 'نحن ننسق مع بلدية رأس الخيمة والدفاع المدني لضمان تلبية جميع الهياكل الموسمية لأكواد السلامة والجمالية الحضرية للإمارة. المواد المعتمدة المقاومة للحريق والهندسة الهيكلية هي معايير قياسية لدينا.'
            },
            areas: ['جزيرة المرجان', 'الحمراء', 'خزام', 'الظيت', 'ميناء العرب', 'مدينة رأس الخيمة', 'النخيل'],
            cta: 'احصل على عرض أسعار رأس الخيمة'
        },
        fujairah: {
            title: 'تأجير خيام ومجالس رمضان في فجيرة',
            subtitle: 'تجهيزات قوية وموثوقة للساحل الشرقي',
            intro: 'تتطلب الجغرافيا الفريدة للفجيرة خبرة متخصصة في الخيام. فبين جبال الحجر والمحيط الهندي، يجب تصميم الهياكل المؤقتة لتتحمل الرطوبة وحمولات الرياح العالية.',
            whyUs: 'نحن من بين المزودين القلائل الذين يتمتعون بخبرة متخصصة في الظروف البيئية للساحل الشرقي. سواء كان إفطاراً ساحلياً في دبا أو تجهيزاً للشركات في مدينة الفجيرة، فإن هياكلنا مصممة للأداء العالي. نحن نتولى جميع الأوراق الخاصة ببلدية الفجيرة والدفاع المدني، مما يوفر تجربة خالية من التوتر لسكان وشركات الإمارة.',
            audiences: [
                {
                    title: 'قطاع الشركات والصناعة',
                    description: 'تتطلب خدمة القوى العاملة الصناعية والبحرية الضخمة في الفجيرة بيئات إفطار عالية السعة وآمنة وفعالة. نحن نبني من أجل الحجم والمتانة.',
                    features: ['تكييف بمستوى صناعي', 'استقرار هيكلي معزز', 'تخطيط سلامة للحجم الكبير', 'نشر سريع']
                },
                {
                    title: 'عائلات الساحل الشرقي',
                    description: 'تكريم تقاليد رمضان في الفجيرة يعني مجلساً خاصاً مصمماً حسب الطلب. نحن نضع 30 عاماً من الخبرة في التصميم التقليدي لخدمة المنازل في جميع أنحاء الإمارة.',
                    features: ['تصاميم داخلية تراثية تقليدية', 'تعزيز لمواجهة رياح الجبال', 'تركيب سريع في الفلل', 'تشطيبات عربية أصيلة']
                }
            ],
            compliance: {
                title: 'تصاريح الفجيرة: خبرة محلية',
                body: 'لوائح السلامة في الفجيرة عملية وصارمة. نضمن تلبية كل خيمة لأكواد الدفاع المدني المحلية للحرائق وإرشادات البلدية الهيكلية لتضاريس الساحل الشرقي.'
            },
            areas: ['مدينة الفجيرة', 'دبا', 'الفصيل', 'مربح', 'البدية', 'قدفع'],
            cta: 'احصل على عرض أسعار الفجيرة'
        },
        'umm-al-quwain': {
            title: 'تأجير خيام ومجالس رمضان في أم القيوين',
            subtitle: 'تجهيزات تركز على المجتمع للإمارة الساحلية',
            intro: 'تتجذر تقاليد رمضان في أم القيوين بعمق في التراث. نحن نوفر البنية التحتية المهنية لدعم كرم الضيافة وروح المجتمع الأسطورية في الإمارة.',
            whyUs: 'يقدر سكان أم القيوين الجودة والموثوقية. نحن الشريك الموثوق لعائلات وشركات أم القيوين لثلاثة عقود، ونقدم حلول خيام من فئة 5 نجوم تحترم الطابع التقليدي والهادئ للإمارة. نحن نتولى جميع تصاريح الدفاع المدني والبلدية في أم القيوين، مما يضمن التعامل مع تجهيز رمضان الخاص بك بعناية مهنية من البداية إلى النهاية.',
            audiences: [
                {
                    title: 'الضيافة المجتمعية',
                    description: 'تشتهر أم القيوين بحسها المجتمعي القوي. نحن نوفر مساحات آمنة ومكيفة لإفطارات المجتمع والتجمعات الخيرية في جميع أنحاء الإمارة.',
                    features: ['تصاميم وحدات عالية السعة', 'تخطيطات فعالة لخدمة الطعام', 'إدارة كاملة للتصاريح', 'حلول فعالة من حيث التكلفة']
                },
                {
                    title: 'المجالس السكنية',
                    description: 'للمنازل الخاصة في السلمة وما وراءها، ننشئ مساحات مجلس تركز على التراث وتشعر وكأنها امتداد طبيعي لمنزل العائلة.',
                    features: ['ديكور عربي أصيل', 'تركيب سريع ونظيف', 'خصوصية عائلية أولاً', 'تكييف هادئ للغاية']
                }
            ],
            compliance: {
                title: 'امتثال أم القيوين: خبرة محلية',
                body: 'نضمن الامتثال الكامل لأكواد بلدية أم القيوين والدفاع المدني. من تصاريح الخيام الموسمية إلى شهادات السلامة الكهربائية، نحن نتولى كل التفاصيل من أجل رمضان خالي من القلق.'
            },
            areas: ['السلمة', 'الرملة', 'الروضة', 'واجهة أم القيوين المائية', 'المقطع'],
            cta: 'احصل على عرض أسعار أم القيوين'
        }
    }
};

export const cityContent: Record<string, Record<string, Record<string, SEOContent>>> = {
    en: {
        dubai: {
            'ramadan-tent-rental': {
                title: 'Ramadan Tent Rental Dubai 2026',
                subtitle: 'Skip the AED 300/head hotel markup. Get the same quality for less.',
                intro: 'Here\'s the reality: Dubai\'s top hotels charge AED 295-470 per person for their Ramadan tent experiences. Beautiful? Yes. Necessary? Not if you have your own space. We build the same caliber of structure—at your location, on your terms, for a fraction of the cost.',
                mainBody: 'We\'ve been doing this in Dubai since before most of our competitors opened their doors. Thirty years of navigating Dubai Municipality permits, Civil Defense approvals, and IACAD requirements. We know that a tent in Dubai Marina needs different wind anchoring than one in Al Quoz. We know that February humidity on the coast is brutal on cheap materials. And we know that getting fined AED 500,000 for an unapproved structure isn\'t something you want to explain to your CFO. Every permit, every safety certification, every structural approval—handled before we start.',
                features: [
                    { title: 'Full Permit Package', body: 'Dubai Municipality, Civil Defense, IACAD—we handle the paperwork maze so you don\'t have to. Zero surprises on installation day.' },
                    { title: 'Climate Engineering', body: 'February in Dubai is humid. Our AC systems are calculated for your specific tent volume and guest count—21°C guaranteed, even at full capacity.' },
                    { title: 'Location Expertise', body: 'Jumeirah villas, DIFC terraces, DIP industrial sites, JBR hotel extensions—we\'ve installed in every corner of Dubai. We know what works where.' }
                ],
                cta: 'Get Your Custom Quote'
            },
            'majlis-tent-rental': {
                title: 'Private Majlis Tent Rental in Dubai',
                subtitle: 'Your home. Your guests. Your traditions—without the hotel middleman.',
                intro: 'A Majlis isn\'t just seating—it\'s where Ramadan actually happens. The late-night conversations, the family gatherings, the moments that matter. We build private Majlis spaces that feel permanent, not like you rented something.',
                mainBody: 'Most "Majlis rentals" in Dubai are wedding tent companies who swap the white draping for some cushions. That\'s not what we do. We\'ve spent 30 years understanding the difference between a generic tent and an authentic Majlis. The low-seating configurations. The fabric layering that actually insulates. The lighting that sets a mood without being theatrical. Whether you\'re working with a tight courtyard in Jumeirah or a sprawling garden in Emirates Hills, we design around your space—not the other way around. And yes, we handle the permits, because your home still needs Civil Defense approval for a temporary structure.',
                features: [
                    { title: 'Authentic Interiors', body: 'Custom floor majlis, traditional fabric selections, proper Sadu patterns—details that matter to people who know the difference.' },
                    { title: 'Privacy by Design', body: 'Separate entrances, sight-line planning, acoustic layering. Your family gathering stays private.' },
                    { title: 'Flexible Sizing', body: 'From intimate 20-person setups to 100+ guest configurations. We scale to your actual guest list, not a package tier.' }
                ],
                cta: 'Design Your Majlis'
            },
            'iftar-tent-rental': {
                title: 'Corporate Iftar Tent Rental Dubai',
                subtitle: 'Your staff Iftar shouldn\'t cost more than quarterly bonuses.',
                intro: 'Corporate Iftars in Dubai have two options: book a hotel at AED 250+ per head, or build your own. If you have the space—your office grounds, a parking area, a corporate campus—we can give you the same experience at 15-25% less.',
                mainBody: 'We work with companies across DIFC, Business Bay, Dubai Investment Park, and Jebel Ali every Ramadan season. The requirements are always the same: look impressive, feed a lot of people efficiently, stay within budget. Our Iftar structures are designed for flow—buffet lines that don\'t create bottlenecks, seating zones that fill and empty smoothly, prayer areas positioned correctly. We handle the Dubai Municipality food service approvals, the Civil Defense safety certifications, and the IACAD permits. Your facilities team doesn\'t need to become permit experts for one month.',
                features: [
                    { title: 'Operational Flow', body: 'Buffet stations, seating zones, prayer areas, service corridors—designed so 500 people can eat without chaos.' },
                    { title: 'Brand Integration', body: 'Custom flooring, subtle signage, lighting in your corporate colors. It\'s your event, not a generic rental.' },
                    { title: 'Full Compliance', body: 'IACAD permits, Municipality hygiene standards, Civil Defense safety—all included. One vendor, zero compliance headaches.' }
                ],
                cta: 'Plan Your Corporate Iftar'
            },
            'suhoor-tent-rental': {
                title: 'Suhoor Tent & Lounge Setup Dubai',
                subtitle: 'The 2 AM crowd needs different energy. We build for that.',
                intro: 'Suhoor isn\'t Iftar with different timing. It\'s a completely different vibe—lower lights, lounge seating, longer stays. Most tent companies don\'t understand this. We do.',
                mainBody: 'We\'ve partnered with hotels on Palm Jumeirah, JBR, and DIFC for over two decades on their Suhoor offerings. The requirements are specific: modern lounge furniture instead of traditional seating, integrated AV for ambient music, proper ventilation for shisha-permissible zones (DCD-compliant, obviously). Smart lighting systems that can shift mood throughout the night. Acoustic considerations because your neighbors exist. This isn\'t a daytime tent with the lights dimmed—it\'s purpose-built for Dubai\'s late-night Ramadan culture.',
                features: [
                    { title: 'Lounge Configuration', body: 'Velvet sofas, low tables, contemporary Arabic aesthetic. Designed for guests who stay until Fajr.' },
                    { title: 'Shisha Ventilation', body: 'Certified smoke extraction systems. Fresh air flow even at peak capacity. Full DCD compliance.' },
                    { title: 'Smart Ambiance', body: 'Programmable RGB lighting, integrated sound systems, dimmable zones. The mood shifts with the night.' }
                ],
                cta: 'Design Your Suhoor Space'
            },
            'sadu-tent-rental': {
                title: 'Authentic Sadu & Heritage Tent Rental Dubai',
                subtitle: 'Celebrate Emirati Culture with Premium Heritage-Themed Structures',
                intro: 'Connect with the roots of the Emirates through our authentic Sadu-themed tents. Perfect for cultural events, private Majlis setups, or heritage-themed Ramadan gatherings in Dubai.',
                mainBody: 'Our Sadu tents are more than just temporary shelters; they are immersive cultural experiences. We combine traditional Bedouin weaving patterns (Sadu) with modern, high-performance structured tents. This allows you to enjoy the authentic look and feel of a heritage Majlis while benefiting from modern climate control and structural safety. For 30 years, we have been Dubai\'s preferred partner for premium heritage setups that resonate with both locals and international guests who appreciate Emirati culture.',
                features: [
                    { title: 'Genuine Sadu Patterns', body: 'High-quality authentic weaving patterns that represent the true artistic heritage of the UAE Bedouin culture.' },
                    { title: 'Heritage Aesthetics', body: 'Carefully curated wood accents, traditional floor seating, and cultural props that complete the authentic experience.' },
                    { title: 'Modern Stability', body: 'Traditional looks backed by modern German-engineered structures that can withstand UAE wind loads and maintain perfect cooling.' }
                ],
                cta: 'Inquire About Sadu Tents'
            }
        },
        'abu-dhabi': {
            'ramadan-tent-rental': {
                title: 'Ramadan Tent Rental Abu Dhabi 2026',
                subtitle: 'Emirates Palace quality without Emirates Palace pricing.',
                intro: 'Abu Dhabi sets the bar high. The Emirates Palace tent is stunning—at AED 400+ per person. But if you need your own structure at your own location, you need someone who builds to that standard without the markup.',
                mainBody: 'The capital\'s tent market is split between ultra-premium hotel venues and budget operators who cut corners on safety. We sit in the middle: the structural quality and aesthetic polish that Abu Dhabi expects, at prices that work for government budgets, corporate events, and private families. We\'ve been navigating DMT permits for 30 years. We understand that Abu Dhabi requires structures that integrate with the urban landscape—your tent can\'t look like a construction site on the Corniche. Every installation meets Department of Municipalities and Transport standards, Civil Defense requirements, and the unwritten aesthetic expectations of the capital.',
                features: [
                    { title: 'DMT Compliance', body: 'Abu Dhabi\'s permit process is strict. We handle structural approvals, safety certifications, and aesthetic reviews—all before installation.' },
                    { title: 'Capital Aesthetics', body: 'Earthy tones, classical Arabic arches, heritage patterns. Structures that look like they belong in Abu Dhabi, not imported from Dubai.' },
                    { title: 'Island Logistics', body: 'Yas Island, Saadiyat, Al Reem—we have mobilization teams specialized for Abu Dhabi\'s island installations.' }
                ],
                cta: 'Get Your Abu Dhabi Quote'
            },
            'majlis-tent-rental': {
                title: 'Private Majlis Rental Abu Dhabi',
                subtitle: 'Palatial scale. Authentic tradition. Your private grounds.',
                intro: 'A Majlis in Abu Dhabi often means covering spaces that run to 2,000 square meters. Palace courtyards, villa gardens, private compounds. We handle palatial dimensions with the finishing quality the capital expects.',
                mainBody: 'Abu Dhabi\'s private Majlis requirements are different from Dubai. The scale is often larger. The protocol expectations are higher. The families involved often have specific requirements around Majlis Al Aali (VIP seating) versus general guest areas. We\'ve spent three decades learning these nuances. Authentic Gahwa stations positioned correctly. Mabkhara (incense) considerations for ventilation. Deep-seating majlis furniture that guests can actually sit in for hours. Seamless flooring that doesn\'t look temporary. Kandura racks at entrances. The details that separate a proper Abu Dhabi Majlis from a decorated tent.',
                features: [
                    { title: 'Palatial Scale', body: 'Up to 2,000 sqm of seamless coverage. Flooring, climate control, and finishing that works at mansion scale.' },
                    { title: 'Protocol Ready', body: 'Majlis Al Aali configurations, separate entrances, VIP positioning—we understand Abu Dhabi\'s hospitality hierarchy.' },
                    { title: 'Authentic Details', body: 'Gahwa stations, Mabkhara ventilation, traditional Sadu patterns, proper Arabian furnishings. Not decorations—function.' }
                ],
                cta: 'Design Your Private Majlis'
            },
            'iftar-tent-rental': {
                title: 'Corporate & Government Iftar Tents Abu Dhabi',
                subtitle: 'Government-standard execution at commercial prices.',
                intro: 'Abu Dhabi\'s government and corporate sectors need Iftar infrastructure that meets high protocol standards—without the five-star hotel invoice. We deliver both.',
                mainBody: 'We\'ve worked with ministries, semi-government entities, and corporations across Abu Dhabi for three decades. The requirements are consistent: structures that project institutional dignity, VIP configurations that respect hierarchy, flow designs that handle 500+ guests efficiently, and pricing that survives budget review. Our corporate Iftar tents include dedicated prayer areas, separate service zones, and layouts designed for protocol. DMT permits, Civil Defense approvals, ADAFSA food service compliance—all handled. Your admin team doesn\'t need to become temporary structure experts.',
                features: [
                    { title: 'Protocol Configurations', body: 'VIP entrances, dignitary seating, hierarchical layouts. We understand how Abu Dhabi institutions work.' },
                    { title: 'Budget Accountability', body: 'Government and corporate budgets need justification. We provide the spec sheet that makes approval straightforward.' },
                    { title: 'Rapid Deployment', body: 'Installation teams that work around your schedule. Ministries can\'t shut down for tent construction.' }
                ],
                cta: 'Plan Your Institutional Iftar'
            },
            'suhoor-tent-rental': {
                title: 'Suhoor Lounge Setup Abu Dhabi',
                subtitle: 'Refined atmosphere for the capital\'s late-night culture.',
                intro: 'Suhoor in Abu Dhabi is quieter than Dubai\'s. More intimate, more conversational. We build spaces that match the capital\'s energy—sophisticated lounges that invite guests to stay.',
                mainBody: 'Our Abu Dhabi Suhoor installations serve a different crowd than the Dubai party scene. Hotel terraces on Saadiyat that need revenue-generating capacity expansion. Private estates in Khalifa City hosting family and business associates. The requirements are consistent: refined lounge aesthetics, proper climate control for coastal humidity, mood lighting that doesn\'t feel like a nightclub, and ventilation for shisha zones that meets ADCD standards. We specialize in creating spaces where guests want to linger—comfortable enough to stay until Fajr, elegant enough to reflect well on the host.',
                features: [
                    { title: 'Capital Elegance', body: 'Plush seating, contemporary Arabic design, refined finishes. Abu Dhabi sophistication, not Dubai flash.' },
                    { title: 'Climate Comfort', body: 'Coastal humidity handled properly. Temperature maintained until the pre-dawn hours.' },
                    { title: 'ADCD Ventilation', body: 'Shisha-permissible zones with certified extraction systems. Full compliance, no shortcuts.' }
                ],
                cta: 'Design Your Suhoor Lounge'
            },
            'sadu-tent-rental': {
                title: 'Authentic Sadu & Heritage Tents Abu Dhabi',
                subtitle: 'Traditional Bedouin Structures for the Capital\'s Most Prestigious Events',
                intro: 'Abu Dhabi demands authenticity. Our Sadu-themed tents deliver the genuine spirit of Arabian heritage, engineered to the capital\'s highest safety and quality standards.',
                mainBody: 'For three decades, we have provided heritage-themed infrastructure for government ministries, private palaces, and luxury resorts in Abu Dhabi. A Sadu tent in the capital is often used for high-protocol cultural gatherings where aesthetics must be flawless. We use genuine wool-blend fabrics with authentic Bedouin patterns, balanced with modern flooring and industrial-grade climate control. Whether it\'s a VIP Majlis on the Corniche or a cultural exhibition on Saadiyat Island, our Sadu setups project the dignity and tradition that Abu Dhabi demands.',
                features: [
                    { title: 'Protocol-Ready Layouts', body: 'Traditional heritage looks combined with VIP seating arrangements and separate dignitary entrances.' },
                    { title: 'Heritage Engineering', body: 'Specifically designed to withstand the capital\'s coastal conditions while maintaining a rustic, authentic Bedouin appearance.' },
                    { title: 'Turnkey Cultural Setup', body: 'Includes authentic Gahwa stations, traditional incense setups, and curated cultural artifacts.' }
                ],
                cta: 'Inquire About Sadu Tents'
            }
        },
        'sharjah': {
            'ramadan-tent-rental': {
                title: 'Professional Ramadan Tent Rental in Sharjah',
                subtitle: '30 Years of Presence in the Cultural Heart of the UAE',
                intro: 'Based right here in Sharjah, Tent Now is the local expert for the Emirate’s Ramadan traditions. We understand Sharjah’s unique community spirit.',
                mainBody: 'Operating out of SAIF Zone, we have been Sharjah’s premier tent supplier for three decades. From the family-focused suburbs of Al Rahmaniya to the bustling Al Majaz Waterfront and University City, our Sharjah team provides rapid, reliable, and respectful setups. We pride ourselves on being the local choice, offering the best logistics and prices since we are right in your neighborhood.',
                features: [
                    { title: 'Local Logistics', body: 'Being Sharjah-based means zero-delay delivery and immediate on-site technical support.' },
                    { title: 'Community Focused', body: 'Designs that respect the cultural and traditional values of Sharjah’s residents.' },
                    { title: 'Sharjah Standards', body: 'Full compliance with Sharjah Civil Defense and Municipality regulations for seasonal tents.' }
                ],
                cta: 'Request Sharjah Quote'
            },
            'majlis-tent-rental': {
                title: 'Traditional Majlis Tent Rental in Sharjah',
                subtitle: 'Authentic Heritage for Al Khan and Al Suyoh Residences',
                intro: 'The Majlis is the center of Sharjah’s family life. We specialize in creating high-quality, durable, and beautiful Majlis tents for Sharjah homes.',
                mainBody: 'Our Sharjah Majlis setups are known for their authenticity and quality. Whether you need a small Majlis for your villa garden in Al Khan or a large-scale family tent in Al Suyoh, we provide the best interiors, from traditional carpets to custom wall paneling. We handle everything from Sharjah Municipality permits to final finishing, so you can focus on your guests.',
                features: [
                    { title: 'Cultural Design', body: 'Authentic Arabic themes that perfectly complement Sharjah’s architectural heritage.' },
                    { title: 'Family Seating', body: 'Spacious and comfortable traditional seating arrangements for various guest sizes.' },
                    { title: 'Quick Install', body: 'Efficient setup teams who respect your home’s privacy and complete the work on time.' }
                ],
                cta: 'Consult Our Experts'
            },
            'iftar-tent-rental': {
                title: 'Grand Iftar Tent Solutions in Sharjah',
                subtitle: 'Community and Corporate setups in Al Majaz and University City',
                intro: 'Hosting a community Iftar in Sharjah requires reliable infrastructure. We are the trusted partners for Sharjah’s largest gatherings.',
                mainBody: 'From charitable Iftars across Sharjah’s residential areas to corporate break-of-fast events in University City and SAIF Zone, our tents are built for hospitality. We focus on operational efficiency, ensuring that food service is smooth and the environment remains cool and comfortable for every guest.',
                features: [
                    { title: 'High Capacity', body: 'Structures engineered to accommodate hundreds of guests safely and efficiently.' },
                    { title: 'Industrial Grade AC', body: 'Powerful cooling systems that guarantee comfort during Sharjah’s humid evenings.' },
                    { title: 'Safety First', body: 'Strict adherence to Sharjah Civil Defense fire safety and structure regulations.' }
                ],
                cta: 'Plan Iftar Setup'
            },
            'suhoor-tent-rental': {
                title: 'Atmospheric Suhoor Tents in Sharjah',
                subtitle: 'Refined Nightly Retreats for Family and Friends',
                intro: 'Suhoor is a time for connection. We create the perfect, tranquil environment for Sharjah’s pre-dawn social gatherings.',
                mainBody: 'Our Suhoor tents in Sharjah offer a sanctuary of calm. We use atmospheric lighting and comfortable lounge-style seating to create a space where guests can relax until the morning prayer. Whether for a specialized cafe setup at Al Majaz or a private gathering in Al Tai, we deliver a premium experience.',
                features: [
                    { title: 'Acoustic Comfort', body: 'Layered draping to ensure a quiet, intimate environment for conversation.' },
                    { title: 'Refined Decor', body: 'A blend of traditional Sharjah motifs with modern lounge comforts.' },
                    { title: 'Full Support', body: '24/7 on-site technical support available for Sharjah-based clients throughout the month.' }
                ],
                cta: 'Book Suhoor Space'
            }
        },
        'ajman': {
            'ramadan-tent-rental': {
                title: 'Quality Ramadan Tent Rental in Ajman',
                subtitle: 'Reliable Service for Al Jurf, Al Rawda, and Ajman Corniche',
                intro: 'Ajman’s Ramadan is defined by close-knit community ties and traditional hospitality. We provide professional tent solutions tailored for Ajman’s residential and commercial hubs.',
                mainBody: 'From the suburban homes of Al Rawda to the corporate offices in Al Jurf and the leisure spots along Ajman Corniche, Tent Now offers rapid deployment and 5-star quality. We handle all Ajman Municipality and Civil Defense approvals, ensuring your seasonal setup is safe, compliant, and beautifully executed.',
                features: [
                    { title: 'Rapid Install', body: 'Local mobilization teams ensuring your tent is ready well before the Holy Month.' },
                    { title: 'Community Design', body: 'Classic Arabic themes that resonate with Ajman’s rich cultural heritage.' },
                    { title: 'Climate Control', body: 'Powerful AC systems designed to handle the coastal humidity of Ajman.' }
                ],
                cta: 'Get Ajman Quote'
            },
            'majlis-tent-rental': {
                title: 'Authentic Majlis Tent Rental in Ajman',
                subtitle: 'Traditional Comfort for Your Ajman Villa',
                intro: 'Create the perfect space for family and friends this Ramadan. Our Ajman Majlis tents are built for tradition and comfort.',
                mainBody: 'Specializing in residential Majlis setups across Ajman, we offer bespoke interiors featuring traditional Sadu patterns and modern luxury finishes. Whether in Al Tallah or Al Mowaihat, we bring the Majlis of your dreams to life with 30 years of expertise.',
                features: [
                    { title: 'Heritage Style', body: 'Traditional Arabic decor that honors the spirit of Ramadan.' },
                    { title: 'Premium Comfort', body: 'High-quality seating and carpeting for long evenings of hospitality.' },
                    { title: 'Turnkey Solution', body: 'We handle everything from permits to final interior touches.' }
                ],
                cta: 'Request Majlis Design'
            },
            'iftar-tent-rental': {
                title: 'Seamless Iftar Tent Solutions in Ajman',
                subtitle: 'Scale and Efficiency for Community Break-of-Fast',
                intro: 'Host your community or staff Iftar with confidence. We provide the infrastructure for mass hospitality in Ajman.',
                mainBody: 'Tent Now designs Iftar tents for Ajman’s charitable organizations and corporations, focusing on flow, safety, and hygiene. Our structures in areas like industrial Ajman and Corniche are built to accommodate large crowds with ease.',
                features: [
                    { title: 'High Capacity', body: 'Modular designs that can be scaled to fit any guest count.' },
                    { title: 'Safe Design', body: 'Strict adherence to all safety regulations for large-scale dining.' },
                    { title: 'Efficient Flow', body: 'Optimized layouts to ensure a smooth buffet and dining experience.' }
                ],
                cta: 'Plan Iftar Setup'
            },
            'suhoor-tent-rental': {
                title: 'Relaxing Suhoor Tents in Ajman',
                subtitle: 'Atmospheric Social Hubs for Pre-Dawn Gatherings',
                intro: 'Suhoor is a time for relaxation. We create the perfect nightly retreat across Ajman’s top residential spots.',
                mainBody: 'Our Suhoor tents in Ajman provide a tranquil environment for late-night gatherings. With soft lighting and comfortable lounge seating, we create an enclave of calm. Perfect for villa courtyards and hospitality venues in Ajman.',
                features: [
                    { title: 'Lounge Vibe', body: 'Modern furniture and lighting for a refined social experience.' },
                    { title: 'Quiet Operation', body: 'Acoustically superior tents that ensure a peaceful atmosphere.' },
                    { title: 'Climate Guard', body: 'Maintaining the perfect temperature throughout the night.' }
                ],
                cta: 'Design Suhoor Lounge'
            }
        },
        'ras-al-khaimah': {
            'ramadan-tent-rental': {
                title: 'Premium Ramadan Tent Rental in Ras Al Khaimah',
                subtitle: 'Iconic Setups for Al Marjan Island and Al Hamra',
                intro: 'RAK’s Ramadan season combines mountain majesty with coastal luxury. Tent Now delivers world-class structures to the northernmost Emirate.',
                mainBody: 'From the luxury resorts of Al Marjan Island to the private estates of Al Hamra and the bustling city center, Tent Now is RAK’s trusted partner. We bring 30 years of experience to the intricate requirements of RAK Civil Defense and the unique wind-loads of the northern coast.',
                features: [
                    { title: 'Wind Resistant', body: 'Specifically engineered structures for RAK’s coastal and mountainous wind patterns.' },
                    { title: 'Luxury Finishes', body: 'Premium interiors that match RAK’s high-end resort aesthetic.' },
                    { title: 'Full Compliance', body: 'Handling all RAK Municipality and Civil Defense structural approvals.' }
                ],
                cta: 'Request RAK Quote'
            },
            'majlis-tent-rental': {
                title: 'Traditional Majlis Tent Rental in RAK',
                subtitle: 'Authentic Emirati Hospitality for Your Private Estate',
                intro: 'A Majlis in Ras Al Khaimah is a statement of heritage. We design spaces that honor tradition with 2026 luxury standards.',
                mainBody: 'Our RAK Majlis solutions are designed for those who appreciate the finer details of Emirati hospitality. We handle installations in Al Dhait, Khuzam, and beyond, ensuring a private, climate-controlled environment for your family.',
                features: [
                    { title: 'Heritage Focus', body: 'Authentic Arabic themes with high-quality traditional furnishings.' },
                    { title: 'Private Sanctuary', body: 'Thoughtful spatial planning for complete privacy and comfort.' },
                    { title: 'All-Weather', body: 'Built to withstand RAK’s unique micro-climates during the Ramadan season.' }
                ],
                cta: 'Design Your Majlis'
            },
            'iftar-tent-rental': {
                title: 'Grand Iftar Tent Solutions in RAK',
                subtitle: 'Infrastructure for Corporate Hospitality and Hotels',
                intro: 'Partner with Tent Now for RAK’s most reliable Iftar setups. We specialize in hospitality infrastructure for hotels and businesses.',
                mainBody: 'Supporting RAK’s thriving tourism and corporate sectors, we provide high-capacity Iftar tents that drive revenue and employee engagement. Our structures are found at RAK’s top hotels and industrial hubs.',
                features: [
                    { title: 'Hotel Standards', body: '5-star interior finishing that aligns with your brand’s reputation.' },
                    { title: 'Rapid Setup', body: 'Efficient mobilization teams for large-scale resort and industrial installations.' },
                    { title: 'Full Technical Support', body: '24/7 on-site maintenance for climate and power systems.' }
                ],
                cta: 'Plan Guest Iftar'
            },
            'suhoor-tent-rental': {
                title: 'Modern Suhoor Tents in Ras Al Khaimah',
                subtitle: 'Atmospheric Nightlife Lounges for Resort and Villa Guests',
                intro: 'Suhoor in RAK is about ambiance. We create the region’s most stunning pre-dawn lounge environments.',
                mainBody: 'Our Suhoor setups on Al Marjan Island and across RAK’s residential areas define late-night luxury. We feature modern lounge seating, smart lighting, and specialized ventilation for the perfect social atmosphere.',
                features: [
                    { title: 'Resort Style', body: 'Contemporary decor and furnishings tailored for a high-end lounge feel.' },
                    { title: 'Smart Ambience', body: 'Integrated lighting and sound for a fully immersive guest experience.' },
                    { title: 'Stay Cool', body: 'Industrial-grade AC calculated for maximum comfort until dawn.' }
                ],
                cta: 'Design Suhoor Setup'
            }
        },
        'fujairah': {
            'ramadan-tent-rental': {
                title: 'Professional Ramadan Tent Rental in Fujairah',
                subtitle: 'Rugged and Reliable Setups for the East Coast',
                intro: 'Fujairah’s unique geography requires specialized tent expertise. Tent Now delivers heavy-duty structures that perform under any conditions.',
                mainBody: 'From the city center to Dibba and Al Shohadaa, we provide Fujairah with Civil Defense compliant Ramadan tents. Our structures are built to handle the humid coastal air and the strong mountain winds of the East Coast, ensuring safety and comfort throughout the Holy Month.',
                features: [
                    { title: 'Engineered Strength', body: 'Structures designed for Fujairah’s unique environmental conditions.' },
                    { title: 'Local Presence', body: 'Mobilization teams ready for deployment across the entire Emirate.' },
                    { title: 'Full Permits', body: 'We handle all Fujairah Municipality and Civil Defense paperwork.' }
                ],
                cta: 'Get Fujairah Quote'
            },
            'majlis-tent-rental': {
                title: 'Authentic Majlis Tent Rental in Fujairah',
                subtitle: 'Traditional Heritage for East Coast Families',
                intro: 'Honor the traditions of Ramadan with a bespoke Majlis. We bring the heart of the home to Fujairah’s villas.',
                mainBody: 'Our Majlis designs in Fujairah combine traditional aesthetics with modern cooling technology. We create intimate spaces for families in Al Faseel, Merbeih, and beyond, ensuring a perfect environment for hospitality.',
                features: [
                    { title: 'Heritage Sourcing', body: 'Traditional Arabic carpets and seating that reflect Fujairah’s culture.' },
                    { title: 'Comfort Focus', body: 'Advanced climate control for those humid Fujairah evenings.' },
                    { title: 'Quick Turnaround', body: 'Fast and efficient installation with minimal disruption to your home.' }
                ],
                cta: 'Request Design'
            },
            'iftar-tent-rental': {
                title: 'Grand Iftar Tent Solutions in Fujairah',
                subtitle: 'Support for Corporate and Community Hospitality',
                intro: 'Reliable infrastructure for Fujairah’s largest Iftar gatherings. We specialize in high-capacity, safe environments.',
                mainBody: 'Providing Iftar tents for Fujairah’s community centers and industrial giants, Tent Now focuses on large-scale safety and operational flow. Our structures are engineered for the high volume of the break-of-fast.',
                features: [
                    { title: 'High Capacity', body: 'Large span tents that provide open, unobstructed spaces for hundreds.' },
                    { title: 'Industrial AC', body: 'The most powerful cooling systems available in the Northern Emirates.' },
                    { title: 'Certified Safe', body: 'Meeting all requirements of Fujairah’s safety and health authorities.' }
                ],
                cta: 'Plan Iftar Gathering'
            },
            'suhoor-tent-rental': {
                title: 'Tranquil Suhoor Tents in Fujairah',
                subtitle: 'Late-Night Sanctuaries for Social Connection',
                intro: 'Suhoor is for meditation and conversation. We create the peaceful atmosphere Fujairah’s residents cherish.',
                mainBody: 'Our Suhoor tents in Fujairah offer a refined social experience with comfortable seating and peaceful decor. We specialize in creating a mood that encourages guests to enjoy the pre-dawn hours together.',
                features: [
                    { title: 'Intimate Vibe', body: 'Softer lighting and acoustic padding for a tranquil social space.' },
                    { title: 'Refined Decor', body: 'Traditional Emirati touches combined with modern comforts.' },
                    { title: 'Climate Control', body: 'Maintaining a crisp 21°C regardless of external humidity.' }
                ],
                cta: 'Design Suhoor Space'
            }
        },
        'umm-al-quwain': {
            'ramadan-tent-rental': {
                title: 'Reliable Ramadan Tent Rental in Umm Al Quwain',
                subtitle: 'Community-Focused Setups for Al Salamah and Beyond',
                intro: 'Umm Al Quwain’s Ramadan traditions are deeply rooted. Tent Now provides the professional infrastructure to support UAQ’s hospitality.',
                mainBody: 'From the growing residential areas of Al Salamah to the coastal developments, Tent Now offers UAQ’s best value and quality. We handle all local UAQ Civil Defense and Municipality approvals, providing a stress-free experience for families and businesses alike.',
                features: [
                    { title: 'Efficient Install', body: 'Quick deployment teams ensuring your tent is ready on schedule.' },
                    { title: 'Local Know-How', body: '30 years of navigating UAQ’s specific regulations and site conditions.' },
                    { title: 'Climate Comfort', body: 'High-capacity cooling solutions tailored for UAQ’s coastal weather.' }
                ],
                cta: 'Request UAQ Quote'
            },
            'majlis-tent-rental': {
                title: 'Traditional Majlis Tent Rental in UAQ',
                subtitle: 'Honoring Heritage in Your Private Home',
                intro: 'Build a Majlis that reflects your family’s hospitality. We specialize in traditional setups for UAQ residences.',
                mainBody: 'Our UAQ Majlis solutions focus on authenticity and quality. We create beautiful, climate-controlled environments for families in Al Ramlah, Al Raudah, and across the Emirate, utilizing traditional designs that never go out of style.',
                features: [
                    { title: 'Heritage Interiors', body: 'Authentic Arabic carpets and seating themes.' },
                    { title: 'Comfort & Privacy', body: 'Privacy-focused layouts for intimate family gatherings.' },
                    { title: 'Turnkey Service', body: 'We manage every detail from structural permit to interior layout.' }
                ],
                cta: 'Consult Our Experts'
            },
            'iftar-tent-rental': {
                title: 'Grand Iftar Tent Solutions in UAQ',
                subtitle: 'Hospitality Infrastructure for Large-Scale Gatherings',
                intro: 'Host your Iftar with UAQ’s most trusted technical partner. We provide the scale you need for community hospitality.',
                mainBody: 'Specializing in large-scale Iftar setups for UAQ’s mosques and corporations, we focus on safe crowd management and operational flow. Our structures are designed for maximum safety and comfort during the peak hours of fast-breaking.',
                features: [
                    { title: 'Large Scale', body: 'Structures capable of hosting hundreds of guests simultaneously.' },
                    { title: 'Safety Regulated', body: 'Built in full compliance with UAQ Civil Defense fire and safety codes.' },
                    { title: 'Hygiene Optimized', body: 'Ventilation and layout designed for efficient food service environments.' }
                ],
                cta: 'Plan Iftar Setup'
            },
            'suhoor-tent-rental': {
                title: 'Atmospheric Suhoor Tents in Umm Al Quwain',
                subtitle: 'Peaceful Lounges for Late-Night Socializing',
                intro: 'Suhoor is about connection. We design the perfect social environments for UAQ’s nightly social circles.',
                mainBody: 'Our Suhoor tents in UAQ offer a refined experience for pre-dawn social gatherings. With atmospheric lighting and plush lounge seating, we create an enclave of hospitality that invites guests to stay until morning.',
                features: [
                    { title: 'Lounge Aesthetic', body: 'Modern furniture combined with traditional UAQ cultural touches.' },
                    { title: 'Quiet Comfort', body: 'Acousitically insulated tents that preserve the tranquility of your event.' },
                    { title: 'Total Cooling', body: 'Sophisticated AC systems that keep the humidity out and the cool in.' }
                ],
                cta: 'Design Suhoor Setup'
            }
        }
    },
    ar: {
        dubai: {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان دبي 2026',
                subtitle: 'تجاوز رسوم الفنادق البالغة 300 درهم للشخص. احصل على نفس الجودة بأقل.',
                intro: 'الواقع: فنادق دبي الراقية تتقاضى 295-470 درهم للشخص في تجارب خيام رمضان. جميلة؟ نعم. ضرورية؟ ليس إذا كان لديك مساحتك الخاصة. نحن نبني نفس مستوى الجودة—في موقعك، بشروطك، بجزء من التكلفة.',
                mainBody: 'نحن نعمل في دبي منذ قبل أن يفتح معظم منافسينا أبوابهم. ثلاثون عاماً من التعامل مع تصاريح بلدية دبي وموافقات الدفاع المدني ومتطلبات IACAD. نعلم أن الخيمة في مرسى دبي تحتاج تثبيتاً مختلفاً عن القوز. نعلم أن رطوبة فبراير على الساحل قاسية على المواد الرخيصة. ونعلم أن غرامة 500,000 درهم على هيكل غير مرخص ليست شيئاً تريد شرحه لمديرك المالي. كل تصريح، كل شهادة سلامة، كل موافقة هيكلية—مُنجزة قبل أن نبدأ.',
                features: [
                    { title: 'حزمة تصاريح كاملة', body: 'بلدية دبي، الدفاع المدني، IACAD—نتولى متاهة الأوراق حتى لا تضطر أنت. صفر مفاجآت يوم التركيب.' },
                    { title: 'هندسة المناخ', body: 'فبراير في دبي رطب. أنظمة التكييف لدينا محسوبة لحجم خيمتك وعدد ضيوفك—21 درجة مضمونة حتى بالسعة الكاملة.' },
                    { title: 'خبرة الموقع', body: 'فلل جميرا، تراسات DIFC، مواقع DIP الصناعية، توسعات فنادق JBR—ركّبنا في كل زاوية من دبي. نعرف ما يناسب أين.' }
                ],
                cta: 'احصل على عرض أسعار مخصص'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيمة مجلس خاص في دبي',
                subtitle: 'منزلك. ضيوفك. تقاليدك—بدون وسيط الفندق.',
                intro: 'المجلس ليس مجرد جلسات—إنه حيث يحدث رمضان فعلاً. السهرات المتأخرة، التجموات العائلية، اللحظات المهمة. نحن نبني مساحات مجلس خاصة تبدو دائمة، لا كأنك استأجرت شيئاً.',
                mainBody: 'معظم "تأجيرات المجالس" في دبي هي شركات خيام أعراس تستبدل الستائر البيضاء ببعض الوسائد. هذا ليس ما نفعله. قضينا 30 عاماً في فهم الفرق بين خيمة عادية ومجلس أصيل. تجهيزات الجلوس المنخفض. طبقات القماش التي تعزل فعلاً. الإضاءة التي تخلق أجواء دون مسرحية. سواء كنت تعمل مع فناء ضيق في جميرا أو حديقة واسعة في تلال الإمارات، نصمم حول مساحتك—لا العكس.',
                features: [
                    { title: 'تصاميم أصيلة', body: 'مجالس أرضية مخصصة، اختيارات أقمشة تقليدية، أنماط سدو أصيلة—تفاصيل تهم من يعرف الفرق.' },
                    { title: 'خصوصية بالتصميم', body: 'مداخل منفصلة، تخطيط خطوط الرؤية، طبقات صوتية. تجمعك العائلي يبقى خاصاً.' },
                    { title: 'أحجام مرنة', body: 'من تجهيزات 20 شخص الحميمة إلى تجهيزات 100+ ضيف. نتوسع حسب قائمة ضيوفك الفعلية، لا حسب فئة باقة.' }
                ],
                cta: 'صمم مجلسك'
            },
            'iftar-tent-rental': {
                title: 'تأجير خيمة إفطار شركات دبي',
                subtitle: 'إفطار موظفيك لا يجب أن يكلف أكثر من المكافآت الربعية.',
                intro: 'إفطارات الشركات في دبي لها خياران: احجز فندقاً بـ 250+ درهم للشخص، أو ابنِ خيمتك. إذا كانت لديك المساحة—أرض مكتبك، موقف سيارات، حرم شركة—يمكننا إعطاءك نفس التجربة بـ 15-25% أقل.',
                mainBody: 'نعمل مع شركات في DIFC وبزنس باي ومجمع دبي للاستثمار وجبل علي كل موسم رمضان. المتطلبات دائماً نفسها: مظهر مبهر، إطعام كثير من الناس بكفاءة، البقاء ضمن الميزانية. هياكل الإفطار لدينا مصممة للتدفق—خطوط بوفيه لا تخلق اختناقات، مناطق جلوس تمتلئ وتفرغ بسلاسة، مناطق صلاة موضوعة بشكل صحيح. نتولى موافقات بلدية دبي لخدمة الطعام، شهادات سلامة الدفاع المدني، وتصاريح IACAD.',
                features: [
                    { title: 'تدفق تشغيلي', body: 'محطات بوفيه، مناطق جلوس، مناطق صلاة، ممرات خدمة—مصممة ليأكل 500 شخص بدون فوضى.' },
                    { title: 'تكامل العلامة التجارية', body: 'أرضيات مخصصة، لافتات خفية، إضاءة بألوان شركتك. إنها فعاليتك، لا إيجار عام.' },
                    { title: 'امتثال كامل', body: 'تصاريح IACAD، معايير نظافة البلدية، سلامة الدفاع المدني—كلها مشمولة. مورد واحد، صفر صداع امتثال.' }
                ],
                cta: 'خطط لإفطار شركتك'
            },
            'suhoor-tent-rental': {
                title: 'تجهيز خيمة وصالة سحور دبي',
                subtitle: 'جمهور الساعة 2 صباحاً يحتاج طاقة مختلفة. نحن نبني لذلك.',
                intro: 'السحور ليس مجرد إفطار بتوقيت مختلف. إنه طابع مختلف تماماً - إضاءة خافتة، جلسات مريحة، وإقامات أطول. معظم شركات الخيام لا تفهم هذا. نحن نفعل.',
                mainBody: 'لقد تعاونا مع فنادق في نخلة جميرا وJBR وDIFC لأكثر من عقدين في عروض السحور الخاصة بهم. المتطلبات محددة: أثاث صالة حديث بدلاً من الجلسات التقليدية، وسائط سمعية وبصرية متكاملة للموسيقى المحيطة، وتهوية مناسبة لمناطق الشيشة المسموح بها (متوافقة مع الدفاع المدني). أنظمة إضاءة ذكية يمكنها تغيير الأجواء طوال الليل. اعتبارات صوتية لأن جيرانك موجودون. هذه ليست خيمة نهاري بضوء خافت - إنها مصممة خصيصاً لثقافة رمضان الليلية في دبي.',
                features: [
                    { title: 'تكوين الصالة', body: 'أرائك مخملية، طاولات منخفضة، جمالية عربية معاصرة. مصممة للضيوف الذين يبقون حتى الفجر.' },
                    { title: 'تهوية الشيشة', body: 'أنظمة استخراج دخان معتمدة. تدفق هواء نقي حتى في أقصى سعة. امتثال كامل للدفاع المدني.' },
                    { title: 'أجواء ذكية', body: 'إضاءة RGB قابلة للبرمجة، أنظمة صوت مدمجة، مناطق قابلة للتعتيم. الحالة المزاجية تتغير مع الليل.' }
                ],
                cta: 'صمم مساحة سحورك'
            },
            'sadu-tent-rental': {
                title: 'تأجير خيام سدو وتراثية أصيلة دبي',
                subtitle: 'احتفل بالثقافة الإماراتية مع هياكل تراثية فاخرة',
                intro: 'تواصل مع جذور الإمارات من خلال خيامنا الأصيلة بطابع السدو. مثالية للفعاليات الثقافية، تجهيزات المجلس الخاص، أو التجمعات الرمضانية ذات الطابع التراثي في دبي.',
                mainBody: 'خيام السدو لدينا هي أكثر من مجرد ملاجئ مؤقتة؛ إنها تجارب ثقافية غامرة. نحن نجمع بين أنماط نسيج البدو التقليدية (السدو) والخيام الهيكلية الحديثة عالية الأداء. يتيح لك هذا الاستمتاع بالمظهر والمظهر الأصيل للمجلس التراثي مع الاستفادة من التحكم الحديث في المناخ والسلامة الهيكلية. لمدة 30 عاماً، كنا الشريك المفضل في دبي للتجهيزات التراثية المتميزة التي تلقى صدى لدى المواطنين والضيوف الدوليين على حد سواء.',
                features: [
                    { title: 'أنماط سدو حقيقية', body: 'أنماط نسيج أصيلة عالية الجودة تمثل التراث الفني الحقيقي لثقافة البدو في الإمارات.' },
                    { title: 'جماليات التراث', body: 'لمسات خشبية منسقة بعناية، جلسات أرضية تقليدية، ومقتنيات ثقافية تكمل التجربة الأصيلة.' },
                    { title: 'استقرار حديث', body: 'مظهر تقليدي مدعوم بهياكل حديثة هندسية تتحمل أحمال الرياح في الإمارات وتحافظ على تبريد مثالي.' }
                ],
                cta: 'استفسر عن خيام السدو'
            }
        },
        'abu-dhabi': {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان أبوظبي 2026',
                subtitle: 'جودة قصر الإمارات بدون أسعار قصر الإمارات.',
                intro: 'أبوظبي ترفع المعايير عالياً. خيمة قصر الإمارات مذهلة—بأكثر من 400 درهم للشخص. لكن إذا كنت تحتاج هيكلك الخاص في موقعك، فأنت تحتاج من يبني بذلك المعيار بدون الرسوم الإضافية.',
                mainBody: 'سوق الخيام في العاصمة منقسم بين أماكن الفنادق الفائقة الفخامة والمشغلين الصغار الذين يتنازلون عن معايير السلامة. نحن في الوسط: الجودة الهيكلية والصقل الجمالي الذي تتوقعه أبوظبي، بأسعار تناسب ميزانيات الحكومة وفعاليات الشركات والعائلات الخاصة. نتعامل مع تصاريح DMT منذ 30 عاماً. نفهم أن أبوظبي تتطلب هياكل تتكامل مع المشهد الحضري—خيمتك لا يمكن أن تبدو كموقع بناء على الكورنيش.',
                features: [
                    { title: 'امتثال DMT', body: 'عملية تصاريح أبوظبي صارمة. نتولى الموافقات الهيكلية وشهادات السلامة والمراجعات الجمالية—كلها قبل التركيب.' },
                    { title: 'جماليات العاصمة', body: 'ألوان ترابية، أقواس عربية كلاسيكية، أنماط تراثية. هياكل تبدو وكأنها تنتمي لأبوظبي، لا مستوردة من دبي.' },
                    { title: 'لوجستيات الجزر', body: 'جزيرة ياس، السعديات، الريم—لدينا فرق تعبئة متخصصة لتركيبات جزر أبوظبي.' }
                ],
                cta: 'احصل على عرض أسعار أبوظبي'
            },
            'majlis-tent-rental': {
                title: 'تأجير مجلس خاص أبوظبي',
                subtitle: 'مساحات ضخمة. تقاليد أصيلة. أرضك الخاصة.',
                intro: 'المجلس في أبوظبي غالباً يعني تغطية مساحات تصل إلى 2,000 متر مربع. أفنية قصور، حدائق فلل، مجمعات خاصة. نتعامل مع الأبعاد الضخمة بجودة التشطيب التي تتوقعها العاصمة.',
                mainBody: 'متطلبات المجالس الخاصة في أبوظبي مختلفة عن دبي. الحجم غالباً أكبر. توقعات البروتوكول أعلى. العائلات المعنية غالباً لديها متطلبات محددة حول مجلس الأعلى (جلسات كبار الشخصيات) مقابل مناطق الضيوف العامة. قضينا ثلاثة عقود في تعلم هذه الفروق. محطات القهوة العربية موضوعة بشكل صحيح. اعتبارات المبخرة للتهوية. أثاث مجالس عميق يمكن للضيوف الجلوس فيه لساعات. أرضيات متصلة لا تبدو مؤقتة. رفوف الكندورة عند المداخل.',
                features: [
                    { title: 'مساحات ضخمة', body: 'حتى 2,000 متر مربع من التغطية المتصلة. أرضيات، تحكم في المناخ، وتشطيبات تعمل بمقياس القصور.' },
                    { title: 'جاهز للبروتوكول', body: 'تجهيزات مجلس الأعلى، مداخل منفصلة، وضعية كبار الشخصيات—نفهم تسلسل الضيافة في أبوظبي.' },
                    { title: 'تفاصيل أصيلة', body: 'محطات قهوة عربية، تهوية مبخرة، أنماط سدو تقليدية، مفروشات عربية أصيلة. ليست زينة—وظيفة.' }
                ],
                cta: 'صمم مجلسك الخاص'
            },
            'iftar-tent-rental': {
                title: 'خيام إفطار شركات وحكومة أبوظبي',
                subtitle: 'تنفيذ بمعايير حكومية بأسعار تجارية.',
                intro: 'قطاعا الحكومة والشركات في أبوظبي يحتاجان بنية تحتية للإفطار تلبي معايير البروتوكول العالية—بدون فاتورة الفندق خمس نجوم. نحن نقدم الاثنين.',
                mainBody: 'عملنا مع وزارات وجهات شبه حكومية وشركات في أبوظبي لثلاثة عقود. المتطلبات ثابتة: هياكل تعكس هيبة المؤسسة، تجهيزات كبار شخصيات تحترم التسلسل، تصاميم تدفق تتعامل مع 500+ ضيف بكفاءة، وأسعار تنجو من مراجعة الميزانية. خيام الإفطار للشركات لدينا تشمل مناطق صلاة مخصصة، مناطق خدمة منفصلة، وتخطيطات مصممة للبروتوكول.',
                features: [
                    { title: 'تجهيزات بروتوكول', body: 'مداخل كبار شخصيات، جلسات كبار المسؤولين، تخطيطات هرمية. نفهم كيف تعمل مؤسسات أبوظبي.' },
                    { title: 'مساءلة الميزانية', body: 'ميزانيات الحكومة والشركات تحتاج تبريراً. نقدم ورقة المواصفات التي تجعل الموافقة سهلة.' },
                    { title: 'نشر سريع', body: 'فرق تركيب تعمل حسب جدولك. الوزارات لا تستطيع الإغلاق لبناء خيمة.' }
                ],
                cta: 'خطط لإفطار مؤسستك'
            },
            'suhoor-tent-rental': {
                title: 'تجهيز صالة سحور أبوظبي',
                subtitle: 'أجواء راقية لثقافة العاصمة الليلية.',
                intro: 'السحور في أبوظبي أهدأ من دبي. أكثر حميمية، أكثر محادثة. نحن نبني مساحات تناسب طاقة العاصمة—صالات راقية تدعو الضيوف للبقاء.',
                mainBody: 'تركيبات السحور لدينا في أبوظبي تخدم جمهوراً مختلفاً عن مشهد دبي الصاخب. تراسات فنادق في السعديات تحتاج توسعة سعة مدرة للإيرادات. عقارات خاصة في مدينة خليفة تستضيف العائلة وشركاء الأعمال. المتطلبات ثابتة: جماليات صالة راقية، تحكم مناسب في المناخ للرطوبة الساحلية، إضاءة أجواء لا تشعر كنادي ليلي، وتهوية لمناطق الشيشة تلبي معايير ADCD.',
                features: [
                    { title: 'أناقة العاصمة', body: 'جلسات فاخرة، تصميم عربي معاصر، تشطيبات راقية. رقي أبوظبي، لا بهرجة دبي.' },
                    { title: 'راحة المناخ', body: 'رطوبة الساحل مُعالجة بشكل صحيح. درجة الحرارة محافظ عليها حتى ساعات ما قبل الفجر.' },
                    { title: 'تهوية ADCD', body: 'مناطق شيشة بأنظمة استخراج معتمدة. امتثال كامل، بدون اختصارات.' }
                ],
                cta: 'صمم صالة سحورك'
            },
            'sadu-tent-rental': {
                title: 'خيام سدو وتراثية أصيلة أبوظبي',
                subtitle: 'هياكل بدوية تقليدية لأرقى الفعاليات في العاصمة',
                intro: 'تتطلب أبوظبي الأصالة. تقدم خيامنا بطابع السدو الروح الحقيقية للتراث العربي، وهي مصممة وفقاً لأعلى معايير السلامة والجودة في العاصمة.',
                mainBody: 'على مدى ثلاثة عقود، قدمنا بنية تحتية ذات طابع تراثي للوزارات الحكومية والقصور الخاصة والمنتجعات الفاخرة في أبوظبي. غالباً ما تستخدم خيمة السدو في العاصمة للتجمعات الثقافية رفيعة المستوى حيث يجب أن تكون الجماليات خالية من العيوب. نحن نستخدم أقمشة حقيقية بمزيج الصوف مع أنماط بدوية أصيلة، متوازنة مع أرضيات حديثة وتحكم في المناخ بمستوى صناعي. سواء كان مجلساً لكبار الشخصيات على الكورنيش أو معرضاً ثقافياً في جزيرة السعديات، فإن تجهيزات السدو لدينا تعكس الكرامة والتقاليد التي تتطلبها أبوظبي.',
                features: [
                    { title: 'تخطيطات جاهزة للبروتوكول', body: 'مظاهر تراثية تقليدية مدمجة مع ترتيبات جلوس لكبار الشخصيات ومداخل منفصلة للشخصيات المرموقة.' },
                    { title: 'هندسة تراثية', body: 'مصممة خصيصاً لتحمل الظروف الساحلية للعاصمة مع الحفاظ على مظهر بدوي ريفي أصيل.' },
                    { title: 'تجهيز ثقافي شامل', body: 'يشمل محطات قهوة عربية أصيلة، وتجهيزات بخور تقليدية، ومقتنيات ثقافية منسقة.' }
                ],
                cta: 'استفسر عن خيام السدو'
            }
        },
        'sharjah': {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان احترافية في الشارقة',
                subtitle: '30 عاماً من التواجد في القلب الثقافي لدولة الإمارات',
                intro: 'يقع مقرنا هنا في الشارقة، وTent Now هي الخبير المحلي لتقاليد رمضان في الإمارة. نحن نفهم روح مجتمع الشارقة الفريدة.',
                mainBody: 'من مقرنا في المنطقة الحرة بمطار الشارقة الدولي (SAIF Zone)، كنا المورد الأول للخيام في الشارقة لمدة ثلاثة عقود. من ضواحي الرحمانية التي تركز على العائلة إلى واجهة المجاز المائية النابضة بالحياة والمدينة الجامعية، يوفر فريقنا في الشارقة تجهيزات سريعة وموثوقة. نحن نفخر بكوننا الخيار المحلي الأفضل، حيث نقدم أفضل اللوجستيات والأسعار لقربنا منكم.',
                features: [
                    { title: 'لوجستيات محلية', body: 'تواجدنا في الشارقة يعني توصيلاً بدون تأخير ودعماً فنياً فورياً في الموقع.' },
                    { title: 'تركيز مجتمعي', body: 'تصاميم تحترم القيم الثقافية والتقليدية لسكان الشارقة.' },
                    { title: 'معايير الشارقة', body: 'التزام كامل بلوائح الدفاع المدني وبلدية الشارقة للخيام الموسمية.' }
                ],
                cta: 'اطلب عرض أسعار الشارقة'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيام مجالس تقليدية في الشارقة',
                subtitle: 'تراث أصيل لسكان الخان والسيوح',
                intro: 'المجلس هو مركز الحياة العائلية في الشارقة. نحن متخصصون في إنشاء خيام مجلس عالية الجودة ومتينة وجميلة لمنازل الشارقة.',
                mainBody: 'تُعرف تجهيزات المجلس لدينا في الشارقة بأصالتها وجودتها. سواء كنت بحاجة إلى مجلس صغير لحديقة فيلتك في الخان أو خيمة عائلية واسعة في السيوح، فإننا نوفر أفضل التصاميم الداخلية. نحن نتولى كل شيء من تصاريح بلدية الشارقة إلى التشطيب النهائي، حتى تتمكن من التركيز على ضيوفك.',
                features: [
                    { title: 'تصميم ثقافي', body: 'سمات عربية أصيلة تكمل بامتياز التراث المعماري للشارقة.' },
                    { title: 'جلسات عائلية', body: 'ترتيبات جلوس تقليدية واسعة ومريحة لمختلف أعداد الضيوف.' },
                    { title: 'تركيب سريع', body: 'فرق تركيب فعالة تحترم خصوصية منزلك وتنجز العمل في الوقت المحدد.' }
                ],
                cta: 'استشر خبيرنا'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام الإفطار الكبرى في الشارقة',
                subtitle: 'تجهيزات مجتمعية ومؤسسية في المجاز والمدينة الجامعية',
                intro: 'استضافة إفطار مجتمعي في الشارقة تتطلب بنية تحتية موثوقة. نحن الشركاء الموثوقون لأكبر التجمعات في الشارقة.',
                mainBody: 'من إفطارات الجمعيات الخيرية في المناطق السكنية إلى فعاليات الشركات في المدينة الجامعية والمنطقة الحرة، بنيت خيامنا للضيافة. نحن نركز على الكفاءة التشغيلية، لضمان انسيابية خدمة الطعام وبقاء البيئة باردة ومريحة لكل ضيف.',
                features: [
                    { title: 'سعة عالية', body: 'هياكل هندسية مصممة لاستيعاب مئات الضيوف بأمان وكفاءة.' },
                    { title: 'تكييف صناعي', body: 'أنظمة تكييف قوية تضمن الراحة خلال أمسيات الشارقة الرطبة.' },
                    { title: 'السلامة أولاً', body: 'الالتزام الصارم بلوائح السلامة من الحريق وهياكل الدفاع المدني في الشارقة.' }
                ],
                cta: 'خطط لتجهيز الإفطار'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور ذات أجواء مميزة في الشارقة',
                subtitle: 'ملاذات ليلية مريحة للعائلة والأصدقاء',
                intro: 'السحور هو وقت للتواصل. نحن ننشئ البيئة الهادئة المثالية للتجمعات الاجتماعية في الشارقة قبل الفجر.',
                mainBody: 'توفر خيام السحور لدينا في الشارقة ملاذاً من الهدوء. نستخدم إضاءة محيطة وجلسات مريحة على طراز الصالات لإنشاء مساحة حيث يمكن للضيوف الاسترخاء. سواء كان ذلك لتجهيز مقهى متخصص في المجاز أو تجمع خاص في الطي، فإننا نقدم تجربة راقية.',
                features: [
                    { title: 'راحة صوتية', body: 'تغطية قماشية متعددة الطبقات لضمان بيئة هادئة وحميمية للمحادثة.' },
                    { title: 'ديكور راقٍ', body: 'مزيج من زخارف الشارقة التقليدية مع وسائل الراحة الحديثة للصالة.' },
                    { title: 'دعم كامل', body: 'يتوفر دعم فني في الموقع على مدار الساعة طوال أيام الأسبوع لعملاء الشارقة خلال الشهر.' }
                ],
                cta: 'احجز مساحة السحور'
            }
        },
        'ajman': {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان بجودة عالية في عجمان',
                subtitle: 'خدمة موثوقة للجرف والروضة وكورنيش عجمان',
                intro: 'يتميز رمضان في عجمان بروابط مجتمعية وثيقة وكرم ضيافة تقليدي. نحن نوفر حلول خيام احترافية مصممة للمراكز السكنية والتجارية في عجمان.',
                mainBody: 'من المنازل السكنية في الروضة إلى المكاتب في الجرف والمنتزهات على طول كورنيش عجمان، تقدم Tent Now جودة 5 نجوم. نحن نتولى جميع تصاريح بلدية عجمان والدفاع المدني، مما يضمن أن يكون تجهيزك الموسمي آمناً وجميلاً.',
                features: [
                    { title: 'تركيب سريع', body: 'فرق تعبئة محلية تضمن جاهزية خيمتك قبل وقت كافٍ من الشهر الفضيل.' },
                    { title: 'تصميم مجتمعي', body: 'سمات عربية كلاسيكية تتماشى مع التراث الثقافي الغني لعجمان.' },
                    { title: 'التحكم في المناخ', body: 'أنظمة تكييف قوية مصممة للتعامل مع الرطوبة الساحلية في عجمان.' }
                ],
                cta: 'احصل على عرض أسعار عجمان'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيمة مجلس أصيلة في عجمان',
                subtitle: 'راحة تقليدية لفيلتك في عجمان',
                intro: 'أنشئ المساحة المثالية للعائلة والأصدقاء في هذا الرمضان. خيام المجلس لدينا في عجمان بنيت للتقاليد والراحة.',
                mainBody: 'نحن متخصصون في تجهيزات المجلس السكني في جميع أنحاء عجمان، ونقدم تصميمات داخلية مخصصة تتميز بأنماط السدو التقليدية والتشطيبات الفاخرة الحديثة. سواء في التلة أو المويهات، نحقق لك مجلس أحلامك بخبرة 30 عاماً.',
                features: [
                    { title: 'نمط تراثي', body: 'ديكور عربي تقليدي يكرم روح رمضان.' },
                    { title: 'راحة فائقة', body: 'مقاعد وسجاد عالي الجودة لأمسيات ضيافة طويلة.' },
                    { title: 'حل شامل', body: 'نتولى كل شيء من التصاريح إلى اللمسات الداخلية النهائية.' }
                ],
                cta: 'اطلب تصميم المجلس'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام إفطار سلسة في عجمان',
                subtitle: 'الحجم والكفاءة لإفطار المجتمع',
                intro: 'استضف إفطارك المجتمعي أو الوظيفي بكل ثقة. نحن نوفر البنية التحتية للضيافة في عجمان.',
                mainBody: 'تصمم Tent Now خيام الإفطار للمنظمات الخيرية والشركات في عجمان، مع التركيز على الانسيابية والسلامة والنظافة. هياكلنا في مناطق مثل عجمان الصناعية والكورنيش مبنية لاستيعاب الحشود الكبيرة بسهولة.',
                features: [
                    { title: 'سعة عالية', body: 'تصاميم معيارية يمكن توسيعها لتناسب أي عدد من الضيوف.' },
                    { title: 'تصميم آمن', body: 'الالتزام الصارم بجميع لوائح السلامة لتناول الطعام على نطاق واسع.' },
                    { title: 'انسيابية فعالة', body: 'تخطيطات محسنة لضمان تجربة بوفيه وتناول طعام سلسة.' }
                ],
                cta: 'خطط لتجهيز الإفطار'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور مريحة في عجمان',
                subtitle: 'مراكز اجتماعية مميزة لتجمعات ما قبل الفجر',
                intro: 'السحور هو وقت للاسترخاء. نحن ننشئ الملاذ الليلي المثالي في أفضل المواقع السكنية في عجمان.',
                mainBody: 'توفر خيام السحور لدينا في عجمان بيئة هادئة للتجمعات الليلية المتأخرة. مع الإضاءة الناعمة والمقاعد المريحة، ننشئ واحة من الهدوء. مثالية لفناء الفلل وأماكن الضيافة في عجمان.',
                features: [
                    { title: 'جو صالة', body: 'أثاث وإضاءة حديثة لتجربة اجتماعية راقية.' },
                    { title: 'تشغيل هادئ', body: 'خيام متفوقة صوتياً تضمن أجواء هادئة.' },
                    { title: 'حماية المناخ', body: 'الحفاظ على درجة حرارة مثالية طوال الليل.' }
                ],
                cta: 'صمم صالة السحور'
            }
        },
        'ras-al-khaimah': {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان فخمة في رأس الخيمة',
                subtitle: 'تجهيزات أيقونية لجزيرة المرجان والحمراء',
                intro: 'يجمع موسم رمضان في رأس الخيمة بين جلال الجبال وفخامة السواحل. تقدم Tent Now هياكل عالمية المستوى للإمارة الشمالية.',
                mainBody: 'من المنتجعات الفاخرة في جزيرة المرجان إلى العقارات الخاصة في الحمراء ووسط المدينة النابض بالحياة، Tent Now هي الشريك الموثوق في رأس الخيمة. نقدم خبرة 30 عاماً لمتطلبات الدفاع المدني في رأس الخيمة وحمولات الرياح الفريدة للساحل الشمالي.',
                features: [
                    { title: 'مقاومة للرياح', body: 'هياكل هندسية خاصة لأنماط الرياح الساحلية والجبلية في رأس الخيمة.' },
                    { title: 'تشطيبات فاخرة', body: 'تصاميم داخلية ممتازة تتناسب مع جمالية المنتجعات الراقية في رأس الخيمة.' },
                    { title: 'التزام كامل', body: 'التعامل مع جميع الموافقات الهيكلية لبلدية رأس الخيمة والدفاع المدني.' }
                ],
                cta: 'اطلب عرض أسعار رأس الخيمة'
            },
            'majlis-tent-rental': {
                title: 'تأجير خماس مجالس تقليدية في رأس الخيمة',
                subtitle: 'ضيافة إماراتية أصيلة لعقارك الخاص',
                intro: 'المجلس في رأس الخيمة هو تعبير عن التراث. نحن نصمم مساحات تكرم التقاليد بمعايير الرفاهية لعام 2026.',
                mainBody: 'تم تصميم حلول المجلس لدينا في رأس الخيمة لمن يقدرون أدق تفاصيل الضيافة الإماراتية. نحن نتولى التركيبات في الظيت وخزام وما وراءهما، مما يضمن بيئة خاصة ومكيفة لعائلتك.',
                features: [
                    { title: 'تركيز تراثي', body: 'سمات عربية أصيلة مع مفروشات تقليدية عالية الجودة.' },
                    { title: 'ملاذ خاص', body: 'تخطيط مكاني مدروس للخصوصية والراحة الكاملة.' },
                    { title: 'لكل الظروف الجوية', body: 'بنيت لتتحمل المناخات الصغيرة الفريدة في رأس الخيمة خلال موسم رمضان.' }
                ],
                cta: 'صمم مجلساً خاصاً'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام الإفطار الكبرى في رأس الخيمة',
                subtitle: 'بنية تحتية لضيافة الشركات والفنادق',
                intro: 'شارك Tent Now للحصول على أكثر تجهيزات الإفطار موثوقية في رأس الخيمة. نحن متخصصون في بنية الضيافة التحتية.',
                mainBody: 'من خلال دعم قطاعات السياحة والشركات المزدهرة في رأس الخيمة، نوفر خيام إفطار عالية السعة تعزز الإيرادات وتفاعل الموظفين. هياكلنا موجودة في أرقى فنادق رأس الخيمة والمراكز الصناعية.',
                features: [
                    { title: 'معايير الفنادق', body: 'تشطيبات داخلية 5 نجوم تتماشى مع سمعة علامتك التجارية.' },
                    { title: 'تركيب سريع', body: 'فرق تعبئة فعالة للمنتجعات الكبيرة والتركيبات الصناعية.' },
                    { title: 'دعم فني كامل', body: 'صيانة في الموقع على مدار الساعة طوال أيام الأسبوع لأنظمة المناخ والطاقة.' }
                ],
                cta: 'خطط لإفطار الضيوف'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور حديثة في رأس الخيمة',
                subtitle: 'صالات ليلية مميزة لضيوف المنتجعات والفلل',
                intro: 'السحور في رأس الخيمة يدور حول الأجواء. نحن ننشئ أروع بيئات صالات ما قبل الفجر في المنطقة.',
                mainBody: 'تحدد تجهيزات السحور لدينا في جزيرة المرجان والمناطق السكنية في رأس الخيمة مفهوم الفخامة الليلية. نتميز بمقاعد صالات حديثة، وإضاءة ذكية، وتهوية متخصصة لجو اجتماعي مثالي.',
                features: [
                    { title: 'نمط المنتجعات', body: 'ديكور ومفروشات معاصرة مصممة لإحساس الصالات الراقية.' },
                    { title: 'أجواء ذكية', body: 'إضاءة وصوت متكامل لتجربة ضيوف غامرة بالكامل.' },
                    { title: 'ابقَ بارداً', body: 'تكييف بدرجة صناعية مصمم لأقصى درجات الراحة حتى الفجر.' }
                ],
                cta: 'صمم تجهيز السحور'
            }
        },
        'fujairah': {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان احترافية في الفجيرة',
                subtitle: 'تجهيزات متينة وموثوقة للساحل الشرقي',
                intro: 'تتطلب جغرافية الفجيرة الفريدة خبرة متخصصة في الخيام. تقدم Tent Now هياكل شديدة التحمل تعمل في جميع الظروف.',
                mainBody: 'من وسط المدينة إلى دبا والشهداء، نوفر للفجيرة خيام رمضان متوافقة مع الدفاع المدني. هياكلنا مصممة للتعامل مع الهواء الساحلي الرطب ورياح الجبال القوية في الساحل الشرقي، مما يضمن السلامة والراحة طوال الشهر الفضيل.',
                features: [
                    { title: 'قوة هندسية', body: 'هياكل مصممة للظروف البيئية الفريدة في الفجيرة.' },
                    { title: 'تواجد محلي', body: 'فرق تعبئة جاهزة للنشر في جميع أنحاء الإمارة.' },
                    { title: 'تصاريح كاملة', body: 'نتولى جميع معاملات بلدية الفجيرة والدفاع المدني.' }
                ],
                cta: 'احصل على عرض أسعار الفجيرة'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيمة مجلس أصيلة في الفجيرة',
                subtitle: 'تراث تقليدي لعائلات الساحل الشرقي',
                intro: 'كرم تقاليد رمضان بمجلس مصمم خصيصاً. نحن ننقل قلب المنزل إلى فلل الفجيرة.',
                mainBody: 'تجمع تصميمات المجلس لدينا في الفجيرة بين الجماليات التقليدية وتكنولوجيا التبريد الحديثة. ننشئ مساحات حميمية للعائلات في الفصيل ومربح وما وراءهما، لضمان بيئة مثالية للضيافة.',
                features: [
                    { title: 'مصادر تراثية', body: 'سجاد ومقاعد عربية تقليدية تعكس ثقافة الفجيرة.' },
                    { title: 'تركيز على الراحة', body: 'تحكم متقدم في المناخ لأمسيات الفجيرة الرطبة.' },
                    { title: 'تنفيذ سريع', body: 'تركيب سريع وفعال مع حد أدنى من الإزعاج لمنزلك.' }
                ],
                cta: 'اطلب تصميماً'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام إفطار كبرى في الفجيرة',
                subtitle: 'دعم لضيافة الشركات والمجتمع',
                intro: 'بنية تحتية موثوقة لأكبر تجمعات الإفطار في الفجيرة. نحن متخصصون في البيئات الآمنة ذات السعة العالية.',
                mainBody: 'من خلال توفير خيام الإفطار للمراكز المجتمعية وعمالقة الصناعة في الفجيرة، تركز Tent Now على السلامة على نطاق واسع والانسيابية التشغيلية. هياكلنا هندسية لتناسب الحجم الكبير وقت الإفطار.',
                features: [
                    { title: 'سعة عالية', body: 'خيام ذات مساحات واسعة توفر مناطق مفتوحة وغير معاقة للمئات.' },
                    { title: 'تكييف صناعي', body: 'أقوى أنظمة التبريد المتاحة في الإمارات الشمالية.' },
                    { title: 'سلامة معتمدة', body: 'تلبية جميع متطلبات سلطات السلامة والصحة في الفجيرة.' }
                ],
                cta: 'خطط لتجمع الإفطار'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور هادئة في الفجيرة',
                subtitle: 'ملاذات ليلية للتواصل الاجتماعي',
                intro: 'السحور للتواصل والسكينة. نحن ننشئ الأجواء الهادئة التي يعتز بها سكان الفجيرة.',
                mainBody: 'توفر خيام السحور لدينا في الفجيرة تجربة اجتماعية راقية مع مقاعد مريحة وديكور هادئ. نحن متخصصون في خلق مزاج يشجع الضيوف على الاستمتاع بساعات ما قبل الفجر معاً.',
                features: [
                    { title: 'جو حميمي', body: 'إضاءة ناعمة وحشوات صوتية لمساحة اجتماعية هادئة.' },
                    { title: 'ديكور راقٍ', body: 'لمسات إماراتية تقليدية مدمجة مع وسائل الراحة الحديثة.' },
                    { title: 'التحكم في المناخ', body: 'الحفاظ على درجة حرارة مثالية تبلغ 21 درجة مئوية بغض النظر عن الرطوبة الخارجية.' }
                ],
                cta: 'صمم مساحة السحور'
            }
        },
        'umm-al-quwain': {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان موثوقة في أم القيوين',
                subtitle: 'تجهيزات تركز على المجتمع في السلامة وما وراءها',
                intro: 'تقاليد رمضان في أم القيوين متجذرة بعمق. توفر Tent Now البنية التحتية الاحترافية لدعم ضيافة الإمارة.',
                mainBody: 'من المناطق السكنية المتنامية في السلامة إلى التطويرات الساحلية، تقدم Tent Now أفضل قيمة وجودة في أم القيوين. نحن نتولى جميع موافقات الدفاع المدني والبلدية المحلية، لنسهل التجربة على العائلات والشركات على حد سواء.',
                features: [
                    { title: 'تركيب فعال', body: 'فرق نشر سريعة تضمن جاهزية خيمتك في الوقت المحدد.' },
                    { title: 'خبرة محلية', body: '30 عاماً من العمل مع لوائح أم القيوين وظروف الموقع الخاصة بها.' },
                    { title: 'راحة في المناخ', body: 'حلول تبريد عالية السعة مصممة لطقس أم القيوين الساحلي.' }
                ],
                cta: 'اطلب عرض أسعار أم القيوين'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيام مجالس تقليدية في أم القيوين',
                subtitle: 'تكريم التراث في منزلك الخاص',
                intro: 'ابنِ مجلساً يعكس كرم عائلتك. نحن متخصصون في التجهيزات التقليدية لمنازل أم القيوين.',
                mainBody: 'تركز حلول المجلس لدينا في أم القيوين على الأصالة والجودة. ننشئ بيئات جميلة ومكيفة للعائلات في الرملة والروضة وفي جميع أنحاء الإمارة، باستخدام تصميمات تقليدية لا تنتهي موضتها.',
                features: [
                    { title: 'تصاميم داخلية تراثية', body: 'سجاد وعناصر جلوس عربية أصيلة.' },
                    { title: 'الراحة والخصوصية', body: 'تخطيطات تركز على الخصوصية للتجمعات العائلية الحميمية.' },
                    { title: 'خدمة شاملة', body: 'ندير كل التفاصيل من تصريح البناء إلى التصميم الداخلي.' }
                ],
                cta: 'استشر خبراءنا'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام إفطار كبرى في أم القيوين',
                subtitle: 'بنية تحتية للضيافة لتجمعات واسعة النطاق',
                intro: 'استضف إفطارك مع الشريك التقني الأكثر ثقة في أم القيوين. نحن نوفر الحجم الذي تحتاجه للضيافة المجتمعية.',
                mainBody: 'نحن متخصصون في تجهيزات الإفطار واسعة النطاق لمساجد وشركات أم القيوين، ونركز على إدارة الحشود بأمان وانسيابية تشغيلية. تم تصميم هياكلنا لتحقيق أقصى قدر من السلامة والراحة خلال ساعات الذروة.',
                features: [
                    { title: 'نطاق واسع', body: 'هياكل قادرة على استضافة مئات الضيوف في وقت واحد.' },
                    { title: 'سلامة منظمة', body: 'بنيت بالامتثال الكامل لأكواد الحريق والسلامة في دفاع مدني أم القيوين.' },
                    { title: 'نظافة مثالية', body: 'تهوية وتخطيط مصمم لبيئات خدمة الطعام الفعالة.' }
                ],
                cta: 'خطط لتجهيز الإفطار'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور ذات أجواء مميزة في أم القيوين',
                subtitle: 'صالات هادئة للتواصل الاجتماعي في وقت متأخر من الليل',
                intro: 'السحور يدور حول التواصل. نحن نصمم البيئات الاجتماعية المثالية لدوائر أم القيوين الاجتماعية الليلية.',
                mainBody: 'توفر خيام السحور لدينا في أم القيوين تجربة راقية للتجمعات الاجتماعية قبل الفجر. مع الإضاءة المحيطة والمقاعد المريحة، ننشئ واحة من الضيافة تدعو الضيوف للبقاء حتى الصباح.',
                features: [
                    { title: 'جمالية الصالة', body: 'أثاث حديث يمتزج مع اللمسات الثقافية التقليدية لأم القيوين.' },
                    { title: 'راحة هادئة', body: 'خيام معزولة صوتياً تحافظ على سكون فعاليتك.' },
                    { title: 'تبريد كامل', body: 'أنظمة تكييف متطورة تبقي الرطوبة خارجاً والبرودة داخلاً.' }
                ],
                cta: 'صمم تجهيزات السحور'
            }
        }
    }
};
