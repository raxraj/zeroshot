/**
 * ZeroShot Manifest — machine-readable component catalog.
 * Import this and inject it into your LLM's system prompt so it knows
 * every component, prop, variant, and example.
 *
 * Usage:
 *   import manifest from "zero-shot/manifest";
 *   // or: import { zeroShotManifest } from "zero-shot";
 */
import type { ZeroShotManifest } from "./types/manifest";

export const zeroShotManifest: ZeroShotManifest = {
  name: "ZeroShot",
  version: "0.1.0",
  description: "AI-native React component library with Dual API — every component works as composable JSX (for humans) and declarative config (for LLMs).",
  components: [
    // ─── AI-Native ────────────────────────────────────────────────
    {
      name: "ChatThread",
      description: "Full conversation UI rendering messages between user and AI assistant with typing indicator, auto-scroll, and optional built-in input.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "messages", type: "ChatMessage[]", required: false, description: "Array of { role, content, timestamp?, id? } messages to render" },
        { name: "loading", type: "boolean", required: false, defaultValue: "false", description: "Show typing indicator for assistant" },
        { name: "onSend", type: "(message: string) => void", required: false, description: "Callback when user sends a message. Shows built-in ChatInput when provided." },
        { name: "autoScroll", type: "boolean", required: false, defaultValue: "true", description: "Auto-scroll to bottom on new messages" },
        { name: "emptyState", type: "ReactNode", required: false, description: "Custom content shown when no messages" },
        { name: "inputPlaceholder", type: "string", required: false, description: "Placeholder text for the built-in input" },
      ],
      examples: [
        {
          title: "Basic chat",
          code: `<ChatThread messages={[{ role: "user", content: "Hello" }, { role: "assistant", content: "Hi! How can I help?" }]} loading={false} onSend={(msg) => sendMessage(msg)} />`,
        },
      ],
    },
    {
      name: "StreamingText",
      description: "Text that appears character-by-character or word-by-word, simulating LLM streaming output.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "text", type: "string", required: true, description: "The full text to stream" },
        { name: "speed", type: "'slow' | 'natural' | 'fast' | number", required: false, defaultValue: "'natural'", description: "Streaming speed" },
        { name: "mode", type: "'char' | 'word'", required: false, defaultValue: "'char'", description: "Stream by character or word" },
        { name: "cursor", type: "boolean", required: false, defaultValue: "true", description: "Show blinking cursor" },
        { name: "onComplete", type: "() => void", required: false, description: "Called when streaming finishes" },
        { name: "immediate", type: "boolean", required: false, defaultValue: "false", description: "Show text immediately without animation" },
      ],
      examples: [
        { title: "Basic streaming", code: `<StreamingText text="Hello, I'm an AI assistant" speed="natural" cursor />` },
      ],
    },
    {
      name: "CodeBlock",
      description: "Code display with optional copy button, line numbers, language badge, and line highlighting.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "code", type: "string", required: true, description: "The code to display" },
        { name: "language", type: "string", required: false, description: "Programming language for the badge" },
        { name: "showLineNumbers", type: "boolean", required: false, defaultValue: "false", description: "Show line numbers" },
        { name: "highlightLines", type: "number[]", required: false, description: "Line numbers to highlight" },
        { name: "copyable", type: "boolean", required: false, defaultValue: "true", description: "Show copy button" },
        { name: "title", type: "string", required: false, description: "Title/filename shown in header" },
        { name: "maxHeight", type: "string", required: false, description: "Max height with overflow scroll" },
      ],
      examples: [
        { title: "Code with copy", code: `<CodeBlock code="console.log('hi')" language="javascript" copyable showLineNumbers />` },
      ],
    },
    {
      name: "PromptInput",
      description: "Specialized textarea for AI prompt composition with auto-resize, token counter, and Cmd+Enter submit.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "onSubmit", type: "(prompt: string) => void", required: false, description: "Callback when prompt is submitted" },
        { name: "onCancel", type: "() => void", required: false, description: "Callback to abort. Shows stop button when loading." },
        { name: "loading", type: "boolean", required: false, defaultValue: "false", description: "Whether a request is in progress" },
        { name: "submitKey", type: "'enter' | 'cmd-enter'", required: false, defaultValue: "'enter'", description: "Submit shortcut" },
        { name: "showTokenCount", type: "boolean", required: false, defaultValue: "false", description: "Show approximate token count" },
        { name: "maxTokens", type: "number", required: false, description: "Max token limit — shows warning when approaching" },
        { name: "placeholder", type: "string", required: false, defaultValue: "'Type your prompt...'", description: "Placeholder text" },
      ],
      examples: [
        { title: "With token counter", code: `<PromptInput onSubmit={handleSubmit} showTokenCount maxTokens={4096} loading={isGenerating} onCancel={abort} />` },
      ],
    },
    {
      name: "SchemaForm",
      description: "Generate full forms from a declarative schema. Supports text, email, select, textarea, checkbox, radio, date, and more.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "schema", type: "SchemaFieldDef[] | SchemaFieldGroup[]", required: true, description: "Array of field definitions or grouped fields" },
        { name: "onSubmit", type: "(values: Record<string, any>) => void | Promise<void>", required: false, description: "Submit handler" },
        { name: "submitLabel", type: "string", required: false, defaultValue: "'Submit'", description: "Submit button label" },
        { name: "columns", type: "1 | 2", required: false, defaultValue: "1", description: "Grid columns" },
        { name: "loading", type: "boolean", required: false, defaultValue: "false", description: "Loading state" },
        { name: "defaultValues", type: "Record<string, any>", required: false, description: "Initial field values" },
        { name: "onCancel", type: "() => void", required: false, description: "Show cancel button when provided" },
      ],
      examples: [
        {
          title: "Contact form",
          code: `<SchemaForm schema={[{ name: "email", type: "email", label: "Email", required: true }, { name: "message", type: "textarea", label: "Message" }]} onSubmit={handleSubmit} />`,
        },
      ],
    },
    {
      name: "MarkdownView",
      description: "Lightweight zero-dependency Markdown renderer. Supports headings, bold, italic, code, code blocks, lists, links, blockquotes.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "content", type: "string", required: true, description: "Markdown content to render" },
        { name: "copyable", type: "boolean", required: false, defaultValue: "true", description: "Copy buttons on code blocks" },
        { name: "showLineNumbers", type: "boolean", required: false, defaultValue: "false", description: "Line numbers in code blocks" },
      ],
      examples: [
        { title: "Render markdown", code: `<MarkdownView content="# Hello\\n\\nThis is **bold** and \`code\`.\\n\\n\\\`\\\`\\\`js\\nconsole.log('hi')\\n\\\`\\\`\\\`" />` },
      ],
    },
    {
      name: "CopyButton",
      description: "Button that copies text to clipboard with a check mark feedback animation.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "text", type: "string", required: true, description: "Text to copy to clipboard" },
        { name: "label", type: "string", required: false, defaultValue: "'Copy'", description: "Button label" },
        { name: "copiedLabel", type: "string", required: false, defaultValue: "'Copied!'", description: "Label shown after copy" },
      ],
      examples: [
        { title: "Basic copy", code: `<CopyButton text="npm install zero-shot" />` },
      ],
    },
    {
      name: "EmptyState",
      description: "Placeholder component for empty data states with icon, title, description, and optional action button.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "title", type: "string", required: true, description: "Main heading" },
        { name: "description", type: "string", required: false, description: "Supporting text" },
        { name: "icon", type: "ReactNode", required: false, description: "Icon or illustration" },
        { name: "action", type: "{ label: string; onClick: () => void; variant? }", required: false, description: "Action button" },
        { name: "size", type: "'sm' | 'md' | 'lg'", required: false, defaultValue: "'md'", description: "Content size" },
      ],
      examples: [
        { title: "No results", code: `<EmptyState title="No results" description="Try a different search" action={{ label: "Clear filters", onClick: clearFilters }} />` },
      ],
    },
    {
      name: "LoadingOverlay",
      description: "Overlay with spinner or skeleton loading mode. Wraps children and shows loading state.",
      category: "ai",
      importPath: "zero-shot",
      props: [
        { name: "loading", type: "boolean", required: true, description: "Whether to show loading state" },
        { name: "blur", type: "boolean", required: false, defaultValue: "true", description: "Blur the content behind" },
        { name: "spinner", type: "boolean", required: false, defaultValue: "true", description: "Show spinner" },
        { name: "skeleton", type: "boolean", required: false, defaultValue: "false", description: "Show skeleton lines instead of spinner" },
        { name: "loadingText", type: "string", required: false, description: "Text shown under spinner" },
      ],
      examples: [
        { title: "Spinner overlay", code: `<LoadingOverlay loading={isLoading} loadingText="Loading data..."><DataTable data={data} /></LoadingOverlay>` },
      ],
    },

    // ─── Core (Dual API) ────────────────────────────────────────────
    {
      name: "Button",
      description: "Button component with variants, sizes, loading spinner, and icon support.",
      category: "form",
      importPath: "zero-shot",
      variants: [
        { name: "variant", values: ["default", "destructive", "outline", "secondary", "ghost", "link", "success"] },
        { name: "size", values: ["default", "sm", "lg", "icon"] },
      ],
      props: [
        { name: "label", type: "string", required: false, description: "Config API: text content" },
        { name: "loading", type: "boolean", required: false, defaultValue: "false", description: "Show loading spinner, disable interactions" },
        { name: "icon", type: "ReactNode", required: false, description: "Icon element" },
        { name: "iconPosition", type: "'left' | 'right'", required: false, defaultValue: "'left'", description: "Icon placement" },
        { name: "asChild", type: "boolean", required: false, description: "Render as child element (Slot)" },
      ],
      examples: [
        { title: "Config API", code: `<Button label="Save" variant="default" loading={isSaving} />` },
        { title: "Compositional", code: `<Button variant="outline" size="sm"><SaveIcon /> Save</Button>` },
      ],
    },
    {
      name: "Input",
      description: "Text input with optional label, error message, helper text, and adornments.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "label", type: "string", required: false, description: "Auto-generate label above input" },
        { name: "error", type: "string", required: false, description: "Error message (colors input red)" },
        { name: "helperText", type: "string", required: false, description: "Helper text below input" },
        { name: "startAdornment", type: "ReactNode", required: false, description: "Element before input" },
        { name: "endAdornment", type: "ReactNode", required: false, description: "Element after input" },
      ],
      examples: [
        { title: "With label and error", code: `<Input label="Email" type="email" error={errors.email} placeholder="you@example.com" />` },
      ],
    },
    {
      name: "Select",
      description: "Dropdown select with Config API support for options array.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "options", type: "SelectOption[]", required: false, description: "Config API: array of { value, label, disabled? }" },
        { name: "label", type: "string", required: false, description: "Label above select" },
        { name: "error", type: "string", required: false, description: "Error message" },
        { name: "placeholder", type: "string", required: false, description: "Placeholder text" },
      ],
      examples: [
        { title: "Config API", code: `<Select label="Country" options={[{ value: "us", label: "United States" }, { value: "uk", label: "United Kingdom" }]} placeholder="Select country..." />` },
      ],
    },
    {
      name: "Dialog",
      description: "Modal dialog with Config API for title, description, and action buttons.",
      category: "overlay",
      importPath: "zero-shot",
      props: [
        { name: "title", type: "string", required: false, description: "Config API: dialog title" },
        { name: "description", type: "string", required: false, description: "Config API: dialog description" },
        { name: "actions", type: "DialogAction[]", required: false, description: "Array of { label, onClick, variant, closeOnClick }" },
      ],
      examples: [
        { title: "Confirm dialog", code: `<Dialog open={open} onOpenChange={setOpen} title="Delete?" description="This cannot be undone." actions={[{ label: "Cancel", variant: "outline", closeOnClick: true }, { label: "Delete", variant: "destructive", onClick: handleDelete }]} />` },
      ],
    },
    {
      name: "Card",
      description: "Card container with Config API for auto-generating header and footer.",
      category: "layout",
      importPath: "zero-shot",
      props: [
        { name: "title", type: "string", required: false, description: "Config API: auto-generate CardHeader with title" },
        { name: "description", type: "string", required: false, description: "Cards subtitle/description" },
        { name: "footer", type: "ReactNode", required: false, description: "Auto-generate CardFooter" },
      ],
      examples: [
        { title: "Config API", code: `<Card title="Profile" description="Your account details" footer={<Button>Save</Button>}>Form content here</Card>` },
      ],
    },
    {
      name: "Tabs",
      description: "Tabbed interface with Config API for items array.",
      category: "layout",
      importPath: "zero-shot",
      props: [
        { name: "items", type: "TabItem[]", required: false, description: "Config API: array of { value, label, content, disabled? }" },
        { name: "defaultValue", type: "string", required: false, description: "Initially active tab value" },
      ],
      examples: [
        { title: "Config API", code: `<Tabs defaultValue="general" items={[{ value: "general", label: "General", content: <GeneralForm /> }, { value: "advanced", label: "Advanced", content: <AdvancedForm /> }]} />` },
      ],
    },
    {
      name: "Toaster",
      description: "Toast notification renderer. Place once in your app tree inside ToastProvider.",
      category: "feedback",
      importPath: "zero-shot",
      props: [
        { name: "position", type: "'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'", required: false, defaultValue: "'bottom-right'", description: "Toast position on screen" },
      ],
      examples: [
        { title: "Setup", code: `<ToastProvider><App /><Toaster position="bottom-right" /></ToastProvider>` },
      ],
    },
  ],
};

export default zeroShotManifest;
