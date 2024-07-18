import { BlogsFeed } from "@/app/_components/home";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

type MetaDataProps = {
  params: { locale: string };
};
export async function generateMetadata({
  params: { locale },
}: MetaDataProps): Promise<Metadata> {
  const t = await getTranslations("METADATA.homepage");
  return { title: t("title"), description: t("description") };
}

export default function Home() {
  const t = useTranslations("HOMEPAGE");
  return (
    <div className="p-8">
      <BlogsFeed />
    </div>
  );
}
