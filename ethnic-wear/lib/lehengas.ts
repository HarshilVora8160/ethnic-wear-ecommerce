import { Product, products, getProductBySlug } from "./products";

export type Lehenga = Product;

export const lehengas: Product[] = products.filter(
  (p) => p.category === "Lehengas"
);

export function getLehengaBySlug(slug: string): Product | undefined {
  const lehenga = lehengas.find((l) => l.slug === slug);
  return lehenga || getProductBySlug(slug);
}