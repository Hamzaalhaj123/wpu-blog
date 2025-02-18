import { AnyZodObject, z } from "zod";

// type ObjectPropertiesOptional<T> = Partial<T> & { [K in keyof T as T[K] extends object ? never : K]: T[K] } extends infer O
//   ? { [K in keyof O]: O[K] }
//   : never;

export default function parseSearchParams<T extends AnyZodObject>(
  searchParams: Record<string, unknown>,
  validator: T,
): Partial<z.infer<T>> {
  const res = validator.partial().safeParse(searchParams);
  return res.data ?? {};
}
