import Link from "next/link";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300">
      <div className="container-site grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-bold text-charcoal-950">
              A
            </span>
            <span className="text-base font-bold tracking-tight text-white">
              ASA{" "}
              <span className="font-medium text-charcoal-300">
                Property Services
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            High-quality construction, renovation and extension services for
            domestic and commercial clients across the UK.
          </p>
          <div
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2"
            aria-label="Rated 5.0 out of 5 stars on Google"
          >
            <span className="flex" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </span>
            <span className="text-sm font-semibold text-white">
              5.0 on Google
            </span>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Services">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 font-semibold text-white transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              Serving clients across the UK
            </li>
          </ul>
          <Link href="/contact" className="btn-primary mt-6 !px-5 !py-2.5">
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-charcoal-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Registered in England &amp; Wales · Fully insured</p>
        </div>
      </div>
    </footer>
  );
}
