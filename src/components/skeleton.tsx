import * as React from "react";

import { cn } from "@/lib/cn";
import { createSimpleComponent } from "@/lib/create-component";

const Skeleton = createSimpleComponent<React.HTMLAttributes<HTMLDivElement>>(
  "Skeleton",
  ({ className, ...props }) => (
    <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
  ),
);

export { Skeleton };
