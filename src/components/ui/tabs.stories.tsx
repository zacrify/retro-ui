import type { Meta, StoryObj } from "@storybook/react-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="items" className="w-96">
      <TabsList>
        <TabsTrigger value="items">Items</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
        <TabsTrigger value="map">Map</TabsTrigger>
      </TabsList>
      <TabsContent value="items" className="font-mono-retro text-lg">Potion x3, Sword x1</TabsContent>
      <TabsContent value="stats" className="font-mono-retro text-lg">HP 80 / ATK 12 / DEF 7</TabsContent>
      <TabsContent value="map" className="font-mono-retro text-lg">Forest → Cave → Castle</TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="items" orientation="vertical" className="w-96">
      <TabsList>
        <TabsTrigger value="items">Items</TabsTrigger>
        <TabsTrigger value="stats">Stats</TabsTrigger>
      </TabsList>
      <TabsContent value="items" className="font-mono-retro text-lg">Potion x3, Sword x1</TabsContent>
      <TabsContent value="stats" className="font-mono-retro text-lg">HP 80 / ATK 12 / DEF 7</TabsContent>
    </Tabs>
  ),
}
