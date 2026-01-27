import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Experience from '@/components/sections/Experience';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import QuickQuote from '@/components/sections/QuickQuote';
import Locations from '@/components/sections/Locations';
import Portfolio from '@/components/sections/Portfolio';
import CTA from '@/components/sections/CTA';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustBar />
      <Experience />
      <Services />
      <Testimonials />
      <QuickQuote />
      <Portfolio />
      <Locations />
      <CTA />
    </>
  );
}
