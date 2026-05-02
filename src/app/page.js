import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import HeroBanner from "@/components/homepage/HeroBanner";
import MarqueeSection from "@/components/homepage/MarqueeSection";
import HowItWorks from "@/components/homepage/HowItWorks";
import ReaderTestimonials from "@/components/homepage/ReaderTestimonials";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <HeroBanner />
      <MarqueeSection />
      <FeaturedBooks />
      <HowItWorks />
      <ReaderTestimonials />
    </div>
  );
}
