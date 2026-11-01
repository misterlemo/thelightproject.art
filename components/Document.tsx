import { Instrument_Serif, Noto_Serif_Display, Geist } from "next/font/google";
import "../app/globals.css";
import { dictionaries, type Lang } from "@/lib/i18n";

const display = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  style: ["normal", "italic"],
  // No metric-matched fallback: its local Times face would catch Greek before displayGreek does
  fallback: [],
  adjustFontFallback: false,
});

// Instrument Serif has no Greek glyphs, so the browser falls back to this per character
const displayGreek = Noto_Serif_Display({
  subsets: ["greek"],
  variable: "--font-display-greek",
  weight: "400",
  style: ["normal", "italic"],
  preload: false,
  fallback: [],
  adjustFontFallback: false,
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Document({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = dictionaries[lang];
  return (
    <html lang={t.htmlLang}>
      <body className={`${display.variable} ${displayGreek.variable} ${sans.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-2 focus:text-background"
        >
          {t.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
