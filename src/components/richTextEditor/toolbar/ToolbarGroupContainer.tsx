import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps } from "react";

type ToolbarGroupContainerProps = ComponentProps<"div"> & {
  asChild?: boolean;
};

export default function ToolbarGroupContainer({ className, asChild = false, ...props }: ToolbarGroupContainerProps) {
  const Component = asChild ? Slot : "div";
  return <Component className={cn("flex gap-1 rounded-md bg-card p-1", className)} {...props} />;
}
