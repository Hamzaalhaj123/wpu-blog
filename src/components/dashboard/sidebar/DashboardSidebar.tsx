"use client";

import PrimarySidebar from "@/components/dashboard/sidebar/PrimarySidebar";
import SecondarySidebar from "@/components/dashboard/sidebar/SecondarySidebar";

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full text-card-foreground">
      <PrimarySidebar />
      <SecondarySidebar />
    </aside>
  );
}
