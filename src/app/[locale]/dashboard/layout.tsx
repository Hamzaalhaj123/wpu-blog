import DashboardSidebar from "@/components/dashboard/sidebar/DashboardSidebar";
import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-full grid-cols-[auto_1fr]">
      <DashboardSidebar />
      <div className="h-full overflow-auto p-4 scrollbar-thin">{children}</div>
    </div>
  );
}
