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
    originalPrice: 16999,
    description: "Hand-embroidered raw silk groom sherwani with antique gold threadwork, churidar, and stole.",
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Royal Groom",
    newArrival: true,
    color: "Champagne Gold",
    colorCode: "#F3E5AB",
    fabric: "Raw Silk",
    work: "Antique Zardozi",
    technique: "Thread Zardozi",
    style: "Sherwani",
    occasion: "Groom Wedding",
    sizes: ["38", "40", "42", "44"],
    reviews: 15,
    rating: 4.9,
    stock: 4,
  },
];