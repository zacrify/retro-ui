import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "./label"
import { Switch } from "./switch"

const meta = {
  title: "UI/Switch",
  component: Switch,
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Switch id="music" {...args} />
      <Label htmlFor="music">Music</Label>
    </div>
  ),
}

export const On: Story = { ...Default, args: { defaultChecked: true } }
export const Disabled: Story = { ...Default, args: { disabled: true } }
