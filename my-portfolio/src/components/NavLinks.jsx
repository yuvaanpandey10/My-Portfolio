import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function NavLinks({ items, activeItem }) {
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Main navigation"
      className="relative flex items-center gap-1 rounded-2xl border border-[var(--header-border)] bg-[var(--header-nav-bg)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]"
    >
      <span className="absolute inset-x-3 top-1 h-px bg-gradient-to-r from-transparent via-[var(--header-accent)]/70 to-transparent" />

      {items.map((item) => {
        const isActive = activeItem === item.href.replace("#", "");

        return (
          <motion.a
            key={item.href}
            href={item.href}
            variants={itemVariants}
            aria-current={isActive ? "page" : undefined}
            className={`group relative overflow-hidden rounded-xl px-4 py-2 text-[13px] font-medium tracking-[0.12em] uppercase transition-all duration-300 ${
              isActive
                ? "text-[var(--header-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]"
                : "text-[var(--header-text-soft)] hover:text-[var(--header-text)]"
            }`}
          >
            <motion.span
              className={`absolute inset-0 -z-10 rounded-xl ${
                isActive
                  ? "bg-gradient-to-r from-[var(--header-accent)]/12 via-[var(--header-accent-soft)]/10 to-[var(--header-surface)]/80"
                  : "bg-[var(--header-hover-bg)] opacity-0 group-hover:opacity-100"
              }`}
              layoutId="navHover"
            />

            <span className="absolute inset-x-2 bottom-1.5 h-px bg-gradient-to-r from-transparent via-[var(--header-accent)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative">{item.label}</span>
          </motion.a>
        );
      })}
    </motion.nav>
  );
}
