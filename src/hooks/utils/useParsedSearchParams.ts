import parseSearchParams from "@/utils/parseSearchParams";
import { useSearchParams } from "next/navigation";
import { SafeParseReturnType, ZodSchema } from "zod";

export default function useParsedSearchParams<T extends ZodSchema>(validator: T): SafeParseReturnType<T["_input"], T["_output"]> {
  const searchParams = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams.entries());
  return parseSearchParams(searchParamsObj, validator);
}
