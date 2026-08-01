"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useUI } from "@/lib/context/UIContext";

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useUI();
  const [selectedSize, setSelectedSize] = useState("Free Size");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!quickViewProduct) return null;

  const product = quickViewProduct;
  const currentImage = selectedImage || product.image;
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const inWishlist = isInWishlist(product.id);
  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const sizes = product.sizes && product.sizes.length > 0 ? product.sizes : ["Free Size", "S", "M", "L", "XL"];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={() => {
          setQuickViewProduct(null);
          setSelectedImage(null);
        }}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden bg-[#FAF6F0] shadow-2xl border border-[#D4AF37]/30 transition-all max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => {
            setQuickViewProduct(null);
            setSelectedImage(null);
          }}
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-[#2A0812] text-[#F3E5AB] transition hover:bg-[#4A1525]"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Images */}
          <div className="bg-[#F0E7DB] p-6 flex flex-col items-center justify-center">
            <div className="relative h-80 sm:h-96 w-full overflow-hidden border border-[#E6DED6]">
              <Image
                src={currentImage}
                alt={product.name}
                fill
                className="object-cover transition-all duration-300"
              />
              {product.badge && (
                <span className="absolute left-3 top-3 bg-[#2A0812] px-3 py-1 text-[10px] uppercase tracking-widest text-[#F3E5AB]">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-16 w-14 shrink-0 overflow-hidden border ${
                      currentImage === img ? "border-[#D4AF37] ring-1 ring-[#D4AF37]" : "border-[#E6DED6]"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#9A7653] font-medium">
                {product.category}
              </p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-[#2A0812] font-medium">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="mt-3 flex items-center gap-3">
                <span className="font-serif text-2xl font-semibold text-[#2A0812]">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-[#786C68] line-through">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                )}
                {discountPercent && (
                  <span className="bg-[#B91C1C] px-2 py-0.5 text-[11px] font-bold text-white uppercase">
                    {discountPercent}% OFF
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
                <span>★★★★★</span>
                <span className="text-[#786C68]">(4.9 / 5.0 rating)</span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#786C68]">
                {product.description}
              </p>

              {/* Product Specifications */}
              <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[#E6DED6] py-4 text-xs">
                <div>
                  <span className="text-[#786C68]">Fabric: </span>
                  <span className="font-medium text-[#2A0812]">{product.fabric}</span>
                </div>
                <div>
                  <span className="text-[#786C68]">Craft Work: </span>
                  <span className="font-medium text-[#2A0812]">{product.work}</span>
                </div>
                <div>
                  <span className="text-[#786C68]">Color: </span>
                  <span className="font-medium text-[#2A0812]">{product.color}</span>
                </div>
                <div>
                  <span className="text-[#786C68]">Occasion: </span>
                  <span className="font-medium text-[#2A0812]">{product.occasion}</span>
                </div>
              </div>

              {/* Size Selector */}
              <div className="mt-5">
                <label className="block text-xs font-semibold text-[#2A0812] uppercase tracking-wider mb-2">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 text-xs border transition ${
                        selectedSize === sz
                          ? "border-[#2A0812] bg-[#2A0812] text-[#F3E5AB]"
                          : "border-[#E6DED6] bg-white text-[#2A0812] hover:border-[#D4AF37]"
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={() => {
                  addToCart(product, selectedSize);
                  setQuickViewProduct(null);
                }}
                className="flex-1 bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] py-3.5 text-xs font-bold uppercase tracking-widest text-[#2A0812] shadow-md transition hover:brightness-105"
              >
                Add to Bag
              </button>

              <button
                onClick={() => toggleWishlist(product.id)}
                className={`flex h-12 w-12 items-center justify-center border text-lg transition ${
                  inWishlist
                    ? "border-[#B91C1C] bg-[#B91C1C] text-white"
                    : "border-[#2A0812] text-[#2A0812] hover:bg-[#2A0812] hover:text-[#F3E5AB]"
                }`}
                aria-label="Wishlist"
              >
                ♥
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
