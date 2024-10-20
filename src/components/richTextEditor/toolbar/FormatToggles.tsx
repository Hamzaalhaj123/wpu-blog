import { ToggleGroup, ToggleGroupItem } from "@/components/shared/ToggleGroup";
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from "lucide-react";
import { useCallback } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";

export default function FormatToggles() {
  const editor = useSlate();

  const activeMarks = Editor.marks(editor)?.formats;

  const handleChange = useCallback((newMarks: string[]) => {
    Editor.addMark(editor, "formats", newMarks);
  }, []);

  return (
    <ToggleGroup type="multiple" value={activeMarks} onValueChange={handleChange}>
      <ToggleGroupItem value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="strikethrough">
        <StrikethroughIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
