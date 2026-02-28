import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>
>(({ children, ...props }, ref) => {
  return (
    <CollapsiblePrimitive.Root ref={ref} {...props}>
      {children}
    </CollapsiblePrimitive.Root>
  );
});
Collapsible.displayName = "Collapsible";

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger ref={ref} className={cn("inline-flex items-center", className)} {...props}>
    {children}
    <ChevronDown className="ml-2 h-4 w-4" />
  </CollapsiblePrimitive.Trigger>
));
CollapsibleTrigger.displayName = "CollapsibleTrigger";

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <CollapsiblePrimitive.Content ref={ref} className={cn("mt-2", className)} {...props}>
    {children}
  </CollapsiblePrimitive.Content>
));
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
