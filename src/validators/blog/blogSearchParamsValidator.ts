import booleanString from "@/validators/util/stringBoolean";
import { z } from "zod";

export const blogSearchParamsValidator = z.object({ blogSidebarExpanded: booleanString });
export type BlogSearchParamsSchema = z.infer<typeof blogSearchParamsValidator>;
