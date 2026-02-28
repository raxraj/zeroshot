# ZeroShot

The **AI-native** React component library. Every component works two ways:

1. **Compositional API** — sub-components for humans writing JSX
2. **Config API** — flat declarative props that LLMs generate correctly on the first try

Built on Radix UI primitives, Tailwind CSS, and TypeScript with `strict: true`.

---

## Why ZeroShot?

| Problem | ZeroShot Solution |
|---|---|
| LLMs hallucinate component APIs | **Machine-readable manifest** — inject the schema into your system prompt |
| Config objects vs JSX composition tradeoff | **Dual API** — every component supports both |
| No first-class AI app components | **ChatThread, StreamingText, PromptInput, SchemaForm, CodeBlock, MarkdownView** |
| Loose TypeScript, any-heavy libs | **Strict mode**, no `any`, full inference |

## Features

- **Dual API** — Compositional (sub-components) + Config (flat props) on every component
- **9 AI-Native Components** — ChatThread, StreamingText, CodeBlock, MarkdownView, PromptInput, SchemaForm, CopyButton, EmptyState, LoadingOverlay
- **ZeroShotManifest** — JSON schema of all components/props/variants for LLM system prompts
- **40+ Foundation Components** — Accordion, Dialog, Select, Tabs, and more
- **TypeScript Strict** — `strict: true`, `noImplicitAny: true`, `strictNullChecks: true`
- **Accessible** — Radix UI primitives, WAI-ARIA patterns
- **Dark Mode** — CSS variable-based theming with light/dark
- **Tree-Shakeable** — ESM + CJS, import only what you use
- **Zero-Config Toast** — React Context-based, SSR-safe, 6 positions
- **React 18 + 19** — Works with both

## Installation

```bash
npm install zero-shot
```

```bash
npm install react react-dom
```

## Quick Start

```tsx
import { Button, ChatThread, SchemaForm, ToastProvider, Toaster } from "zero-shot";
import "zero-shot/styles.css";

function App() {
  return (
    <ToastProvider>
      {/* Config API — LLMs love this */}
      <Button label="Click me" variant="default" loading={false} />

      {/* Compositional API — humans love this */}
      <Button variant="outline">
        <Icon /> Click me
      </Button>

      {/* AI-native: full chat UI in one component */}
      <ChatThread
        messages={messages}
        loading={isStreaming}
        onSend={handleSend}
      />

      {/* Schema-driven forms */}
      <SchemaForm
        schema={[
          { name: "email", type: "email", label: "Email", required: true },
          { name: "name", type: "text", label: "Name" },
        ]}
        onSubmit={(values) => console.log(values)}
      />

      <Toaster position="bottom-right" />
    </ToastProvider>
  );
}
```

## Dual API Examples

Every core component supports both APIs. Use whichever fits your workflow:

### Button

```tsx
{/* Config API (great for LLMs) */}
<Button label="Save" variant="default" loading={isSaving} icon={<Save />} />

{/* Compositional API (great for custom layouts) */}
<Button variant="outline" size="sm">
  <Save className="mr-2 h-4 w-4" /> Save Draft
</Button>
```

### Dialog

```tsx
{/* Config API */}
<Dialog
  open={open}
  onOpenChange={setOpen}
  title="Confirm Delete"
  description="This action cannot be undone."
  actions={[
    { label: "Cancel", variant: "outline", closeOnClick: true },
    { label: "Delete", variant: "destructive", onClick: handleDelete },
  ]}
/>

{/* Compositional API */}
<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Layout</DialogTitle>
    </DialogHeader>
    {/* full control */}
  </DialogContent>
</Dialog>
```

### Tabs

```tsx
{/* Config API */}
<Tabs
  defaultValue="general"
  items={[
    { value: "general", label: "General", content: <GeneralSettings /> },
    { value: "security", label: "Security", content: <SecuritySettings /> },
  ]}
/>
```

## AI-Native Components

### ChatThread

```tsx
<ChatThread
  messages={[
    { role: "user", content: "Explain React hooks" },
    { role: "assistant", content: "React hooks are functions that..." },
  ]}
  loading={isStreaming}
  onSend={(msg) => sendMessage(msg)}
  autoScroll
/>
```

### StreamingText

```tsx
<StreamingText
  text="Hello, I'm an AI assistant..."
  speed="natural"
  mode="word"
  cursor
/>
```

### PromptInput

```tsx
<PromptInput
  onSubmit={handleSubmit}
  onCancel={handleCancel}
  loading={isGenerating}
  showTokenCount
  maxTokens={4096}
  submitKey="enter"
/>
```

### SchemaForm

```tsx
<SchemaForm
  schema={[
    { name: "email", type: "email", label: "Email", required: true },
    { name: "role", type: "select", label: "Role", options: [
      { value: "admin", label: "Admin" },
      { value: "user", label: "User" },
    ]},
    { name: "bio", type: "textarea", label: "Bio", maxLength: 500 },
  ]}
  columns={2}
  onSubmit={async (values) => await createUser(values)}
  submitLabel="Create Account"
/>
```

### CodeBlock

```tsx
<CodeBlock
  code={`const greeting = "Hello, world!";`}
  language="typescript"
  showLineNumbers
  copyable
  title="example.ts"
/>
```

### MarkdownView

```tsx
<MarkdownView
  content={assistantResponse}
  copyable
/>
```

## ZeroShotManifest

Import the machine-readable manifest for LLM integration:

```ts
import manifest from "zero-shot/manifest";

// Inject into your LLM system prompt:
const systemPrompt = `You are a UI builder. Use these components:\n${JSON.stringify(manifest)}`;
```

## Styling Setup

Import styles in your entry file:

```tsx
import "zero-shot/styles.css";
```

### Configure Tailwind CSS

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/zero-shot/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Component Catalog

### AI-Native Components
| Component | Description |
|---|---|
| `ChatThread` | Full conversation UI with messages, typing indicator, auto-scroll, built-in input |
| `ChatBubble` | Individual message bubble (user/assistant/system) |
| `StreamingText` | Typewriter effect for LLM responses (char/word mode, cursor) |
| `CodeBlock` | Code display with copy, line numbers, language badge, line highlight |
| `CopyButton` | Clipboard copy with visual feedback |
| `MarkdownView` | Zero-dependency Markdown renderer (headings, lists, code blocks, links) |
| `PromptInput` | Auto-resize prompt textarea with token counter, Cmd+Enter, cancel button |
| `SchemaForm` | Declarative schema → full form with validation, grouped fields, 2-column layout |
| `EmptyState` | Empty data placeholder with icon, title, description, action |
| `LoadingOverlay` | Loading overlay with spinner or skeleton mode |

### Core Components (Dual API)
| Component | Config Props |
|---|---|
| `Button` | `label`, `loading`, `icon`, `iconPosition` |
| `Input` | `label`, `error`, `helperText`, `startAdornment`, `endAdornment` |
| `Textarea` | `label`, `error`, `helperText`, `showCount` |
| `Card` | `title`, `description`, `footer` |
| `Dialog` | `title`, `description`, `actions[]` |
| `Select` | `options[]`, `label`, `error`, `placeholder` |
| `Alert` | `title`, `description`, `icon`, `closable`, `onClose` |
| `Badge` | `label`, `dot`, `removable`, `onRemove` |
| `Tabs` | `items[]` with `{ value, label, content, disabled }` |
| `Accordion` | `items[]` with `{ value, trigger, content, disabled }` |

### Foundation Components
Accordion, AlertDialog, Avatar, Breadcrumb, Checkbox, Command, DataTable, Dialog, Drawer, DropdownMenu, Form, HoverCard, Label, Pagination, Popover, Progress, RadioGroup, Resizable, ScrollArea, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Switch, Table, Tabs, Toggle, ToggleGroup, Tooltip

## Theming

ZeroShot uses CSS variables for theming. Override any token:

```css
:root {
  --primary: 220 70% 50%;
  --radius: 0.75rem;

  /* ZeroShot AI tokens */
  --zero-shot-chat-user: 222.2 47.4% 11.2%;
  --zero-shot-chat-assistant: 210 40% 96%;
  --zero-shot-streaming-speed: 30ms;
}
```

Dark mode via the `dark` class on `<html>`.

## Development

```bash
npm run storybook  # Interactive docs at http://localhost:6006
npm run build      # ESM + CJS + types + styles
npm test           # Vitest
```

## License

MIT

## Acknowledgments

ZeroShot is built on [Radix UI](https://www.radix-ui.com/), [Tailwind CSS](https://tailwindcss.com/), [Lucide](https://lucide.dev/), and inspired by [shadcn/ui](https://ui.shadcn.com/).
