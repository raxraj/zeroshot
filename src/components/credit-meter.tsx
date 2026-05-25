/**
 * ZeroShot CreditMeter — org credit usage for the current billing period.
 */
import * as React from "react";
import { AlertTriangle, Ban } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  type BillingStatus,
  creditUsagePercent,
  creditsRemaining,
  formatBillingPeriodEnd,
} from "@/lib/billing";
import { Alert } from "@/components/alert";

export interface CreditMeterProps extends React.HTMLAttributes<HTMLDivElement> {
  creditsUsed: number;
  monthlyCredits: number;
  status: BillingStatus;
  /** ISO date string for billing period end */
  periodEnd: string;
  className?: string;
}

function progressBarClass(percent: number, status: BillingStatus): string {
  if (status === "grace" || status === "blocked") {
    return "bg-destructive";
  }
  if (percent >= 100) return "bg-destructive";
  if (percent >= 80) return "bg-warning";
  return "bg-success";
}

export function CreditMeter({
  creditsUsed,
  monthlyCredits,
  status,
  periodEnd,
  className,
  ...props
}: CreditMeterProps) {
  const percent = creditUsagePercent(creditsUsed, monthlyCredits);
  const remaining = creditsRemaining(creditsUsed, monthlyCredits);
  const barClass = progressBarClass(percent, status);

  return (
    <div className={cn("space-y-3", className)} {...props}>
      {status === "grace" && (
        <Alert variant="warning" title="In grace period — no new sessions" />
      )}
      {status === "blocked" && (
        <Alert
          variant="destructive"
          title="Account blocked — contact admin"
          icon={<Ban className="h-4 w-4" />}
        />
      )}
      {status === "expired" && (
        <Alert
          variant="destructive"
          title="Subscription expired"
          description="Renew your plan to restore credit allocation."
          icon={<AlertTriangle className="h-4 w-4" />}
        />
      )}

      <div className="space-y-2">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className={cn("h-full transition-all", barClass)}
            style={{ width: `${percent}%` }}
            role="progressbar"
            aria-valuenow={Math.round(percent)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Credit usage"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          <span className="font-medium text-foreground">
            {remaining.toLocaleString()} credits remaining
          </span>
          <span className="text-muted-foreground">
            Resets on {formatBillingPeriodEnd(periodEnd)}
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {creditsUsed.toLocaleString()} / {monthlyCredits.toLocaleString()} credits used
        </p>
      </div>
    </div>
  );
}
