'use client';

interface PricingNoteProps {
    locale?: string;
    className?: string;
}

export default function PricingNote({ locale = 'en', className = '' }: PricingNoteProps) {
    const isAr = locale === 'ar';
    return (
        <div className={`bg-[#1a212e] border border-[#282e39] rounded-xl px-4 py-3 text-xs text-[#9da6b9] leading-relaxed ${className}`}>
            <strong className="text-[#D4AF37]">{isAr ? 'تنبيه الأسعار:' : 'Pricing notice:'}</strong>{' '}
            {isAr
                ? 'الأسعار الواردة هنا تقديرية استناداً إلى بيانات السوق حتى ديسمبر 2025. تتقلب الأسعار بشكل متكرر بحسب الطلب والمواد والمتغيرات الموسمية. للحصول على السعر الحالي الدقيق، يُرجى طلب عرض أسعار مخصص.'
                : 'Prices shown are tentative estimates based on December 2025 market data. Rates fluctuate frequently due to demand, materials, and seasonal factors. For current pricing, please request a custom quote.'}
        </div>
    );
}
