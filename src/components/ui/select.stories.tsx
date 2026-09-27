import type { Meta, StoryObj } from "@storybook/react-vite"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56">
        <SelectValue placeholder="Difficulty" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="easy">Easy</SelectItem>
        <SelectItem value="normal">Normal</SelectItem>
        <SelectItem value="hard">Hard</SelectItem>
        <SelectItem value="nightmare">Nightmare</SelectItem>
      </SelectContent>
    </Select>
  ),
}
