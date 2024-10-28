import { RenderElementProps } from "slate-react";

export default function UnorderedListItem({ element, attributes, children }: RenderElementProps) {
  return <li {...attributes}>{children}</li>;
}
