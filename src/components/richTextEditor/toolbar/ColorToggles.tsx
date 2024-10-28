import TextColorToggles from "@/components/richTextEditor/toolbar/TextColorToggles";
import TextHighlightToggles from "@/components/richTextEditor/toolbar/TextHighlightToggles";
import ToolbarTooltip from "@/components/richTextEditor/toolbar/ToolbarTooltip";
import Button from "@/components/shared/Button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/shared/Popover";
import { Separator } from "@/components/shared/Separator";
import richTextEditor from "@/config/richTextEditor";
import cn from "@/utils/cn";
import { ChevronDownIcon } from "lucide-react";
import { useCallback } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";

export default function ColorToggles() {
  const editor = useSlate();
  const activeTextColor = Editor.marks(editor)?.textColor ?? "default";
  const activeHighlightColor = Editor.marks(editor)?.highlightColor ?? "default";

  const handleTextColorChange = useCallback((newColor: string) => {
    if (!newColor) return;
    Editor.addMark(editor, "textColor", newColor);
  }, []);
  const handleTextHighlightChange = useCallback((newColor: string) => {
    if (newColor) Editor.addMark(editor, "highlightColor", newColor);
    else Editor.removeMark(editor, "highlightColor");
  }, []);

  return (
    <Popover>
      <ToolbarTooltip title="control text and highlight colors">
        <PopoverTrigger asChild>
          <Button size="small" variant="plain" className="h-7 gap-2 px-2 py-0">
            <div className="relative size-4 overflow-hidden rounded-sm">
              <div
                className={cn(
                  richTextEditor.textColors[activeTextColor].replace("text", "bg"),
                  "absolute size-full -translate-x-1/3 -translate-y-1/3 rotate-45 scale-y-150 transition-colors",
                )}
              ></div>
              <div
                className={cn(
                  richTextEditor.highlightColors[activeHighlightColor],
                  "absolute size-full translate-x-1/3 translate-y-1/3 rotate-45 scale-y-150 transition-colors",
                )}
              ></div>
            </div>
            <ChevronDownIcon size={16} className="transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </PopoverTrigger>
      </ToolbarTooltip>
      <PopoverContent className="w-fit p-0">
        <div className="p-2">
          <p className="mb-1 text-sm">Color</p>
          <TextColorToggles />
        </div>
        <Separator />
        <div className="p-2">
          <p className="mb-1 text-sm">Highlight</p>
          <TextHighlightToggles />
        </div>
      </PopoverContent>
    </Popover>
  );
}
