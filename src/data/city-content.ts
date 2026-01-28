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
                intro: 'From the luxury villas of Jumeirah and Al Barsha to the high-profile corporate events in DIFC and Downtown, Tent Now has been the trusted name in Dubai for three decades. We don’t just rent tents; we engineer environments that honor tradition and define luxury.',
                mainBody: 'Dubai’s Ramadan season is a unique blend of heritage and global sophistication. Whether you are hosting a private Iftar in Dubai Marina or a massive industrial catering setup in Jebel Ali or Dubai Investment Park (DIP), your choice of venue defines your hospitality. Tent Now brings thirty years of logistical mastery to the table, ensuring that your tent is not only beautiful but fully compliant with Dubai Civil Defense regulations and optimized for the unique humidity levels of February in the UAE.',
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
                mainBody: 'Tent Now specializes in high-capacity Iftar tents for Dubai’s corporate sector and community organizations. We design for flow—ensuring buffet lines, seating zones, and prayer areas work in harmony. Our structures in areas like Dubai Investment Park (DIP) and Al Quoz are engineered for maximum safety and comfort for hundreds of guests simultaneously.',
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
        },
        'abu-dhabi': {
            'ramadan-tent-rental': {
                title: 'Premium Ramadan Tent Rental in Abu Dhabi',
                subtitle: 'Majestic Structures for the Corniche, Khalifa City, and Yas Island',
                intro: 'In the capital, Ramadan is marked by a blend of grand state hospitality and intimate family heritage. Tent Now brings 30 years of engineering excellence to Abu Dhabi’s most prestigious locations.',
                mainBody: 'From the iconic Corniche to the modern estates of Khalifa City and the corporate hubs of Yas Island, our Abu Dhabi team delivers unmatched quality. We understand the specific Abu Dhabi Civil Defense (ADCD) requirements and the need for structures that reflect the capital’s majestic aesthetic. Whether it’s a high-profile governmental Iftar or a private Majlis in Al Mushrif, we ensure every detail is perfect.',
                features: [
                    { title: 'Capital Compliance', body: 'Full alignment with Abu Dhabi Civil Defense and Municipality safety standards for temporary structures.' },
                    { title: 'Majestic Finishing', body: 'High-end interior designs that match the architectural grandeur of Abu Dhabi’s top venues.' },
                    { title: 'Island Logistics', body: 'Specialized mobilization teams for Yas and Saadiyat Island installations, ensuring timely delivery.' }
                ],
                cta: 'Request Abu Dhabi Proposal'
            },
            'majlis-tent-rental': {
                title: 'Luxury Majlis Tent Rental in Abu Dhabi',
                subtitle: 'Exquisite Tradition for Al Bateen and Saadiyat Residences',
                intro: 'A Majlis in Abu Dhabi is a sanctuary of honor. We create high-end, private environments for the capital’s most distinguished families.',
                mainBody: 'Our Majlis solutions in Abu Dhabi cater to the unique needs of residential estates in Al Bateen, Al Mushrif, and Saadiyat Island. We focus on premium flooring, intricate woodwork, and bespoke fabrics that honor Emirati heritage. Every Abu Dhabi Majlis is a masterpiece of comfort and privacy, engineered to withstand the coastal breeze of the capital.',
                features: [
                    { title: 'Heritage Design', body: 'Traditional Arabic motifs integrated with modern luxury materials.' },
                    { title: 'VIP Seating', body: 'Custom-made floor majlis and lounge furniture designed for long evenings of hospitality.' },
                    { title: 'Climate Control', body: 'Discreet, high-capacity cooling systems that maintain a perfect environment without noise disruption.' }
                ],
                cta: 'Book Your Private Majlis'
            },
            'iftar-tent-rental': {
                title: 'Grand Iftar Tent Solutions in Abu Dhabi',
                subtitle: 'Hospitality Infrastructure for Corporate and Community Groups',
                intro: 'Host the perfect break of fast with Abu Dhabi’s most reliable tent partners. We specialize in high-capacity setups for 50 to 5,000 guests.',
                mainBody: 'Abu Dhabi’s corporate sector depends on Tent Now for seasonal Iftar tents that balance scale with elegance. Whether you are hosting staff Iftars in Musaffah or VIP gatherings in Al Reem, our structures are engineered for flow and safety. We integrate buffet stations, prayer areas, and guest zones into a single, seamless environment.',
                features: [
                    { title: 'Rapid Mobilization', body: 'Capable of deploying large-scale food-service structures anywhere in the Emirate.' },
                    { title: 'Hygiene Standards', body: 'Built for compliance with Abu Dhabi Agriculture and Food Safety Authority (ADAFSA).' },
                    { title: 'Heavy Duty Cooling', body: 'Massive AC arrays designed to keep guests cool even in high-occupancy environments.' }
                ],
                cta: 'Plan Your Iftar Setup'
            },
            'suhoor-tent-rental': {
                title: 'Sophisticated Suhoor Tents in Abu Dhabi',
                subtitle: 'Intimate Lounges for the Pre-Dawn Hours',
                intro: 'Suhoor in Abu Dhabi is an art form. We design the atmosphere that keeps guests comfortable until the first light of day.',
                mainBody: 'From the luxury hotel terraces of Saadiyat to private estates in Khalifa City, our Suhoor tents offer a refined lounge experience. We specialize in mood lighting, acoustic insulation, and modern lounge aesthetics. Our Abu Dhabi Suhoor setups are the preferred choice for those seeking a tranquil, high-end environment for nighttime gatherings.',
                features: [
                    { title: 'Lounge Luxury', body: 'Plush velvet seating and contemporary decor for a modern nocturnal vibe.' },
                    { title: 'Smart Lighting', body: 'Dimmable, programmable RGB lighting systems to set the perfect mood.' },
                    { title: 'Certified Ventilation', body: 'Advanced air extraction systems for shisha-permissible zones in full compliance with ADCD.' }
                ],
                cta: 'Design Suhoor Lounge'
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
                title: 'تأجير خيام رمضان فخمة في دبي',
                subtitle: '30 عاماً من التميز المعماري في جميرا، ومركز دبي المالي العالمي، وداون تاون',
                intro: 'من الفلل الفاخرة في جميرا والبرشاء إلى فعاليات الشركات المرموقة في DIFC وداون تاون، كانت Tent Now الاسم الموثوق به في دبي لمدة ثلاثة عقود. نحن لا نكتفي بتأجير الخيام؛ بل نصمم بيئات تكرم التقاليد وتحدد الفخامة.',
                mainBody: 'يعد موسم رمضان في دبي مزيجاً فريداً من التراث والرقي العالمي. سواء كنت تستضيف إفطاراً خاصاً في مرسى دبي أو تجهيزاً صناعياً ضخماً في جبل علي أو مجمع دبي للاستثمار (DIP)، فإن اختيارك للمكان يحدد ضيافتك. تقدم Tent Now ثلاثين عاماً من الإتقان اللوجستي، مما يضمن أن خيمتك متوافقة تماماً مع لوائح الدفاع المدني في دبي ومحسنة للتعامل مع مستويات الرطوبة في شهر فبراير.',
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
        },
        'abu-dhabi': {
            'ramadan-tent-rental': {
                title: 'تأجير خيام رمضان فخمة في أبوظبي',
                subtitle: 'هياكل مهيبة للكورنيش ومدينة خليفة وجزيرة ياس',
                intro: 'في العاصمة، يتميز رمضان بمزيج من كرم الضيافة الحكومية والتراث العائلي العريق. تقدم Tent Now 30 عاماً من التميز الهندسي في أرقى مواقع أبوظبي.',
                mainBody: 'من الكورنيش الشهير إلى العقارات الحديثة في مدينة خليفة والمراكز التجارية في جزيرة ياس، يقدم فريقنا في أبوظبي جودة لا تضاهى. نحن نتفهم المتطلبات الخاصة للدفاع المدني في أبوظبي (ADCD) والحاجة إلى هياكل تعكس الجمالية المهيبة للعاصمة. سواء كان ذلك إفطاراً حكومياً رفيع المستوى أو مجلساً خاصاً في المشرف، فإننا نضمن أن تكون كل التفاصيل مثالية.',
                features: [
                    { title: 'الامتثال للعاصمة', body: 'التوافق التام مع معايير السلامة في الدفاع المدني وبلدية أبوظبي للهياكل المؤقتة.' },
                    { title: 'تشطيبات مهيبة', body: 'تصاميم داخلية راقية تضاهي العظمة المعمارية لأرقى الأماكن في أبوظبي.' },
                    { title: 'لوجستيات الجزر', body: 'فرق تعبئة متخصصة لتركيبات جزيرة ياس والسعديات، مما يضمن التسليم في الوقت المحدد.' }
                ],
                cta: 'اطلب عرض أسعار أبوظبي'
            },
            'majlis-tent-rental': {
                title: 'تأجير خيام مجالس فاخرة في أبوظبي',
                subtitle: 'تراث رائع لسكان البطين والسعديات',
                intro: 'المجلس في أبوظبي هو ملتقى التقدير والكرم. نحن ننشئ بيئات خاصة وراقية للعائلات الأكثر تميزاً في العاصمة.',
                mainBody: 'تلبي حلول المجلس لدينا في أبوظبي الاحتياجات الفريدة للعقارات السكنية في البطين والمشرف وجزيرة السعديات. نحن نركز على الأرضيات الفاخرة، والأعمال الخشبية المعقدة، والأقمشة المخصصة التي تكرم التراث الإماراتي. كل مجلس في أبوظبي هو نسخة من الراحة والخصوصية، صممت لتتحمل نسيم البحر في العاصمة.',
                features: [
                    { title: 'تصميم تراثي', body: 'زخارف عربية تقليدية مدمجة مع مواد فاخرة حديثة.' },
                    { title: 'جلسات كبار الشخصيات', body: 'مجالس أرضية مصنعة خصيصاً وأثاث صالات مصمم لأمسيات ضيافة طويلة.' },
                    { title: 'التحكم في المناخ', body: 'أنظمة تكييف هادئة ذات سعة عالية تحافظ على بيئة مثالية دون إزعاج.' }
                ],
                cta: 'احجز مجلسك الخاص'
            },
            'iftar-tent-rental': {
                title: 'حلول خيام الإفطار الكبرى في أبوظبي',
                subtitle: 'بنية تحتية للضيافة للشركات والمجموعات المجتمعية',
                intro: 'استضف الإفطار المثالي مع شركاء الخيام الأكثر موثوقية في أبوظبي. نحن متخصصون في التجهيزات ذات السعة الكبيرة من 50 إلى 5000 ضيف.',
                mainBody: 'يعتمد قطاع الشركات في أبوظبي على Tent Now لخيام الإفطار الموسمية التي توازن بين الحجم والأناقة. سواء كنت تستضيف إفطاراً للموظفين في مصفح أو تجمعات كبار الشخصيات في الريم، فقد تم تصميم هياكلنا من أجل الانسيابية والسلامة. نحن ندمج محطات البوفيه ومناطق الصلاة ومناطق الضيوف في بيئة واحدة متكاملة.',
                features: [
                    { title: 'تعبئة سريعة', body: 'قادرون على نشر هياكل خدمة الطعام على نطاق واسع في أي مكان في الإمارة.' },
                    { title: 'معايير النظافة', body: 'بنيت لتتوافق مع معايير هيئة أبوظبي للزراعة والسلامة الغذائية (ADAFSA).' },
                    { title: 'تكييف شديد التحمل', body: 'مصفوفات تكييف ضخمة مصممة لإبقاء الضيوف في جو بارد حتى في البيئات المزدحمة.' }
                ],
                cta: 'خطط لتجهيز الإفطار'
            },
            'suhoor-tent-rental': {
                title: 'خيام سحور متطورة في أبوظبي',
                subtitle: 'صالات حميمية لساعات ما قبل الفجر',
                intro: 'السحور في أبوظبي هو فن بحد ذاته. نحن نصمم الأجواء التي تجعل الضيوف يشعرون بالراحة حتى مطلع الفجر.',
                mainBody: 'من تراسات الفنادق الفاخرة في السعديات إلى العقارات الخاصة في مدينة خليفة، توفر خيام السحور لدينا تجربة صالة راقية. نحن متخصصون في الإضاءة المحيطة، والعزل الصوتي، وجماليات الصالات الحديثة. تعد تجهيزات السحور لدينا في أبوظبي الخيار المفضل لمن يبحثون عن بيئة هادئة وراقية للتجمعات الليلية.',
                features: [
                    { title: 'فخامة الصالة', body: 'جلسات مخملية فاخرة وديكور معاصر لجو ليلي حديث.' },
                    { title: 'إضاءة ذكية', body: 'أنظمة إضاءة RGB قابلة للتعتيم والبرمجة لضبط الحالة المزاجية المثالية.' },
                    { title: 'تهوية معتمدة', body: 'أنظمة استخراج هواء متطورة للمناطق المسموح فيها بالشيشة بالامتثال الكامل للدفاع المدني.' }
                ],
                cta: 'صمم صالة السحور'
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
