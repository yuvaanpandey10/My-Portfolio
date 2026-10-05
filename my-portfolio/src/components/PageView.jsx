import { motion, useReducedMotion } from "framer-motion";
import AIAdvisor from "./AIAdvisor";
import Authority from "./Authority";
import Differentiator from "./Differentiator";
import FAQ from "./FAQ";
import FeaturedWork from "./FeaturedWork";
import FinalCTA from "./FinalCTA";
import Insight from "./Insight";
import Introduction from "./Introduction";
import PremiumAPI from "./PremiumAPI";
import Process from "./Process";
import QuickBrief from "./QuickBrief";
import Result from "./Result";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Trust from "./Trust";

const pageContent = {
  "ai-advisor": [AIAdvisor],
  about: [Introduction, Trust, Differentiator, Authority, Insight],
  projects: [FeaturedWork, Result, Testimonials, Process],
  skills: [Services, Differentiator, FAQ],
  "api-systems": [PremiumAPI, Process],
  contact: [FinalCTA, QuickBrief],
};

export default function PageView({ page }) {
  const sections = pageContent[page] ?? [];
  const shouldReduceMotion = useReducedMotion();

  return (
    <main
      id={page}
      className="min-h-screen overflow-hidden bg-[#0b0c10] text-[#e5e5e5]"
    >
      {sections.map((Section, index) => (
        <motion.div
          key={`${page}-${Section.name}-${index}`}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.04 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            delay: Math.min(index * 0.06, 0.18),
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Section />
        </motion.div>
      ))}
    </main>
  );
}
