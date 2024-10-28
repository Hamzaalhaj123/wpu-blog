import richTextEditor from "@/config/richTextEditor";
import cn from "@/utils/cn";
import { RenderLeafProps } from "slate-react";

export default function Leaf({ attributes, leaf, children }: RenderLeafProps) {
  const formatClasses = leaf.formats?.map((format) => richTextEditor.formats[format]).join(" ");
  const textColorClass = richTextEditor.textColors[leaf.textColor ?? "default"];
  const textHighlightClass = richTextEditor.highlightColors[leaf.highlightColor ?? "default"];

  return (
    <span {...attributes} className={cn(formatClasses, textColorClass, textHighlightClass)}>
      {children}
    </span>
  );
}
