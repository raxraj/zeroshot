/**
 * ZeroShot PlanBadge — current plan tier pill for header and settings.
 */
import * as React from "react";
import { cn } from "@/lib/cn";
import { type PlanTier, formatPlanLabel } from "@/lib/billing";

export interface PlanBadgeProps {
  plan: PlanTier;
  className?: string;
  /** Opens upgrade flow when the badge is clicked */
  onUpgradeClick?: () => void;
  /** Settings or billing URL when no upgrade handler is provided */
  href?: string;
  /** When false, renders a non-interactive span (e.g. inside menus) */
  interactive?: boolean;
}

const planStyles: Record<PlanTier, string> = {
  free: "border-muted-foreground/30 bg-muted text-muted-foreground hover:bg-muted/80",
  pro: "border-info/40 bg-info/15 text-info hover:bg-info/25",
  pro_plus: "border-purple-500/40 bg-purple-500/15 text-purple-700 dark:text-purple-300 hover:bg-purple-500/25",
  ultimate:
    "border-amber-500/50 bg-amber-500/15 text-amber-800 dark:text-amber-200 hover:bg-amber-500/25",
};

export function PlanBadge({
  plan,
  className,
  onUpgradeClick,
  href,
  interactive: interactiveProp,
}: PlanBadgeProps) {
  const label = formatPlanLabel(plan);
  const interactive =
    interactiveProp ?? Boolean(onUpgradeClick || href);

  const classNames = cn(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    planStyles[plan],
    interactive && "cursor-pointer",
    className,
  );

  if (!interactive) {
    return <span className={classNames}>{label}</span>;
  }

  if (href && !onUpgradeClick) {
    return (
      <a
        href={href}
        className={classNames}
        aria-label={`${label} plan — view billing`}
      >
        {label}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={onUpgradeClick}
      aria-label={`${label} plan — upgrade`}
    >
      {label}
    </button>
  );
}
