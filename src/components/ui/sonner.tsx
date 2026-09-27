import type * as React from "react"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { Toaster as Sonner, toast, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" strokeWidth={3} />,
        info: <InfoIcon className="size-4" strokeWidth={3} />,
        warning: <TriangleAlertIcon className="size-4" strokeWidth={3} />,
        error: <OctagonXIcon className="size-4" strokeWidth={3} />,
        loading: <Loader2Icon className="size-4 animate-spin" strokeWidth={3} />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "flex w-full items-center gap-3 rounded-none border-2 border-border bg-card p-4 font-mono-retro text-lg text-foreground shadow-pixel",
          title: "font-pixel text-[10px] uppercase leading-tight",
          description: "text-muted-foreground",
          success: "bg-accent",
          error: "bg-destructive text-destructive-foreground",
          warning: "bg-secondary",
          info: "bg-info text-info-foreground",
          actionButton:
            "ml-auto border-2 border-border bg-foreground px-2 py-1 font-pixel text-[8px] uppercase text-background",
          cancelButton:
            "border-2 border-border bg-card px-2 py-1 font-pixel text-[8px] uppercase text-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }
