import { motion } from "framer-motion";

const technologies = [
  "React",
  "Node.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "AI APIs",
];

export default function Trust() {
  return (
    <section className="border-y border-white/[0.06] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-7 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-white/25">
          Modern technology stack
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-sm font-medium text-white/35 transition-colors hover:text-white/70"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}