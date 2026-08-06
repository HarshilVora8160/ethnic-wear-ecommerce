import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { products } from "@/lib/products";

export default function SalePage() {
  const saleProducts = products.map((p) => ({
    ...p,
    oldPrice: p.oldPrice || Math.round(p.price * 1.25),
    badge: p.badge || "Special Offer",
  }));

  return (
    <CategoryPageLayout
      title="Royal Archive & Festive Sale"
      subtitle="Exclusive Limited Discounts"
      description="Enjoy up to 25% off select handcrafted Banarasi sarees, festive kurtis, and bespoke bridal wear."
      bannerImage="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80"
      products={saleProducts}
    />
  );
}