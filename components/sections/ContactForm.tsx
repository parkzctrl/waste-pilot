"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { services } from "@/lib/data";

type FormState = "idle" | "submitting" | "success";

const inputClasses =
  "w-full rounded-xl border border-charcoal-200 bg-white px-4 py-3.5 text-sm text-charcoal-950 placeholder:text-charcoal-300 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");
    // Wire this up to your form handler of choice (API route, Formspree,
    // Resend, etc.). The simulated delay keeps the UX honest in the demo.
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center rounded-4xl border border-charcoal-100 bg-white p-12 text-center shadow-card"
        role="status"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
          <CheckCircle2 className="h-8 w-8 text-accent-600" aria-hidden />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-charcoal-950">
          Thank you — we&apos;ve got it.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-charcoal-500">
          We&apos;ll be in touch within one working day to talk through your
          project and arrange a free site visit.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-4xl border border-charcoal-100 bg-white p-6 shadow-card sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="07123 456789"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            Service Required
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you looking to build or renovate? Rough timings and budget are helpful but not essential."
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary mt-7 w-full text-base disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            Request Free Quote
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
      <p className="mt-4 text-xs text-charcoal-400">
        We&apos;ll only use your details to respond to your enquiry. No
        marketing lists, ever.
      </p>
    </form>
  );
}
