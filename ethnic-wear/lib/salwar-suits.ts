import { Product } from "./products";

export type SalwarSuit = Product;

export const salwarSuits: Product[] = [
  {
    id: 401,
    slug: "royal-silk-sharara-suit",
    name: "Royal Silk Georgette Sharara Suit",
    category: "Sharara Sets",
    price: 5499,
    oldPrice: 6999,
    originalPrice: 6999,
    description: "Multi-layered flared sharara suit detailed with Lucknowi chikankari and sequin accents.",
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Trending",
    newArrival: true,
    color: "Peach Coral",
    colorCode: "#FF7F50",
    fabric: "Silk Georgette",
    work: "Chikankari & Sequins",
    technique: "Lucknowi Handwork",
    style: "Sharara",
    occasion: "Sangeet & Festive",
    sizes: ["S", "M", "L", "XL"],
    reviews: 22,
    rating: 4.8,
    stock: 7,
  },
];