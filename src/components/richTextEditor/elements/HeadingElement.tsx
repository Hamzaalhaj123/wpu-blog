import richTextEditor from "@/config/richTextEditor";
import { Heading } from "@/types/richTextEditor";
import { RenderElementProps } from "slate-react";

export default function HeadingElement({ element, attributes, children }: RenderElementProps) {
  const Heading = element.type as Heading;

  return (
    <Heading {...attributes} className={richTextEditor.headings[Heading]}>
      {children}
    </Heading>
  );
}
