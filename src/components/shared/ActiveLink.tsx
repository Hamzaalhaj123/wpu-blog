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
      <div
        aria-hidden
        className="absolute bottom-0 start-0 h-0.5 w-full scale-x-0 bg-primary transition-transform origin-end group-hover:scale-x-100 group-hover:origin-start group-data-[active=true]:scale-x-100"
      ></div>
    </Link>
  );
}
