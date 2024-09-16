import BlogsFeed from "@/components/blogs/BlogsFeed";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("METADATA.homepage");
  return { title: t("title"), description: t("description") };
}

export default function Home() {
  const t = useTranslations("HOMEPAGE");
  return (
    <div>
      <BlogsFeed />
    </div>
  );
}
