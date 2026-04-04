import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'تأجير خيام رمضان في الإمارات | جميع الإمارات السبع - Tent Now'
        : 'Ramadan Tent Rental Across the UAE | All 7 Emirates - Tent Now';

    const description = locale === 'ar'
        ? 'تأجير خيام رمضان والمجالس في دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين. خبرة 30 عامًا في جميع الإمارات.'
        : 'Premium Ramadan tent and Majlis rental across all 7 UAE emirates. Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. 30 years of UAE-wide expertise.';

    return {
        title,
        description,
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/locations`,
            languages: {
                'en': 'https://www.tentnow.ae/en/locations',
                'ar': 'https://www.tentnow.ae/ar/locations',
                'x-default': 'https://www.tentnow.ae/en/locations',
            },
        },
    };
}

const cities = [
    {
        slug: 'dubai',
        name: 'Dubai',
        nameAr: 'دبي',
        description: 'Corporate, hotel & family Iftar tents. DIFC, Marina, Downtown, Palm Jumeirah and beyond.',
        descriptionAr: 'خيام إفطار للشركات والفنادق والعائلات. مركز دبي المالي والمارينا وداون تاون ونخلة جميرا وما بعدها.',
    },
    {
        slug: 'abu-dhabi',
        name: 'Abu Dhabi',
        nameAr: 'أبوظبي',
        description: 'Government, hotel & residential Majlis setups across the capital. Saadiyat, Yas Island, Corniche.',
        descriptionAr: 'تجهيزات مجالس حكومية وفندقية وسكنية عبر العاصمة. السعديات وجزيرة ياس والكورنيش.',
    },
    {
        slug: 'sharjah',
        name: 'Sharjah',
        nameAr: 'الشارقة',
        description: 'Culturally authentic Ramadan tents in the Cultural Capital. Al Majaz, University City & East Coast.',
        descriptionAr: 'خيام رمضانية أصيلة ثقافيًا في العاصمة الثقافية. المجاز والمدينة الجامعية والساحل الشرقي.',
    },
    {
        slug: 'ajman',
        name: 'Ajman',
        nameAr: 'عجمان',
        description: 'Premium Ramadan tent and Majlis rental across Ajman city and its free zones.',
        descriptionAr: 'تأجير خيام رمضان والمجالس الفاخرة في مدينة عجمان ومناطقها الحرة.',
    },
    {
        slug: 'ras-al-khaimah',
        name: 'Ras Al Khaimah',
        nameAr: 'رأس الخيمة',
        description: 'Ramadan tent and Majlis rental across RAK — from Al Nakheel to Al Hamra.',
        descriptionAr: 'تأجير خيام رمضان والمجالس في رأس الخيمة — من النخيل إلى الحمراء.',
    },
    {
        slug: 'fujairah',
        name: 'Fujairah',
        nameAr: 'الفجيرة',
        description: 'East Coast Ramadan tent and Majlis solutions for Fujairah city and surrounding areas.',
        descriptionAr: 'حلول خيام رمضان والمجالس على الساحل الشرقي لمدينة الفجيرة والمناطق المحيطة بها.',
    },
    {
        slug: 'umm-al-quwain',
        name: 'Umm Al Quwain',
        nameAr: 'أم القيوين',
        description: 'Ramadan tent rental and Majlis setups across Umm Al Quwain emirate.',
        descriptionAr: 'تأجير خيام رمضان وتجهيزات المجالس في إمارة أم القيوين.',
    },
];

export default async function LocationsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const isAr = locale === 'ar';

    return (
        <div className="bg-[#101622] pt-32 pb-20 min-h-screen" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="container-luxury">
                <div className="max-w-4xl mb-16 animate-fade-in-up">
                    <div className="section-label mb-6">
                        <span>{isAr ? 'مواقعنا' : 'Our Locations'}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display text-white mb-8 tracking-wide">
                        {isAr ? 'خيام رمضان في جميع الإمارات' : 'Ramadan Tent Rental Across the UAE'}
                    </h1>
                    <p className="text-xl text-[#9da6b9]">
                        {isAr
                            ? 'ثلاثة عقود من الخبرة في تقديم خيام رمضان والمجالس الفاخرة عبر جميع الإمارات السبع. من خيام الإفطار في دبي إلى المجالس السكنية في رأس الخيمة.'
                            : 'Three decades delivering premium Ramadan tents and Majlis setups across all seven UAE emirates. From corporate Iftar tents in Dubai to residential Majlis in Ras Al Khaimah.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/locations/${city.slug}`}
                            className="p-8 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-[#D4AF37]/50 transition-all group"
                        >
                            <h2 className="text-2xl font-display text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                {isAr ? city.nameAr : city.name}
                            </h2>
                            <p className="text-[#9da6b9] text-sm leading-relaxed">
                                {isAr ? city.descriptionAr : city.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
