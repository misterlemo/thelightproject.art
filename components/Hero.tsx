"use client";

export default function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#portfolio");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>
        <img
          src="/images/hero/dance-of-shadows-cover.jpg"
          alt="Dance of the Shadows - Cycladic architecture with white pergola casting dramatic shadows against blue sky"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal mb-6 tracking-tight"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
        >
          The Light Project
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ textShadow: "0 1px 5px rgba(0,0,0,0.3)" }}
        >
          Where Greek light meets canvas—a meditation on shadow, time, and the fleeting beauty of everyday moments. Nine original paintings capturing the dance between light and darkness.
        </p>
        <a
          href="#portfolio"
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-foreground transition-all duration-300 text-lg tracking-wide group"
        >
          View the Works
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
