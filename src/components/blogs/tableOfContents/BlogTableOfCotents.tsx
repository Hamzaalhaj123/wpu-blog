"use client";

import BlogTableOfContentsNode from "@/components/blogs/tableOfContents/BlogTableOfContentsNode";
import Button from "@/components/shared/Button";
import Directional from "@/components/utils/Directional";
import useSetSearchParams from "@/hooks/shared/useSetSearchParams";
import useParsedSearchParams from "@/hooks/utils/useParsedSearchParams";
import tableOfContents from "@/mock/tableOfContents";
import cn from "@/utils/cn";
import { blogSearchParamsValidator } from "@/validators/blog/blogSearchParamsValidator";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";

type BlogTableOfContentProps = {
  tableOfContents: typeof tableOfContents;
};

export default function BlogTableOfContent({ tableOfContents }: BlogTableOfContentProps) {
  const { setSearchParams } = useSetSearchParams();
  const data = useParsedSearchParams(blogSearchParamsValidator);
  const t = useTranslations("BLOG");

  const expanded = data?.blogSidebarExpanded ?? false;
  return (
    <div className="relative h-full">
      <Button
        onClick={() => setSearchParams({ blogSidebarExpanded: String(!(data?.blogSidebarExpanded ?? false)) }, "replace", true)}
        size="none"
        variant="muted"
        className="absolute start-full top-20 z-50 rounded-s-none p-1 translate-s-1"
      >
        <Directional>
          <ChevronRightIcon size={16} className={cn("transition-transform duration-300", expanded ? "-scale-x-100" : "")} />
        </Directional>
      </Button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.aside
            key="table-of-contents"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            exit={{ width: 0 }}
            transition={{ ease: "easeInOut" }}
            className="h-full overflow-hidden whitespace-nowrap"
          >
            <div className="p-4">
              <h4 className="mb-4 text-2xl font-semibold">{t("table_of_content")}</h4>
              <nav>
                <ol className="ps-4 text-sm">
                  {tableOfContents.map((item) => (
                    <BlogTableOfContentsNode key={item.id} {...item} />
                  ))}
                </ol>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
