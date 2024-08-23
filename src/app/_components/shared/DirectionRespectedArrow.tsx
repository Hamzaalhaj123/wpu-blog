import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon, LucideProps } from "lucide-react";

type DirectionRespectedArrowProps = LucideProps & {
  direction?: "next" | "prev";
};

export default function DirectionRespectedArrow({
  direction = "next",
  className,
  ...props
}: DirectionRespectedArrowProps) {
  const Arrow = direction === "next" ? ChevronRightIcon : ChevronLeftIcon;
  return (
    <Arrow
      className={cn(className, "relative start-0.5 top-[1px] rtl:-scale-x-100")}
      {...props}
    />
  );
}
