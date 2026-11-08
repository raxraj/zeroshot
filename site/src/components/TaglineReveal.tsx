import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/lib/gsap";

const words = ["Ship", "AI", "features", "that", "LLMs", "get", "right.", "On", "the", "first", "try."];

export default function TaglineReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCount, setActiveCount] = useState(prefersReducedMotion() ? words.length : 0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setActiveCount(words.length);
      return;
    }
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        // trigger line at 60% of viewport
        const trigger = vh * 0.6;
        const progress = Math.min(1, Math.max(0, (trigger - rect.top) / (rect.height * 0.6)));
        const count = Math.round(progress * words.length);
        setActiveCount(count);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
      aria-label="Tagline"
    >
      <h2 className="heading-2 max-w-[680px] leading-tight">
        {words.map((w, i) => (
          <span
            key={i}
            className={`tagline-word ${i < activeCount ? "active" : ""} mr-[0.25em] inline-block`}
          >
            {w}
          </span>
        ))}
      </h2>
    </section>
  );
}