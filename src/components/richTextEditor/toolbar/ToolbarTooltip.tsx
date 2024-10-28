import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/shared/Tooltip";
import { ReactNode } from "react";

type ToolbarTooltipProps = {
  children: ReactNode;
  title: string;
  hotkey?: string;
};

export default function ToolbarTooltip({ children, title, hotkey }: ToolbarTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div>{children}</div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="font-bold">
          <div>{title}</div>
          {hotkey ? <div className="font-semibold text-muted-foreground">({hotkey})</div> : null}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
