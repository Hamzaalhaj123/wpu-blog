"use client";

import navigation from "@/config/navigation";
import { Link, usePathname } from "@/lib/next-intl/navigation";
import { motion } from "framer-motion";

export default function MdNavigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden ps-28 md:flex md:items-center md:justify-between">
      {navigation.map(({ title, href }) => (
        <Link key={title} className="relative px-2 py-4" href={href}>
          {title}
          {href === pathname ? (
            <motion.div layoutId="underline" className="absolute bottom-0 start-0 h-0.5 w-full bg-primary" />
          ) : null}
        </Link>
      ))}
    </nav>
  );
}
