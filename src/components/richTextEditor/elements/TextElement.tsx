import richTextEditor from "@/config/richTextEditor";
import { ParagraphElement } from "@/types/richTextEditor";
import { RenderElementProps } from "slate-react";

export default function TextElement({ element, attributes, children }: RenderElementProps) {
  const { fontSize } = element as ParagraphElement;
  const fontSizeClassName = fontSize ? richTextEditor.fontSizes[fontSize] : "";
  return (
    <p {...attributes} className={fontSizeClassName}>
      {children}
    </p>
  );
}
