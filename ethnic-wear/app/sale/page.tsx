import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { products } from "@/lib/products";

export default function SalePage() {
  const saleProducts = products.map((p) => ({
    ...p,
    oldPrice: Math.round(p.price * 1.25),
    badge: "20% OFF",
  }));

  return (
    <CategoryPageLayout
      title="Royal Archive & Festive Sale"
      subtitle="Exclusive Limited Discounts"
      description="Enjoy up to 25% off select handcrafted Banarasi sarees, festive kurtis, and bespoke bridal wear."
      bannerImage="/images/products/designer-saree.jpg"
      products={saleProducts}
    />
  );
}