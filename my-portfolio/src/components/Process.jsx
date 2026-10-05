import { motion } from "framer-motion";

const steps = [
  [
    "Discover",
    "Understand the product, the people it serves and the business outcome that matters most.",
    "Product audit · User needs · Success metrics",
  ],
  [
    "Strategize",
    "Turn insight into a focused roadmap, clear priorities and an architecture that supports the next stage of growth.",
    "Roadmap · UX direction · Technical plan",
  ],
  [
    "Build",
    "Design and engineer the product as one connected system—from the first interaction to the API behind it.",
    "Interface · Backend · Integrations",
  ],
  [
    "Refine",
    "Test with purpose, remove friction, improve performance and make every important detail feel considered.",
    "QA · Performance · Conversion polish",
  ],
  [
    "Launch & grow",
    "Ship confidently with the monitoring, documentation and next-step plan needed to keep creating value after launch.",
    "Release · Analytics · Continuous improvement",
  ],
];

export default function Process() {
  return (
    <section className="premium-section bg-[#080b0a] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Process
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
          From first question
          <span className="text-white/30"> to lasting momentum.</span>
        </h2>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
          No mystery handoffs or disconnected deliverables. Each phase creates
          the clarity needed for the next one, keeping product decisions,
          customer needs and business goals moving in the same direction.
        </p>

        <div className="mt-16">
          {steps.map(([title, description, deliverables], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="premium-row grid gap-5 border-t border-white/[0.07] py-8 md:grid-cols-[0.7fr_1fr] md:items-center"
            >
              <h3 className="text-2xl font-medium">{title}</h3>

              <div>
                <p className="max-w-md text-sm leading-7 text-white/45">
                  {description}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300/60">
                  {deliverables}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
