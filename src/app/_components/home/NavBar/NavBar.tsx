"use client";
import ThemeSwitcher from "@/app/_components/home/NavBar/ThemeSwitcher";

import React from "react";

export default function NavBar() {
  return (
    <div className="sticky top-0 flex w-full items-center justify-end bg-background p-4">
      <ThemeSwitcher />
    </div>
  );
}
