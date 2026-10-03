import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "./badge"
import { Button } from "./button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card"
import { Input } from "./input"
import { Label } from "./label"

const meta = {
  title: "Examples/Thai text",
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[28rem]">
      <CardHeader>
        <CardTitle>ด่านที่ 1 ป่าลึก</CardTitle>
        <CardDescription>เก็บเหรียญให้ครบ 10 เหรียญเพื่อปลดล็อกด่านถัดไป</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-3">
        <div className="flex gap-2">
          <Badge variant="accent">ใหม่</Badge>
          <Badge variant="secondary">ง่าย</Badge>
          <Badge variant="destructive">ยาก</Badge>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="th-name">ชื่อผู้เล่น</Label>
          <Input id="th-name" placeholder="พิมพ์ชื่อของคุณ" />
        </div>
        <p>เหรียญ: 3 / 10 ชีวิต: ♥ ♥ ♥</p>
      </CardContent>
      <CardFooter>
        <Button>เริ่มเล่น</Button>
        <Button variant="outline">ข้าม</Button>
      </CardFooter>
    </Card>
  ),
}
