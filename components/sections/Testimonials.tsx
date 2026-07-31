"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, [paused]);

  const current = testimonials[index];

  return (
    <section className="section overflow-hidden bg-charcoal-50/60">
      <div className="container-site">
        <SectionHeading
          eyebrow="Client Reviews"
          title="Rated 5.0 stars on Google"
          description="We don't ask for reviews — clients leave them because the work speaks for itself."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div
            className="relative rounded-4xl border border-charcoal-100 bg-white p-8 shadow-card sm:p-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <Quote
              className="absolute -top-5 left-8 h-10 w-10 rounded-xl bg-accent p-2 text-charcoal-950"
              aria-hidden
            />

            <div
              className="flex items-center gap-1"
              aria-label="5 out of 5 stars"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-accent text-accent"
                  aria-hidden
                />
              ))}
            </div>

            <div className="mt-6 min-h-[10rem] sm:min-h-[8rem]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.21, 0.65, 0.36, 1] }}
                >
                  <p className="text-lg leading-relaxed text-charcoal-700 sm:text-xl">
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center gap-3">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal-900 text-sm font-bold text-accent"
                      aria-hidden
                    >
                      {current.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-charcoal-950">
                        {current.name}
                      </p>
                      <p className="text-xs text-charcoal-400">
                        {current.project} · {current.location}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-charcoal-100 pt-6">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-8 bg-accent"
                        : "w-2 bg-charcoal-200 hover:bg-charcoal-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setIndex(
                      (i) => (i - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-700 transition-colors hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-200 text-charcoal-700 transition-colors hover:border-charcoal-900 hover:bg-charcoal-900 hover:text-white"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
