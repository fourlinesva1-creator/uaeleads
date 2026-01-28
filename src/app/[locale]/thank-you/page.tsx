import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function ThankYouPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return <ThankYouContent />;
}

function ThankYouContent() {
    const t = useTranslations('common');

    return (
        <div className="bg-[#101622] min-h-screen flex items-center justify-center pt-20">
            <div className="container-luxury max-w-2xl text-center">
                <div className="mb-8 flex justify-center">
                    <div className="w-24 h-24 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center animate-bounce-slow">
                        <CheckCircle2 size={48} />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-display text-white mb-6 animate-fade-in">
                    {t('success')}
                </h1>

                <p className="text-xl text-[#9da6b9] mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '200ms' }}>
                    Your request has been received. One of our Ramadan Majlis experts will contact you within 24 hours with a customized proposal.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
                    <a
                        href="https://wa.me/971501826969"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl text-white hover:border-[#D4AF37] transition-all group"
                    >
                        <MessageSquare className="text-[#D4AF37]" />
                        <div className="text-left">
                            <p className="text-sm text-[#9da6b9] uppercase tracking-wider font-display">Need info now?</p>
                            <p className="font-bold">Chat on WhatsApp</p>
                        </div>
                    </a>

                    <a
                        href="tel:+971501826969"
                        className="flex items-center justify-center gap-3 p-6 bg-[#1a212e] border border-[#282e39] rounded-2xl text-white hover:border-[#D4AF37] transition-all group"
                    >
                        <Phone className="text-[#D4AF37]" />
                        <div className="text-left">
                            <p className="text-sm text-[#9da6b9] uppercase tracking-wider font-display">Prefer a call?</p>
                            <p className="font-bold">+971 50 182 6969</p>
                        </div>
                    </a>
                </div>

                <Link
                    href="/"
                    className="text-[#D4AF37] hover:text-white transition-colors font-display tracking-widest uppercase text-sm inline-flex items-center gap-2 group animate-fade-in"
                    style={{ animationDelay: '600ms' }}
                >
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
}
