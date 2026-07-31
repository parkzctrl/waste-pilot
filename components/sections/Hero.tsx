"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const ease = [0.21, 0.65, 0.36, 1] as const;

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, reduceMotion ? 0 : 160]);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-charcoal-950">
      {/* Background image with subtle parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden>
        <Image
          src={images.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-110 object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950" />
      </motion.div>

      {/* Ambient animated glow */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="container-site relative z-10 pb-24 pt-36 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2"
        >
          <span className="flex" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
            ))}
          </span>
          <span className="text-xs font-semibold text-white sm:text-sm">
            5.0 Rated on Google
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-7 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Building Better Homes.{" "}
          <span className="text-accent">Built to Last.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-charcoal-200 sm:text-lg"
        >
          {site.shortName} delivers high-quality construction, extensions and
          renovations for homes and businesses across the UK — with honest
          pricing, meticulous craftsmanship and a team you can rely on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/contact" className="btn-primary text-base">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="/gallery" className="btn-ghost-light text-base">
            View Our Work
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 text-sm text-charcoal-400"
        >
          Fully insured · Free quotations · Domestic &amp; commercial
        </motion.p>
      </div>

      {/* Scroll hint */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-10 w-6 rounded-full border-2 border-white/30 p-1.5">
            <div className="h-2 w-1 rounded-full bg-accent mx-auto" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
