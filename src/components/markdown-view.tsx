/**
 * ZeroShot MarkdownView — renders Markdown content with proper styling.
 * Designed for rendering AI assistant responses with code blocks,
 * lists, headings, and inline formatting.
 *
 * This is a lightweight, zero-dependency Markdown renderer — no remark/rehype needed.
 * Covers the subset of Markdown that LLMs actually produce: paragraphs, headings,
 * bold, italic, code, code blocks, lists, links, and blockquotes.
 *
 * @example
 * ```tsx
 * <MarkdownView content="# Hello\n\nThis is **bold** and `inline code`.\n\n```js\nconsole.log('hi');\n```" />
 * ```
 */
import * as React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";

// ─── Types ──────────────────────────────────────────────────────────

export interface MarkdownViewProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Markdown content to render.
   */
  content: string;

  /**
   * Whether code blocks should have copy buttons.
   * @default true
   */
  copyable?: boolean;

  /**
   * Whether to show line numbers in code blocks.
   * @default false
   */
  showLineNumbers?: boolean;

  /**
   * Custom class for prose/typography wrapper.
   */
  proseClassName?: string;
}

// ─── Inline parser ──────────────────────────────────────────────────

/**
 * Parse inline Markdown elements: bold, italic, code, links, strikethrough.
 * Returns React nodes.
 */
function parseInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Regex to match inline elements
  const inlineRegex = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*]+\*)|(\[([^\]]+)\]\(([^)]+)\))|(~~[^~]+~~)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = inlineRegex.exec(text)) !== null) {
    // Text before match
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const key = `inline-${match.index}`;

    if (match[1]) {
      // Inline code
      nodes.push(
        <code
          key={key}
          className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono"
        >
          {match[1].slice(1, -1)}
        </code>,
      );
    } else if (match[2]) {
      // Bold
      nodes.push(<strong key={key}>{match[2].slice(2, -2)}</strong>);
    } else if (match[3]) {
      // Italic
      nodes.push(<em key={key}>{match[3].slice(1, -1)}</em>);
    } else if (match[4]) {
      // Link
      nodes.push(
        <a
          key={key}
          href={match[6]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          {match[5]}
        </a>,
      );
    } else if (match[7]) {
      // Strikethrough
      nodes.push(<del key={key}>{match[7].slice(2, -2)}</del>);
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

// ─── Block parser ───────────────────────────────────────────────────

interface MarkdownBlock {
  type: "paragraph" | "heading" | "code" | "blockquote" | "ul" | "ol" | "hr" | "empty";
  content: string;
  level?: number; // heading level or list depth
  language?: string; // code block language
  items?: string[]; // list items
}

function parseBlocks(markdown: string): MarkdownBlock[] {
  const lines = markdown.split("\n");
  const blocks: MarkdownBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Fenced code block
    const codeMatch = line.match(/^```(\w*)/);
    if (codeMatch) {
      const language = codeMatch[1] || undefined;
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      blocks.push({
        type: "code",
        content: codeLines.join("\n"),
        language,
      });
      continue;
    }

    // Heading
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      blocks.push({
        type: "heading",
        content: headingMatch[2],
        level: headingMatch[1].length,
      });
      i++;
      continue;
    }

    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      blocks.push({ type: "hr", content: "" });
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && (lines[i].startsWith(">") || (lines[i].trim() !== "" && quoteLines.length > 0 && !lines[i].startsWith("#")))) {
        if (lines[i].startsWith(">")) {
          quoteLines.push(lines[i].replace(/^>\s?/, ""));
        } else {
          break;
        }
        i++;
      }
      blocks.push({
        type: "blockquote",
        content: quoteLines.join("\n"),
      });
      continue;
    }

    // Unordered list
    if (/^[\s]*[-*+]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[\s]*[-*+]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[\s]*[-*+]\s/, ""));
        i++;
      }
      blocks.push({
        type: "ul",
        content: "",
        items,
      });
      continue;
    }

    // Ordered list
    if (/^[\s]*\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[\s]*\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[\s]*\d+\.\s/, ""));
        i++;
      }
      blocks.push({
        type: "ol",
        content: "",
        items,
      });
      continue;
    }

    // Paragraph: collect consecutive non-empty, non-special lines
    const paraLines: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith(">") &&
      !/^[-*+]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push({
      type: "paragraph",
      content: paraLines.join("\n"),
    });
  }

  return blocks;
}

// ─── Block renderer ─────────────────────────────────────────────────

function renderBlock(
  block: MarkdownBlock,
  index: number,
  options: { copyable: boolean; showLineNumbers: boolean },
): React.ReactNode {
  switch (block.type) {
    case "heading": {
      const Tag = `h${block.level}` as keyof React.JSX.IntrinsicElements;
      const sizeClasses: Record<number, string> = {
        1: "text-2xl font-bold mt-6 mb-4",
        2: "text-xl font-semibold mt-5 mb-3",
        3: "text-lg font-semibold mt-4 mb-2",
        4: "text-base font-semibold mt-3 mb-2",
        5: "text-sm font-semibold mt-2 mb-1",
        6: "text-sm font-medium mt-2 mb-1",
      };
      return (
        <Tag key={index} className={sizeClasses[block.level ?? 1]}>
          {parseInline(block.content)}
        </Tag>
      );
    }

    case "code":
      return (
        <CodeBlock
          key={index}
          code={block.content}
          language={block.language}
          copyable={options.copyable}
          showLineNumbers={options.showLineNumbers}
          className="my-3"
        />
      );

    case "blockquote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-muted-foreground/30 pl-4 my-3 italic text-muted-foreground"
        >
          {parseInline(block.content)}
        </blockquote>
      );

    case "ul":
      return (
        <ul key={index} className="list-disc list-inside my-2 space-y-1">
          {block.items?.map((item, i) => (
            <li key={i} className="text-sm">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol key={index} className="list-decimal list-inside my-2 space-y-1">
          {block.items?.map((item, i) => (
            <li key={i} className="text-sm">
              {parseInline(item)}
            </li>
          ))}
        </ol>
      );

    case "hr":
      return <hr key={index} className="border-border my-4" />;

    case "paragraph":
      return (
        <p key={index} className="text-sm leading-relaxed my-2">
          {parseInline(block.content)}
        </p>
      );

    default:
      return null;
  }
}

// ─── Component ──────────────────────────────────────────────────────

export function MarkdownView({
  content,
  copyable = true,
  showLineNumbers = false,
  proseClassName,
  className,
  ...props
}: MarkdownViewProps) {
  const blocks = React.useMemo(() => parseBlocks(content), [content]);

  return (
    <div
      className={cn(
        "zero-shot-markdown",
        proseClassName ?? "max-w-none",
        className,
      )}
      {...props}
    >
      {blocks.map((block, i) => renderBlock(block, i, { copyable, showLineNumbers }))}
    </div>
  );
}
