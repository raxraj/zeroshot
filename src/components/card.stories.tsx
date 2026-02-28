import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card";
import { Button } from "./button";
import { Badge } from "./badge";
import { Avatar, AvatarFallback } from "./avatar";

const meta: Meta<typeof Card> = {
  title: "Components/Display/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card component.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">Footer content</p>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>A simple card with just a title and content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithoutDescription: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Without Description</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card doesn't have a description in the header.</p>
      </CardContent>
    </Card>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Confirm Action</CardTitle>
        <CardDescription>Are you sure you want to proceed?</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">This action cannot be undone. Please review carefully.</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button>Confirm</Button>
      </CardFooter>
    </Card>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>@johndoe</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Software Engineer • San Francisco</p>
        <div className="flex gap-2 mt-4">
          <Badge>React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="outline">Node.js</Badge>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  ),
};

export const Statistics: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Total Revenue</CardTitle>
        <CardDescription>Last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">$45,231.89</div>
        <p className="text-xs text-muted-foreground mt-1">
          +20.1% from last month
        </p>
      </CardContent>
    </Card>
  ),
};
