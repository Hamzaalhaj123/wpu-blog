"use client";

import useTextDirection from "@/hooks/shared/useTextDirection";
import cn from "@/utils/cn";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    orientation?: "horizontal" | "vertical";
    progressClassName?: string;
  }
>(({ className, progressClassName, value, orientation = "horizontal", ...props }, ref) => {
  const direction = useTextDirection();

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative overflow-hidden rounded-full bg-muted",
        orientation === "horizontal" ? "h-1 w-full" : "h-full w-1",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn("size-full flex-1 bg-primary transition-all", progressClassName)}
        style={{
          transform: `${orientation === "horizontal" ? "translateX" : "translateY"}(${(100 - (value || 0)) * (orientation === "horizontal" && direction === "rtl" ? 1 : -1)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
