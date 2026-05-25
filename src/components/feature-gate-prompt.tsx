/**
 * ZeroShot FeatureGatePrompt — shown when a feature is not on the user's plan.
 */
import * as React from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/cn";
import { type GatedFeature, formatFeatureLabel, formatPlanLabel } from "@/lib/billing";
import { Button } from "@/components/button";

const BILLING_CONTACT_EMAIL = "billing@dataworm.io";

export interface FeatureGatePromptProps extends React.HTMLAttributes<HTMLDivElement> {
  feature: GatedFeature;
  currentPlan: string;
  requiredPlan: string;
  onUpgradeClick?: () => void;
  /** mailto or billing URL; used when onUpgradeClick is not provided */
  upgradeHref?: string;
  variant?: "inline" | "overlay";
}

export function FeatureGatePrompt({
  feature,
  currentPlan,
  requiredPlan,
  onUpgradeClick,
  upgradeHref,
  variant = "inline",
  className,
  ...props
}: FeatureGatePromptProps) {
  const featureLabel = formatFeatureLabel(feature);
  const currentLabel = formatPlanLabel(currentPlan);
  const requiredLabel = formatPlanLabel(requiredPlan);
  const contactHref =
    upgradeHref ?? `mailto:${BILLING_CONTACT_EMAIL}?subject=Plan%20upgrade`;

  const handleUpgrade = () => {
    if (onUpgradeClick) {
      onUpgradeClick();
      return;
    }
    if (typeof window !== "undefined") {
      window.location.href = contactHref;
    }
  };

  return (
    <div
      role="status"
      className={cn(
        "flex flex-col items-center gap-4 rounded-lg border border-dashed border-muted-foreground/40 bg-muted/30 p-6 text-center",
        variant === "overlay" &&
          "absolute inset-0 z-10 justify-center bg-background/90 backdrop-blur-sm",
        className,
      )}
      {...props}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
        <Lock className="h-5 w-5 text-muted-foreground" aria-hidden />
      </div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">{featureLabel} is locked</p>
        <p className="text-sm text-muted-foreground">
          This feature requires <strong className="text-foreground">{requiredLabel}</strong>.
          You&apos;re on <strong className="text-foreground">{currentLabel}</strong>.
        </p>
      </div>
      <Button type="button" onClick={handleUpgrade}>
        Upgrade Plan
      </Button>
    </div>
  );
}
