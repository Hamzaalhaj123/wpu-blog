import BlogsFeed from "@/components/blogs/BlogsFeed";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("METADATA.homepage");
  return { title: t("title"), description: t("description") };
}

export default function Home() {
  return <BlogsFeed />;
}
