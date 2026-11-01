import type { Metadata, Viewport } from "next";
import { dictionaries, type Lang } from "./i18n";

export function buildMetadata(lang: Lang): Metadata {
  const t = dictionaries[lang];
  const path = lang === "el" ? "/el" : "/";
  return {
    metadataBase: new URL("https://thelightproject.art"),
    title: t.metaTitle,
    description: t.metaDescription,
    authors: [{ name: "Maria-Efimia Dimoka" }],
    icons: { icon: "/favicon.svg" },
    alternates: { canonical: path, languages: { en: "/", el: "/el" } },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `https://thelightproject.art${path === "/" ? "" : path}`,
      siteName: "The Light Project",
      locale: lang === "el" ? "el_GR" : "en_US",
      type: "website",
      images: [{ url: "/images/hero/dance-of-shadows-cover.jpg" }],
    },
    twitter: { card: "summary_large_image", title: t.metaTitle, description: t.metaDescription },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0d0c" },
  ],
};
