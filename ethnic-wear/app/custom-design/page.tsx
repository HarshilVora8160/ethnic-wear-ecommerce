"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  ImagePlus,
  Palette,
  Ruler,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

const garments = [
  "Saree",
  "Lehenga",
  "Kurti",
  "Salwar Suit",
  "Blouse",
  "Men's Kurta",
];

const fabrics = [
  "Silk",
  "Organza",
  "Georgette",
  "Velvet",
  "Chiffon",
  "Cotton",
  "Raw Silk",
];

const embroideryStyles = [
  "Zari",
  "Aari",
  "Thread Work",
  "Mirror Work",
  "Bead Work",
  "Resham",
  "Minimal",
  "Heavy Bridal",
];

const occasions = [
  "Wedding",
  "Reception",
  "Festive",
  "Party",
  "Engagement",
  "Everyday",
];

const colors = [
  { name: "Ivory", value: "#eee7db" },
  { name: "Wine", value: "#681f2c" },
  { name: "Blush", value: "#d9a7a7" },
  { name: "Emerald", value: "#284f42" },
  { name: "Royal Blue", value: "#263d6b" },
  { name: "Black", value: "#171515" },
  { name: "Gold", value: "#c9a96e" },
  { name: "Custom", value: "linear-gradient(135deg,#ddd,#fff)" },
];

export default function CustomDesignPage() {
  const [step, setStep] = useState(1);

  const [design, setDesign] = useState({
    garment: "Saree",
    fabric: "Silk",
    embroidery: "Zari",
    occasion: "Wedding",
    color: "Ivory",
    budget: "₹5,000 - ₹10,000",
  });

  const [reference, setReference] = useState<File | null>(
    null
  );

  const updateDesign = (
    key: keyof typeof design,
    value: string
  ) => {
    setDesign((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const progress = Math.round((step / 5) * 100);

  const summary = useMemo(
    () =>
      `${design.color} ${design.fabric} ${design.garment} with ${design.embroidery} embroidery`,
    [design]
  );

  return (
    <main className="min-h-screen bg-[#fffaf6] text-[#2c1913]">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden bg-[#2c1913] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b56d]" />
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b56d]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b56d]" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 text-center md:px-8 md:py-28">
          <div className="flex items-center justify-center gap-3">
            <WandSparkles
              size={16}
              className="text-[#d7b56d]"
            />

            <span className="text-[10px] uppercase tracking-[0.35em] text-[#d7b56d]">
              AAVIRÁ Bespoke Studio
            </span>
          </div>

          <h1 className="mx-auto mt-7 max-w-5xl font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Your Vision.
            <span className="block italic text-[#d7b56d]">
              Our Craft.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#d8cbc3] md:text-base">
            Create an outfit that exists nowhere else. Choose
            every detail and let our designers transform your
            idea into a one-of-a-kind creation.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("designer-studio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-9 inline-flex items-center gap-3 bg-[#d7b56d] px-8 py-4 text-xs uppercase tracking-[0.2em] text-[#2c1913]"
          >
            Start Designing
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ================================================= */}
      {/* HOW IT WORKS */}
      {/* ================================================= */}

      <section className="border-b border-[#e5dbd3] bg-white">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
          <Process
            number="01"
            icon={<Palette size={18} />}
            title="Choose"
            text="Select your garment"
          />

          <Process
            number="02"
            icon={<Sparkles size={18} />}
            title="Personalise"
            text="Pick fabrics & details"
          />

          <Process
            number="03"
            icon={<Ruler size={18} />}
            title="Perfect"
            text="Share your measurements"
          />

          <Process
            number="04"
            icon={<WandSparkles size={18} />}
            title="Create"
            text="Our designers craft it"
          />
        </div>
      </section>

      {/* ================================================= */}
      {/* DESIGNER STUDIO */}
      {/* ================================================= */}

      <section
        id="designer-studio"
        className="mx-auto max-w-[1440px] px-5 py-16 md:px-8 lg:py-24"
      >
        <div className="mb-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#a27b4d]">
            Bespoke Designer
          </p>

          <h2 className="mt-3 font-serif text-4xl md:text-6xl">
            Build Your Dream Outfit
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
            Every choice shapes your final design. Dont worry
            about getting it perfect — our designer will refine
            the details with you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="border border-[#dfd4cb] bg-white">
            {/* Progress */}
            <div className="border-b border-[#e5dbd3] p-5 md:p-7">
              <div className="mb-3 flex justify-between text-[9px] uppercase tracking-[0.2em]">
                <span>Design Progress</span>
                <span>{progress}%</span>
              </div>

              <div className="h-1 bg-[#eee5de]">
                <div
                  className="h-full bg-[#2c1913] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <DesignStep
                number="01"
                title="What are we creating?"
                subtitle="Start with the silhouette"
              >
                <OptionGrid
                  options={garments}
                  value={design.garment}
                  onChange={(value) =>
                    updateDesign("garment", value)
                  }
                />
              </DesignStep>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <DesignStep
                number="02"
                title="Choose your fabric"
                subtitle="The foundation of your design"
              >
                <OptionGrid
                  options={fabrics}
                  value={design.fabric}
                  onChange={(value) =>
                    updateDesign("fabric", value)
                  }
                />
              </DesignStep>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <DesignStep
                number="03"
                title="Make it yours"
                subtitle="Choose embroidery & colour"
              >
                <div>
                  <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    Embroidery Style
                  </p>

                  <OptionGrid
                    options={embroideryStyles}
                    value={design.embroidery}
                    onChange={(value) =>
                      updateDesign("embroidery", value)
                    }
                  />
                </div>

                <div className="mt-9">
                  <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    Base Colour
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() =>
                          updateDesign(
                            "color",
                            color.name
                          )
                        }
                        className="group text-center"
                      >
                        <span
                          className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 ${
                            design.color === color.name
                              ? "border-[#2c1913] p-1"
                              : "border-transparent"
                          }`}
                        >
                          <span
                            className="h-full w-full rounded-full border border-black/5"
                            style={{
                              background:
                                color.value,
                            }}
                          />
                        </span>

                        <span className="mt-2 block text-[8px] text-gray-500">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </DesignStep>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <DesignStep
                number="04"
                title="Tell us the occasion"
                subtitle="We'll refine the design around it"
              >
                <OptionGrid
                  options={occasions}
                  value={design.occasion}
                  onChange={(value) =>
                    updateDesign("occasion", value)
                  }
                />

                <div className="mt-10">
                  <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    Approximate Budget
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Under ₹5,000",
                      "₹5,000 - ₹10,000",
                      "₹10,000 - ₹20,000",
                      "₹20,000+",
                    ].map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() =>
                          updateDesign(
                            "budget",
                            budget
                          )
                        }
                        className={`border p-4 text-left text-sm transition ${
                          design.budget === budget
                            ? "border-[#2c1913] bg-[#2c1913] text-white"
                            : "border-[#ddd2c9] hover:border-[#2c1913]"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
              </DesignStep>
            )}

            {/* STEP 5 */}
            {step === 5 && (
              <DesignStep
                number="05"
                title="Bring your inspiration"
                subtitle="Optional — reference images help us understand your vision"
              >
                <label className="flex min-h-[230px] cursor-pointer flex-col items-center justify-center border border-dashed border-[#cfc1b6] bg-[#fffaf6] p-8 text-center transition hover:border-[#2c1913]">
                  <ImagePlus
                    size={32}
                    strokeWidth={1}
                  />

                  <p className="mt-5 text-sm font-medium">
                    {reference
                      ? reference.name
                      : "Upload a reference image"}
                  </p>

                  <p className="mt-2 text-xs text-gray-500">
                    JPG, PNG or WEBP
                  </p>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) =>
                      setReference(
                        e.target.files?.[0] ?? null
                      )
                    }
                  />
                </label>

                <div className="mt-7">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-gray-500">
                    Additional Notes
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell our designer anything else you'd like..."
                    className="mt-3 w-full resize-none border border-[#ddd2c9] p-4 text-sm outline-none focus:border-[#2c1913]"
                  />
                </div>
              </DesignStep>
            )}

            {/* Navigation */}
            <div className="flex justify-between border-t border-[#e5dbd3] p-5 md:p-7">
              <button
                type="button"
                disabled={step === 1}
                onClick={() =>
                  setStep((current) =>
                    Math.max(1, current - 1)
                  )
                }
                className="px-5 py-3 text-[10px] uppercase tracking-[0.2em] disabled:opacity-20"
              >
                Back
              </button>

              {step < 5 ? (
                <button
                  type="button"
                  onClick={() =>
                    setStep((current) =>
                      Math.min(5, current + 1)
                    )
                  }
                  className="flex items-center gap-3 bg-[#2c1913] px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-white"
                >
                  Continue
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  type="button"
                  className="flex items-center gap-3 bg-[#2c1913] px-7 py-3 text-[10px] uppercase tracking-[0.2em] text-white"
                >
                  Submit Design Request
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          {/* ================================================= */}
          {/* LIVE SUMMARY */}
          {/* ================================================= */}

          <aside className="h-fit lg:sticky lg:top-8">
            <div className="overflow-hidden bg-[#2c1913] text-white">
              <div className="relative aspect-[4/5] bg-[#38231c]">
                <Image
                  src="/images/custom-design/custom-preview.jpg"
                  alt="Custom design preview"
                  fill
                  className="object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#2c1913] via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#d7b56d]">
                    Your Design
                  </p>

                  <h3 className="mt-2 font-serif text-2xl">
                    {summary}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <SummaryRow
                  label="Garment"
                  value={design.garment}
                />

                <SummaryRow
                  label="Fabric"
                  value={design.fabric}
                />

                <SummaryRow
                  label="Embroidery"
                  value={design.embroidery}
                />

                <SummaryRow
                  label="Colour"
                  value={design.color}
                />

                <SummaryRow
                  label="Occasion"
                  value={design.occasion}
                />

                <SummaryRow
                  label="Budget"
                  value={design.budget}
                />

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs leading-6 text-[#cfc1b7]">
                    Final pricing will be confirmed by our
                    designer after reviewing your requirements.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 border border-[#ddd2c9] bg-white p-5">
              <Check
                size={17}
                className="mt-0.5 shrink-0"
              />

              <div>
                <p className="text-xs font-semibold">
                  Personal Designer Assistance
                </p>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  A designer will review your request before
                  production begins.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ================================================= */}
      {/* PREMIUM CTA */}
      {/* ================================================= */}

      <section className="border-t border-[#e5dbd3] bg-white px-5 py-20 text-center md:px-8">
        <Sparkles
          size={25}
          strokeWidth={1}
          className="mx-auto text-[#a27b4d]"
        />

        <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl md:text-6xl">
          There is no second piece
          <span className="italic text-[#a27b4d]">
            {" "}
            like yours.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500">
          From the first sketch to the final stitch, AAVIRÁ
          brings your imagination to life.
        </p>
      </section>
    </main>
  );
}

/* ================================================= */
/* SMALL UI COMPONENTS */
/* ================================================= */

function Process({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="border-r border-[#e5dbd3] px-5 py-7 text-center last:border-r-0">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#f4ede6]">
        {icon}
      </div>

      <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#a27b4d]">
        {number}
      </p>

      <p className="mt-1 text-xs font-semibold">
        {title}
      </p>

      <p className="mt-1 text-[10px] text-gray-500">
        {text}
      </p>
    </div>
  );
}

function DesignStep({
  number,
  title,
  subtitle,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-5 md:p-8 lg:p-10">
      <p className="text-[9px] uppercase tracking-[0.25em] text-[#a27b4d]">
        Step {number}
      </p>

      <h3 className="mt-3 font-serif text-3xl md:text-4xl">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {subtitle}
      </p>

      <div className="mt-8">{children}</div>
    </div>
  );
}

function OptionGrid({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {options.map((option) => {
        const selected = value === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`relative min-h-[70px] border p-4 text-left text-sm transition ${
              selected
                ? "border-[#2c1913] bg-[#2c1913] text-white"
                : "border-[#ddd2c9] hover:border-[#2c1913]"
            }`}
          >
            {selected && (
              <span className="absolute right-3 top-3">
                <Check size={14} />
              </span>
            )}

            {option}
          </button>
        );
      })}
    </div>
  );
}

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-5 border-b border-white/10 py-3 last:border-b-0">
      <span className="text-[9px] uppercase tracking-[0.15em] text-[#a9978d]">
        {label}
      </span>

      <span className="text-right text-xs font-medium">
        {value}
      </span>
    </div>
  );
}