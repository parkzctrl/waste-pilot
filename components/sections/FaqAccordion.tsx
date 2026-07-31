"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-charcoal-50/60">
      <div className="container-site">
        <SectionHeading
          eyebrow="Common Questions"
          title="Everything you need to know"
          description="Straight answers to the questions we hear most. Anything else — just pick up the phone."
        />

        <Stagger className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={faq.question}>
                <div
                  className={`overflow-hidden rounded-2.5xl border bg-white transition-colors duration-300 ${
                    isOpen ? "border-accent/50 shadow-soft" : "border-charcoal-100"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                  >
                    <span className="text-base font-semibold text-charcoal-950 sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-accent text-charcoal-950"
                          : "bg-charcoal-100 text-charcoal-500"
                      }`}
                    >
                      <Plus className="h-4 w-4" aria-hidden />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.21, 0.65, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-charcoal-500 sm:px-8 sm:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
