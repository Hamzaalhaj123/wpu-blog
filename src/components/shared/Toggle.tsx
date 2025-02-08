"use client";

import { variants } from "@/components/shared/Button";
import cn from "@/utils/cn";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=off]:bg-opacity-0",
  {
    variants: {
      variant: {
        muted: "border-muted bg-muted",
        primary: "border-primary bg-primary",
        secondary: "border-secondary bg-secondary",
        error: "border-destructive bg-destructive",
        success: "border-success bg-success",
      },
      size: variants.size,
      outline: {
        true: "border data-[state=off]:hover:bg-opacity-20 data-[state=on]:bg-opacity-50",
        false: " data-[state=off]:hover:bg-opacity-40",
      },
    },
    defaultVariants: {
      variant: "muted",
      size: "medium",
      outline: false,
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, outline, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className, outline }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
