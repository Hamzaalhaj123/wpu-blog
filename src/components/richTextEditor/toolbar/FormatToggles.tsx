import ToolbarTooltip from "@/components/richTextEditor/toolbar/ToolbarTooltip";
import { ToggleGroup, ToggleGroupItem } from "@/components/shared/ToggleGroup";
import hotKeys from "@/lib/textEditor/hotkeys";
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from "lucide-react";
import { useCallback } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";

export default function FormatToggles() {
  const editor = useSlate();

  const activeMarks = Editor.marks(editor)?.formats ?? [];

  const handleChange = useCallback((newMarks: string[]) => {
    Editor.addMark(editor, "formats", newMarks);
  }, []);

  return (
    <ToggleGroup size="sm" type="multiple" value={activeMarks} onValueChange={handleChange}>
      <ToolbarTooltip title={hotKeys.toggleBold.title} hotkey={hotKeys.toggleBold.hotkey}>
        <ToggleGroupItem className="aspect-square p-0" value="bold">
          <BoldIcon size={16} />
        </ToggleGroupItem>
      </ToolbarTooltip>
      <ToolbarTooltip title={hotKeys.toggleItalic.title} hotkey={hotKeys.toggleItalic.hotkey}>
        <ToggleGroupItem className="aspect-square p-0" value="italic">
          <ItalicIcon size={16} />
        </ToggleGroupItem>
      </ToolbarTooltip>
      <ToolbarTooltip title={hotKeys.toggleUnderline.title} hotkey={hotKeys.toggleUnderline.hotkey}>
        <ToggleGroupItem className="aspect-square p-0" value="underline">
          <UnderlineIcon size={16} />
        </ToggleGroupItem>
      </ToolbarTooltip>
      <ToolbarTooltip title={hotKeys.toggleStrikethrough.title} hotkey={hotKeys.toggleStrikethrough.hotkey}>
        <ToggleGroupItem className="aspect-square p-0" value="strikethrough">
          <StrikethroughIcon size={16} />
        </ToggleGroupItem>
      </ToolbarTooltip>
    </ToggleGroup>
  );
}
