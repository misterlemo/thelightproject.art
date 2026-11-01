import { seriesColor, type Series } from "@/lib/artworks";
import type { Dict, Lang } from "@/lib/i18n";

const series: Series[] = ["blue", "red", "yellow"];

export default function TheProject({ t }: { lang: Lang; t: Dict }) {
  const p = t.project;
  return (
    <section id="the-project" className="py-28 md:py-40" aria-labelledby="project-heading">
      <div className="mx-auto max-w-content px-6">
        <p className="eyebrow mb-6">{p.eyebrow}</p>
        <h2 id="project-heading" className="section-title max-w-4xl">
          {p.h2a}<em className="text-accent">{p.h2b}</em>
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 text-lg leading-relaxed text-secondary lg:col-span-7 text-pretty">
            <p>
              <em className="text-foreground">{p.p1Em}</em>{p.p1}
            </p>
            <p>
              {p.p2}
            </p>
            <p>
              {p.p3}
            </p>
          </div>

          <ul className="grid gap-4 lg:col-span-5">
            {series.map((s) => (
              <li
                key={s}
                className="group flex items-center justify-between rounded-3xl border border-divider bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40"
              >
                <div className="flex items-center gap-5">
                  <span
                    aria-hidden
                    className="h-12 w-12 rounded-full transition-transform duration-500 group-hover:scale-110"
                    style={{ background: seriesColor[s] }}
                  />
                  <span className="font-serif text-2xl">{t.series[s]}</span>
                </div>
                <span className="text-sm text-secondary">
                  3 {p.works}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="mt-28 border-t border-divider pt-16 text-center">
          <p className="mx-auto max-w-4xl font-serif text-4xl italic leading-tight md:text-6xl text-balance">
            &ldquo;{p.quote}&rdquo;
          </p>
          <footer className="eyebrow mt-8">{p.quoteBy}</footer>
        </blockquote>
      </div>
    </section>
  );
}
