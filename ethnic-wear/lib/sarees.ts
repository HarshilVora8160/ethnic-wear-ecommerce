import { Product } from "./products";

export type Saree = Product;

export const sarees: Product[] = [
  {
    id: 101,
    slug: "royal-crimson-banarasi-saree",
    name: "Royal Crimson Banarasi Silk Saree",
    category: "Banarasi Silk",
    price: 6899,
    oldPrice: 8999,
    originalPrice: 8999,
    description:
      "A rich Kadhwa weave Banarasi silk saree adorned with intricate floral jaal and pure gold zari border.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Heritage Handloom",
    newArrival: true,
    color: "Crimson Red",
    colorCode: "#8B0000",
    fabric: "Banarasi Silk",
    work: "Pure Gold Zari",
    technique: "Kadwa Weave",
    style: "Heritage",
    occasion: "Bridal & Wedding",
    sizes: ["Free Size"],
    reviews: 48,
    rating: 4.9,
    stock: 5,
  },
  {
    id: 102,
    slug: "pearl-embroidered-organza-saree",
    name: "Pastel Ivory Pearl Organza Saree",
    category: "Designer Organza",
    price: 5299,
    oldPrice: 6499,
    originalPrice: 6499,
    description:
      "Delicate organza saree embellished with glass pearl embroidery and scalloped border.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Trending",
    newArrival: false,
    color: "Ivory White",
    colorCode: "#FAF6F0",
    fabric: "Organza",
    work: "Pearl Embroidery",
    technique: "Glass Pearl Handsewn",
    style: "Contemporary",
    occasion: "Party & Cocktail",
    sizes: ["Free Size"],
    reviews: 31,
    rating: 4.8,
    stock: 8,
  },
  {
    id: 103,
    slug: "pastel-blush-kanjeevaram-saree",
    name: "Pastel Blush Pink Kanjeevaram Silk Saree",
    category: "Kanjeevaram Silk",
    price: 7499,
    oldPrice: 9299,
    originalPrice: 9299,
    description:
      "Classic Kanchipuram silk saree featuring temple zari borders and contrast brocade pallu.",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Bestseller",
    newArrival: true,
    color: "Blush Pink",
    colorCode: "#FFB6C1",
    fabric: "Kanjeevaram Silk",
    work: "Silver & Gold Zari",
    technique: "Kanchipuram Temple Weave",
    style: "Heritage",
    occasion: "Festive & Wedding",
    sizes: ["Free Size"],
    reviews: 54,
    rating: 5.0,
    stock: 4,
  },
];

export function getSareeBySlug(slug: string) {
  return sarees.find((s) => s.slug === slug) || sarees[0];
}