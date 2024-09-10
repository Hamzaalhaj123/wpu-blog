import LanguageSwitcher from "@/components/navbar/LanguageSwitcher";
import ThemeSwitcher from "@/components/navbar/ThemeSwitcher";
import ActiveLink from "@/components/shared/ActiveLink";
import routes from "@/config/routes";
import { Link } from "@/lib/next-intl/navigation";

export default function NavBar() {
  return (
    <header className="w-full bg-background">
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 lg:px-10">
        <Link href={routes.index} className="text-xl font-bold text-primary">
          Wpu Blog
        </Link>
        <div className="mx-auto flex items-center gap-4 ps-28">
          <ActiveLink className="py-4" href={routes.index}>
            Home
          </ActiveLink>
          <ActiveLink className="py-4" href={routes.about}>
            About Us
          </ActiveLink>
          <ActiveLink className="py-4" href={routes.contact}>
            Contact Us
          </ActiveLink>
        </div>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
