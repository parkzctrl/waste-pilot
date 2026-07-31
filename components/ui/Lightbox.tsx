"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import type { ProjectImage } from "@/lib/images";

/** Full-screen project viewer with keyboard navigation. Wrap in <AnimatePresence>. */
export default function Lightbox({
  projects,
  index,
  onClose,
  onNavigate,
}: {
  projects: ProjectImage[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
}) {
  const project = projects[index];

  const prev = useCallback(
    () => onNavigate((index - 1 + projects.length) % projects.length),
    [index, projects.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % projects.length),
    [index, projects.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal-950/95 p-4 backdrop-blur-sm sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — enlarged view`}
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" aria-hidden />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous project"
        className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next project"
        className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="h-5 w-5" aria-hidden />
      </button>

      <motion.figure
        key={project.src}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.21, 0.65, 0.36, 1] }}
        className="relative max-h-full w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2.5xl">
          <Image
            src={project.src}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-white">
          <div>
            <p className="text-lg font-bold">{project.title}</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-charcoal-300">
              <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
              {project.location}
            </p>
          </div>
          <span className="rounded-full bg-accent/15 px-3.5 py-1.5 text-xs font-semibold text-accent">
            {project.category}
          </span>
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}
