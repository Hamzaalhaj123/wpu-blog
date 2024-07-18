import { BlogsFeed } from "@/app/_components/home";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HOMEPAGE");
  return (
    <div className="p-8">
      <BlogsFeed />
    </div>
  );
}
