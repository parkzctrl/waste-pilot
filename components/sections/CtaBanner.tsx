"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function CtaBanner() {
  return (
    <section className="section bg-white">
      <div className="container-site">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-charcoal-950 px-6 py-20 text-center shadow-card sm:px-12 sm:py-28">
            <Image
              src={images.cta.src}
              alt=""
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover opacity-25"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/40"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Build Something{" "}
                <span className="text-accent">Great</span> Together.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-charcoal-300 sm:text-lg">
                Tell us about your project and we&apos;ll arrange a free site
                visit and detailed written quotation — no pressure, no
                obligation.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary text-base">
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <a href={site.phoneHref} className="btn-ghost-light text-base">
                  <Phone className="h-4 w-4 text-accent" aria-hidden />
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
