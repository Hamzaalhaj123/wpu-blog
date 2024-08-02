"use client";

import { Theme } from "@/types/theme";
import { useCookies } from "next-client-cookies";
import { useEffect, useState } from "react";

export default function useTheme() {
  const cookies = useCookies();
  const [theme, setTheme] = useState<Theme>();
  useEffect(() => {
    const prefferedTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setTheme((cookies.get("theme") || prefferedTheme) as Theme);
  }, []);

  const handleSwitch = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      cookies.set("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      cookies.set("theme", "light");
      setTheme("light");
    }
  };
  return [theme, handleSwitch] as const;
}
