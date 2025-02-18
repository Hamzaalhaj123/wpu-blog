import parseSearchParams from "@/utils/parseSearchParams";
import { useSearchParams } from "next/navigation";
import { AnyZodObject } from "zod";

export default function useParsedSearchParams<T extends AnyZodObject>(validator: T): ReturnType<typeof parseSearchParams<T>> {
  const searchParams = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams.entries());
  return parseSearchParams(searchParamsObj, validator);
}
