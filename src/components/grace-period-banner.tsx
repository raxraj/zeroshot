/**
 * ZeroShot GracePeriodBanner — global warning when org is in grace period.
 */
import * as React from "react";
import { AlertTriangle, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { GRACE_BANNER_DISMISS_KEY } from "@/lib/billing";
import { Button } from "@/components/button";

export interface GracePeriodBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  graceCreditsRemaining: number;
  onContactClick?: () => void;
  /** Override localStorage key for dismiss state */
  dismissStorageKey?: string;
}

function readDismissed(key: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeDismissed(key: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(key, "1");
  } catch {
    /* ignore quota / private mode */
  }
}

export function GracePeriodBanner({
  graceCreditsRemaining,
  onContactClick,
  dismissStorageKey = GRACE_BANNER_DISMISS_KEY,
  className,
  ...props
}: GracePeriodBannerProps) {
  const [dismissed, setDismissed] = React.useState(() => readDismissed(dismissStorageKey));

  if (dismissed) {
    return null;
  }

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
      return;
    }
    if (typeof window !== "undefined") {
      window.location.href = "mailto:billing@dataworm.io?subject=Credit%20top-up";
    }
  };

  const handleDismiss = () => {
    writeDismissed(dismissStorageKey);
    setDismissed(true);
  };

  return (
    <div
      role="alert"
      className={cn(
        "relative flex w-full flex-wrap items-center justify-center gap-3 border-b border-warning/40 bg-warning/15 px-4 py-3 text-sm text-warning-foreground",
        className,
      )}
      {...props}
    >
      <AlertTriangle className="h-4 w-4 shrink-0 text-warning" aria-hidden />
      <p className="flex-1 text-center sm:text-left">
        You&apos;ve used all your credits. Existing sessions will complete but no new
        sessions can be started.
        <span className="ml-1 font-medium">
          {graceCreditsRemaining.toLocaleString()} grace credits remaining.
        </span>
      </p>
      <Button type="button" variant="outline" size="sm" onClick={handleContact}>
        Contact us to top up
      </Button>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-2 rounded-sm p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring sm:static"
        aria-label="Dismiss grace period banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
