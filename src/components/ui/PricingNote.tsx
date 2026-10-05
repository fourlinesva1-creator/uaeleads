import { RATES_UPDATED } from '@/data/calculator/rates';
import { formatDate } from '@/lib/calculator/format';

interface PricingNoteProps {
    locale?: string;
    className?: string;
}

export default function PricingNote({ locale = 'en', className = '' }: PricingNoteProps) {
    const isAr = locale === 'ar';
    // Same date as the calculator's rates file, so every price on the site shows one "updated" date.
    const updated = formatDate(locale, RATES_UPDATED);
    return (
        <div className={`bg-[#1a212e] border border-[#282e39] rounded-xl px-4 py-3 text-xs text-[#9da6b9] leading-relaxed ${className}`}>
            <strong className="text-[#D4AF37]">{isAr ? 'تنبيه الأسعار:' : 'Pricing notice:'}</strong>{' '}
            {isAr
                ? `الأسعار الواردة هنا تقديرية ومبنية على مشاريعنا الأخيرة، وآخر تحديث لها في ${updated}. تتغير الأسعار بحسب الطلب والمواد والموسم. للحصول على السعر الدقيق، يُرجى طلب عرض سعر مخصص.`
                : `Prices shown are estimates based on our recent jobs, last updated ${updated}. Rates change with demand, materials and season. For an exact price, please request a custom quote.`}
        </div>
    );
}
