import { z } from "zod";

export const sortingValidator = z.object({
  sort: z
    .string()
    .min(1)
    .transform((val) => {
      const obj: Record<string, "asc" | "desc"> = {};

      val.split(",").map((pair) => {
        const [key, value] = pair.split(" ");
        if (value === "asc" || value === "desc") {
          obj[key] = value;
        }
      });

      return obj;
    }),
});
