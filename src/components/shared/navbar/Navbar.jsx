import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';
import { FaBookOpen, FaRegUser, FaUser, FaUserPlus } from 'react-icons/fa6';
import SignOut from './SignOut';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const navLinks = (
  <>
    <li>
      <NavLink href={'/'}>
        <span className="font-medium text-base hover:text-primary transition-colors">
          Home
        </span>
      </NavLink>
    </li>
    <li>
      <NavLink href={'/books'}>
        <span className="font-medium text-base hover:text-primary transition-colors">
          All Books
        </span>
      </NavLink>
    </li>
    <li>
      <NavLink href={'/profile'}>
        <span className="font-medium text-base hover:text-primary transition-colors">
          My Profile
        </span>
      </NavLink>
    </li>
  </>
);

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  return (
    <div className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-lg border-b border-base-200 shadow-sm transition-all duration-300">
      <div className="navbar max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 md:py-3">
        <div className="navbar-start w-auto md:w-1/2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm sm:btn-md lg:hidden hover:bg-base-200/50 px-2 mr-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-base-content"
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
              className="menu menu-md dropdown-content bg-base-100/90 backdrop-blur-xl rounded-2xl z-50 mt-4 w-56 sm:w-64 p-4 shadow-2xl border border-base-200 gap-2"
            >
              {navLinks}
              <div className="divider my-1 md:hidden"></div>
              <li className="md:hidden">
                <Link
                  href={'/login'}
                  className="text-primary font-medium flex items-center justify-center py-3"
                >
                  <FaUser className="mr-2" /> Login
                </Link>
              </li>
              <li className="md:hidden">
                <Link
                  href={'/signup'}
                  className="bg-primary/10 text-primary font-medium flex items-center justify-center py-3 mt-1 hover:bg-primary/20"
                >
                  <FaUserPlus className="mr-2" /> Sign Up
                </Link>
              </li>
            </ul>
          </div>
          <Link
            href={'/'}
            className="btn btn-ghost hover:bg-transparent text-xl sm:text-2xl font-extrabold flex items-center gap-1 sm:gap-2 group px-2"
          >
            <div className="bg-primary/10 text-primary p-1.5 sm:p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <FaBookOpen className="text-lg sm:text-xl" />
            </div>
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent truncate max-w-[150px] sm:max-w-none">
              Book Buddy
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 items-center">
            {navLinks}
          </ul>
        </div>
        {user?.name && <h2 className='font-bold text-md'>{user.name}</h2>}
        <div className="navbar-end flex-1 justify-end gap-2 sm:gap-3">
          <Link href={'/login'} className="hidden md:flex">
            <button className="btn btn-ghost btn-sm sm:btn-md rounded-xl px-4 hover:bg-base-200 font-semibold transition-all duration-300">
              <FaUser className="hidden lg:block" /> Login
            </button>
          </Link>
          <Link href={'/signup'} className="hidden md:flex">
            <button className="btn btn-primary btn-sm sm:btn-md rounded-xl px-4 sm:px-6 shadow-md hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 font-semibold border-none">
              <FaUserPlus className="hidden lg:block" /> Sign Up
            </button>
          </Link>
          <SignOut />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
