import Image from "next/image";

import type { Dict } from "@/lib/i18n";

export default function About({ t }: { t: Dict }) {
  const a = t.about;
  return (
    <section id="about" className="py-28 md:py-40" aria-labelledby="about-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface">
                <Image
                  src="/images/about/artist-photo.jpg"
                  alt={a.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">{a.eyebrow}</p>
            <h2 id="about-heading" className="section-title">
              {a.nameA} <em>{a.nameB}</em>
            </h2>

            <p className="mt-10 font-serif text-3xl leading-snug md:text-4xl text-balance">
              {a.lead}
            </p>

            <div className="mt-12 space-y-6 text-lg leading-relaxed text-secondary text-pretty">
              {a.paras.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>

            <h3 className="mt-20 font-serif text-3xl">{a.exhibitionsTitle}</h3>
            <ul className="mt-6 divide-y divide-divider border-y border-divider">
              {a.exhibitions.map((e) => (
                <li key={e.text} className="grid grid-cols-[4rem_1fr] gap-4 py-5 text-secondary">
                  <span className="font-serif text-xl text-foreground">{e.year}</span>
                  <span>{e.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
