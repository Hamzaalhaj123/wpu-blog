import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/Select";
import { SelectTriggerProps } from "@radix-ui/react-select";
import { useCallback } from "react";
import { Editor, Element, Transforms } from "slate";
import { useSlate } from "slate-react";

export default function FontSizeSelect(props: SelectTriggerProps) {
  const editor = useSlate();

  const [match] = Editor.nodes(editor, { match: (node) => Element.isElement(node) });
  const matchedFontSize = match?.[0].fontSize ?? "md";

  const handleChange = useCallback((value: NonNullable<Element["fontSize"]>) => {
    Transforms.setNodes(editor, { fontSize: value }, { match: (node) => Element.isElement(node) });
  }, []);

  return (
    <Select value={matchedFontSize} onValueChange={handleChange}>
      <SelectTrigger {...props}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="xs">xs</SelectItem>
        <SelectItem value="sm">sm</SelectItem>
        <SelectItem value="md">md</SelectItem>
        <SelectItem value="lg">lg</SelectItem>
        <SelectItem value="xl">xl</SelectItem>
      </SelectContent>
    </Select>
  );
}
