"use client";
import { Button } from "@/app/_components/shared/Button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  const handleSwitch = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("light");
    }
  };
  return (
    <Button onClick={handleSwitch}>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
