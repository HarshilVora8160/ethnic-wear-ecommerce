import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { sarees } from "@/lib/sarees";

export default function SareesPage() {
  return (
    <CategoryPageLayout
      title="Banarasi & Heritage Sarees"
      subtitle="AAVIRÁ Saree Atelier"
      description="Handwoven Banarasi silk drapes, sheer organza weaves, and Kanjeevaram heritage sarees crafted by master Indian weavers."
      bannerImage="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80"
      products={sarees}
    />
  );
}