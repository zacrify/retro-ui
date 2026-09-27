import type { Meta, StoryObj } from "@storybook/react-vite"

import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "ENTER YOUR NAME" },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="player">Player name</Label>
      <Input id="player" {...args} />
    </div>
  ),
}

export const Invalid: Story = { args: { "aria-invalid": true, defaultValue: "???" } }
export const Disabled: Story = { args: { disabled: true, defaultValue: "LOCKED" } }
