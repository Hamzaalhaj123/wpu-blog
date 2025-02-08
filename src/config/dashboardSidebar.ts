import routes from "@/config/routes";
import { HomeIcon, LayoutDashboardIcon, LucideIcon, NotepadTextIcon, TagsIcon, UsersIcon } from "lucide-react";

type PrimarySidebarItem = {
  name: string;
  label: string;
  Icon: LucideIcon;
};

type SecondarySidebarItem = {
  name: string;
  Icon: LucideIcon;
  href: string;
};

export const primarySidebar = [
  { name: "home", label: "Home", Icon: HomeIcon },
  { name: "user-management", label: "User Management", Icon: UsersIcon },
  { name: "blog-management", label: "Blog Management", Icon: NotepadTextIcon },
] as const satisfies ReadonlyArray<PrimarySidebarItem>;

type PrimarySidebarNames = (typeof primarySidebar)[number]["name"];

export const secondarySidebar: Record<PrimarySidebarNames, SecondarySidebarItem[]> = {
  home: [{ name: "overview", Icon: LayoutDashboardIcon, href: routes.dashboard.index }],
  "user-management": [
    { name: "all", Icon: UsersIcon, href: routes.dashboard.userManagement.users.index },
    { name: "roles", Icon: UsersIcon, href: routes.dashboard.userManagement.roles.index },
  ],
  "blog-management": [
    { name: "blogs", Icon: NotepadTextIcon, href: routes.dashboard.blogs.index },
    { name: "categories & tags", Icon: TagsIcon, href: routes.dashboard.blogs.categories.index },
  ],
};
