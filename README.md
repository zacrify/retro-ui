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

## When to use which variant

Pick by meaning, not by color. Rule of thumb: one `default` button per screen; everything else is `outline` unless it has a specific meaning below.

### Button

| Variant | Color | Use for | Example label |
|---|---|---|---|
| `default` | red | the one primary action on the screen | "Start", "Send" |
| `accent` | green | save / confirm / success | "Save", "Record result" |
| `secondary` | yellow | secondary positive action | "Load sample data" |
| `info` | blue | neutral helper action | "Summarize with AI" |
| `destructive` | dark red | delete, or an urgent/escalation action | "Delete", "Refer to hospital" |
| `outline` | white | cancel / back / toggle, next to a filled button | "Cancel", "Back" |
| `ghost` | none | icon buttons and toolbars, no border | icon only |
| `link` | none | inline navigation | "See all" |

### Badge

| Variant | Color | Use for | Example label |
|---|---|---|---|
| `destructive` | dark red | unread count, positive test result, overdue | "3", "Positive" |
| `secondary` | yellow | in-progress state | "Quarantine, 3 days left" |
| `accent` | green | good news | "New", "Negative" |
| `info` | blue | informational tags | "Imported" |
| `outline` | white | plain counts and neutral labels | "12 items" |
| `default` | red | emphasis when none of the above fits | "Hot" |

### Toast

`toast.success` for completed saves, `toast.error` for failed requests, `toast.warning` for attention, `toast.info` or plain `toast()` for neutral notices. Render `<Toaster />` once in the app.

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
Fonts (Google Fonts): Press Start 2P for headings and buttons, VT323 for body text, Mitr for Thai glyphs. Browsers pick per glyph, so Latin uses the pixel fonts and Thai falls through to Mitr.
