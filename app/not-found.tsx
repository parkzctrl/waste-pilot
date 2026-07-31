import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center bg-charcoal-950">
      <div className="container-site py-32 text-center">
        <p className="eyebrow justify-center">
          <span className="h-px w-6 bg-accent" aria-hidden />
          404 — Page Not Found
          <span className="h-px w-6 bg-accent" aria-hidden />
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          This page hasn&apos;t been built yet.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-charcoal-300">
          The page you&apos;re looking for doesn&apos;t exist — but plenty of
          great work does. Head back to the homepage to see it.
        </p>
        <div className="mt-9 flex justify-center">
          <Link href="/" className="btn-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
