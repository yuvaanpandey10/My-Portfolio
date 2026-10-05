import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="premium-section relative scroll-mt-24 px-5 py-28 sm:px-8 lg:px-12 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Let's build
        </p>

        <h2 className="mt-7 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
          Have an idea?
          <br />
          <span className="text-white/30">Let's make it real.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
          Tell me what you're building, what you're trying to achieve, and where
          you want to take it.
        </p>

        <motion.a
          href="mailto:yuvvandev10@gmail.com"
          whileHover={{
            scale: 1.04,
            y: -3,
          }}
          whileTap={{ scale: 0.97 }}
          className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-7 py-4 text-sm font-semibold text-white shadow-2xl shadow-violet-500/25 transition-shadow hover:shadow-cyan-400/30"
        >
          Start a conversation
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </motion.a>

        <footer className="mt-24 border-t border-white/10 pt-7">
          <a
            href="https://wa.me/9779815545673"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/70 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-300"
          >
            <MessageCircle
              size={17}
              className="text-emerald-400 transition-transform group-hover:rotate-[-8deg]"
            />
            Chat on WhatsApp
          </a>
        </footer>
      </motion.div>
    </section>
  );
}
