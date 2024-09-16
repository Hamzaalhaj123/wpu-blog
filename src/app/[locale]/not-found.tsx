import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NOT_FOUND");
  return <div>{t("title")}</div>;
}
