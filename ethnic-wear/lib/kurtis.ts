import { Product } from "./products";

export type Kurti = Product;

export const kurtis: Product[] = [
  {
    id: 301,
    slug: "chanderi-silk-anarkali-suit",
    name: "Chanderi Silk Hand-Embroidered Anarkali",
    category: "Anarkali Sets",
    price: 4599,
    oldPrice: 5499,
    description:
      "Flowing floor-length Chanderi silk Anarkali suit featuring Gota Patti yoke detail and organza dupatta.",
    image: "/images/products/embroidered-kurti.jpg",
    images: ["/images/products/embroidered-kurti.jpg", "/images/categories/kurti.jpg"],
    badge: "Festive Favorite",
    color: "Pastel Mint",
    fabric: "Chanderi Silk",
    work: "Gota Patti & Dori",
    occasion: "Festive & Puja",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 302,
    slug: "velvet-straight-kurti-set",
    name: "Royal Purple Velvet Straight Kurti Set",
    category: "Festive Sets",
    price: 3999,
    oldPrice: 4899,
    description:
      "Deep purple velvet kurti with zari threadwork, paired with silk pants and tissue dupatta.",
    image: "/images/categories/kurti.jpg",
    images: ["/images/categories/kurti.jpg", "/images/products/embroidered-kurti.jpg"],
    badge: "New Arrival",
    color: "Royal Purple",
    fabric: "Silk Velvet",
    work: "Zari Threadwork",
    occasion: "Festive",
    sizes: ["S", "M", "L", "XL"],
  },
];

export function getKurtiBySlug(slug: string) {
  return kurtis.find((k) => k.slug === slug) || kurtis[0];
}