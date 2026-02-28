/**
 * ZeroShot Toast System — React Context-based toast management.
 *
 * Replaces the previous module-level singleton pattern with proper React Context.
 * This is SSR-safe, supports concurrent mode, and follows React's state model.
 *
 * @example
 * ```tsx
 * // 1. Wrap your app with ToastProvider
 * <ToastProvider>
 *   <App />
 * </ToastProvider>
 *
 * // 2. Use the hook anywhere
 * const { toast, dismiss } = useToast();
 * toast({ title: "Saved!", variant: "success" });
 * ```
 */
import * as React from "react";

/** Visual variant for a toast notification */
export type ToastVariant = "default" | "destructive" | "success" | "info" | "warning";

/** Configuration for creating a new toast */
export interface ToastData {
  /** Unique ID (auto-generated if not provided) */
  id?: string;
  /** Toast title text */
  title?: string;
  /** Toast description/body text */
  description?: string;
  /** Visual variant */
  variant?: ToastVariant;
  /** Auto-dismiss duration in ms. Set to 0 or Infinity to disable. @default 5000 */
  duration?: number;
  /** Action button rendered in the toast */
  action?: React.ReactNode;
}

/** A toast instance with full state */
export interface ToastInstance extends Required<Pick<ToastData, "id">> {
  title?: string;
  description?: string;
  variant: ToastVariant;
  duration: number;
  action?: React.ReactNode;
  open: boolean;
  createdAt: number;
}

/** Context value provided by ToastProvider */
export interface ToastContextValue {
  /** All active toasts */
  toasts: ToastInstance[];
  /** Create a new toast. Returns the toast ID. */
  toast: (data: ToastData) => string;
  /** Dismiss a specific toast by ID, or all toasts if no ID provided */
  dismiss: (id?: string) => void;
  /** Update an existing toast */
  update: (id: string, data: Partial<ToastData>) => void;
}

const ToastContext = React.createContext<ToastContextValue | null>(null);

let toastCounter = 0;
function generateToastId(): string {
  return `zero-shot-toast-${++toastCounter}`;
}

/** Maximum number of visible toasts at once */
const TOAST_LIMIT = 5;

/**
 * Toast context provider. Wrap your app or a section of your app with this.
 *
 * @example
 * ```tsx
 * <ToastProvider>
 *   <App />
 *   <Toaster />
 * </ToastProvider>
 * ```
 */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastInstance[]>([]);
  const timersRef = React.useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const scheduleRemoval = React.useCallback((id: string, duration: number) => {
    if (duration <= 0 || duration === Infinity) return;

    // Clear any existing timer
    const existing = timersRef.current.get(id);
    if (existing) clearTimeout(existing);

    const timer = setTimeout(() => {
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, open: false } : t)));
      // Remove from DOM after animation
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
        timersRef.current.delete(id);
      }, 300);
    }, duration);

    timersRef.current.set(id, timer);
  }, []);

  // Cleanup all timers on unmount
  React.useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const toast = React.useCallback(
    (data: ToastData): string => {
      const id = data.id ?? generateToastId();
      const instance: ToastInstance = {
        id,
        title: data.title,
        description: data.description,
        variant: data.variant ?? "default",
        duration: data.duration ?? 5000,
        action: data.action,
        open: true,
        createdAt: Date.now(),
      };

      setToasts((prev) => [instance, ...prev].slice(0, TOAST_LIMIT));
      scheduleRemoval(id, instance.duration);
      return id;
    },
    [scheduleRemoval],
  );

  const dismiss = React.useCallback((id?: string) => {
    if (id) {
      const timer = timersRef.current.get(id);
      if (timer) clearTimeout(timer);
      timersRef.current.delete(id);
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, open: false } : t)));
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    } else {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current.clear();
      setToasts((prev) => prev.map((t) => ({ ...t, open: false })));
      setTimeout(() => setToasts([]), 300);
    }
  }, []);

  const update = React.useCallback(
    (id: string, data: Partial<ToastData>) => {
      setToasts((prev) =>
        prev.map((t) =>
          t.id === id
            ? {
                ...t,
                ...(data.title !== undefined && { title: data.title }),
                ...(data.description !== undefined && { description: data.description }),
                ...(data.variant !== undefined && { variant: data.variant }),
                ...(data.action !== undefined && { action: data.action }),
                ...(data.duration !== undefined && { duration: data.duration }),
              }
            : t,
        ),
      );
      if (data.duration !== undefined) {
        scheduleRemoval(id, data.duration);
      }
    },
    [scheduleRemoval],
  );

  const contextValue = React.useMemo(
    () => ({ toasts, toast, dismiss, update }),
    [toasts, toast, dismiss, update],
  );

  return React.createElement(ToastContext.Provider, { value: contextValue }, children);
}

/**
 * Hook to access the toast system. Must be used within a ToastProvider.
 *
 * @example
 * ```tsx
 * const { toast, dismiss } = useToast();
 *
 * // Simple toast
 * toast({ title: "Saved successfully", variant: "success" });
 *
 * // With action
 * const id = toast({
 *   title: "Email sent",
 *   description: "Your message has been delivered.",
 *   action: <button onClick={undo}>Undo</button>,
 * });
 *
 * // Dismiss
 * dismiss(id);
 * ```
 */
export function useToast(): ToastContextValue {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a <ToastProvider>. Wrap your app with <ToastProvider>.");
  }
  return context;
}

export { ToastContext };
