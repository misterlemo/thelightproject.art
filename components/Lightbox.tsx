"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { seriesColor, type Artwork } from "@/lib/artworks";
import type { Dict } from "@/lib/i18n";
import { scrollToSelector } from "@/lib/scroll";

interface LightboxProps {
  t: Dict;
  artworks: Artwork[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ t, artworks, isOpen, currentIndex, onClose, onNavigate }: LightboxProps) {
  const artwork = artworks[currentIndex];
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const previous = useCallback(
    () => onNavigate(currentIndex === 0 ? artworks.length - 1 : currentIndex - 1),
    [currentIndex, artworks.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate(currentIndex === artworks.length - 1 ? 0 : currentIndex + 1),
    [currentIndex, artworks.length, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose, previous, next]);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  if (!isOpen || !artwork) return null;

  const inquire = () => {
    const title = artwork.title;
    onClose();
    scrollToSelector("#contact");
    setTimeout(() => {
      const field = document.querySelector<HTMLTextAreaElement>("#message");
      if (field) {
        field.value = `${t.lightbox.interested} «${title}». `;
        field.focus({ preventScroll: true });
      }
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 60) (dx > 0 ? previous : next)();
        touchX.current = null;
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/25"
        aria-label={t.lightbox.close}
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className="grid max-h-full w-full max-w-6xl items-center gap-8 overflow-y-auto lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto aspect-square w-full max-w-[min(100%,78vh)] overflow-hidden rounded-3xl">
          <Image
            key={artwork.id}
            src={artwork.image}
            alt={artwork.alt}
            fill
            sizes="(min-width: 1024px) 700px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="pb-4 text-white">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow flex items-center gap-2 !text-white/60">
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ background: seriesColor[artwork.series] }}
              />
              {t.series[artwork.series]} · {currentIndex + 1} / {artworks.length}
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={previous}
                aria-label={t.lightbox.prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label={t.lightbox.next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15"
              >
                →
              </button>
            </div>
          </div>
          <h3 id="lightbox-title" className="mt-4 font-serif text-4xl leading-none sm:text-5xl">
            {artwork.title}
            <span className="mt-2 block italic text-white/60">{artwork.time}</span>
          </h3>
          <p className="mt-6 text-sm text-white/60">
            {artwork.year} · {artwork.medium} · {artwork.dimensions}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white/85 text-pretty">{artwork.description}</p>

          <button onClick={inquire} className="btn mt-10 w-full bg-white text-black hover:bg-accent hover:text-white sm:w-auto">
            {t.lightbox.inquire}
          </button>
        </div>
      </div>
    </div>
  );
}
