"use client";

import Image from "next/image";
import { seriesColor, type Artwork } from "@/lib/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
  viewLabel: string;
}

export default function ArtworkCard({ artwork, onClick, viewLabel }: ArtworkCardProps) {
  return (
    <article>
      <button
        onClick={onClick}
        className="group block w-full text-left"
        aria-label={`${viewLabel} ${artwork.title}, ${artwork.time}`}
      >
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-surface">
          <Image
            src={artwork.image}
            alt={artwork.alt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <span className="glass absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full"
              style={{ background: seriesColor[artwork.series] }}
            />
            {artwork.time}
          </span>
          <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </div>

        <div className="mt-5 px-1">
          <h4 className="font-serif text-2xl leading-tight">{artwork.title}</h4>
          <p className="mt-1.5 text-sm text-secondary">
            {artwork.medium} · {artwork.dimensions}
          </p>
        </div>
      </button>
    </article>
  );
}
