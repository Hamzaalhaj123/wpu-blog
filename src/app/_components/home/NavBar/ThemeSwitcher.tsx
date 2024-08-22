"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/shared/Select";
import useTheme from "@/app/_hooks/shared/useTheme";
import { Theme } from "@/types/theme";
import { useTranslations } from "next-intl";

export default function ThemeSwitcher() {
  const t = useTranslations("THEMESWITCHER");
  const [theme, handleSwitch] = useTheme();

  return (
    <>
      <Select
        value={theme}
        onValueChange={(theme) => handleSwitch((theme ?? undefined) as Theme)}
      >
        <SelectTrigger>
          <SelectValue>{t(theme || "system")}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">{t("dark")}</SelectItem>
          <SelectItem value="light">{t("light")}</SelectItem>
          <SelectItem value="system">{t("system")}</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
