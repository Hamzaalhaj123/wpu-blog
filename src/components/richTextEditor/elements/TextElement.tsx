import richTextEditor from "@/config/richTextEditor";
import { RenderElementProps } from "slate-react";

export default function TextElement({ element, attributes, children }: RenderElementProps) {
  const fontSizeClassName = element.fontSize ? richTextEditor.fontSizes[element.fontSize] : "";
  return (
    <p {...attributes} className={fontSizeClassName}>
      {children}
    </p>
  );
}
