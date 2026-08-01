"use client";

import React from "react";
import { useUI } from "@/lib/context/UIContext";

export default function Toast() {
  const { toast } = useUI();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-bounce">
      <div className="flex items-center gap-3 rounded-full bg-[#120C0E] px-5 py-3 text-sm text-[#F3E5AB] shadow-2xl border border-[#D4AF37]/40 backdrop-blur-md">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#120C0E]">
          ✓
        </span>
        <span className="font-medium tracking-wide">{toast}</span>
      </div>
    </div>
  );
}
