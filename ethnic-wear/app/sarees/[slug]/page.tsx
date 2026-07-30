import { notFound } from "next/navigation";

import SareeDetails from "@/components/sarees/SareeDetails";
import { sarees } from "@/lib/sarees";

interface SareePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SareePage({
  params,
}: SareePageProps) {
  const { slug } = await params;

  const saree = sarees.find(
    (item) => item.slug === slug
  );

  if (!saree) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#fbf8f3]">
      <SareeDetails saree={saree} />
    </main>
  );
}