import LanguageSwitcher from "@/components/navbar/LanguageSwitcher";
import ThemeSwitcher from "@/components/navbar/ThemeSwitcher";
import ActiveLink from "@/components/shared/ActiveLink";
import routes from "@/config/routes";
import { Link } from "@/lib/next-intl/navigation";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background py-4">
      <nav className="container mx-auto flex items-center justify-between gap-4 px-4 lg:px-10">
        <Link href={routes.index} className="text-xl font-bold text-primary">
          Wpu Blog
        </Link>
        <div className="mx-auto flex items-center gap-4 ps-28">
          <ActiveLink href={routes.index}>Home</ActiveLink>
          <Link href={routes.index}>Home</Link>
          <Link href={routes.about}>About Us</Link>
          <Link href={routes.contact}>Contact Us</Link>
        </div>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
