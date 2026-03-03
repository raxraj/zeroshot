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
    // ─── Foundation Components ────────────────────────────────────────
    {
      name: "Accordion",
      description: "Vertically stacked collapsible sections. Config API accepts an items array.",
      category: "layout",
      importPath: "zero-shot",
      props: [
        { name: "items", type: "AccordionItemDef[]", required: false, description: "Config API: array of { value, trigger, content, disabled? }" },
        { name: "type", type: "'single' | 'multiple'", required: false, defaultValue: "'single'", description: "Whether one or multiple items can be open at once" },
        { name: "collapsible", type: "boolean", required: false, defaultValue: "false", description: "When type='single', allows closing all items" },
      ],
      examples: [
        { title: "Config API", code: `<Accordion type="single" collapsible items={[{ value: "q1", trigger: "What is ZeroShot?", content: "An AI-native React component library." }]} />` },
      ],
    },
    {
      name: "Alert",
      description: "Contextual feedback message with optional icon, title, description and close button.",
      category: "feedback",
      importPath: "zero-shot",
      props: [
        { name: "variant", type: "'default' | 'destructive' | 'success' | 'warning' | 'info'", required: false, defaultValue: "'default'", description: "Visual severity style" },
        { name: "title", type: "string", required: false, description: "Config API: alert title; auto-selects an icon based on variant" },
        { name: "description", type: "string", required: false, description: "Config API: alert description text" },
        { name: "icon", type: "ReactNode", required: false, description: "Override the auto-selected variant icon" },
        { name: "closable", type: "boolean", required: false, defaultValue: "false", description: "Show a close button" },
        { name: "onClose", type: "() => void", required: false, description: "Callback when close button is clicked" },
      ],
      examples: [
        { title: "Config API", code: `<Alert variant="destructive" title="Error" description="Something went wrong." closable onClose={() => setVisible(false)} />` },
      ],
    },
    {
      name: "AlertDialog",
      description: "Modal dialog that interrupts the user with important content requiring a decision.",
      category: "overlay",
      importPath: "zero-shot",
      props: [
        { name: "open", type: "boolean", required: false, description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Callback when open state changes" },
      ],
      examples: [
        { title: "Basic", code: `<AlertDialog><AlertDialogTrigger>Delete</AlertDialogTrigger><AlertDialogContent><AlertDialogTitle>Are you sure?</AlertDialogTitle><AlertDialogDescription>This cannot be undone.</AlertDialogDescription><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Delete</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>` },
      ],
    },
    {
      name: "Avatar",
      description: "User profile image with automatic fallback to initials or placeholder.",
      category: "display",
      importPath: "zero-shot",
      props: [
        { name: "className", type: "string", required: false, description: "Size and shape overrides (e.g. h-12 w-12)" },
      ],
      examples: [
        { title: "Basic", code: `<Avatar><AvatarImage src="https://example.com/avatar.png" alt="User" /><AvatarFallback>JD</AvatarFallback></Avatar>` },
      ],
    },
    {
      name: "Badge",
      description: "Small status label with optional dot indicator and removable button.",
      category: "display",
      importPath: "zero-shot",
      props: [
        { name: "variant", type: "'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'info' | 'outline'", required: false, defaultValue: "'default'", description: "Visual style" },
        { name: "label", type: "string", required: false, description: "Config API: badge text" },
        { name: "dot", type: "boolean", required: false, defaultValue: "false", description: "Show a status dot" },
        { name: "removable", type: "boolean", required: false, defaultValue: "false", description: "Show a remove button" },
        { name: "onRemove", type: "() => void", required: false, description: "Callback when remove button clicked" },
      ],
      examples: [
        { title: "Config API", code: `<Badge label="Active" variant="success" dot />` },
      ],
    },
    {
      name: "Checkbox",
      description: "Accessible checkbox input built on Radix UI.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "checked", type: "boolean | 'indeterminate'", required: false, description: "Controlled checked state" },
        { name: "onCheckedChange", type: "(checked: boolean | 'indeterminate') => void", required: false, description: "Change callback" },
        { name: "disabled", type: "boolean", required: false, defaultValue: "false", description: "Disable the checkbox" },
      ],
      examples: [
        { title: "Basic", code: `<div className="flex items-center gap-2"><Checkbox id="accept" /><Label htmlFor="accept">Accept terms</Label></div>` },
      ],
    },
    {
      name: "DataTable",
      description: "Sortable, filterable data table with pagination and row selection.",
      category: "data",
      importPath: "zero-shot",
      props: [
        { name: "columns", type: "DataTableColumn<T>[]", required: true, description: "Column definitions" },
        { name: "data", type: "T[]", required: true, description: "Row data" },
        { name: "searchable", type: "boolean", required: false, defaultValue: "false", description: "Show global search input" },
        { name: "searchPlaceholder", type: "string", required: false, description: "Search input placeholder" },
        { name: "pageSize", type: "number", required: false, defaultValue: "10", description: "Rows per page" },
      ],
      examples: [
        { title: "Basic", code: `<DataTable columns={[{ key: "name", header: "Name" }, { key: "email", header: "Email" }]} data={users} searchable />` },
      ],
    },
    {
      name: "Dialog",
      description: "Modal dialog with optional Config API for title, description and action buttons.",
      category: "overlay",
      importPath: "zero-shot",
      props: [
        { name: "open", type: "boolean", required: false, description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Callback when open state changes" },
        { name: "title", type: "string", required: false, description: "Config API: dialog title" },
        { name: "description", type: "string", required: false, description: "Config API: dialog description" },
        { name: "actions", type: "DialogAction[]", required: false, description: "Config API: array of { label, onClick, variant? } buttons" },
      ],
      examples: [
        { title: "Config API", code: `<Dialog open={open} onOpenChange={setOpen} title="Confirm" description="Are you sure?" actions={[{ label: "Cancel", onClick: () => setOpen(false) }, { label: "Confirm", onClick: handleConfirm, variant: "default" }]} />` },
      ],
    },
    {
      name: "Drawer",
      description: "Slide-in panel from the bottom (mobile-friendly) for menus, forms, or content.",
      category: "overlay",
      importPath: "zero-shot",
      props: [
        { name: "open", type: "boolean", required: false, description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Change callback" },
        { name: "direction", type: "'top' | 'bottom' | 'left' | 'right'", required: false, defaultValue: "'bottom'", description: "Drawer slide direction" },
      ],
      examples: [
        { title: "Basic", code: `<Drawer><DrawerTrigger>Open</DrawerTrigger><DrawerContent><DrawerHeader><DrawerTitle>Settings</DrawerTitle></DrawerHeader></DrawerContent></Drawer>` },
      ],
    },
    {
      name: "DropdownMenu",
      description: "Context/action menu triggered by a button with nested sub-menus, checkboxes and radio items.",
      category: "overlay",
      importPath: "zero-shot",
      props: [],
      examples: [
        { title: "Basic", code: `<DropdownMenu><DropdownMenuTrigger asChild><Button variant="outline">Options</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Profile</DropdownMenuItem><DropdownMenuItem>Settings</DropdownMenuItem></DropdownMenuContent></DropdownMenu>` },
      ],
    },
    {
      name: "Label",
      description: "Accessible form label built on Radix UI.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "htmlFor", type: "string", required: false, description: "Associates the label with a form control" },
      ],
      examples: [
        { title: "Basic", code: `<Label htmlFor="email">Email address</Label>` },
      ],
    },
    {
      name: "Pagination",
      description: "Page navigation component with previous/next and numbered page links.",
      category: "navigation",
      importPath: "zero-shot",
      props: [],
      examples: [
        { title: "Basic", code: `<Pagination><PaginationContent><PaginationPrevious href="#" /><PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem><PaginationNext href="#" /></PaginationContent></Pagination>` },
      ],
    },
    {
      name: "Popover",
      description: "Floating content panel anchored to a trigger element.",
      category: "overlay",
      importPath: "zero-shot",
      props: [
        { name: "open", type: "boolean", required: false, description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Change callback" },
      ],
      examples: [
        { title: "Basic", code: `<Popover><PopoverTrigger asChild><Button>Open</Button></PopoverTrigger><PopoverContent>Content here</PopoverContent></Popover>` },
      ],
    },
    {
      name: "Progress",
      description: "Linear progress indicator built on Radix UI.",
      category: "feedback",
      importPath: "zero-shot",
      props: [
        { name: "value", type: "number", required: false, description: "Progress value from 0 to 100" },
      ],
      examples: [
        { title: "Basic", code: `<Progress value={60} />` },
      ],
    },
    {
      name: "RadioGroup",
      description: "Group of radio buttons built on Radix UI.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "value", type: "string", required: false, description: "Controlled selected value" },
        { name: "onValueChange", type: "(value: string) => void", required: false, description: "Change callback" },
      ],
      examples: [
        { title: "Basic", code: `<RadioGroup defaultValue="option-a"><div className="flex items-center gap-2"><RadioGroupItem value="option-a" id="a" /><Label htmlFor="a">Option A</Label></div></RadioGroup>` },
      ],
    },
    {
      name: "ScrollArea",
      description: "Custom-styled scrollable container built on Radix UI.",
      category: "layout",
      importPath: "zero-shot",
      props: [
        { name: "className", type: "string", required: false, description: "Set a fixed height to enable scrolling" },
      ],
      examples: [
        { title: "Basic", code: `<ScrollArea className="h-64"><div>{longContent}</div></ScrollArea>` },
      ],
    },
    {
      name: "Separator",
      description: "Visual divider between sections, horizontal or vertical.",
      category: "layout",
      importPath: "zero-shot",
      props: [
        { name: "orientation", type: "'horizontal' | 'vertical'", required: false, defaultValue: "'horizontal'", description: "Separator direction" },
        { name: "decorative", type: "boolean", required: false, defaultValue: "true", description: "Whether purely decorative (hides from accessibility tree)" },
      ],
      examples: [
        { title: "Basic", code: `<Separator />` },
      ],
    },
    {
      name: "Sheet",
      description: "Side-anchored dialog panel (slide-in from edge) for settings and navigation.",
      category: "overlay",
      importPath: "zero-shot",
      props: [
        { name: "open", type: "boolean", required: false, description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", required: false, description: "Change callback" },
      ],
      examples: [
        { title: "Basic", code: `<Sheet><SheetTrigger asChild><Button>Open</Button></SheetTrigger><SheetContent><SheetHeader><SheetTitle>Edit Profile</SheetTitle></SheetHeader></SheetContent></Sheet>` },
      ],
    },
    {
      name: "Skeleton",
      description: "Loading placeholder that mimics content layout.",
      category: "feedback",
      importPath: "zero-shot",
      props: [
        { name: "className", type: "string", required: false, description: "Shape and size classes" },
      ],
      examples: [
        { title: "Basic", code: `<div className="flex items-center gap-4"><Skeleton className="h-10 w-10 rounded-full" /><div className="space-y-2"><Skeleton className="h-4 w-48" /><Skeleton className="h-4 w-32" /></div></div>` },
      ],
    },
    {
      name: "Slider",
      description: "Range slider input built on Radix UI.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "value", type: "number[]", required: false, description: "Controlled value array" },
        { name: "defaultValue", type: "number[]", required: false, description: "Default value array" },
        { name: "min", type: "number", required: false, defaultValue: "0", description: "Minimum value" },
        { name: "max", type: "number", required: false, defaultValue: "100", description: "Maximum value" },
        { name: "step", type: "number", required: false, defaultValue: "1", description: "Step increment" },
        { name: "onValueChange", type: "(value: number[]) => void", required: false, description: "Change callback" },
      ],
      examples: [
        { title: "Basic", code: `<Slider defaultValue={[50]} max={100} step={1} />` },
      ],
    },
    {
      name: "Switch",
      description: "Toggle switch input built on Radix UI.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "checked", type: "boolean", required: false, description: "Controlled checked state" },
        { name: "onCheckedChange", type: "(checked: boolean) => void", required: false, description: "Change callback" },
        { name: "disabled", type: "boolean", required: false, defaultValue: "false", description: "Disable the switch" },
      ],
      examples: [
        { title: "Basic", code: `<div className="flex items-center gap-2"><Switch id="notifications" /><Label htmlFor="notifications">Notifications</Label></div>` },
      ],
    },
    {
      name: "Table",
      description: "Accessible HTML table with styled header, body, footer, and caption.",
      category: "data",
      importPath: "zero-shot",
      props: [],
      examples: [
        { title: "Basic", code: `<Table><TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Email</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Alice</TableCell><TableCell>alice@example.com</TableCell></TableRow></TableBody></Table>` },
      ],
    },
    {
      name: "Textarea",
      description: "Multi-line text input with optional label, error, helper text, and character counter.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "label", type: "string", required: false, description: "Config API: renders a label above the textarea" },
        { name: "error", type: "string", required: false, description: "Error message with destructive styling" },
        { name: "helperText", type: "string", required: false, description: "Helper text below the textarea" },
        { name: "showCount", type: "boolean", required: false, defaultValue: "false", description: "Show character counter (requires maxLength)" },
        { name: "maxLength", type: "number", required: false, description: "Maximum character count" },
      ],
      examples: [
        { title: "Config API", code: `<Textarea label="Bio" placeholder="Tell us about yourself..." maxLength={500} showCount />` },
      ],
    },
    {
      name: "Tooltip",
      description: "Floating label shown on hover or focus of a trigger element.",
      category: "overlay",
      importPath: "zero-shot",
      props: [
        { name: "content", type: "ReactNode", required: false, description: "Tooltip content" },
        { name: "side", type: "'top' | 'bottom' | 'left' | 'right'", required: false, defaultValue: "'top'", description: "Side the tooltip appears on" },
      ],
      examples: [
        { title: "Basic", code: `<TooltipProvider><Tooltip><TooltipTrigger asChild><Button variant="outline">Hover me</Button></TooltipTrigger><TooltipContent>Helpful information</TooltipContent></Tooltip></TooltipProvider>` },
      ],
    },
    {
      name: "Toggle",
      description: "A two-state button that can be on or off.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "variant", type: "'default' | 'outline'", required: false, defaultValue: "'default'", description: "Visual style" },
        { name: "size", type: "'default' | 'sm' | 'lg'", required: false, defaultValue: "'default'", description: "Size" },
        { name: "pressed", type: "boolean", required: false, description: "Controlled pressed state" },
        { name: "onPressedChange", type: "(pressed: boolean) => void", required: false, description: "Change callback" },
      ],
      examples: [
        { title: "Basic", code: `<Toggle aria-label="Toggle bold"><Bold className="h-4 w-4" /></Toggle>` },
      ],
    },
    {
      name: "ToggleGroup",
      description: "Group of toggle buttons where one or multiple can be selected.",
      category: "form",
      importPath: "zero-shot",
      props: [
        { name: "type", type: "'single' | 'multiple'", required: true, description: "Selection mode" },
        { name: "value", type: "string | string[]", required: false, description: "Controlled value" },
        { name: "onValueChange", type: "(value: string | string[]) => void", required: false, description: "Change callback" },
      ],
      examples: [
        { title: "Basic", code: `<ToggleGroup type="single"><ToggleGroupItem value="left">Left</ToggleGroupItem><ToggleGroupItem value="center">Center</ToggleGroupItem><ToggleGroupItem value="right">Right</ToggleGroupItem></ToggleGroup>` },
      ],
    },
  ],
};

export default zeroShotManifest;
