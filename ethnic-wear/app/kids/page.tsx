import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { kidsProducts } from "@/lib/kids";

export default function KidsPage() {
  return (
    <CategoryPageLayout
      title="Miniature Heritage Collection"
      subtitle="Little Royalty"
      description="Handcrafted silk brocade lehengas and festive ethnic wear designed with soft comfort for young ones."
      bannerImage="/images/categories/lehenga.jpg"
      products={kidsProducts}
    />
  );
}