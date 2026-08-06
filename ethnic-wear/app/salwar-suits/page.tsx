import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { salwarSuits } from "@/lib/salwar-suits";

export default function SalwarSuitsPage() {
  return (
    <CategoryPageLayout
      title="Lucknowi Shararas & Salwar Suits"
      subtitle="Refined Festive Ensembles"
      description="Multi-layered flared shararas, chikankari embroidery, and sequin detailed ethnic suits."
      bannerImage="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1600&q=80"
      products={salwarSuits}
    />
  );
}