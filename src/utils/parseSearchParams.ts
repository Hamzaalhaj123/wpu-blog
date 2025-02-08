import { SafeParseReturnType, ZodSchema } from "zod";

export default function parseSearchParams<T extends ZodSchema>(
  searchParams: Record<string, string>,
  validator: T,
): SafeParseReturnType<T["_input"], T["_output"]> {
  return validator.safeParse(searchParams);
}
