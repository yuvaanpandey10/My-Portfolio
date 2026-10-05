import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "AI / LLM APIs",
  "Git",
];

export default function Authority() {
  return (
    <section className="premium-section bg-[#080b0a] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Authority
          </p>

          <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
            Modern tools.
            <br />
            <span className="text-white/30">Serious execution.</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className="ai-glass-card rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-5 text-center text-sm text-white/50 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
