import { SafeParseReturnType, ZodSchema } from "zod";

export default function parseSearchParams<T extends ZodSchema>(
  searchParams: Record<string, string>,
  validator: T,
): Partial<SafeParseReturnType<T["_input"], T["_output"]>["data"]> {
  const res = validator.safeParse(searchParams);

  return res?.data ?? {};
}
