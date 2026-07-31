"use client";

import { timeline } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Timeline() {
  return (
    <section className="section bg-charcoal-50/60">
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Journey"
          title="Built steadily, like everything we do"
          description="From one van to a full team — the milestones that shaped who we are."
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical rail */}
          <div
            className="absolute bottom-4 left-4 top-4 w-px bg-charcoal-200 sm:left-1/2"
            aria-hidden
          />

          <ol className="space-y-12">
            {timeline.map((milestone, i) => {
              const left = i % 2 === 0;
              return (
                <li key={milestone.year} className="relative">
                  <Reveal
                    delay={0.05 * i}
                    className={`flex ${
                      left ? "sm:justify-start" : "sm:justify-end"
                    }`}
                  >
                    <div
                      className={`relative ml-12 w-full sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                        left ? "sm:text-right" : ""
                      }`}
                    >
                      {/* Node */}
                      <span
                        className={`absolute -left-12 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-white sm:top-2 ${
                          left
                            ? "sm:-right-[3.55rem] sm:left-auto"
                            : "sm:-left-[3.55rem]"
                        }`}
                        aria-hidden
                      >
                        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                      </span>

                      <div className="rounded-2.5xl border border-charcoal-100 bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-7">
                        <span className="text-sm font-bold uppercase tracking-wider text-accent-600">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1.5 text-lg font-bold text-charcoal-950">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal-500">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
