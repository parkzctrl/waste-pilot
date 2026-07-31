"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projectImages } from "@/lib/images";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import Lightbox from "@/components/ui/Lightbox";

export default function ProjectsGallery({
  limit,
  showLink = true,
}: {
  limit?: number;
  showLink?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const projects = limit ? projectImages.slice(0, limit) : projectImages;

  return (
    <section className="section bg-white">
      <div className="container-site">
        <SectionHeading
          eyebrow="Recent Projects"
          title="Work we're proud to put our name to"
          description="A selection of recent extensions, renovations and fit-outs. Every project photographed as handed over — no staging, no filters."
        />

        <Stagger className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {projects.map((project, i) => (
            <StaggerItem key={project.src} className="break-inside-avoid">
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-2.5xl text-left shadow-soft"
                aria-label={`View ${project.title}`}
              >
                <div
                  className={`relative w-full ${
                    project.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-charcoal-950">
                    {project.category}
                  </span>
                  <p className="mt-2.5 text-lg font-bold text-white">
                    {project.title}
                  </p>
                  <p className="text-sm text-charcoal-200">{project.location}</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>

        {showLink && (
          <div className="mt-12 text-center">
            <Link href="/gallery" className="btn-ghost">
              View Full Gallery
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        )}
      </div>

      <AnimatePresence>
        {active !== null && (
          <Lightbox
            projects={projects}
            index={active}
            onClose={() => setActive(null)}
            onNavigate={setActive}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
