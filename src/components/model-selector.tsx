/**
 * ZeroShot ModelSelector — AI model picker with plan-gated locked options.
 */
import * as React from "react";
import { Lock } from "lucide-react";
import { cn } from "@/lib/cn";
import { formatCreditMultiplier } from "@/lib/billing";
import { FeatureGatePrompt } from "@/components/feature-gate-prompt";
import { PlanBadge } from "@/components/plan-badge";
import type { PlanTier } from "@/lib/billing";
import type { GatedFeature } from "@/lib/billing";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

export interface ModelOption {
  id: string;
  displayName: string;
  creditMultiplier: number;
  /** When true, option is visible but not selectable */
  locked?: boolean;
  requiredPlan?: string;
}

export interface ModelSelectorProps {
  allowedModels: ModelOption[];
  selectedModelId: string;
  onChange: (modelId: string) => void;
  className?: string;
  currentPlan?: string;
  onUpgradeClick?: () => void;
  /** Feature key shown in gate prompt when a locked model is selected */
  gatedFeature?: GatedFeature;
}

export function ModelSelector({
  allowedModels,
  selectedModelId,
  onChange,
  className,
  currentPlan = "free",
  onUpgradeClick,
  gatedFeature = "advanced_model",
}: ModelSelectorProps) {
  const [gateOpen, setGateOpen] = React.useState(false);
  const [blockedModel, setBlockedModel] = React.useState<ModelOption | null>(null);

  const selectableModels = allowedModels.filter((m) => !m.locked);

  const handleValueChange = (modelId: string) => {
    const model = allowedModels.find((m) => m.id === modelId);
    if (model?.locked) {
      setBlockedModel(model);
      setGateOpen(true);
      return;
    }
    onChange(modelId);
  };

  const handleLockedItemPointer = (model: ModelOption) => {
    setBlockedModel(model);
    setGateOpen(true);
  };

  return (
    <div className={cn("relative space-y-2", className)}>
      <Select value={selectedModelId} onValueChange={handleValueChange}>
        <SelectTrigger className="w-full min-w-[12rem]">
          <SelectValue placeholder="Select model" />
        </SelectTrigger>
        <SelectContent>
          {allowedModels.map((model) => (
            <SelectItem
              key={model.id}
              value={model.id}
              disabled={model.locked}
              className={cn(model.locked && "opacity-60")}
              onPointerDown={
                model.locked
                  ? (e) => {
                      e.preventDefault();
                      handleLockedItemPointer(model);
                    }
                  : undefined
              }
            >
              <span className="flex w-full items-center justify-between gap-3">
                <span className="flex flex-col items-start">
                  <span className={cn(model.locked && "text-muted-foreground")}>
                    {model.displayName}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatCreditMultiplier(model.creditMultiplier)}
                  </span>
                </span>
                {model.locked && model.requiredPlan && (
                  <span className="flex items-center gap-1.5">
                    <Lock className="h-3 w-3 text-muted-foreground" aria-hidden />
                    <PlanBadge
                      plan={model.requiredPlan as PlanTier}
                      className="scale-90"
                      interactive={false}
                    />
                  </span>
                )}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectableModels.length === 0 && (
        <p className="text-xs text-muted-foreground">No models available on your plan.</p>
      )}

      {gateOpen && blockedModel && (
        <FeatureGatePrompt
          variant="overlay"
          feature={gatedFeature}
          currentPlan={currentPlan}
          requiredPlan={blockedModel.requiredPlan ?? "pro_plus"}
          onUpgradeClick={() => {
            setGateOpen(false);
            onUpgradeClick?.();
          }}
        />
      )}
    </div>
  );
}
