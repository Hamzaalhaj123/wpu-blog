import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NOT_FOUND");
  return <div className="grid place-items-center size-full">{t("title")}</div>;
}
