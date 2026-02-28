import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "This is a sample text in the textarea.",
    placeholder: "Type your message here...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
  },
};

export const WithRows: Story = {
  args: {
    placeholder: "Larger textarea with 10 rows",
    rows: 10,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2 w-[400px]">
      <label htmlFor="message" className="text-sm font-medium">
        Your message
      </label>
      <Textarea id="message" placeholder="Tell us what you think..." />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="space-y-2 w-[400px]">
      <label htmlFor="error-message" className="text-sm font-medium">
        Feedback
      </label>
      <Textarea id="error-message" placeholder="Your feedback..." className="border-destructive" />
      <p className="text-sm text-destructive">This field is required</p>
    </div>
  ),
};
