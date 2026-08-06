import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { kidsProducts } from "@/lib/kids";

export default function KidsPage() {
  return (
    <CategoryPageLayout
      title="Royal Miniature Kids Couture"
      subtitle="Festive Wear For Little Princesses & Princes"
      description="Soft silk brocade lehengas and miniature ethnic ensembles crafted with gentle lining and easy fits."
      bannerImage="https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=1600&q=80"
      products={kidsProducts}
    />
  );
}