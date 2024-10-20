import { Format } from "@/types/richTextEditor";
import { Editor } from "slate";

export default function toggleFormat(editor: Editor, format: Format) {
  const oldFormats = Editor.marks(editor)?.formats;
  const newFormats = oldFormats?.includes(format) ? oldFormats.filter((el) => el !== format) : [...(oldFormats ?? []), format];
  Editor.addMark(editor, "formats", newFormats);
}
