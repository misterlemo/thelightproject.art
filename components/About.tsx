"use client";

import { useState } from "react";

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <h2 id="about-heading" className="text-4xl md:text-5xl font-serif mb-8">
              About the Artist
            </h2>

            <p>
              Maria-Efimia Dimoka is a contemporary Greek artist whose work explores the profound relationship between light and shadow in everyday moments. Based in Greece, she creates original handmade paintings that capture the unique quality of Greek light—intense, rich, and radiant.
            </p>

            <p>
              Born in Thessaloniki, she studied at the 5th Painting Studio of the Department of Fine and Applied Arts, School of Fine Arts, Aristotle University of Thessaloniki, under the instruction of Lambros Psirrakis, Aliki Martzopoulou, and Maria Vozali. She also holds a degree from the Department of Educational and Social Policy at the University of Macedonia and a Master's degree in Special Education from the University of Nicosia.
            </p>

            <p>
              Her artistic process begins with her mobile phone, which becomes a witness to fleeting reality. Throughout the day, she photographs moments where light and shadow create unexpected beauty: the way sunlight transforms a staircase into a linear pattern, how shadows dance across curtains, or the optical illusions created by Mediterranean light. These photographs become the foundation for her paintings, where she illuminates aspects of reality not immediately obvious to the eye.
            </p>

            <p>
              Maria-Efimia works exclusively with acrylic paints, a medium she chose initially out of necessity while pregnant with her second child, when oil paint fumes would have been dangerous. Over time, she discovered that acrylic's immediacy perfectly matches her artistic goal: capturing specific moments in time. Just as the drying time of acrylic paint is fleeting, so too are the moments of light and shadow she paints.
            </p>

            <p>
              Time is a central element in her work. Each painting represents a moment that, a minute later, would have been entirely different—different colors, different forms, a different mood, and above all, a different emotion. By using flat, solid colors intentionally, she directs the viewer's focus to the shadow itself, where emotion emerges most powerfully.
            </p>

            <p>
              Drawing inspiration from Greek painter Panayiotis Tetsis and architect Luis Kahn's philosophy on light and shadow, Maria-Efimia has developed a distinctive visual language. Her <em>Dance of the Shadows</em> series—organized into three primary colors (blue, red, and yellow)—serves as an ode to both color and light.
            </p>

            <p>
              The square format of her work comes from her photo editing process, as she searches for and focuses on a specific detail that interests her in each painting. All works are created in a manageable yet functional size of 120 × 120 cm, making them suitable for both private collections and gallery spaces.
            </p>

            <p>
              Maria-Efimia is a mother of two—a 6-year-old boy and a 3-year-old girl—and continues to create her work from her studio in Greece, where the quality of light remains her greatest inspiration.
            </p>

            <div className="pt-8">
              <h3 className="text-2xl font-serif mb-4">Group Exhibitions</h3>
              <ul className="space-y-3 text-base">
                <li>
                  <strong>2023:</strong> "Visualbility", 19/06/2023–24/06/2023, French Institute, Thessaloniki.
                </li>
                <li>
                  <strong>2023:</strong> /θre.psis/, 27/04/2023–07/05/2023, Toss Gallery, Thessaloniki.
                </li>
                <li>
                  <strong>2022:</strong> 4th Panhellenic Painting Competition titled "Lukas Venetoulias Painting Competition", Teloglion Foundation of Art, Thessaloniki.
                </li>
                <li>
                  <strong>2022:</strong> "The Monuments and I: Recall and Interpretation of Memory", 6th International Festival of Monuments of Thessaloniki, 01–30/06/2022, Cultural Venue "Islahane," Thessaloniki.
                </li>
                <li>
                  <strong>2021:</strong> 5th bio-Mechanical Festival with the theme "Palimpsest #21", 04/07–02/08/2021, Mytaras Gallery, Chalkida.
                </li>
              </ul>
            </div>
          </div>

          {/* Artist Photo Placeholder */}
          <div className="lg:sticky lg:top-32">
            <div className="aspect-[4/5] bg-gradient-to-br from-accent/10 to-accent/20 flex items-center justify-center overflow-hidden">
              {!imageError ? (
                <img
                  src="/images/about/artist-photo.jpg"
                  alt="Maria-Efimia Dimoka, contemporary Greek artist"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="text-center p-8">
                  <div className="text-8xl mb-4 opacity-20">👤</div>
                  <p className="text-secondary">
                    Add artist-photo.jpg to
                    <br />
                    public/images/about/
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
