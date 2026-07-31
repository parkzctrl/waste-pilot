"use client";

import { features } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export default function WhyChooseUs() {
  return (
    <section className="section bg-charcoal-950">
      <div className="container-site">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title="The standard behind every project"
          description="Anyone can promise quality. We build our business on proving it — project after project, year after year."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group glass-dark h-full rounded-2.5xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.07]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 transition-colors duration-300 group-hover:bg-accent">
                  <feature.icon
                    className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-charcoal-950"
                    aria-hidden
                  />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal-300">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
