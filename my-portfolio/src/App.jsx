import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import PageView from "./components/PageView";

const validPages = new Set([
  "home",
  "ai-advisor",
  "about",
  "projects",
  "skills",
  "api-systems",
  "contact",
]);

function getPageFromHash() {
  const page = window.location.hash.replace(/^#/, "");
  return validPages.has(page) ? page : "home";
}

function App() {
  const [page, setPage] = useState("home");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    // Always open the website on Home. Navigation links can still update the hash after load.
    if (window.location.hash !== "#home") {
      window.history.replaceState(null, "", "#home");
    }

    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.history.scrollRestoration = "auto";
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [page]);

  useEffect(() => {
    let frameId;

    const handlePointerMove = (event) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--pointer-x",
          `${event.clientX}px`,
        );
        document.documentElement.style.setProperty(
          "--pointer-y",
          `${event.clientY}px`,
        );
      });
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="site-shell min-h-screen bg-[#0b0c10]">
      <Header activePage={page} />
      <motion.div
        key={page}
        initial={
          shouldReduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 14, filter: "blur(8px)" }
        }
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        }
      >
        {page === "home" ? <Home /> : <PageView page={page} />}
      </motion.div>
    </div>
  );
}

export default App;
