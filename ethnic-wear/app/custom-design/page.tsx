"use client";

import {
  ArrowRight,
  Check,
  ImagePlus,
  Palette,
  Ruler,
  Sparkles,
  WandSparkles,
  X,
  Upload,
} from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type GarmentItem = {
  name: string;
  image: string;
  desc: string;
};

const garmentsList: GarmentItem[] = [
  {
    name: "Saree",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    desc: "Heritage 6-yard drapes with custom blouse & zari borders",
  },
  {
    name: "Lehenga",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    desc: "Flared bridal or sangeet lehenga sets with twin dupattas",
  },
  {
    name: "Kurti",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    desc: "Anarkalis, straight cuts, or festive tunic ensemble",
  },
  {
    name: "Salwar Suit",
    image: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
    desc: "Shararas, ghararas, and chikankari salwar sets",
  },
  {
    name: "Blouse",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80",
    desc: "Designer padded or heavy zardozi unstitched blouse",
  },
  {
    name: "Men's Kurta",
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=800&q=80",
    desc: "Royal sherwani, bandhgala, or silk kurta sets",
  },
];

const fabrics = [
  "Banarasi Silk",
  "Organza",
  "Georgette",
  "Royal Velvet",
  "Chiffon",
  "Raw Silk",
  "Chanderi Silk",
];

const embroideryStyles = [
  "Zardozi & Dabka",
  "Aari Threadwork",
  "Gota Patti Craft",
  "Abhla Mirror Work",
  "Glass Pearl & Cutdana",
  "Lucknowi Chikankari",
  "Minimal Accent",
  "Heavy Bridal Zari",
];

const occasions = [
  "Bridal & Wedding",
  "Reception & Gala",
  "Festive & Puja",
  "Cocktail & Sangeet",
  "Engagement Ceremony",
  "Everyday Couture",
];

const colors = [
  { name: "Crimson Red", value: "#8B0000" },
  { name: "Deep Maroon", value: "#4A0E17" },
  { name: "Ivory White", value: "#FAF6F0" },
  { name: "Royal Purple", value: "#4B0082" },
  { name: "Emerald Green", value: "#50C878" },
  { name: "Champagne Gold", value: "#F3E5AB" },
  { name: "Pastel Mint", value: "#AAF0D1" },
  { name: "Blush Pink", value: "#FFB6C1" },
];

export default function CustomDesignPage() {
  const [step, setStep] = useState(1);

  const [design, setDesign] = useState({
    garment: "Saree",
    fabric: "Banarasi Silk",
    embroidery: "Zardozi & Dabka",
    occasion: "Bridal & Wedding",
    color: "Crimson Red",
    budget: "₹10,000 - ₹20,000",
    notes: "",
  });

  const [reference, setReference] = useState<File | null>(null);

  const updateDesign = (key: keyof typeof design, value: string) => {
    setDesign((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const selectedGarmentObj = useMemo(() => {
    return (
      garmentsList.find((g) => g.name === design.garment) || garmentsList[0]
    );
  }, [design.garment]);

  const previewImageUrl = useMemo(() => {
    if (reference) {
      return URL.createObjectURL(reference);
    }
    return selectedGarmentObj.image;
  }, [reference, selectedGarmentObj]);

  const progress = Math.round((step / 5) * 100);

  const summary = useMemo(
    () =>
      `${design.color} ${design.fabric} ${design.garment} with ${design.embroidery}`,
    [design]
  );

  return (
    <main className="min-h-screen bg-[#FFFDF9] text-[#2C1913]">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2D0312] via-[#4A0C22] to-[#1F020B] border-b-2 border-[#D4AF37]/40 shadow-xl text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]" />
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/25 via-[#3D091B]/85 to-[#120C0E]/95 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-20 text-center md:px-8 md:py-24">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 px-4 py-1.5 backdrop-blur-md">
            <WandSparkles size={15} className="text-[#F3E5AB]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F3E5AB]">
              AAVIRÁ Bespoke Atelier Studio
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl font-serif text-5xl sm:text-6xl md:text-7xl font-normal tracking-wide text-white drop-shadow-md leading-tight">
            Your Vision.
            <span className="block italic text-[#F3E5AB] font-serif">
              Our Master Craftsmen.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#F0E7DB] font-medium">
            Design an outfit that exists nowhere else. Select your garment silhouette, fabric, embroidery style, and colors — our master artisans in Varanasi & Lucknow will tailor your creation.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("designer-studio")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#2A0812] shadow-xl hover:brightness-110 active:scale-95 transition"
          >
            Start Designing
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-[#E6DED6] bg-white shadow-xs">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
          <Process
            number="01"
            icon={<Palette size={18} className="text-[#8B5E3C]" />}
            title="Choose Silhouette"
            text="Select Saree, Lehenga, or Kurti"
          />

          <Process
            number="02"
            icon={<Sparkles size={18} className="text-[#8B5E3C]" />}
            title="Personalize"
            text="Pick fabrics, work & colors"
          />

          <Process
            number="03"
            icon={<Ruler size={18} className="text-[#8B5E3C]" />}
            title="Measurements"
            text="Share custom measurements"
          />

          <Process
            number="04"
            icon={<WandSparkles size={18} className="text-[#8B5E3C]" />}
            title="Craft & Deliver"
            text="Hand-embroidered & shipped"
          />
        </div>
      </section>

      {/* DESIGNER STUDIO */}
      <section
        id="designer-studio"
        className="mx-auto max-w-[1440px] px-5 py-12 md:px-8 lg:py-20"
      >
        <div className="mb-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B5E3C]">
            Interactive Bespoke Studio
          </span>

          <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-medium text-[#2C1913]">
            Customize Your Outfit
          </h2>

          <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-[#7D6E65]">
            Select your preferences below. Our head couturier will review every request and consult with you before production.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
          {/* LEFT: STEP BY STEP FORM */}
          <div className="rounded-xl border border-[#E6DED6] bg-white shadow-sm overflow-hidden flex flex-col justify-between">
            {/* Progress Bar Header */}
            <div className="border-b border-[#E6DED6] bg-[#FAF8F5] p-5 md:p-6">
              <div className="mb-2 flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-[#2C1913]">
                <span>Design Progress</span>
                <span className="text-[#8B5E3C]">{progress}%</span>
              </div>

              <div className="h-2 w-full rounded-full bg-[#E6DED6] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#2C1913] transition-all duration-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* STEP 1: GARMENT SELECTOR WITH IMAGES */}
            {step === 1 && (
              <DesignStep
                number="01"
                title="Select Silhouette & Garment"
                subtitle="Choose the type of ethnic garment you want us to craft"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {garmentsList.map((g) => {
                    const selected = design.garment === g.name;
                    return (
                      <button
                        key={g.name}
                        type="button"
                        onClick={() => updateDesign("garment", g.name)}
                        className={`group relative flex flex-col overflow-hidden rounded-lg border text-left transition-all duration-300 ${
                          selected
                            ? "border-[#2C1913] ring-2 ring-[#D4AF37] shadow-lg bg-[#FAF6F0]"
                            : "border-[#E6DED6] bg-white hover:border-[#D4AF37]"
                        }`}
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F0E7DB]">
                          <Image
                            src={g.image}
                            alt={g.name}
                            fill
                            sizes="300px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {selected && (
                            <span className="absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1913] text-[#F3E5AB] shadow-md">
                              <Check size={14} />
                            </span>
                          )}
                        </div>
                        <div className="p-3">
                          <h4 className="font-serif text-base font-semibold text-[#2C1913]">
                            {g.name}
                          </h4>
                          <p className="mt-0.5 text-[11px] text-[#7D6E65] line-clamp-2">
                            {g.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </DesignStep>
            )}

            {/* STEP 2: FABRIC SELECTOR */}
            {step === 2 && (
              <DesignStep
                number="02"
                title="Select Luxury Fabric"
                subtitle="Choose the foundation material for your garment"
              >
                <OptionGrid
                  options={fabrics}
                  value={design.fabric}
                  onChange={(val) => updateDesign("fabric", val)}
                />
              </DesignStep>
            )}

            {/* STEP 3: EMBROIDERY & COLOR */}
            {step === 3 && (
              <DesignStep
                number="03"
                title="Embroidery Style & Base Color"
                subtitle="Select artisan craftsmanship motifs and main shade"
              >
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">
                    Embroidery Technique
                  </label>
                  <OptionGrid
                    options={embroideryStyles}
                    value={design.embroidery}
                    onChange={(val) => updateDesign("embroidery", val)}
                  />
                </div>

                <div className="mt-8">
                  <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">
                    Base Color Palette
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {colors.map((c) => {
                      const selected = design.color === c.name;
                      return (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => updateDesign("color", c.name)}
                          className={`flex items-center gap-3 rounded-md border p-3 text-left transition-all ${
                            selected
                              ? "border-[#2C1913] bg-[#2C1913] text-[#F3E5AB] shadow-md"
                              : "border-[#E6DED6] bg-white text-[#2C1913] hover:border-[#D4AF37]"
                          }`}
                        >
                          <span
                            className="h-5 w-5 rounded-full border border-black/20 shrink-0"
                            style={{ backgroundColor: c.value }}
                          />
                          <span className="text-xs font-semibold">{c.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </DesignStep>
            )}

            {/* STEP 4: OCCASION & BUDGET */}
            {step === 4 && (
              <DesignStep
                number="04"
                title="Occasion & Target Budget"
                subtitle="Help us tailor our design recommendations to your event"
              >
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">
                    Occasion
                  </label>
                  <OptionGrid
                    options={occasions}
                    value={design.occasion}
                    onChange={(val) => updateDesign("occasion", val)}
                  />
                </div>

                <div className="mt-8">
                  <label className="mb-3 block text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E3C]">
                    Approximate Budget Range
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      "Under ₹5,000",
                      "₹5,000 - ₹10,000",
                      "₹10,000 - ₹20,000",
                      "₹20,000+",
                    ].map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => updateDesign("budget", b)}
                        className={`rounded-md border p-4 text-left text-sm font-semibold transition ${
                          design.budget === b
                            ? "border-[#2C1913] bg-[#2C1913] text-[#F3E5AB]"
                            : "border-[#E6DED6] bg-white text-[#2C1913] hover:border-[#2C1913]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </DesignStep>
            )}

            {/* STEP 5: REFERENCE UPLOAD & NOTES */}
            {step === 5 && (
              <DesignStep
                number="05"
                title="Upload Inspiration & Reference Image"
                subtitle="Share photos of designs, patterns, or sketches you like"
              >
                <div className="space-y-4">
                  {reference ? (
                    <div className="relative rounded-lg border border-[#D4AF37] bg-[#FAF6F0] p-4 flex items-center gap-4">
                      <div className="relative h-20 w-20 overflow-hidden rounded-md border border-[#E6DED6] bg-[#F0E7DB] shrink-0">
                        <Image
                          src={URL.createObjectURL(reference)}
                          alt="Reference upload preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 overflow-hidden">
                        <p className="text-xs font-bold text-[#2C1913] truncate">
                          {reference.name}
                        </p>
                        <p className="text-[11px] text-[#7D6E65]">
                          {(reference.size / 1024).toFixed(1)} KB · Image Uploaded
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setReference(null)}
                        className="rounded-full bg-white p-2 text-red-600 shadow-xs hover:bg-red-50"
                        aria-label="Remove image"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  ) : (
                    <label className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#D4AF37]/50 bg-[#FAF8F5] p-6 text-center transition hover:border-[#2C1913] hover:bg-white">
                      <Upload size={32} className="text-[#8B5E3C]" />
                      <p className="mt-3 text-sm font-bold text-[#2C1913]">
                        Click or drag to upload reference image
                      </p>
                      <p className="mt-1 text-xs text-[#7D6E65]">
                        Supports JPG, PNG, WEBP files
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) =>
                          setReference(e.target.files?.[0] ?? null)
                        }
                      />
                    </label>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-[0.2em] text-[#8B5E3C] mb-2">
                      Additional Notes or Specific Instructions
                    </label>
                    <textarea
                      rows={4}
                      value={design.notes}
                      onChange={(e) => updateDesign("notes", e.target.value)}
                      placeholder="Specify necklines, sleeve length, dupatta preference, fit details, or special requests..."
                      className="w-full rounded-md border border-[#E6DED6] p-4 text-sm outline-none focus:border-[#2C1913] focus:ring-1 focus:ring-[#2C1913]"
                    />
                  </div>
                </div>
              </DesignStep>
            )}

            {/* Navigation Footer */}
            <div className="flex items-center justify-between border-t border-[#E6DED6] bg-[#FAF8F5] p-5 md:p-6">
              <button
                type="button"
                disabled={step === 1}
                onClick={() => setStep((curr) => Math.max(1, curr - 1))}
                className="rounded-md border border-[#E6DED6] bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2C1913] hover:bg-[#F0E7DB] disabled:opacity-30 disabled:pointer-events-none transition"
              >
                Back
              </button>

              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep((curr) => Math.min(5, curr + 1))}
                  className="flex items-center gap-2 rounded-md bg-[#2C1913] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F3E5AB] hover:bg-[#4A1525] shadow-md transition"
                >
                  Continue
                  <ArrowRight size={15} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    alert(
                      "Thank you! Your custom design request has been submitted. Our head designer will contact you within 24 hours."
                    );
                  }}
                  className="flex items-center gap-2 rounded-md bg-gradient-to-r from-[#D4AF37] to-[#B38F24] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#2C1913] shadow-lg hover:brightness-110 active:scale-95 transition"
                >
                  Submit Bespoke Request
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>

          {/* RIGHT: LIVE PREVIEW SIDEBAR */}
          <aside className="h-fit lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-xl border border-[#E6DED6] bg-[#2C1913] text-white shadow-xl">
              {/* Dynamic Image Preview */}
              <div className="relative aspect-[4/5] w-full bg-[#38231C]">
                <Image
                  src={previewImageUrl}
                  alt="Custom design preview image"
                  fill
                  priority
                  sizes="400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1913] via-transparent to-transparent" />

                {reference && (
                  <span className="absolute top-3 left-3 rounded-full bg-[#D4AF37] px-3 py-1 text-[10px] font-bold uppercase text-[#2C1913] shadow-md">
                    Reference Photo Uploaded
                  </span>
                )}

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#F3E5AB]">
                    Custom Outfit Preview
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-medium text-white leading-tight">
                    {summary}
                  </h3>
                </div>
              </div>

              {/* Design Specs Summary */}
              <div className="p-5 text-xs">
                <SummaryRow label="Garment" value={design.garment} />
                <SummaryRow label="Fabric" value={design.fabric} />
                <SummaryRow label="Embroidery" value={design.embroidery} />
                <SummaryRow label="Color" value={design.color} />
                <SummaryRow label="Occasion" value={design.occasion} />
                <SummaryRow label="Budget" value={design.budget} />

                <div className="mt-4 border-t border-white/15 pt-4">
                  <p className="text-[11px] leading-relaxed text-[#D8CCC2]">
                    ✦ Includes 1-on-1 virtual consultation with our senior designer prior to crafting.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

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
    <div className="border-r border-[#E6DED6] p-5 text-center last:border-r-0">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#FAF8F5] shadow-xs">
        {icon}
      </div>
      <span className="mt-3 block font-serif text-xs font-bold text-[#D4AF37]">
        {number}
      </span>
      <h4 className="mt-0.5 text-xs font-bold text-[#2C1913]">{title}</h4>
      <p className="mt-0.5 text-[11px] text-[#7D6E65]">{text}</p>
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
    <div className="p-6 md:p-8">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8B5E3C]">
        Step {number}
      </span>
      <h3 className="mt-1 font-serif text-2xl sm:text-3xl font-medium text-[#2C1913]">
        {title}
      </h3>
      <p className="mt-1 text-xs sm:text-sm text-[#7D6E65]">{subtitle}</p>

      <div className="mt-6">{children}</div>
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
  onChange: (val: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {options.map((opt) => {
        const selected = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`relative flex min-h-[56px] items-center justify-between rounded-md border p-4 text-left text-xs font-semibold transition-all ${
              selected
                ? "border-[#2C1913] bg-[#2C1913] text-[#F3E5AB] shadow-md"
                : "border-[#E6DED6] bg-white text-[#2C1913] hover:border-[#D4AF37]"
            }`}
          >
            <span>{opt}</span>
            {selected && <Check size={14} className="shrink-0 text-[#F3E5AB]" />}
          </button>
        );
      })}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-2.5 last:border-b-0">
      <span className="text-[10px] uppercase tracking-wider text-[#A9978D]">
        {label}
      </span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}