"use client";
import BlogReadProgress from "@/components/blogs/BlogReadProgress";
import BlogTableOfContent from "@/components/blogs/tableOfContents/BlogTableOfCotents";
import tableOfContents from "@/mock/tableOfContents";
import { useScroll } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  const blogContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: blogContainerRef });
  const [readProgress, setReadProgress] = useState(0);
  useEffect(() => {
    scrollYProgress.on("change", (latest) => {
      setReadProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="flex overflow-hidden">
      <BlogTableOfContent tableOfContents={tableOfContents} />
      <BlogReadProgress percentage={Math.floor(readProgress * 100)} />
      <main ref={blogContainerRef} className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-transparent">
        {children}
      </main>
    </div>
  );
}
