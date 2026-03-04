import type { Metadata } from 'next';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import BlogSchema from '@/components/blog/BlogSchema';
import ShareButtons from '@/components/blog/ShareButtons';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'ar'
        ? 'دليل البقاء في الإمارات: ماذا تفعل عند هجوم بالطائرات المسيّرة أو الصواريخ 2026 | Tent Now'
        : 'UAE Survival Guide: What To Do During a Drone or Missile Attack 2026 | Tent Now';

    const description = locale === 'ar'
        ? 'دليل عملي للمقيمين في الإمارات لحمايتهم خلال التهديدات الجوية. خطوات فورية مثبتة، أماكن الإيواء، الإسعافات الأولية، وأرقام الطوارئ — بناءً على بروتوكولات الدفاع المدني الإماراتي.'
        : 'A practical guide for UAE residents on surviving drone and missile threats. Proven immediate steps, shelter locations, first aid, and emergency contacts — based on UAE Civil Defence protocols.';

    return {
        title,
        description,
        keywords: locale === 'ar'
            ? ['دليل الطوارئ الإمارات', 'هجوم طائرات مسيّرة', 'صواريخ الإمارات', 'نظام الإنذار المبكر', 'الدفاع المدني الإمارات', 'ملاجئ دبي', 'تنبيهات نسما']
            : ['UAE emergency guide', 'drone attack UAE', 'missile attack survival', 'NCEMA alert', 'UAE civil defence shelter', 'Dubai metro shelter', 'what to do drone attack UAE'],
        openGraph: {
            title,
            description,
            images: [{ url: '/images/blog/uae-survival-guide-hero.jpg', width: 1200, height: 630 }],
            type: 'article',
            publishedTime: '2026-03-03T08:00:00.000Z',
            authors: ['Tent Now'],
            section: locale === 'ar' ? 'السلامة العامة' : 'Public Safety',
            locale: locale === 'ar' ? 'ar_AE' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/images/blog/uae-survival-guide-hero.jpg'],
        },
        alternates: {
            canonical: `https://www.tentnow.ae/${locale}/blog/uae-drone-missile-survival-guide-2026`,
            languages: {
                'en': 'https://www.tentnow.ae/en/blog/uae-drone-missile-survival-guide-2026',
                'ar': 'https://www.tentnow.ae/ar/blog/uae-drone-missile-survival-guide-2026',
            },
        },
    };
}

export default function UAESurvivalGuidePage() {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const articleUrl = `https://www.tentnow.ae/${locale}/blog/uae-drone-missile-survival-guide-2026`;

    const articleTitle = isAr
        ? 'دليل البقاء في الإمارات: ماذا تفعل عند هجوم بالطائرات المسيّرة أو الصواريخ'
        : 'UAE Survival Guide: What To Do During a Drone or Missile Attack';

    if (isAr) {
        return (
            <main className="min-h-screen bg-bg-dark text-white font-sans" dir="rtl">
                <BlogSchema
                    title={articleTitle}
                    description="دليل عملي للمقيمين في الإمارات لحمايتهم خلال التهديدات الجوية. خطوات فورية مثبتة، أماكن الإيواء، الإسعافات الأولية، وأرقام الطوارئ."
                    image='/images/blog/uae-survival-guide-hero.jpg'
                    datePublished='2026-03-03T08:00:00.000Z'
                    author='Tent Now'
                    url={articleUrl}
                />

                <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                    {/* Header */}
                    <header className="mb-12 text-center">
                        <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4 flex-wrap">
                            <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                                السلامة العامة
                            </span>
                            <span>3 مارس 2026</span>
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            <span>10 دقائق قراءة</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                            دليل البقاء في الإمارات
                        </h1>
                        <p className="text-2xl text-white/80 font-semibold mb-4">
                            ماذا تفعل عند هجوم بالطائرات المسيّرة أو الصواريخ
                        </p>
                        <p className="text-muted text-lg max-w-2xl mx-auto">
                            دليل عملي للمقيمين والزوار في الإمارات — مبني على بروتوكولات الدفاع المدني الإماراتي والممارسات الدولية المثبتة
                        </p>
                    </header>

                    <ShareButtons url={articleUrl} title={articleTitle} />

                    {/* ⚠️ Disclaimer Box — AR */}
                    <div className="bg-amber-950/60 border-2 border-amber-400 rounded-2xl p-6 mb-8 mt-6">
                        <div className="flex items-start gap-3 mb-4">
                            <span className="text-3xl leading-none mt-0.5">⚠️</span>
                            <p className="text-amber-300 font-black text-xl uppercase tracking-wide leading-snug">
                                تنبيه مهم — يُرجى القراءة قبل التواصل معنا
                            </p>
                        </div>
                        <div className="space-y-3 text-white/90 text-base leading-relaxed pr-9">
                            <p className="font-bold text-white text-lg border-b border-amber-400/30 pb-3">
                                Tent Now شركة متخصصة في <span className="text-amber-300">تأجير الخيام للفعاليات</span> — مجالس رمضانية، أفراح، ومعارض تجارية.
                            </p>
                            <p className="font-black text-amber-300 text-base uppercase">
                                نحن لا نقدم ولن نقدم أياً من الخدمات التالية:
                            </p>
                            <ul className="space-y-1.5 text-white/85">
                                <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> ملاجئ أو بنكرات طوارئ</li>
                                <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> مخيمات إيواء أو مناطق حماية</li>
                                <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> مجموعات واتساب للطوارئ أو السلامة</li>
                                <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> أي استشارة أو خدمة تتعلق بالأزمات أو الدفاع المدني</li>
                            </ul>
                            <p className="font-bold text-white/90 pt-1">
                                هذا المقال نُشر <span className="text-amber-300 font-black">لأغراض توعوية فقط</span>، استناداً إلى بروتوكولات الدفاع المدني الإماراتي الرسمية.
                            </p>
                            <div className="bg-red-900/40 border border-red-500/50 rounded-xl p-4 mt-3">
                                <p className="text-red-300 font-black text-base text-center">
                                    🚫 يُرجى عدم الاتصال بنا أو مراسلتنا بشأن أي طارئ أو ملجأ أو بنكر أو أي موضوع ذُكر في هذا المقال
                                </p>
                                <p className="text-white/70 text-sm text-center mt-2">
                                    للطوارئ الفعلية: اتصل بـ الشرطة <strong className="text-white">999</strong> · الإسعاف <strong className="text-white">998</strong> · الدفاع المدني <strong className="text-white">997</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Alert Box */}
                    <div className="bg-red-900/30 border border-red-500/40 rounded-2xl p-6 mb-10 text-center">
                        <p className="text-red-300 font-bold text-lg mb-2">في حالة الطوارئ الفورية</p>
                        <p className="text-white text-3xl font-display font-bold tracking-widest">الشرطة: 999 &nbsp;|&nbsp; الإسعاف: 998 &nbsp;|&nbsp; الدفاع المدني: 997</p>
                        <p className="text-white/60 text-sm mt-2">اتبع دائماً تعليمات الهيئة الوطنية لإدارة الطوارئ والأزمات (نسما)</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/90 leading-relaxed">

                        {/* Introduction */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">لماذا هذا الدليل مهم الآن؟</h2>
                            <p>
                                في ظل التوترات الإقليمية المتصاعدة بين إيران وإسرائيل والولايات المتحدة، تعرّضت الإمارات لتهديدات جوية متكررة من طائرات مسيّرة وصواريخ. <strong className="text-white">الخبر الجيد:</strong> منظومة الدفاع الجوي الإماراتية من بين الأكثر تطوراً في العالم وتعترض معظم هذه التهديدات قبل وصولها. <strong className="text-white">الخطر الحقيقي المتبقّي</strong> هو الحطام الناجم عن الاعتراض — شظايا وأجزاء تتساقط على المناطق السكنية والطرق وأسطح المباني.
                            </p>
                            <p className="mt-4">
                                معظم الإصابات المُسجّلة في الحوادث الأخيرة بالإمارات لم تكن من الانفجار المباشر، بل من <strong className="text-white">تحطّم الزجاج والحطام المتطاير</strong>. هذا يعني أن الأفعال الصحيحة يمكنها فعلاً إنقاذ حياتك. اقرأ هذا الدليل، احفظ أرقام الطوارئ، وتصرّف بثبات.
                            </p>
                        </section>

                        {/* Section 1: Alert System */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">1. نظام الإنذار المبكر — خط دفاعك الأول</h2>
                            <p>
                                تعمل الهيئة الوطنية لإدارة الطوارئ والأزمات والكوارث (نسما) على إرسال تنبيهات طارئة مباشرة إلى هاتفك عبر تقنية <strong className="text-white">Cell Broadcast</strong> — التي لا تتطلب تسجيلاً ولا تحتاج لاشتراك، وتصل حتى للهواتف العاملة بالتجوال. يستقبلها الجميع في المنطقة المُحدَّدة تلقائياً.
                            </p>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-4">
                                <p className="text-gold font-bold mb-3">افعل هذا الآن — قبل أي طارئ:</p>
                                <ul className="space-y-2 text-white/85">
                                    <li className="flex items-start gap-2"><span className="text-gold mt-1">✓</span> تأكد من تفعيل تنبيهات الطوارئ على هاتفك (الإعدادات &gt; الإشعارات &gt; تنبيهات الطوارئ)</li>
                                    <li className="flex items-start gap-2"><span className="text-gold mt-1">✓</span> تابع حساب <strong className="text-white">@NCEMAUAE</strong> على منصة X للتحديثات الرسمية</li>
                                    <li className="flex items-start gap-2"><span className="text-gold mt-1">✓</span> لا تعتمد على وسائل التواصل الاجتماعي غير الرسمية — الشائعات تُضاعف الذعر</li>
                                </ul>
                            </div>

                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gold/20 text-gold">
                                            <th className="p-3 text-right border border-white/10">نوع التحذير</th>
                                            <th className="p-3 text-right border border-white/10">الوصف</th>
                                            <th className="p-3 text-right border border-white/10">الاستجابة الفورية</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-white/80">
                                        <tr className="border-b border-white/10">
                                            <td className="p-3 border border-white/10 font-semibold text-white">تنبيه نسما على الهاتف</td>
                                            <td className="p-3 border border-white/10">إشعار رسمي بالعربية والإنجليزية</td>
                                            <td className="p-3 border border-white/10 text-red-300 font-bold">تصرّف فوراً</td>
                                        </tr>
                                        <tr className="border-b border-white/10 bg-white/5">
                                            <td className="p-3 border border-white/10 font-semibold text-white">صفّارات الإنذار</td>
                                            <td className="p-3 border border-white/10">صوت متموّج عالٍ</td>
                                            <td className="p-3 border border-white/10 text-red-300 font-bold">احتمِ فوراً</td>
                                        </tr>
                                        <tr className="border-b border-white/10">
                                            <td className="p-3 border border-white/10 font-semibold text-white">دويّ الاعتراض</td>
                                            <td className="p-3 border border-white/10">انفجارات عالية في السماء</td>
                                            <td className="p-3 border border-white/10 text-red-300 font-bold">ابقَ في المخبأ</td>
                                        </tr>
                                        <tr className="bg-white/5">
                                            <td className="p-3 border border-white/10 font-semibold text-white">آثار دخان في السماء</td>
                                            <td className="p-3 border border-white/10">مسارات دخان أو حطام</td>
                                            <td className="p-3 border border-white/10 text-red-300 font-bold">لا تراقب — اختبئ</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 2: Indoor */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">2. إذا كنت داخل مبنى عند الإنذار</h2>
                            <p>هذا هو السيناريو الأكثر شيوعاً. الإجراء الصحيح بسيط ويمكن إنجازه في ثوانٍ:</p>

                            <div className="grid md:grid-cols-2 gap-4 mt-5">
                                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
                                    <p className="text-green-400 font-bold mb-3">افعل هذا</p>
                                    <ul className="space-y-2 text-white/85 text-sm">
                                        <li className="flex items-start gap-2"><span className="text-green-400">✓</span> انتقل فوراً إلى غرفة داخلية <strong>بلا نوافذ</strong> (الحمام، الممر، بيت الدرج)</li>
                                        <li className="flex items-start gap-2"><span className="text-green-400">✓</span> أغلق الستائر والمشمّعات على أي نافذة قريبة</li>
                                        <li className="flex items-start gap-2"><span className="text-green-400">✓</span> اجلس قرب الحائط الداخلي، انحنِ، وغطِّ رأسك وعنقك بذراعيك</li>
                                        <li className="flex items-start gap-2"><span className="text-green-400">✓</span> إن كنت في طابق عالٍ، استخدم <strong>السلالم فقط</strong> للنزول إلى طابق أدنى من العاشر</li>
                                        <li className="flex items-start gap-2"><span className="text-green-400">✓</span> ابقَ حتى صدور إعلان رسمي بالسلامة</li>
                                    </ul>
                                </div>
                                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
                                    <p className="text-red-400 font-bold mb-3">لا تفعل هذا</p>
                                    <ul className="space-y-2 text-white/85 text-sm">
                                        <li className="flex items-start gap-2"><span className="text-red-400">✗</span> لا تقف عند النوافذ أو الشرفات أبداً</li>
                                        <li className="flex items-start gap-2"><span className="text-red-400">✗</span> لا تستخدم المصعد (قد ينقطع الكهرباء)</li>
                                        <li className="flex items-start gap-2"><span className="text-red-400">✗</span> لا تصوّر أو تصوّر الأحداث الجوية (محظور قانونياً وخطر)</li>
                                        <li className="flex items-start gap-2"><span className="text-red-400">✗</span> لا تخرج حتى تسمع الإعلان الرسمي</li>
                                        <li className="flex items-start gap-2"><span className="text-red-400">✗</span> لا تنشر معلومات غير رسمية تُثير الذعر</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white/5 border border-gold/20 rounded-xl p-5 mt-4">
                                <p className="text-gold font-semibold mb-2">لماذا الابتعاد عن الزجاج هو الأهم؟</p>
                                <p className="text-white/80 text-sm">
                                    الزجاج يتحطم من موجة الانفجار حتى على مسافات بعيدة من نقطة التأثير. حتى في المباني الحديثة ذات الواجهات الزجاجية، يمكن أن تتكسّر الألواح وتتطاير كشظايا حادة. هذه كانت المصدر الرئيسي للإصابات في الحوادث الأخيرة بالإمارات.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Shelter */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">3. أفضل أماكن الإيواء في الإمارات</h2>
                            <p>ليس كل مكان يوفّر نفس مستوى الحماية. إليك التصنيف العملي:</p>

                            <div className="mt-5 overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gold/20 text-gold">
                                            <th className="p-3 text-right border border-white/10">مكان الإيواء</th>
                                            <th className="p-3 text-right border border-white/10">مستوى الحماية</th>
                                            <th className="p-3 text-right border border-white/10">التوافر</th>
                                            <th className="p-3 text-right border border-white/10">ملاحظة</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-white/80">
                                        {[
                                            ['بدروم / ملجأ', 'ممتاز جداً', 'محدود', 'بعض الفلل والفنادق'],
                                            ['محطات مترو دبي تحت الأرض', 'ممتاز', 'مترو دبي', 'مخصّصة رسمياً كملاجئ'],
                                            ['مواقف السيارات تحت الأرض', 'جيد جداً', 'واسع الانتشار', 'ابتعد عن السيارات ومناطق الوقود'],
                                            ['غرفة داخلية بلا نوافذ', 'جيد', 'في كل مبنى', 'الحمام، الممر، بيت الدرج'],
                                            ['داخل مول تجاري (بعيداً عن الأتريوم)', 'جيد', 'شائع جداً', 'ابتعد عن القباب الزجاجية'],
                                            ['بيت الدرج في الطوابق السفلية', 'جيد', 'في كل مبنى', 'النواة المركزية توفر حماية جيدة'],
                                        ].map(([shelter, level, avail, note], i) => (
                                            <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? 'bg-white/5' : ''}`}>
                                                <td className="p-3 border border-white/10 font-semibold text-white">{shelter}</td>
                                                <td className="p-3 border border-white/10">
                                                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${level === 'ممتاز جداً' ? 'bg-green-800/60 text-green-300' : level === 'ممتاز' ? 'bg-green-700/50 text-green-300' : level === 'جيد جداً' ? 'bg-blue-700/50 text-blue-300' : 'bg-white/10 text-white/70'}`}>
                                                        {level}
                                                    </span>
                                                </td>
                                                <td className="p-3 border border-white/10">{avail}</td>
                                                <td className="p-3 border border-white/10 text-white/60">{note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 4: Outdoors */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">4. إذا كنت في الخارج أو داخل سيارة</h2>

                            <div className="space-y-4">
                                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                    <p className="text-white font-bold mb-2">إذا كنت في الخارج:</p>
                                    <ol className="list-decimal list-inside space-y-2 text-white/85 text-sm">
                                        <li>ادخل أقرب مبنى فوراً — المولات والفنادق ومحطات المترو كلها خيارات مناسبة</li>
                                        <li>إذا لم يكن هناك مبنى قريب: ابحث عن أي انخفاض في الأرض (خندق، ممر تحت الأرض)</li>
                                        <li>استلقِ على بطنك، يداك فوق رأسك وعنقك</li>
                                        <li>تجنّب مواقف السيارات المكشوفة والشواطئ والحدائق والمواقع الإنشائية</li>
                                    </ol>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                    <p className="text-white font-bold mb-2">إذا كنت في سيارة:</p>
                                    <ol className="list-decimal list-inside space-y-2 text-white/85 text-sm">
                                        <li>إذا كان هناك مبنى قريب: أوقف السيارة بأمان وادخل المبنى فوراً</li>
                                        <li>إذا لم يكن ممكناً: أوقف السيارة بعيداً عن الجسور والأنفاق والمنشآت الشاهقة</li>
                                        <li>ابقَ داخل السيارة — توفّر بعض الحماية من الحطام المتساقط</li>
                                        <li>انزل في المقعد إلى أسفل خط النافذة وغطِّ رأسك</li>
                                        <li>لا تقف في الطرق السريعة ولا تعطّل حركة المرور</li>
                                    </ol>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: After */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">5. بعد الحادثة — أخطار لا يعرفها الكثيرون</h2>

                            <div className="bg-yellow-900/30 border border-yellow-500/40 rounded-xl p-5 mb-5">
                                <p className="text-yellow-300 font-bold mb-2">تحذير مهم: الحطام لا يزال خطيراً بعد الاعتراض</p>
                                <p className="text-white/80 text-sm">
                                    أجزاء الصواريخ والطائرات المسيّرة المعترَضة قد تحتوي على بقايا متفجرة غير منفجرة، مواد سامة، أو أجزاء حادة شديدة الحرارة. في حوادث أخيرة، تساقط الحطام على أسطح المباني والطرق والمناطق السكنية.
                                </p>
                            </div>

                            <ul className="space-y-3 text-white/85">
                                <li className="flex items-start gap-3">
                                    <span className="text-gold font-bold mt-0.5">1.</span>
                                    <span><strong className="text-white">انتظر الإعلان الرسمي</strong> بالسلامة من نسما قبل الخروج — هجمات متعددة الموجات واردة</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold font-bold mt-0.5">2.</span>
                                    <span><strong className="text-white">لا تلمس أي حطام</strong> أو أجسام مشبوهة — لا تقترب منها ولا تصوّرها من مسافة قريبة</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold font-bold mt-0.5">3.</span>
                                    <span><strong className="text-white">أبلغ فوراً عن أي جسم مشبوه</strong> عبر الاتصال بـ 999 وأعطِ الموقع الدقيق دون الاقتراب</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold font-bold mt-0.5">4.</span>
                                    <span>افحص منزلك أو مكتبك للتأكد من عدم تضرّر الكهرباء والغاز والمياه قبل استئناف النشاط الطبيعي</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-gold font-bold mt-0.5">5.</span>
                                    <span>الشعور بالقلق بعد حادثة طارئة أمر طبيعي تماماً. لا تتردد في طلب الدعم النفسي</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 6: First Aid */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">6. إسعافات أولية للإصابات الشائعة</h2>
                            <p className="text-white/80 mb-4 text-sm">
                                معظم الإصابات في بيئة الإمارات تأتي من الشظايا والحطام، لا من الانفجار المباشر. هذه الخطوات مثبتة طبياً وتفيد حتى تصل الإسعاف (998):
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    {
                                        title: 'نزيف شديد',
                                        steps: ['اضغط بقوة وثبات على الجرح بقطعة قماش نظيفة أو شاش', 'حافظ على الضغط ولا ترفعه حتى يصل المسعفون', 'لا تُزيل أي جسم غريب مغروس في الجرح — إزالته تُفاقم النزيف'],
                                        color: 'red'
                                    },
                                    {
                                        title: 'شظايا وجروح صغيرة',
                                        steps: ['الشظايا السطحية يمكن إزالتها بملقط', 'لا تحاول إخراج شيء مغروس بعمق', 'نظّف الجرح بالماء النظيف وضع ضمادة', 'راقب علامات الصدمة: شحوب، تنفس سريع، ارتباك'],
                                        color: 'orange'
                                    },
                                    {
                                        title: 'حروق',
                                        steps: ['غطِّ الحرق بقماش نظيف وجاف', 'لا تضع ثلجاً أو زبداً أو أي مواد على الحرق', 'اتصل بـ 998 لأي حرق يزيد عن حجم الكف'],
                                        color: 'yellow'
                                    },
                                    {
                                        title: 'متى تطلب إسعافاً فوراً',
                                        steps: ['صعوبة في التنفس أو ألم في الصدر', 'فقدان وعي أو ارتباك شديد', 'ألم في البطن أو طنين في الأذنين بعد انفجار', 'أي إصابة قريبة من مصدر انفجار حتى لو بدت خفيفة'],
                                        color: 'red'
                                    },
                                ].map((item, i) => (
                                    <div key={i} className={`bg-white/5 border border-${item.color}-500/30 rounded-xl p-5`}>
                                        <p className="font-bold text-white mb-2">{item.title}</p>
                                        <ul className="space-y-1 text-white/80 text-sm">
                                            {item.steps.map((s, j) => (
                                                <li key={j} className="flex items-start gap-2">
                                                    <span className="text-gold mt-0.5">•</span>
                                                    <span>{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7: Kit */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">7. حقيبة الطوارئ — ما تحتاجه لـ 72 ساعة</h2>
                            <p className="text-white/80 mb-4 text-sm">
                                في الإمارات، العامل المناخي حاسم: درجات الحرارة تتجاوز 45°م صيفاً. الماء ليس خياراً — إنه ضرورة حياة. المعيار الدولي لكميات المياه (4 لترات/يوم) هو حدٌّ أدنى في المناخ الخليجي.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="bg-gold/20 text-gold">
                                            <th className="p-3 text-right border border-white/10">الفئة</th>
                                            <th className="p-3 text-right border border-white/10">المحتويات الأساسية</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-white/80">
                                        {[
                                            ['الماء', '4 لترات على الأقل لكل شخص يومياً — احتفظ بمخزون 72 ساعة'],
                                            ['الغذاء', 'أغذية غير قابلة للتلف (تونة معلبة، بسكويت، مكسرات)'],
                                            ['الإسعافات الأولية', 'ضمادات، معقّم، دواء دوري، كمامات N95 للغبار'],
                                            ['الطاقة والضوء', 'مصباح يدوي، بطاريات، باور بانك مشحون، شاحن سيارة'],
                                            ['الوثائق', 'جواز سفر، هوية إماراتية، تأمين — نسخ في حقيبة مقاومة للماء + نسخة رقمية مشفّرة'],
                                            ['نقود', 'مبالغ صغيرة من النقد — لا تعتمد على البطاقات في الطوارئ'],
                                            ['الاتصال', 'راديو يعمل بالبطاريات، قائمة أرقام الطوارئ مكتوبة'],
                                        ].map(([cat, items], i) => (
                                            <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? 'bg-white/5' : ''}`}>
                                                <td className="p-3 border border-white/10 font-semibold text-white">{cat}</td>
                                                <td className="p-3 border border-white/10">{items}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Emergency Contacts */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">8. أرقام الطوارئ — احفظها الآن</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    { service: 'الشرطة / طوارئ عامة', num: '999' },
                                    { service: 'الإسعاف', num: '998' },
                                    { service: 'الدفاع المدني', num: '997' },
                                    { service: 'خفر السواحل', num: '996' },
                                    { service: 'الإنقاذ والبحث', num: '995' },
                                    { service: 'نسما (معلومات)', num: '800 NCEMA' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                        <p className="text-3xl font-display font-bold text-gold">{item.num}</p>
                                        <p className="text-white/70 text-xs mt-1">{item.service}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-white/50 text-xs mt-3 text-center">تعمل هذه الأرقام في جميع إمارات الدولة على مدار الساعة</p>
                        </section>

                        {/* Ramadan Note */}
                        <section className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
                            <h2 className="text-xl font-display text-gold mb-3">ملاحظة خاصة في شهر رمضان</h2>
                            <p className="text-white/85 text-sm leading-relaxed">
                                خلال شهر رمضان المبارك، تزداد التجمعات في المساجد أوقات الصلاة — خاصة صلاة الجمعة والتراويح. في حالة إطلاق إنذار أثناء الصلاة، <strong className="text-white">الأولوية للسلامة</strong>. أصدرت السلطات الإماراتية توجيهات سابقة تُجيز أداء الصلاة في المنزل وتعليق التجمعات الدينية حفاظاً على الأرواح. كذلك خلال التحلق حول موائد الإفطار والسحور، تأكد أن أفراد أسرتك يعرفون خطة الطوارئ وأماكن التجمع.
                            </p>
                        </section>

                        {/* Summary */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">الخلاصة العملية — 5 قواعد لا تنساها</h2>
                            <div className="space-y-3">
                                {[
                                    ['فعّل تنبيهات الطوارئ على هاتفك الآن', 'لا تنتظر حتى تحدث الأزمة'],
                                    ['ابتعد عن النوافذ والزجاج فوراً', 'هذا أكثر إجراء يُنقذ الأرواح في سياق الإمارات'],
                                    ['اذهب تحت الأرض إذا أمكن', 'مترو دبي ومواقف السيارات تحت الأرض — أفضل ملاجئك'],
                                    ['لا تلمس الحطام بعد الحادثة', 'قد يحتوي على متفجرات غير منفجرة — أبلغ عنه بـ 999'],
                                    ['انتظر الإعلان الرسمي', 'نسما هي مصدرك الوحيد الموثوق'],
                                ].map(([rule, reason], i) => (
                                    <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                                        <span className="text-gold font-display font-bold text-2xl mt-0.5 min-w-[2rem] text-center">{i + 1}</span>
                                        <div>
                                            <p className="text-white font-semibold">{rule}</p>
                                            <p className="text-white/60 text-sm">{reason}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <p className="text-white/40 text-xs text-center border-t border-white/10 pt-6">
                            هذا المقال مُعدّ لأغراض التوعية العامة استناداً لبروتوكولات الدفاع المدني الإماراتي والممارسات الدولية. في حالات الطوارئ، اتبع دائماً التوجيهات الرسمية الصادرة عن نسما والجهات الحكومية المختصة.
                        </p>
                    </div>

                    <div className="mt-10">
                        <ShareButtons url={articleUrl} title={articleTitle} />
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <Link href="/blog" className="text-gold hover:text-white transition-colors font-semibold">
                            ← العودة إلى المدونة
                        </Link>
                    </div>
                </article>
            </main>
        );
    }

    // English version
    return (
        <main className="min-h-screen bg-bg-dark text-white font-sans" dir="ltr">
            <BlogSchema
                title={articleTitle}
                description="A practical guide for UAE residents on surviving drone and missile threats. Proven immediate steps, shelter locations, first aid, and emergency contacts — based on UAE Civil Defence protocols."
                image='/images/blog/uae-survival-guide-hero.jpg'
                datePublished='2026-03-03T08:00:00.000Z'
                author='Tent Now'
                url={articleUrl}
            />

            <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gold font-bold uppercase tracking-wider mb-4 flex-wrap">
                        <span className="bg-gold/10 px-3 py-1 rounded-full text-gold border border-gold/20">
                            Public Safety
                        </span>
                        <span>March 3, 2026</span>
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                        <span>10 min read</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-display text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold mb-6 leading-tight">
                        UAE Survival Guide
                    </h1>
                    <p className="text-2xl text-white/80 font-semibold mb-4">
                        What To Do During a Drone or Missile Attack
                    </p>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        A practical guide for UAE residents and visitors — based on UAE Civil Defence protocols (NCEMA) and internationally proven emergency procedures
                    </p>
                </header>

                <ShareButtons url={articleUrl} title={articleTitle} />

                {/* ⚠️ Disclaimer Box — EN */}
                <div className="bg-amber-950/60 border-2 border-amber-400 rounded-2xl p-6 mb-8 mt-6">
                    <div className="flex items-start gap-3 mb-4">
                        <span className="text-3xl leading-none mt-0.5">⚠️</span>
                        <p className="text-amber-300 font-black text-xl uppercase tracking-wide leading-snug">
                            Important Disclaimer — Please Read Before Contacting Us
                        </p>
                    </div>
                    <div className="space-y-3 text-white/90 text-base leading-relaxed pl-9">
                        <p className="font-bold text-white text-lg border-b border-amber-400/30 pb-3">
                            Tent Now is a <span className="text-amber-300">premium event tent rental company</span> — we provide Ramadan majlis tents, wedding marquees, and commercial tent solutions across the UAE.
                        </p>
                        <p className="font-black text-amber-300 text-base uppercase">
                            We do not and cannot provide any of the following:
                        </p>
                        <ul className="space-y-1.5 text-white/85">
                            <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> Bunkers or bomb shelters of any kind</li>
                            <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> Emergency shelters or safe zones</li>
                            <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> WhatsApp safety/emergency groups</li>
                            <li className="flex items-center gap-2"><span className="text-red-400 font-black text-lg">✗</span> Civil defence guidance or crisis response services</li>
                        </ul>
                        <p className="font-bold text-white/90 pt-1">
                            This article is published <span className="text-amber-300 font-black">for informational purposes only</span>, based on official UAE Civil Defence and NCEMA protocols.
                        </p>
                        <div className="bg-red-900/40 border border-red-500/50 rounded-xl p-4 mt-3">
                            <p className="text-red-300 font-black text-base text-center">
                                🚫 Please do NOT call, WhatsApp, or email us about emergencies, shelters, bunkers, or anything described in this article
                            </p>
                            <p className="text-white/70 text-sm text-center mt-2">
                                For real emergencies, call: Police <strong className="text-white">999</strong> · Ambulance <strong className="text-white">998</strong> · Civil Defence <strong className="text-white">997</strong>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Emergency Alert Box */}
                <div className="bg-red-900/30 border border-red-500/40 rounded-2xl p-6 mb-10 text-center">
                    <p className="text-red-300 font-bold text-lg mb-2">In an Immediate Emergency</p>
                    <p className="text-white text-2xl md:text-3xl font-display font-bold tracking-widest">
                        Police: 999 &nbsp;|&nbsp; Ambulance: 998 &nbsp;|&nbsp; Civil Defence: 997
                    </p>
                    <p className="text-white/60 text-sm mt-2">Always follow instructions from NCEMA (National Emergency Crisis and Disaster Management Authority)</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none space-y-10 text-white/90 leading-relaxed">

                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">Why This Guide Matters Right Now</h2>
                        <p>
                            With escalating regional tensions involving Iran, Israel, and the US, the UAE has experienced repeated aerial threats from drones and missiles. <strong className="text-white">The good news:</strong> the UAE&apos;s air defence system is among the most advanced in the world and intercepts the vast majority of incoming threats before they hit. <strong className="text-white">The real remaining danger</strong> is debris from these interceptions — shrapnel and fragments raining down on residential areas, roads, and rooftops.
                        </p>
                        <p className="mt-4">
                            Most recorded injuries in recent UAE incidents were not from direct explosions — they came from <strong className="text-white">shattered glass and falling debris</strong>. This means taking the right actions can genuinely save your life. Read this guide, save the emergency numbers, and act with calm purpose.
                        </p>
                    </section>

                    {/* Section 1: Alert System */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">1. The UAE Early Warning System — Your First Line of Defence</h2>
                        <p>
                            NCEMA operates the UAE&apos;s emergency alert system using <strong className="text-white">Cell Broadcast technology</strong> — it pushes notifications directly to every mobile phone in the affected area, regardless of whether the phone is UAE-registered or on roaming. No sign-up required. Tourists and visitors receive it too.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-4">
                            <p className="text-gold font-bold mb-3">Do this now — before any emergency:</p>
                            <ul className="space-y-2 text-white/85">
                                <li className="flex items-start gap-2"><span className="text-gold mt-1">✓</span> Enable emergency alerts on your phone (Settings &gt; Notifications &gt; Emergency Alerts)</li>
                                <li className="flex items-start gap-2"><span className="text-gold mt-1">✓</span> Follow <strong className="text-white">@NCEMAUAE</strong> on X for real-time official updates</li>
                                <li className="flex items-start gap-2"><span className="text-gold mt-1">✓</span> Ignore unofficial social media during emergencies — rumours multiply panic and can get people killed</li>
                            </ul>
                        </div>

                        <div className="mt-5 overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gold/20 text-gold">
                                        <th className="p-3 text-left border border-white/10">Warning Type</th>
                                        <th className="p-3 text-left border border-white/10">Description</th>
                                        <th className="p-3 text-left border border-white/10">Your Response</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white/80">
                                    {[
                                        ['NCEMA Mobile Alert', 'Official SMS in Arabic & English', 'Act immediately'],
                                        ['Air Raid Siren', 'Wailing alternating-pitch sound', 'Seek shelter now'],
                                        ['Interception Booms', 'Loud blasts from air defence', 'Stay sheltered — event in progress'],
                                        ['Smoke Trails in Sky', 'Debris or contrails visible', "Don't watch — take cover"],
                                    ].map(([type, desc, resp], i) => (
                                        <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? 'bg-white/5' : ''}`}>
                                            <td className="p-3 border border-white/10 font-semibold text-white">{type}</td>
                                            <td className="p-3 border border-white/10">{desc}</td>
                                            <td className="p-3 border border-white/10 text-red-300 font-bold">{resp}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 2: Indoors */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">2. If You Are Indoors When the Alert Sounds</h2>
                        <p>This is the most common scenario. The correct response is simple and can be completed in seconds:</p>

                        <div className="grid md:grid-cols-2 gap-4 mt-5">
                            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-5">
                                <p className="text-green-400 font-bold mb-3">DO THIS</p>
                                <ul className="space-y-2 text-white/85 text-sm">
                                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Move immediately to an interior room with <strong>no windows</strong> (bathroom, hallway, stairwell)</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Close curtains or blinds on any nearby window</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Sit against an interior wall, crouch low, cover your head and neck with your arms</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> If on a high floor, use <strong>stairs only</strong> to descend below the 10th floor if time permits</li>
                                    <li className="flex items-start gap-2"><span className="text-green-400">✓</span> Stay put until you receive an official all-clear from NCEMA</li>
                                </ul>
                            </div>
                            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-5">
                                <p className="text-red-400 font-bold mb-3">DO NOT DO THIS</p>
                                <ul className="space-y-2 text-white/85 text-sm">
                                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Never stand at windows or step onto balconies</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Do not use the elevator (power may be disrupted)</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Do not photograph or film aerial activity (illegal under UAE law in certain circumstances, and it costs you precious seconds)</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Do not go outside until you receive official clearance</li>
                                    <li className="flex items-start gap-2"><span className="text-red-400">✗</span> Do not spread unverified information</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-gold/20 rounded-xl p-5 mt-4">
                            <p className="text-gold font-semibold mb-2">Why glass distance is the single most important action</p>
                            <p className="text-white/80 text-sm">
                                Blast pressure from an interception can shatter glass at considerable distances from the impact point. UAE&apos;s modern towers frequently feature floor-to-ceiling glass curtain walls — beautiful architecture that becomes a fragmentation hazard during a blast event. In recent UAE incidents, the majority of civilian injuries came from broken glass and debris, not direct explosions. Getting even one interior wall between yourself and exterior glass is a meaningful improvement in survival odds.
                            </p>
                        </div>
                    </section>

                    {/* Section 3: Shelter */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">3. Best Shelter Options in the UAE</h2>
                        <p>Not all shelters are equal. Here is the practical ranking for UAE&apos;s unique urban environment:</p>

                        <div className="mt-5 overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gold/20 text-gold">
                                        <th className="p-3 text-left border border-white/10">Shelter Type</th>
                                        <th className="p-3 text-left border border-white/10">Protection Level</th>
                                        <th className="p-3 text-left border border-white/10">UAE Availability</th>
                                        <th className="p-3 text-left border border-white/10">Note</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white/80">
                                    {[
                                        ['Basement / Bunker', 'Best', 'Limited', 'Some villas and hotels have basements'],
                                        ['Dubai Metro Underground Stations', 'Excellent', 'Dubai Metro lines', 'Officially designated safe zones by authorities'],
                                        ['Underground Parking Garages', 'Very Good', 'Widely available', 'Stay away from vehicles and fuel areas'],
                                        ['Interior Room (no windows)', 'Good', 'Every building', 'Bathrooms, hallways, stairwells'],
                                        ['Shopping Mall Interior', 'Good', 'Abundant', 'Move away from glass atriums — go to basement or inner areas'],
                                        ['Lower-Floor Stairwell', 'Good', 'Every building', 'Central core construction provides solid protection'],
                                    ].map(([shelter, level, avail, note], i) => (
                                        <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? 'bg-white/5' : ''}`}>
                                            <td className="p-3 border border-white/10 font-semibold text-white">{shelter}</td>
                                            <td className="p-3 border border-white/10">
                                                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${level === 'Best' ? 'bg-green-800/60 text-green-300' : level === 'Excellent' ? 'bg-green-700/50 text-green-300' : level === 'Very Good' ? 'bg-blue-700/50 text-blue-300' : 'bg-white/10 text-white/70'}`}>
                                                    {level}
                                                </span>
                                            </td>
                                            <td className="p-3 border border-white/10">{avail}</td>
                                            <td className="p-3 border border-white/10 text-white/60">{note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Section 4: Outdoors / Vehicle */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">4. If You Are Outdoors or in a Vehicle</h2>

                        <div className="space-y-4">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                <p className="text-white font-bold mb-2">If you are outdoors:</p>
                                <ol className="list-decimal list-inside space-y-2 text-white/85 text-sm">
                                    <li>Enter the nearest building immediately — malls, hotels, metro stations, and any concrete structure are all appropriate</li>
                                    <li>If no building is within reach: find the lowest ground available — a ditch, underpass, or culvert</li>
                                    <li>Lie face-down with both hands covering your head and neck</li>
                                    <li>Avoid open-air car parks, beaches, parks, and construction sites — all leave you exposed to falling debris</li>
                                </ol>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                                <p className="text-white font-bold mb-2">If you are in a vehicle:</p>
                                <ol className="list-decimal list-inside space-y-2 text-white/85 text-sm">
                                    <li>If a building is nearby: park safely and enter it immediately</li>
                                    <li>If not: pull over away from overpasses, bridges, tall structures, and fuel stations</li>
                                    <li>Remain inside the vehicle — it offers some protection from falling debris</li>
                                    <li>Position yourself below the window line and cover your head</li>
                                    <li>Never stop on a highway or block lanes — emergency services need to move freely</li>
                                </ol>
                            </div>
                        </div>
                    </section>

                    {/* Section 5: After the Incident */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">5. After the Incident — The Hazards Most People Don&apos;t Know About</h2>

                        <div className="bg-yellow-900/30 border border-yellow-500/40 rounded-xl p-5 mb-5">
                            <p className="text-yellow-300 font-bold mb-2">Critical: Intercepted debris is still dangerous</p>
                            <p className="text-white/80 text-sm">
                                Components of intercepted missiles and drones can contain unexploded ordnance (UXO), hazardous materials, or extremely sharp, hot fragments scattered over a wide area. During recent incidents, debris has landed on residential buildings, roads, and public spaces across the UAE.
                            </p>
                        </div>

                        <ul className="space-y-3 text-white/85">
                            {[
                                ['Wait for the official all-clear', 'NCEMA will broadcast this via mobile alert and official channels. Multiple attack waves are possible — do not emerge prematurely.'],
                                ['Never touch, approach, or photograph debris', 'Even at close range, photography is risky and prohibited. Call 999, give the location, and keep others away.'],
                                ['Report suspicious objects to 999', 'Provide precise location and description without approaching. Note GPS coordinates or nearby landmarks.'],
                                ['Check utilities before resuming normal activity', 'Inspect your home or workplace for damage to gas lines, water, and electricity. Report faults to relevant authorities.'],
                                ['Recognise post-event stress as normal', "Anxiety after emergency situations is a natural response. Seek support from family, friends, or professional counsellors without hesitation."],
                            ].map(([title, detail], i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="text-gold font-bold mt-0.5 min-w-[1.5rem]">{i + 1}.</span>
                                    <span><strong className="text-white">{title}:</strong> {detail}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Section 6: First Aid */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">6. First Aid for Common Blast Injuries</h2>
                        <p className="text-white/80 mb-4 text-sm">
                            In the UAE context, the most common injuries are from shrapnel and debris, not direct explosions. These evidence-based steps apply while waiting for paramedics (call 998):
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    title: 'Severe Bleeding',
                                    steps: [
                                        'Apply firm, direct pressure using clean cloth or gauze',
                                        'Maintain pressure continuously until paramedics arrive',
                                        'Do NOT remove any embedded object — removal worsens bleeding',
                                    ],
                                },
                                {
                                    title: 'Shrapnel / Fragment Wounds',
                                    steps: [
                                        'Superficial fragments may be removed with tweezers',
                                        'Never attempt to remove deeply embedded objects',
                                        'Clean with clean water, cover with a clean bandage',
                                        'Monitor for shock: pale skin, rapid breathing, confusion',
                                    ],
                                },
                                {
                                    title: 'Burns',
                                    steps: [
                                        'Cover with clean, dry cloth',
                                        'Do NOT apply ice, butter, or any substance to the burn',
                                        'Call 998 for any burn larger than the palm of a hand',
                                    ],
                                },
                                {
                                    title: 'Seek Emergency Care Immediately For',
                                    steps: [
                                        'Difficulty breathing or chest pain',
                                        'Loss of consciousness or severe confusion',
                                        'Abdominal pain or ringing in the ears after an explosion',
                                        'Any proximity to a blast — even if injuries seem minor (internal pressure injuries may not show symptoms immediately)',
                                    ],
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                                    <p className="font-bold text-white mb-2">{item.title}</p>
                                    <ul className="space-y-1 text-white/80 text-sm">
                                        {item.steps.map((s, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <span className="text-gold mt-0.5">•</span>
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 7: Emergency Kit */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">7. Emergency Supply Kit — 72-Hour Readiness</h2>
                        <p className="text-white/80 mb-4 text-sm">
                            In the UAE, the climate is a critical survival factor. Summer temperatures exceed 45°C (113°F), making water not optional but essential. The international standard of 4 litres per person per day is a <em>minimum</em> in Gulf climate conditions. Prepare this kit now, not during a crisis.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-gold/20 text-gold">
                                        <th className="p-3 text-left border border-white/10">Category</th>
                                        <th className="p-3 text-left border border-white/10">What to Include</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white/80">
                                    {[
                                        ['Water', 'Minimum 4 litres per person per day — store at least a 72-hour supply. Add cooling towels for UAE heat.'],
                                        ['Food', 'Non-perishable items: canned goods, crackers, nuts, protein bars. No cooking required.'],
                                        ['Medical', 'First aid kit, bandages, antiseptic, prescription medications, N95 masks (for post-incident dust)'],
                                        ['Power & Light', 'Torch with spare batteries, fully-charged power bank, car charger. Test monthly.'],
                                        ['Documents', 'Passport, Emirates ID, insurance docs in waterproof pouch + encrypted digital backup'],
                                        ['Cash', 'Small denomination notes — do not rely on card payments during emergencies'],
                                        ['Communications', 'Battery-powered radio, written list of emergency contacts (do not rely solely on your phone)'],
                                    ].map(([cat, items], i) => (
                                        <tr key={i} className={`border-b border-white/10 ${i % 2 === 1 ? 'bg-white/5' : ''}`}>
                                            <td className="p-3 border border-white/10 font-semibold text-white">{cat}</td>
                                            <td className="p-3 border border-white/10">{items}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Emergency Contacts */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">8. Emergency Contact Numbers — Save These Now</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                                { service: 'Police / General Emergency', num: '999' },
                                { service: 'Ambulance', num: '998' },
                                { service: 'Civil Defence (Fire)', num: '997' },
                                { service: 'Coastguard', num: '996' },
                                { service: 'Search and Rescue', num: '995' },
                                { service: 'NCEMA (Crisis Info)', num: '+971 2 417 7000' },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                                    <p className="text-3xl font-display font-bold text-gold">{item.num}</p>
                                    <p className="text-white/70 text-xs mt-1">{item.service}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-white/50 text-xs mt-3 text-center">All numbers operate across all seven Emirates, 24 hours a day</p>
                    </section>

                    {/* Ramadan Note */}
                    <section className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
                        <h2 className="text-xl font-display text-gold mb-3">A Note for Ramadan</h2>
                        <p className="text-white/85 text-sm leading-relaxed">
                            During Ramadan, mosque attendance peaks at Friday prayers and Taraweeh. If an alert sounds during prayer time, <strong className="text-white">life takes priority over congregation</strong>. UAE authorities have previously issued guidance permitting prayers to be performed at home during emergencies and suspending public religious gatherings for safety. Equally, with families gathered around Iftar and Suhoor tables, ensure every household member knows the emergency plan, the location of the nearest interior room, and the family meeting point.
                        </p>
                    </section>

                    {/* Summary */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-display text-gold mb-4">Summary — 5 Rules That Can Save Your Life</h2>
                        <div className="space-y-3">
                            {[
                                ['Enable NCEMA emergency alerts on your phone today', "Don't wait for a crisis to discover your alerts were off"],
                                ['Get away from windows and glass immediately', 'The single highest-impact survival action in the UAE context'],
                                ['Go underground when possible', 'Dubai Metro stations and underground parking are your best shelters'],
                                ["Don't touch post-incident debris", 'It may contain unexploded ordnance — report to 999 and keep distance'],
                                ['Wait for the official all-clear', 'NCEMA is your only trustworthy source — not social media'],
                            ].map(([rule, reason], i) => (
                                <div key={i} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
                                    <span className="text-gold font-display font-bold text-2xl mt-0.5 min-w-[2rem] text-center">{i + 1}</span>
                                    <div>
                                        <p className="text-white font-semibold">{rule}</p>
                                        <p className="text-white/60 text-sm">{reason}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <p className="text-white/40 text-xs text-center border-t border-white/10 pt-6">
                        This article is prepared for public awareness purposes based on UAE Civil Defence (NCEMA) protocols and internationally validated emergency management best practices. In all emergency situations, always follow the official guidance issued by NCEMA and relevant UAE government authorities.
                    </p>
                </div>

                <div className="mt-10">
                    <ShareButtons url={articleUrl} title={articleTitle} />
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center">
                    <Link href="/blog" className="text-gold hover:text-white transition-colors font-semibold">
                        ← Back to Blog
                    </Link>
                </div>
            </article>
        </main>
    );
}
