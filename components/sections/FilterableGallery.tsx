"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectImages, type ProjectImage } from "@/lib/images";
import Lightbox from "@/components/ui/Lightbox";

const categories = [
  "All",
  "Extensions",
  "Renovations",
  "Bathrooms",
  "Commercial",
] as const;

type Category = (typeof categories)[number];

export default function FilterableGallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo<ProjectImage[]>(
    () =>
      filter === "All"
        ? projectImages
        : projectImages.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section className="section bg-white">
      <div className="container-site">
        {/* Filter pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setFilter(category);
                  setActive(null);
                }}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-charcoal-950"
                    : "text-charcoal-500 hover:text-charcoal-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="gallery-filter-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.button
                layout
                key={project.src}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: [0.21, 0.65, 0.36, 1] }}
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2.5xl text-left shadow-soft"
                aria-label={`View ${project.title}`}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-charcoal-950">
                    {project.category}
                  </span>
                  <p className="mt-2.5 text-lg font-bold text-white">
                    {project.title}
                  </p>
                  <p className="text-sm text-charcoal-200">{project.location}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-sm text-charcoal-400">
          Showing {filtered.length}{" "}
          {filtered.length === 1 ? "project" : "projects"}
          {filter !== "All" && ` in ${filter}`}
        </p>
      </div>

      <AnimatePresence>
        {active !== null && filtered[active] && (
          <Lightbox
            projects={filtered}
            index={active}
            onClose={() => setActive(null)}
            onNavigate={setActive}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
