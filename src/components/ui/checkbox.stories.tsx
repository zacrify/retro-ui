import type { Meta, StoryObj } from "@storybook/react-vite"

import { Checkbox } from "./checkbox"
import { Label } from "./label"

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center gap-3">
      <Checkbox id="sound" {...args} />
      <Label htmlFor="sound">Sound on</Label>
    </div>
  ),
}

export const Checked: Story = { ...Default, args: { defaultChecked: true } }
export const Disabled: Story = { ...Default, args: { disabled: true } }
