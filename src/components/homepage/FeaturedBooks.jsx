import { getBooks } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

// Fallback books used if the remote API is unreachable so the design
// always renders meaningfully in dev / preview.
const fallbackBooks = [
  {
    id: 1,
    title: 'A Field of Stars',
    author: 'Lia Marrone',
    description:
      'A quiet astronomer charts the night sky &mdash; and a life she nearly forgot to live.',
    category: 'Story',
    available_quantity: 5,
    image_url:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Atlas of Code',
    author: 'Pierre Renault',
    description:
      'A visual journey through the systems that quietly run our modern world.',
    category: 'Tech',
    available_quantity: 3,
    image_url:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'The Quiet Library',
    author: 'Marin Calder',
    description:
      'A meditative essay collection on reading, memory, and the rooms that hold them.',
    category: 'Story',
    available_quantity: 7,
    image_url:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Tides & Tessellations',
    author: 'Hana Okafor',
    description:
      'Where mathematics meets the shore: patterns that map oceans and minds alike.',
    category: 'Science',
    available_quantity: 2,
    image_url:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80',
  },
];

async function loadBooks() {
  try {
    const books = await getBooks();
    if (Array.isArray(books) && books.length > 0) return books;
    return fallbackBooks;
  } catch (e) {
    console.log('[v0] FeaturedBooks fallback used:', e?.message);
    return fallbackBooks;
  }
}

const FeaturedBooks = async () => {
  const books = await loadBooks();
  const featured = books.slice(0, 4);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              The Shelf &middot; Curated Weekly
            </p>
            <h2 className="mt-2 font-serif text-4xl tracking-tight text-foreground sm:text-5xl text-balance">
              Featured Books
            </h2>
          </div>
          <Link
            href="/allbooks"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            <span className="border-b border-foreground pb-0.5">
              Explore the catalogue
            </span>
            <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Book grid */}
        <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((book, i) => (
            <li key={book.id} className="group flex flex-col">
              {/* Cover */}
              <Link
                href={`/book/${book.id}`}
                className="relative block overflow-hidden rounded-xl border border-border bg-muted"
              >
                <div className="aspect-[3/4] w-full">
                  <img
                    src={book.image_url}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>

                {/* Index number */}
                <span className="absolute left-3 top-3 inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-background/90 px-2 text-xs font-medium text-foreground backdrop-blur">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Category */}
                {book.category && (
                  <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-foreground px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-background">
                    {book.category}
                  </span>
                )}
              </Link>

              {/* Meta */}
              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="font-serif text-xl font-medium leading-tight text-foreground text-balance">
                  {book.title}
                </h3>
                {book.author && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    by {book.author}
                  </p>
                )}
                {book.description && (
                  <p
                    className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: book.description }}
                  />
                )}

                <Link
                  href={`/book/${book.id}`}
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  <span className="border-b border-foreground pb-0.5">
                    View details
                  </span>
                  <FiArrowUpRight />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedBooks;
