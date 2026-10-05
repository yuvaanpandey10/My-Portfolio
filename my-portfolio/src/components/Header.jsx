import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

import NavLinks from "./NavLinks";
import MobileMenu from "./mobileMenu";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "AI Advisor", href: "#ai-advisor" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "API Systems", href: "#api-systems" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ activePage = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent"
        initial={false}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 shadow-[0_0_18px_rgba(45,212,191,0.7)]"
          style={{
            width: "100%",
            scaleX: smoothScrollProgress,
            transformOrigin: "left",
          }}
        />
      </motion.div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "px-3 pt-3 sm:px-5 lg:px-8" : "px-4 pt-4 sm:px-6 lg:px-10"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ${
            scrolled
              ? "h-16 rounded-2xl border border-[var(--header-border)] bg-[var(--header-bg)] px-4 shadow-[0_20px_60px_rgba(15,23,42,0.16)] backdrop-blur-2xl sm:px-6"
              : "h-16 bg-transparent px-0"
          }`}
        >
          <motion.a
            href="#home"
            onClick={closeMobileMenu}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="group flex shrink-0 items-center gap-3"
            aria-label="Yuvaan Pandey home"
          >
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[var(--brand-box-border)] bg-[var(--brand-box-bg)] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
              <span className="relative z-10 text-sm font-black tracking-[-0.12em] text-[var(--brand-box-text)]">
                Y{"\u200A"}P
              </span>

              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.6 }}
              />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-tight text-[var(--header-text)]">
                Yuvaan Pandey
              </p>
              <div className="mt-0.5 flex flex-col leading-none">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--header-text-soft)]">
                  Full-Stack Developer
                </span>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--header-accent)]">
                  Software Engineer
                </span>
              </div>
            </div>
          </motion.a>

          <div className="hidden items-center gap-2 md:flex">
            <NavLinks items={navItems} activeItem={activePage} />
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border border-[var(--header-accent)]/25 bg-[var(--header-accent)]/8 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--header-accent)] xl:flex">
              <span className="h-2 w-2 rounded-full bg-[var(--header-accent)] shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              Available
            </div>

            <div className="block">
              <ThemeToggle />
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative hidden overflow-hidden rounded-xl bg-[var(--header-cta-bg)] px-5 py-2.5 text-sm font-semibold text-[var(--header-cta-text)] shadow-[0_12px_28px_rgba(16,185,129,0.18)] transition-shadow duration-300 hover:shadow-emerald-400/20 md:block"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={14} />
                Let's Talk
              </span>

              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--header-border)] bg-[var(--header-toggle-bg)] text-[var(--header-text)] transition-colors hover:bg-[var(--header-hover-bg)] md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        open={mobileOpen}
        items={navItems}
        onClose={closeMobileMenu}
      />
    </>
  );
}
