import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/products/ProductCard";

const products = [
  {
    name: "Royal Banarasi Silk Saree",
    category: "Banarasi Collection",
    price: "₹8,999",
    image: "/images/products/banarasi-saree.jpg",
    href: "/sarees/royal-banarasi-silk-saree",
    badge: "New",
  },
  {
    name: "Embroidered Bridal Lehenga",
    category: "Bridal Collection",
    price: "₹18,999",
    image: "/images/products/bridal-lehenga.jpg",
    href: "/lehengas/embroidered-bridal-lehenga",
    badge: "Bestseller",
  },
  {
    name: "Handcrafted Designer Saree",
    category: "Designer Collection",
    price: "₹12,499",
    image: "/images/products/designer-saree.jpg",
    href: "/sarees/handcrafted-designer-saree",
    badge: "New",
  },
  {
    name: "Premium Embroidered Kurti",
    category: "Festive Collection",
    price: "₹4,999",
    image: "/images/products/embroidered-kurti.jpg",
    href: "/kurtis/premium-embroidered-kurti",
    badge: "New",
  },
];

export default function NewArrivals() {
  return (
    <section className="bg-brand-cream px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Just Arrived"
          title="New Arrivals"
          description="Fresh expressions of Indian artistry, designed for the modern wardrobe."
        />

        <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/new-arrivals"
            className="inline-flex border border-brand-gold-dark px-9 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-primary transition duration-300 hover:bg-brand-gold"
          >
            Explore New Arrivals
          </Link>
        </div>
      </div>
    </section>
  );
}