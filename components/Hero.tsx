"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { scrollToSelector } from "@/lib/scroll";
import type { Dict } from "@/lib/i18n";

export default function Hero({ t }: { t: Dict }) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.35}px, 0) scale(1.1)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-end overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >
      <div ref={imgRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/images/hero/dance-of-shadows-cover.jpg"
          alt={t.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

      <div className="relative z-20 mx-auto w-full max-w-content px-6 pb-14 pt-40 md:pb-20">
        <p className="eyebrow hero-in !text-white/70">
          {t.hero.eyebrow}
        </p>
        <h1
          id="hero-heading"
          className="hero-in mt-5 font-serif text-[clamp(3.5rem,13vw,11rem)] leading-[0.9]"
          style={{ animationDelay: "120ms" }}
        >
          The Light
          <br />
          <em className="pl-[0.4em]">Project</em>
        </h1>

        <div
          className="hero-in mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: "260ms" }}
        >
          <p className="max-w-md text-lg leading-relaxed text-white/85 text-pretty">
            {t.hero.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSelector("#portfolio");
              }}
              className="btn bg-white text-black hover:bg-accent hover:text-white"
            >
              {t.hero.view}
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSelector("#contact");
              }}
              className="btn border border-white/40 text-white backdrop-blur-md hover:bg-white/15"
            >
              {t.hero.inquire}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
