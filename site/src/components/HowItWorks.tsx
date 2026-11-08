import SectionReveal from "./SectionReveal";
import { Package, Download, Rocket } from "@phosphor-icons/react";

const steps = [
  { n: "01", icon: Package, title: "Install", body: "npm install zero-shot, then import zero-shot/styles.css in your entry file." },
  { n: "02", icon: Download, title: "Import", body: "import { ChatThread, Button, SchemaForm } from \"zero-shot\"." },
  { n: "03", icon: Rocket, title: "Ship", body: "Use compositional JSX or flat config props. Both work on every component." },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionReveal>
        <h2 className="heading-3 max-w-[680px]">Three steps to ship</h2>
      </SectionReveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <SectionReveal key={s.n} delay={i * 80}>
            <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
              <div className="flex items-center justify-between">
                <span className="caption-3 text-white/50">{s.n}</span>
                <s.icon size={20} className="text-white/60" />
              </div>
              <h3 className="title-1 mt-6">{s.title}</h3>
              <p className="body-5 mt-2 text-white/60">{s.body}</p>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}