import {
  Bath,
  Building2,
  Droplets,
  Hammer,
  HardHat,
  Home,
  Layers,
  PaintRoller,
  Wrench,
  Award,
  BadgeCheck,
  Eye,
  FileCheck,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/* ---------------------------------- Services ---------------------------------- */

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "house-extensions",
    title: "House Extensions",
    short:
      "Single and double-storey extensions that add space, light and lasting value to your home.",
    description:
      "From wraparound kitchen extensions to double-storey additions, we manage the entire build — groundworks, structure, glazing and finish — so your extension feels like it was always part of the house. We work closely with your architect or can introduce trusted design partners.",
    bullets: [
      "Single, double-storey and wraparound extensions",
      "Structural work, steels and open-plan conversions",
      "Full project management from footings to finish",
      "Building control liaison throughout",
    ],
    icon: Home,
  },
  {
    slug: "renovations",
    title: "Home Renovations",
    short:
      "Complete refurbishments that transform tired properties into homes you're proud of.",
    description:
      "Whether it's a single room or a full property refurbishment, we strip back, re-plan and rebuild to an exceptional standard. Period properties are treated with the care they deserve; modern homes get the crisp, precise finish they demand.",
    bullets: [
      "Full and partial property refurbishments",
      "Kitchen remodels and open-plan living",
      "Period property restoration",
      "Plastering, joinery and decorating in-house",
    ],
    icon: PaintRoller,
  },
  {
    slug: "bathrooms",
    title: "Bathroom Renovations",
    short:
      "Hotel-quality bathrooms, designed and installed to an impeccable standard.",
    description:
      "A great bathroom is about precision — tiling that lines through perfectly, waterproofing you never have to think about, and fittings installed to last. We handle design, supply and installation for family bathrooms, en-suites and wet rooms.",
    bullets: [
      "Full design and installation service",
      "Wet rooms and walk-in showers",
      "Underfloor heating and smart controls",
      "Precision tiling and waterproof tanking",
    ],
    icon: Bath,
  },
  {
    slug: "waterproofing",
    title: "Basement Waterproofing",
    short:
      "Specialist structural waterproofing that keeps basements permanently dry.",
    description:
      "Damp basements waste valuable space. We install cavity drain membranes, sump systems and tanking to current British Standards, turning cold, damp cellars into dry, usable rooms — with the documentation to prove it.",
    bullets: [
      "Cavity drain membrane systems",
      "Sump and pump installation",
      "Cementitious tanking",
      "Damp diagnosis and remedial work",
    ],
    icon: Droplets,
  },
  {
    slug: "concrete",
    title: "Concrete Work",
    short:
      "Foundations, slabs, driveways and structural concrete — formed and finished properly.",
    description:
      "Good concrete work is the backbone of every solid build. From foundations and reinforced slabs to polished floors and driveways, we get the groundwork, reinforcement and finish right the first time.",
    bullets: [
      "Foundations and footings",
      "Reinforced slabs and structural concrete",
      "Driveways, paths and hardstandings",
      "Polished and power-floated finishes",
    ],
    icon: Layers,
  },
  {
    slug: "general-building",
    title: "General Building",
    short:
      "A dependable team for every building job — from repairs to full construction.",
    description:
      "Alongside our specialist services, we provide the full range of general building work for domestic and commercial clients: brickwork, roofing repairs, property maintenance and everything in between. One call, one accountable team.",
    bullets: [
      "Brickwork, blockwork and repointing",
      "Property maintenance contracts",
      "Roofing and guttering repairs",
      "Commercial and domestic projects",
    ],
    icon: Hammer,
  },
];

/* Additional services shown on the services page */
export const secondaryServices = [
  {
    title: "Building Construction",
    short: "Ground-up construction for domestic and commercial clients.",
    icon: Building2,
  },
  {
    title: "Property Maintenance",
    short: "Planned and reactive maintenance for homes, landlords and businesses.",
    icon: Wrench,
  },
  {
    title: "Project Management",
    short: "A single point of contact managing trades, schedule and budget.",
    icon: HardHat,
  },
] as const;

/* ------------------------------- Why choose us ------------------------------- */

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    title: "Quality Craftsmanship",
    description:
      "Time-served tradespeople who take genuine pride in the details — because the details are what last.",
    icon: Award,
  },
  {
    title: "Reliable Team",
    description:
      "We turn up when we say we will, keep the site tidy, and keep you informed at every stage.",
    icon: Users,
  },
  {
    title: "Transparent Pricing",
    description:
      "Detailed written quotations with no hidden extras. The price we agree is the price you pay.",
    icon: FileCheck,
  },
  {
    title: "Fully Insured",
    description:
      "Comprehensive public liability and employer's insurance on every project, for complete peace of mind.",
    icon: ShieldCheck,
  },
  {
    title: "Attention to Detail",
    description:
      "From first fix to final snag, nothing is signed off until it meets our standard — and yours.",
    icon: Eye,
  },
  {
    title: "Free Quotes",
    description:
      "Honest, no-obligation site visits and quotations. We'll tell you what's worth doing — and what isn't.",
    icon: BadgeCheck,
  },
];

/* -------------------------------- Testimonials -------------------------------- */

export type Testimonial = {
  name: string;
  location: string;
  project: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Surrey",
    project: "Kitchen Extension",
    quote:
      "From the first site visit to handover, the team were exceptional. The extension was finished on time, on budget, and the quality of the workmanship is outstanding. Our kitchen is now the heart of the house.",
  },
  {
    name: "James & Claire T.",
    location: "London",
    project: "Full Renovation",
    quote:
      "We'd heard horror stories about renovations, so we were nervous. ASA made it painless — clear communication, a tidy site, and honest advice when we needed to make decisions. We wouldn't use anyone else now.",
  },
  {
    name: "David R.",
    location: "Kent",
    project: "Basement Waterproofing",
    quote:
      "Two other companies quoted us for work we didn't need. ASA diagnosed the actual problem, fixed it properly, and the basement has been bone dry ever since. Refreshingly honest.",
  },
  {
    name: "Priya K.",
    location: "Hertfordshire",
    project: "Bathroom Renovation",
    quote:
      "The tiling alone is a work of art. Every line is perfect. They treated our home with real respect and the finished bathroom looks like it belongs in a boutique hotel.",
  },
  {
    name: "Mark W.",
    location: "Essex",
    project: "Commercial Fit-Out",
    quote:
      "They fitted out our office over a fortnight with minimal disruption to the business. Professional, punctual and the finish is superb. Already booked them for phase two.",
  },
];

/* ------------------------------------ FAQs ------------------------------------ */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Do you provide free quotations?",
    answer:
      "Yes. We visit your property, talk through exactly what you want to achieve, and provide a detailed written quotation — completely free and with no obligation. We'll also flag anything we think you don't need to spend money on.",
  },
  {
    question: "Are you fully insured?",
    answer:
      "Absolutely. We carry comprehensive public liability and employer's liability insurance on every project, and we're happy to provide certificates before work begins.",
  },
  {
    question: "How long does a typical extension take?",
    answer:
      "A single-storey extension typically takes 10–14 weeks from breaking ground to handover, depending on size and specification. We agree a realistic programme before we start and keep you updated weekly.",
  },
  {
    question: "Do you handle planning permission and building control?",
    answer:
      "We work alongside your architect or can introduce trusted design partners for planning drawings. All structural work is carried out to Building Regulations, and we manage building control inspections throughout the project.",
  },
  {
    question: "Do you work on commercial properties?",
    answer:
      "Yes. Alongside our domestic work we carry out office fit-outs, retail refurbishments and planned maintenance for commercial clients and landlords across the UK.",
  },
  {
    question: "What guarantees do you offer?",
    answer:
      "All our workmanship is guaranteed, and manufacturer warranties apply to materials and systems we install — including insurance-backed guarantees on structural waterproofing.",
  },
];

/* ---------------------------------- Timeline ---------------------------------- */

export type Milestone = { year: string; title: string; description: string };

export const timeline: Milestone[] = [
  {
    year: "2012",
    title: "Founded",
    description:
      "ASA Property Services is established with one van, two tradespeople, and a simple promise: do the job properly.",
  },
  {
    year: "2015",
    title: "First Major Extension",
    description:
      "We complete our first double-storey extension — and the referrals that followed set the pattern for how we've grown ever since.",
  },
  {
    year: "2018",
    title: "Specialist Waterproofing",
    description:
      "We add structural waterproofing to our services, training the team in cavity drain systems and modern tanking methods.",
  },
  {
    year: "2021",
    title: "Commercial Division",
    description:
      "Growing demand from business clients leads to a dedicated commercial team handling fit-outs and maintenance contracts.",
  },
  {
    year: "Today",
    title: "5.0-Star Rated",
    description:
      "A full team of time-served tradespeople, hundreds of completed projects, and a perfect Google rating we work hard to keep.",
  },
];

/* ------------------------------------ Stats ----------------------------------- */

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Years in Business" },
  { value: 350, suffix: "+", label: "Projects Completed" },
  { value: 5, suffix: ".0", label: "Google Rating" },
  { value: 98, suffix: "%", label: "Repeat & Referral Work" },
];

/* --------------------------------- Trust badges -------------------------------- */

export const trustBadges = [
  "Fully Insured",
  "Free Quotations",
  "Building Regs Compliant",
  "Workmanship Guaranteed",
  "DBS-Checked Team",
  "5.0 ★ Google Rated",
] as const;
