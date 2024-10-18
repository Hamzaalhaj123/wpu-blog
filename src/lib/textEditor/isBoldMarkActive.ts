import { Editor } from "slate";

export default function isBoldMarkActive(editor: Editor) {
  const marks = Editor.marks(editor);
  return marks ? marks.bold === true : false;
}
