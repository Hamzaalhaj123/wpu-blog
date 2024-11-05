import richTextEditor from "@/config/richTextEditor";
import { List } from "@/types/richTextEditor";
import { RenderElementProps } from "slate-react";

export default function ListElement({ element, attributes, children }: RenderElementProps) {
  const List = element.type as Exclude<List, "li">;
  return (
    <List className={richTextEditor.lists[List]} {...attributes}>
      {children}
    </List>
  );
}
