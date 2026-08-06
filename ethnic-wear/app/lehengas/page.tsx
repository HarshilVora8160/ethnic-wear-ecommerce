import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { lehengas } from "@/lib/lehengas";

export default function LehengasPage() {
  return (
    <CategoryPageLayout
      title="Bridal & Sangeet Lehengas"
      subtitle="Bespoke Royal Couture"
      description="Imperial velvet zardozi bridal sets and shimmering mirrorwork georgette lehengas handcrafted for grand celebrations."
      bannerImage="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80"
      products={lehengas}
    />
  );
}