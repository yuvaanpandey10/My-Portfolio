import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="premium-section px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-5xl text-center">
        <Quote className="mx-auto text-emerald-400/50" size={30} />

        <blockquote className="mt-8 text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-5xl">
          “The difference wasn't just the quality of the website. It was the
          thought put into every decision.”
        </blockquote>

        <div className="mt-10">
          <p className="text-sm font-medium">Future Client</p>

          <p className="mt-1 text-xs text-white/30">Founder / Product Lead</p>
        </div>
      </div>
    </section>
  );
}
