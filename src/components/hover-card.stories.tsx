import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { CalendarDays } from "lucide-react";

const meta: Meta<typeof HoverCard> = {
  title: "Components/Overlays/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">Joined December 2021</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Simple: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="underline cursor-pointer">Hover over me</span>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">This is additional information that appears on hover.</p>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const WithDetails: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Product Info</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-semibold">Premium Plan</h4>
          <p className="text-sm text-muted-foreground">Get access to all premium features including:</p>
          <ul className="text-sm list-disc list-inside space-y-1">
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
            <li>Custom integrations</li>
          </ul>
          <div className="pt-2">
            <span className="text-2xl font-bold">$29</span>
            <span className="text-sm text-muted-foreground">/month</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@shadcn</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm text-muted-foreground">Creator of shadcn/ui.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">@vercel</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@vercel</h4>
            <p className="text-sm text-muted-foreground">Develop. Preview. Ship.</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
