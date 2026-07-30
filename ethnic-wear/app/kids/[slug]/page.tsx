import { notFound } from "next/navigation";

import KidsDetails from "@/components/kids/KidsDetails";
import { kidsProducts } from "@/lib/kids";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return kidsProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;

  const product = kidsProducts.find(
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

export default async function KidsSlugPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = kidsProducts.find(
    (item) => item.slug === slug
  );

  if (!product) notFound();

  return <KidsDetails product={product} />;
}