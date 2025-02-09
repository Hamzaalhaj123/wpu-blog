"use client";

import ActiveLink from "@/components/shared/ActiveLink";
import { primarySidebar, secondarySidebar } from "@/config/dashboardSidebar";
import useParsedSearchParams from "@/hooks/utils/useParsedSearchParams";
import { usePathname } from "@/lib/next-intl/navigation";
import cn from "@/utils/cn";
import { dashboardSearchParamsValidator } from "@/validators/dashboardSearchParamsValidator";
import { AnimatePresence, motion } from "framer-motion";

export default function SecondarySidebar() {
  const data = useParsedSearchParams(dashboardSearchParamsValidator);
  const pathname = usePathname();
  const expanded = data?.dashboardSidebarExpanded ?? false;

  const activePrimarySidebar = primarySidebar.find((item) => item.name === (data?.activePrimaryItem ?? "home"))!;
  const activeSecondarySidebar = secondarySidebar[activePrimarySidebar.name];

  // const regex = new RegExp(`${routes.dashboard.index}/([^/]+)`);
  // const match = pathname.match(regex);
  // const firstSegment = match ? match[1] : null;

  return (
    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "12rem" }}
          exit={{ opacity: 0, width: 0 }}
          className="overflow-hidden border-e border-border bg-card"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activePrimarySidebar.name}
              className="space-y-2 px-1 py-4"
            >
              {activeSecondarySidebar.map(({ name, Icon, href }) => (
                <li key={name}>
                  <ActiveLink
                    href={href}
                    className={cn(
                      "flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md p-2 text-muted-foreground transition data-[active=true]:bg-primary data-[active=true]:text-foreground hover:text-foreground data-[active=false]:hover:bg-primary/50",
                      // { "bg-primary text-foreground": name === firstSegment },
                    )}
                  >
                    <Icon className="shrink-0" />
                    <span>{name}</span>
                  </ActiveLink>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
