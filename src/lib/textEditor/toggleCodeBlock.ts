import isCodeBlockActive from "@/lib/textEditor/isCodeBlockActive";
import { Editor, Element, Transforms } from "slate";

export default function toggleCodeBlock(editor: Editor) {
  const isActive = isCodeBlockActive(editor);
  Transforms.setNodes(
    editor,
    { type: isActive ? "paragraph" : "code" },
    { match: (node) => Element.isElement(node) && Editor.isBlock(editor, node) },
  );
}
