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
    description: "Multi-layered flared sharara suit detailed with Lucknowi chikankari and sequin accents.",
    image: "/images/categories/salwar.jpg",
    images: ["/images/categories/salwar.jpg", "/images/products/embroidered-kurti.jpg"],
    badge: "Trending",
    color: "Peach Coral",
    fabric: "Silk Georgette",
    work: "Chikankari & Sequins",
    occasion: "Sangeet & Festive",
    sizes: ["S", "M", "L", "XL"],
  },
];