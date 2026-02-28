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
declare const ToastContext: React.Context<ToastContextValue | null>;
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
export declare function ToastProvider({ children }: {
    children: React.ReactNode;
}): React.FunctionComponentElement<React.ProviderProps<ToastContextValue | null>>;
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
export declare function useToast(): ToastContextValue;
export { ToastContext };
//# sourceMappingURL=use-toast.d.ts.map