"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquareQuote, Phone } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Mobile-first floating action bar: "Call Now" + "Get Quote".
 * Appears after the hero so it never competes with the primary CTA.
 */
export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 sm:left-auto sm:right-8 sm:bottom-24 sm:translate-x-0"
        >
          <div className="glass-dark flex items-center gap-2 rounded-full p-2 shadow-card">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-charcoal-950 transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4 text-accent-600" aria-hidden />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-charcoal-950 transition-transform hover:scale-[1.03]"
            >
              <MessageSquareQuote className="h-4 w-4" aria-hidden />
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
