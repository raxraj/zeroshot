import SectionReveal from "@/components/SectionReveal";

export default function Docs() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
      <SectionReveal>
        <h1 className="heading-2">Documentation</h1>
        <p className="body-3 mt-4 text-white/60">
          Get started with ZeroShot, learn the dual API, and explore the component catalog.
        </p>
      </SectionReveal>

      <SectionReveal>
        <h2 className="heading-5 mt-12">Installation</h2>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#181818] p-4 font-mono text-sm text-white/80">
npm install zero-shot
        </pre>
        <p className="body-5 mt-3 text-white/60">Import styles in your entry file:</p>
        <pre className="mt-2 overflow-x-auto rounded-xl border border-white/10 bg-[#181818] p-4 font-mono text-sm text-white/80">
import "zero-shot/styles.css";
        </pre>
      </SectionReveal>

      <SectionReveal>
        <h2 className="heading-5 mt-12">Quick start</h2>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#181818] p-4 font-mono text-sm text-white/80">{`import { Button, ChatThread, SchemaForm } from "zero-shot";

function App() {
  return (
    <>
      <Button label="Save" variant="default" loading={false} />
      <ChatThread messages={messages} loading={isStreaming} onSend={send} />
      <SchemaForm schema={schema} onSubmit={submit} />
    </>
  );
}`}</pre>
      </SectionReveal>

      <SectionReveal>
        <h2 className="heading-5 mt-12">Dual API</h2>
        <p className="body-3 mt-4 text-white/60">
          Every core component supports both compositional JSX and flat config props. Use whichever fits
          your workflow. LLMs generate the config form reliably; humans prefer JSX for custom layouts.
        </p>
      </SectionReveal>

      <SectionReveal>
        <h2 className="heading-5 mt-12">ZeroShotManifest</h2>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#181818] p-4 font-mono text-sm text-white/80">{`import manifest from "zero-shot/manifest";
const systemPrompt = \`You are a UI builder. Use these components:\\n\${JSON.stringify(manifest)}\`;`}</pre>
      </SectionReveal>

      <SectionReveal>
        <h2 className="heading-5 mt-12">Theming</h2>
        <p className="body-3 mt-4 text-white/60">
          Override CSS variables to theme. Dark mode uses the dark class on html.
        </p>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#181818] p-4 font-mono text-sm text-white/80">{`:root {
  --primary: 220 70% 50%;
  --radius: 0.75rem;
}`}</pre>
      </SectionReveal>

      <SectionReveal>
        <h2 className="heading-5 mt-12">Interactive previews</h2>
        <p className="body-3 mt-4 text-white/60">
          Browse every component with live controls in Storybook.
        </p>
        <a
          href="/storybook/"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2.5 button-sm text-white transition-transform duration-300 hover:scale-[1.02]"
        >
          Open Storybook
        </a>
      </SectionReveal>
    </div>
  );
}