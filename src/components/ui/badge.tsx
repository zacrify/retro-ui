import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border-2 border-border px-2 py-1 font-pixel text-[8px] uppercase whitespace-nowrap shadow-pixel-sm focus-visible:ring-4 focus-visible:ring-info/60 aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        accent: "bg-accent text-accent-foreground",
        info: "bg-info text-info-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-card text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type BadgeVariant =
  | "default"
  | "secondary"
  | "accent"
  | "info"
  | "destructive"
  | "outline"

export type BadgeProps = React.ComponentProps<"span"> &
  Omit<VariantProps<typeof badgeVariants>, "variant"> & {
    /**
     * Pick by meaning, not by color:
     * - `destructive` (dark red): unread count, positive test result, overdue
     * - `secondary` (yellow): in-progress state, e.g. "quarantine, 3 days left"
     * - `accent` (green): good news, e.g. "new", negative test result
     * - `info` (blue): informational tags
     * - `outline`: plain counts and neutral labels
     * - `default` (red): emphasis when none of the above fits
     */
    variant?: BadgeVariant
    /** Render the child element instead of a `<span>`. */
    asChild?: boolean
  }

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
