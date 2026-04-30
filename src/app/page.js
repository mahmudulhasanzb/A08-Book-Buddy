import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import HeroBanner from "@/components/homepage/HeroBanner";
import MarqueeSection from "@/components/homepage/MarqueeSection";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroBanner />
      <MarqueeSection />
      <FeaturedBooks />
    </div>
  );
}
