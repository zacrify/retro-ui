import { ClassValue } from 'clsx';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { Checkbox as Checkbox$1, Dialog as Dialog$1, Label as Label$1, Progress as Progress$1, Select as Select$1, Switch as Switch$1, Tabs as Tabs$1 } from 'radix-ui';
import { ToasterProps } from 'sonner';
export { toast } from 'sonner';

declare function cn(...inputs: ClassValue[]): string;

declare const badgeVariants: (props?: ({
    variant?: "default" | "secondary" | "accent" | "info" | "destructive" | "outline" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "accent" | "info" | "destructive" | "outline" | "link" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;

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

export { Badge, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Input, Label, Progress, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, Toaster, badgeVariants, buttonVariants, cn };
