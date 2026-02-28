import type { Meta, StoryObj } from "@storybook/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { Button } from "./button";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Overlays/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/primitives</div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@radix-ui/colors</div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">@stitches/react</div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const WithButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[400px] space-y-2">
        <CollapsibleTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            Show Details
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border p-4">
            <h4 className="font-semibold mb-2">Additional Information</h4>
            <p className="text-sm text-muted-foreground">
              This is some additional information that was hidden. You can put any content here including forms,
              images, or other components.
            </p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const FAQ: Story = {
  render: () => {
    return (
      <div className="w-[500px] space-y-4">
        {[
          {
            question: "What is ZeroShot?",
            answer:
              "This is a collection of reusable UI components built with React, TypeScript, and Tailwind CSS. It's designed to help you build applications faster.",
          },
          {
            question: "How do I install it?",
            answer: "You can install it using npm or yarn. Simply run: npm install zero-shot",
          },
          {
            question: "Is it customizable?",
            answer:
              "Yes! All components are fully customizable using Tailwind CSS classes and CSS variables. You can easily adapt them to match your brand.",
          },
        ].map((item, index) => {
          const [isOpen, setIsOpen] = useState(false);
          return (
            <Collapsible key={index} open={isOpen} onOpenChange={setIsOpen} className="border rounded-lg p-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <h3 className="font-semibold">{item.question}</h3>
                {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <p className="text-sm text-muted-foreground">{item.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    );
  },
};

export const DefaultOpen: Story = {
  render: () => {
    return (
      <Collapsible defaultOpen className="w-[350px] space-y-2">
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Settings</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 text-sm">Notifications: Enabled</div>
          <div className="rounded-md border px-4 py-2 text-sm">Theme: Dark Mode</div>
          <div className="rounded-md border px-4 py-2 text-sm">Language: English</div>
        </CollapsibleContent>
      </Collapsible>
    );
  },
};
