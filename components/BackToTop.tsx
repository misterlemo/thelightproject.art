"use client";

import { useState, useEffect } from "react";

export default function BackToTop({ label }: { label: string }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`glass fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-divider transition-all duration-300 hover:bg-foreground hover:text-background ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label={label}
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
      </svg>
    </button>
  );
}
