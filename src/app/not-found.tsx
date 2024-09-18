"use client";

import NotFound from "@/components/notFound/NotFound";
// import Error from "next/error";

export default function NotFoundPage() {
  return (
    <html lang="en">
      <body className="bg-background-darker text-foreground h-screen">
        <NotFound title="page not found" label="Return to homepage" />
      </body>
    </html>
  );
}
