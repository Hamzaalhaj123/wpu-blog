import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-auto scrollbar-thin">
      <main className="relative mx-auto px-4 py-10 md:container">{children}</main>
    </div>
  );
}
