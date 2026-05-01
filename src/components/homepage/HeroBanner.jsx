import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8 mb-16 px-4">
      <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 border border-base-200/50 shadow-sm overflow-hidden py-20 px-6 md:px-16 text-center flex flex-col items-center justify-center">

        {/* Subtle background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-base-100 border border-base-200 shadow-sm text-sm font-medium text-base-content/80">
          Welcome to Book Buddy
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-base-content tracking-tight leading-tight max-w-4xl mx-auto mb-6">
          Find Your Next <span className="text-primary">Great Read</span>
        </h1>

        <p className="text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover thousands of books, magical stories, and endless knowledge. Whether you're looking for a bestseller or a hidden gem, we've got you covered.
        </p>

        <div className="items-center">
          <Link href="/books">
            <button className="btn btn-primary btn-lg rounded-full px-8 shadow-md hover:shadow-primary/30 transition-all text-base font-semibold border-none">
              Browse Collection <FaArrowRightLong className="ml-2" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeroBanner;