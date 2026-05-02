import { getBookDetails } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa6';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import BorrowButton from '@/components/ui/BorrowButton';

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;
  const book = await getBookDetails(id);
  const session = await auth.api.getSession({ headers: await headers() });
  const isLoggedIn = !!session;
  
  return (
    <div className="min-h-screen bg-base-200 relative overflow-hidden pb-20">
      {/* Blurred Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 blur-3xl scale-110 bg-center bg-cover"
        style={{ backgroundImage: `url(${book.image_url})` }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-10">
        <Link href="/books" className="inline-flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors font-medium mb-8 bg-base-100/50 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
          <FaArrowLeft /> Back to all books
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-12 bg-base-100/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/3 flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-500"></div>
            <Image 
              src={book.image_url} 
              alt={book.title}
              width={400}
              height={600}
              className="w-full h-auto rounded-2xl shadow-xl relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500 object-cover aspect-[2/3]" 
            />
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="badge badge-primary badge-lg bg-primary/10 text-primary border-none font-bold">
                {book.category}
              </span>
              <span className={`badge badge-lg border-none font-bold ${book.available_quantity > 0 ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
                {book.available_quantity} Copies Available
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-base-content leading-tight mb-2">
              {book.title}
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-base-content/60 mb-8">
              by <span className="text-primary">{book.author}</span>
            </h2>
            
            <div className="prose prose-lg max-w-none mb-10 text-base-content/80">
              <p className="leading-relaxed text-lg">
                {book.description}
              </p>
            </div>
            
            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <BorrowButton
                isLoggedIn={isLoggedIn}
                available={book.available_quantity > 0}
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;