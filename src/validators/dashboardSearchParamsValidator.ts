import { primarySidebar } from "@/config/dashboardSidebar";
import booleanString from "@/validators/util/stringBoolean";
import { z } from "zod";

const primarySidebarNames = primarySidebar.map((item) => item.name) as [(typeof primarySidebar)[number]['name']];

export const dashboardSearchParamsValidator = z.object({
  dashboardSidebarExpanded: booleanString,
  activePrimaryItem: z.enum(primarySidebarNames).catch(primarySidebarNames[0]),
});
export type DashboardSearchParamsSchema = z.infer<typeof dashboardSearchParamsValidator>;
