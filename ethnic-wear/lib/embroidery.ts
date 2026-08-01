import { Product } from "./products";

export type Embroidery = Product;

export const embroideryServices: Product[] = [
  {
    id: 701,
    slug: "bespoke-hand-zardozi-crafting",
    name: "Handcrafted Zardozi & Dabka Embroidery",
    category: "Craftsmanship",
    price: 9999,
    oldPrice: 12999,
    originalPrice: 12999,
    description: "Custom hand embroidery service done by master artisans in Old Delhi & Lucknow.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Master Artisan",
    newArrival: true,
    color: "Gold & Metallic",
    colorCode: "#D4AF37",
    fabric: "Velvet / Silk",
    work: "Hand Zardozi",
    technique: "24k Gold Wire Zardozi",
    style: "Atelier Service",
    occasion: "Bespoke Bridal",
    sizes: ["Custom Spec"],
    reviews: 35,
    rating: 5.0,
    stock: 2,
  },
];

export const embroideryDesigns = embroideryServices;

export function getEmbroideryBySlug(slug: string) {
  return embroideryDesigns.find((item) => item.slug === slug) || embroideryDesigns[0];
}