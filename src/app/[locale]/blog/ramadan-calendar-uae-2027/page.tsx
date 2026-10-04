import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import BlogServiceCTA from '@/components/blog/BlogServiceCTA';
import FAQSchema from '@/components/seo/FAQSchema';
import { routing } from '@/i18n/routing';

// Dates are the International Astronomical Center's expected dates for 1448 AH,
// as reported by UAE media (Sep 2026). Update once the UAE confirms them.
const SLUG = 'ramadan-calendar-uae-2027';
const HERO = '/images/blog/ramadan-dubai-skyline-2026.png';
const PUBLISHED = '2026-10-04T08:00:00.000Z';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const c = content[locale === 'ar' ? 'ar' : 'en'];

    return {
        title: c.metaTitle,
        description: c.metaDescription,
        openGraph: {
            title: c.metaTitle,
            description: c.metaDescription,
            images: [{ url: `https://www.tentnow.ae${HERO}`, width: 1200, height: 630 }],
            type: 'article',
            publishedTime: PUBLISHED,
            authors: ['Tent Now'],
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title: c.metaTitle,
            description: c.metaDescription,
            images: [`https://www.tentnow.ae${HERO}`],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/${SLUG}`,
            languages: {
                'en': `https://www.tentnow.ae/en/blog/${SLUG}`,
                'ar': `https://www.tentnow.ae/ar/blog/${SLUG}`,
                'x-default': `https://www.tentnow.ae/en/blog/${SLUG}`,
            },
        },
    };
}

const content = {
    en: {
        metaTitle: 'Ramadan 2027 UAE Calendar | Expected Dates, Iftar Times & Eid',
        metaDescription: 'Ramadan 2027 in the UAE is expected to begin on Monday 8 February 2027, with Eid Al Fitr on 9 or 10 March. Expected dates, approximate iftar and suhoor times, and when to book a Ramadan tent.',
        h1: 'Ramadan 2027 UAE Calendar: Expected Dates, Iftar Times & Eid Al Fitr',
        badge: 'Guide',
        date: 'October 4, 2026',
        readTime: '5 min read',
        share: 'Share this guide:',
        intro: 'Ramadan 2027 (1448 AH) is expected to begin in the UAE on Monday 8 February 2027, according to astronomical calculations. The month is expected to end on 8 or 9 March, with Eid Al Fitr falling on Tuesday 9 March or Wednesday 10 March 2027, depending on the moon sighting.',
        datesHeading: 'Ramadan 2027 Key Dates in the UAE',
        dates: [
            { label: 'First Day of Ramadan', value: '8 February 2027', note: 'Monday (expected)' },
            { label: 'Last Day of Ramadan', value: '8 or 9 March 2027', note: '29 or 30 days' },
            { label: 'Eid Al Fitr', value: '9 or 10 March 2027', note: 'Subject to moon sighting' },
        ],
        sightingNote: 'These are expected dates based on astronomical calculations. The UAE Moon Sighting Committee confirms the official start of Ramadan and the date of Eid after sighting the crescent moon, so either date may move by one day.',
        timesHeading: 'Approximate Iftar & Suhoor Times for Ramadan 2027',
        timesIntro: 'Ramadan 2027 falls in February and March, when UAE days are short and evenings are cool, so fasts are among the shortest of the decade. Approximate times for Dubai:',
        times: [
            { label: 'Suhoor ends (Fajr)', start: 'around 5:35 AM', end: 'around 5:10 AM' },
            { label: 'Iftar (Maghrib)', start: 'around 6:15 PM', end: 'around 6:30 PM' },
        ],
        timesStart: 'Start of Ramadan',
        timesEnd: 'End of Ramadan',
        timesNote: 'Abu Dhabi is about 4 to 5 minutes later than Dubai; Sharjah and the Northern Emirates are 1 to 3 minutes earlier. Use the official IACAD or Awqaf timetable for exact daily prayer times once it is published.',
        bookingHeading: 'When to Book a Ramadan Tent for 2027',
        bookingIntro: 'With Ramadan starting in early February, the booking window is earlier than usual. Most hotels, companies and families settle their Ramadan setups between November and January.',
        booking: [
            { when: 'October to November 2026', what: 'Site visit, layout and budget. Best choice of sizes, majlis styles and dates.' },
            { when: 'December 2026', what: 'Confirm the booking. Municipality and Civil Defence permits for larger tents need lead time.' },
            { when: 'January 2027', what: 'Final details: AC, lighting, flooring, furniture and generators. Availability narrows quickly.' },
            { when: 'Early February 2027', what: 'Installation in the week before Ramadan starts on 8 February.' },
        ],
        servicesHeading: 'Ramadan Tent Options',
        services: [
            { href: '/services/iftar-tent-rental', label: 'Iftar tent rental for companies, hotels and communities' },
            { href: '/services/home-majlis', label: 'Private majlis tents for villas and family gatherings' },
            { href: '/services/hotel-majlis', label: 'Hotel and resort Ramadan tent extensions' },
            { href: '/blog/ramadan-tent-pricing-guide-uae-2026', label: 'Ramadan tent pricing guide' },
        ],
        ctaHeading: 'Plan Your Ramadan 2027 Tent Now',
        ctaBody: 'Tell us your guest count, location and dates. We will come back with a layout and a quote, including AC, lighting and furniture if you need them.',
        ctaButton: 'Request Free Quote',
        ctaSub: 'Ramadan 2027 expected to start 8 February',
        faqHeading: 'Frequently Asked Questions',
        faqs: [
            { q: 'When does Ramadan 2027 start in the UAE?', a: 'Ramadan 2027 is expected to start on Monday 8 February 2027, based on astronomical calculations. The UAE Moon Sighting Committee confirms the official date after sighting the crescent moon.' },
            { q: 'When is Eid Al Fitr 2027 in the UAE?', a: 'Eid Al Fitr 2027 is expected on Tuesday 9 March 2027 if the Shawwal crescent is sighted on 8 March, or on Wednesday 10 March if Ramadan completes 30 days.' },
            { q: 'How long are the fasts during Ramadan 2027 in the UAE?', a: 'Because Ramadan 2027 falls in February and March, fasts in the UAE are roughly 12.5 to 13.5 hours, from Fajr around 5:10 to 5:35 AM to Maghrib around 6:15 to 6:30 PM.' },
            { q: 'When should I book a Ramadan tent for 2027?', a: 'Book by December 2026. Ramadan starts in early February, so installation happens in the first week of February, and larger tents need municipality and Civil Defence permits in advance.' },
        ],
        closing: 'Ramadan Kareem from the Tent Now team.',
        relatedHeading: 'Related Articles',
        readMore: 'Read more →',
    },
    ar: {
        metaTitle: 'تقويم رمضان 2027 الإمارات | التواريخ المتوقعة ومواعيد الإفطار والعيد',
        metaDescription: 'من المتوقع أن يبدأ رمضان 2027 في الإمارات يوم الاثنين 8 فبراير 2027، ويكون عيد الفطر يوم 9 أو 10 مارس. التواريخ المتوقعة ومواعيد الإفطار والسحور التقريبية ومتى تحجز خيمة رمضان.',
        h1: 'تقويم رمضان 2027 في الإمارات: التواريخ المتوقعة ومواعيد الإفطار وعيد الفطر',
        badge: 'دليل',
        date: '4 أكتوبر 2026',
        readTime: '5 دقائق قراءة',
        share: 'شارك هذا الدليل:',
        intro: 'من المتوقع أن يبدأ شهر رمضان 2027 (1448 هـ) في دولة الإمارات يوم الاثنين 8 فبراير 2027 وفقاً للحسابات الفلكية. ومن المتوقع أن ينتهي الشهر يوم 8 أو 9 مارس، ليكون عيد الفطر يوم الثلاثاء 9 مارس أو الأربعاء 10 مارس 2027 حسب رؤية الهلال.',
        datesHeading: 'التواريخ الرئيسية لرمضان 2027 في الإمارات',
        dates: [
            { label: 'أول أيام رمضان', value: '8 فبراير 2027', note: 'الاثنين (متوقع)' },
            { label: 'آخر أيام رمضان', value: '8 أو 9 مارس 2027', note: '29 أو 30 يوماً' },
            { label: 'عيد الفطر', value: '9 أو 10 مارس 2027', note: 'حسب رؤية الهلال' },
        ],
        sightingNote: 'هذه تواريخ متوقعة مبنية على الحسابات الفلكية. تؤكد لجنة تحري الهلال في الإمارات بداية رمضان وموعد العيد رسمياً بعد رؤية الهلال، لذا قد يتغير أي من التاريخين بيوم واحد.',
        timesHeading: 'مواعيد الإفطار والسحور التقريبية لرمضان 2027',
        timesIntro: 'يأتي رمضان 2027 في فبراير ومارس، حين تكون الأيام قصيرة والأمسيات معتدلة في الإمارات، فتكون ساعات الصيام من الأقصر خلال هذا العقد. المواعيد التقريبية لدبي:',
        times: [
            { label: 'نهاية السحور (الفجر)', start: 'حوالي 5:35 صباحاً', end: 'حوالي 5:10 صباحاً' },
            { label: 'الإفطار (المغرب)', start: 'حوالي 6:15 مساءً', end: 'حوالي 6:30 مساءً' },
        ],
        timesStart: 'بداية رمضان',
        timesEnd: 'نهاية رمضان',
        timesNote: 'أبوظبي متأخرة عن دبي بنحو 4 إلى 5 دقائق، والشارقة والإمارات الشمالية متقدمة بدقيقة إلى 3 دقائق. اعتمد على إمساكية دائرة الشؤون الإسلامية أو الأوقاف للمواعيد اليومية الدقيقة عند صدورها.',
        bookingHeading: 'متى تحجز خيمة رمضان 2027؟',
        bookingIntro: 'مع بداية رمضان في أوائل فبراير، تبدأ فترة الحجز أبكر من المعتاد. تحسم معظم الفنادق والشركات والعائلات تجهيزات رمضان بين نوفمبر ويناير.',
        booking: [
            { when: 'أكتوبر إلى نوفمبر 2026', what: 'معاينة الموقع والتصميم والميزانية. أفضل خيارات المقاسات وأنماط المجالس والمواعيد.' },
            { when: 'ديسمبر 2026', what: 'تأكيد الحجز. تصاريح البلدية والدفاع المدني للخيام الكبيرة تحتاج وقتاً.' },
            { when: 'يناير 2027', what: 'التفاصيل النهائية: التكييف والإضاءة والأرضيات والأثاث والمولدات. يقل التوفر بسرعة.' },
            { when: 'أوائل فبراير 2027', what: 'التركيب في الأسبوع الذي يسبق بداية رمضان في 8 فبراير.' },
        ],
        servicesHeading: 'خيارات خيام رمضان',
        services: [
            { href: '/services/iftar-tent-rental', label: 'تأجير خيام الإفطار للشركات والفنادق والمجتمعات' },
            { href: '/services/home-majlis', label: 'خيام مجالس خاصة للفلل والتجمعات العائلية' },
            { href: '/services/hotel-majlis', label: 'خيام رمضان للفنادق والمنتجعات' },
            { href: '/blog/ramadan-tent-pricing-guide-uae-2026', label: 'دليل أسعار خيام رمضان' },
        ],
        ctaHeading: 'خطط لخيمة رمضان 2027 الآن',
        ctaBody: 'أخبرنا بعدد الضيوف والموقع والتواريخ، وسنرسل لك التصميم وعرض السعر، بما في ذلك التكييف والإضاءة والأثاث إن احتجت إليها.',
        ctaButton: 'اطلب عرض سعر مجاني',
        ctaSub: 'من المتوقع أن يبدأ رمضان 2027 في 8 فبراير',
        faqHeading: 'الأسئلة الشائعة',
        faqs: [
            { q: 'متى يبدأ رمضان 2027 في الإمارات؟', a: 'من المتوقع أن يبدأ رمضان 2027 يوم الاثنين 8 فبراير 2027 وفقاً للحسابات الفلكية، وتؤكد لجنة تحري الهلال في الإمارات الموعد الرسمي بعد رؤية الهلال.' },
            { q: 'متى عيد الفطر 2027 في الإمارات؟', a: 'من المتوقع أن يكون عيد الفطر 2027 يوم الثلاثاء 9 مارس إذا شوهد هلال شوال في 8 مارس، أو يوم الأربعاء 10 مارس إذا أكمل رمضان 30 يوماً.' },
            { q: 'كم عدد ساعات الصيام في رمضان 2027 في الإمارات؟', a: 'لأن رمضان 2027 يأتي في فبراير ومارس، تتراوح ساعات الصيام في الإمارات بين 12.5 و13.5 ساعة تقريباً، من الفجر حوالي 5:10 إلى 5:35 صباحاً حتى المغرب حوالي 6:15 إلى 6:30 مساءً.' },
            { q: 'متى أحجز خيمة رمضان 2027؟', a: 'احجز قبل نهاية ديسمبر 2026. يبدأ رمضان في أوائل فبراير، فيكون التركيب في الأسبوع الأول من فبراير، والخيام الكبيرة تحتاج تصاريح البلدية والدفاع المدني مسبقاً.' },
        ],
        closing: 'رمضان كريم من فريق Tent Now.',
        relatedHeading: 'مقالات ذات صلة',
        readMore: 'اقرأ المزيد ←',
    },
};

const related = [
    { href: '/blog/ramadan-calendar-uae-2026', en: 'Ramadan Calendar UAE 2026', ar: 'تقويم رمضان الإمارات 2026' },
    { href: '/blog/iftar-tent-rental-checklist-uae-2026', en: 'Iftar Tent Rental Checklist', ar: 'قائمة مراجعة تأجير خيمة الإفطار' },
    { href: '/blog/ramadan-tent-pricing-guide-uae-2026', en: 'Ramadan Tent Pricing Guide UAE', ar: 'دليل أسعار خيام رمضان الإمارات' },
];

export default function RamadanCalendar2027Page() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const c = content[isAr ? 'ar' : 'en'];
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/${SLUG}`;

    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir={isAr ? 'rtl' : 'ltr'}>
            <BlogSchema
                title={c.h1}
                description={c.metaDescription}
                image={HERO}
                datePublished={PUBLISHED}
                author="Tent Now"
                url={articleUrl}
            />
            <FAQSchema items={c.faqs} />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                <header className="mb-12 text-center">
                    <div className="relative w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-2xl border border-border">
                        <Image
                            src={HERO}
                            alt={isAr ? 'أفق دبي في رمضان' : 'Dubai skyline during Ramadan'}
                            fill
                            sizes="(max-width: 896px) 100vw, 896px"
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">{c.badge}</span>
                        <span>{c.date}</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        <span>{c.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        {c.h1}
                    </h1>
                </header>

                <div className="mb-12 border-y border-border py-4 flex justify-between items-center">
                    <span className="text-text-muted text-sm uppercase tracking-widest">{c.share}</span>
                    <ShareButtons url={articleUrl} title={c.h1} />
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-gold prose-a:text-gold prose-strong:text-white">
                    <p className="text-white/90 leading-relaxed mb-6">{c.intro}</p>

                    <h2 className="text-2xl md:text-3xl font-display text-gold mt-12 mb-4">{c.datesHeading}</h2>
                    <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                        {c.dates.map((d) => (
                            <div key={d.label} className="bg-bg-elevated rounded-xl p-6 border border-gold/20">
                                <div className="text-gold font-semibold mb-2 text-sm uppercase tracking-wider">{d.label}</div>
                                <div className="text-2xl font-bold text-white mb-1">{d.value}</div>
                                <div className="text-sm text-text-muted">{d.note}</div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-blue-900/20 border-s-4 border-blue-500 p-4 my-6 not-prose">
                        <p className="text-sm text-blue-200">{c.sightingNote}</p>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display text-gold mt-12 mb-4">{c.timesHeading}</h2>
                    <p className="text-white/90 leading-relaxed mb-4">{c.timesIntro}</p>
                    <div className="overflow-x-auto my-8 not-prose">
                        <table className="w-full text-sm bg-bg-elevated rounded-xl overflow-hidden">
                            <thead>
                                <tr className="text-gold text-start">
                                    <th className="p-4 text-start"></th>
                                    <th className="p-4 text-start">{c.timesStart}</th>
                                    <th className="p-4 text-start">{c.timesEnd}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {c.times.map((t) => (
                                    <tr key={t.label} className="border-t border-border">
                                        <td className="p-4 text-white font-semibold">{t.label}</td>
                                        <td className="p-4 text-text-muted">{t.start}</td>
                                        <td className="p-4 text-text-muted">{t.end}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-base text-text-muted">{c.timesNote}</p>

                    <h2 className="text-2xl md:text-3xl font-display text-gold mt-12 mb-4">{c.bookingHeading}</h2>
                    <p className="text-white/90 leading-relaxed mb-4">{c.bookingIntro}</p>
                    <ol className="not-prose space-y-4 my-8">
                        {c.booking.map((b) => (
                            <li key={b.when} className="bg-bg-elevated rounded-xl p-5 border border-border">
                                <div className="text-gold font-semibold mb-1">{b.when}</div>
                                <div className="text-text-muted">{b.what}</div>
                            </li>
                        ))}
                    </ol>

                    <h2 className="text-2xl md:text-3xl font-display text-gold mt-12 mb-4">{c.servicesHeading}</h2>
                    <ul className="list-disc ps-6 space-y-2 marker:text-gold">
                        {c.services.map((s) => (
                            <li key={s.href}>
                                <Link href={s.href} className="text-gold hover:underline">{s.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-bg-elevated p-8 rounded-2xl border border-gold/20 shadow-xl shadow-gold/5 my-12 not-prose text-center">
                        <h2 className="text-3xl font-display text-white mb-4">{c.ctaHeading}</h2>
                        <p className="text-text-muted mb-6">{c.ctaBody}</p>
                        <Link href="/request-quote" className="inline-block px-8 py-4 bg-gold text-bg-dark font-bold uppercase tracking-widest rounded-lg hover:bg-white transition-colors shadow-lg">
                            {c.ctaButton}
                        </Link>
                        <div className="mt-4 text-xs text-text-muted uppercase tracking-widest">{c.ctaSub}</div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display text-gold mt-12 mb-4">{c.faqHeading}</h2>
                    <div className="space-y-4 my-8 not-prose">
                        {c.faqs.map((f) => (
                            <details key={f.q} className="bg-bg-elevated p-6 rounded-xl border border-border group">
                                <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between gap-4">
                                    <span>{f.q}</span>
                                    <svg className="w-5 h-5 text-gold transition-transform group-open:rotate-180 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="mt-4 text-text-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>

                    <p className="text-center italic text-text-muted my-12">{c.closing}</p>

                    <div className="mt-12 pt-10 border-t border-white/10 not-prose">
                        <h3 className="text-xl font-display text-gold mb-6">{c.relatedHeading}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {related.map((r) => (
                                <Link
                                    key={r.href}
                                    href={r.href}
                                    className="block p-5 bg-[#1a212e] border border-[#282e39] rounded-xl hover:border-gold/40 transition-colors group"
                                >
                                    <p className="text-white/90 font-semibold text-sm leading-snug group-hover:text-gold transition-colors">
                                        {isAr ? r.ar : r.en}
                                    </p>
                                    <span className="mt-3 inline-block text-xs text-gold font-bold uppercase tracking-wider">{c.readMore}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <BlogServiceCTA variant="ramadan" />
                </div>
            </article>
        </main>
    );
}
