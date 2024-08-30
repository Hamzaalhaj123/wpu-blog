"use client";
import { Link, usePathname } from "@/lib/next-intl/navigation";
import cn from "@/utils/cn";
import React from "react";
type ActiveLinkProps = React.ComponentProps<typeof Link>;

export default function ActiveLink({
  href,
  children,
  className,
  ...props
}: ActiveLinkProps) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      {...props}
      data-active={isActive}
      className={cn(className, "group relative")}
    >
      {children}

      <div className="absolute bottom-0 start-0 h-0.5 w-full bg-primary opacity-0 transition -translate-s-full group-hover:translate-s-0 group-data-[active=true]:opacity-100 group-data-[active=true]:translate-s-0"></div>
    </Link>
  );
}
