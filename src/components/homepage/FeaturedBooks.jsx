import { getBooks } from '@/lib/data';
import React from 'react';
import BookCard from '../shared/cards/BookCard';

const FeaturedBooks = async () => {
  const books = await getBooks();
  
  return (
    <div className="my-16 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block pb-2">
          ✨ Featured Books
        </h2>
        <p className="text-base-content/60 mt-2 text-lg">
          Handpicked titles loved by our community
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.slice(0, 4).map(book => (
          <BookCard key={book?.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;