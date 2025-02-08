"use client";

import Button from "@/components/shared/Button";
import { ToggleGroup, ToggleGroupItem } from "@/components/shared/ToggleGroup";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/shared/Tooltip";
import Directional from "@/components/utils/Directional";
import { primarySidebar } from "@/config/dashboardSidebar";
import useSetSearchParams from "@/hooks/shared/useSetSearchParams";
import useParsedSearchParams from "@/hooks/utils/useParsedSearchParams";
import cn from "@/utils/cn";
import { dashboardSearchParamsValidator } from "@/validators/dashboardSearchParamsValidator";
import { ChevronRightIcon } from "lucide-react";
import { useCallback } from "react";

export default function PrimarySidebar() {
  const { data } = useParsedSearchParams(dashboardSearchParamsValidator);
  const { setSearchParams } = useSetSearchParams();
  const expanded = data?.dashboardSidebarExpanded ?? false;
  const activePrimaryItem = data?.activePrimaryItem ?? "home";

  const toggleExpanded = useCallback(() => {
    setSearchParams(
      (prev) => ({
        ...prev,
        dashboardSidebarExpanded: String(!(data?.dashboardSidebarExpanded ?? false)),
      }),
      "replace",
      true,
    );
  }, [data, setSearchParams]);

  const setActivePrimarySidebar = useCallback(
    (primarySidebar: string) => {
      const newSearchParams = {};
      if (primarySidebar) {
        setSearchParams(
          (prev) => ({
            ...prev,
            activePrimaryItem: primarySidebar,
            dashboardSidebarExpanded: "true",
          }),
          "replace",
          true,
        );
      } else {
        setSearchParams(
          (prev) => ({
            ...prev,
            dashboardSidebarExpanded: "true",
          }),
          "replace",
          true,
        );
      }
    },
    [setSearchParams],
  );

  return (
    <TooltipProvider>
      <ToggleGroup
        type="single"
        variant="primary"
        className="flex-col justify-start border-e border-e-border bg-card p-2"
        value={activePrimaryItem}
        onValueChange={setActivePrimarySidebar}
      >
        <Button variant="muted" size="small" icon onClick={toggleExpanded}>
          <Directional>
            <ChevronRightIcon className={cn("transition-transform duration-300", expanded ? "-scale-100" : "")} />
          </Directional>
        </Button>
        {primarySidebar.map(({ name, label, Icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <div>
                <ToggleGroupItem value={name} className="aspect-square p-2">
                  <Icon />
                </ToggleGroupItem>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </ToggleGroup>
    </TooltipProvider>
  );
}
