import ColorToggleGroup from "@/components/richTextEditor/toolbar/ColorToggleGroup";
import { Color } from "@/types/richTextEditor";
import { useCallback } from "react";
import { Editor } from "slate";
import { useSlate } from "slate-react";

export default function TextColorToggles() {
  const editor = useSlate();
  const activeTextColor = Editor.marks(editor)?.textColor ?? "default";

  const handleTextColorChange = useCallback((newColor: string) => {
    if (!newColor) return;
    Editor.addMark(editor, "textColor", newColor);
  }, []);

  return <ColorToggleGroup colors={colors} value={activeTextColor} onValueChange={handleTextColorChange} />;
}

const colors: Record<Color, string> = {
  default: "bg-foreground",
  primary: "bg-primary-foreground",
  secondary: "bg-secondary-foreground",
  warning: "bg-warning-foreground",
  accent: "bg-accent-foreground",
  destructive: "bg-destructive-foreground",
  success: "bg-success-foreground",
};
