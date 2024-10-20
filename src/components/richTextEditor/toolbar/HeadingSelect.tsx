import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/Select";
import { Heading } from "@/types/richTextEditor";
import { SelectTriggerProps } from "@radix-ui/react-select";
import { Heading1Icon, Heading2Icon, Heading3Icon, Heading4Icon, Heading5Icon, Heading6Icon } from "lucide-react";
import { Editor, Element, Transforms } from "slate";
import { useSlate } from "slate-react";

export default function HeadingSelect(props: SelectTriggerProps) {
  const editor = useSlate();
  let regex = /h[1-6]/;
  const [match] = Editor.nodes(editor, {
    match: (node) => Element.isElement(node) && regex.test(node.type),
  });
  const matchedHeading = (match?.[0] as Element)?.type;

  const handleChange = (value: Heading) => {
    Transforms.setNodes(editor, { type: value });
  };

  return (
    <Select value={matchedHeading} onValueChange={handleChange}>
      <SelectTrigger {...props} disabled={!matchedHeading}>
        <SelectValue placeholder="heading" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="h1">
          <Heading1Icon />
        </SelectItem>
        <SelectItem value="h2">
          <Heading2Icon />
        </SelectItem>
        <SelectItem value="h3">
          <Heading3Icon />
        </SelectItem>
        <SelectItem value="h4">
          <Heading4Icon />
        </SelectItem>
        <SelectItem value="h5">
          <Heading5Icon />
        </SelectItem>
        <SelectItem value="h6">
          <Heading6Icon />
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
