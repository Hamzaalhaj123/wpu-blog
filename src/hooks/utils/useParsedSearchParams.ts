import parseSearchParams from "@/utils/parseSearchParams";
import { useSearchParams } from "next/navigation";
import { ZodSchema } from "zod";

export default function useParsedSearchParams<T extends ZodSchema>(validator: T): ReturnType<typeof parseSearchParams> {
  const searchParams = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams.entries());
  return parseSearchParams(searchParamsObj, validator);
}
