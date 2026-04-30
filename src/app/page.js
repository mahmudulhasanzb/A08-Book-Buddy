import HeroBanner from '@/components/homepage/HeroBanner';
import MarqueeSection from '@/components/homepage/MarqueeSection';
import FeaturedBooks from '@/components/homepage/FeaturedBooks';
import CategoriesShowcase from '@/components/homepage/CategoriesShowcase';
import HowItWorks from '@/components/homepage/HowItWorks';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <MarqueeSection />
      <FeaturedBooks />
      <CategoriesShowcase />
      <HowItWorks />
    </>
  );
}
