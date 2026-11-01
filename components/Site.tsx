import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProject from "@/components/TheProject";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { dictionaries, type Lang } from "@/lib/i18n";

export default function Site({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  return (
    <>
      <Navigation lang={lang} t={t} />
      <main id="main">
        <Hero t={t} />
        <TheProject lang={lang} t={t} />
        <Portfolio lang={lang} t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
      <BackToTop label={t.footer.backToTop} />
    </>
  );
}
