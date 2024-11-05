import richTextEditor from "@/config/richTextEditor";
import cn from "@/utils/cn";
import { RenderLeafProps } from "slate-react";

export default function Leaf({ leaf, attributes, children }: RenderLeafProps) {
  const { text, formats, highlightColor, textColor, ...rest } = leaf;
  const formatClasses = formats?.map((format) => richTextEditor.formats[format]).join(" ");
  const textColorClass = richTextEditor.textColors[textColor ?? "default"];
  const textHighlightClass = richTextEditor.highlightColors[highlightColor ?? "default"];
  const codeLineClasses = Object.keys(rest).join(" ");

  return (
    <span {...attributes} className={cn(formatClasses, textColorClass, textHighlightClass, codeLineClasses)}>
      {children}
    </span>
  );
}
