import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { menProducts } from "@/lib/men";

export default function MenPage() {
  return (
    <CategoryPageLayout
      title="Royal Groom Sherwanis & Kurtas"
      subtitle="Discerning Menswear Couture"
      description="Hand-embroidered raw silk sherwanis and zardozi velvet kurta sets designed for the modern royal groom."
      bannerImage="https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=1600&q=80"
      products={menProducts}
    />
  );
}