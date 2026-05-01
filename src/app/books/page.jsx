import Category from '@/components/ui/Category';
import Search from '@/components/ui/Search';
import { getBooks } from '@/lib/data';
import React from 'react';
import BookCard from '@/components/shared/cards/BookCard';

const AllBooksPage = async () => {
  const books = await getBooks();
  
  return (
    <div className="my-10 max-w-7xl mx-auto px-4 min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent pb-4">
          Discover Your Next Great Read
        </h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Explore our vast collection of books across various categories. Find exactly what you're looking for or stumble upon a hidden gem.
        </p>
      </div>
      
      <div className="mb-10">
        <Search />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3">
          <Category />
        </aside>
        
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {books.map(book => (
              <BookCard key={book?.id} book={book} />
            ))}
          </div>
          
          {books.length === 0 && (
            <div className="text-center py-20 bg-base-200 rounded-2xl">
              <h3 className="text-2xl font-bold text-base-content/50">No books found matching your criteria.</h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AllBooksPage;
