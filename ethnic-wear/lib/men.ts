import { Product } from "./products";

export type MenProduct = Product;

export const menProducts: Product[] = [
  {
    id: 501,
    slug: "royal-groom-sherwani-set",
    name: "Imperial Raw Silk Groom Sherwani Set",
    category: "Groom Sherwani",
    price: 12999,
    oldPrice: 16999,
    description: "Hand-embroidered raw silk groom sherwani with antique gold threadwork, churidar, and stole.",
    image: "/images/home/custom-design.jpg",
    images: ["/images/home/custom-design.jpg"],
    badge: "Royal Groom",
    color: "Champagne Gold",
    fabric: "Raw Silk",
    work: "Antique Zardozi",
    occasion: "Groom Wedding",
    sizes: ["38", "40", "42", "44"],
  },
];