import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <Marquee className="bg-[#E6C7FF] p-4 rounded-xl border-l-4 border-purple-600">
        <span className="mx-12 text-purple-600 font-semibold">
          All Categories Available
        </span>
        <span className="mx-12 text-purple-600 font-semibold">
          All Categories Available
        </span>
        <span className="mx-12 text-purple-600 font-semibold">
          All Categories Available
        </span>
        <span className="mx-12 text-purple-600 font-semibold">
          All Categories Available
        </span>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;