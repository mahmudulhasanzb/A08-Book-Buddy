import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FiBookOpen, FiStar } from 'react-icons/fi';

const HeroBanner = () => {
  return (
    <section className="relative px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:px-10 lg:pt-16 lg:pb-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left – editorial copy */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent" />
            Issue No. 24 &middot; Spring Catalogue
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] text-balance">
            Find your{' '}
            <span className="italic text-primary">next read</span>{' '}
            <br className="hidden sm:block" />
            without leaving home.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            A curated digital library of stories, science, and tech. Borrow
            handpicked titles in seconds &mdash; no membership card, no late
            fees, just thoughtful reading.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/allbooks"
              id="browse-now-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:gap-3 hover:bg-foreground"
            >
              Browse Now
              <FaArrowRightLong className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/allbooks"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <FiBookOpen className="h-4 w-4" />
              View Collections
            </Link>
          </div>

          {/* Stats row */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Titles
              </dt>
              <dd className="mt-1 font-serif text-3xl font-medium text-foreground">
                12k+
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Categories
              </dt>
              <dd className="mt-1 font-serif text-3xl font-medium text-foreground">
                24
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                Readers
              </dt>
              <dd className="mt-1 font-serif text-3xl font-medium text-foreground">
                8.4k
              </dd>
            </div>
          </dl>
        </div>

        {/* Right – stacked book visual */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* Decorative frame */}
            <div className="absolute inset-0 rounded-[2rem] border border-border bg-card paper-grain" />

            {/* Floating "card" 1 */}
            <div className="absolute left-6 top-8 w-[58%] rotate-[-6deg] rounded-2xl border border-border bg-background p-4 shadow-xl">
              <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-primary to-[#5a2940]" />
              <p className="mt-3 font-serif text-sm font-medium text-foreground">
                The Quiet Library
              </p>
              <p className="text-xs text-muted-foreground">M. Calder</p>
            </div>

            {/* Floating "card" 2 */}
            <div className="absolute right-5 top-16 w-[52%] rotate-[7deg] rounded-2xl border border-border bg-background p-4 shadow-xl">
              <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-accent to-[#8e5a26]" />
              <p className="mt-3 font-serif text-sm font-medium text-foreground">
                Atlas of Code
              </p>
              <p className="text-xs text-muted-foreground">P. Renault</p>
            </div>

            {/* Floating "card" 3 (front) */}
            <div className="absolute bottom-6 left-1/2 w-[60%] -translate-x-1/2 rotate-[-2deg] rounded-2xl border border-border bg-background p-4 shadow-2xl">
              <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-foreground to-[#3a322d]" />
              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <p className="font-serif text-sm font-medium text-foreground">
                    A Field of Stars
                  </p>
                  <p className="text-xs text-muted-foreground">L. Marrone</p>
                </div>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-foreground">
                  <FiStar className="h-3 w-3 fill-accent text-accent" />
                  4.9
                </span>
              </div>
            </div>

            {/* Tag pill */}
            <div className="absolute -right-3 top-4 hidden rotate-[6deg] rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-foreground shadow-md sm:block">
              <span className="text-accent">●</span> New this week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
