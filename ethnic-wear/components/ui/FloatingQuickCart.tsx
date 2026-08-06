"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, ArrowUp } from "lucide-react";
import { useUI } from "@/lib/context/UIContext";

export default function FloatingQuickCart() {
  const { cartCount, cartTotal, setIsCartOpen } = useUI();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || cartCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5">
      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        className="flex items-center gap-3 rounded-full border border-[#D4AF37]/50 bg-[#120C0E]/90 px-5 py-3 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#2A0812] gold-glow"
      >
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-[#120C0E] shadow-sm font-bold text-xs">
          <ShoppingBag size={16} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#B91C1C] text-[10px] font-bold text-white shadow-xs">
            {cartCount}
          </span>
        </div>

        <div className="text-left text-xs">
          <span className="block text-[9px] uppercase tracking-widest text-[#F3E5AB]">
            View Royal Bag
          </span>
          <span className="font-bold text-white">
            ₹{cartTotal.toLocaleString("en-IN")}
          </span>
        </div>
      </button>
    </div>
  );
}
