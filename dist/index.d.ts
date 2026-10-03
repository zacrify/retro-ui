import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { Checkbox as Checkbox$1, Dialog as Dialog$1, Label as Label$1, Progress as Progress$1, Select as Select$1, Switch as Switch$1, Tabs as Tabs$1 } from 'radix-ui';
import { ToasterProps, toast as toast$1 } from 'sonner';

declare function cn(...inputs: ClassValue[]): string;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "accent" | "info" | "destructive" | "outline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type BadgeVariant = "default" | "secondary" | "accent" | "info" | "destructive" | "outline";
type BadgeProps = React.ComponentProps<"span"> & Omit<VariantProps<typeof badgeVariants>, "variant"> & {
    /**
     * Pick by meaning, not by color:
     * - `destructive` (dark red): unread count, positive test result, overdue
     * - `secondary` (yellow): in-progress state, e.g. "quarantine, 3 days left"
     * - `accent` (green): good news, e.g. "new", negative test result
     * - `info` (blue): informational tags
     * - `outline`: plain counts and neutral labels
     * - `default` (red): emphasis when none of the above fits
     */
    variant?: BadgeVariant;
    /** Render the child element instead of a `<span>`. */
    asChild?: boolean;
};
declare function Badge({ className, variant, asChild, ...props }: BadgeProps): React.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "accent" | "info" | "destructive" | "outline" | "link" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonVariant = "default" | "secondary" | "accent" | "info" | "destructive" | "outline" | "ghost" | "link";
type ButtonProps = React.ComponentProps<"button"> & Omit<VariantProps<typeof buttonVariants>, "variant"> & {
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
    variant?: ButtonVariant;
    /** Render the child element instead of a `<button>` (e.g. wrap a `<a>`). */
    asChild?: boolean;
};
declare function Button({ className, variant, size, asChild, ...props }: ButtonProps): React.JSX.Element;

declare function Card({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardTitle({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardDescription({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardAction({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardContent({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function CardFooter({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;

declare function Checkbox({ className, ...props }: React.ComponentProps<typeof Checkbox$1.Root>): React.JSX.Element;

declare function Dialog({ ...props }: React.ComponentProps<typeof Dialog$1.Root>): React.JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof Dialog$1.Trigger>): React.JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof Dialog$1.Portal>): React.JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof Dialog$1.Close>): React.JSX.Element;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof Dialog$1.Overlay>): React.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React.ComponentProps<typeof Dialog$1.Content> & {
    showCloseButton?: boolean;
}): React.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.JSX.Element;
declare function DialogFooter({ className, showCloseButton, children, ...props }: React.ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): React.JSX.Element;
declare function DialogTitle({ className, ...props }: React.ComponentProps<typeof Dialog$1.Title>): React.JSX.Element;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof Dialog$1.Description>): React.JSX.Element;

declare function Input({ className, type, ...props }: React.ComponentProps<"input">): React.JSX.Element;

declare function Label({ className, ...props }: React.ComponentProps<typeof Label$1.Root>): React.JSX.Element;

declare function Progress({ className, value, ...props }: React.ComponentProps<typeof Progress$1.Root>): React.JSX.Element;

declare function Select({ ...props }: React.ComponentProps<typeof Select$1.Root>): React.JSX.Element;
declare function SelectGroup({ ...props }: React.ComponentProps<typeof Select$1.Group>): React.JSX.Element;
declare function SelectValue({ ...props }: React.ComponentProps<typeof Select$1.Value>): React.JSX.Element;
declare function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof Select$1.Trigger>): React.JSX.Element;
declare function SelectContent({ className, children, position, align, ...props }: React.ComponentProps<typeof Select$1.Content>): React.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof Select$1.Label>): React.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof Select$1.Item>): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof Select$1.Separator>): React.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React.ComponentProps<typeof Select$1.ScrollUpButton>): React.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React.ComponentProps<typeof Select$1.ScrollDownButton>): React.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React.JSX.Element;
/**
 * Show a toast. Render `<Toaster />` once in the app first.
 * - `toast.success("Saved")`: a save or action completed
 * - `toast.error("Request failed")`: a request or action failed
 * - `toast.warning("Low HP")`: something needs attention but did not fail
 * - `toast.info("New quest")`: neutral information
 * - `toast("Saved game")`: plain neutral notice
 */
declare const toast: typeof toast$1;

declare function Switch({ className, ...props }: React.ComponentProps<typeof Switch$1.Root>): React.JSX.Element;

declare function Table({ className, ...props }: React.ComponentProps<"table">): React.JSX.Element;
declare function TableHeader({ className, ...props }: React.ComponentProps<"thead">): React.JSX.Element;
declare function TableBody({ className, ...props }: React.ComponentProps<"tbody">): React.JSX.Element;
declare function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): React.JSX.Element;
declare function TableRow({ className, ...props }: React.ComponentProps<"tr">): React.JSX.Element;
declare function TableHead({ className, ...props }: React.ComponentProps<"th">): React.JSX.Element;
declare function TableCell({ className, ...props }: React.ComponentProps<"td">): React.JSX.Element;
declare function TableCaption({ className, ...props }: React.ComponentProps<"caption">): React.JSX.Element;

declare function Tabs({ className, orientation, ...props }: React.ComponentProps<typeof Tabs$1.Root>): React.JSX.Element;
declare function TabsList({ className, ...props }: React.ComponentProps<typeof Tabs$1.List>): React.JSX.Element;
declare function TabsTrigger({ className, ...props }: React.ComponentProps<typeof Tabs$1.Trigger>): React.JSX.Element;
declare function TabsContent({ className, ...props }: React.ComponentProps<typeof Tabs$1.Content>): React.JSX.Element;

declare function Textarea({ className, ...props }: React.ComponentProps<"textarea">): React.JSX.Element;

export { Badge, type BadgeProps, type BadgeVariant, Button, type ButtonProps, type ButtonVariant, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Input, Label, Progress, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toaster, badgeVariants, buttonVariants, cn, toast };
