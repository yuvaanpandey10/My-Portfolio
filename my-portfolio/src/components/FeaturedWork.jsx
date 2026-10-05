import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Layers3 } from "lucide-react";

const projects = [
  {
    category: "SaaS Platform",
    title: "Project Alpha",
    description: "A modern productivity platform built for teams.",
    result:
      "Made complex team workflows feel calm, visible and easy to act on.",
    stack: "React · Node.js · PostgreSQL",
    metric: "−42% time to first action",
  },
  {
    category: "AI Product",
    title: "Intelligence",
    description:
      "An AI-powered experience designed around natural interaction.",
    result:
      "Turned an intimidating AI workflow into a clear, guided conversation.",
    stack: "AI orchestration · React · Streaming UI",
    metric: "3.2× more useful sessions",
  },
  {
    category: "E-Commerce",
    title: "Commerce",
    description: "A conversion-focused shopping experience.",
    result:
      "Created a faster path from discovery to confident purchase decisions.",
    stack: "Headless commerce · Motion · Analytics",
    metric: "+28% checkout completion",
  },
];

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState(0);
  const project = projects[selectedProject];

  return (
    <section
      id="projects"
      className="premium-section scroll-mt-24 bg-[#080b0a] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Featured Work
            </p>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
              Selected projects.
            </h2>
          </div>

          <a
            href="#projects"
            className="hidden items-center gap-2 text-sm text-white/50 transition hover:text-white sm:flex"
          >
            View all
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.button
              type="button"
              onClick={() => setSelectedProject(index)}
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`ai-glass-card group overflow-hidden rounded-3xl border text-left transition-colors duration-300 ${
                selectedProject === index
                  ? "border-emerald-300/45 bg-emerald-300/[0.07]"
                  : "border-white/[0.08] bg-white/[0.025]"
              }`}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent">
                <div className="absolute inset-8 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm transition-transform duration-700 group-hover:scale-105" />

                <ArrowUpRight
                  className="absolute right-7 top-7 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  size={20}
                />
              </div>

              <div className="p-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-medium">{project.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {project.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 grid gap-5 rounded-3xl border border-emerald-300/20 bg-linear-to-br from-emerald-300/10 via-cyan-300/5 to-transparent p-7 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/75">
              <Layers3 size={15} />
              Case study signal
            </div>
            <h3 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl">
              {project.title}: the detail that made it work.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
              {project.result}
            </p>
            <p className="mt-5 text-xs font-medium uppercase tracking-[0.16em] text-white/30">
              Built with · {project.stack}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
              Observed outcome
            </p>
            <p className="mt-3 text-2xl font-medium text-white">
              {project.metric}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-emerald-200/70">
              <CheckCircle2 size={15} />
              Designed around a measurable user moment
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
