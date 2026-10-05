const insights = [
  {
    type: "Article",
    title: "Designing for the AI era",
  },
  {
    type: "Article",
    title: "What makes a digital product feel premium?",
  },
  {
    type: "Research",
    title: "The future of human + AI interfaces",
  },
];

export default function InsightsSection() {
  return (
    <section className="bg-[#f4f4f0] px-6 py-32 text-black lg:px-12">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm uppercase tracking-[0.3em] text-black/40">
          Insights
        </p>

        <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row">
          <h2 className="text-5xl font-medium tracking-tight sm:text-6xl">
            Ideas worth
            <br />
            <span className="text-black/30">exploring.</span>
          </h2>

          <p className="max-w-md self-end text-black/50">
            Thinking, research and experiments around design, technology,
            AI and digital products.
          </p>
        </div>

        <div className="mt-20 divide-y divide-black/10 border-y border-black/10">
          {insights.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col justify-between gap-6 py-8 transition-all duration-500 hover:px-4 md:flex-row md:items-center"
            >
              <div className="flex items-center gap-6">
                <span className="text-sm text-black/30">
                  0{index + 1}
                </span>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/40">
                    {item.type}
                  </p>

                  <h3 className="mt-2 text-xl font-medium md:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </div>

              <span className="text-xl transition-transform duration-500 group-hover:translate-x-2">
                ↗
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}