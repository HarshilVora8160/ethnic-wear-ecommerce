import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { sarees } from "@/lib/sarees";

export default function SareesPage() {
  return (
    <CategoryPageLayout
      title="Banarasi & Heritage Sarees"
      subtitle="AAVIRÁ Saree Atelier"
      description="Handwoven Banarasi silk drapes, sheer organza weaves, and Kanjeevaram heritage sarees crafted by master Indian weavers."
      bannerImage="/images/categories/saree.jpg"
      products={sarees}
    />
  );
}