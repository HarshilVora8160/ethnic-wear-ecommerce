import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { kurtis } from "@/lib/kurtis";

export default function KurtisPage() {
  return (
    <CategoryPageLayout
      title="Festive Anarkalis & Kurti Sets"
      subtitle="Contemporary Everyday & Festive"
      description="Chanderi silk Anarkalis and velvet straight kurti ensembles embellished with Gota Patti and zari threadwork."
      bannerImage="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1600&q=80"
      products={kurtis}
    />
  );
}