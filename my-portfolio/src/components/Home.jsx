import Hero from "./Hero";

export default function Home() {
  return (
    <main id="home" className="overflow-hidden bg-[#0b0c10] text-[#e5e5e5]">
      <Hero />

      <footer className="border-t border-[var(--header-border)] px-5 py-8 text-center sm:px-8 lg:px-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary-text)]/45">
          Explore the portfolio through the navigation above
        </p>
        <a
          href="#contact"
          className="mt-3 inline-block text-sm font-semibold text-[var(--header-accent)] transition-opacity hover:opacity-70"
        >
          Let&apos;s work together
        </a>
      </footer>
    </main>
  );
}
