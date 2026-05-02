import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Avid Reader',
    text: 'Book Buddy transformed how I borrow books. The selection is vast, and the platform is incredibly easy to use. Five stars!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Student & Tech Enthusiast',
    text: 'A seamless digital library experience. The search filtering by category makes it so fast to find exactly what I need.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Emily Davis',
    role: 'Lover of Science',
    text: 'Fantastic! Borrowing books digitally has never been this smooth. Love the beautiful dark theme and quick checkouts.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
  },
];

const ReaderTestimonials = () => {
  return (
    <section className="py-20 px-4 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent inline-block pb-2">
            What Our Readers Say
          </h2>
          <p className="text-base-content/60 mt-2 text-lg max-w-2xl mx-auto">
            See how Book Buddy is helping thousands of readers borrow their favorite titles seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-base-100 p-8 rounded-3xl border border-base-200 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl relative flex flex-col group hover:-translate-y-1 animate__animated animate__fadeInUp"
            >
              <div className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
                <FaQuoteLeft className="text-5xl" />
              </div>
              <div className="flex gap-1 mb-4 text-warning">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-base-content/80 text-lg leading-relaxed flex-grow mb-6 italic relative z-10">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto border-t border-base-200/50 pt-4">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="rounded-full object-cover shadow-sm border border-base-200"
                  />
                </div>
                <div>
                  <h4 className="text-base-content font-bold group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-xs text-base-content/50 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReaderTestimonials;
