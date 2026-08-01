import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { menProducts } from "@/lib/men";

export default function MenPage() {
  return (
    <CategoryPageLayout
      title="Royal Groom & Menswear"
      subtitle="The Regal Groom Atelier"
      description="Imperial raw silk sherwanis, embroidered bandhgalas, and silk velvet kurtas for grooms and groomsmen."
      bannerImage="/images/home/custom-design.jpg"
      products={menProducts}
    />
  );
}