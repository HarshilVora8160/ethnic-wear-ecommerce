"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUI } from "@/lib/context/UIContext";
import { Product } from "@/lib/products";

interface ProductCardProps {
  product?: Product;
  // Fallback individual props
  id?: number;
  name?: string;
  category?: string;
  price?: string | number;
  oldPrice?: number;
  image?: string;
  secondaryImage?: string;
  href?: string;
  badge?: string;
  fabric?: string;
}

export default function ProductCard({
  product,
  id,
  name,
  category,
  price,
  oldPrice,
  image,
  secondaryImage,
  href,
  badge,
  fabric,
}: ProductCardProps) {
  const { setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useUI();
  const [isHovered, setIsHovered] = useState(false);

  // Normalize product data
  const item: Product = product || {
    id: id || Math.floor(Math.random() * 10000),
    slug: name ? name.toLowerCase().replace(/\s+/g, "-") : "product",
    name: name || "Ethnic Ensemble",
    category: category || "Couture",
    price: typeof price === "number" ? price : parseInt(String(price || "0").replace(/[^0-9]/g, "")) || 4999,
    oldPrice: oldPrice,
    description: "Handcrafted ethnic ensemble designed with intricate detailing and premium silk.",
    image: image || "/images/products/saree-01.webp",
    images: secondaryImage ? [image || "", secondaryImage] : [image || ""],
    badge: badge,
    color: "Gold",
    fabric: fabric || "Silk",
    work: "Zari",
    occasion: "Festive",
  };

  const linkHref = href || `/products/${item.slug}`;
  const inWishlist = isInWishlist(item.id);
  const displayImage = isHovered && item.images && item.images.length > 1 ? item.images[1] : item.image;

  const discountPercent = item.oldPrice
    ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
    : null;

  return (
    <article
      className="group relative flex flex-col overflow-hidden bg-white border border-[#E6DED6] transition-all duration-500 hover:border-[#D4AF37] hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F0E7DB]">
        <Link href={linkHref} className="absolute inset-0">
          <Image
            src={displayImage}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badge & Discount */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-1">
          {item.badge && (
            <span className="bg-[#2A0812] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#F3E5AB] shadow-xs">
              {item.badge}
            </span>
          )}
          {discountPercent && (
            <span className="bg-[#B91C1C] px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-xs">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Toggle Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(item.id);
          }}
          className={`absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 shadow-md ${
            inWishlist
              ? "bg-[#B91C1C] text-white"
              : "bg-white/90 text-[#2A0812] hover:bg-[#2A0812] hover:text-[#F3E5AB]"
          }`}
          aria-label="Toggle wishlist"
        >
          ♥
        </button>

        {/* Action Overlay Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <button
            onClick={() => setQuickViewProduct(item)}
            className="flex-1 bg-[#2A0812]/95 py-3 text-center text-[10px] font-semibold uppercase tracking-widest text-[#F3E5AB] transition hover:bg-[#4A1525]"
          >
            Quick View
          </button>
          <button
            onClick={() => addToCart(item)}
            className="bg-gradient-to-r from-[#D4AF37] to-[#B38F24] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-widest text-[#2A0812] transition hover:brightness-110"
          >
            + Add
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-[#9A7653]">
            <span>{item.category}</span>
            {item.fabric && <span>{item.fabric}</span>}
          </div>

          <Link href={linkHref}>
            <h3 className="mt-1 font-serif text-base font-medium text-[#2A0812] transition hover:text-[#9A7653] line-clamp-1">
              {item.name}
            </h3>
          </Link>
        </div>

        {/* Pricing */}
        <div className="mt-3 flex items-center justify-between border-t border-[#E6DED6]/60 pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-base font-semibold text-[#2A0812]">
              ₹{item.price.toLocaleString("en-IN")}
            </span>
            {item.oldPrice && (
              <span className="text-xs text-[#786C68] line-through">
                ₹{item.oldPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>
          <span className="text-[10px] text-[#D4AF37]">★★★★★</span>
        </div>
      </div>
    </article>
  );
}