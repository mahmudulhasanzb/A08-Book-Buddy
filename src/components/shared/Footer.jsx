import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Top giant wordmark */}
        <div className="border-b border-border py-12 sm:py-16">
          <p className="font-serif text-[14vw] leading-none tracking-tight text-foreground sm:text-[10vw] lg:text-[9rem]">
            Book <span className="italic text-primary">Budy</span>.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand & contact */}
          <div className="lg:col-span-2 max-w-md">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A modern online library, built for readers who never quite
              stopped browsing the stacks. Borrow titles digitally, anytime,
              anywhere.
            </p>

            <Link
              href="mailto:hello@bookbudy.app"
              className="group mt-6 inline-flex items-center gap-2 font-serif text-2xl text-foreground sm:text-3xl"
            >
              hello@bookbudy.app
              <FiArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>+88 01712 345 678</li>
              <li>123 Library Lane, Book City</li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Browse
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ['/', 'Home'],
                ['/allbooks', 'All Books'],
                ['/allbooks?category=story', 'Story'],
                ['/allbooks?category=tech', 'Tech'],
                ['/allbooks?category=science', 'Science'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Account
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ['/login', 'Login'],
                ['/register', 'Create account'],
                ['/my-profile', 'My Profile'],
                ['/help', 'Help Center'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Book Budy. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {[
              { href: 'https://facebook.com', label: 'Facebook', Icon: FaFacebookF },
              { href: 'https://twitter.com', label: 'X', Icon: FaXTwitter },
              { href: 'https://linkedin.com', label: 'LinkedIn', Icon: FaLinkedinIn },
              { href: 'https://github.com', label: 'GitHub', Icon: FaGithub },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
