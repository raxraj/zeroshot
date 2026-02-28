import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Action button definition for the Dialog Config API.
 */
export interface DialogAction {
  /** Button label text */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Visual variant: "default" renders primary, "outline" renders secondary */
  variant?: "default" | "outline" | "destructive" | "ghost";
  /** When true, this button also closes the dialog */
  closeOnClick?: boolean;
}

/**
 * Props for the ZeroShot Dialog component.
 *
 * @example Compositional API:
 * ```tsx
 * <Dialog>
 *   <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
 *   <DialogContent>
 *     <DialogHeader>
 *       <DialogTitle>Edit Profile</DialogTitle>
 *       <DialogDescription>Make changes to your profile.</DialogDescription>
 *     </DialogHeader>
 *     <div>Form fields here...</div>
 *     <DialogFooter>
 *       <Button type="submit">Save</Button>
 *     </DialogFooter>
 *   </DialogContent>
 * </Dialog>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Dialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Edit Profile"
 *   description="Make changes to your profile."
 *   actions={[
 *     { label: "Cancel", variant: "outline", closeOnClick: true },
 *     { label: "Save", onClick: handleSave },
 *   ]}
 * >
 *   <form>...fields...</form>
 * </Dialog>
 * ```
 */
export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  /**
   * Config API: Dialog title text. When provided, auto-renders DialogHeader with DialogTitle.
   */
  title?: string;

  /**
   * Config API: Dialog description text. Renders below the title.
   */
  description?: string;

  /**
   * Config API: Action buttons rendered in the footer.
   * @example actions={[{ label: "OK", onClick: handleOk }]}
   */
  actions?: DialogAction[];

  /**
   * Additional className applied to the DialogContent wrapper.
   */
  contentClassName?: string;
}

const Dialog = React.forwardRef<
  HTMLDivElement,
  DialogProps
>(({ title, description, actions, contentClassName, children, ...props }, ref) => {
  // Config API mode: title triggers auto-structure
  if (title) {
    return (
      <DialogPrimitive.Root {...props}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            ref={ref}
            className={cn(
              "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
              contentClassName,
            )}
          >
            <div className="flex flex-col space-y-1.5 text-center sm:text-left">
              <DialogPrimitive.Title className="text-lg font-semibold leading-none tracking-tight">
                {title}
              </DialogPrimitive.Title>
              {description && (
                <DialogPrimitive.Description className="text-sm text-muted-foreground">
                  {description}
                </DialogPrimitive.Description>
              )}
            </div>
            {children}
            {actions && actions.length > 0 && (
              <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                {actions.map((action, i) => (
                  <DialogPrimitive.Close key={i} asChild={!action.closeOnClick}>
                    {action.closeOnClick ? (
                      <button
                        className={cn(
                          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2",
                          action.variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                          action.variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                          action.variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
                          (!action.variant || action.variant === "default") && "bg-primary text-primary-foreground hover:bg-primary/90",
                        )}
                        onClick={action.onClick}
                      >
                        {action.label}
                      </button>
                    ) : (
                      <button
                        className={cn(
                          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-10 px-4 py-2",
                          action.variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                          action.variant === "destructive" && "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                          action.variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
                          (!action.variant || action.variant === "default") && "bg-primary text-primary-foreground hover:bg-primary/90",
                        )}
                        onClick={action.onClick}
                      >
                        {action.label}
                      </button>
                    )}
                  </DialogPrimitive.Close>
                ))}
              </div>
            )}
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  }

  // Compositional API mode
  return (
    <DialogPrimitive.Root {...props}>
      {children}
    </DialogPrimitive.Root>
  );
});
Dialog.displayName = "Dialog";

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
