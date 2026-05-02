import Marquee from "react-fast-marquee";
import { FaFireFlameCurved, FaBolt, FaStar, FaHeart } from "react-icons/fa6";

const items = [
  { text: "New Arrivals: The Great Gatsby", icon: <FaBolt className="text-yellow-500" /> },
  { text: "Special Discount on Memberships...", icon: <FaStar className="text-yellow-400" /> },
  { text: "Bestselling Novels", icon: <FaFireFlameCurved className="text-orange-500" /> },
  { text: "Community Favorites", icon: <FaHeart className="text-red-500" /> },
];

const MarqueeSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-4">
      <div className="relative rounded-2xl overflow-hidden shadow-sm border border-base-200 bg-base-100">
        {/* Decorative gradient edges to fade out the marquee text nicely */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-base-100 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-base-100 to-transparent z-10"></div>
        
        <Marquee speed={40} className="py-4 bg-primary/5">
          {items.map((item, index) => (
            <div key={index} className="flex items-center mx-8 group cursor-default">
              <span className="text-xl mr-3 group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-base-content/80 font-bold uppercase tracking-widest text-sm group-hover:text-primary transition-colors duration-300">
                {item.text}
              </span>
              <span className="ml-8 text-primary/20 text-xl">•</span>
            </div>
          ))}
          {/* Duplicate for seamless looping visually if fast */}
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center mx-8 group cursor-default">
              <span className="text-xl mr-3 group-hover:scale-125 transition-transform duration-300">
                {item.icon}
              </span>
              <span className="text-base-content/80 font-bold uppercase tracking-widest text-sm group-hover:text-primary transition-colors duration-300">
                {item.text}
              </span>
              <span className="ml-8 text-primary/20 text-xl">•</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeSection;