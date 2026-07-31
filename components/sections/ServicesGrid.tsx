"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export default function ServicesGrid() {
  return (
    <section className="section bg-charcoal-50/60">
      <div className="container-site">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built around your project"
          description="From single-room refurbishments to full extensions, one accountable team handles design, build and finish."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services#${service.slug}`}
                className="group relative flex h-full flex-col rounded-2.5xl border border-charcoal-100 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent">
                  <service.icon
                    className="h-6 w-6 text-accent-600 transition-colors duration-300 group-hover:text-charcoal-950"
                    aria-hidden
                  />
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight text-charcoal-950">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-500">
                  {service.short}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-900">
                  Learn more
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-600"
                    aria-hidden
                  />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
