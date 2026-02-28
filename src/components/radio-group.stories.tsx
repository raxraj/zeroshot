import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { Label } from "./label";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/Forms/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether the radio group is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium">Choose your plan</label>
      </div>
      <RadioGroup defaultValue="pro">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="free" id="free" />
          <Label htmlFor="free">Free - $0/month</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="pro" id="pro" />
          <Label htmlFor="pro">Pro - $10/month</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enterprise" id="enterprise" />
          <Label htmlFor="enterprise">Enterprise - $50/month</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="d-option-one" />
        <Label htmlFor="d-option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="d-option-two" />
        <Label htmlFor="d-option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="compact" id="compact" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="compact">Compact</Label>
          <p className="text-sm text-muted-foreground">Fits more content on screen</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="comfortable" id="comfortable" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="comfortable">Comfortable</Label>
          <p className="text-sm text-muted-foreground">Balanced spacing and readability</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="spacious" id="spacious" className="mt-1" />
        <div className="space-y-1">
          <Label htmlFor="spacious">Spacious</Label>
          <p className="text-sm text-muted-foreground">Maximum spacing for clarity</p>
        </div>
      </div>
    </RadioGroup>
  ),
};
