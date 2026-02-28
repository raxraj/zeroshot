import * as React from "react";
/**
 * Props for the ZeroShot Card component (Config API mode).
 *
 * @example Compositional API:
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Account</CardTitle>
 *     <CardDescription>Manage your account settings.</CardDescription>
 *   </CardHeader>
 *   <CardContent>...</CardContent>
 *   <CardFooter><Button>Save</Button></CardFooter>
 * </Card>
 * ```
 *
 * @example Config API (AI-optimized):
 * ```tsx
 * <Card
 *   title="Account"
 *   description="Manage your account settings."
 *   footer={<Button>Save</Button>}
 * >
 *   {content}
 * </Card>
 * ```
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Config API: Renders a CardTitle inside a CardHeader.
     * @example <Card title="Settings">...</Card>
     */
    title?: string;
    /**
     * Config API: Renders a CardDescription inside the CardHeader.
     * Only rendered when `title` is also provided.
     * @example <Card title="Settings" description="Manage preferences">...</Card>
     */
    description?: string;
    /**
     * Config API: Renders content inside a CardFooter.
     * @example <Card title="Settings" footer={<Button>Save</Button>}>...</Card>
     */
    footer?: React.ReactNode;
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
//# sourceMappingURL=card.d.ts.map