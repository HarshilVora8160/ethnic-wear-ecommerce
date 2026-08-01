import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { lehengas } from "@/lib/lehengas";

export default function LehengasPage() {
  return (
    <CategoryPageLayout
      title="Bridal & Designer Lehengas"
      subtitle="Bespoke Bridal Atelier"
      description="Royal velvet zardozi bridal lehengas, rose gold mirrorwork sangeet sets, and modern pastel flared silhouettes."
      bannerImage="/images/categories/lehenga.jpg"
      products={lehengas}
    />
  );
}