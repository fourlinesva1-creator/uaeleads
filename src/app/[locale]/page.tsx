import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Experience from '@/components/sections/Experience';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import QuickQuote from '@/components/sections/QuickQuote';
import Locations from '@/components/sections/Locations';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';
import FAQSchema from '@/components/seo/FAQSchema';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'ar'
    ? 'تأجير خيام الإمارات | خيام تخزين وفعاليات | Tent Now'
    : 'Tent Rental UAE | Storage & Event Tents | Tent Now';

  const description = locale === 'ar'
    ? 'تأجير خيام احترافي في الإمارات — خيام تخزين، إعدادات فعاليات ومنشآت مخصصة في دبي وأبوظبي والشارقة. احصل على عرض سعر مجاني خلال ساعتين.'
    : 'Premium tent rental in UAE — storage tents, event setups & custom structures for Dubai, Abu Dhabi & Sharjah. Get a free quote within 2 hours.';

  return {
    title,
    description,
    keywords: locale === 'ar'
      ? ['تأجير خيام الإمارات', 'خيام تخزين', 'خيام فعاليات', 'مجالس رمضان', 'خيام دبي', 'خيام أبوظبي', 'تنت ناو']
      : ['tent rental UAE', 'storage tents UAE', 'event tents UAE', 'Ramadan majlis tent', 'tent rental Dubai', 'tent rental Abu Dhabi', 'Tent Now'],
    openGraph: {
      title,
      description,
      url: `https://www.tentnow.ae/${locale}`,
      siteName: 'Tent Now',
      images: [{ url: 'https://www.tentnow.ae/images/og-homepage.jpg', width: 1200, height: 630 }],
      type: 'website',
      locale: locale === 'ar' ? 'ar_AE' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.tentnow.ae/${locale}`,
      languages: {
        'en': 'https://www.tentnow.ae/en',
        'ar': 'https://www.tentnow.ae/ar',
        'x-default': 'https://www.tentnow.ae/en',
      },
    },
  };
}

const homeFaqsEn = [
  { q: 'How much does Ramadan tent rental cost in the UAE?', a: 'Ramadan tent rental in the UAE ranges from AED 3,000 for small home majlis setups to AED 50,000+ for large hotel or corporate iftar events. Pricing depends on tent size, duration, decor package, and emirate. Contact Tent Now for a free custom quote.' },
  { q: 'How far in advance should I book a Ramadan tent?', a: 'We recommend booking 4–8 weeks before Ramadan begins. Premium hotel and corporate setups with full décor often book out 10–12 weeks ahead. Early booking also ensures the best structure selections and permits are processed in time.' },
  { q: 'Do Ramadan tent structures require Civil Defence approval?', a: 'Yes. All temporary structures in the UAE require Civil Defence approval and municipality permits. Tent Now handles all permitting as part of the service — including Dubai Municipality, Abu Dhabi DMT, Sharjah, and all other emirates.' },
  { q: 'Does Tent Now provide tent rental across all 7 Emirates?', a: 'Yes. Tent Now serves all 7 UAE Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — with local teams and logistics for fast deployment across the country.' },
];

const homeFaqsAr = [
  { q: 'ما تكلفة تأجير خيمة رمضان في الإمارات؟', a: 'تتراوح أسعار تأجير خيام رمضان في الإمارات من 3,000 درهم للمجالس المنزلية الصغيرة إلى أكثر من 50,000 درهم للفعاليات الفندقية والشركاتية الكبيرة. تواصل مع Tent Now للحصول على عرض مجاني مخصص.' },
  { q: 'متى يجب حجز خيمة رمضان؟', a: 'نوصي بالحجز قبل 4-8 أسابيع من بداية رمضان. الإعدادات الفندقية والشركاتية الكبيرة غالباً ما تُحجز قبل 10-12 أسبوعاً. الحجز المبكر يضمن أفضل الخيارات وإتمام إجراءات التصاريح في الوقت المناسب.' },
  { q: 'هل تحتاج خيام رمضان إلى موافقة الدفاع المدني؟', a: 'نعم. جميع المنشآت المؤقتة في الإمارات تتطلب موافقة الدفاع المدني وتصاريح البلدية. Tent Now تتولى جميع التصاريح كجزء من الخدمة — بما في ذلك بلدية دبي وDMT أبوظبي والشارقة وسائر الإمارات.' },
  { q: 'هل تقدم Tent Now خدماتها في جميع إمارات الدولة السبع؟', a: 'نعم. Tent Now تخدم جميع الإمارات السبع — دبي وأبوظبي والشارقة وعجمان ورأس الخيمة والفجيرة وأم القيوين — مع فرق محلية ولوجستيات للنشر السريع.' },
];

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqs = locale === 'ar' ? homeFaqsAr : homeFaqsEn;

  return (
    <>
      <FAQSchema items={faqs} />
      <Hero />
      <TrustBar />
      <Experience />
      <Services />
      <Testimonials />
      <QuickQuote />
      <Portfolio />
      <Locations />
      <CTA />
    </>
  );
}
