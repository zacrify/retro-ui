import type { Preview } from "@storybook/react-vite"
import "../src/styles.css"

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        retro: { name: "Retro", value: "#f4f0e4" },
        dark: { name: "Dark", value: "#1a1a1a" },
      },
    },
    controls: { matchers: { color: /(background|color)$/i } },
  },
  initialGlobals: { backgrounds: { value: "retro" } },
}

export default preview
