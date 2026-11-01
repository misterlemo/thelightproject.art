import { dictionaries, type Lang } from "./i18n";

export type Series = "blue" | "red" | "yellow";

export interface Artwork {
  id: number;
  title: string;
  time: string;
  year: string;
  medium: string;
  dimensions: string;
  description: string;
  series: Series;
  image: string;
  alt: string;
}

export const seriesColor: Record<Series, string> = {
  blue: "rgb(var(--blue))",
  red: "rgb(var(--red))",
  yellow: "rgb(var(--yellow))",
};

const base: { id: number; series: Series; image: string }[] = [
  { id: 1, series: "blue", image: "/images/portfolio/blue/dech-3pm.jpg" },
  { id: 2, series: "blue", image: "/images/portfolio/blue/cycladic-house-11am.jpg" },
  { id: 3, series: "blue", image: "/images/portfolio/blue/schoolroom-curtain-2pm.jpg" },
  { id: 4, series: "red", image: "/images/portfolio/red/tiled-roof-4pm.jpg" },
  { id: 5, series: "red", image: "/images/portfolio/red/staircase-ship-1pm.jpg" },
  { id: 6, series: "red", image: "/images/portfolio/red/red-carpet-5pm.jpg" },
  { id: 7, series: "yellow", image: "/images/portfolio/yellow/grille-window-4pm.jpg" },
  { id: 8, series: "yellow", image: "/images/portfolio/yellow/building-stairwell-10am.jpg" },
  { id: 9, series: "yellow", image: "/images/portfolio/yellow/garage-door-7pm.jpg" },
];

export function getArtworks(lang: Lang): Artwork[] {
  const { art } = dictionaries[lang];
  return base.map((b) => ({
    ...b,
    ...art.items[b.id],
    year: "2023",
    medium: art.medium,
    dimensions: art.dimensions,
  }));
}
