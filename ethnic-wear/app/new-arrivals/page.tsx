import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { products } from "@/lib/products";

export default function NewArrivalsPage() {
  const newItems = products.filter((p) => p.newArrival !== false);

  return (
    <CategoryPageLayout
      title="The New Heritage Drop 2026"
      subtitle="Just Arrived Couture"
      description="Discover our newest collection of Banarasi silk drapes, zardozi bridal lehengas, and festive menswear."
      bannerImage="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80"
      products={newItems}
    />
  );
}