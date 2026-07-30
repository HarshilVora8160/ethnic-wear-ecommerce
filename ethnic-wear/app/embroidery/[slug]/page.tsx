import { notFound } from "next/navigation";

import EmbroideryDetails from "@/components/embroidery/EmbroideryDetails";

import {
  embroideryDesigns,
  getEmbroideryBySlug,
} from "@/lib/embroidery";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return embroideryDesigns.map((item) => ({
    slug: item.slug,
  }));
}

export default async function EmbroiderySlugPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const embroidery = getEmbroideryBySlug(slug);

  if (!embroidery) {
    notFound();
  }

  return <EmbroideryDetails embroidery={embroidery} />;
}