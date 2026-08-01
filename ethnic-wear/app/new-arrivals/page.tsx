import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { products } from "@/lib/products";

export default function NewArrivalsPage() {
  return (
    <CategoryPageLayout
      title="The New Heritage Drop 2026"
      subtitle="Just Arrived Couture"
      description="Discover our newest collection of Banarasi silk drapes, zardozi bridal lehengas, and festive menswear."
      bannerImage="/images/home/hero.jpg"
      products={products}
    />
  );
}