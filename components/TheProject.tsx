export default function TheProject() {
  return (
    <section
      id="the-project"
      className="py-24 md:py-32 bg-white"
      aria-labelledby="project-heading"
    >
      <div className="max-w-text mx-auto px-6">
        <h2 id="project-heading" className="text-4xl md:text-5xl font-serif text-center mb-12">
          The Project
        </h2>

        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            <em>Dance of the Shadows</em> is an exploration of light's most overlooked companion: the shadow. Through nine handmade acrylic paintings, this body of work captures the ephemeral interplay between light and shadow in the Greek landscape—moments so fleeting they exist for mere minutes before transforming entirely.
          </p>

          <p>
            Each painting begins with a photograph taken throughout the day, a witness to reality as transient as light itself. These images reveal details not immediately obvious: the way sunlight slips through Cycladic cracks, how railings cast rhythmic shadows on curtains, or the optical illusions created by intense Mediterranean light on a ship's deck.
          </p>

          <p>
            The work is organized into three series—<em>Shadows in Blue</em>, <em>Shadows in Red</em>, and <em>Shadows in Yellow</em>—an ode to the primary colors and to light itself. Using flat, solid colors intentionally, the focus shifts to the shadow, where emotion emerges most powerfully.
          </p>

          <p>
            Inspired by the radiant language of Greek painter Panayiotis Tetsis and architect Luis Kahn's observation that "the sun never knew how great it was until it hit the side of a building or lit up a room," these paintings reflect a simple truth: light and shadow cannot exist without each other. Shadow gives light its value, creates atmosphere, and transforms space into something three-dimensional and alive.
          </p>

          <blockquote className="border-l-4 border-accent pl-8 my-12 italic text-2xl text-secondary">
            "The purpose of light is to create shadows, and shadows exist to create emotion."
            <footer className="text-base not-italic mt-2">— Luis Kahn</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
