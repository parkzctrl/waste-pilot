"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { images } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Experienced, time-served tradespeople",
  "Honest pricing with detailed written quotes",
  "Fully insured on every project",
  "High-quality workmanship, guaranteed",
];

export default function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image composition */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-card">
            <Image
              src={images.about.src}
              alt={images.about.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="glass absolute -bottom-6 -right-4 rounded-2.5xl p-6 shadow-card sm:-right-8">
            <p className="text-4xl font-bold tracking-tight text-charcoal-950">
              12<span className="text-accent-600">+</span>
            </p>
            <p className="mt-1 text-sm font-medium text-charcoal-500">
              Years of trusted
              <br />
              building experience
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-6 bg-accent-600" aria-hidden />
              About ASA Property Services
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-charcoal-950 sm:text-4xl lg:text-5xl">
              A construction company that does things properly
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal-500 sm:text-lg">
              For over a decade, we&apos;ve built our reputation the slow way —
              one well-finished project, one honest quote, one happy client at a
              time. Today, most of our work comes from repeat clients and
              referrals, and we intend to keep it that way.
            </p>
            <p className="mt-4 text-base leading-relaxed text-charcoal-500 sm:text-lg">
              Whether it&apos;s a family home extension or a commercial fit-out,
              you get the same team, the same standards, and the same
              accountability from first visit to final snag.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm font-medium text-charcoal-700"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <Link href="/about" className="btn-secondary mt-9">
              Our Story
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
