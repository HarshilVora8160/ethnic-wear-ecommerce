import { Product, products, getProductBySlug } from "./products";

export type SalwarSuit = Product;

export const salwarSuits: Product[] = products.filter(
  (p) => p.category === "Salwar Suits"
);

export function getSalwarSuitBySlug(slug: string): Product | undefined {
  const item = salwarSuits.find((p) => p.slug === slug);
  return item || getProductBySlug(slug);
}