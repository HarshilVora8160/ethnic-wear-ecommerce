export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  originalPrice?: number;
  description: string;
  image: string;
  images: string[];
  badge?: string;
  newArrival?: boolean;
  color: string;
  colorCode?: string;
  fabric: string;
  work: string;
  technique?: string;
  style?: string;
  occasion: string;
  sizes?: string[];
  reviews?: number;
  rating?: number;
  ageGroup?: string;
  stock?: number;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "royal-banarasi-silk-saree",
    name: "Royal Crimson Banarasi Silk Saree",
    category: "Sarees",
    price: 6899,
    oldPrice: 8999,
    originalPrice: 8999,
    description:
      "A luxurious woven Banarasi silk saree featuring antique gold kadwa zari motifs, rich pallu detail, and handcrafted silk brocade weaving.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Heritage Handloom",
    newArrival: true,
    color: "Crimson Red",
    colorCode: "#8B0000",
    fabric: "Banarasi Silk",
    work: "Pure Gold Zari",
    technique: "Kadwa Weave",
    style: "Heritage",
    occasion: "Bridal & Wedding",
    sizes: ["Free Size"],
    reviews: 48,
    rating: 4.9,
    stock: 5,
  },
  {
    id: 2,
    slug: "velvet-zardozi-bridal-lehenga",
    name: "Imperial Velvet Zardozi Bridal Lehenga",
    category: "Lehengas",
    price: 18999,
    oldPrice: 24999,
    originalPrice: 24999,
    description:
      "Heavy royal velvet bridal lehenga set adorned with hand zardozi, dabka, dori embroidery, sequins, and twin net dupattas.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Bespoke Bridal",
    newArrival: true,
    color: "Deep Maroon",
    colorCode: "#4A0E17",
    fabric: "Royal Velvet",
    work: "Zardozi & Dabka",
    technique: "Hand Zardozi",
    style: "Bridal",
    occasion: "Bridal Wedding",
    sizes: ["S", "M", "L", "Bespoke"],
    reviews: 32,
    rating: 5.0,
    stock: 3,
  },
  {
    id: 3,
    slug: "pearl-embroidered-designer-saree",
    name: "Pastel Ivory Pearl Embroidered Saree",
    category: "Sarees",
    price: 5299,
    oldPrice: 6499,
    originalPrice: 6499,
    description:
      "A contemporary sheer organza saree detailed with hand-sewn glass pearls, subtle shimmer border, and silk unstitched blouse piece.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Trending",
    newArrival: false,
    color: "Ivory White",
    colorCode: "#FAF6F0",
    fabric: "Sheer Organza",
    work: "Pearl & Cutdana",
    technique: "Glass Pearl Handsewn",
    style: "Contemporary",
    occasion: "Cocktail & Party",
    sizes: ["Free Size"],
    reviews: 24,
    rating: 4.8,
    stock: 8,
  },
  {
    id: 4,
    slug: "chanderi-silk-festive-anarkali",
    name: "Chanderi Silk Hand-Embroidered Anarkali",
    category: "Kurtis",
    price: 4599,
    oldPrice: 5499,
    originalPrice: 5499,
    description:
      "Flowing floor-length Chanderi silk Anarkali suit featuring Gota Patti yoke detail, churidar, and hand-painted organza dupatta.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Festive Favorite",
    newArrival: true,
    color: "Pastel Mint",
    colorCode: "#AAF0D1",
    fabric: "Chanderi Silk",
    work: "Gota Patti & Dori",
    technique: "Gota Craft",
    style: "Anarkali",
    occasion: "Festive & Sangeet",
    sizes: ["S", "M", "L", "XL"],
    reviews: 19,
    rating: 4.9,
    stock: 12,
  },
  {
    id: 5,
    slug: "royal-embroidered-silk-sherwani",
    name: "Imperial Raw Silk Groom Sherwani Set",
    category: "Men",
    price: 12999,
    oldPrice: 16999,
    originalPrice: 16999,
    description:
      "Hand-embroidered raw silk groom sherwani with intricate antique gold threadwork, churidar pants, and regal stole.",
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
    work: "Threadwork & Zardozi",
    technique: "Thread Zardozi",
    style: "Sherwani",
    occasion: "Groom Wedding",
    sizes: ["38", "40", "42", "44"],
    reviews: 15,
    rating: 4.9,
    stock: 4,
  },
  {
    id: 6,
    slug: "zardozi-silk-festive-kurta",
    name: "Emerald Silk Velvet Kurta Set",
    category: "Men",
    price: 3899,
    oldPrice: 4899,
    originalPrice: 4899,
    description:
      "Rich emerald green silk velvet kurta detailed with zardozi collar, paired with ivory silk pyjama.",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "New Arrival",
    newArrival: true,
    color: "Emerald Green",
    colorCode: "#50C878",
    fabric: "Silk Velvet",
    work: "Zardozi Collar",
    technique: "Collar Zardozi",
    style: "Festive Kurta",
    occasion: "Diwali & Sangeet",
    sizes: ["S", "M", "L", "XL"],
    reviews: 11,
    rating: 4.7,
    stock: 6,
  },
];