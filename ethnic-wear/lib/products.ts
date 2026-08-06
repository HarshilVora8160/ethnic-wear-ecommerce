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
  // Sarees
  {
    id: 101,
    slug: "royal-crimson-banarasi-saree",
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
    id: 102,
    slug: "pearl-embroidered-organza-saree",
    name: "Pastel Ivory Pearl Organza Saree",
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
    id: 103,
    slug: "pastel-blush-kanjeevaram-saree",
    name: "Pastel Blush Pink Kanjeevaram Silk Saree",
    category: "Sarees",
    price: 7499,
    oldPrice: 9299,
    originalPrice: 9299,
    description:
      "Classic Kanchipuram silk saree featuring temple zari borders and contrast brocade pallu.",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Bestseller",
    newArrival: true,
    color: "Blush Pink",
    colorCode: "#FFB6C1",
    fabric: "Kanjeevaram Silk",
    work: "Silver & Gold Zari",
    technique: "Kanchipuram Temple Weave",
    style: "Heritage",
    occasion: "Festive & Wedding",
    sizes: ["Free Size"],
    reviews: 54,
    rating: 5.0,
    stock: 4,
  },

  // Lehengas
  {
    id: 201,
    slug: "imperial-velvet-zardozi-bridal-lehenga",
    name: "Imperial Velvet Zardozi Bridal Lehenga",
    category: "Lehengas",
    price: 18999,
    oldPrice: 24999,
    originalPrice: 24999,
    description:
      "Heavy royal maroon velvet lehenga set hand-embroidered with 24k gold zardozi, dabka, dori embroidery, sequins, and twin net dupattas.",
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
    id: 202,
    slug: "pastel-rose-mirrorwork-lehenga",
    name: "Pastel Rose Gold Mirrorwork Lehenga",
    category: "Lehengas",
    price: 14599,
    oldPrice: 17999,
    originalPrice: 17999,
    description:
      "Contemporary silk georgette lehenga detailed with real mirror work and voluminous flared kali.",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Sangeet Special",
    newArrival: true,
    color: "Rose Gold",
    colorCode: "#B76E79",
    fabric: "Silk Georgette",
    work: "Abhla Mirrorwork",
    technique: "Mirror Handsetting",
    style: "Contemporary",
    occasion: "Sangeet & Reception",
    sizes: ["S", "M", "L"],
    reviews: 26,
    rating: 4.9,
    stock: 5,
  },

  // Kurtis
  {
    id: 301,
    slug: "chanderi-silk-anarkali-suit",
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
    id: 302,
    slug: "velvet-straight-kurti-set",
    name: "Royal Purple Velvet Straight Kurti Set",
    category: "Kurtis",
    price: 3999,
    oldPrice: 4899,
    originalPrice: 4899,
    description:
      "Deep purple velvet kurti with zari threadwork, paired with silk pants and tissue dupatta.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "New Arrival",
    newArrival: true,
    color: "Royal Purple",
    colorCode: "#4B0082",
    fabric: "Silk Velvet",
    work: "Zari Threadwork",
    technique: "Threadwork",
    style: "Straight Cut",
    occasion: "Festive",
    sizes: ["S", "M", "L", "XL"],
    reviews: 14,
    rating: 4.7,
    stock: 8,
  },

  // Men
  {
    id: 501,
    slug: "royal-groom-sherwani-set",
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
    id: 502,
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

  // Salwar Suits
  {
    id: 401,
    slug: "royal-silk-sharara-suit",
    name: "Royal Silk Georgette Sharara Suit",
    category: "Salwar Suits",
    price: 5499,
    oldPrice: 6999,
    originalPrice: 6999,
    description:
      "Multi-layered flared sharara suit detailed with Lucknowi chikankari and sequin accents.",
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

  // Kids
  {
    id: 601,
    slug: "royal-miniature-silk-lehenga",
    name: "Miniature Silk Brocade Lehenga Set",
    category: "Kids",
    price: 3299,
    oldPrice: 3999,
    originalPrice: 3999,
    description:
      "Adorable festive silk lehenga set for young princesses with soft lining and easy zipper fit.",
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

  // Embroidery Services
  {
    id: 701,
    slug: "bespoke-hand-zardozi-crafting",
    name: "Handcrafted Zardozi & Dabka Embroidery",
    category: "Embroidery",
    price: 9999,
    oldPrice: 12999,
    originalPrice: 12999,
    description:
      "Custom hand embroidery service done by master artisans in Old Delhi & Lucknow.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1000&q=80",
    ],
    badge: "Master Artisan",
    newArrival: true,
    color: "Gold & Metallic",
    colorCode: "#D4AF37",
    fabric: "Velvet / Silk",
    work: "Hand Zardozi",
    technique: "24k Gold Wire Zardozi",
    style: "Atelier Service",
    occasion: "Bespoke Bridal",
    sizes: ["Custom Spec"],
    reviews: 35,
    rating: 5.0,
    stock: 2,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  const normCategory = category.toLowerCase();
  return products.filter(
    (item) => item.category.toLowerCase() === normCategory
  );
}