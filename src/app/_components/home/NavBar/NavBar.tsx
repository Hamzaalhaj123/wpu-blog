import ThemeSwitcher from "@/app/_components/home/NavBar/ThemeSwitcher";
import React from "react";

export default function NavBar() {
  return (
    <div className="bg-slate-700 sticky top-0 w-full p-4">
      NavBar
      <ThemeSwitcher />
    </div>
  );
}
