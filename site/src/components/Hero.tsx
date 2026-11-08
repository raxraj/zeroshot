import { Link } from "react-router-dom";
import { ArrowRight, Code, ChatCircle, FileText } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-[680px]">
            <p className="caption-3 mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#000000]/5 px-3 py-1 text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              AI native React components
            </p>
            <h1 className="heading-1 hero-gradient max-w-[680px]">
              Components LLMs
              <br />
              generate correctly,
              <br />
              every time.
            </h1>
            <p className="body-3 mt-6 max-w-[680px] text-white/70">
              ZeroShot is the AI native React component library. Every component ships with two APIs:
              compositional JSX for humans and flat config props LLMs get right on the first try.
              Built on Radix UI, Tailwind CSS, and strict TypeScript.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 button-md text-white transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-indigo-400"
              >
                Read the docs <ArrowRight size={18} />
              </Link>
              <a
                href="/storybook/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 button-md text-white transition-colors duration-300 hover:bg-[#000000]/5"
              >
                View components
              </a>
            </div>
            <p className="caption-2 mt-6 text-white/50">
              9 AI native components · 40+ foundation primitives · TypeScript strict · MIT licensed
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="perspective-card relative w-full max-w-md rounded-2xl border border-white/10 bg-[#181818] p-5 shadow-2xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <span className="ml-2 caption-5 text-white/50">chat-thread.tsx</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[#000000]/10" />
                  <div className="rounded-xl rounded-tl-sm bg-[#000000]/5 px-3 py-2 body-6 text-white/80">
                    Explain React hooks
                  </div>
                </div>
                <div className="flex items-start justify-end gap-2">
                  <div className="rounded-xl rounded-tr-sm bg-white px-3 py-2 body-6 text-black">
                    React hooks are functions that let you use state and lifecycle in function components.
                  </div>
                  <div className="mt-1 h-6 w-6 shrink-0 rounded-full bg-white/20" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <ChatCircle size={14} className="text-white/50" />
                  <Code size={14} className="text-white/50" />
                  <FileText size={14} className="text-white/50" />
                  <span className="caption-5 text-white/50">ChatThread · StreamingText · SchemaForm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}