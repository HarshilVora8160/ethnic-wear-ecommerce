export type SalwarSuit = {
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

export const salwarSuits: SalwarSuit[] = [
  {
    id: 1,
    slug: "royal-maroon-embroidered-salwar-suit",
    name: "Royal Maroon Embroidered Salwar Suit",
    category: "Embroidered",
    price: 3499,
    oldPrice: 4299,
    description:
      "A sophisticated maroon salwar suit featuring intricate embroidery and elegant traditional detailing.",
    image:
      "/images/products/salwar-suits/salwar-suit-01.webp",
    images: [
      "/images/products/salwar-suits/salwar-suit-01.webp",
      "/images/products/salwar-suits/salwar-suit-01-2.webp",
      "/images/products/salwar-suits/salwar-suit-01-3.webp",
    ],
    badge: "Bestseller",
    color: "Maroon",
    colorCode: "#721F2D",
    fabric: "Silk",
    work: "Zari Embroidery",
    occasion: "Wedding",
    rating: 4.9,
    reviews: 38,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 9,
  },
  {
    id: 2,
    slug: "pastel-green-festive-salwar-suit",
    name: "Pastel Green Festive Salwar Suit",
    category: "Festive",
    price: 2999,
    oldPrice: 3699,
    description:
      "Elegant pastel green salwar suit with delicate embroidery, perfect for festive occasions.",
    image:
      "/images/products/salwar-suits/salwar-suit-02.webp",
    images: [
      "/images/products/salwar-suits/salwar-suit-02.webp",
      "/images/products/salwar-suits/salwar-suit-02-2.webp",
      "/images/products/salwar-suits/salwar-suit-02-3.webp",
    ],
    badge: "New",
    color: "Pastel Green",
    colorCode: "#A8C5A0",
    fabric: "Georgette",
    work: "Thread Work",
    occasion: "Festive",
    rating: 4.7,
    reviews: 27,
    sizes: ["S", "M", "L", "XL"],
    stock: 13,
  },
  {
    id: 3,
    slug: "royal-blue-party-salwar-suit",
    name: "Royal Blue Party Salwar Suit",
    category: "Party Wear",
    price: 3799,
    oldPrice: 4599,
    description:
      "A glamorous royal blue partywear suit with refined embellishments and a contemporary silhouette.",
    image:
      "/images/products/salwar-suits/salwar-suit-03.webp",
    images: [
      "/images/products/salwar-suits/salwar-suit-03.webp",
      "/images/products/salwar-suits/salwar-suit-03-2.webp",
      "/images/products/salwar-suits/salwar-suit-03-3.webp",
    ],
    badge: "Trending",
    color: "Royal Blue",
    colorCode: "#1B3D70",
    fabric: "Organza",
    work: "Sequin Work",
    occasion: "Party",
    rating: 4.8,
    reviews: 21,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 7,
  },
  {
    id: 4,
    slug: "peach-anarkali-salwar-suit",
    name: "Peach Anarkali Salwar Suit",
    category: "Anarkali",
    price: 3299,
    oldPrice: 3999,
    description:
      "A graceful peach Anarkali salwar suit designed with delicate detailing and a flowing silhouette.",
    image:
      "/images/products/salwar-suits/salwar-suit-04.webp",
    images: [
      "/images/products/salwar-suits/salwar-suit-04.webp",
      "/images/products/salwar-suits/salwar-suit-04-2.webp",
      "/images/products/salwar-suits/salwar-suit-04-3.webp",
    ],
    badge: "New",
    color: "Peach",
    colorCode: "#F2B8A2",
    fabric: "Rayon",
    work: "Embroidery",
    occasion: "Reception",
    rating: 4.6,
    reviews: 16,
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
  },
];