import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-base-content">
      <div className="container mx-auto px-4 py-12">
        {/* Main grid – responsive 3‑column layout */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Brand & Social */}
          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">
              📚 Book Buddy
            </h3>
            <p className="text-gray-400/80 leading-relaxed max-w-xs">
              Digitizing the library experience. Borrow books anytime, anywhere.
            </p>
            <div className="flex gap-3 mt-4">
              {/* DaisyUI btn-circle with semi-transparent background */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="btn btn-circle btn-sm bg-white/10 border-0 hover:bg-white/20 text-lg"
              >
                f
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="btn btn-circle btn-sm bg-white/10 border-0 hover:bg-white/20 text-lg"
              >
                𝕏
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="btn btn-circle btn-sm bg-white/10 border-0 hover:bg-white/20 text-lg"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links – using DaisyUI’s link component */}
          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400/80">
              <li>
                <Link href="/" className="link link-hover hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-books"
                  className="link link-hover hover:text-white"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/my-profile"
                  className="link link-hover hover:text-white"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/help" className="link link-hover hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-400/80">
              <li>📧 bookbudy@gamil.com</li>
              <li>📱 +88 01712 345678</li>
              <li>📍 123 Library Lane, Book City</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 BookBorrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
