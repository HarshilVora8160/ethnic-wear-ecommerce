import SalwarSuitCard from "./SalwarSuitCard";
import type { SalwarSuit } from "@/lib/salwar-suits";

interface Props {
  salwarSuits: SalwarSuit[];
}

export default function SalwarSuitsGrid({
  salwarSuits,
}: Props) {
  if (!salwarSuits.length) {
    return (
      <div className="flex min-h-[350px] items-center justify-center">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-[#2c1913]">
            No Salwar Suits Found
          </h3>
          <p className="mt-2 text-sm text-[#796a61]">
            We couldnt find any salwar suits.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {salwarSuits.map((item) => (
        <SalwarSuitCard
          key={item.id}
          salwarSuit={item}
        />
      ))}
    </div>
  );
}