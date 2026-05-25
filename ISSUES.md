# Billing System — Frontend Component Issues

## Overview

New UI components needed to surface billing state to org users.
All components go into `bare-ui` (`@dataworm/zero-shot`). Bump version and push to main after implementation.

---

## Issue 1 — `CreditMeter` component

**Priority:** P0

Displays org's current credit usage for the billing period. Used in app header or settings dashboard.

### Props
```ts
interface CreditMeterProps {
  creditsUsed: number;
  monthlyCredits: number;
  status: 'active' | 'grace' | 'blocked' | 'expired';
  periodEnd: string; // ISO date string
  className?: string;
}
```

### Behaviour
- Shows a progress bar: `creditsUsed / monthlyCredits`
- Colour: green (< 80%) → amber (80–100%) → red (grace/blocked)
- `grace` status: shows "In grace period — no new sessions" warning banner
- `blocked` status: shows "Account blocked — contact admin" error state
- Shows `X credits remaining` label + `Resets on <date>`

---

## Issue 2 — `UserCreditBadge` component

**Priority:** P1

Per-user credit usage indicator. Used in user profile dropdown or settings.

### Props
```ts
interface UserCreditBadgeProps {
  creditsUsed: number;
  monthlyCap: number;
  className?: string;
}
```

### Behaviour
- Compact badge showing `creditsUsed / monthlyCap`
- Tooltip with full breakdown on hover

---

## Issue 3 — `PlanBadge` component

**Priority:** P1

Displays current plan tier. Used in header, settings, and upgrade prompts.

### Props
```ts
interface PlanBadgeProps {
  plan: 'free' | 'pro' | 'pro_plus' | 'ultimate';
  className?: string;
}
```

### Behaviour
- Colour-coded pill: Free (grey) → Pro (blue) → Pro+ (purple) → Ultimate (gold)
- Clickable → opens upgrade modal (or links to settings)

---

## Issue 4 — `FeatureGatePrompt` component

**Priority:** P0

Shown when a user tries to access a feature not on their plan (e.g., Analyst mode on Free).

### Props
```ts
interface FeatureGatePromptProps {
  feature: 'quirk' | 'analyst' | 'web_search' | 'advanced_model';
  currentPlan: string;
  requiredPlan: string;
  onUpgradeClick?: () => void;
}
```

### Behaviour
- Inline or modal overlay on the locked feature
- Shows: "This feature requires **Pro+**. You're on **Free**."
- CTA button: "Upgrade Plan" → `onUpgradeClick` or mailto/contact link for manual billing

---

## Issue 5 — `GracePeriodBanner` component

**Priority:** P0

Full-width warning banner shown globally when org is in grace period.

### Props
```ts
interface GracePeriodBannerProps {
  graceCreditsRemaining: number;
  onContactClick?: () => void;
}
```

### Behaviour
- Amber banner at top of app: "You've used all your credits. Existing sessions will complete but no new sessions can be started."
- Shows remaining grace credits
- CTA: "Contact us to top up"
- Dismissible per session (localStorage flag)

---

## Issue 6 — `ModelSelector` component

**Priority:** P1

Dropdown for users to choose their preferred AI model within their plan's allowed models.

### Props
```ts
interface ModelSelectorProps {
  allowedModels: Array<{ id: string; displayName: string; creditMultiplier: number }>;
  selectedModelId: string;
  onChange: (modelId: string) => void;
  className?: string;
}
```

### Behaviour
- Shows model name + relative cost indicator (e.g., "5× credits" for GPT-4o vs baseline)
- Locked models (outside plan) shown greyed with plan badge — clicking shows `FeatureGatePrompt`
