import Header from "@/components/header/Header";
import { ReactNode } from "react";

type WebsiteLayoutProps = {
  children: ReactNode;
};

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <div className="grid grid-rows-[auto,1fr] h-full">
      <Header />
      {children}
    </div>
  );
}
