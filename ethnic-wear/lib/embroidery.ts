// lib/embroidery.ts

export interface Embroidery {
  id: string;
  slug: string;
  name: string;
  image: string;
  images: string[];

  price: number;
  originalPrice?: number;

  category: string;
  technique: string;
  style: string;
  color: string;

  description: string;

  featured?: boolean;
  newArrival?: boolean;
}

export const embroideryDesigns: Embroidery[] = [
  {
    id: "emb-001",
    slug: "royal-zari-floral",
    name: "Royal Zari Floral",
    image: "/images/products/embroidery/royal-zari-floral.jpg",
    images: [
      "/images/products/embroidery/royal-zari-floral.jpg",
      "/images/products/embroidery/royal-zari-floral-2.jpg",
    ],
    price: 2499,
    originalPrice: 3299,
    category: "Floral",
    technique: "Zari Work",
    style: "Traditional",
    color: "Gold",
    description:
      "A luxurious floral embroidery design inspired by traditional Indian craftsmanship, perfect for sarees, lehengas and festive outfits.",
    featured: true,
    newArrival: true,
  },

  {
    id: "emb-002",
    slug: "aari-vine-pattern",
    name: "Aari Vine Pattern",
    image: "/images/products/embroidery/aari-vine-pattern.jpg",
    images: [
      "/images/products/embroidery/aari-vine-pattern.jpg",
    ],
    price: 1899,
    originalPrice: 2499,
    category: "Floral",
    technique: "Aari Work",
    style: "Contemporary",
    color: "Maroon",
    description:
      "A delicate vine-inspired embroidery pattern designed for contemporary ethnic fashion.",
    newArrival: true,
  },

  {
    id: "emb-003",
    slug: "bridal-mirror-bloom",
    name: "Bridal Mirror Bloom",
    image: "/images/products/embroidery/bridal-mirror-bloom.jpg",
    images: [
      "/images/products/embroidery/bridal-mirror-bloom.jpg",
    ],
    price: 3499,
    originalPrice: 4499,
    category: "Bridal",
    technique: "Mirror Work",
    style: "Bridal",
    color: "Red",
    description:
      "A statement bridal embroidery design featuring mirror-inspired detailing and floral motifs.",
    featured: true,
  },

  {
    id: "emb-004",
    slug: "royal-bead-work",
    name: "Royal Bead Work",
    image: "/images/products/embroidery/royal-bead-work.jpg",
    images: [
      "/images/products/embroidery/royal-bead-work.jpg",
    ],
    price: 4299,
    category: "Bridal",
    technique: "Bead Work",
    style: "Luxury",
    color: "Ivory",
    description:
      "Elegant bead embroidery designed for premium bridal and occasion wear.",
    featured: true,
  },

  {
    id: "emb-005",
    slug: "classic-thread-floral",
    name: "Classic Thread Floral",
    image: "/images/products/embroidery/classic-thread-floral.jpg",
    images: [
      "/images/products/embroidery/classic-thread-floral.jpg",
    ],
    price: 1599,
    category: "Floral",
    technique: "Thread Work",
    style: "Classic",
    color: "Pink",
    description:
      "A timeless thread embroidery pattern with elegant floral detailing.",
  },

  {
    id: "emb-006",
    slug: "geometric-zari-design",
    name: "Geometric Zari Design",
    image: "/images/products/embroidery/geometric-zari-design.jpg",
    images: [
      "/images/products/embroidery/geometric-zari-design.jpg",
    ],
    price: 2199,
    category: "Geometric",
    technique: "Zari Work",
    style: "Modern",
    color: "Gold",
    description:
      "A modern geometric zari pattern created for statement ethnic silhouettes.",
    newArrival: true,
  },
];

export function getEmbroideryBySlug(
  slug: string
): Embroidery | undefined {
  return embroideryDesigns.find(
    (embroidery) => embroidery.slug === slug
  );
}

export function getFeaturedEmbroidery(): Embroidery[] {
  return embroideryDesigns.filter(
    (embroidery) => embroidery.featured
  );
}

export function getNewEmbroidery(): Embroidery[] {
  return embroideryDesigns.filter(
    (embroidery) => embroidery.newArrival
  );
}