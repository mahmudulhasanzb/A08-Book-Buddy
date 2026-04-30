import React from 'react';
import NavLink from './NavLink';
import Link from 'next/link';

const navLinks = (
  <>
    <li>
      <NavLink href={'/'}>Home</NavLink>
    </li>
    <li>
      <NavLink href={'/allbooks'}>All Books</NavLink>
    </li>
    <li>
      <NavLink href={'/my-profile'}>My Profile</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          href={'/'}
          className="btn btn-ghost text-xl text-purple-500 font-bold"
        >
          Book Budy
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link href={'/login'}>
          <button className="btn bg-purple-500"> Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
