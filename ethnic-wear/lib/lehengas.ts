import { Product } from "./products";

export type Lehenga = Product;

export const lehengas: Product[] = [
  {
    id: 201,
    slug: "imperial-velvet-zardozi-bridal-lehenga",
    name: "Imperial Velvet Zardozi Bridal Lehenga",
    category: "Bridal Velvet",
    price: 18999,
    oldPrice: 24999,
    description:
      "Heavy royal maroon velvet lehenga hand-embroidered with 24k gold zardozi, dabka, and crystal accents.",
    image: "/images/products/bridal-lehenga.jpg",
    images: ["/images/products/bridal-lehenga.jpg", "/images/categories/lehenga.jpg"],
    badge: "Bespoke Bridal",
    color: "Deep Maroon",
    fabric: "Royal Velvet",
    work: "Zardozi & Dabka",
    occasion: "Bridal Wedding",
    sizes: ["S", "M", "L", "Bespoke"],
  },
  {
    id: 202,
    slug: "pastel-rose-mirrorwork-lehenga",
    name: "Pastel Rose Gold Mirrorwork Lehenga",
    category: "Sangeet Designer",
    price: 14599,
    oldPrice: 17999,
    description:
      "Contemporary silk georgette lehenga detailed with real mirror work and voluminous flared kali.",
    image: "/images/categories/lehenga.jpg",
    images: ["/images/categories/lehenga.jpg", "/images/products/bridal-lehenga.jpg"],
    badge: "Sangeet Special",
    color: "Rose Gold",
    fabric: "Silk Georgette",
    work: "Abhla Mirrorwork",
    occasion: "Sangeet & Reception",
    sizes: ["S", "M", "L"],
  },
];

export function getLehengaBySlug(slug: string) {
  return lehengas.find((l) => l.slug === slug) || lehengas[0];
}