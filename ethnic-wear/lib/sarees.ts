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
    description:
      "A rich Kadhwa weave Banarasi silk saree adorned with intricate floral jaal and pure gold zari border.",
    image: "/images/products/banarasi-saree.jpg",
    images: ["/images/products/banarasi-saree.jpg", "/images/categories/saree.jpg"],
    badge: "Heritage Handloom",
    color: "Crimson Red",
    fabric: "Banarasi Silk",
    work: "Pure Gold Zari",
    occasion: "Bridal & Wedding",
    sizes: ["Free Size"],
  },
  {
    id: 102,
    slug: "pearl-embroidered-organza-saree",
    name: "Pastel Ivory Pearl Organza Saree",
    category: "Designer Organza",
    price: 5299,
    oldPrice: 6499,
    description:
      "Delicate organza saree embellished with glass pearl embroidery and scalloped border.",
    image: "/images/products/designer-saree.jpg",
    images: ["/images/products/designer-saree.jpg", "/images/categories/saree.jpg"],
    badge: "Trending",
    color: "Ivory White",
    fabric: "Organza",
    work: "Pearl Embroidery",
    occasion: "Party & Cocktail",
    sizes: ["Free Size"],
  },
  {
    id: 103,
    slug: "pastel-blush-kanjeevaram-saree",
    name: "Pastel Blush Pink Kanjeevaram Silk Saree",
    category: "Kanjeevaram Silk",
    price: 7499,
    oldPrice: 9299,
    description:
      "Classic Kanchipuram silk saree featuring temple zari borders and contrast brocade pallu.",
    image: "/images/categories/saree.jpg",
    images: ["/images/categories/saree.jpg", "/images/products/banarasi-saree.jpg"],
    badge: "Bestseller",
    color: "Blush Pink",
    fabric: "Kanjeevaram Silk",
    work: "Silver & Gold Zari",
    occasion: "Festive & Wedding",
    sizes: ["Free Size"],
  },
];

export function getSareeBySlug(slug: string) {
  return sarees.find((s) => s.slug === slug) || sarees[0];
}