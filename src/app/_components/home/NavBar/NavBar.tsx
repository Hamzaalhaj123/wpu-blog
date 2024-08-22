import ThemeSwitcher from "@/app/_components/home/NavBar/ThemeSwitcher";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-background p-4">
      <div className="text-xl font-bold text-primary">Wpu Blog</div>
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
