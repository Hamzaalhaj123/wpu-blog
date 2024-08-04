"use client";

import { Button } from "@/app/_components/shared/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/shared/Dropdown";
import useTheme from "@/app/_hooks/shared/useTheme";
import { useTranslations } from "next-intl";

export default function ThemeSwitcher() {
  const t = useTranslations("THEMESWITCHER");

  const [theme, handleSwitch] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>{t(theme ?? "system")}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => handleSwitch("dark")}>
          {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSwitch("light")}>
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleSwitch(null)}>
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
