import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-none border-2 border-border font-pixel text-xs uppercase whitespace-nowrap shadow-pixel transition-all outline-none select-none hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-pixel-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none focus-visible:ring-4 focus-visible:ring-info/60 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        accent: "bg-accent text-accent-foreground",
        info: "bg-info text-info-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-card text-foreground hover:bg-muted",
        ghost:
          "border-transparent shadow-none hover:translate-0 hover:bg-muted hover:shadow-none active:translate-0",
        link: "border-transparent shadow-none underline-offset-4 hover:translate-0 hover:underline hover:shadow-none active:translate-0",
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 text-[10px] has-[>svg]:px-2.5",
        lg: "h-12 px-6 text-sm has-[>svg]:px-4",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type ButtonVariant =
  | "default"
  | "secondary"
  | "accent"
  | "info"
  | "destructive"
  | "outline"
  | "ghost"
  | "link"

export type ButtonProps = React.ComponentProps<"button"> &
  Omit<VariantProps<typeof buttonVariants>, "variant"> & {
    /**
     * Pick by meaning, not by color:
     * - `default` (red): the one primary action on the screen, e.g. "Start", "Send"
     * - `accent` (green): save / confirm / success, e.g. "Save", "Record result"
     * - `secondary` (yellow): secondary positive action, e.g. "Load sample data"
     * - `info` (blue): neutral helper action, e.g. "Summarize with AI"
     * - `destructive` (dark red): delete, or an urgent/escalation action, e.g. "Delete", "Refer to hospital"
     * - `outline`: cancel / back / toggle, sits next to a filled button
     * - `ghost`: icon buttons and toolbars, no border
     * - `link`: inline "see all" style navigation
     *
     * Rule of thumb: one `default` button per screen; everything else is `outline`
     * unless it has a specific meaning above.
     */
    variant?: ButtonVariant
    /** Render the child element instead of a `<button>` (e.g. wrap a `<a>`). */
    asChild?: boolean
  }

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
