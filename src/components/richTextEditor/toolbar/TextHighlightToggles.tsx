import ColorToggleGroup from "@/components/richTextEditor/toolbar/ColorToggleGroup";
import richTextEditor from "@/config/richTextEditor";
import { useCallback } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";

export default function TextHighlightToggles() {
  const editor = useSlate();
  const activeHighlightColor = Editor.marks(editor)?.highlightColor ?? "default";

  const handleTextHighlightChange = useCallback((newColor: string) => {
    if (newColor) Editor.addMark(editor, "highlightColor", newColor);
    else Editor.removeMark(editor, "highlightColor");
  }, []);

  return (
    <ColorToggleGroup
      colors={richTextEditor.highlightColors}
      value={activeHighlightColor}
      onValueChange={handleTextHighlightChange}
    />
  );
}
