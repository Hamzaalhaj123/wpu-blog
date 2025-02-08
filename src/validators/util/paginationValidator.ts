import { z } from "zod";

export const paginationValidator = z.object({ page: z.coerce.number().min(1).catch(1) });
export type PaginationSchema = z.infer<typeof paginationValidator>;
