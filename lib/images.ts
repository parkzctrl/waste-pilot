/**
 * Central image registry.
 *
 * Every image on the site is referenced from this file, so swapping the
 * Unsplash placeholders for real project photography is a single-file job.
 * Keep the `alt` text descriptive when you replace them.
 */

const unsplash = (id: string, w = 1200, q = 75) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  hero: {
    src: unsplash("photo-1503387762-592deb58ef4e", 1800, 80),
    alt: "Modern residential extension with floor-to-ceiling glazing at dusk",
  },
  about: {
    src: unsplash("photo-1541888946425-d81bb19240f5", 1400),
    alt: "Construction team reviewing plans on site",
  },
  aboutSecondary: {
    src: unsplash("photo-1504307651254-35680f356dfd", 1200),
    alt: "Steel framework of a building under construction",
  },
  cta: {
    src: unsplash("photo-1487958449943-2429e8be8625", 1800, 70),
    alt: "Striking modern architecture facade",
  },
  beforeAfter: {
    before: {
      src: unsplash("photo-1581858726788-75bc0f6a952d", 1200),
      alt: "Room stripped back to brick during renovation",
    },
    after: {
      src: unsplash("photo-1600585154340-be6161a56a0c", 1200),
      alt: "Finished contemporary living space after renovation",
    },
  },
} as const;

export type ProjectImage = {
  src: string;
  alt: string;
  title: string;
  category: "Extensions" | "Renovations" | "Bathrooms" | "Commercial";
  location: string;
  /** Aspect hint used by the masonry layout. */
  tall?: boolean;
};

export const projectImages: ProjectImage[] = [
  {
    src: unsplash("photo-1600585154340-be6161a56a0c", 1200),
    alt: "Open-plan kitchen extension with island and skylights",
    title: "Wraparound Kitchen Extension",
    category: "Extensions",
    location: "Surrey",
    tall: true,
  },
  {
    src: unsplash("photo-1600566753086-00f18fb6b3ea", 1200),
    alt: "Luxury bathroom with freestanding bath and marble tiling",
    title: "Master Bathroom Renovation",
    category: "Bathrooms",
    location: "London",
  },
  {
    src: unsplash("photo-1600607687939-ce8a6c25118c", 1200),
    alt: "Contemporary double-storey rear extension",
    title: "Double-Storey Rear Extension",
    category: "Extensions",
    location: "Kent",
  },
  {
    src: unsplash("photo-1600210492486-724fe5c67fb0", 1200),
    alt: "Renovated period living room with restored features",
    title: "Full House Renovation",
    category: "Renovations",
    location: "Hertfordshire",
    tall: true,
  },
  {
    src: unsplash("photo-1600566752355-35792bedcfea", 1200),
    alt: "Walk-in shower with matte black fixtures",
    title: "Boutique En-Suite",
    category: "Bathrooms",
    location: "Essex",
  },
  {
    src: unsplash("photo-1497366811353-6870744d04b2", 1200),
    alt: "Refurbished open-plan office interior",
    title: "Commercial Office Fit-Out",
    category: "Commercial",
    location: "London",
  },
  {
    src: unsplash("photo-1600573472592-401b489a3cdc", 1200),
    alt: "Modern kitchen renovation with handleless cabinetry",
    title: "Contemporary Kitchen Remodel",
    category: "Renovations",
    location: "Berkshire",
    tall: true,
  },
  {
    src: unsplash("photo-1600047509807-ba8f99d2cdde", 1200),
    alt: "New build home exterior with landscaped garden",
    title: "New Build Family Home",
    category: "Extensions",
    location: "Sussex",
  },
  {
    src: unsplash("photo-1600121848594-d8644e57abab", 1200),
    alt: "Basement conversion into a bright media room",
    title: "Basement Conversion",
    category: "Renovations",
    location: "London",
  },
];
