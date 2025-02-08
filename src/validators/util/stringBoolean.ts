import { z } from "zod";

const booleanString = z
  .string()
  .toLowerCase()
  .transform((x) => x === "true")
  .pipe(z.boolean());

export default booleanString;
