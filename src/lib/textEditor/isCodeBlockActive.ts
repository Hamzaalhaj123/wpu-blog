import { Editor, Element } from "slate";

export default function isCodeBlockActive(editor: Editor) {
  const [match] = Editor.nodes(editor, {
    match: (node) => Element.isElement(node) && node.type === "code",
  });
  return !!match;
}
