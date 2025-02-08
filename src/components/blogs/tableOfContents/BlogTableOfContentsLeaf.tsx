"use client";
import { BlogTableOfContentsNodeProps } from "@/components/blogs/tableOfContents/BlogTableOfContentsNode";
import Button from "@/components/shared/Button";
import { Link } from "@/lib/next-intl/navigation";
import cn from "@/utils/cn";

type BlogTableOfContentsLeafProps = Omit<BlogTableOfContentsNodeProps, "subsections"> & {
  isActive: boolean;
};

export default function TableOfContentsLeaf({ id, title, isActive }: BlogTableOfContentsLeafProps) {
  return (
    <li className="relative mb-1.5">
      <Button
        asChild
        variant="plain"
        className={cn("block", isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground")}
        size="none"
      >
        <Link className="block w-full" href={`#${id}`}>
          {title}
        </Link>
      </Button>
    </li>
  );
}
