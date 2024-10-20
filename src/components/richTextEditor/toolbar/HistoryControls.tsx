import ToolbarTooltip from "@/components/richTextEditor/toolbar/ToolbarTooltip";
import Button from "@/components/shared/Button";
import { Separator } from "@/components/shared/Separator";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useCallback } from "react";
import { useSlate } from "slate-react";

export default function HistoryControls() {
  const editor = useSlate();
  console.log(editor.history.undos);
  const handleUndo = useCallback(editor.undo, [editor]);
  const handelRedo = useCallback(editor.redo, [editor]);
  const canUndo = editor.history.undos.length > 0;
  const canRedo = editor.history.redos.length > 0;
  return (
    <div className="flex h-fit">
      <ToolbarTooltip title="Undo" hotkey="Ctrl + Z">
        <Button size="small" onClick={handleUndo} disabled={!canUndo} className="rounded-e-none">
          <ChevronLeftIcon size={16} />
        </Button>
      </ToolbarTooltip>
      <Separator orientation="vertical" className="bg-background" />
      <ToolbarTooltip title="Redo" hotkey="Ctrl + Y">
        <Button size="small" onClick={handelRedo} disabled={!canRedo} className="rounded-s-none">
          <ChevronRightIcon size={16} />
        </Button>
      </ToolbarTooltip>
    </div>
  );
}
