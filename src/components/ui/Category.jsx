import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa6';

const booksCategory = [
  'Novel',
  'Biography',
  'Self-Help',
  'Science Fiction',
  'Fantasy',
  'Thriller',
  'Mystery',
  'Poetry',
  'Children',
  'Textbook',
  'Non-Fiction',
  'Fiction',
  'Historical Fiction',
  'Horror',
];

const Category = () => {
  return (
    <div className="sticky top-24 shadow-lg rounded-2xl bg-base-100 border border-base-200 overflow-hidden">
      <div className="bg-primary/10 p-5 border-b border-base-200">
        <h2 className="text-xl font-extrabold flex items-center gap-2 text-primary">
          <FaBookOpen className="text-xl" />
          Categories
        </h2>
      </div>
      
      <div className="p-3 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-1">
          {booksCategory.map((category, index) => (
            <Link key={`${category}-${index}`} href={`/`} className="w-full">
              <button className="w-full text-left px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:pl-6 font-medium text-base-content/80 group flex items-center justify-between">
                <span>{category}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">→</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;