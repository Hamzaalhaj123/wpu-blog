import NotFound from "@/components/notFound/NotFound";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NOT_FOUND");
  return <NotFound title={t("title")} label={t("return_to_homepage")} />;
}
