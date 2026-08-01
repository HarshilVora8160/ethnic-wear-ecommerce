import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { kurtis } from "@/lib/kurtis";

export default function KurtisPage() {
  return (
    <CategoryPageLayout
      title="Festive Anarkalis & Kurtis"
      subtitle="Contemporary Ethnic Wear"
      description="Chanderi silk Anarkali suits, embroidered velvet straight sets, and handcrafted festive tunics."
      bannerImage="/images/categories/kurti.jpg"
      products={kurtis}
    />
  );
}