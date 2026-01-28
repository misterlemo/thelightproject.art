"use client";

import { Artwork } from "./Portfolio";

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  const getImagePath = (id: number, series: string) => {
    const imageMap: { [key: number]: string } = {
      1: "/images/portfolio/blue/dech-3pm.jpg",
      2: "/images/portfolio/blue/cycladic-house-11am.jpg",
      3: "/images/portfolio/blue/schoolroom-curtain-2pm.jpg",
      4: "/images/portfolio/red/tiled-roof-4pm.jpg",
      5: "/images/portfolio/red/staircase-ship-1pm.jpg",
      6: "/images/portfolio/red/red-carpet-5pm.jpg",
      7: "/images/portfolio/yellow/grille-window-4pm.jpg",
      8: "/images/portfolio/yellow/building-stairwell-10am.jpg",
      9: "/images/portfolio/yellow/garage-door-7pm.jpg",
    };
    return imageMap[id] || "";
  };

  return (
    <article className="group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
        {/* Artwork Image */}
        <img
          src={getImagePath(artwork.id, artwork.series)}
          alt={artwork.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center z-10">
          <span className="text-white text-lg tracking-wide">View Details</span>
        </div>
      </div>

      {/* Caption */}
      <div className="space-y-2">
        <h4 className="text-xl font-serif">{artwork.title}</h4>
        <p className="text-sm text-secondary">
          {artwork.year} • {artwork.medium} • {artwork.dimensions}
        </p>
        <p className="text-base leading-relaxed">{artwork.description}</p>
      </div>
    </article>
  );
}
