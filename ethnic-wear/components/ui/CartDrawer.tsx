"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUI } from "@/lib/context/UIContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
    showToast,
  } = useUI();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 2999;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "ROYAL10" || promoCode.toUpperCase() === "AAVIRA10") {
      setDiscount(0.1);
      showToast("10% Royal Discount Applied!");
    } else {
      showToast("Invalid Promo Code (Try: ROYAL10)");
    }
  };

  const finalTotal = Math.round(cartTotal * (1 - discount));

  return (
    <div className="fixed inset-0 z-[90] flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Content */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#FAF6F0] shadow-2xl transition-transform duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#E6DED6] bg-[#2A0812] px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <h2 className="font-serif text-xl tracking-wider text-[#F3E5AB]">Your Shopping Bag</h2>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#2A0812]">
              {cartCount}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-[#F3E5AB] transition hover:text-white"
            aria-label="Close cart drawer"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Free Shipping Bar */}
        <div className="bg-[#FAF6F0] px-6 py-3 border-b border-[#E6DED6]">
          {remainingForFreeShipping > 0 ? (
            <p className="text-xs text-[#786C68]">
              Add <span className="font-semibold text-[#2A0812]">₹{remainingForFreeShipping.toLocaleString("en-IN")}</span> more for Complimentary Express Shipping!
            </p>
          ) : (
            <p className="text-xs font-medium text-emerald-700 flex items-center gap-1.5">
              <span>✨</span> You have unlocked Complimentary Express Shipping!
            </p>
          )}
          <div className="mt-2 h-1.5 w-full rounded-full bg-[#E6DED6] overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E6DED6]/50 text-2xl text-[#9A7653]">
                🛍️
              </div>
              <h3 className="mt-4 font-serif text-lg text-[#2A0812]">Your Bag is Currently Empty</h3>
              <p className="mt-1 text-xs text-[#786C68]">Explore our timeless heritage collection and handcrafted pieces.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-5 rounded-none bg-[#2A0812] px-6 py-2.5 text-xs uppercase tracking-widest text-[#F3E5AB] transition hover:bg-[#4A1525]"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4 border border-[#E6DED6] bg-white p-3 rounded-none shadow-xs transition hover:border-[#D4AF37]"
              >
                <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#F0E7DB]">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-serif text-sm font-medium text-[#2A0812] line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-xs text-[#786C68] hover:text-[#B91C1C]"
                        aria-label="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-[11px] text-[#9A7653] font-medium mt-0.5">
                      Size: {item.size} | {item.product.category}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#E6DED6] rounded-none">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-[#2A0812] hover:bg-[#FAF6F0]"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-semibold text-[#2A0812]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#2A0812] hover:bg-[#FAF6F0]"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs font-semibold text-[#2A0812]">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="border-t border-[#E6DED6] bg-white p-6 space-y-4 shadow-lg">
            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                placeholder="Promo code (ROYAL10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 border border-[#E6DED6] px-3 py-2 text-xs uppercase placeholder:normal-case focus:border-[#D4AF37] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#2A0812] px-4 py-2 text-xs font-medium text-[#F3E5AB] uppercase tracking-wider hover:bg-[#4A1525]"
              >
                Apply
              </button>
            </form>

            <div className="space-y-1.5 text-xs text-[#786C68]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-[#2A0812]">₹{cartTotal.toLocaleString("en-IN")}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Royal Discount (10%)</span>
                  <span>-₹{Math.round(cartTotal * discount).toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-medium text-[#2A0812]">
                  {remainingForFreeShipping === 0 ? "FREE" : "₹199"}
                </span>
              </div>
              <div className="flex justify-between border-t border-[#E6DED6] pt-2 text-sm font-semibold text-[#2A0812]">
                <span className="font-serif text-base">Total</span>
                <span className="font-serif text-base text-[#2A0812]">
                  ₹{(finalTotal + (remainingForFreeShipping === 0 ? 0 : 199)).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Link
              href="/cart"
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] py-3.5 text-xs font-bold uppercase tracking-widest text-[#2A0812] shadow-md transition hover:brightness-105"
            >
              Checkout Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
