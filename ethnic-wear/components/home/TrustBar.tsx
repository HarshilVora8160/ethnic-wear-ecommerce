const trustItems = [
  {
    title: "Premium Craftsmanship",
    description: "Made with attention to every detail",
  },
  {
    title: "Curated Fabrics",
    description: "Luxury materials selected with care",
  },
  {
    title: "Custom Designs",
    description: "Create a saree made around you",
  },
  {
    title: "Secure Shopping",
    description: "Safe and seamless checkout",
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-brand-border bg-brand-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-brand-border md:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="px-4 py-7 text-center sm:px-6 lg:py-8"
          >
            <h3 className="font-serif text-sm text-brand-primary sm:text-base">
              {item.title}
            </h3>

            <p className="mt-1 text-[10px] leading-5 text-brand-text-secondary sm:text-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}