import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "./badge"
import { Button } from "./button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Level 1 - The Forest</CardTitle>
        <CardDescription>Collect 10 coins to unlock the next level.</CardDescription>
        <CardAction>
          <Badge variant="accent">New</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Coins: 3 / 10</p>
        <p>Lives: ♥ ♥ ♥</p>
      </CardContent>
      <CardFooter>
        <Button>Play</Button>
        <Button variant="outline">Skip</Button>
      </CardFooter>
    </Card>
  ),
}
