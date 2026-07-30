import { notFound } from "next/navigation";

import SalwarSuitDetails from "@/components/salwar-suits/SalwarSuitDetails";
import { salwarSuits } from "@/lib/salwar-suits";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return salwarSuits.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const item = salwarSuits.find(
    (product) => product.slug === slug
  );

  if (!item) {
    return {
      title: "Salwar Suit Not Found | AAVIRÁ",
    };
  }

  return {
    title: `${item.name} | AAVIRÁ`,
    description: item.description,
  };
}

export default async function SalwarSuitSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  const item = salwarSuits.find(
    (product) => product.slug === slug
  );

  if (!item) notFound();

  return <SalwarSuitDetails salwarSuit={item} />;
}