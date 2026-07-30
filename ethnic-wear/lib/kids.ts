export type KidsProduct = {
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

export const kidsProducts: KidsProduct[] = [
  {
    id: 1,
    slug: "princess-pink-festive-lehenga",
    name: "Princess Pink Festive Lehenga",
    category: "Girls",
    price: 2999,
    oldPrice: 3699,
    description:
      "A charming pink festive lehenga designed specially for little princesses with delicate embroidery and beautiful detailing.",
    image: "/images/products/kids/kids-01.webp",
    images: [
      "/images/products/kids/kids-01.webp",
      "/images/products/kids/kids-01-2.webp",
      "/images/products/kids/kids-01-3.webp",
    ],
    badge: "Bestseller",
    color: "Pink",
    colorCode: "#E8A8B5",
    fabric: "Net",
    work: "Sequin Work",
    occasion: "Festive",
    rating: 4.9,
    reviews: 28,
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    stock: 10,
  },

  {
    id: 2,
    slug: "royal-blue-boys-kurta-set",
    name: "Royal Blue Boys Kurta Set",
    category: "Boys",
    price: 1999,
    oldPrice: 2499,
    description:
      "A stylish royal blue kurta set designed for boys with comfortable fabric and traditional detailing.",
    image: "/images/products/kids/kids-02.webp",
    images: [
      "/images/products/kids/kids-02.webp",
      "/images/products/kids/kids-02-2.webp",
      "/images/products/kids/kids-02-3.webp",
    ],
    badge: "New",
    color: "Royal Blue",
    colorCode: "#1C4075",
    fabric: "Cotton Silk",
    work: "Embroidery",
    occasion: "Wedding",
    rating: 4.7,
    reviews: 19,
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    stock: 15,
  },

  {
    id: 3,
    slug: "mint-green-girls-anarkali",
    name: "Mint Green Girls Anarkali",
    category: "Girls",
    price: 2299,
    oldPrice: 2899,
    description:
      "A beautiful mint green Anarkali dress featuring delicate embellishments and a comfortable flowing design.",
    image: "/images/products/kids/kids-03.webp",
    images: [
      "/images/products/kids/kids-03.webp",
      "/images/products/kids/kids-03-2.webp",
      "/images/products/kids/kids-03-3.webp",
    ],
    badge: "Trending",
    color: "Mint Green",
    colorCode: "#A9D8C4",
    fabric: "Georgette",
    work: "Embroidery",
    occasion: "Party",
    rating: 4.8,
    reviews: 22,
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y"],
    stock: 12,
  },

  {
    id: 4,
    slug: "cream-boys-nehru-jacket-set",
    name: "Cream Boys Nehru Jacket Set",
    category: "Boys",
    price: 2499,
    oldPrice: 2999,
    description:
      "A sophisticated cream ethnic set with a Nehru jacket for weddings and festive celebrations.",
    image: "/images/products/kids/kids-04.webp",
    images: [
      "/images/products/kids/kids-04.webp",
      "/images/products/kids/kids-04-2.webp",
      "/images/products/kids/kids-04-3.webp",
    ],
    badge: "New",
    color: "Cream",
    colorCode: "#E8DCC8",
    fabric: "Cotton Blend",
    work: "Woven Detail",
    occasion: "Wedding",
    rating: 4.6,
    reviews: 14,
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y"],
    stock: 9,
  },
];