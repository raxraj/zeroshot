import { format } from "date-fns";

export type BillingStatus = "active" | "grace" | "blocked" | "expired";
export type PlanTier = "free" | "pro" | "pro_plus" | "ultimate";
export type GatedFeature = "quirk" | "analyst" | "web_search" | "advanced_model";

const PLAN_LABELS: Record<PlanTier, string> = {
  free: "Free",
  pro: "Pro",
  pro_plus: "Pro+",
  ultimate: "Ultimate",
};

const FEATURE_LABELS: Record<GatedFeature, string> = {
  quirk: "Quirk",
  analyst: "Analyst",
  web_search: "Web Search",
  advanced_model: "Advanced Model",
};

export function formatPlanLabel(plan: string): string {
  if (plan in PLAN_LABELS) {
    return PLAN_LABELS[plan as PlanTier];
  }
  return plan.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function formatFeatureLabel(feature: GatedFeature): string {
  return FEATURE_LABELS[feature];
}

export function formatBillingPeriodEnd(periodEnd: string): string {
  const date = new Date(periodEnd);
  if (Number.isNaN(date.getTime())) {
    return periodEnd;
  }
  return format(date, "MMM d, yyyy");
}

export function creditUsagePercent(creditsUsed: number, limit: number): number {
  if (limit <= 0) return 100;
  return Math.min(100, Math.max(0, (creditsUsed / limit) * 100));
}

export function creditsRemaining(creditsUsed: number, limit: number): number {
  return Math.max(0, limit - creditsUsed);
}

export function formatCreditMultiplier(multiplier: number): string {
  if (multiplier <= 1) return "1× credits";
  const rounded = Number.isInteger(multiplier) ? multiplier : multiplier.toFixed(1);
  return `${rounded}× credits`;
}

export const GRACE_BANNER_DISMISS_KEY = "zero-shot-grace-period-banner-dismissed";
