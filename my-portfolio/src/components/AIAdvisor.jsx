import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  Layers3,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";

const projectTypes = [
  {
    id: "product",
    label: "Digital product",
    description: "A SaaS product, platform or ambitious web app.",
    icon: Layers3,
  },
  {
    id: "commerce",
    label: "Commerce experience",
    description: "A storefront or customer journey built to convert.",
    icon: Zap,
  },
  {
    id: "ai",
    label: "AI-powered idea",
    description: "A useful product experience with intelligence built in.",
    icon: WandSparkles,
  },
];

const priorities = [
  { id: "speed", label: "Launch quickly" },
  { id: "polish", label: "Stand out visually" },
  { id: "scale", label: "Build for scale" },
];

const recommendations = {
  product: {
    speed: {
      title: "Ship a focused product MVP",
      summary:
        "Start with one high-value flow, validate it quickly, then build the foundation for the next release.",
      stack: "React · Node.js · PostgreSQL",
    },
    polish: {
      title: "Create a product people remember",
      summary:
        "Lead with a clear visual system, purposeful motion and an interface that makes complex things feel simple.",
      stack: "React · Framer Motion · Design system",
    },
    scale: {
      title: "Design the product for momentum",
      summary:
        "Build modularly from day one with clean boundaries, measurable performance and room for new features.",
      stack: "React · TypeScript · Scalable APIs",
    },
  },
  commerce: {
    speed: {
      title: "Launch a conversion-ready storefront",
      summary:
        "Prioritize the product discovery and checkout moments that create the fastest path to learning and revenue.",
      stack: "React · Headless commerce · Analytics",
    },
    polish: {
      title: "Turn browsing into an experience",
      summary:
        "Use art direction, fast interactions and thoughtful product storytelling to make every scroll feel intentional.",
      stack: "React · Motion · Conversion UX",
    },
    scale: {
      title: "Build a commerce engine that grows",
      summary:
        "Create flexible content and reusable buying journeys that can support more products, campaigns and customers.",
      stack: "React · CMS · Performance architecture",
    },
  },
  ai: {
    speed: {
      title: "Prototype the intelligent moment",
      summary:
        "Find the one task AI can make dramatically better, then turn it into a focused and testable experience.",
      stack: "LLM API · React · Structured prompts",
    },
    polish: {
      title: "Make AI feel natural to use",
      summary:
        "Pair a clear interface with useful feedback states so the intelligence feels trustworthy, fast and human.",
      stack: "AI UX · React · Streaming UI",
    },
    scale: {
      title: "Create an AI product with guardrails",
      summary:
        "Plan for evaluation, reliable outputs and privacy from the start—so the AI can improve without becoming fragile.",
      stack: "LLM API · Retrieval · Evaluation",
    },
  },
};

export default function AIAdvisor() {
  const [projectType, setProjectType] = useState("product");
  const [priority, setPriority] = useState("polish");
  const [isReady, setIsReady] = useState(false);

  const recommendation = useMemo(
    () => recommendations[projectType][priority],
    [projectType, priority],
  );

  const handleSelection = (setter, value) => {
    setter(value);
    setIsReady(false);
  };

  return (
    <section
      id="ai-advisor"
      className="relative scroll-mt-24 overflow-hidden bg-[#080b0a] px-5 py-28 sm:px-8 lg:px-12 lg:py-36"
    >
      <div className="ai-ambient-slow pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-cyan-400/12 blur-[120px]" />
      <div className="ai-ambient-reverse pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-fuchsia-400/12 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
            <Sparkles size={13} />
            AI-assisted thinking
          </div>

          <h2 className="mt-6 max-w-xl text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
            Not sure where to start?
            <span className="ai-gradient-text">
              {" "}
              Let&apos;s find the signal.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-8 text-white/45">
            Tell the advisor what you&apos;re building. It will shape a
            practical starting point for the product, experience and technology.
          </p>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/35">
            <Bot size={18} className="text-violet-300" />
            <span>No sign-up. No waiting. Just a useful first direction.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="ai-glass-card rounded-3xl border border-white/8 bg-white/3.5 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
        >
          <div className="flex items-center justify-between border-b border-white/8 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                Project advisor
              </p>
              <p className="mt-2 text-lg font-medium text-white">
                Shape your next move
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-400 via-fuchsia-400 to-cyan-300 text-black shadow-lg shadow-fuchsia-500/20">
              <Sparkles size={18} />
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm font-medium text-white/75">
              What are you building?
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                const selected = projectType === type.id;

                return (
                  <motion.button
                    key={type.id}
                    type="button"
                    onClick={() => handleSelection(setProjectType, type.id)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                      selected
                        ? "border-violet-300/60 bg-violet-300/10 text-white"
                        : "border-white/8 bg-white/2 text-white/55 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={selected ? "text-violet-300" : "text-white/35"}
                    />
                    <span className="mt-4 block text-sm font-semibold">
                      {type.label}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-white/35">
                      {type.description}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm font-medium text-white/75">
              What matters most right now?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {priorities.map((item) => {
                const selected = priority === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelection(setPriority, item.id)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                      selected
                        ? "border-fuchsia-300/60 bg-fuchsia-300/10 text-fuchsia-200"
                        : "border-white/8 text-white/45 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {!isReady ? (
            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsReady(true)}
              className="group relative mt-8 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-linear-to-r from-violet-400 via-fuchsia-400 to-cyan-300 px-5 py-4 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              <span className="ai-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/35 blur-sm" />
              Generate my direction
              <ArrowRight
                size={17}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-2xl border border-violet-300/25 bg-violet-300/8 p-5"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-violet-400 to-cyan-300 text-black">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
                    Your starting direction
                  </p>
                  <h3 className="mt-2 text-xl font-medium text-white">
                    {recommendation.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">
                    {recommendation.summary}
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-cyan-200/70">
                    Suggested toolkit · {recommendation.stack}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-violet-200"
              >
                Turn this into a real project <ArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
