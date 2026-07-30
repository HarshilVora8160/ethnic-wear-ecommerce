import SareeCard from "./SareeCard";
import type { Saree } from "@/lib/sarees";

interface SareesGridProps {
  sarees: Saree[];
}

export default function SareesGrid({
  sarees,
}: SareesGridProps) {
  if (!sarees.length) {
    return (
      <div className="py-20 text-center">
        <h3 className="font-serif text-2xl text-[#2c1913]">
          No Sarees Found
        </h3>

        <p className="mt-2 text-sm text-[#796a61]">
          There are no sarees available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sarees.map((saree) => (
        <SareeCard
          key={saree.id}
          saree={saree}
        />
      ))}
    </div>
  );
}