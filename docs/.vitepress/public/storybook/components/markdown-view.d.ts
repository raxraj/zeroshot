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
export declare function MarkdownView({ content, copyable, showLineNumbers, proseClassName, className, ...props }: MarkdownViewProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=markdown-view.d.ts.map