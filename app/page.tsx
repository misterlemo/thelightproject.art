import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TheProject from "@/components/TheProject";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <TheProject />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
