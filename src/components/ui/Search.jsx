'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.query.value.trim();
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    router.push(`/books?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative group w-full max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/50 group-focus-within:text-primary transition-colors">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </div>
      <input
        name="query"
        type="search"
        defaultValue={searchParams.get('q') || ''}
        placeholder="Search for your favorite books..."
        className="w-full pl-12 pr-4 py-4 bg-base-100 border border-base-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 text-lg"
      />
      <div className="absolute inset-y-0 right-2 flex items-center">
        <button type="submit" className="btn btn-primary btn-sm rounded-full px-6 shadow-md hover:shadow-lg transition-all">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;