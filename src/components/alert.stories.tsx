import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Terminal, AlertCircle, InfoIcon, CheckCircle2 } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Overlays/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "Visual style variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[500px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  ),
};

export const InfoVariant: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This feature will be available in the next update.</AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Your changes have been saved successfully.</AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>A new version of the application is available for download.</AlertDescription>
    </Alert>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert className="w-[500px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Terms and Conditions Update</AlertTitle>
      <AlertDescription>
        We've updated our terms and conditions. Please review the changes carefully. By continuing to use our service,
        you agree to the updated terms. If you have any questions, please contact our support team.
      </AlertDescription>
    </Alert>
  ),
};
