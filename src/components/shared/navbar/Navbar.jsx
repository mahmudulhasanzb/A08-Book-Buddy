import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa6';

const navLinks = (
  <>
    <li>
      <NavLink href={'/'}>
        <span className="font-medium text-base hover:text-primary transition-colors">Home</span>
      </NavLink>
    </li>
    <li>
      <NavLink href={'/books'}>
        <span className="font-medium text-base hover:text-primary transition-colors">All Books</span>
      </NavLink>
    </li>
    <li>
      <NavLink href={'/my-profile'}>
        <span className="font-medium text-base hover:text-primary transition-colors">My Profile</span>
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-lg border-b border-base-200 shadow-sm transition-all duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-base-200/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-md dropdown-content bg-base-100/90 backdrop-blur-xl rounded-2xl z-50 mt-4 w-64 p-4 shadow-2xl border border-base-200 gap-2"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            href={'/'}
            className="btn btn-ghost hover:bg-transparent text-2xl font-extrabold flex items-center gap-2 group tracking-tight"
          >
            <div className="bg-primary/10 text-primary p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <FaBookOpen />
            </div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Book Buddy</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={'/login'}>
            <button className="btn btn-primary rounded-xl px-8 shadow-md hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 font-semibold border-none">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
