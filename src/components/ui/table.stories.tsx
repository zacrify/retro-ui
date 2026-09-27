import type { Meta, StoryObj } from "@storybook/react-vite"

import { Badge } from "./badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const rows = [
  { rank: 1, name: "AAA", score: 99999, status: "accent" as const },
  { rank: 2, name: "BOB", score: 84210, status: "secondary" as const },
  { rank: 3, name: "ZED", score: 72000, status: "outline" as const },
]

export const Default: Story = {
  render: () => (
    <Table className="w-[32rem]">
      <TableCaption>High scores</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Score</TableHead>
          <TableHead>Badge</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r) => (
          <TableRow key={r.rank}>
            <TableCell>{r.rank}</TableCell>
            <TableCell>{r.name}</TableCell>
            <TableCell>{r.score.toLocaleString()}</TableCell>
            <TableCell><Badge variant={r.status}>#{r.rank}</Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
