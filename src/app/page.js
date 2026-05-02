import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import HeroBanner from "@/components/homepage/HeroBanner";
import MarqueeSection from "@/components/homepage/MarqueeSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import Newsletter from "@/components/homepage/Newsletter";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroBanner />
      <MarqueeSection />
      <FeaturedBooks />
      <HowItWorks />
      <Newsletter />
    </div>
  );
}
