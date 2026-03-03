import * as React from "react";

import { cn } from "@/lib/cn";
import { createComponent, createSimpleComponent } from "@/lib/create-component";

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

const Card = createComponent<HTMLDivElement, CardProps>(
  "Card",
  ({ className, title, description, footer, children, ...props }, ref) => {
    // Config API mode: title triggers auto-structure
    if (title) {
      return (
        <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props}>
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          {children && <div className="p-6 pt-0">{children}</div>}
          {footer && <div className="flex items-center p-6 pt-0">{footer}</div>}
        </div>
      );
    }

    // Compositional API mode: render as-is
    return (
      <div ref={ref} className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)} {...props}>
        {children}
      </div>
    );
  },
);

const CardHeader = createComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  "CardHeader",
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);

const CardTitle = createComponent<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  "CardTitle",
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);

const CardDescription = createComponent<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  "CardDescription",
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);

const CardContent = createComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  "CardContent",
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);

const CardFooter = createComponent<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  "CardFooter",
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

