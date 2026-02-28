import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

/**
 * A single tab item definition for the Config API.
 */
export interface TabItem {
  /** Unique value identifier for this tab */
  value: string;
  /** Display label on the tab trigger */
  label: string;
  /** Content rendered when this tab is active */
  content: React.ReactNode;
  /** Whether this tab is disabled */
  disabled?: boolean;
}

/**
 * Props for the ZeroShot Tabs component.
 *
 * @example Compositional API:
 * ```tsx
 * <Tabs defaultValue="account">
 *   <TabsList>
 *     <TabsTrigger value="account">Account</TabsTrigger>
 *     <TabsTrigger value="password">Password</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="account">Account settings...</TabsContent>
 *   <TabsContent value="password">Password settings...</TabsContent>
 * </Tabs>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Tabs
 *   items={[
 *     { value: "account", label: "Account", content: <AccountForm /> },
 *     { value: "password", label: "Password", content: <PasswordForm /> },
 *   ]}
 *   defaultValue="account"
 * />
 * ```
 */
export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  /**
   * Config API: Array of tab items to render.
   * When provided, auto-generates TabsList, TabsTrigger, and TabsContent.
   * If `children` is also provided, `children` takes precedence.
   */
  items?: TabItem[];
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ items, children, className, ...props }, ref) => {
  // Config API mode
  if (items && !children) {
    return (
      <TabsPrimitive.Root ref={ref} className={className} {...props}>
        <TabsPrimitive.List className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
          {items.map((item) => (
            <TabsPrimitive.Trigger
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              {item.label}
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {items.map((item) => (
          <TabsPrimitive.Content
            key={item.value}
            value={item.value}
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {item.content}
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    );
  }

  // Compositional API mode
  return (
    <TabsPrimitive.Root ref={ref} className={className} {...props}>
      {children}
    </TabsPrimitive.Root>
  );
});
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
