export type Saree = {
  id: number;
  slug: string;
  name: string;
  category: string;

  price: number;
  oldPrice?: number;

  description: string;

  image: string;
  images: string[];

  badge?: string;

  color: string;
  fabric: string;
  work: string;
  occasion: string;
};

export const sarees: Saree[] = [
  {
    id: 1,
    slug: "royal-banarasi-silk-saree",
    name: "Royal Banarasi Silk Saree",
    category: "Banarasi Silk",

    price: 4899,
    oldPrice: 5999,

    description:
      "A luxurious Banarasi silk saree featuring elegant traditional zari work and a timeless silhouette.",

    image: "/images/products/saree-01.webp",

    images: [
      "/images/products/saree-01.webp",
      "/images/products/saree-01-2.webp",
      "/images/products/saree-01-3.webp",
    ],

    badge: "New",

    color: "Maroon",
    fabric: "Banarasi Silk",
    work: "Zari",
    occasion: "Wedding",
  },

  {
    id: 2,
    slug: "pearl-embroidered-designer-saree",
    name: "Pearl Embroidered Designer Saree",
    category: "Designer Saree",

    price: 5299,
    oldPrice: 6499,

    description:
      "A contemporary designer saree featuring delicate pearl embroidery and an elegant modern finish.",

    image: "/images/products/saree-02.webp",

    images: [
      "/images/products/saree-02.webp",
      "/images/products/saree-02-2.webp",
    ],

    badge: "Trending",

    color: "Cream",
    fabric: "Organza",
    work: "Pearl Embroidery",
    occasion: "Party",
  },
];