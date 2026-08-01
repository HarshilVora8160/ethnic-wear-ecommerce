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
    description: "Custom hand embroidery service done by master artisans in Old Delhi & Lucknow.",
    image: "/images/home/embroidery.jpg",
    images: ["/images/home/embroidery.jpg"],
    badge: "Master Artisan",
    color: "Gold & Metallic",
    fabric: "Velvet / Silk",
    work: "Hand Zardozi",
    occasion: "Bespoke Bridal",
    sizes: ["Custom Spec"],
  },
];

export const embroideryDesigns = embroideryServices;

export function getEmbroideryBySlug(slug: string) {
  return embroideryDesigns.find((item) => item.slug === slug) || embroideryDesigns[0];
}