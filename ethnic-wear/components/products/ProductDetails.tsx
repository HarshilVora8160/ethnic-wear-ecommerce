"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Share2,
  Ruler,
} from "lucide-react";
import { Product, products } from "@/lib/products";
import { useUI } from "@/lib/context/UIContext";
import ProductCard from "@/components/products/ProductCard";
import FitEstimatorModal from "@/components/ui/FitEstimatorModal";

interface Props {
  product: Product;
}

export default function ProductDetails({ product }: Props) {
  const { addToCart, toggleWishlist, isInWishlist } = useUI();

  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  const availableSizes =
    product.sizes && product.sizes.length > 0
      ? product.sizes
      : ["Free Size"];

  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "shipping">("desc");
  const [isFitModalOpen, setIsFitModalOpen] = useState(false);

  const currentIndex = galleryImages.indexOf(selectedImage);
  const inWishlist = isInWishlist(product.id);

  const discountPercent = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  const previousImage = () => {
    const prevIdx =
      currentIndex <= 0 ? galleryImages.length - 1 : currentIndex - 1;
    setSelectedImage(galleryImages[prevIdx]);
  };

  const nextImage = () => {
    const nextIdx =
      currentIndex >= galleryImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(galleryImages[nextIdx]);
  };

  const relatedProducts = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-20">
      {/* Fit Estimator Modal */}
      <FitEstimatorModal
        isOpen={isFitModalOpen}
        onClose={() => setIsFitModalOpen(false)}
        productTitle={product.name}
      />

      {/* Breadcrumb Bar */}
      <div className="border-b border-[#E6DED6] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#7D6E65]">
            <Link href="/" className="hover:text-[#2A0812] transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#2A0812] transition">
              Products
            </Link>
            <span>/</span>
            <span className="text-[#8B5E3C] font-medium">{product.category}</span>
            <span>/</span>
            <span className="truncate text-[#2A0812] font-semibold">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-start">
          {/* LEFT: IMAGE GALLERY */}
          <div>
            <div className="grid gap-4 sm:grid-cols-[90px_1fr]">
              {/* Thumbnails Column */}
              <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible scrollbar-none">
                {galleryImages.map((imgUrl, index) => (
                  <button
                    key={`${imgUrl}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative h-24 min-w-[72px] overflow-hidden rounded-md border transition-all duration-300 ${
                      selectedImage === imgUrl
                        ? "border-[#D4AF37] ring-2 ring-[#D4AF37]/50 shadow-md scale-105"
                        : "border-[#E6DED6] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      sizes="90px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image Stage */}
              <div className="group relative order-1 overflow-hidden rounded-xl border border-[#E6DED6] bg-[#F0E7DB] sm:order-2 shadow-lg">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Badge Overlay */}
                {product.badge && (
                  <span className="absolute left-4 top-4 bg-[#2A0812] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3E5AB] shadow-md rounded-sm">
                    {product.badge}
                  </span>
                )}

                {/* Wishlist Button Overlay */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-all duration-300 ${
                    inWishlist
                      ? "bg-[#B91C1C] text-white scale-110"
                      : "bg-white/90 text-[#2A0812] hover:bg-[#2A0812] hover:text-[#F3E5AB]"
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart size={19} className={inWishlist ? "fill-current" : ""} />
                </button>

                {/* Navigation Controls */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2A0812] shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-[#2A0812] hover:text-[#F3E5AB]"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#2A0812] shadow-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-[#2A0812] hover:text-[#F3E5AB]"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                {galleryImages.length > 1 && (
                  <div className="absolute bottom-4 right-4 rounded-full bg-[#2A0812]/80 px-3 py-1 text-xs text-[#F3E5AB] backdrop-blur-xs">
                    {currentIndex + 1} / {galleryImages.length}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO & BUY ACTION */}
          <div className="flex flex-col justify-start">
            {/* Category Tag */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8B5E3C]">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#D4AF37]">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>
                <span className="font-semibold text-[#2A0812]">
                  {product.rating || 4.9}
                </span>
                <span className="text-[#7D6E65]">
                  ({product.reviews || 36} reviews)
                </span>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#2A0812] leading-tight">
              {product.name}
            </h1>

            {/* Price & Discount Bar */}
            <div className="mt-5 flex flex-wrap items-baseline gap-4 border-b border-[#E6DED6] pb-6">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#2A0812]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.oldPrice && (
                <>
                  <span className="text-lg text-[#9A8B82] line-through">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="rounded-full bg-[#B91C1C]/10 px-3 py-1 text-xs font-bold text-[#B91C1C]">
                    SAVE {discountPercent}%
                  </span>
                </>
              )}
              <span className="w-full text-xs text-[#7D6E65] mt-1">
                Inclusive of all taxes & free shipping in India.
              </span>
            </div>

            {/* Quick Description */}
            <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#5A4B43]">
              {product.description}
            </p>

            {/* Product Attributes Grid */}
            <div className="mt-6 grid grid-cols-2 gap-4 rounded-lg border border-[#E6DED6] bg-white p-4 text-xs sm:text-sm shadow-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A8B82]">
                  Fabric
                </span>
                <p className="mt-0.5 font-semibold text-[#2A0812]">
                  {product.fabric}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A8B82]">
                  Craft / Work
                </span>
                <p className="mt-0.5 font-semibold text-[#2A0812]">
                  {product.work}
                </p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A8B82]">
                  Color
                </span>
                <div className="mt-0.5 flex items-center gap-2 font-semibold text-[#2A0812]">
                  {product.colorCode && (
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-black/20"
                      style={{ backgroundColor: product.colorCode }}
                    />
                  )}
                  <span>{product.color}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A8B82]">
                  Occasion
                </span>
                <p className="mt-0.5 font-semibold text-[#2A0812]">
                  {product.occasion}
                </p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#2A0812]">
                  Select Size
                </span>
                <button
                  type="button"
                  onClick={() => setIsFitModalOpen(true)}
                  className="flex items-center gap-1 text-xs font-semibold text-[#8B5E3C] underline hover:text-[#2A0812]"
                >
                  <Ruler size={14} />
                  Bespoke Fit Calculator
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-12 min-w-14 items-center justify-center rounded-md border px-5 text-sm font-semibold transition-all duration-200 ${
                      selectedSize === size
                        ? "border-[#2A0812] bg-[#2A0812] text-[#F3E5AB] shadow-md"
                        : "border-[#E6DED6] bg-white text-[#2A0812] hover:border-[#D4AF37]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2A0812] block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-4">
                <div className="flex h-12 items-center rounded-md border border-[#E6DED6] bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-full w-12 items-center justify-center text-[#2A0812] hover:bg-[#F0E7DB] transition rounded-l-md"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center text-base font-bold text-[#2A0812]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((q) =>
                        Math.min(product.stock || 10, q + 1)
                      )
                    }
                    className="flex h-full w-12 items-center justify-center text-[#2A0812] hover:bg-[#F0E7DB] transition rounded-r-md"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Stock Indicator */}
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-2 rounded-md border border-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>
                    {(product.stock || 5) <= 5
                      ? `Only ${product.stock || 5} pieces left!`
                      : "In Stock & Ready to Ship"}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons: Add to Cart & Buy Now */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => addToCart(product, selectedSize, quantity)}
                className="flex h-14 items-center justify-center gap-3 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-xs font-bold uppercase tracking-[0.18em] text-[#2A0812] shadow-md transition-all duration-300 hover:brightness-110 hover:shadow-lg active:scale-95 shine-metallic"
              >
                <ShoppingBag size={18} />
                Add to Cart
              </button>

              <button
                type="button"
                onClick={() => {
                  addToCart(product, selectedSize, quantity);
                }}
                className="flex h-14 items-center justify-center gap-3 rounded-md bg-[#2A0812] text-xs font-bold uppercase tracking-[0.18em] text-[#F3E5AB] shadow-md transition-all duration-300 hover:bg-[#4A1525] hover:shadow-lg active:scale-95"
              >
                Buy It Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 divide-y divide-[#E6DED6] border-t border-b border-[#E6DED6]">
              <div className="flex items-start gap-4 py-4">
                <Truck size={22} className="mt-0.5 shrink-0 text-[#8B5E3C]" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A0812]">
                    Complimentary Express Shipping
                  </h4>
                  <p className="mt-0.5 text-xs text-[#7D6E65]">
                    Dispatched within 24-48 hours with insured premium packaging.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4">
                <ShieldCheck size={22} className="mt-0.5 shrink-0 text-[#8B5E3C]" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A0812]">
                    100% Handcrafted Authenticity
                  </h4>
                  <p className="mt-0.5 text-xs text-[#7D6E65]">
                    Certified authentic heritage weave with gold/silver purity assurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-4">
                <RotateCcw size={22} className="mt-0.5 shrink-0 text-[#8B5E3C]" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A0812]">
                    Easy 7-Day Exchange & Returns
                  </h4>
                  <p className="mt-0.5 text-xs text-[#7D6E65]">
                    Stress-free return & exchange policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INFORMATION TABS */}
        <div className="mt-16 rounded-xl border border-[#E6DED6] bg-white p-6 sm:p-10 shadow-sm">
          <div className="flex border-b border-[#E6DED6] gap-8">
            <button
              onClick={() => setActiveTab("desc")}
              className={`pb-4 text-sm font-bold uppercase tracking-wider transition border-b-2 ${
                activeTab === "desc"
                  ? "border-[#8B5E3C] text-[#2A0812]"
                  : "border-transparent text-[#9A8B82] hover:text-[#2A0812]"
              }`}
            >
              Detailed Description
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`pb-4 text-sm font-bold uppercase tracking-wider transition border-b-2 ${
                activeTab === "specs"
                  ? "border-[#8B5E3C] text-[#2A0812]"
                  : "border-transparent text-[#9A8B82] hover:text-[#2A0812]"
              }`}
            >
              Craftsmanship & Care
            </button>
            <button
              onClick={() => setActiveTab("shipping")}
              className={`pb-4 text-sm font-bold uppercase tracking-wider transition border-b-2 ${
                activeTab === "shipping"
                  ? "border-[#8B5E3C] text-[#2A0812]"
                  : "border-transparent text-[#9A8B82] hover:text-[#2A0812]"
              }`}
            >
              Delivery & Policy
            </button>
          </div>

          <div className="mt-6 text-sm text-[#5A4B43] leading-relaxed">
            {activeTab === "desc" && (
              <div className="space-y-4">
                <p>{product.description}</p>
                <p>
                  Each piece in the AAVIRÁ Couture collection is woven by master artisans utilizing centuries-old techniques. From intricate Kadwa zari borders to regal zardozi threadwork, this outfit represents the height of luxury Indian craftsmanship.
                </p>
              </div>
            )}
            {activeTab === "specs" && (
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-bold text-[#2A0812] uppercase text-xs tracking-wider mb-2">
                    Fabric & Weave
                  </h5>
                  <p>Fabric: {product.fabric}</p>
                  <p>Technique: {product.technique || "Handcrafted Weave"}</p>
                  <p>Embroidery: {product.work}</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#2A0812] uppercase text-xs tracking-wider mb-2">
                    Garment Care Instructions
                  </h5>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Dry clean only to maintain fabric luster.</li>
                    <li>Store in breathable cotton cloth wrap provided.</li>
                    <li>Avoid direct exposure to extreme heat and direct sunlight.</li>
                  </ul>
                </div>
              </div>
            )}
            {activeTab === "shipping" && (
              <div className="space-y-3">
                <p>
                  <strong>Domestic Shipping (India):</strong> Free express delivery across all pin-codes via premium courier services. Estimated delivery time: 3-5 business days.
                </p>
                <p>
                  <strong>International Shipping:</strong> Worldwide express delivery available at checkout.
                </p>
                <p>
                  <strong>Returns:</strong> We accept returns for items in original unused condition with tags within 7 days of delivery.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B5E3C]">
                  Curated Collection
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2A0812] mt-1">
                  You May Also Like
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold uppercase tracking-wider text-[#8B5E3C] hover:text-[#2A0812] underline"
              >
                View All Collection &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}