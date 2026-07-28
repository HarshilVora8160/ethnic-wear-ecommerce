import SectionHeading from "@/components/ui/SectionHeading";

const reasons = [
  {
    number: "01",
    title: "Fine Craftsmanship",
    description:
      "Every piece is thoughtfully crafted with attention to detail and traditional Indian artistry.",
  },
  {
    number: "02",
    title: "Premium Fabrics",
    description:
      "We carefully select fabrics that feel luxurious, comfortable and beautiful to wear.",
  },
  {
    number: "03",
    title: "Made for You",
    description:
      "Discover personalized designs, custom sarees and embroidery created around your style.",
  },
];

export default function WhyAavira() {
  return (
    <section className="border-y border-brand-border bg-brand-ivory px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The AAVIRÁ Difference"
          title="Made to Be Remembered"
          description="Every detail matters when it comes to something you will treasure."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {reasons.map((reason) => (
            <article
              key={reason.number}
              className="border-t border-brand-gold pt-6"
            >
              <span className="font-serif text-4xl text-brand-gold">
                {reason.number}
              </span>

              <h3 className="mt-5 font-serif text-2xl text-brand-primary">
                {reason.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-brand-text-secondary">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}