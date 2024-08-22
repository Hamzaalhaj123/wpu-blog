import { cn } from "@/lib/utils";
import { ChevronRightIcon, LucideProps } from "lucide-react";
import React from "react";
export default function NextArrow({ className, ...props }: LucideProps) {
  return (
    <ChevronRightIcon
      className={cn(className, "relative start-0.5 top-[1px] rtl:-scale-x-100")}
      {...props}
    />
  );
}
