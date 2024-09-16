import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("METADATA.about");
  return { title: t("title"), description: t("description") };
}

export default function AboutPage() {
  return <div>About us</div>;
}
