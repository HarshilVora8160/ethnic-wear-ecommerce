"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

import type { Product } from "@/lib/products";

interface MenDetailsProps {
  product: Product;
}

export default function MenDetails({ product }: MenDetailsProps) {
  const gallery = product.images?.length
    ? product.images
    : [product.image];

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] ?? ""
  );
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(
    "description"
  );

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(current + 1, 10));
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(current - 1, 1));
  };

  const toggleSection = (section: string) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#171717]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-5 pt-6 md:px-8">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-gray-400">
          <span>Home</span>
          <span>/</span>
          <span>Men</span>
          <span>/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="mx-auto max-w-[1440px] px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)] xl:gap-16">
          {/* ================= IMAGE AREA ================= */}
          <div className="grid gap-4 md:grid-cols-[88px_minmax(0,1fr)]">
            {/* Thumbnails */}
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                  className={`relative h-24 w-20 shrink-0 overflow-hidden border transition ${
                    activeImage === index
                      ? "border-black"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ebe9e3]">
                <Image
                  src={gallery[activeImage]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 65vw"
                  className="object-cover transition duration-500"
                />

                {product.badge && (
                  <span className="absolute left-5 top-5 bg-black px-4 py-2 text-[9px] uppercase tracking-[0.22em] text-white">
                    {product.badge}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => setWishlist(!wishlist)}
                  aria-label={
                    wishlist
                      ? "Remove from wishlist"
                      : "Add to wishlist"
                  }
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
                >
                  <Heart
                    size={18}
                    strokeWidth={1.7}
                    className={
                      wishlist
                        ? "fill-black text-black"
                        : "text-black"
                    }
                  />
                </button>
              </div>
            </div>
          </div>

          {/* ================= DETAILS AREA ================= */}
          <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
            {/* Category */}
            <p className="text-[10px] uppercase tracking-[0.28em] text-gray-500">
              AAVIRÁ MEN / {product.category}
            </p>

            {/* Name */}
            <h1 className="mt-4 text-3xl font-medium tracking-[-0.02em] md:text-4xl">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xl font-medium">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && (
                <>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>

                  <span className="text-[10px] uppercase tracking-widest text-gray-500">
                    {Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                        100
                    )}
                    % Off
                  </span>
                </>
              )}
            </div>

            <div className="my-7 h-px bg-gray-200" />

            {/* Short information */}
            <div className="grid grid-cols-2 gap-y-4 text-xs">
              {product.fabric && (
                <div>
                  <p className="uppercase tracking-widest text-gray-400">
                    Fabric
                  </p>
                  <p className="mt-1 font-medium">{product.fabric}</p>
                </div>
              )}

              {product.color && (
                <div>
                  <p className="uppercase tracking-widest text-gray-400">
                    Color
                  </p>
                  <p className="mt-1 font-medium">{product.color}</p>
                </div>
              )}

              {product.occasion && (
                <div>
                  <p className="uppercase tracking-widest text-gray-400">
                    Occasion
                  </p>
                  <p className="mt-1 font-medium">
                    {product.occasion}
                  </p>
                </div>
              )}

              <div>
                <p className="uppercase tracking-widest text-gray-400">
                  Availability
                </p>
                <p className="mt-1 font-medium text-green-700">
                  In Stock
                </p>
              </div>
            </div>

            {/* Size */}
            <div className="mt-9">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.16em]">
                  Select Size
                </p>

                <button
                  type="button"
                  className="text-[10px] uppercase tracking-widest underline underline-offset-4"
                >
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {(product.sizes ?? [
                  "S",
                  "M",
                  "L",
                  "XL",
                  "XXL",
                ]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`h-12 border text-xs transition ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-transparent hover:border-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mt-7 flex gap-3">
              <div className="flex h-14 items-center border border-gray-300">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-full w-12 items-center justify-center hover:bg-gray-100"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>

                <span className="w-8 text-center text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-full w-12 items-center justify-center hover:bg-gray-100"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                type="button"
                className="flex h-14 flex-1 items-center justify-center gap-3 bg-black text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#292929]"
              >
                <ShoppingBag size={17} strokeWidth={1.7} />
                Add to Bag
              </button>
            </div>

            {/* Buy Now */}
            <button
              type="button"
              className="mt-3 h-14 w-full border border-black text-xs uppercase tracking-[0.18em] transition hover:bg-black hover:text-white"
            >
              Buy It Now
            </button>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-3 border-y border-gray-200 py-5">
              <div className="flex flex-col items-center gap-2 text-center">
                <Truck size={18} strokeWidth={1.4} />
                <span className="text-[9px] uppercase tracking-wider">
                  Fast Delivery
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 border-x border-gray-200 text-center">
                <RotateCcw size={18} strokeWidth={1.4} />
                <span className="text-[9px] uppercase tracking-wider">
                  Easy Returns
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <ShieldCheck size={18} strokeWidth={1.4} />
                <span className="text-[9px] uppercase tracking-wider">
                  Secure Pay
                </span>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion
                title="Description"
                open={openSection === "description"}
                onClick={() => toggleSection("description")}
              >
                {product.description ??
                  "A sophisticated AAVIRÁ menswear piece designed with premium craftsmanship, refined details and timeless Indian character."}
              </Accordion>

              <Accordion
                title="Fabric & Care"
                open={openSection === "care"}
                onClick={() => toggleSection("care")}
              >
                <p>
                  Fabric: {product.fabric ?? "Premium blend"}
                </p>
                <p className="mt-2">
                  Dry clean recommended. Store in a cool and dry place.
                </p>
              </Accordion>

              <Accordion
                title="Shipping & Returns"
                open={openSection === "shipping"}
                onClick={() => toggleSection("shipping")}
              >
                <p>
                  Free shipping on eligible orders. Easy returns are
                  available according to our return policy.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Accordion({
  title,
  open,
  onClick,
  children,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-medium uppercase tracking-[0.16em]">
          {title}
        </span>

        <ChevronDown
          size={17}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] pb-5 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-sm leading-7 text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
}