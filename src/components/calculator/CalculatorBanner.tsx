import { Calculator } from 'lucide-react';
import { Link } from '@/i18n/navigation';

/** Link card to the tent cost calculator, for pricing, service, location and blog pages. */
export default function CalculatorBanner({ locale, className = '' }: { locale: string; className?: string }) {
    const isAr = locale === 'ar';
    return (
        <Link
            href="/tent-cost-calculator"
            className={`group flex items-center gap-4 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/10 to-transparent p-5 transition-colors hover:border-[#D4AF37] ${className}`}
        >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/15 text-[#D4AF37]">
                <Calculator className="h-6 w-6" aria-hidden />
            </span>
            <span className="min-w-0">
                <span className="block font-display text-lg text-white">
                    {isAr ? 'احسب تكلفة تجهيزاتك بالضبط' : 'Calculate your exact setup'}
                </span>
                <span className="block text-sm text-[#9da6b9]">
                    {isAr
                        ? 'اختر المقاس وعدد الضيوف والتكييف والمدة، واحصل على نطاق سعري فوري مع تفصيل كل بند.'
                        : 'Pick size, guests, AC and duration for an instant, itemised price range.'}
                </span>
            </span>
            <span className="ms-auto text-[#D4AF37] text-xl transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden>
                →
            </span>
        </Link>
    );
}
