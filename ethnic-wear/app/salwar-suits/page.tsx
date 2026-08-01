import React from "react";
import CategoryPageLayout from "@/components/ui/CategoryPageLayout";
import { salwarSuits } from "@/lib/salwar-suits";

export default function SalwarSuitsPage() {
  return (
    <CategoryPageLayout
      title="Salwar & Sharara Suits"
      subtitle="Artisanal Suit Ensembles"
      description="Chikankari hand-embroidered sharara suits, straight silk sets, and organza dupatta ensembles."
      bannerImage="/images/categories/salwar.jpg"
      products={salwarSuits}
    />
  );
}