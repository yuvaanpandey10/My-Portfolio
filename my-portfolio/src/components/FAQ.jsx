import { useState } from "react";
import { Plus } from "lucide-react";

const questions = [
  {
    q: "What type of projects do you work on?",
    a: "I focus on modern websites, SaaS products, web applications and AI-powered digital experiences.",
  },
  {
    q: "Do you work with existing products?",
    a: "Yes. I can work with an existing codebase, improve its UI, add features or help modernize the architecture.",
  },
  {
    q: "Can you build both frontend and backend?",
    a: "Yes. My stack is focused around modern frontend development with React and backend development using Node.js and MongoDB.",
  },
  {
    q: "Do you integrate AI features?",
    a: "Yes. AI and LLM APIs can be integrated where they provide meaningful product value.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="premium-section bg-[#080b0a] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
          FAQ
        </p>

        <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
          Questions,
          <span className="text-white/30"> answered.</span>
        </h2>

        <div className="mt-14">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.q}
                className="premium-row border-t border-white/[0.07]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-base font-medium sm:text-lg">
                    {item.q}
                  </span>

                  <Plus
                    size={18}
                    className={`shrink-0 text-white/40 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-sm leading-7 text-white/35">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
