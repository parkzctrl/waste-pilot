# ASA Property Services Ltd — Website

A premium, conversion-focused marketing website for **ASA Property Services Ltd**, a UK construction company. Built with Next.js 15 (App Router), Tailwind CSS, Framer Motion and Lucide icons.

> Design direction: minimal, premium, architecture-studio aesthetic — dark charcoal + white with a construction-orange accent (`#F59E0B`), large typography, generous whitespace, glassmorphism and polished micro-interactions.

## Tech Stack

| Layer      | Choice                          |
| ---------- | ------------------------------- |
| Framework  | Next.js 15 (App Router, React 19) |
| Styling    | Tailwind CSS 3                  |
| Animation  | Framer Motion 12                |
| Icons      | Lucide React                    |
| Fonts      | Inter via `next/font` (self-hosted, zero layout shift) |
| Images     | `next/image` with remote Unsplash placeholders |

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx            Root layout: fonts, metadata, JSON-LD schema, nav/footer
  page.tsx              Home
  about/page.tsx        Story, mission, values, timeline
  services/page.tsx     Detailed section per service
  gallery/page.tsx      Filterable portfolio + before/after slider
  contact/page.tsx      Quote form, contact details, map placeholder
  loading.tsx           Route loading animation
  not-found.tsx         404 page
  sitemap.ts            /sitemap.xml
  robots.ts             /robots.txt
components/
  layout/               Navbar (sticky, transparent → glass), Footer
  sections/             Page sections (Hero, ServicesGrid, Testimonials, …)
  ui/                   Reusable primitives (Reveal, Stagger, Lightbox,
                        ScrollProgress, BackToTop, FloatingActions, …)
lib/
  site.ts               Company details, nav links — edit once, updates everywhere
  data.ts               Services, features, testimonials, FAQs, timeline, stats
  images.ts             Central image registry (swap placeholders here)
```

## Editing Content

All copy and data live in three files — no need to touch components:

- **`lib/site.ts`** — company name, phone, email, URL, rating.
- **`lib/data.ts`** — services, why-choose-us features, testimonials, FAQs, timeline, animated stats, trust badges.
- **`lib/images.ts`** — every image on the site. Replace the Unsplash URLs with real project photography (local files in `/public` or a CDN) and update the `alt` text.

## Wiring Up the Contact Form

`components/sections/ContactForm.tsx` currently simulates submission. To make it live, replace the `handleSubmit` body with a POST to:

- a Next.js API route (e.g. `/app/api/contact/route.ts`) sending via [Resend](https://resend.com) or Nodemailer, or
- a hosted handler such as [Formspree](https://formspree.io) / [Basin](https://usebasin.com).

## Google Maps

`app/contact/page.tsx` contains a styled map placeholder with a comment showing where to drop a real `<iframe>` Google Maps embed.

## SEO

- Per-page metadata + Open Graph/Twitter cards (`app/layout.tsx` and each page)
- `sitemap.xml` and `robots.txt` generated from `app/sitemap.ts` / `app/robots.ts`
- JSON-LD `GeneralContractor` LocalBusiness schema with aggregate rating and service catalogue
- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `figure`, `footer`)

Set the production domain in `lib/site.ts` (`url`) before launch — it drives the sitemap, robots, canonical metadata base and schema.

## Performance & Accessibility Notes

- Images use `next/image` (AVIF/WebP, lazy-loaded below the fold; hero is `priority`)
- Inter is self-hosted through `next/font` — no render-blocking font requests
- Animations respect `prefers-reduced-motion`
- Interactive elements have focus-visible rings, ARIA labels, keyboard support (lightbox arrows/Escape, before-after slider arrow keys)

## Deployment

The easiest path is [Vercel](https://vercel.com):

1. Push this repository to GitHub.
2. Import the repo in Vercel — it auto-detects Next.js. No env vars required.
3. Point the custom domain and update `lib/site.ts` → `url`.

Any Node host works too: `npm run build && npm start` behind a reverse proxy.
