"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Button } from "../../shared/Button";

export default function LanguageSwither() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  //const params = useParams();
  const [isPending, startTransition] = useTransition();

  const handleSwitch = () => {
    const newLocale = locale === "ar" ? "en" : "ar";
    startTransition(() => {
      router.replace(pathname, { locale: newLocale, scroll: false });
    });
  };

  return (
    <div>
      <Button disabled={isPending} onClick={handleSwitch}>
        switch
      </Button>
    </div>
  );
}
