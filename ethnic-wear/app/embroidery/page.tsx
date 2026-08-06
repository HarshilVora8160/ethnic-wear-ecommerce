import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { embroideryServices } from "@/lib/embroidery";

export default function EmbroideryPage() {
  return (
    <CategoryPageLayout
      title="Bespoke Hand Embroidery Atelier"
      subtitle="Craftsmanship Services"
      description="Custom hand embroidery services done by master zardozi, dabka, and chikankari artisans."
      bannerImage="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1600&q=80"
      products={embroideryServices}
    />
  );
}