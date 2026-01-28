"use client";

import { useEffect } from "react";
import { Artwork } from "./Portfolio";

interface LightboxProps {
  artworks: Artwork[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  artworks,
  isOpen,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentArtwork = artworks[currentIndex];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    const handleBodyScroll = () => {
      document.body.style.overflow = "hidden";
    };

    handleBodyScroll();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? artworks.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === artworks.length - 1 ? 0 : currentIndex + 1);
  };

  const handleInquire = () => {
    onClose();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setTimeout(() => {
        const messageField = document.querySelector<HTMLTextAreaElement>("#message");
        if (messageField) {
          messageField.value = `I'm interested in "${currentArtwork.title}". `;
          messageField.focus();
        }
      }, 500);
    }
  };

  if (!isOpen) return null;

  const getImagePath = (id: number) => {
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
    <div
      className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10 p-2"
        aria-label="Close lightbox"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrevious();
        }}
        className="absolute left-4 text-white hover:text-accent transition-colors z-10 p-2"
        aria-label="Previous artwork"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 text-white hover:text-accent transition-colors z-10 p-2"
        aria-label="Next artwork"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="max-w-7xl w-full mx-4 flex flex-col lg:flex-row items-center gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="flex-1 max-w-3xl">
          <img
            src={getImagePath(currentArtwork.id)}
            alt={currentArtwork.alt}
            className="w-full aspect-square object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 max-w-md text-white space-y-4">
          <h3 id="lightbox-title" className="text-3xl font-serif">
            {currentArtwork.title}
          </h3>
          <p className="text-lg text-white/80">
            {currentArtwork.year} • {currentArtwork.medium}
          </p>
          <p className="text-lg text-white/80">{currentArtwork.dimensions}</p>
          <p className="text-lg leading-relaxed text-white/90 pt-4">
            {currentArtwork.description}
          </p>
          <button
            onClick={handleInquire}
            className="mt-6 px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-foreground transition-all duration-300"
          >
            Inquire About This Work
          </button>
        </div>
      </div>
    </div>
  );
}
