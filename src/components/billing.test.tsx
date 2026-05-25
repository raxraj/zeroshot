import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CreditMeter } from "./credit-meter";
import { UserCreditBadge } from "./user-credit-badge";
import { PlanBadge } from "./plan-badge";
import { FeatureGatePrompt } from "./feature-gate-prompt";
import { GracePeriodBanner } from "./grace-period-banner";

describe("CreditMeter", () => {
  it("shows credits remaining and reset date", () => {
    render(
      <CreditMeter
        creditsUsed={200}
        monthlyCredits={1000}
        status="active"
        periodEnd="2026-06-01T00:00:00.000Z"
      />,
    );
    expect(screen.getByText(/800 credits remaining/)).toBeInTheDocument();
    expect(screen.getByText(/Resets on/)).toBeInTheDocument();
  });

  it("shows grace period warning", () => {
    render(
      <CreditMeter
        creditsUsed={1000}
        monthlyCredits={1000}
        status="grace"
        periodEnd="2026-06-01"
      />,
    );
    expect(screen.getByText(/In grace period/)).toBeInTheDocument();
  });

  it("shows blocked state", () => {
    render(
      <CreditMeter
        creditsUsed={1000}
        monthlyCredits={1000}
        status="blocked"
        periodEnd="2026-06-01"
      />,
    );
    expect(screen.getByText(/Account blocked/)).toBeInTheDocument();
  });
});

describe("UserCreditBadge", () => {
  it("renders usage fraction", () => {
    render(<UserCreditBadge creditsUsed={50} monthlyCap={200} />);
    expect(screen.getByText("50 / 200")).toBeInTheDocument();
  });
});

describe("PlanBadge", () => {
  it("renders plan label", () => {
    render(<PlanBadge plan="pro_plus" interactive={false} />);
    expect(screen.getByText("Pro+")).toBeInTheDocument();
  });

  it("calls onUpgradeClick when clicked", () => {
    const onUpgrade = vi.fn();
    render(<PlanBadge plan="free" onUpgradeClick={onUpgrade} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onUpgrade).toHaveBeenCalledOnce();
  });
});

describe("FeatureGatePrompt", () => {
  it("shows plan requirement message", () => {
    render(
      <FeatureGatePrompt
        feature="analyst"
        currentPlan="free"
        requiredPlan="pro_plus"
      />,
    );
    expect(screen.getByText(/Analyst is locked/)).toBeInTheDocument();
    expect(screen.getByText(/Pro\+/)).toBeInTheDocument();
    expect(screen.getByText(/Free/)).toBeInTheDocument();
  });

  it("fires onUpgradeClick from CTA", () => {
    const onUpgrade = vi.fn();
    render(
      <FeatureGatePrompt
        feature="quirk"
        currentPlan="pro"
        requiredPlan="ultimate"
        onUpgradeClick={onUpgrade}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /Upgrade Plan/i }));
    expect(onUpgrade).toHaveBeenCalledOnce();
  });
});

describe("GracePeriodBanner", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("renders grace message and remaining credits", () => {
    render(<GracePeriodBanner graceCreditsRemaining={42} />);
    expect(screen.getByRole("alert")).toHaveTextContent(/no new sessions/i);
    expect(screen.getByText(/42 grace credits remaining/)).toBeInTheDocument();
  });

  it("dismisses for the session", () => {
    const { rerender } = render(
      <GracePeriodBanner
        graceCreditsRemaining={10}
        dismissStorageKey="test-grace-dismiss"
      />,
    );
    fireEvent.click(screen.getByLabelText(/Dismiss grace period banner/i));
    rerender(
      <GracePeriodBanner
        graceCreditsRemaining={10}
        dismissStorageKey="test-grace-dismiss"
      />,
    );
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
