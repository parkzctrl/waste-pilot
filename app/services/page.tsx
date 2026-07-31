import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import { secondaryServices, services } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "House extensions, renovations, bathrooms, basement waterproofing, concrete work and general building — delivered by ASA Property Services across the UK.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Every trade you need, under one roof"
        description="Domestic or commercial, a single bathroom or a full build — one accountable team manages your project from first visit to final snag."
      />

      {/* Detailed service sections */}
      <section className="section bg-white">
        <div className="container-site space-y-20 sm:space-y-28">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-32 grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
            >
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
                  <service.icon
                    className="h-7 w-7 text-accent-600"
                    aria-hidden
                  />
                </span>
                <h2 className="mt-6 text-2xl font-bold tracking-tight text-charcoal-950 sm:text-3xl lg:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal-500 sm:text-lg">
                  {service.description}
                </p>
                <Link href="/contact" className="btn-secondary mt-7">
                  Get a Quote for This Service
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>

              <Reveal
                delay={0.1}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="rounded-4xl border border-charcoal-100 bg-charcoal-50/60 p-8 shadow-soft sm:p-10">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-400">
                    What&apos;s included
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 text-sm font-medium text-charcoal-700 sm:text-base"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <Check
                            className="h-3.5 w-3.5 text-accent-600"
                            aria-hidden
                          />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* Secondary services */}
      <section className="section bg-charcoal-950">
        <div className="container-site">
          <SectionHeading
            dark
            eyebrow="And More"
            title="Complete building support"
            description="Beyond our core services, we keep properties running with construction, maintenance and management expertise."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-3">
            {secondaryServices.map((service) => (
              <StaggerItem key={service.title}>
                <div className="glass-dark h-full rounded-2.5xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40">
                  <service.icon className="h-7 w-7 text-accent" aria-hidden />
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-charcoal-300">
                    {service.short}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-14 text-center">
            <p className="text-charcoal-300">
              Not sure which service you need? Call us and we&apos;ll point you
              in the right direction —{" "}
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.phone}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
