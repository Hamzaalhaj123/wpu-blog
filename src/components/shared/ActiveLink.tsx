"use client";
import { Link, usePathname } from "@/lib/next-intl/navigation";
import cn from "@/utils/cn";
import { useSearchParams } from "next/navigation";
import React from "react";
type ActiveLinkProps = React.ComponentProps<typeof Link> & { keepSearchParams?: boolean };

export default function ActiveLink({ href, className, keepSearchParams = true, ...props }: ActiveLinkProps) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const isActive = path === href;

  const fullPathname = `${href}${keepSearchParams ? `?${searchParams.toString()}` : ""}`;

  return <Link href={fullPathname} data-active={isActive} className={cn(className, "group relative")} {...props} />;
}
