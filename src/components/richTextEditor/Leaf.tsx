import { Format } from "@/types/richTextEditor";
import { RenderLeafProps } from "slate-react";

export default function Leaf({ attributes, leaf, children }: RenderLeafProps) {
  return (
    <span {...attributes} className={leaf.formats?.map((format) => formats[format]).join(" ")}>
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
