import ThemeSwitcher from "./NavBar/ThemeSwitcher";

export default function NavBar() {
  return (
    <header className="sticky top-0 w-full bg-background p-4">
      <ThemeSwitcher/>
    </header>
  );
}
