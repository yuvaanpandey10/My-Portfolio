import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Gauge, Sparkles } from "lucide-react";

export default function Introduction() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-500/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Introduction
            </p>

            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>
              Available for select projects
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.05] tracking-tighter sm:text-6xl lg:text-7xl">
              Turning ideas into
              <span className="ai-gradient-text">
                {" "}
                products people remember.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/45">
              I combine product thinking, thoughtful design, modern engineering
              and business strategy to create digital experiences that people
              understand, teams can operate and businesses can grow.
            </p>

            <a
              href="#projects"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              See how I work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
            className="ai-glass-card group relative overflow-hidden rounded-3xl border border-white/8 bg-white/3 p-7 sm:p-10 md:col-span-7"
          >
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[70px] transition-transform duration-700 group-hover:scale-150" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                  The principle
                </p>
                <h3 className="mt-10 max-w-lg text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
                  Clarity before complexity.
                </h3>
              </div>
              <Sparkles className="text-cyan-300" size={22} />
            </div>
            <p className="relative mt-6 max-w-xl text-sm leading-7 text-white/45">
              The best digital products feel obvious in your hands. I turn
              complicated ideas into clear flows, expressive interfaces and
              dependable systems.
            </p>
            <div className="relative mt-10 flex items-center gap-3 border-t border-white/8 pt-5 text-xs uppercase tracking-[0.18em] text-white/30">
              <span className="h-px w-8 bg-linear-to-r from-cyan-300 to-violet-400" />
              Strategy · Design · Engineering
            </div>
          </motion.div>

          <div className="grid gap-4 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.1, duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="ai-glass-card rounded-3xl border border-white/8 bg-white/3 p-7"
            >
              <Compass size={22} className="text-violet-300" />
              <h3 className="mt-7 text-xl font-medium">
                Direction that matters.
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/40">
                Every decision connects the user need to the business outcome.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.2, duration: 0.7 }}
              whileHover={{ y: -5 }}
              className="ai-glass-card rounded-3xl border border-white/8 bg-white/3 p-7"
            >
              <Gauge size={22} className="text-fuchsia-300" />
              <h3 className="mt-7 text-xl font-medium">Built for momentum.</h3>
              <p className="mt-3 text-sm leading-7 text-white/40">
                Fast, flexible foundations that keep getting better after
                launch.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-12 grid grid-cols-2 border-y border-white/8 py-6 sm:grid-cols-4"
        >
          {[
            ["Clear thinking"],
            ["Quiet details"],
            ["Fast feedback"],
            ["Long-term craft"],
          ].map(([label]) => (
            <div
              key={label}
              className="flex items-center gap-3 py-2 text-xs uppercase tracking-[0.16em] text-white/30 sm:justify-center"
            >
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
