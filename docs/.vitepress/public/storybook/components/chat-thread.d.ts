/**
 * ZeroShot ChatThread — renders a conversation between user and AI assistant.
 * The core AI-native component that every AI app needs.
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <ChatThread
 *   messages={[
 *     { role: "user", content: "What is React?" },
 *     { role: "assistant", content: "React is a JavaScript library for building UIs..." },
 *   ]}
 *   loading={isStreaming}
 *   onSend={handleSend}
 * />
 * ```
 *
 * @example Compositional API:
 * ```tsx
 * <ChatThread>
 *   <ChatBubble role="user">What is React?</ChatBubble>
 *   <ChatBubble role="assistant" streaming>React is a JavaScript library...</ChatBubble>
 *   <ChatInput onSend={handleSend} />
 * </ChatThread>
 * ```
 */
import * as React from "react";
/** A single message in a chat conversation */
export interface ChatMessage {
    /** Message role — who sent it */
    role: "user" | "assistant" | "system";
    /** Message content (text or markdown) */
    content: string;
    /** Optional timestamp */
    timestamp?: Date | string;
    /** Message status for UI feedback */
    status?: "sending" | "sent" | "error";
    /** Unique message ID */
    id?: string;
}
export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Who sent this message.
     * @default "user"
     */
    role?: "user" | "assistant" | "system";
    /**
     * Text content (used in config mode). Children take precedence.
     */
    content?: string;
    /**
     * Show streaming indicator (typing dots).
     * @default false
     */
    streaming?: boolean;
    /**
     * Optional avatar element to override the default icon.
     */
    avatar?: React.ReactNode;
    /**
     * Timestamp to display.
     */
    timestamp?: Date | string;
}
export declare function ChatBubble({ role, content, streaming, avatar, timestamp, children, className, ...props }: ChatBubbleProps): import("react/jsx-runtime").JSX.Element;
export interface ChatInputProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Callback fired when the user submits a message.
     */
    onSend?: (message: string) => void;
    /**
     * Placeholder text for the input.
     * @default "Type a message..."
     */
    placeholder?: string;
    /**
     * Disable the input (e.g., while streaming).
     * @default false
     */
    disabled?: boolean;
    /**
     * Submit when Enter is pressed (Shift+Enter for newline).
     * @default true
     */
    submitOnEnter?: boolean;
}
export declare function ChatInput({ onSend, placeholder, disabled, submitOnEnter, className, ...props }: ChatInputProps): import("react/jsx-runtime").JSX.Element;
export interface ChatTimestampProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** The timestamp to display */
    time: Date | string;
    /** Format: "time" shows HH:MM, "relative" shows "2m ago", "full" shows date+time */
    format?: "time" | "relative" | "full";
}
export declare function ChatTimestamp({ time, format, className, ...props }: ChatTimestampProps): import("react/jsx-runtime").JSX.Element;
export interface ChatThreadProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Config API: Array of messages to render.
     * When provided, auto-generates ChatBubbles for each message.
     * If `children` is also provided, `children` takes precedence.
     */
    messages?: ChatMessage[];
    /**
     * Whether the assistant is currently generating a response.
     * Shows a typing indicator.
     * @default false
     */
    loading?: boolean;
    /**
     * Callback fired when the user sends a message (from the built-in ChatInput).
     * If not provided, no input is rendered — use your own ChatInput.
     */
    onSend?: (message: string) => void;
    /**
     * Placeholder text for the built-in input.
     * @default "Type a message..."
     */
    inputPlaceholder?: string;
    /**
     * Auto-scroll to the bottom when new messages are added.
     * @default true
     */
    autoScroll?: boolean;
    /**
     * Custom empty state shown when there are no messages.
     */
    emptyState?: React.ReactNode;
}
export declare function ChatThread({ messages, loading, onSend, inputPlaceholder, autoScroll, emptyState, children, className, ...props }: ChatThreadProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=chat-thread.d.ts.map