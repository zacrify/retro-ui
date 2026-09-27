import type { Meta, StoryObj } from "@storybook/react-vite"
import { HeartIcon, ZapIcon } from "lucide-react"

import { Button } from "./button"

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Press Start" },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "accent", "info", "destructive", "outline", "ghost", "link"],
    },
    size: { control: "select", options: ["sm", "default", "lg", "icon", "icon-sm", "icon-lg"] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="info">Info</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Zap">
        <ZapIcon />
      </Button>
    </div>
  ),
}

export const WithIcon: Story = {
  args: { children: <><HeartIcon /> Continue</> },
}

export const Disabled: Story = { args: { disabled: true } }
