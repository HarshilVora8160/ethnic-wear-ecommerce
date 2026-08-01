import { Product } from "./products";

export type KidsProduct = Product;

export const kidsProducts: Product[] = [
  {
    id: 601,
    slug: "royal-miniature-silk-lehenga",
    name: "Miniature Silk Brocade Lehenga Set",
    category: "Kids Lehenga",
    price: 3299,
    oldPrice: 3999,
    originalPrice: 3999,
    description: "Adorable festive silk lehenga set for young princesses with soft lining and easy zipper fit.",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Kids Couture",
    newArrival: true,
    color: "Magenta Pink",
    colorCode: "#FF00FF",
    fabric: "Silk Brocade",
    work: "Gota Border",
    technique: "Miniature Handwork",
    style: "Kids Couture",
    occasion: "Festive",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
    reviews: 18,
    rating: 4.9,
    stock: 9,
  },
];