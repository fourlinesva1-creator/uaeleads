'use client';

import { useSelectedLayoutSegment } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

// Format a slug into a readable title for breadcrumb display
function slugToTitle(slug: string): string {
    return slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/Uae/g, 'UAE')
        .replace(/Gbp/g, 'GBP');
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    const segment = useSelectedLayoutSegment();
    const locale = useLocale();
    const isAr = locale === 'ar';

    // Only show author byline + breadcrumb on individual post pages, not the listing
    const isPost = !!segment;

    return (
        <>
            {isPost && (
                <>
                    <BreadcrumbSchema
                        locale={locale}
                        items={[
                            { name: isAr ? 'المدونة' : 'Blog', href: '/blog' },
                            { name: slugToTitle(segment), href: `/blog/${segment}` },
                        ]}
                    />
                    <div className="bg-[#101622] pt-32 pb-0">
                        <div className="container-luxury">
                            {/* Breadcrumb nav */}
                            <nav className="flex items-center gap-2 text-sm text-[#9da6b9] mb-6" aria-label="Breadcrumb">
                                <Link href="/" className="hover:text-gold transition-colors">
                                    {isAr ? 'الرئيسية' : 'Home'}
                                </Link>
                                <span>/</span>
                                <Link href="/blog" className="hover:text-gold transition-colors">
                                    {isAr ? 'المدونة' : 'Blog'}
                                </Link>
                                <span>/</span>
                                <span className="text-white truncate max-w-xs">{slugToTitle(segment)}</span>
                            </nav>
                            {/* Author byline */}
                            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#282e39]">
                                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-bold text-sm">
                                    TN
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">
                                        {isAr ? 'فريق تحرير Tent Now' : 'Tent Now Editorial Team'}
                                    </p>
                                    <p className="text-[#9da6b9] text-xs">
                                        {isAr
                                            ? 'خبراء تأجير الخيام في الإمارات — 30 عاماً من الخبرة'
                                            : 'UAE Tent Rental Experts — 30 Years of Industry Experience'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            {children}
        </>
    );
}
