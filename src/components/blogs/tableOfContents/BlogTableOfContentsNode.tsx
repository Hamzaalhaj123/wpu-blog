import TableOfContentsLeaf from "@/components/blogs/tableOfContents/BlogTableOfContentsLeaf";
import { Fragment } from "react";

export type BlogTableOfContentsNodeProps = {
  title: string;
  id: string;
  subsections?: BlogTableOfContentsNodeProps[];
};

const activeSection = "loops";

export default function BlogTableOfContentsNode({ title, id, subsections }: BlogTableOfContentsNodeProps) {
  return (
    <>
      <TableOfContentsLeaf id={id} title={title} isActive={id === activeSection} />
      {subsections ? (
        <ol className="ps-4">
          {subsections.map((subSection) => (
            <Fragment key={subSection.id}>
              {subSection.subsections ? (
                <BlogTableOfContentsNode {...subSection} />
              ) : (
                <TableOfContentsLeaf isActive={subSection.id === activeSection} {...subSection} />
              )}
            </Fragment>
          ))}
        </ol>
      ) : null}
    </>
  );
}
