import cn from "@/utils/cn";
import { LoaderCircleIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

type LoadingSpinnerProps = {
  isLoading: boolean;
} & ComponentPropsWithoutRef<"div">;

export default function LoadingSpinner({
  isLoading,
  className,
  ...rest
}: LoadingSpinnerProps) {
  return (
    <div
      style={{ borderRadius: "inherit" }}
      className={cn(
        "pointer-events-none visible absolute inset-0 grid place-items-center rounded-inherit bg-inherit opacity-0",
        { "opacity-100": isLoading },
        className,
      )}
      {...rest}
    >
      <LoaderCircleIcon className="animate-spin" />
    </div>
  );
}
