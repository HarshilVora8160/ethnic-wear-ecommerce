export type Product = {
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
  sizes?: string[];
};

export const products: Product[] = [
  {
    id: 1,
    slug: "royal-banarasi-silk-saree",
    name: "Royal Banarasi Silk Saree",
    category: "Sarees",
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
    sizes: ["Free Size"],
  },

  {
    id: 2,
    slug: "pearl-embroidered-designer-saree",
    name: "Pearl Embroidered Designer Saree",
    category: "Sarees",
    price: 5299,
    oldPrice: 6499,
    description:
      "A contemporary designer saree detailed with delicate pearl embroidery for elegant occasions.",
    image: "/images/products/saree-02.webp",
    images: [
      "/images/products/saree-02.webp",
      "/images/products/saree-02-2.webp",
      "/images/products/saree-02-3.webp",
    ],
    badge: "Trending",
    color: "Cream",
    fabric: "Organza",
    work: "Pearl Embroidery",
    occasion: "Party",
    sizes: ["Free Size"],
  },

  {
    id: 3,
    slug: "pastel-floral-organza-saree",
    name: "Pastel Floral Organza Saree",
    category: "Sarees",
    price: 3599,
    oldPrice: 4299,
    description:
      "A soft pastel organza saree featuring delicate floral detailing and an elegant modern finish.",
    image: "/images/products/saree-03.webp",
    images: [
      "/images/products/saree-03.webp",
      "/images/products/saree-03-2.webp",
    ],
    badge: "New",
    color: "Pastel Pink",
    fabric: "Organza",
    work: "Floral",
    occasion: "Festive",
    sizes: ["Free Size"],
  },
];