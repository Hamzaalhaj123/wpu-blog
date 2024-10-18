import { RenderLeafProps } from "slate-react";

export default function Leaf({ attributes, leaf, children }: RenderLeafProps) {
  return (
    <span className={leaf.bold ? "font-bold" : ""} {...attributes}>
      {children}
    </span>
  );
}
