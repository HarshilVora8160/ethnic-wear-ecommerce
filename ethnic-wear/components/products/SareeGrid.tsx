import SareeCard from "./SareeCard";
import type { Saree } from "./SareeCard";

interface SareeGridProps {
  sarees: Saree[];
}

export default function SareeGrid({ sarees }: SareeGridProps) {
  if (!sarees || sarees.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-[#2c1913]">
            No Sarees Found
          </h3>

          <p className="mt-2 text-sm text-[#796a61]">
            We couldn't find any sarees in this collection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-x-4
        gap-y-10
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4
      "
    >
      {sarees.map((saree) => (
        <SareeCard
          key={saree.id}
          saree={saree}
        />
      ))}
    </div>
  );
}