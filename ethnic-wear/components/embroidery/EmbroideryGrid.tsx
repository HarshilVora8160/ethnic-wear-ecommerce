"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";

import type { Embroidery } from "@/lib/embroidery";

import EmbroideryCard from "./EmbroideryCard";

interface EmbroideryGridProps {
  embroideryDesigns: Embroidery[];
}

export default function EmbroideryGrid({
  embroideryDesigns,
}: EmbroideryGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [technique, setTechnique] = useState("All");
  const [sort, setSort] = useState("featured");

  const filteredDesigns = useMemo(() => {
    const result = embroideryDesigns.filter((item) => {
      const searchMatch =
        item.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.technique
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.style
          .toLowerCase()
          .includes(search.toLowerCase());

      const categoryMatch =
        category === "All" || item.category === category;

      const techniqueMatch =
        technique === "All" ||
        item.technique === technique;

      return (
        searchMatch &&
        categoryMatch &&
        techniqueMatch
      );
    });

    if (sort === "price-low") {
      return [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      return [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "newest") {
      return [...result].sort(
        (a, b) =>
          Number(b.newArrival) - Number(a.newArrival)
      );
    }

    return result;
  }, [
    embroideryDesigns,
    search,
    category,
    technique,
    sort,
  ]);

  return (
    <section className="bg-[#fffaf6]">
      {/* Filter Bar */}
      <div className="border-y border-[#e7ddd4] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-5 md:px-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-md">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search embroidery designs..."
              className="h-11 w-full border border-[#ded3ca] bg-[#fffaf6] pl-11 pr-4 text-sm outline-none transition focus:border-[#a27b4d]"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={15} />

              <span className="text-[9px] uppercase tracking-[0.2em]">
                Filter
              </span>
            </div>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="h-11 border border-[#ded3ca] bg-[#fffaf6] px-4 text-xs outline-none"
            >
              <option value="All">All Categories</option>
              <option value="Floral">Floral</option>
              <option value="Bridal">Bridal</option>
              <option value="Geometric">Geometric</option>
            </select>

            <select
              value={technique}
              onChange={(e) =>
                setTechnique(e.target.value)
              }
              className="h-11 border border-[#ded3ca] bg-[#fffaf6] px-4 text-xs outline-none"
            >
              <option value="All">All Techniques</option>
              <option value="Zari Work">Zari Work</option>
              <option value="Aari Work">Aari Work</option>
              <option value="Mirror Work">
                Mirror Work
              </option>
              <option value="Bead Work">Bead Work</option>
              <option value="Thread Work">
                Thread Work
              </option>
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="h-11 border border-[#ded3ca] bg-[#fffaf6] px-4 text-xs outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">
                Price: Low to High
              </option>
              <option value="price-high">
                Price: High to Low
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-8 lg:py-20">
        {/* Heading */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#a27b4d]">
              AAVIRÁ Collection
            </p>

            <h2 className="mt-3 font-serif text-4xl text-[#2c1913] md:text-5xl">
              Embroidery Designs
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
              Discover intricate patterns and handcrafted
              details created to elevate your ethnic wear.
            </p>
          </div>

          <p className="hidden text-xs text-gray-500 md:block">
            {filteredDesigns.length} Designs
          </p>
        </div>

        {/* Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {filteredDesigns.map((embroidery) => (
              <EmbroideryCard
                key={embroidery.id}
                embroidery={embroidery}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] items-center justify-center border border-dashed border-[#ded3ca]">
            <div className="text-center">
              <h3 className="font-serif text-2xl text-[#2c1913]">
                No designs found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your search or filters.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}