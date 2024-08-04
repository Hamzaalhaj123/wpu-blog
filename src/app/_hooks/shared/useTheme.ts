import { Theme } from "@/types/theme";
import { useCookies } from "next-client-cookies";
import { useState } from "react";

export default function useTheme() {
  const prefferedTheme =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  const cookies = useCookies();
  const [theme, setTheme] = useState<Theme>(
    (cookies.get("theme") || prefferedTheme) as Theme,
  );
  const handleSwitch = (newTheme: Theme) => {
    if (theme) {
      document.documentElement.classList.remove(theme);
      cookies.remove("theme");
    }
    if (newTheme) {
      document.documentElement.classList.add(newTheme);
      cookies.set("theme", newTheme);
    }

    setTheme(newTheme);
  };
  return [theme, handleSwitch] as const;
}
