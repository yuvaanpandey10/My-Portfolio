import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Bot, Code2, Gauge, Layers3 } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "End-to-end products built around real user needs, business priorities and a foundation that can grow with demand.",
    output:
      "A production-ready product foundation with clear technical direction.",
  },
  {
    icon: Layers3,
    title: "Premium Interfaces",
    description:
      "Clear, responsive experiences that help users understand the value quickly and move confidently toward action.",
    output:
      "A polished interface system with responsive states and purposeful motion.",
  },
  {
    icon: Bot,
    title: "AI Integration",
    description:
      "Useful AI experiences with thoughtful prompts, reliable outputs, human-friendly states and production-ready API integrations.",
    output: "An AI flow users can trust, measure and improve after launch.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Fast, measurable products with the performance, observability and technical discipline needed to launch and keep improving.",
    output:
      "A faster experience with the signals needed to make confident decisions.",
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  return (
    <section
      id="skills"
      className="premium-section scroll-mt-24 bg-[#080b0a] px-5 py-28 sm:px-8 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Services
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
              From concept
              <span className="text-white/30"> to reality.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40">
            Everything needed to turn a digital idea into a production-ready
            product.
          </p>
        </div>

        <div className="grid border-l border-t border-white/[0.07] sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.button
                type="button"
                aria-expanded={expandedService === service.title}
                onClick={() =>
                  setExpandedService(
                    expandedService === service.title ? null : service.title,
                  )
                }
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="ai-glass-card group border-b border-r border-white/[0.07] bg-white/1 p-7 text-left transition-colors duration-500 hover:bg-white/2.5 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="rounded-xl border border-white/10 bg-white/3 p-3">
                    <Icon size={21} className="text-emerald-400" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className={`text-white/25 transition-transform duration-300 ${
                      expandedService === service.title
                        ? "-translate-y-1 translate-x-1 text-emerald-300"
                        : "group-hover:-translate-y-1 group-hover:translate-x-1"
                    }`}
                  />
                </div>

                <h3 className="mt-12 text-xl font-medium">{service.title}</h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/40">
                  {service.description}
                </p>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedService === service.title ? "auto" : 0,
                    opacity: expandedService === service.title ? 1 : 0,
                    marginTop: expandedService === service.title ? 24 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-emerald-300/15 pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300/70">
                      Typical outcome
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {service.output}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white">
                      Explore the approach <ArrowUpRight size={14} />
                    </span>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
