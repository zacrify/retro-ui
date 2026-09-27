import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-none border-2 border-input bg-card px-3 py-1 font-mono-retro text-xl text-foreground shadow-pixel-sm transition-[box-shadow,transform] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-pixel file:text-xs placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:-translate-x-[1px] focus-visible:-translate-y-[1px] focus-visible:shadow-pixel",
        "aria-invalid:border-destructive aria-invalid:shadow-[2px_2px_0_0_var(--color-destructive)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
