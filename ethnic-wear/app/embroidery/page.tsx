import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { embroideryServices } from "@/lib/embroidery";

export default function EmbroideryPage() {
  return (
    <CategoryPageLayout
      title="Heritage Embroidery Atelier"
      subtitle="The Master Handwork Collection"
      description="Intricate Zardozi, Chikankari, Gota Patti, and pearl embroidery patterns handcrafted by India's finest artisans."
      bannerImage="/images/home/embroidery.jpg"
      products={embroideryServices}
    />
  );
}