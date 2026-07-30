export type Lehenga = {
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

export const lehengas: Lehenga[] = [
  {
    id: 1,
    slug: "royal-red-bridal-lehenga",
    name: "Royal Red Bridal Lehenga",
    category: "Bridal",
    price: 12999,
    oldPrice: 15999,

    description:
      "A regal bridal lehenga crafted with luxurious fabric, intricate zari embroidery and elegant handcrafted detailing. Designed for brides who love timeless Indian elegance.",

    image: "/images/products/lehengas/lehenga-01.webp",

    images: [
      "/images/products/lehengas/lehenga-01.webp",
      "/images/products/lehengas/lehenga-01-2.webp",
      "/images/products/lehengas/lehenga-01-3.webp",
    ],

    badge: "Bestseller",

    color: "Royal Red",
    colorCode: "#8B1E2D",

    fabric: "Velvet",
    work: "Zari & Zardozi",
    occasion: "Wedding",

    rating: 4.9,
    reviews: 42,

    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 8,
  },

  {
    id: 2,
    slug: "pastel-pink-floral-lehenga",
    name: "Pastel Pink Floral Lehenga",
    category: "Designer",
    price: 8999,
    oldPrice: 10999,

    description:
      "A soft pastel designer lehenga featuring delicate floral embroidery and graceful detailing. Perfect for engagements, receptions and festive celebrations.",

    image: "/images/products/lehengas/lehenga-02.webp",

    images: [
      "/images/products/lehengas/lehenga-02.webp",
      "/images/products/lehengas/lehenga-02-2.webp",
      "/images/products/lehengas/lehenga-02-3.webp",
    ],

    badge: "New",

    color: "Pastel Pink",
    colorCode: "#E8B7BD",

    fabric: "Organza",
    work: "Floral Embroidery",
    occasion: "Engagement",

    rating: 4.8,
    reviews: 31,

    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 12,
  },

  {
    id: 3,
    slug: "royal-blue-mirror-work-lehenga",
    name: "Royal Blue Mirror Work Lehenga",
    category: "Festive",
    price: 7499,
    oldPrice: 8999,

    description:
      "A vibrant royal blue lehenga decorated with traditional mirror work and intricate embroidery, perfect for festive celebrations.",

    image: "/images/products/lehengas/lehenga-03.webp",

    images: [
      "/images/products/lehengas/lehenga-03.webp",
      "/images/products/lehengas/lehenga-03-2.webp",
      "/images/products/lehengas/lehenga-03-3.webp",
    ],

    badge: "Trending",

    color: "Royal Blue",
    colorCode: "#173A70",

    fabric: "Georgette",
    work: "Mirror Work",
    occasion: "Festive",

    rating: 4.7,
    reviews: 26,

    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 15,
  },

  {
    id: 4,
    slug: "golden-zari-party-lehenga",
    name: "Golden Zari Party Lehenga",
    category: "Party Wear",
    price: 6999,
    oldPrice: 8499,

    description:
      "An elegant golden partywear lehenga featuring refined zari detailing and a graceful silhouette for evening celebrations.",

    image: "/images/products/lehengas/lehenga-04.webp",

    images: [
      "/images/products/lehengas/lehenga-04.webp",
      "/images/products/lehengas/lehenga-04-2.webp",
      "/images/products/lehengas/lehenga-04-3.webp",
    ],

    badge: "New",

    color: "Golden",
    colorCode: "#C9A227",

    fabric: "Silk",
    work: "Zari Embroidery",
    occasion: "Party",

    rating: 4.8,
    reviews: 19,

    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 9,
  },

  {
    id: 5,
    slug: "emerald-green-bridal-lehenga",
    name: "Emerald Green Bridal Lehenga",
    category: "Bridal",
    price: 14999,
    oldPrice: 17999,

    description:
      "An exquisite emerald green bridal lehenga with luxurious embroidery and traditional craftsmanship for a sophisticated bridal look.",

    image: "/images/products/lehengas/lehenga-05.webp",

    images: [
      "/images/products/lehengas/lehenga-05.webp",
      "/images/products/lehengas/lehenga-05-2.webp",
      "/images/products/lehengas/lehenga-05-3.webp",
    ],

    badge: "Premium",

    color: "Emerald Green",
    colorCode: "#126B4F",

    fabric: "Raw Silk",
    work: "Zardozi",
    occasion: "Wedding",

    rating: 5,
    reviews: 17,

    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    stock: 5,
  },

  {
    id: 6,
    slug: "lavender-designer-lehenga",
    name: "Lavender Designer Lehenga",
    category: "Designer",
    price: 8499,
    oldPrice: 9999,

    description:
      "A contemporary lavender lehenga featuring delicate embellishments and elegant detailing for a modern festive appearance.",

    image: "/images/products/lehengas/lehenga-06.webp",

    images: [
      "/images/products/lehengas/lehenga-06.webp",
      "/images/products/lehengas/lehenga-06-2.webp",
      "/images/products/lehengas/lehenga-06-3.webp",
    ],

    badge: "New",

    color: "Lavender",
    colorCode: "#B69ACB",

    fabric: "Net",
    work: "Sequin Work",
    occasion: "Reception",

    rating: 4.6,
    reviews: 22,

    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 11,
  },
];