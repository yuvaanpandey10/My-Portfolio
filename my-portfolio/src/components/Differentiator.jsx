import { motion } from "framer-motion";

export default function Differentiator() {
  return (
    <section className="premium-section px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Differentiator
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="ai-glass-card mt-12 overflow-hidden rounded-4xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-8 sm:p-14 lg:p-20"
        >
          <h2 className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            I don't just write code.
            <br />
            <span className="text-white/30">
              I solve the problem behind it.
            </span>
          </h2>

          <div className="mt-14 grid gap-8 border-t border-white/8 pt-10 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium">Business first</p>
              <p className="mt-3 text-sm leading-6 text-white/35">
                Every feature should have a reason to exist.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Design + engineering</p>
              <p className="mt-3 text-sm leading-6 text-white/35">
                Beautiful interfaces backed by solid architecture.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium">Built to scale</p>
              <p className="mt-3 text-sm leading-6 text-white/35">
                Decisions made with the future product in mind.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
