import LanguageSwitcher from "@/components/header/LanguageSwitcher";
import MdNavigation from "@/components/header/MdNavigation";
import SmNavigation from "@/components/header/SmNavigation";
import ThemeSwitcher from "@/components/header/ThemeSwitcher";
import routes from "@/config/routes";
import { Link } from "@/lib/next-intl/navigation";

export default function Header() {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="flex items-center justify-between gap-4 md:container max-md:p-4">
        <Link href={routes.index} className="text-xl font-bold text-primary-foreground">
          Wpu Blog
        </Link>
        <MdNavigation />
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
        <SmNavigation />
      </div>
    </header>
  );
}
