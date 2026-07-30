export type MenProduct = {
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

export const menProducts: MenProduct[] = [
  {
    id: 1,
    slug: "royal-black-embroidered-kurta",
    name: "Royal Black Embroidered Kurta",
    category: "Kurta",
    price: 2499,
    oldPrice: 3199,
    description:
      "A sophisticated black kurta featuring refined embroidery and a premium traditional silhouette.",
    image: "/images/products/men/men-01.webp",
    images: [
      "/images/products/men/men-01.webp",
      "/images/products/men/men-01-2.webp",
      "/images/products/men/men-01-3.webp",
    ],
    badge: "Bestseller",
    color: "Black",
    colorCode: "#151515",
    fabric: "Silk Blend",
    work: "Embroidery",
    occasion: "Wedding",
    rating: 4.9,
    reviews: 32,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 11,
  },

  {
    id: 2,
    slug: "ivory-festive-kurta",
    name: "Ivory Festive Kurta",
    category: "Festive Kurta",
    price: 2299,
    oldPrice: 2799,
    description:
      "An elegant ivory kurta designed with subtle detailing for festive celebrations.",
    image: "/images/products/men/men-02.webp",
    images: [
      "/images/products/men/men-02.webp",
      "/images/products/men/men-02-2.webp",
      "/images/products/men/men-02-3.webp",
    ],
    badge: "New",
    color: "Ivory",
    colorCode: "#F3EBDD",
    fabric: "Cotton Silk",
    work: "Thread Work",
    occasion: "Festive",
    rating: 4.8,
    reviews: 25,
    sizes: ["S", "M", "L", "XL"],
    stock: 15,
  },

  {
    id: 3,
    slug: "royal-blue-indo-western",
    name: "Royal Blue Indo-Western",
    category: "Indo-Western",
    price: 4999,
    oldPrice: 5999,
    description:
      "A contemporary royal blue Indo-Western outfit combining modern tailoring with Indian craftsmanship.",
    image: "/images/products/men/men-03.webp",
    images: [
      "/images/products/men/men-03.webp",
      "/images/products/men/men-03-2.webp",
      "/images/products/men/men-03-3.webp",
    ],
    badge: "Trending",
    color: "Royal Blue",
    colorCode: "#173A70",
    fabric: "Jacquard",
    work: "Woven Detail",
    occasion: "Reception",
    rating: 4.7,
    reviews: 19,
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 8,
  },

  {
    id: 4,
    slug: "cream-nehru-jacket",
    name: "Classic Cream Nehru Jacket",
    category: "Nehru Jacket",
    price: 2999,
    oldPrice: 3599,
    description:
      "A timeless cream Nehru jacket that pairs beautifully with kurtas and festive outfits.",
    image: "/images/products/men/men-04.webp",
    images: [
      "/images/products/men/men-04.webp",
      "/images/products/men/men-04-2.webp",
      "/images/products/men/men-04-3.webp",
    ],
    badge: "New",
    color: "Cream",
    colorCode: "#E8D9C3",
    fabric: "Linen Blend",
    work: "Textured Weave",
    occasion: "Festive",
    rating: 4.6,
    reviews: 15,
    sizes: ["S", "M", "L", "XL"],
    stock: 13,
  },
];