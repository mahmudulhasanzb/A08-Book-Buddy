import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight, FiBookOpen, FiCpu, FiFeather } from 'react-icons/fi';

const categories = [
  {
    name: 'Story',
    blurb: 'Novels, essays, and quiet fiction for slow afternoons.',
    count: '4,820 titles',
    icon: FiFeather,
    accent: 'from-primary to-[#5a2940]',
  },
  {
    name: 'Tech',
    blurb: 'Software, systems, and the craft of building modern things.',
    count: '2,140 titles',
    icon: FiCpu,
    accent: 'from-foreground to-[#3a322d]',
  },
  {
    name: 'Science',
    blurb: 'From the very small to the very vast, examined carefully.',
    count: '3,065 titles',
    icon: FiBookOpen,
    accent: 'from-accent to-[#8e5a26]',
  },
];

const CategoriesShowcase = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Heading */}
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Browse by Category
            </p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl text-balance">
              Three shelves, infinite reading.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              We organize the catalogue into three living collections. Pick a
              shelf and let the librarians do the rest.
            </p>
            <Link
              href="/allbooks"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
            >
              <span className="border-b border-foreground pb-0.5">
                See all categories
              </span>
              <FiArrowUpRight />
            </Link>
          </div>

          {/* Cards */}
          <ul className="lg:col-span-8 grid gap-4 sm:grid-cols-3">
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <li key={c.name}>
                  <Link
                    href={`/allbooks?category=${c.name.toLowerCase()}`}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div>
                      <div
                        className={`mb-6 grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br ${c.accent} text-background shadow-md`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground">
                        {c.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {c.blurb}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {c.count}
                      </span>
                      <FiArrowUpRight className="h-5 w-5 text-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategoriesShowcase;
