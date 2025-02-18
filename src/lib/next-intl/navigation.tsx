"use client";

import { locales } from "@/config/locales";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useSearchParams } from "next/navigation";
import { ComponentProps, useMemo } from "react";

const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

type LinkProps = ComponentProps<typeof Link> & {
  keepSearchParams?: boolean;
};

const CustomLink = ({ keepSearchParams = true, href, ...props }: LinkProps) => {
  const path = usePathname();
  const searchParams = useSearchParams();

  const isActive = useMemo(() => {
    const [hrefPath] = href.toString().split("?");
    return path === hrefPath;
  }, [path, href]);

  const fullPathname = useMemo(() => {
    const [, hrefParams] = href.toString().split("?");
    const searchParamsString = hrefParams ?? searchParams.toString();
    return `${href}${keepSearchParams && searchParamsString ? `?${searchParamsString}` : ""}`;
  }, [href, searchParams, keepSearchParams]);

  return <Link href={fullPathname} data-active={isActive} {...props} />;
};

export { CustomLink as Link, redirect, usePathname, useRouter };
