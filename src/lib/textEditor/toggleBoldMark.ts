import isBoldMarkActive from "@/lib/textEditor/isBoldMarkActive";
import { Editor } from "slate";

export default function toggleBoldMark(editor: Editor) {
  const isActive = isBoldMarkActive(editor);
  if (isActive) {
    Editor.removeMark(editor, "bold");
  } else {
    Editor.addMark(editor, "bold", true);
  }
}
