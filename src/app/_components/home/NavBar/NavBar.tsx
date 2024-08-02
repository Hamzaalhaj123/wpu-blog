import { LanguageSwither, ThemeSwitcher } from ".";

export default function NavBar() {
  return (
    <div className="sticky top-0 flex w-full items-center gap-4 bg-background p-4">
      <ThemeSwitcher />
      <LanguageSwither />
    </div>
  );
}
