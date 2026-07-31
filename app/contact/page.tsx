import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/sections/ContactForm";
import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Free Quotes",
  description:
    "Get a free, no-obligation quote from ASA Property Services. Call 07575 178687 or send us your project details — we respond within one working day.",
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    note: "Mon–Sat, 8am–6pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Replies within 1 working day",
  },
  {
    icon: MapPin,
    label: "Coverage",
    value: "United Kingdom",
    note: "Domestic & commercial projects",
  },
  {
    icon: Clock,
    label: "Site Visits",
    value: "Free of charge",
    note: "Evenings & weekends by arrangement",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about your project"
        description="Tell us what you're planning and we'll arrange a free site visit and a detailed written quotation — no pressure, no obligation."
      />

      <section className="section bg-white">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Contact details */}
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold tracking-tight text-charcoal-950 sm:text-3xl">
                Prefer to talk it through?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal-500">
                The quickest way to get an answer is to pick up the phone.
                You&apos;ll speak to someone who actually builds — not a call
                centre.
              </p>

              <a
                href={site.phoneHref}
                className="btn-primary mt-7 w-full justify-center text-lg sm:w-auto"
              >
                <Phone className="h-5 w-5" aria-hidden />
                Call {site.phone}
              </a>
            </Reveal>

            <div className="mt-10 space-y-5">
              {contactDetails.map((item, i) => (
                <Reveal key={item.label} delay={0.05 * i}>
                  <div className="flex items-start gap-4 rounded-2.5xl border border-charcoal-100 bg-charcoal-50/60 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <item.icon
                        className="h-5 w-5 text-accent-600"
                        aria-hidden
                      />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block font-bold text-charcoal-950 transition-colors hover:text-accent-600"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-bold text-charcoal-950">
                          {item.value}
                        </p>
                      )}
                      <p className="mt-0.5 text-xs text-charcoal-400">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <div
                className="mt-8 flex items-center gap-3 rounded-2.5xl bg-charcoal-950 p-5"
                aria-label="Rated 5.0 out of 5 stars on Google"
              >
                <span className="flex" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </span>
                <p className="text-sm font-semibold text-white">
                  5.0 rated on Google by our clients
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-20 sm:pb-28">
        <div className="container-site">
          <Reveal>
            <div className="relative flex aspect-[16/7] items-center justify-center overflow-hidden rounded-4xl border border-charcoal-100 bg-charcoal-50">
              {/* Swap this block for a real Google Maps embed:
                  <iframe src="https://www.google.com/maps/embed?pb=..." /> */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #d7d7dc 1px, transparent 1px), linear-gradient(to bottom, #d7d7dc 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
                aria-hidden
              />
              <div className="relative text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-glow">
                  <MapPin className="h-7 w-7 text-charcoal-950" aria-hidden />
                </span>
                <p className="mt-4 font-bold text-charcoal-950">
                  Serving clients across the UK
                </p>
                <p className="mt-1 text-sm text-charcoal-400">
                  Google Maps embed placeholder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqAccordion />
    </>
  );
}
