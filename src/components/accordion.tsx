import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * A single item definition for the Accordion Config API.
 */
export interface AccordionItemDef {
  /** Unique value identifier for this item */
  value: string;
  /** Text or element to show in the trigger/header */
  trigger: React.ReactNode;
  /** Content revealed when expanded */
  content: React.ReactNode;
  /** Whether this item is disabled */
  disabled?: boolean;
}

/**
 * Props for the ZeroShot Accordion component.
 *
 * @example Compositional API:
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>What is ZeroShot?</AccordionTrigger>
 *     <AccordionContent>An AI-native component library.</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Accordion
 *   type="single"
 *   collapsible
 *   items={[
 *     { value: "q1", trigger: "What is ZeroShot?", content: "An AI-native component library." },
 *     { value: "q2", trigger: "Is it free?", content: "Yes, MIT licensed." },
 *   ]}
 * />
 * ```
 */
export type AccordionProps = (
  | React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
) & {
  /**
   * Config API: Array of accordion items to render.
   * When provided, auto-generates AccordionItem, AccordionTrigger, and AccordionContent.
   * If `children` is also provided, `children` takes precedence.
   */
  items?: AccordionItemDef[];
};

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  AccordionProps
>(({ items, children, ...props }, ref) => {
  // Config API mode
  if (items && !children) {
    return (
      <AccordionPrimitive.Root ref={ref} {...props}>
        {items.map((item) => (
          <AccordionPrimitive.Item key={item.value} value={item.value} disabled={item.disabled} className="border-b">
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180">
                {item.trigger}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionPrimitive.Content className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="pb-4 pt-0">{item.content}</div>
            </AccordionPrimitive.Content>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    );
  }

  // Compositional API mode
  return (
    <AccordionPrimitive.Root ref={ref} {...props}>
      {children}
    </AccordionPrimitive.Root>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
