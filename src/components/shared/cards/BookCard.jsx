import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="group relative flex flex-col bg-base-100 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-base-200/50 hover:-translate-y-1">
      {/* Image Container */}
      <figure className="relative h-[280px] w-full overflow-hidden bg-base-200">
        <img
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={book?.image_url || '/placeholder-book.jpg'}
          alt={book?.title || 'Book Cover'}
        />
        {/* Category Badge overlay */}
        {book?.category && (
          <div className="absolute top-4 left-4">
            <span className="badge badge-primary bg-primary/90 backdrop-blur-sm border-none text-primary-content shadow-lg px-3 py-3 font-semibold text-xs uppercase tracking-wider">
              {book?.category}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </figure>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-6">
        <h2 className="text-xl font-bold text-base-content line-clamp-1 mb-1 group-hover:text-primary transition-colors">
          {book?.title}
        </h2>
        {book?.author && (
          <p className="text-sm font-medium text-base-content/60 mb-3">
            by {book.author}
          </p>
        )}
        
        <p className="text-base-content/70 text-sm line-clamp-3 mb-6 flex-grow">
          {book?.description}
        </p>

        {/* Action Button */}
        <div className="mt-auto pt-4 border-t border-base-200">
          <Link href={`/books/${book?.id}`} className="w-full block">
            <button className="btn btn-neutral w-full group-hover:btn-primary transition-colors rounded-xl shadow-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
