/**
 * ZeroShot UserCreditBadge — per-user credit usage indicator.
 */
import * as React from "react";
import { cn } from "@/lib/cn";
import { creditUsagePercent, creditsRemaining } from "@/lib/billing";
import { Badge } from "@/components/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/tooltip";

export interface UserCreditBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  creditsUsed: number;
  monthlyCap: number;
  className?: string;
}

export function UserCreditBadge({
  creditsUsed,
  monthlyCap,
  className,
  ...props
}: UserCreditBadgeProps) {
  const percent = creditUsagePercent(creditsUsed, monthlyCap);
  const remaining = creditsRemaining(creditsUsed, monthlyCap);

  const variant =
    percent >= 100 ? "destructive" : percent >= 80 ? "warning" : "secondary";

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn("inline-flex", className)} {...props}>
            <Badge variant={variant} className="tabular-nums">
              {creditsUsed.toLocaleString()} / {monthlyCap.toLocaleString()}
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <p className="font-medium">Your credit usage</p>
          <p className="text-muted-foreground mt-1">
            {creditsUsed.toLocaleString()} used · {remaining.toLocaleString()} remaining
          </p>
          <p className="text-muted-foreground mt-0.5">
            {Math.round(percent)}% of {monthlyCap.toLocaleString()} monthly cap
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
