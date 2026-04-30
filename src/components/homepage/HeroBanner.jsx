import React from 'react'
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const HeroBanner = () => {
  return (
    <div className="hero rounded-3xl bg-linear-to-r from-base-100 to-base-300 p-8 md:p-12 text-center shadow-md max-w-7xl mx-auto mt-10 mb-10">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-800">
          Find Your Next Read
        </h1>
        <p className="text-lg mt-3 text-gray-700">
          Thousands of books, magical stories, and knowledge.
        </p>
        <button
          id="browse-now-btn"
          className="btn btn-primary mt-5 bg-purple-600 border-0 hover:bg-purple-700"
        >
          Browse Now <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
}

export default HeroBanner