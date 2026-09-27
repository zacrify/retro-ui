import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-20 w-full rounded-none border-2 border-input bg-card px-3 py-2 font-mono-retro text-xl text-foreground shadow-pixel-sm transition-[box-shadow,transform] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:-translate-x-[1px] focus-visible:-translate-y-[1px] focus-visible:shadow-pixel",
        "aria-invalid:border-destructive aria-invalid:shadow-[2px_2px_0_0_var(--color-destructive)]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
