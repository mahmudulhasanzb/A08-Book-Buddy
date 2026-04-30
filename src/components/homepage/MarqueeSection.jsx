'use client';

import Marquee from 'react-fast-marquee';
import { FiBookOpen } from 'react-icons/fi';

const items = [
  'New Arrivals: A Field of Stars',
  'Special Discount on Memberships',
  'Featured this week: Atlas of Code',
  'Now Trending: The Quiet Library',
  'Free Borrow Weekend &middot; Story Category',
  'Editor\u2019s Pick: Tides & Tessellations',
];

const MarqueeSection = () => {
  return (
    <section className="border-y border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl">
        <Marquee speed={45} gradient={false} pauseOnHover>
          <ul className="flex items-center py-4">
            {[...items, ...items].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 px-8 text-sm font-medium tracking-wide"
              >
                <FiBookOpen className="h-4 w-4 text-accent" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
                <span className="ml-8 text-accent">&divide;</span>
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeSection;
