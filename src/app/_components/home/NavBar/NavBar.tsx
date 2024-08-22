import ThemeSwitcher from "@/app/_components/home/NavBar/ThemeSwitcher";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background px-4 py-4 md:px-10">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-primary">Wpu Blog</div>
        <div>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
