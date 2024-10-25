import ToolbarGroupContainer from "@/components/richTextEditor/toolbar/ToolbarGroupContainer";
import ToolbarTooltip from "@/components/richTextEditor/toolbar/ToolbarTooltip";
import Button from "@/components/shared/Button";
import hotKeys from "@/lib/textEditor/hotkeys";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback } from "react";
import { useSlate } from "slate-react";

export default function HistoryControls() {
  const editor = useSlate();
  const handleUndo = useCallback(editor.undo, [editor]);
  const handelRedo = useCallback(editor.redo, [editor]);
  const canUndo = editor.history.undos.length > 0;
  const canRedo = editor.history.redos.length > 0;

  return (
    <ToolbarGroupContainer>
      <ToolbarTooltip title={hotKeys.undo.title} hotkey={hotKeys.undo.hotkey}>
        <Button variant="plain" className="size-7 p-0" onClick={handleUndo} disabled={!canUndo}>
          <ChevronLeftIcon size={16} />
        </Button>
      </ToolbarTooltip>
      <ToolbarTooltip title={hotKeys.redo.title} hotkey={hotKeys.redo.hotkey}>
        <Button variant="plain" className="size-7 p-0" onClick={handelRedo} disabled={!canRedo}>
          <ChevronRightIcon size={16} />
        </Button>
      </ToolbarTooltip>
    </ToolbarGroupContainer>
  );
}
