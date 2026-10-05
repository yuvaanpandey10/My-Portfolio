import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.06,
    },
  },

  exit: {
    opacity: 0,
    y: -15,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function MobileMenu({ open, items, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-3 right-3 top-22 z-50 rounded-3xl border border-white/[0.08] bg-[#090c0b]/95 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl md:hidden"
          >
            <motion.nav
              variants={menuVariants}
              className="flex flex-col"
              aria-label="Mobile navigation"
            >
              {items.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  variants={itemVariants}
                  onClick={onClose}
                  className="group flex items-center justify-between border-b border-white/[0.06] py-4 text-lg font-medium text-white/65 transition-colors hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={17}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.a
                variants={itemVariants}
                href="#contact"
                onClick={onClose}
                whileTap={{ scale: 0.97 }}
                className="mt-5 flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-4 font-semibold text-black"
              >
                Let's Talk
              </motion.a>
            </motion.nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
