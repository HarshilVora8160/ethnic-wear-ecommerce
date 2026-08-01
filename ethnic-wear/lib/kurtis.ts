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
    originalPrice: 5499,
    description:
      "Flowing floor-length Chanderi silk Anarkali suit featuring Gota Patti yoke detail and organza dupatta.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Festive Favorite",
    newArrival: true,
    color: "Pastel Mint",
    colorCode: "#AAF0D1",
    fabric: "Chanderi Silk",
    work: "Gota Patti & Dori",
    technique: "Gota Craft",
    style: "Anarkali",
    occasion: "Festive & Puja",
    sizes: ["S", "M", "L", "XL"],
    reviews: 19,
    rating: 4.9,
    stock: 12,
  },
  {
    id: 302,
    slug: "velvet-straight-kurti-set",
    name: "Royal Purple Velvet Straight Kurti Set",
    category: "Festive Sets",
    price: 3999,
    oldPrice: 4899,
    originalPrice: 4899,
    description:
      "Deep purple velvet kurti with zari threadwork, paired with silk pants and tissue dupatta.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "New Arrival",
    newArrival: true,
    color: "Royal Purple",
    colorCode: "#4B0082",
    fabric: "Silk Velvet",
    work: "Zari Threadwork",
    technique: "Threadwork",
    style: "Straight Cut",
    occasion: "Festive",
    sizes: ["S", "M", "L", "XL"],
    reviews: 14,
    rating: 4.7,
    stock: 8,
  },
];

export function getKurtiBySlug(slug: string) {
  return kurtis.find((k) => k.slug === slug) || kurtis[0];
}