import { Theme } from "@/types/theme";
import { cookies } from "next/headers";

export default function getTheme() {
  return cookies().get("theme")?.value as Theme;
}
