# @ai-course/retro-ui

Retro 8-bit React UI components. Built on shadcn + Tailwind v4 + Radix.

## Use in an app

1. Install from GitHub (`dist/` is committed, so no build step runs in your app):

```bash
pnpm add "github:zacrify/retro-ui#v0.1.0" tailwindcss @tailwindcss/vite
```

Or, if the lib folder sits next to your app, install locally:

```bash
pnpm add "@ai-course/retro-ui@file:../shared-component"
```

2. Add the Tailwind plugin to `vite.config.ts`:

```ts
import tailwindcss from "@tailwindcss/vite"
export default defineConfig({ plugins: [react(), tailwindcss()] })
```

3. In your app's main CSS file (for example `src/index.css`):

```css
@import "@ai-course/retro-ui/styles.css";
@source "../node_modules/@ai-course/retro-ui/dist";
```

4. Use the components:

```tsx
import { Button, Card, CardContent, Toaster, toast } from "@ai-course/retro-ui"

<Button onClick={() => toast.success("Level up!")}>Press Start</Button>
<Toaster />
```

## Components

Badge, Button, Card, Checkbox, Dialog, Input, Label, Progress, Select, Switch, Table, Tabs, Textarea, Toast (Sonner).

## Develop

Quick start (clone, install, open Storybook):

```bash
git clone https://github.com/zacrify/retro-ui.git && cd retro-ui && pnpm install && pnpm storybook
```

Needs Node 20+ and pnpm (`npm i -g pnpm`).

```bash
pnpm install
pnpm storybook        # http://localhost:6006
pnpm build            # dist/index.js + index.d.ts
pnpm typecheck
```

To release: run `pnpm build`, bump `version` in `package.json`, commit (including `dist/`), then `git tag v0.x.y && git push --tags`. Apps update with `pnpm add github:zacrify/retro-ui#v0.x.y`.

## Theme

Colors, fonts and pixel shadows live in `src/styles.css` under `@theme`.
Fonts: Press Start 2P (headings, buttons) and VT323 (body text), loaded from Google Fonts.
