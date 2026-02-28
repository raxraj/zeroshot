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
import { cn } from "@/lib/utils";
import { User, Bot, Loader2, Send } from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────

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

// ─── ChatBubble ─────────────────────────────────────────────────────

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

export function ChatBubble({
  role = "user",
  content,
  streaming = false,
  avatar,
  timestamp,
  children,
  className,
  ...props
}: ChatBubbleProps) {
  const isUser = role === "user";
  const isSystem = role === "system";
  const displayContent = children ?? content;

  if (isSystem) {
    return (
      <div className={cn("flex justify-center py-2", className)} {...props}>
        <span className="text-xs text-muted-foreground italic bg-muted px-3 py-1 rounded-full">
          {displayContent}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex gap-3 animate-zero-shot-fade-in",
        isUser ? "justify-end" : "justify-start",
        className,
      )}
      {...props}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zero-shot-chat-assistant flex items-center justify-center">
          {avatar ?? <Bot className="h-4 w-4 text-zero-shot-chat-assistant-foreground" />}
        </div>
      )}
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "bg-zero-shot-chat-user text-zero-shot-chat-user-foreground rounded-br-md"
            : "bg-zero-shot-chat-assistant text-zero-shot-chat-assistant-foreground rounded-bl-md",
        )}
      >
        {streaming && !displayContent ? (
          <div className="flex gap-1 py-1">
            <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0ms] opacity-60" />
            <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:150ms] opacity-60" />
            <span className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:300ms] opacity-60" />
          </div>
        ) : (
          <div className="whitespace-pre-wrap">{displayContent}</div>
        )}
        {streaming && displayContent && (
          <span className="inline-block w-[2px] h-[1em] bg-current align-text-bottom animate-zero-shot-cursor ml-0.5" aria-hidden="true" />
        )}
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zero-shot-chat-user flex items-center justify-center">
          {avatar ?? <User className="h-4 w-4 text-zero-shot-chat-user-foreground" />}
        </div>
      )}
    </div>
  );
}

// ─── ChatInput ──────────────────────────────────────────────────────

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

export function ChatInput({
  onSend,
  placeholder = "Type a message...",
  disabled = false,
  submitOnEnter = true,
  className,
  ...props
}: ChatInputProps) {
  const [value, setValue] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = React.useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend?.(trimmed);
    setValue("");
    // Reset height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }, [value, disabled, onSend]);

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (submitOnEnter && e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit();
      }
    },
    [submitOnEnter, handleSubmit],
  );

  // Auto-resize textarea
  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
  }, []);

  return (
    <div className={cn("flex items-end gap-2 p-4 border-t bg-background", className)} {...props}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={1}
        className="flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[40px] max-h-[200px]"
      />
      <button
        onClick={handleSubmit}
        disabled={disabled || !value.trim()}
        className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors"
        aria-label="Send message"
      >
        {disabled ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
      </button>
    </div>
  );
}

// ─── ChatTimestamp ───────────────────────────────────────────────────

export interface ChatTimestampProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The timestamp to display */
  time: Date | string;
  /** Format: "time" shows HH:MM, "relative" shows "2m ago", "full" shows date+time */
  format?: "time" | "relative" | "full";
}

export function ChatTimestamp({ time, format = "time", className, ...props }: ChatTimestampProps) {
  const date = time instanceof Date ? time : new Date(time);

  let display: string;
  if (format === "relative") {
    const diff = Date.now() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) display = "just now";
    else if (minutes < 60) display = `${minutes}m ago`;
    else if (minutes < 1440) display = `${Math.floor(minutes / 60)}h ago`;
    else display = `${Math.floor(minutes / 1440)}d ago`;
  } else if (format === "full") {
    display = date.toLocaleString();
  } else {
    display = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  return (
    <span className={cn("text-xs text-muted-foreground", className)} {...props}>
      {display}
    </span>
  );
}

// ─── ChatThread (main component) ────────────────────────────────────

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

export function ChatThread({
  messages,
  loading = false,
  onSend,
  inputPlaceholder,
  autoScroll = true,
  emptyState,
  children,
  className,
  ...props
}: ChatThreadProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  React.useEffect(() => {
    if (autoScroll && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages?.length, loading, autoScroll]);

  // Config API mode
  if (messages && !children) {
    return (
      <div className={cn("flex flex-col h-full", className)} {...props}>
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && emptyState}
          {messages.map((msg, i) => (
            <ChatBubble
              key={msg.id ?? i}
              role={msg.role}
              content={msg.content}
              timestamp={msg.timestamp}
              streaming={loading && i === messages.length - 1 && msg.role === "assistant"}
            />
          ))}
          {loading && (messages.length === 0 || messages[messages.length - 1]?.role !== "assistant") && (
            <ChatBubble role="assistant" streaming />
          )}
        </div>
        {onSend && (
          <ChatInput onSend={onSend} placeholder={inputPlaceholder} disabled={loading} />
        )}
      </div>
    );
  }

  // Compositional API mode
  return (
    <div className={cn("flex flex-col h-full", className)} {...props}>
      {children}
    </div>
  );
}
