export const site = {
  name: "ASA Property Services Ltd",
  shortName: "ASA Property Services",
  tagline: "Building Better Homes. Built to Last.",
  description:
    "ASA Property Services Ltd delivers high-quality construction, renovation and extension services across the UK. Fully insured, transparent pricing and a 5-star rated team.",
  phone: "07575 178687",
  phoneHref: "tel:+447575178687",
  email: "info@asapropertyservices.co.uk",
  location: "United Kingdom",
  rating: 5.0,
  reviewCount: 47,
  url: "https://www.asapropertyservices.co.uk",
  founded: 2012,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;
