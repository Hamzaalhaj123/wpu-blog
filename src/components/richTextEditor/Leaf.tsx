import { Format, TextColor } from "@/types/richTextEditor";
import cn from "@/utils/cn";
import { RenderLeafProps } from "slate-react";

export default function Leaf({ attributes, leaf, children }: RenderLeafProps) {
  const formatClasses = leaf.formats?.map((format) => formats[format]).join(" ");
  const colorClass = colors[leaf.color ?? "default"];
  return (
    <span {...attributes} className={cn(formatClasses, colorClass)}>
      {children}
    </span>
  );
}

const formats: Record<Format, string> = {
  bold: "font-bold",
  italic: "italic",
  underline: "underline",
  strikethrough: "line-through",
};

const colors: Record<TextColor, string> = {
  default: "text-foreground",
  primary: "text-primary-foreground",
  secondary: "text-secondary-foreground",
  warning: "text-warning-foreground",
  accent: "text-accent-foreground",
  destructive: "text-destructive-foreground",
  success: "text-success-foreground",
};
