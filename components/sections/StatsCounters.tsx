"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { stats, type Stat } from "@/lib/data";

function Counter({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      value.set(stat.value);
      return;
    }
    const controls = animate(value, stat.value, {
      duration: 1.8,
      delay: index * 0.12,
      ease: [0.21, 0.65, 0.36, 1],
    });
    return controls.stop;
  }, [inView, reduceMotion, stat.value, index, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        <motion.span>{rounded}</motion.span>
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-3 text-sm font-medium text-charcoal-400">{stat.label}</p>
    </div>
  );
}

export default function StatsCounters() {
  return (
    <section className="bg-charcoal-950 py-16 sm:py-20">
      <div className="container-site grid grid-cols-2 gap-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Counter key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
