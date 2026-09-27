import type { Meta, StoryObj } from "@storybook/react-vite"

import { Progress } from "./progress"

const meta = {
  title: "UI/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: { value: 60 },
  argTypes: { value: { control: { type: "range", min: 0, max: 100 } } },
  decorators: [(Story) => <div className="w-80"><Story /></div>],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Full: Story = { args: { value: 100 } }
export const Empty: Story = { args: { value: 0 } }
