import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";
import { ArrowRight } from "@phosphor-icons/react";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionReveal>
        <div className="rounded-3xl border border-white/10 bg-[#181818] px-6 py-16 text-center md:px-16">
          <h2 className="heading-3">Start building with ZeroShot</h2>
          <p className="body-3 mx-auto mt-4 max-w-[680px] text-white/60">
            Read the docs, explore the components, and ship AI features that LLMs get right on the first try.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
          <p className="caption-2 mt-6 text-white/50">MIT licensed · Free and open source</p>
        </div>
      </SectionReveal>
    </section>
  );
}