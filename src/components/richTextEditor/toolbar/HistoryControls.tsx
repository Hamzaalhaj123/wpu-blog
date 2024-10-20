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
    <div className="flex items-center gap-2">
      <Button size="small" icon onClick={handleUndo} disabled={!canUndo}>
        <ChevronLeftIcon size={16} />
      </Button>
      <Separator orientation="vertical" />
      <Button size="small" icon onClick={handelRedo} disabled={!canRedo}>
        <ChevronRightIcon size={16} />
      </Button>
    </div>
  );
}
