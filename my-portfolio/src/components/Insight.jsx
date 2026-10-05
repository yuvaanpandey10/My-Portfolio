import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    tag: "Development",
    title: "How I approach building modern web products",
  },
  {
    tag: "AI",
    title: "Where AI actually adds value to a product",
  },
  {
    tag: "Engineering",
    title: "The details that separate good interfaces from great ones",
  },
];

export default function Insights() {
  return (
    <section className="premium-section px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Insights
        </p>

        <div className="mt-12 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {articles.map((article) => (
            <a
              key={article.title}
              href="#"
              className="premium-row group grid gap-5 py-7 transition-all md:grid-cols-[180px_1fr_auto] md:items-center"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                {article.tag}
              </span>

              <h3 className="text-lg font-medium text-white/70 transition-colors group-hover:text-white sm:text-xl">
                {article.title}
              </h3>

              <ArrowUpRight
                size={19}
                className="text-white/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald-400"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
