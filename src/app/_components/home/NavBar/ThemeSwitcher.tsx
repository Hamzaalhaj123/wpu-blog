"use client";

import { Button } from "@/app/_components/shared/Button";
import useTheme from "@/app/_hooks/shared/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeSwitcher() {
  const [theme, handleSwitch] = useTheme();

  return (
    <Button onClick={handleSwitch}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
