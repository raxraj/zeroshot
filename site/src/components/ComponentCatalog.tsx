import SectionReveal from "./SectionReveal";
import { ArrowSquareOut } from "@phosphor-icons/react";

const ai = [
  "ChatThread", "ChatBubble", "StreamingText", "CodeBlock", "CopyButton",
  "MarkdownView", "PromptInput", "SchemaForm", "EmptyState", "LoadingOverlay",
];

const core = [
  "Button", "Input", "Textarea", "Card", "Dialog", "Select", "Alert", "Badge", "Tabs", "Accordion",
];

export default function ComponentCatalog() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionReveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="heading-3">Component catalog</h2>
            <p className="body-3 mt-4 max-w-[680px] text-white/60">
              9 AI native components plus 40+ foundation primitives. Every one supports both APIs.
            </p>
          </div>
          <a
            href="/storybook/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 button-sm text-white transition-colors duration-300 hover:bg-[#000000]/5"
          >
            Browse in Storybook <ArrowSquareOut size={16} />
          </a>
        </div>
      </SectionReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <SectionReveal>
          <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
            <h3 className="title-1 mb-4">AI native</h3>
            <div className="flex flex-wrap gap-2">
              {ai.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-[#000000]/5 px-3 py-1 caption-2 text-white/80">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>
        <SectionReveal delay={60}>
          <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
            <h3 className="title-1 mb-4">Core (dual API)</h3>
            <div className="flex flex-wrap gap-2">
              {core.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-[#000000]/5 px-3 py-1 caption-2 text-white/80">
                  {c}
                </span>
              ))}
              <span className="rounded-full border border-white/10 bg-[#000000]/5 px-3 py-1 caption-2 text-white/50">
                + 30 more
              </span>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}