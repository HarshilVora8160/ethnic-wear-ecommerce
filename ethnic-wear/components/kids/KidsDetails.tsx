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
  Sparkles,
} from "lucide-react";

import type { Product } from "@/lib/products";

interface KidsDetailsProps {
  product: Product;
}

export default function KidsDetails({
  product,
}: KidsDetailsProps) {
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
    "details"
  );

  const increaseQuantity = () => {
    setQuantity((value) => Math.min(value + 1, 10));
  };

  const decreaseQuantity = () => {
    setQuantity((value) => Math.max(value - 1, 1));
  };

  const toggleSection = (section: string) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#382b24]">
      {/* Top Label */}
      <section className="mx-auto max-w-7xl px-5 pt-7 md:px-8">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#a28f80]">
          <span>Home</span>
          <span>/</span>
          <span>Kids</span>
          <span>/</span>
          <span className="text-[#382b24]">{product.name}</span>
        </div>
      </section>

      {/* Main Product */}
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-20">
          {/* ================= GALLERY ================= */}
          <div>
            <div className="relative overflow-hidden rounded-[32px] bg-[#f4e8d9]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={gallery[activeImage]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition duration-500"
                />

                {/* New badge */}
                {product.badge && (
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] uppercase tracking-widest shadow-sm">
                    <Sparkles size={12} />
                    {product.badge}
                  </div>
                )}

                {/* Wishlist */}
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
                        ? "fill-[#382b24] text-[#382b24]"
                        : ""
                    }
                  />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            {gallery.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {gallery.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`relative h-24 w-20 shrink-0 overflow-hidden rounded-2xl border-2 transition ${
                      activeImage === index
                        ? "border-[#382b24]"
                        : "border-transparent opacity-60"
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
            )}
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col lg:pt-6">
            {/* Collection */}
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#f0e1d0] px-4 py-2 text-[10px] uppercase tracking-[0.18em]">
                Little AAVIRÁ
              </span>

              {product.occasion && (
                <span className="rounded-full border border-[#dfd0c0] px-4 py-2 text-[10px] uppercase tracking-[0.18em]">
                  {product.occasion}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-6 font-serif text-4xl leading-tight text-[#382b24] md:text-5xl">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-2xl font-medium">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice && (
                <>
                  <span className="text-sm text-[#aa9b8e] line-through">
                    ₹{product.oldPrice.toLocaleString("en-IN")}
                  </span>

                  <span className="rounded-full bg-[#eee1d2] px-3 py-1 text-[10px] font-medium">
                    Save{" "}
                    {Math.round(
                      ((product.oldPrice - product.price) /
                        product.oldPrice) *
                        100
                    )}
                    %
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#77695e]">
              {product.description ??
                "A charming ethnic look created especially for little celebrations, festive gatherings and beautiful family moments."}
            </p>

            {/* Product info */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              {product.fabric && (
                <InfoBox label="Fabric" value={product.fabric} />
              )}

              {product.color && (
                <InfoBox label="Color" value={product.color} />
              )}

              {product.occasion && (
                <InfoBox
                  label="Perfect For"
                  value={product.occasion}
                />
              )}

              <InfoBox label="Delivery" value="Available" />
            </div>

            {/* Size */}
            <div className="mt-9">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                  Choose Size
                </p>

                <button
                  type="button"
                  className="text-[10px] uppercase tracking-widest underline underline-offset-4"
                >
                  Kids Size Guide
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {(product.sizes ?? [
                  "2-3Y",
                  "4-5Y",
                  "6-7Y",
                  "8-9Y",
                  "10-11Y",
                ]).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full px-5 py-3 text-xs transition ${
                      selectedSize === size
                        ? "bg-[#382b24] text-white"
                        : "border border-[#ddcec0] bg-white hover:border-[#382b24]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity / Cart */}
            <div className="mt-7 flex gap-3">
              <div className="flex h-14 items-center rounded-full border border-[#ddcec0] bg-white">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex h-full w-12 items-center justify-center"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>

                <span className="w-6 text-center text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex h-full w-12 items-center justify-center"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                type="button"
                className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-[#382b24] text-xs uppercase tracking-[0.17em] text-white transition hover:bg-[#4a3930]"
              >
                <ShoppingBag size={17} />
                Add to Bag
              </button>
            </div>

            {/* Buy */}
            <button
              type="button"
              className="mt-3 h-14 rounded-full border border-[#382b24] text-xs uppercase tracking-[0.17em] transition hover:bg-[#382b24] hover:text-white"
            >
              Buy It Now
            </button>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Benefit
                icon={<Truck size={17} />}
                title="Quick Delivery"
              />

              <Benefit
                icon={<RotateCcw size={17} />}
                title="Easy Returns"
              />

              <Benefit
                icon={<Sparkles size={17} />}
                title="Made With Care"
              />
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <KidsAccordion
                title="Product Details"
                open={openSection === "details"}
                onClick={() => toggleSection("details")}
              >
                <p>
                  {product.description ??
                    "Designed with comfort and festive charm in mind. A beautiful choice for celebrations and family occasions."}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {product.fabric && (
                    <p>
                      <strong>Fabric:</strong> {product.fabric}
                    </p>
                  )}

                  {product.color && (
                    <p>
                      <strong>Color:</strong> {product.color}
                    </p>
                  )}
                </div>
              </KidsAccordion>

              <KidsAccordion
                title="Care Instructions"
                open={openSection === "care"}
                onClick={() => toggleSection("care")}
              >
                Gentle dry clean recommended. Keep away from direct
                sunlight and store folded in a clean garment bag.
              </KidsAccordion>

              <KidsAccordion
                title="Delivery & Returns"
                open={openSection === "shipping"}
                onClick={() => toggleSection("shipping")}
              >
                Enjoy secure packaging and convenient delivery.
                Returns are available according to the stores
                return policy.
              </KidsAccordion>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= INFO BOX ================= */

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white px-4 py-4">
      <p className="text-[9px] uppercase tracking-[0.18em] text-[#a39284]">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-[#382b24]">
        {value}
      </p>
    </div>
  );
}

/* ================= BENEFIT ================= */

function Benefit({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-[#f5eadc] px-4 py-4">
      <div className="text-[#5c493e]">{icon}</div>

      <span className="text-[10px] font-medium uppercase tracking-wider">
        {title}
      </span>
    </div>
  );
}

/* ================= ACCORDION ================= */

function KidsAccordion({
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
    <div className="border-b border-[#e3d7c9]">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.15em]">
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
        <div className="overflow-hidden text-sm leading-7 text-[#77695e]">
          {children}
        </div>
      </div>
    </div>
  );
}