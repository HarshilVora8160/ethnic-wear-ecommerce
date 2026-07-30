import { notFound } from "next/navigation";

import MenDetails from "@/components/men/MenDetails";
import { menProducts } from "@/lib/men";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return menProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const product = menProducts.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found | AAVIRÁ",
    };
  }

  return {
    title: `${product.name} | AAVIRÁ`,
    description: product.description,
  };
}

export default async function MenSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = menProducts.find(
    (item) => item.slug === slug
  );

  if (!product) notFound();

  return <MenDetails product={product} />;
}