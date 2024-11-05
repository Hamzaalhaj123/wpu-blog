import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/shared/Select";
import richTextEditor from "@/config/richTextEditor";
import { type CodeBlockElement } from "@/types/richTextEditor";
import { useCallback } from "react";
import { Transforms } from "slate";
import { ReactEditor, RenderElementProps, useSlate } from "slate-react";

export default function CodeBlockElement({ attributes, element, children }: RenderElementProps) {
  const editor = useSlate();
  const { language } = element as CodeBlockElement;
  const handleChange = useCallback((newLanguage: string) => {
    const nodePath = ReactEditor.findPath(editor, element);
    Transforms.setNodes(editor, { language: newLanguage }, { at: nodePath });
  }, []);

  return (
    <pre {...attributes} className="relative rounded-xl border border-border bg-card p-4 font-mono" spellCheck={false}>
      <code>{children}</code>
      <Select value={language} onValueChange={handleChange}>
        <SelectTrigger size="extraSmall" className="absolute end-4 top-4">
          <SelectValue>{language}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {richTextEditor.languages.map((language) => (
            <SelectItem key={language} value={language}>
              {language}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </pre>
  );
}
