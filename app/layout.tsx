import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import FloatingActions from "@/components/ui/FloatingActions";
import BackToTop from "@/components/ui/BackToTop";
import PageTransition from "@/components/ui/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Construction, Extensions & Renovations UK`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "construction company UK",
    "house extensions",
    "home renovations",
    "bathroom renovations",
    "basement waterproofing",
    "concrete work",
    "property maintenance",
    "general builders",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Building Better Homes. Built to Last.`,
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=75",
        width: 1200,
        height: 630,
        alt: "ASA Property Services — modern construction and extensions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Building Better Homes. Built to Last.`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: "+447575178687",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    reviewCount: String(site.reviewCount),
  },
  priceRange: "££",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction Services",
    itemListElement: [
      "Building Construction",
      "Home Renovations",
      "House Extensions",
      "Bathroom Renovations",
      "Basement Waterproofing",
      "Concrete Work",
      "Property Maintenance",
      "General Building Services",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <ScrollProgress />
        <Navbar />
        <PageTransition>
          <main id="main">{children}</main>
        </PageTransition>
        <Footer />
        <FloatingActions />
        <BackToTop />
      </body>
    </html>
  );
}
