import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export async function generateMetadata() {
  const t = await getTranslations("METADATA.not_found");
  return { title: t("title") };
}

export default function CatchAllPage() {
  notFound();
}
