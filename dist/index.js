// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/badge.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx } from "react/jsx-runtime";
var badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-none border-2 border-border px-2 py-1 font-pixel text-[8px] uppercase whitespace-nowrap shadow-pixel-sm focus-visible:ring-4 focus-visible:ring-info/60 aria-invalid:border-destructive [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        accent: "bg-accent text-accent-foreground",
        info: "bg-info text-info-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-card text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/components/ui/button.tsx
import { cva as cva2 } from "class-variance-authority";
import { Slot as Slot2 } from "radix-ui";
import { jsx as jsx2 } from "react/jsx-runtime";
var buttonVariants = cva2(
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
        ghost: "border-transparent shadow-none hover:translate-0 hover:bg-muted hover:shadow-none active:translate-0",
        link: "border-transparent shadow-none underline-offset-4 hover:translate-0 hover:underline hover:shadow-none active:translate-0"
      },
      size: {
        default: "h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 text-[10px] has-[>svg]:px-2.5",
        lg: "h-12 px-6 text-sm has-[>svg]:px-4",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot2.Root : "button";
  return /* @__PURE__ */ jsx2(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/card.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "flex flex-col gap-6 rounded-none border-2 border-border bg-card py-6 text-card-foreground shadow-pixel",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-title",
      className: cn("font-pixel text-sm leading-tight uppercase", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-description",
      className: cn("font-mono-retro text-lg leading-normal text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6 font-mono-retro text-lg", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center gap-2 px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// src/components/ui/checkbox.tsx
import { CheckIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { jsx as jsx4 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer size-6 shrink-0 cursor-pointer rounded-none border-2 border-input bg-card shadow-pixel-sm transition-all outline-none focus-visible:ring-4 focus-visible:ring-info/60 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx4(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none",
          children: /* @__PURE__ */ jsx4(CheckIcon, { className: "size-4", strokeWidth: 4 })
        }
      )
    }
  );
}

// src/components/ui/dialog.tsx
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx5(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-foreground/70 [background-image:repeating-linear-gradient(0deg,transparent_0_2px,rgba(0,0,0,0.25)_2px_4px)] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx5(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-none border-2 border-border bg-card p-6 shadow-pixel-lg duration-150 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "absolute top-3 right-3 grid size-7 cursor-pointer place-content-center border-2 border-border bg-primary text-primary-foreground shadow-pixel-sm transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none focus-visible:ring-4 focus-visible:ring-info/60 focus-visible:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
              children: [
                /* @__PURE__ */ jsx5(XIcon, { strokeWidth: 3 }),
                /* @__PURE__ */ jsx5("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx5(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-3 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx5(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx5(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("pr-8 font-pixel text-sm leading-tight uppercase", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn("font-mono-retro text-lg leading-normal text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/input.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx6(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-10 w-full min-w-0 rounded-none border-2 border-input bg-card px-3 py-1 font-mono-retro text-xl text-foreground shadow-pixel-sm transition-[box-shadow,transform] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-pixel file:text-xs placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:-translate-x-[1px] focus-visible:-translate-y-[1px] focus-visible:shadow-pixel",
        "aria-invalid:border-destructive aria-invalid:shadow-[2px_2px_0_0_var(--color-destructive)]",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/label.tsx
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx7 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 font-pixel text-[10px] leading-none uppercase select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/progress.tsx
import { Progress as ProgressPrimitive } from "radix-ui";
import { jsx as jsx8 } from "react/jsx-runtime";
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsx8(
    ProgressPrimitive.Root,
    {
      "data-slot": "progress",
      className: cn(
        "relative h-6 w-full overflow-hidden rounded-none border-2 border-border bg-card p-[2px] shadow-pixel-sm",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx8(
        ProgressPrimitive.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "h-full w-full flex-1 bg-primary transition-transform [background-image:repeating-linear-gradient(90deg,transparent_0_8px,var(--color-card)_8px_10px)]",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}

// src/components/ui/select.tsx
import { CheckIcon as CheckIcon2, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import { jsx as jsx9, jsxs as jsxs2 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx9(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx9(SelectPrimitive.Group, { "data-slot": "select-group", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx9(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "flex h-10 w-fit cursor-pointer items-center justify-between gap-2 rounded-none border-2 border-input bg-card px-3 py-2 font-mono-retro text-xl whitespace-nowrap shadow-pixel-sm transition-[box-shadow,transform] outline-none focus-visible:-translate-x-[1px] focus-visible:-translate-y-[1px] focus-visible:shadow-pixel disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive data-[placeholder]:text-muted-foreground *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx9(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx9(ChevronDownIcon, { className: "size-4", strokeWidth: 3 }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  align = "start",
  ...props
}) {
  return /* @__PURE__ */ jsx9(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs2(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-none border-2 border-border bg-popover text-popover-foreground shadow-pixel data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx9(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx9(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx9(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("px-2 py-1.5 font-pixel text-[8px] uppercase text-muted-foreground", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-pointer items-center gap-2 rounded-none py-1.5 pr-8 pl-2 font-mono-retro text-xl outline-hidden select-none focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx9(
          "span",
          {
            "data-slot": "select-item-indicator",
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            children: /* @__PURE__ */ jsx9(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx9(CheckIcon2, { className: "size-4", strokeWidth: 3 }) })
          }
        ),
        /* @__PURE__ */ jsx9(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("pointer-events-none -mx-1 my-1 h-0.5 bg-border", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsx9(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn("flex cursor-default items-center justify-center py-1", className),
      ...props,
      children: /* @__PURE__ */ jsx9(ChevronDownIcon, { className: "size-4" })
    }
  );
}

// src/components/ui/sonner.tsx
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon
} from "lucide-react";
import { Toaster as Sonner, toast } from "sonner";
import { jsx as jsx10 } from "react/jsx-runtime";
var Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx10(
    Sonner,
    {
      theme: "light",
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx10(CircleCheckIcon, { className: "size-4", strokeWidth: 3 }),
        info: /* @__PURE__ */ jsx10(InfoIcon, { className: "size-4", strokeWidth: 3 }),
        warning: /* @__PURE__ */ jsx10(TriangleAlertIcon, { className: "size-4", strokeWidth: 3 }),
        error: /* @__PURE__ */ jsx10(OctagonXIcon, { className: "size-4", strokeWidth: 3 }),
        loading: /* @__PURE__ */ jsx10(Loader2Icon, { className: "size-4 animate-spin", strokeWidth: 3 })
      },
      toastOptions: {
        unstyled: true,
        classNames: {
          toast: "flex w-full items-center gap-3 rounded-none border-2 border-border bg-card p-4 font-mono-retro text-lg text-foreground shadow-pixel",
          title: "font-pixel text-[10px] uppercase leading-tight",
          description: "text-muted-foreground",
          success: "bg-accent",
          error: "bg-destructive text-destructive-foreground",
          warning: "bg-secondary",
          info: "bg-info text-info-foreground",
          actionButton: "ml-auto border-2 border-border bg-foreground px-2 py-1 font-pixel text-[8px] uppercase text-background",
          cancelButton: "border-2 border-border bg-card px-2 py-1 font-pixel text-[8px] uppercase text-foreground"
        }
      },
      ...props
    }
  );
};

// src/components/ui/switch.tsx
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx11 } from "react/jsx-runtime";
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx11(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-none border-2 border-border p-[2px] shadow-pixel-sm transition-all outline-none focus-visible:ring-4 focus-visible:ring-info/60 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=unchecked]:bg-muted",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx11(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "pointer-events-none block size-5 rounded-none bg-foreground transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        }
      )
    }
  );
}

// src/components/ui/table.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto border-2 border-border bg-card shadow-pixel",
      children: /* @__PURE__ */ jsx12(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom font-mono-retro text-lg", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("bg-foreground text-background [&_tr]:border-b-2", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "border-t-2 border-border bg-muted font-pixel text-[10px] uppercase [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b-2 border-border transition-colors hover:bg-secondary/40 data-[state=selected]:bg-secondary",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "h-10 px-3 text-left align-middle font-pixel text-[10px] uppercase whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx12(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "px-3 py-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx12(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 font-pixel text-[10px] uppercase text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/tabs.tsx
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx13 } from "react/jsx-runtime";
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "group/tabs flex gap-3 data-[orientation=horizontal]:flex-col",
        className
      ),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "inline-flex w-fit items-center gap-1 rounded-none border-2 border-border bg-muted p-1 shadow-pixel-sm group-data-[orientation=vertical]/tabs:flex-col",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-none border-2 border-transparent px-3 py-2 font-pixel text-[10px] uppercase whitespace-nowrap text-muted-foreground transition-colors group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:ring-4 focus-visible:ring-info/60 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[state=active]:border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-pixel-sm",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}

// src/components/ui/textarea.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx14(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-20 w-full rounded-none border-2 border-input bg-card px-3 py-2 font-mono-retro text-xl text-foreground shadow-pixel-sm transition-[box-shadow,transform] outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:-translate-x-[1px] focus-visible:-translate-y-[1px] focus-visible:shadow-pixel",
        "aria-invalid:border-destructive aria-invalid:shadow-[2px_2px_0_0_var(--color-destructive)]",
        className
      ),
      ...props
    }
  );
}
export {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Progress,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toaster,
  badgeVariants,
  buttonVariants,
  cn,
  toast
};
//# sourceMappingURL=index.js.map