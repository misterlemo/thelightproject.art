"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { scrollToSelector } from "@/lib/scroll";
import type { Dict, Lang } from "@/lib/i18n";

export default function Navigation({ lang, t }: { lang: Lang; t: Dict }) {
  const navItems = [
    { label: t.nav.project, href: "#the-project" },
    { label: t.nav.works, href: "#portfolio" },
    { label: t.nav.artist, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];
  const otherPath = lang === "en" ? "/el" : "/";

  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const go = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSelector(href);
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Main navigation"
        className="glass flex w-full max-w-3xl items-center justify-between rounded-full border border-divider/70 py-2 pl-6 pr-2 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.25)]"
      >
        <a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="flex items-center gap-2 font-serif text-xl"
        >
          <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent" />
          The Light Project
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => go(e, item.href)}
                aria-current={active === item.href ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === item.href
                    ? "bg-foreground text-background"
                    : "text-secondary hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Link
          href={otherPath}
          hrefLang={lang === "en" ? "el" : "en"}
          aria-label={t.nav.switchLabel}
          className="ml-auto mr-2 rounded-full border border-divider px-3.5 py-2 text-xs font-medium tracking-wide transition-colors hover:border-foreground md:ml-2 md:mr-0 md:order-last"
        >
          {t.nav.switchTo}
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background md:hidden"
          aria-label={t.nav.menu}
          aria-expanded={isOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 -z-10 bg-background md:hidden">
          <ul className="flex h-full flex-col items-start justify-center gap-4 px-8">
            {navItems.map((item, i) => (
              <li key={item.href} className="hero-in" style={{ animationDelay: `${i * 60}ms` }}>
                <a
                  href={item.href}
                  onClick={(e) => go(e, item.href)}
                  className="font-serif text-6xl transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
