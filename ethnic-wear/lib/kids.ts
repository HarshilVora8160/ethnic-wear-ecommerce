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
    description: "Adorable festive silk lehenga set for young princesses with soft lining and easy zipper fit.",
    image: "/images/categories/lehenga.jpg",
    images: ["/images/categories/lehenga.jpg"],
    badge: "Kids Couture",
    color: "Magenta Pink",
    fabric: "Silk Brocade",
    work: "Gota Border",
    occasion: "Festive",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
  },
];