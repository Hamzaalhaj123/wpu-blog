import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/shared/DropdownMenu";
import navigation from "@/config/navigation";
import { Link } from "@react-email/components";
import { MenuIcon } from "lucide-react";

export default function SmNavigation() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
        <MenuIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {navigation.map(({ title, href }) => (
          <DropdownMenuItem key={title}>
            <Link href={href}>{title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
