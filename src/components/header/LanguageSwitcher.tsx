"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/Select";
import { locales } from "@/config/locales";
import { usePathname, useRouter } from "@/lib/next-intl/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const [pending, startTransition] = useTransition();
  const t = useTranslations("LANGUAGE_SWITCHER");
  const rotuer = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const handleSelectLanguage = (locale: "ar" | "en") => {
    startTransition(() => rotuer.replace(pathname, { locale }));
  };

  return (
    <div>
      <Select disabled={pending} value={locale} onValueChange={handleSelectLanguage}>
        <SelectTrigger>
          <SelectValue>{t(locale as any)}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {locales.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {t(locale)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
