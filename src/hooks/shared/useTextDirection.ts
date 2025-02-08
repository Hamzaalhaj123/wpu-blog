import { useLocale } from "next-intl";
import { getLangDir } from "rtl-detect";

export default function useTextDirection() {
  const locale = useLocale();
  return getLangDir(locale);
}
