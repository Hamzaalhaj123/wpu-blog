import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/shared/Tooltip";
import { ReactNode } from "react";

type ToolbarTooltipProps = {
  children: ReactNode;
  title: string;
  hotkey: string;
};

export default function ToolbarTooltip({ children, title, hotkey }: ToolbarTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="bottom" className="font-bold">
          {title} <span className="font-semibold text-muted-foreground">({hotkey})</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
