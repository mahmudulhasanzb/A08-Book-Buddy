import { getBooks } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const FeaturedBooks = async () => {
  const books = await getBooks()
  console.log(books);
  return (
    <div className="my-10 ">
      <div className="text-center">
        <h2 className="text-2xl font-bold ">✨ Featured Books </h2>
        <p className="text-gray-500">
          Handpicked titles loved by our community
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {books.slice(0, 4).map(book => (
          <div key={book?.id} className="card bg-base-100 shadow-sm">
            <figure>
              <img className='w-full h-[300px]' src={book?.image_url} alt={book?.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{book?.title}</h2>
              <p className="text-gray-600">{book?.description}</p>
              <div className="card-actions">
                <Link className="w-full" href={`/book/${book?.id}`}>
                  <button className="btn btn-neutral w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBooks