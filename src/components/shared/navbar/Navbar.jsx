import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { FiMenu, FiArrowUpRight } from 'react-icons/fi';

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
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-lg font-semibold transition-transform group-hover:-rotate-6"
          >
            B
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
              Book Budy
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Library &middot; Est. 2026
            </span>
          </span>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-2">{navLinks}</ul>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-foreground hover:gap-2.5"
          >
            Login
            <FiArrowUpRight className="h-4 w-4" />
          </Link>

          {/* Mobile menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <button
              tabIndex={0}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted"
            >
              <FiMenu className="h-5 w-5" />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-50 mt-3 w-56 rounded-2xl border border-border bg-card p-2 shadow-xl"
            >
              {navLinks}
              <li className="mt-2 border-t border-border pt-2 sm:hidden">
                <Link
                  href="/login"
                  className="flex items-center justify-between rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
                >
                  Login <FiArrowUpRight />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
