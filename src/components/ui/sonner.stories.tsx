import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "./button"
import { Toaster, toast } from "./sonner"

const meta = {
  title: "UI/Toast",
  component: Toaster,
  tags: ["autodocs"],
  decorators: [(Story) => <><Story /><Toaster /></>],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast("Saved game", { description: "Slot 1" })}>Default</Button>
      <Button variant="accent" onClick={() => toast.success("Level up!")}>Success</Button>
      <Button variant="destructive" onClick={() => toast.error("You died")}>Error</Button>
      <Button variant="secondary" onClick={() => toast.warning("Low HP")}>Warning</Button>
      <Button variant="info" onClick={() => toast.info("New quest")}>Info</Button>
    </div>
  ),
}
