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
    originalPrice: 24999,
    description:
      "Heavy royal maroon velvet lehenga hand-embroidered with 24k gold zardozi, dabka, and crystal accents.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Bespoke Bridal",
    newArrival: true,
    color: "Deep Maroon",
    colorCode: "#4A0E17",
    fabric: "Royal Velvet",
    work: "Zardozi & Dabka",
    technique: "Hand Zardozi",
    style: "Bridal",
    occasion: "Bridal Wedding",
    sizes: ["S", "M", "L", "Bespoke"],
    reviews: 32,
    rating: 5.0,
    stock: 3,
  },
  {
    id: 202,
    slug: "pastel-rose-mirrorwork-lehenga",
    name: "Pastel Rose Gold Mirrorwork Lehenga",
    category: "Sangeet Designer",
    price: 14599,
    oldPrice: 17999,
    originalPrice: 17999,
    description:
      "Contemporary silk georgette lehenga detailed with real mirror work and voluminous flared kali.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Sangeet Special",
    newArrival: true,
    color: "Rose Gold",
    colorCode: "#B76E79",
    fabric: "Silk Georgette",
    work: "Abhla Mirrorwork",
    technique: "Mirror Handsetting",
    style: "Contemporary",
    occasion: "Sangeet & Reception",
    sizes: ["S", "M", "L"],
    reviews: 26,
    rating: 4.9,
    stock: 5,
  },
];

export function getLehengaBySlug(slug: string) {
  return lehengas.find((l) => l.slug === slug) || lehengas[0];
}