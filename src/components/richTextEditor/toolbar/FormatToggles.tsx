import ToolbarTooltip from "@/components/richTextEditor/toolbar/ToolbarTooltip";
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
      <ToolbarTooltip title="toggle bold" hotkey="Ctrl + B">
        <ToggleGroupItem value="bold">
          <BoldIcon />
        </ToggleGroupItem>
      </ToolbarTooltip>
      <ToolbarTooltip title="toggle italic" hotkey="Ctrl + I">
        <ToggleGroupItem value="italic">
          <ItalicIcon />
        </ToggleGroupItem>
      </ToolbarTooltip>
      <ToolbarTooltip title="toggle underline" hotkey="Ctrl + U">
        <ToggleGroupItem value="underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToolbarTooltip>
      <ToolbarTooltip title="toggle strikethrough" hotkey="Ctrl + Shift + S">
        <ToggleGroupItem value="strikethrough">
          <StrikethroughIcon />
        </ToggleGroupItem>
      </ToolbarTooltip>
    </ToggleGroup>
  );
}
