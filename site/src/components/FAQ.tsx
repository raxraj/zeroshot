import { useState } from "react";
import SectionReveal from "./SectionReveal";
import { CaretDown } from "@phosphor-icons/react";

const faqs = [
  { q: "What is the dual API?", a: "Every component accepts sub-components (JSX) or a flat config object with props like label, items, and actions. Use whichever fits." },
  { q: "Does it work with React 18 and 19?", a: "Yes. Peer dependencies support both React 18.3 and 19." },
  { q: "Is it tree-shakeable?", a: "Yes. ESM + CJS with named exports, so you import only what you use." },
  { q: "How do I use the manifest with an LLM?", a: "Import manifest from zero-shot/manifest and inject JSON.stringify(manifest) into your system prompt." },
  { q: "Is it accessible?", a: "Built on Radix UI primitives following WAI-ARIA patterns, with keyboard support." },
  { q: "Does it support dark mode?", a: "Yes, via the dark class on html using CSS variables." },
  { q: "What is the license?", a: "MIT." },
  { q: "How is it different from shadcn/ui?", a: "ZeroShot adds a config API and AI native components (chat, streaming, schema forms) on top of Radix primitives." },
  { q: "Can I customize the theme?", a: "Override CSS variables like --primary, --radius, and the --zero-shot-* tokens." },
  { q: "Does it include form validation?", a: "SchemaForm supports required, email, min and max, with react-hook-form and Zod resolvers." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionReveal>
        <h2 className="heading-3">Frequently asked questions</h2>
      </SectionReveal>
      <div className="mt-8 space-y-3">
        {faqs.map((f, i) => (
          <SectionReveal key={f.q} delay={i * 30}>
            <div className="faq-item overflow-hidden bg-[#181818]">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="title-2">{f.q}</span>
                <CaretDown
                  size={18}
                  className={`shrink-0 text-white/60 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden px-5 pb-4">
                  <p className="body-5 text-white/60">{f.a}</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}