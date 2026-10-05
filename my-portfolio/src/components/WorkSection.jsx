const projects = [
  {
    category: "Digital Product",
    title: "Project Alpha",
    description: "A high-performance digital product experience.",
  },
  {
    category: "AI Platform",
    title: "Project Nova",
    description: "An intelligent platform built around AI workflows.",
  },
  {
    category: "Brand Experience",
    title: "Project Orbit",
    description: "A premium digital presence for a modern brand.",
  },
];

export default function WorkSection() {
  return (
    <section className="bg-white px-6 py-32 text-black lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-black/40">
              Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-medium tracking-tight sm:text-6xl lg:text-8xl">
              Work that
              <br />
              <span className="ai-gradient-text">speaks for itself.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/50">
            Selected projects, experiments and deeper case studies showing how
            strategy becomes meaningful digital experiences.
          </p>
        </div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-[2rem] bg-neutral-100 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden bg-neutral-200 ${
                  index === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-black/20 transition-transform duration-700 group-hover:scale-105">
                  PROJECT VISUAL
                </div>
              </div>

              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                  {project.category}
                </p>

                <h3 className="mt-3 text-3xl font-medium">{project.title}</h3>

                <p className="mt-3 text-black/50">{project.description}</p>

                <button className="mt-8 rounded-full border border-black/10 px-5 py-3 text-sm transition hover:bg-black hover:text-white">
                  View Case Study ↗
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
