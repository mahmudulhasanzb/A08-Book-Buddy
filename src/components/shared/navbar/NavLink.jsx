'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`btn btn-ghost text-base-content ${isActive && 'text-purple-500 border-b-purple-500'}`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
