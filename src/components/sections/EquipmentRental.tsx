import { Link } from '@/i18n/navigation';
import { AirVent, Zap, Fan, Lightbulb, Armchair, ArrowRight } from 'lucide-react';

type Props = {
    locale: string;
    className?: string;
};

const icons = [AirVent, Zap, Fan, Lightbulb, Armchair];

const content = {
    en: {
        label: 'Equipment Rental',
        title: 'AC, Generator, Fan, Lighting & Furniture Rental',
        body: 'Every item below can be rented with a tent or on its own, for any site in the UAE — short-term or long-term. We deliver, install, connect and maintain it for the full hire period.',
        items: [
            { title: 'AC Rental', body: 'Package and portable AC units sized to the tent volume, ducted in to keep storage, offices and event spaces cool through the UAE summer.' },
            { title: 'Generator Rental', body: 'Silent diesel generators to power lighting, AC and equipment on sites without a mains connection, with fuel and maintenance options.' },
            { title: 'Fan & Cooling Rental', body: 'Industrial fans and misting fans for warehouses, workshops, labour areas and outdoor events where full AC is not required.' },
            { title: 'Lighting & Electrical Works', body: 'High-bay LED lighting, distribution boards, sockets and complete electrical works installed and tested by our team.' },
            { title: 'Furniture Rental', body: 'Tables, chairs, beds, lockers and office furniture for site offices, camps, dining halls and events.', href: '/services/furniture-rental' },
        ],
        cta: 'Get an Equipment Quote',
    },
    ar: {
        label: 'تأجير المعدات',
        title: 'تأجير المكيفات والمولدات والمراوح والإضاءة والأثاث',
        body: 'يمكن استئجار جميع المعدات أدناه مع الخيمة أو بشكل منفصل لأي موقع في الإمارات — لفترات قصيرة أو طويلة. نتولى التوصيل والتركيب والتوصيل الكهربائي والصيانة طوال فترة الإيجار.',
        items: [
            { title: 'تأجير المكيفات', body: 'وحدات تكييف مركزية ومتنقلة بقدرات تناسب حجم الخيمة، لتبريد مساحات التخزين والمكاتب والفعاليات خلال صيف الإمارات.' },
            { title: 'تأجير المولدات', body: 'مولدات ديزل صامتة لتشغيل الإضاءة والتكييف والمعدات في المواقع غير المتصلة بالكهرباء، مع خيارات الوقود والصيانة.' },
            { title: 'تأجير المراوح وأنظمة التبريد', body: 'مراوح صناعية ومراوح رذاذ للمستودعات والورش ومناطق العمال والفعاليات الخارجية التي لا تحتاج إلى تكييف كامل.' },
            { title: 'الإضاءة والأعمال الكهربائية', body: 'إضاءة LED عالية، ولوحات توزيع ومقابس وأعمال كهربائية كاملة يتم تركيبها واختبارها من قبل فريقنا.' },
            { title: 'تأجير الأثاث', body: 'طاولات وكراسي وأسرّة وخزائن وأثاث مكتبي للمكاتب الميدانية والمخيمات وقاعات الطعام والفعاليات.', href: '/services/furniture-rental' },
        ],
        cta: 'اطلب عرض سعر للمعدات',
    },
};

export default function EquipmentRental({ locale, className = '' }: Props) {
    const c = locale === 'ar' ? content.ar : content.en;

    return (
        <section className={`py-24 border-t border-[#1a212e] ${className}`}>
            <div className="container-luxury">
                <div className="max-w-3xl mb-12">
                    <div className="section-label mb-6">
                        <span>{c.label}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display text-white mb-4">{c.title}</h2>
                    <p className="text-[#9da6b9] text-lg leading-relaxed">{c.body}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {c.items.map((item, idx) => {
                        const Icon = icons[idx];
                        const inner = (
                            <>
                                <Icon className="text-gold mb-4" size={28} />
                                <h3 className="text-white text-lg font-bold mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                                <p className="text-[#9da6b9] text-sm leading-relaxed">{item.body}</p>
                            </>
                        );
                        const cls = 'group p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl hover:border-gold/30 transition-all';
                        return 'href' in item && item.href ? (
                            <Link key={item.title} href={item.href} className={cls}>{inner}</Link>
                        ) : (
                            <div key={item.title} className={cls}>{inner}</div>
                        );
                    })}
                </div>
                <Link
                    href="/request-quote"
                    className="mt-10 inline-flex items-center gap-2 text-gold font-bold border-b border-gold/40 pb-1 hover:border-gold transition-colors"
                >
                    {c.cta} <ArrowRight size={16} className="rtl:rotate-180" />
                </Link>
            </div>
        </section>
    );
}
