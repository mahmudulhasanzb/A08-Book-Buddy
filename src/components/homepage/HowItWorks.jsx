import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const steps = [
  {
    n: '01',
    title: 'Create your reader card',
    body: 'Sign up in seconds with email or Google. Your borrow history travels with you.',
  },
  {
    n: '02',
    title: 'Find a title you love',
    body: 'Search, filter by category, or follow our weekly picks curated by real readers.',
  },
  {
    n: '03',
    title: 'Borrow &mdash; then read',
    body: 'Tap “Borrow this book.” We track quantity in real time so the shelf is always honest.',
  },
];

const HowItWorks = () => {
  return (
    <section className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-background/60">
              How it works
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl text-balance">
              A library card,{' '}
              <span className="italic text-accent">reimagined</span>{' '}
              for the way you read now.
            </h2>
          </div>

          <Link
            href="/register"
            className="group inline-flex items-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:gap-3"
          >
            Get your card
            <FaArrowRightLong className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Steps */}
        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-background/15 bg-background/15 sm:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col gap-4 bg-foreground p-8 transition-colors hover:bg-[#231f1c]"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl text-accent">{s.n}</span>
                <span
                  aria-hidden
                  className="h-px w-10 bg-background/20"
                />
              </div>
              <h3 className="font-serif text-2xl leading-tight tracking-tight text-balance">
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed text-background/70"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
