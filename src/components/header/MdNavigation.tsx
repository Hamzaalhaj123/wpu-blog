import ActiveLink from "@/components/shared/ActiveLink";
import navigation from "@/config/navigation";

export default function MdNavigation() {
  return (
    <nav className="hidden ps-28 md:flex md:items-center md:justify-between md:gap-4">
      {navigation.map(({ title, href }) => (
        <ActiveLink key={title} className="py-4" href={href}>
          {title}
          <div
            aria-hidden
            className="absolute bottom-0 start-0 h-0.5 w-full scale-x-0 bg-primary transition-transform origin-end group-hover:scale-x-100 group-hover:origin-start group-data-[active=true]:scale-x-100"
          />
        </ActiveLink>
      ))}
    </nav>
  );
}
