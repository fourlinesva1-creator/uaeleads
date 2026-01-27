'use client';

import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const t = useTranslations('testimonials');

    const testimonialIds = ['1', '2', '3'];

    return (
        <section className="py-24 bg-[#101622] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

            <div className="container-luxury relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <div className="section-label mx-auto mb-6">
                        <span>Customer Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-[#9da6b9]">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialIds.map((id) => (
                        <div key={id} className="p-10 bg-[#1a212e] border border-[#282e39] rounded-3xl relative hover:border-[#D4AF37]/50 transition-colors duration-500">
                            <Quote className="absolute top-8 right-8 text-[#D4AF37]/20 w-12 h-12" />
                            <p className="text-[#9da6b9] text-lg leading-relaxed mb-8 italic relative z-10">
                                "{t(`items.${id}.text`)}"
                            </p>
                            <div className="mt-auto">
                                <p className="text-white font-display text-lg mb-1">{t(`items.${id}.author`)}</p>
                                <p className="text-[#D4AF37] text-sm uppercase tracking-wider">{t(`items.${id}.company`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
