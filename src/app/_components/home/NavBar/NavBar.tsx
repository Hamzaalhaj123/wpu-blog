import ThemeSwitcher from "@/app/_components/home/NavBar/ThemeSwitcher";
import routes from "@/config/routes";
import { Link } from "@/navigation";
import ActiveLink from "../../shared/ActiveLink";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background px-4 py-4 md:px-10">
      <nav className="container mx-auto flex items-center justify-between gap-4">
        <Link href={routes.index} className="text-xl font-bold text-primary">
          Wpu Blog
        </Link>

        <div className="mx-auto flex items-center gap-4 ps-28">
          <ActiveLink href={routes.index}>Home</ActiveLink>
          <Link href={routes.index}>Home</Link>
          <Link href={routes.about}>About Us</Link>
          <Link href={routes.contact}>Contact Us</Link>
        </div>
        <div>Language Switcher</div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
