import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
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
declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=tabs.d.ts.map