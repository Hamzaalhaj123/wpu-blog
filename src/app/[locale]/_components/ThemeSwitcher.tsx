"use client";

import useTheme from "@/app/shared/hooks/useTheme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/shared/ui/Select";
import { Theme } from "@/types/theme";
import { useTranslations } from "next-intl";

export default function ThemeSwitcher() {
  const t = useTranslations("THEMESWITCHER");
  const [theme, handleSwitch] = useTheme();

  return (
    <div>
      <Select
        value={theme}
        onValueChange={(theme) => handleSwitch((theme ?? undefined) as Theme)}
      >
        <SelectTrigger>
          <SelectValue placeholder={t("system")}>
            {t(theme || "system")}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="dark">{t("dark")}</SelectItem>
          <SelectItem value="light">{t("light")}</SelectItem>
          <SelectItem value="system">{t("system")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
