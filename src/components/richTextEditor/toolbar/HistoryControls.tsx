import ToolbarGroupContainer from "@/components/richTextEditor/toolbar/ToolbarGroupContainer";
import ToolbarTooltip from "@/components/richTextEditor/toolbar/ToolbarTooltip";
import Button from "@/components/shared/Button";
import hotKeys from "@/lib/textEditor/hotkeys";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useSlate } from "slate-react";

export default function HistoryControls() {
  const editor = useSlate();
  const canUndo = editor.history.undos.length > 0;
  const canRedo = editor.history.redos.length > 0;

  return (
    <ToolbarGroupContainer>
      <ToolbarTooltip title={hotKeys.undo.title} hotkey={hotKeys.undo.hotkey}>
        <Button size="small" onClick={editor.undo} disabled={!canUndo} className="rounded-e-none">
          <ChevronLeftIcon size={16} />
        </Button>
      </ToolbarTooltip>
      <ToolbarTooltip title={hotKeys.redo.title} hotkey={hotKeys.redo.hotkey}>
        <Button size="small" onClick={editor.redo} disabled={!canRedo} className="rounded-s-none">
          <ChevronRightIcon size={16} />
        </Button>
      </ToolbarTooltip>
    </ToolbarGroupContainer>
  );
}
