import { usePathname, useRouter } from "@/lib/next-intl/navigation";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useCallback, useTransition } from "react";

export default function useSetSearchParams() {
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const setSearchParams = useCallback(
    (
      params: Record<string, string> | ((prevSearchParams: Record<string, string>) => Record<string, string>),
      method: "replace" | "push" = "replace",
      useHistoryObject: boolean = false,
      state: any = null,
    ) => {
      const prevSearchParams = Object.fromEntries(searchParams);

      const newSearchParamsObj = typeof params === "function" ? params(prevSearchParams) : params;

      // Delete falsy params
      for (const key in newSearchParamsObj) {
        if (!newSearchParamsObj[key]) {
          delete newSearchParamsObj[key];
        }
      }

      let newSearchParamsString = new URLSearchParams(newSearchParamsObj).toString();
      if (newSearchParamsString) newSearchParamsString = `?${newSearchParamsString}`;
      const newPathname = `${useHistoryObject ? `/${locale}` : ""}${pathname}${newSearchParamsString}`;

      if (method === "push") {
        if (useHistoryObject) history.pushState(state, "", newPathname);
        else startTransition(() => router.push(newPathname));
      } else {
        if (useHistoryObject) history.replaceState(state, "", newPathname);
        else startTransition(() => router.replace(newPathname));
      }
    },
    [router, pathname, searchParams, locale],
  );

  return { searchParams, setSearchParams, pending };
}
