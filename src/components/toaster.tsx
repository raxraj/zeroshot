/**
 * ZeroShot Toaster — renders toast notifications.
 * Must be placed inside a <ToastProvider>.
 *
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 *   <Toaster position="bottom-right" />
 * </ToastProvider>
 * ```
 */
import * as React from "react";
import { X, CheckCircle2, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { useToast, type ToastVariant } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const variantStyles: Record<ToastVariant, string> = {
  default: "border bg-background text-foreground",
  destructive: "border-destructive bg-destructive text-destructive-foreground",
  success: "border-success bg-success text-success-foreground",
  info: "border-info bg-info text-info-foreground",
  warning: "border-warning bg-warning text-warning-foreground",
};

const variantIcons: Record<ToastVariant, React.ReactNode> = {
  default: null,
  destructive: <AlertCircle className="h-4 w-4 shrink-0" />,
  success: <CheckCircle2 className="h-4 w-4 shrink-0" />,
  info: <Info className="h-4 w-4 shrink-0" />,
  warning: <AlertTriangle className="h-4 w-4 shrink-0" />,
};

export type ToasterPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

const positionStyles: Record<ToasterPosition, string> = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
};

export interface ToasterProps {
  /**
   * Position of the toast stack on screen.
   * @default "bottom-right"
   */
  position?: ToasterPosition;

  /**
   * Additional className for the toast container.
   */
  className?: string;
}

export function Toaster({ position = "bottom-right", className }: ToasterProps) {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className={cn(
        "fixed z-[100] flex flex-col gap-2 w-full max-w-sm pointer-events-none",
        positionStyles[position],
        className,
      )}
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            "pointer-events-auto relative flex items-start gap-3 rounded-lg border p-4 shadow-lg transition-all",
            variantStyles[t.variant],
            t.open ? "animate-in fade-in-0 slide-in-from-bottom-2" : "animate-out fade-out-0 slide-out-to-right-full",
          )}
          role="alert"
        >
          {variantIcons[t.variant]}
          <div className="flex-1 grid gap-1">
            {t.title && <p className="text-sm font-semibold">{t.title}</p>}
            {t.description && <p className="text-sm opacity-90">{t.description}</p>}
          </div>
          {t.action}
          <button
            onClick={() => dismiss(t.id)}
            className="absolute right-2 top-2 rounded-sm p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Close notification"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
}
