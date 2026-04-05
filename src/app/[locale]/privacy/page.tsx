import { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isAr = locale === 'ar';
    return {
        title: isAr ? 'سياسة الخصوصية | Tent Now' : 'Privacy Policy | Tent Now',
        description: isAr
            ? 'سياسة خصوصية Tent Now — كيف نجمع معلوماتك ونستخدمها ونحميها.'
            : 'Tent Now Privacy Policy — how we collect, use, and protect your information.',
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/privacy`,
            languages: {
                'en': 'https://www.tentnow.ae/en/privacy',
                'ar': 'https://www.tentnow.ae/ar/privacy',
                'x-default': 'https://www.tentnow.ae/en/privacy',
            },
        },
        robots: { index: true, follow: true },
    };
}

export default async function PrivacyPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const isAr = locale === 'ar';

    return (
        <div className="bg-[#101622] pt-32 pb-20 min-h-screen" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="container-luxury max-w-3xl">
                <div className="mb-10">
                    <div className="section-label mb-6">
                        <span>{isAr ? 'القانونية' : 'Legal'}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display text-white mb-4">
                        {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
                    </h1>
                    <p className="text-[#9da6b9] text-sm">
                        {isAr ? 'آخر تحديث: أبريل 2026' : 'Last updated: April 2026'}
                    </p>
                </div>

                <div className="prose prose-invert max-w-none space-y-8 text-[#9da6b9] leading-relaxed">

                    {isAr ? (
                        <>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">١. مقدمة</h2>
                                <p>تعمل شركة Tent Now ("نحن" أو "الشركة") على موقع tentnow.ae. توضح هذه السياسة كيفية جمع معلوماتك الشخصية واستخدامها وحمايتها عند استخدام خدماتنا أو التواصل معنا.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">٢. المعلومات التي نجمعها</h2>
                                <p>قد نجمع المعلومات التالية:</p>
                                <ul className="list-disc ps-6 space-y-2 mt-3">
                                    <li>الاسم وبيانات الاتصال (البريد الإلكتروني، رقم الهاتف)</li>
                                    <li>تفاصيل الفعالية أو المشروع المقدمة عبر نماذج طلب العروض</li>
                                    <li>بيانات الاستخدام والتصفح عبر ملفات تعريف الارتباط (الكوكيز)</li>
                                    <li>بيانات الموقع الجغرافي العامة عبر خدمات التحليل</li>
                                </ul>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">٣. كيف نستخدم معلوماتك</h2>
                                <p>نستخدم المعلومات المجمعة من أجل:</p>
                                <ul className="list-disc ps-6 space-y-2 mt-3">
                                    <li>تقديم عروض الأسعار والرد على استفساراتك</li>
                                    <li>إرسال معلومات تتعلق بخدماتنا (بموافقتك)</li>
                                    <li>تحسين موقعنا الإلكتروني وتجربة المستخدم</li>
                                    <li>الامتثال للالتزامات القانونية</li>
                                </ul>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">٤. مشاركة البيانات</h2>
                                <p>لا نبيع بياناتك الشخصية لأي طرف ثالث. قد نشارك المعلومات مع مزودي الخدمات الضروريين (الاستضافة، التحليلات) الذين يلتزمون بمعايير حماية البيانات المعتمدة.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">٥. ملفات تعريف الارتباط</h2>
                                <p>يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربتك. يمكنك تعطيل ملفات تعريف الارتباط من إعدادات متصفحك، إلا أن ذلك قد يؤثر على بعض وظائف الموقع.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">٦. حقوقك</h2>
                                <p>يحق لك في أي وقت: الوصول إلى بياناتك الشخصية، تصحيحها، أو طلب حذفها. للتواصل بشأن بياناتك يرجى مراسلتنا على: <a href="mailto:info@tentnow.ae" className="text-gold hover:underline">info@tentnow.ae</a></p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">٧. التواصل معنا</h2>
                                <p>لأي استفسارات تتعلق بهذه السياسة، يرجى التواصل معنا:</p>
                                <p className="mt-2">Tent Now — SAIF Zone, Sharjah, UAE<br />
                                البريد الإلكتروني: <a href="mailto:info@tentnow.ae" className="text-gold hover:underline">info@tentnow.ae</a><br />
                                الهاتف: <a href="tel:+971501826969" className="text-gold hover:underline">+971 50 182 6969</a></p>
                            </section>
                        </>
                    ) : (
                        <>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">1. Introduction</h2>
                                <p>Tent Now ("we", "our", "us") operates tentnow.ae. This policy explains how we collect, use, and protect your personal information when you use our services or contact us.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">2. Information We Collect</h2>
                                <p>We may collect the following information:</p>
                                <ul className="list-disc ps-6 space-y-2 mt-3">
                                    <li>Name and contact details (email address, phone number)</li>
                                    <li>Event or project details submitted via quote request forms</li>
                                    <li>Usage and browsing data via cookies and analytics</li>
                                    <li>General geographic location data via analytics services</li>
                                </ul>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">3. How We Use Your Information</h2>
                                <p>We use collected information to:</p>
                                <ul className="list-disc ps-6 space-y-2 mt-3">
                                    <li>Provide quotes and respond to your enquiries</li>
                                    <li>Send information about our services (with your consent)</li>
                                    <li>Improve our website and user experience</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">4. Data Sharing</h2>
                                <p>We do not sell your personal data to any third party. We may share information with necessary service providers (hosting, analytics) who adhere to data protection standards.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">5. Cookies</h2>
                                <p>Our website uses cookies to improve your experience. You can disable cookies through your browser settings, though this may affect some website functionality.</p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">6. Your Rights</h2>
                                <p>You have the right to access, correct, or request deletion of your personal data at any time. To exercise these rights, contact us at: <a href="mailto:info@tentnow.ae" className="text-gold hover:underline">info@tentnow.ae</a></p>
                            </section>
                            <section>
                                <h2 className="text-xl font-display text-white mb-3">7. Contact Us</h2>
                                <p>For any questions regarding this policy, please contact:</p>
                                <p className="mt-2">Tent Now — SAIF Zone, Sharjah, UAE<br />
                                Email: <a href="mailto:info@tentnow.ae" className="text-gold hover:underline">info@tentnow.ae</a><br />
                                Phone: <a href="tel:+971501826969" className="text-gold hover:underline">+971 50 182 6969</a></p>
                            </section>
                        </>
                    )}
                </div>

                <div className="mt-12 pt-8 border-t border-[#282e39]">
                    <Link href="/" className="text-gold hover:underline text-sm">
                        {isAr ? '← العودة إلى الرئيسية' : '← Back to Home'}
                    </Link>
                </div>
            </div>
        </div>
    );
}
