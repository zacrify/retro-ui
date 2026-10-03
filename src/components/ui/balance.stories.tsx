import type { Meta, StoryObj } from "@storybook/react-vite"

const meta = {
  title: "Examples/Thai + Latin balance",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const body = "ไข้ 38.5 ไอแห้ง ok fever cough"
const pixel = "ผลตรวจ ATK Result"

export const Default: Story = {
  render: () => (
    <div className="grid gap-6 bg-card p-6">
      <div className="grid gap-1">
        <span className="font-pixel text-[8px] text-muted-foreground">font-mono-retro text-xl (Input / Textarea)</span>
        <p className="font-mono-retro text-xl outline outline-1 outline-dashed outline-info">{body}</p>
      </div>
      <div className="grid gap-1">
        <span className="font-pixel text-[8px] text-muted-foreground">font-mono-retro text-lg (CardContent)</span>
        <p className="font-mono-retro text-lg outline outline-1 outline-dashed outline-info">{body}</p>
      </div>
      <div className="grid gap-1">
        <span className="font-pixel text-[8px] text-muted-foreground">font-pixel text-sm (CardTitle)</span>
        <p className="font-pixel text-sm outline outline-1 outline-dashed outline-info">{pixel}</p>
      </div>
      <div className="grid gap-1">
        <span className="font-pixel text-[8px] text-muted-foreground">font-pixel text-lg</span>
        <p className="font-pixel text-lg outline outline-1 outline-dashed outline-info">{pixel}</p>
      </div>
      <div className="grid gap-1">
        <span className="font-pixel text-[8px] text-muted-foreground">font-pixel text-xs (Button)</span>
        <p className="font-pixel text-xs uppercase outline outline-1 outline-dashed outline-info">{pixel}</p>
      </div>
    </div>
  ),
}
