export default function ServiceCard({
  number,
  title,
  description,
  tags,
}) {
  return (
    <article className="group grid gap-8 py-12 transition-all duration-500 hover:px-4 lg:grid-cols-[100px_1fr_auto]">
      <span className="text-sm text-white/30">
        {number}
      </span>

      <div>
        <h3 className="text-3xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-4 py-2 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
        ↗
      </div>
    </article>
  );
}