"use client";

import { Button } from "@/app/_components/shared/Button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useCookies } from "next-client-cookies";
import { useState } from "react";

export default function ThemeSwitcher() {
  const cookies = useCookies();
  const [theme, setTheme] = useState(cookies.get("theme") ?? "light");

  const handleSwitch = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      cookies.set("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      cookies.set("theme", "light");
      setTheme("light");
    }
  };
  return (
    <Button onClick={handleSwitch}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
