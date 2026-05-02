import React from 'react';
import { FaPaperPlane } from 'react-icons/fa6';

const Newsletter = () => {
  return (
    <section className="py-20 px-4 mb-10 animate__animated animate__fadeInUp">
      <div className="max-w-5xl mx-auto bg-linear-to-br from-primary/90 to-secondary/90 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-primary-content">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-black/10 rounded-full blur-2xl mix-blend-overlay"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
            <FaPaperPlane className="text-4xl text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
            Stay Updated with Book Buddy
          </h2>
          <p className="text-primary-content/80 max-w-2xl text-lg mb-8">
            Subscribe to our newsletter to get the latest updates on new arrivals, special offers, and reading recommendations directly in your inbox.
          </p>

          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full rounded-xl bg-white/90 text-base-content placeholder:text-base-content/50 focus:bg-white"
              required
            />
            <button
              type="submit"
              className="btn bg-base-100 text-primary border-none hover:bg-base-200 rounded-xl px-8 font-bold shadow-lg shadow-black/10"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-primary-content/60 mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
