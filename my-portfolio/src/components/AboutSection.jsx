export default function AboutSection() {
  return (
    <section className="bg-neutral-950 px-6 py-32 text-white lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            About
          </p>

          <h2 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Building digital experiences
            <span className="text-white/30"> with intention.</span>
          </h2>
        </div>

        <div className="mt-32 grid gap-20 lg:grid-cols-3">
          <div>
            <span className="text-sm text-white/30">Story</span>

            <h3 className="mt-6 text-2xl font-medium">
              Curiosity became craft.
            </h3>

            <p className="mt-5 leading-7 text-white/45">
              Every project begins with understanding the problem, the people
              and the opportunity behind it.
            </p>
          </div>

          <div>
            <span className="text-sm text-white/30">Team</span>

            <h3 className="mt-6 text-2xl font-medium">
              Small team. Big thinking.
            </h3>

            <p className="mt-5 leading-7 text-white/45">
              A focused multidisciplinary approach combining strategy, design,
              engineering and emerging technology.
            </p>
          </div>

          <div>
            <span className="text-sm text-white/30">Philosophy</span>

            <h3 className="mt-6 text-2xl font-medium">
              Simplicity is sophistication.
            </h3>

            <p className="mt-5 leading-7 text-white/45">
              The goal isn't to add more. It's to make every interaction
              meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
