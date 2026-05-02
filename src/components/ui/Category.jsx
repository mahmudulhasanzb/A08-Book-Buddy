import { getCategory } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa6';


const Category = async ({category}) => {
  const Categories = await getCategory();
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
          <Link href={`/books`} className="w-full">
            <button className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:pl-5 hover:text-primary font-medium group flex items-center justify-between ${!category ? 'bg-primary/10 text-primary' : 'text-base-content/80'}`}>
              <span>All Books</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                →
              </span>
            </button>
          </Link>
          {Categories.map((cat, index) => (
            <Link key={`${cat}-${index}`} href={`/books?category=${cat}`} className="w-full">
              <button className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 hover:bg-primary/10 hover:pl-5 hover:text-primary font-medium group flex items-center justify-between ${category === cat ? 'bg-primary/10 text-primary' : 'text-base-content/80'}`}>
                <span>{cat}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                  →
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;