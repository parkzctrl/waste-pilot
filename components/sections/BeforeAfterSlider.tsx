"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { images } from "@/lib/images";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** Draggable before/after comparison slider (pointer + keyboard accessible). */
export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(4, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(96, p + 4));
  };

  return (
    <section className="section bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="The Transformation"
          title="See the difference for yourself"
          description="Drag the slider to compare a recent renovation — from stripped-back shell to finished family home."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] cursor-ew-resize touch-none select-none overflow-hidden rounded-4xl shadow-card"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* After (base layer) */}
            <Image
              src={images.beforeAfter.after.src}
              alt={images.beforeAfter.after.alt}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
              draggable={false}
            />

            {/* Before (clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src={images.beforeAfter.before.src}
                alt={images.beforeAfter.before.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                draggable={false}
              />
            </div>

            {/* Labels */}
            <span className="absolute left-4 top-4 rounded-full bg-charcoal-950/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              Before
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal-950">
              After
            </span>

            {/* Divider + handle */}
            <div
              className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
              style={{ left: `${position}%` }}
              aria-hidden
            />
            <div
              role="slider"
              tabIndex={0}
              aria-label="Before and after comparison slider"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={onKeyDown}
              className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-charcoal-950 shadow-card transition-transform hover:scale-110 focus-visible:scale-110"
              style={{ left: `${position}%` }}
            >
              <ChevronsLeftRight className="h-5 w-5" aria-hidden />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
