"use client";

import { useState } from "react";
import ArtworkCard from "./ArtworkCard";
import Lightbox from "./Lightbox";
import { getArtworks, seriesColor, type Series } from "@/lib/artworks";
import type { Dict, Lang } from "@/lib/i18n";

type Filter = "all" | Series;

export default function Portfolio({ lang, t }: { lang: Lang; t: Dict }) {
  const p = t.portfolio;
  const artworks = getArtworks(lang);
  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: p.all },
    { value: "blue", label: p.blue },
    { value: "red", label: p.red },
    { value: "yellow", label: p.yellow },
  ];
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = filter === "all" ? artworks : artworks.filter((a) => a.series === filter);

  return (
    <section
      id="portfolio"
      className="bg-surface py-28 md:py-40"
      aria-labelledby="portfolio-heading"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-6">{p.eyebrow}</p>
            <h2 id="portfolio-heading" className="section-title">
              {p.h2a}
              <br />
              <em>{p.h2b}</em>
            </h2>
          </div>
          <p className="max-w-sm text-secondary text-pretty">
            {p.intro}
          </p>
        </div>

        <div
          role="group"
          aria-label={p.filterLabel}
          className="mt-14 grid w-full grid-cols-4 gap-1 rounded-full border border-divider bg-background p-1.5 sm:inline-flex sm:w-auto"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              aria-pressed={filter === f.value}
              className={`flex items-center justify-center gap-1.5 rounded-full px-2 py-2 text-sm transition-all sm:gap-2 sm:px-5 ${
                filter === f.value
                  ? "bg-foreground text-background"
                  : "text-secondary hover:text-foreground"
              }`}
            >
              {f.value !== "all" && (
                <span
                  aria-hidden
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: seriesColor[f.value] }}
                />
              )}
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((artwork, i) => (
            <ArtworkCard key={artwork.id} artwork={artwork} onClick={() => setOpenIndex(i)} viewLabel={p.viewDetails} />
          ))}
        </div>
      </div>

      <Lightbox
        artworks={visible}
        t={t}
        isOpen={openIndex !== null}
        currentIndex={openIndex ?? 0}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
