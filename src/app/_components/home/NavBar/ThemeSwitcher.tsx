"use client";

import { Button } from "@/app/_components/shared/Button";
import { Theme } from "@/types/theme";
import { MoonIcon, SunIcon } from "lucide-react";
import { useCookies } from "next-client-cookies";
import { useState } from "react";

export default function ThemeSwitcher() {
  const cookies = useCookies();
  const [theme, setTheme] = useState<Theme>(cookies.get("theme") as Theme);

  const handleSwitch = () => {
    console.log(theme);
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      cookies.set("theme", "dark");
      setTheme("dark");
      console.log("dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      cookies.set("theme", "light");
      setTheme("light");
      console.log("light");
    }
  };
  return (
    <Button onClick={handleSwitch}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
