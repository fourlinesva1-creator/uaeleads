'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

interface BlogServiceCTAProps {
    variant?: 'ramadan' | 'storage' | 'general';
}

const content = {
    en: {
        ramadan: {
            eyebrow: 'Planning a Ramadan Gathering?',
            heading: 'Tent Now Has Availability for Ramadan 2026',
            body: 'Premium iftar tents, suhoor setups, and majlis rentals across all 7 Emirates. Civil Defence approved, permits handled, same-week setup possible.',
            stats: [
                { value: '30+', label: 'Years in UAE' },
                { value: '5,000+', label: 'Events Delivered' },
                { value: '48–72h', label: 'Setup Time' },
            ],
            cta1: { label: 'Request a Free Quote', href: '/request-quote' },
            cta2: { label: 'WhatsApp Us Now', href: 'https://wa.me/971501826969' },
            services: [
                { label: 'Hotel Majlis Tents', href: '/services/hotel-majlis' },
                { label: 'Iftar Tent Rental', href: '/services/iftar-tent-rental' },
                { label: 'Corporate Events', href: '/services/corporate-events' },
                { label: 'Home Majlis', href: '/services/home-majlis' },
            ],
        },
        storage: {
            eyebrow: 'Need Industrial Storage Space?',
            heading: 'Civil Defence-Approved Storage Tents — Deployed in Days',
            body: 'With UAE warehouse vacancy at 3% and rents up 33%, our clear span and industrial tent structures offer an immediate, cost-effective solution at 50–70% less than permanent construction.',
            stats: [
                { value: 'AED 15–40', label: 'Per sqm/month' },
                { value: '3–7 days', label: 'Deployment Time' },
                { value: 'CD Approved', label: 'All Structures' },
            ],
            cta1: { label: 'Get a Storage Quote', href: '/request-quote' },
            cta2: { label: 'Explore Storage Tents', href: '/services/storage-tents' },
            services: [
                { label: 'Clear Span Tents', href: '/services/storage-tents/clear-span-tents' },
                { label: 'Warehouse Tents', href: '/services/storage-tents/warehouse-tents' },
                { label: 'Industrial Tents', href: '/services/storage-tents/industrial-tents' },
            ],
        },
        general: {
            eyebrow: 'Tent Rental Across All 7 Emirates',
            heading: 'Get a Quote from Tent Now — UAE\'s Premier Tent Rental Company',
            body: 'From Ramadan majlis and corporate events to storage structures and wedding marquees — 30 years of UAE expertise, all permits handled, same-week setup available.',
            stats: [
                { value: '30+', label: 'Years in UAE' },
                { value: '5,000+', label: 'Events Delivered' },
                { value: '7', label: 'Emirates Covered' },
            ],
            cta1: { label: 'Request a Free Quote', href: '/request-quote' },
            cta2: { label: 'View All Services', href: '/services' },
            services: [
                { label: 'Ramadan Tents', href: '/services/iftar-tent-rental' },
                { label: 'Corporate Events', href: '/services/corporate-events' },
                { label: 'Storage Tents', href: '/services/storage-tents' },
                { label: 'Hotel Majlis', href: '/services/hotel-majlis' },
            ],
        },
    },
    ar: {
        ramadan: {
            eyebrow: 'تخطط لتجمع رمضاني؟',
            heading: 'Tent Now — لا تزال لدينا إمكانية للحجز في رمضان 2026',
            body: 'خيام إفطار وسحور ومجالس فاخرة في جميع أنحاء الإمارات السبع. معتمدة من الدفاع المدني، جميع التصاريح تحت إشرافنا، تركيب خلال أسبوع.',
            stats: [
                { value: '+30', label: 'سنة خبرة في الإمارات' },
                { value: '+5,000', label: 'فعالية منجزة' },
                { value: '48–72 ساعة', label: 'وقت التركيب' },
            ],
            cta1: { label: 'احصل على عرض سعر مجاني', href: '/request-quote' },
            cta2: { label: 'تواصل عبر واتساب', href: 'https://wa.me/971501826969' },
            services: [
                { label: 'مجالس الفنادق', href: '/services/hotel-majlis' },
                { label: 'خيام الإفطار', href: '/services/iftar-tent-rental' },
                { label: 'فعاليات الشركات', href: '/services/corporate-events' },
                { label: 'مجالس منزلية', href: '/services/home-majlis' },
            ],
        },
        storage: {
            eyebrow: 'تحتاج مساحة تخزين صناعية؟',
            heading: 'خيام تخزين معتمدة من الدفاع المدني — جاهزة خلال أيام',
            body: 'مع شغور المستودعات عند 3% وارتفاع الإيجارات 33%، نقدم هياكل خيام صناعية فورية بتكلفة أقل بـ 50–70% من البناء الدائم.',
            stats: [
                { value: '15–40 AED', label: 'لكل متر مربع شهرياً' },
                { value: '3–7 أيام', label: 'وقت التنفيذ' },
                { value: 'دفاع مدني', label: 'معتمد' },
            ],
            cta1: { label: 'احصل على عرض تخزين', href: '/request-quote' },
            cta2: { label: 'استكشف خيام التخزين', href: '/services/storage-tents' },
            services: [
                { label: 'خيام ذات مسافة حرة', href: '/services/storage-tents/clear-span-tents' },
                { label: 'خيام مستودعات', href: '/services/storage-tents/warehouse-tents' },
                { label: 'خيام صناعية', href: '/services/storage-tents/industrial-tents' },
            ],
        },
        general: {
            eyebrow: 'تأجير الخيام في الإمارات السبع',
            heading: 'احصل على عرض سعر من Tent Now — الشركة الرائدة في تأجير الخيام بالإمارات',
            body: 'من مجالس رمضان وفعاليات الشركات إلى هياكل التخزين وخيام الأفراح — 30 عاماً من الخبرة، جميع التصاريح تحت إشرافنا، تركيب خلال أسبوع.',
            stats: [
                { value: '+30', label: 'سنة في الإمارات' },
                { value: '+5,000', label: 'فعالية منجزة' },
                { value: '7', label: 'إمارات نغطيها' },
            ],
            cta1: { label: 'احصل على عرض سعر مجاني', href: '/request-quote' },
            cta2: { label: 'استعرض جميع الخدمات', href: '/services' },
            services: [
                { label: 'خيام رمضان', href: '/services/iftar-tent-rental' },
                { label: 'فعاليات الشركات', href: '/services/corporate-events' },
                { label: 'خيام التخزين', href: '/services/storage-tents' },
                { label: 'مجالس الفنادق', href: '/services/hotel-majlis' },
            ],
        },
    },
};

export default function BlogServiceCTA({ variant = 'general' }: BlogServiceCTAProps) {
    const locale = useLocale();
    const isAr = locale === 'ar';
    const c = isAr ? content.ar[variant] : content.en[variant];
    const isExternal = c.cta2.href.startsWith('http');

    return (
        <div className="my-12 rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-br from-[#1a212e] via-[#1e2736] to-[#101622]">
            {/* Top gold bar */}
            <div className="h-1 w-full bg-gradient-to-r from-gold via-yellow-300 to-gold" />

            <div className="p-8 md:p-10">
                {/* Eyebrow */}
                <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">{c.eyebrow}</p>

                {/* Heading */}
                <h3 className="text-2xl md:text-3xl font-display text-white mb-4 leading-tight">
                    {c.heading}
                </h3>

                {/* Body */}
                <p className="text-white/70 text-base leading-relaxed mb-8 max-w-2xl">
                    {c.body}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                    {c.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl font-display font-bold text-gold">{stat.value}</div>
                            <div className="text-white/50 text-xs uppercase tracking-wider mt-0.5">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <Link
                        href={c.cta1.href}
                        className="bg-gold text-[#101622] px-6 py-3 rounded-xl font-bold text-sm hover:bg-yellow-400 transition-colors"
                    >
                        {c.cta1.label}
                    </Link>
                    {isExternal ? (
                        <a
                            href={c.cta2.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm hover:border-gold hover:text-gold transition-colors flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            {c.cta2.label}
                        </a>
                    ) : (
                        <Link
                            href={c.cta2.href}
                            className="border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm hover:border-gold hover:text-gold transition-colors"
                        >
                            {c.cta2.label}
                        </Link>
                    )}
                </div>

                {/* Service links */}
                <div className="border-t border-white/10 pt-6">
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                        {isAr ? 'خدماتنا' : 'Our Services'}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {c.services.map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="text-sm text-white/60 hover:text-gold transition-colors border border-white/10 hover:border-gold/40 px-3 py-1.5 rounded-lg"
                            >
                                {s.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
