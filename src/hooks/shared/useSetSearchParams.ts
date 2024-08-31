import { usePathname, useRouter } from "@/lib/next-intl/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

export default function useSetSearchParams() {
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const setSearchParams = useCallback(
    (
      params:
        | Record<string, string>
        | ((prevSearchParams: URLSearchParams) => Record<string, string>),
      method: "replace" | "push" = "replace",
      useHistoryObject: boolean = false,
      state: any = null,
    ) => {
      const currentSearchParams = new URLSearchParams(searchParams);

      let newSearchParams: URLSearchParams;
      if (typeof params === "function") {
        newSearchParams = new URLSearchParams(params(currentSearchParams));
      } else {
        newSearchParams = new URLSearchParams(params);
      }

      let newSearchParamsString = currentSearchParams.toString();

      if (newSearchParamsString)
        newSearchParamsString = `?${newSearchParamsString}`;

      const newPathname = `${pathname}${newSearchParamsString}`;

      if (method === "push") {
        if (useHistoryObject) history.pushState(state, "", newPathname);
        else startTransition(() => router.push(newPathname));
      } else {
        if (useHistoryObject) history.replaceState(state, "", newPathname);
        else startTransition(() => router.replace(newPathname));
      }
    },
    [router, pathname, searchParams],
  );

  return { setSearchParams, pending };
}
