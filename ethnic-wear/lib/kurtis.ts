export type Kurti = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;

  image: string;
  images: string[];

  badge?: string;

  color: string;
  colorCode: string;

  fabric: string;
  work: string;
  occasion: string;

  rating: number;
  reviews: number;

  sizes: string[];
  stock: number;
};

export const kurtis: Kurti[] = [
  {
    id: 1,
    slug: "royal-floral-anarkali-kurti",
    name: "Royal Floral Anarkali Kurti",
    category: "Anarkali",
    price: 2499,
    oldPrice: 3199,
    description:
      "Elegant floral Anarkali kurti featuring delicate embroidery and a graceful silhouette for festive and special occasions.",
    image: "/images/products/kurtis/kurti-01.webp",
    images: [
      "/images/products/kurtis/kurti-01.webp",
      "/images/products/kurtis/kurti-01-2.webp",
      "/images/products/kurtis/kurti-01-3.webp",
    ],
    badge: "Bestseller",
    color: "Wine",
    colorCode: "#722F37",
    fabric: "Rayon",
    work: "Floral Embroidery",
    occasion: "Festive",
    rating: 4.8,
    reviews: 36,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 14,
  },

  {
    id: 2,
    slug: "pastel-pink-printed-kurti",
    name: "Pastel Pink Printed Kurti",
    category: "Printed",
    price: 1799,
    oldPrice: 2299,
    description:
      "A beautiful pastel pink printed kurti designed for effortless everyday elegance.",
    image: "/images/products/kurtis/kurti-02.webp",
    images: [
      "/images/products/kurtis/kurti-02.webp",
      "/images/products/kurtis/kurti-02-2.webp",
      "/images/products/kurtis/kurti-02-3.webp",
    ],
    badge: "New",
    color: "Pastel Pink",
    colorCode: "#E8B7BD",
    fabric: "Cotton",
    work: "Block Print",
    occasion: "Casual",
    rating: 4.7,
    reviews: 24,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 20,
  },

  {
    id: 3,
    slug: "emerald-green-embroidered-kurti",
    name: "Emerald Green Embroidered Kurti",
    category: "Embroidered",
    price: 2299,
    oldPrice: 2899,
    description:
      "Rich emerald green kurti with detailed embroidery and sophisticated traditional styling.",
    image: "/images/products/kurtis/kurti-03.webp",
    images: [
      "/images/products/kurtis/kurti-03.webp",
      "/images/products/kurtis/kurti-03-2.webp",
      "/images/products/kurtis/kurti-03-3.webp",
    ],
    badge: "Trending",
    color: "Emerald Green",
    colorCode: "#126B4F",
    fabric: "Chanderi",
    work: "Thread Embroidery",
    occasion: "Festive",
    rating: 4.9,
    reviews: 41,
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 10,
  },

  {
    id: 4,
    slug: "black-geometric-kurti",
    name: "Black Geometric Kurti",
    category: "Designer",
    price: 1999,
    oldPrice: 2499,
    description:
      "Contemporary black designer kurti with geometric detailing and a modern silhouette.",
    image: "/images/products/kurtis/kurti-04.webp",
    images: [
      "/images/products/kurtis/kurti-04.webp",
      "/images/products/kurtis/kurti-04-2.webp",
      "/images/products/kurtis/kurti-04-3.webp",
    ],
    badge: "New",
    color: "Black",
    colorCode: "#171717",
    fabric: "Viscose",
    work: "Digital Print",
    occasion: "Party",
    rating: 4.6,
    reviews: 18,
    sizes: ["S", "M", "L", "XL"],
    stock: 16,
  },
];