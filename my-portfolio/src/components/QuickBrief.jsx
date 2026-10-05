import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronUp,
  ClipboardList,
  Clock3,
  Mail,
  X,
} from "lucide-react";

const projectOptions = ["Digital product", "AI experience", "Commerce website"];
const timelineOptions = ["ASAP", "2–4 weeks", "1–2 months", "Just exploring"];

export default function QuickBrief() {
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState(projectOptions[0]);
  const [timeline, setTimeline] = useState(timelineOptions[1]);
  const [submitted, setSubmitted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 700);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(`Project brief — ${project}`);
    const body = encodeURIComponent(
      `Hi Yuvaan,\n\nI’m interested in a ${project.toLowerCase()} project.\nMy ideal timeline is ${timeline.toLowerCase()}.\n\nA little more context:\n`,
    );
    return `mailto:yuvvandev10@gmail.com?subject=${subject}&body=${body}`;
  }, [project, timeline]);

  const close = () => {
    setOpen(false);
    setSubmitted(false);
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-[var(--header-border)] bg-[var(--header-bg)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--header-text)] shadow-[0_18px_45px_rgba(15,23,42,0.2)] backdrop-blur-2xl transition-colors hover:border-[var(--header-accent)]/50 sm:bottom-7 sm:right-7"
        aria-label="Open quick project brief"
      >
        <ClipboardList size={16} className="text-[var(--header-accent)]" />
        <span className="hidden sm:inline">Plan a project</span>
        <ArrowUpRight
          size={15}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </motion.button>

      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-[4.75rem] right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--header-border)] bg-[var(--header-bg)] text-[var(--header-text)] shadow-[0_14px_35px_rgba(15,23,42,0.16)] backdrop-blur-2xl transition-colors hover:border-[var(--header-accent)]/50 hover:text-[var(--header-accent)] sm:bottom-[5.5rem] sm:right-9"
            aria-label="Back to top"
          >
            <ChevronUp size={17} />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-end justify-center bg-slate-950/55 p-3 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="quick-brief-title"
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="quick-brief-dialog relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/15 bg-[#11151c] p-5 text-white shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:p-8"
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close project brief"
              >
                <X size={17} />
              </button>

              <div className="flex items-start gap-4 pr-8">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 via-cyan-300 to-violet-400 text-slate-950 shadow-lg shadow-cyan-500/20">
                  <ClipboardList size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                    60-second project brief
                  </p>
                  <h2
                    id="quick-brief-title"
                    className="mt-2 text-2xl font-medium tracking-[-0.03em] sm:text-3xl"
                  >
                    Start with the signal.
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/50">
                    A few details help shape a sharper first conversation.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-7">
                <fieldset>
                  <legend className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <SparkleIcon /> What are we making?
                  </legend>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {projectOptions.map((option) => (
                      <ChoiceButton
                        key={option}
                        label={option}
                        selected={project === option}
                        onClick={() => setProject(option)}
                      />
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="flex items-center gap-2 text-sm font-medium text-white/80">
                    <Clock3 size={15} /> What is the timing?
                  </legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {timelineOptions.map((option) => (
                      <ChoiceButton
                        key={option}
                        label={option}
                        selected={timeline === option}
                        onClick={() => setTimeline(option)}
                        compact
                      />
                    ))}
                  </div>
                </fieldset>
              </div>

              {submitted ? (
                <div className="mt-8 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm text-emerald-100">
                  <div className="flex items-center gap-2 font-semibold">
                    <Check size={17} /> Your brief is ready to send.
                  </div>
                  <p className="mt-2 text-emerald-100/65">
                    Your email client should open with the details pre-filled.
                  </p>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs text-white/35">
                  <CalendarDays size={14} /> No forms. No commitment.
                </div>
                <a
                  href={emailHref}
                  onClick={() => setSubmitted(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all hover:-translate-y-0.5 hover:shadow-cyan-400/25"
                >
                  <Mail size={16} />
                  Send my brief
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function ChoiceButton({ label, selected, onClick, compact = false }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`quick-brief-choice rounded-xl border text-left text-sm transition-all duration-200 ${
        compact ? "px-4 py-2" : "p-3.5"
      } ${
        selected
          ? "quick-brief-choice-selected border-violet-300/60 bg-gradient-to-r from-violet-500/20 to-cyan-400/15 text-white shadow-[0_0_24px_rgba(139,92,246,0.14)]"
          : "quick-brief-choice-muted border-white/10 bg-white/[0.03] text-white/50 hover:border-cyan-300/40 hover:bg-cyan-300/[0.06] hover:text-white"
      }`}
    >
      {selected ? <Check size={14} className="mb-1 text-cyan-300" /> : null}
      {label}
    </motion.button>
  );
}

function SparkleIcon() {
  return <span className="text-sm text-violet-300">✦</span>;
}
