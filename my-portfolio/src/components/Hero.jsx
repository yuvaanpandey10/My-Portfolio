import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const signals = [
  {
    id: "experience",
    label: "Experience",
    value: "98",
    unit: "clarity score",
    detail: "Interfaces that make the next step feel obvious.",
  },
  {
    id: "performance",
    label: "Performance",
    value: "84",
    unit: "ms p95 latency",
    detail: "Fast foundations that stay responsive under pressure.",
  },
  {
    id: "intelligence",
    label: "Intelligence",
    value: "0.96",
    unit: "confidence score",
    detail: "AI features designed to be useful, transparent and human.",
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const [activeSignal, setActiveSignal] = useState("experience");
  const shouldReduceMotion = useReducedMotion();
  const signal = signals.find((item) => item.id === activeSignal);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const ambientY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 120],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, 34],
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    shouldReduceMotion ? [1, 1] : [1, 0.35],
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          style={{ y: ambientY }}
          className="ai-ambient-slow absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]"
        />
        <motion.div
          style={{ y: ambientY }}
          className="ai-ambient-reverse absolute right-[10%] top-[25%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]"
        />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto w-full max-w-7xl"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -2, scale: 1.01 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--header-border)] bg-[var(--color-surface)]/80 px-4 py-2 text-xs font-medium text-[var(--color-primary-text)]/70 backdrop-blur-xl shadow-[0_12px_30px_rgba(15,23,42,0.06)]"
          >
            <Sparkles size={13} className="text-[var(--header-accent)]" />
            Available for select freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileInView={{ scale: [0.98, 1] }}
            viewport={{ once: true }}
            className="text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[7.5rem]"
          >
            I build digital
            <span className="ai-gradient-text block">experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 max-w-2xl text-base leading-7 text-[var(--color-primary-text)]/70 sm:text-lg"
          >
            I'm Yuvaan Pandey — a full-stack developer focused on creating fast,
            intelligent and visually exceptional digital products for ambitious
            businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -4, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 24 }}
              className="group relative overflow-hidden rounded-xl border border-emerald-400/25 bg-[linear-gradient(135deg,rgba(16,185,129,0.12),rgba(103,232,249,0.08),rgba(168,85,247,0.08))] px-6 py-3.5 text-sm font-semibold text-[var(--color-primary-text)] shadow-[0_18px_40px_rgba(16,185,129,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/40 hover:shadow-[0_22px_50px_rgba(45,212,191,0.18)]"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_38%)]" />

              <span className="relative z-10 inline-flex items-center justify-center gap-2">
                View selected work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 360, damping: 24 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--header-border)] bg-[var(--color-surface)]/80 px-6 py-3.5 text-sm font-medium text-[var(--color-primary-text)]/80 backdrop-blur-xl transition-all duration-300 hover:border-emerald-300/30 hover:bg-[var(--header-hover-bg)]"
            >
              Let's work together
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--color-primary-text)]/35"
        >
          <ArrowDownRight size={15} className="text-[var(--header-accent)]" />
          Scroll to explore
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-16 max-w-xl rounded-3xl border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-5"
        >
          <div className="flex items-center justify-between gap-4 border-b border-white/8 px-1 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              <Activity size={15} className="text-emerald-300" />
              Product signal
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-emerald-300/75">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.9)]" />
              Live direction
            </span>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-center">
            <div className="flex gap-2 sm:flex-col">
              {signals.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveSignal(item.id)}
                  aria-pressed={activeSignal === item.id}
                  className={`group relative flex-1 overflow-hidden rounded-xl px-3 py-2 text-left text-xs transition-all duration-300 sm:flex-none ${
                    activeSignal === item.id
                      ? "bg-white/10 text-white"
                      : "text-white/35 hover:bg-white/5 hover:text-white/70"
                  }`}
                >
                  <motion.span
                    className="absolute inset-y-0 left-0 w-0.5 bg-emerald-300"
                    initial={false}
                    animate={{ scaleY: activeSignal === item.id ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  />
                  {item.label}
                </button>
              ))}
            </div>

            <motion.div
              key={signal.id}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="rounded-2xl border border-emerald-300/15 bg-emerald-300/5 p-4"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-3xl font-medium tracking-tight text-white">
                    {signal.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-emerald-200/60">
                    {signal.unit}
                  </p>
                </div>
                <CheckCircle2 size={18} className="mb-1 text-emerald-300" />
              </div>
              <p className="mt-3 text-xs leading-5 text-white/40">
                {signal.detail}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
