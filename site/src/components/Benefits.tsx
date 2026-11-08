import { Lightning, FileCode, Robot, ShieldCheck, TreeStructure, Wheelchair } from "@phosphor-icons/react";
import SectionReveal from "./SectionReveal";

const items = [
  { icon: Lightning, title: "Dual API", body: "One component, two ways. Humans compose JSX; LLMs emit config objects that just work." },
  { icon: FileCode, title: "Machine-readable manifest", body: "Inject the schema into your system prompt so models stop guessing props." },
  { icon: Robot, title: "AI native primitives", body: "ChatThread, StreamingText, PromptInput, SchemaForm, CodeBlock, MarkdownView out of the box." },
  { icon: ShieldCheck, title: "Strict TypeScript", body: "strict: true, no any, full inference. Catch mistakes at compile time." },
  { icon: Wheelchair, title: "Accessible by default", body: "Radix UI primitives with WAI-ARIA patterns and keyboard support." },
  { icon: TreeStructure, title: "Modular imports", body: "ESM + CJS. Import only what you use, nothing more." },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionReveal>
        <h2 className="heading-3 max-w-[680px]">Built for humans and LLMs</h2>
        <p className="body-3 mt-4 max-w-[680px] text-white/60">
          Every component solves the same problem from both sides of the prompt.
        </p>
      </SectionReveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <SectionReveal key={it.title} delay={i * 40}>
            <div className="group h-full rounded-2xl border border-white/10 bg-[#181818] p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#000000]/5 text-white">
                <it.icon size={20} />
              </div>
              <h3 className="title-1">{it.title}</h3>
              <p className="body-5 mt-2 text-white/60">{it.body}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}