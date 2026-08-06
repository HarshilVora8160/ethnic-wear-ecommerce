"use client";

import React, { useState } from "react";
import { Ruler, X, Check, Sparkles, ArrowRight } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
}

export default function FitEstimatorModal({ isOpen, onClose, productTitle }: Props) {
  const [heightCm, setHeightCm] = useState("165");
  const [bustInches, setBustInches] = useState("36");
  const [waistInches, setWaistInches] = useState("30");
  const [fitPreference, setFitPreference] = useState<"snug" | "comfort" | "flared">("comfort");
  const [result, setResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const bust = parseFloat(bustInches);

    let size = "M";
    if (bust <= 32) size = "XS";
    else if (bust <= 34) size = "S";
    else if (bust <= 36) size = "M";
    else if (bust <= 39) size = "L";
    else if (bust <= 42) size = "XL";
    else size = "Custom Bespoke Tailored";

    let advice = "";
    if (fitPreference === "snug") {
      advice = "Recommended for structured zardozi blouses & padded corsets.";
    } else if (fitPreference === "flared") {
      advice = "Includes 4+ extra kalis for voluminous bridal flare.";
    } else {
      advice = "Standard imperial fit with 2-inch inner margin for easy alteration.";
    }

    setResult(`Recommended Size: ${size} (${advice})`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl border-2 border-[#D4AF37]/50 bg-[#FAF8F5] p-6 sm:p-8 shadow-2xl text-[#2A0812]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2A0812] shadow-sm hover:bg-[#2A0812] hover:text-[#F3E5AB] transition"
          aria-label="Close fit calculator"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
          <Ruler size={16} className="text-[#D4AF37]" />
          <span>Royal Bespoke Fit Guide</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2A0812] mt-1">
          Custom Measurement Estimator
        </h3>
        {productTitle && (
          <p className="text-xs text-[#7D6E65] mt-1">
            Tailoring advice for: <span className="font-semibold text-[#2A0812]">{productTitle}</span>
          </p>
        )}

        {/* Estimator Form */}
        <form onSubmit={handleCalculate} className="mt-6 space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7D6E65] mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                className="w-full rounded-md border border-[#E6DED6] bg-white px-3 py-2 text-xs font-semibold text-[#2A0812] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7D6E65] mb-1">
                Bust/Chest (Inches)
              </label>
              <input
                type="number"
                value={bustInches}
                onChange={(e) => setBustInches(e.target.value)}
                className="w-full rounded-md border border-[#E6DED6] bg-white px-3 py-2 text-xs font-semibold text-[#2A0812] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7D6E65] mb-1">
                Waist (Inches)
              </label>
              <input
                type="number"
                value={waistInches}
                onChange={(e) => setWaistInches(e.target.value)}
                className="w-full rounded-md border border-[#E6DED6] bg-white px-3 py-2 text-xs font-semibold text-[#2A0812] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#7D6E65] mb-2">
              Preferred Fit Silhouette
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "snug", label: "Structured Snug" },
                { id: "comfort", label: "Classic Imperial" },
                { id: "flared", label: "Voluminous Flared" },
              ].map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFitPreference(f.id as any)}
                  className={`rounded-md border p-2.5 text-center text-xs font-semibold transition ${
                    fitPreference === f.id
                      ? "border-[#2A0812] bg-[#2A0812] text-[#F3E5AB]"
                      : "border-[#E6DED6] bg-white text-[#2A0812] hover:border-[#D4AF37]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#B38F24] py-3 text-xs font-bold uppercase tracking-widest text-[#2A0812] shadow-md hover:brightness-105 transition"
          >
            Calculate Bespoke Size &rarr;
          </button>
        </form>

        {/* Calculation Result */}
        {result && (
          <div className="mt-6 rounded-lg border border-[#D4AF37] bg-white p-4 shadow-sm animate-in fade-in">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8B5E3C]">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>Tailoring Recommendation</span>
            </div>
            <p className="mt-1 text-sm font-semibold text-[#2A0812]">{result}</p>
            <p className="mt-2 text-[11px] text-[#7D6E65] leading-relaxed">
              ✦ All AAVIRÁ outfits include a complimentary 1-on-1 virtual measurement session with our master tailor.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
