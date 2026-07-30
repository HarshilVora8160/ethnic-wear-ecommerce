import { notFound } from "next/navigation";

import LehengaDetails from "@/components/lehengas/LehengaDetails";
import { lehengas } from "@/lib/lehengas";

interface LehengaSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return lehengas.map((lehenga) => ({
    slug: lehenga.slug,
  }));
}

export async function generateMetadata({
  params,
}: LehengaSlugPageProps) {
  const { slug } = await params;

  const lehenga = lehengas.find(
    (item) => item.slug === slug
  );

  if (!lehenga) {
    return {
      title: "Lehenga Not Found | AAVIRÁ",
    };
  }

  return {
    title: `${lehenga.name} | AAVIRÁ`,
    description: lehenga.description,
  };
}

export default async function LehengaSlugPage({
  params,
}: LehengaSlugPageProps) {
  const { slug } = await params;

  const lehenga = lehengas.find(
    (item) => item.slug === slug
  );

  if (!lehenga) {
    notFound();
  }

  return <LehengaDetails lehenga={lehenga} />;
}