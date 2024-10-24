"use client";

import BaseElement from "@/components/richTextEditor/elements/BaseElement";
import Leaf from "@/components/richTextEditor/Leaf";
import Toolbar from "@/components/richTextEditor/toolbar/Toolbar";
import useHandleSlateKeydown from "@/hooks/richTextEditor/useHandleSlateKeydown";
import { useCallback, useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from "slate-react";

const initialValue: Descendant[] = [
  { type: "paragraph", fontSize: "sm", children: [{ text: "Hello world", formats: ["bold"], color: "accent" }] },
  { type: "paragraph", fontSize: "md", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "paragraph", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h1", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h2", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h3", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h4", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h5", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h6", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
];

export default function RichTextEditor() {
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);

  const handleRenderElement = useCallback((props: RenderElementProps) => <BaseElement {...props} />, []);
  const handleRenderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const handleKeydown = useHandleSlateKeydown(editor);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Toolbar />
      <Editable
        renderElement={handleRenderElement}
        renderLeaf={handleRenderLeaf}
        onKeyDown={handleKeydown}
        placeholder="Start typing here"
      />
    </Slate>
  );
}
