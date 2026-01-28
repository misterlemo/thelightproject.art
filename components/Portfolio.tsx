"use client";

import { useState } from "react";
import ArtworkCard from "./ArtworkCard";
import Lightbox from "./Lightbox";

export interface Artwork {
  id: number;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  description: string;
  series: "blue" | "red" | "yellow";
  alt: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Dech, 3 p.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "A ship's deck flooded with such intense light that it nearly creates optical illusions.",
    series: "blue",
    alt: "Contemporary acrylic painting of a ship's deck with intense blue light creating optical shadow illusions, part of Shadows in Blue series by Greek artist Maria-Efimia Dimoka",
  },
  {
    id: 2,
    title: "Cycladic house, 11 a.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "A Cycladic house under the midday sun, with rays of sunlight slipping through the cracks of shelters.",
    series: "blue",
    alt: "Original handmade painting depicting a Cycladic house with sunlight rays through cracks, blue shadows series, acrylic on canvas 120x120cm",
  },
  {
    id: 3,
    title: "Schoolroom curtain, 2 p.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "Railings in front of a window casting their shadows onto the home's curtain behind—shadows with a dance-like rhythm.",
    series: "blue",
    alt: "Contemporary Greek art featuring window railings casting rhythmic shadows on curtains, blue series acrylic painting by Maria-Efimia Dimoka",
  },
  {
    id: 4,
    title: "Tiled roof, 4 p.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "The shadow of roof tiles that resemble springs.",
    series: "red",
    alt: "Modern acrylic painting of roof tile shadows resembling springs, red series, original handmade art from Greece 120x120cm",
  },
  {
    id: 5,
    title: "Staircase on a ship, 1 p.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "A staircase bathed in so much light that it loses its volume and becomes a linear pattern.",
    series: "red",
    alt: "Contemporary painting of staircase transformed into linear pattern by intense light, red shadows series, acrylic on canvas",
  },
  {
    id: 6,
    title: "Red carpet, 5 p.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "A carpet lit in such a way that the presence of a window directly above is clearly implied.",
    series: "red",
    alt: "Fine art painting showing carpet illuminated by window light above, red series, original Greek contemporary art 120x120cm",
  },
  {
    id: 7,
    title: "Grille on mezzanine window, 4 p.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "Security bars on a mezzanine window, seemingly melting on one side under the setting sun.",
    series: "yellow",
    alt: "Original acrylic painting of window security bars melting under setting sun, yellow shadows series by Maria-Efimia Dimoka",
  },
  {
    id: 8,
    title: "Building stairwell, 10 a.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "A staircase seen from the side, under the harsh lighting of a building's corridor.",
    series: "yellow",
    alt: "Contemporary Greek painting of side-view staircase in harsh corridor lighting, yellow series acrylic on canvas 120x120cm",
  },
  {
    id: 9,
    title: "Garage door, 7 p.m.",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "120 × 120 cm",
    description: "Orange-yellow beams of light passing through blinds, highlighting the wall of a garage.",
    series: "yellow",
    alt: "Modern Mediterranean art featuring orange-yellow light beams through blinds on garage wall, handmade acrylic painting for sale",
  },
];

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const blueWorks = artworks.filter((art) => art.series === "blue");
  const redWorks = artworks.filter((art) => art.series === "red");
  const yellowWorks = artworks.filter((art) => art.series === "yellow");

  return (
    <section
      id="portfolio"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-content mx-auto px-6">
        <h2 id="portfolio-heading" className="text-4xl md:text-5xl font-serif text-center mb-6">
          Portfolio
        </h2>
        <p className="text-center text-lg text-secondary mb-16 max-w-2xl mx-auto">
          Nine original acrylic paintings on canvas, 120 × 120 cm each. Organized into three series celebrating the primary colors: blue, red, and yellow.
        </p>

        {/* Shadows in Blue */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif mb-8 border-b-4 border-blue-accent inline-block pb-2">
            Shadows in Blue
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blueWorks.map((artwork, index) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => openLightbox(artworks.indexOf(artwork))}
              />
            ))}
          </div>
        </div>

        {/* Shadows in Red */}
        <div className="mb-20">
          <h3 className="text-3xl font-serif mb-8 border-b-4 border-red-accent inline-block pb-2">
            Shadows in Red
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {redWorks.map((artwork, index) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => openLightbox(artworks.indexOf(artwork))}
              />
            ))}
          </div>
        </div>

        {/* Shadows in Yellow */}
        <div>
          <h3 className="text-3xl font-serif mb-8 border-b-4 border-yellow-accent inline-block pb-2">
            Shadows in Yellow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yellowWorks.map((artwork, index) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onClick={() => openLightbox(artworks.indexOf(artwork))}
              />
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        artworks={artworks}
        isOpen={lightboxOpen}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentIndex}
      />
    </section>
  );
}
