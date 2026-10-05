import { useState } from "react";

export default function PremiumContact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-black px-6 py-32 text-white lg:px-12">

      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            Contact
          </p>

          <h2 className="mt-6 text-5xl font-medium tracking-tight sm:text-6xl lg:text-8xl">
            Let's build
            <br />
            <span className="text-white/30">something exceptional.</span>
          </h2>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mt-20 grid gap-6 md:grid-cols-2"
          >
            <input
              required
              placeholder="Your name"
              className="border-b border-white/15 bg-transparent px-1 py-5 outline-none placeholder:text-white/30 focus:border-white"
            />

            <input
              required
              type="email"
              placeholder="Email address"
              className="border-b border-white/15 bg-transparent px-1 py-5 outline-none placeholder:text-white/30 focus:border-white"
            />

            <input
              placeholder="Company"
              className="border-b border-white/15 bg-transparent px-1 py-5 outline-none placeholder:text-white/30 focus:border-white"
            />

            <input
              placeholder="Project budget"
              className="border-b border-white/15 bg-transparent px-1 py-5 outline-none placeholder:text-white/30 focus:border-white"
            />

            <textarea
              required
              rows="4"
              placeholder="Tell me about your project..."
              className="border-b border-white/15 bg-transparent px-1 py-5 outline-none placeholder:text-white/30 focus:border-white md:col-span-2"
            />

            <button
              type="submit"
              className="group mt-6 flex w-fit items-center gap-5 rounded-full bg-white px-7 py-4 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Start a conversation
              <span className="transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </button>
          </form>
        ) : (
          <div className="mt-20 rounded-[2rem] border border-white/10 p-10">
            <p className="text-3xl font-medium">
              Message received.
            </p>

            <p className="mt-3 text-white/40">
              I'll be in touch soon.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}