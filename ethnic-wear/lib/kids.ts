import { Product, products, getProductBySlug } from "./products";

export type KidsProduct = Product;

export const kidsProducts: Product[] = products.filter(
  (p) => p.category === "Kids"
);

export function getKidsProductBySlug(slug: string): Product | undefined {
  const item = kidsProducts.find((p) => p.slug === slug);
  return item || getProductBySlug(slug);
}