import { motion } from "framer-motion";

const results = [
  ["50+", "Projects shipped"],
  ["99%", "Performance focused"],
  ["24/7", "Product mindset"],
  ["100%", "Responsive builds"],
];

export default function Results() {
  return (
    <section className="premium-section px-5 py-28 sm:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid border-y border-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {results.map(([number, label], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="premium-row border-b border-white/[0.07] p-8 last:border-b-0 sm:border-r lg:border-b-0 lg:p-10"
            >
              <p className="text-4xl font-medium tracking-tight sm:text-5xl">
                {number}
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/30">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
