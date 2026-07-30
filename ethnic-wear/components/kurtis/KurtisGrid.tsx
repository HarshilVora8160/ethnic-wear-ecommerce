import KurtiCard from "./KurtiCard";
import type { Kurti } from "@/lib/kurtis";

interface KurtisGridProps {
  kurtis: Kurti[];
}

export default function KurtisGrid({
  kurtis,
}: KurtisGridProps) {
  if (kurtis.length === 0) {
    return (
      <div className="flex min-h-[350px] items-center justify-center">
        <div className="text-center">
          <h3 className="font-serif text-2xl text-[#2c1913]">
            No Kurtis Found
          </h3>
          <p className="mt-2 text-sm text-[#796a61]">
            We couldnt find any kurtis.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
      {kurtis.map((kurti) => (
        <KurtiCard
          key={kurti.id}
          kurti={kurti}
        />
      ))}
    </div>
  );
}