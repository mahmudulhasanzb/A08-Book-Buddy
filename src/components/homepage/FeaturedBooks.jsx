import Link from 'next/link';
import React from 'react'

const FeaturedBooks = () => {
  return (
    <div className="my-10 text-center">
      <h2 className="text-2xl font-bold">✨ Featured Books </h2>
      <p className="text-gray-500">Handpicked titles loved by our community</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              Atomic Habits
            </h2>
            <p className="text-gray-600">
              James Clear reveals practical strategies that will teach you exactly
              how to form good habits, break bad ones, and master the tiny changes
              that lead to remarkable results.
            </p>
            <div className="card-actions">
              <Link className='w-full' href="/book/1">
                <button className='btn btn-neutral w-full'>View Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBooks