import ActiveLink from "@/components/shared/ActiveLink";
import navigation from "@/config/navigation";

export default function MdNavigation() {
  return (
    <nav className="hidden ps-28 md:flex md:items-center md:justify-between md:gap-4">
      {navigation.map(({ title, href }) => (
        <ActiveLink key={title} className="py-4" href={href}>
          {title}
        </ActiveLink>
      ))}
    </nav>
  );
}
