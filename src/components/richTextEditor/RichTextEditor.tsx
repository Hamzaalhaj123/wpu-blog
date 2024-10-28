"use client";

import BaseElement from "@/components/richTextEditor/elements/BaseElement";
import Leaf from "@/components/richTextEditor/Leaf";
import Toolbar from "@/components/richTextEditor/toolbar/Toolbar";
import useHandleSlateKeydown from "@/hooks/richTextEditor/useHandleSlateKeydown";
import withImages from "@/lib/textEditor/withImages";
import { asCustomElement } from "@/types/richTextEditor";
import { useCallback, useMemo } from "react";
import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from "slate-react";
import imageThumb from "/public/imageThumbnail.webp";

const initialValue: Descendant[] = [
  asCustomElement({
    type: "image",
    alt: "Hello Image",
    src: imageThumb,
    children: [{ text: "" }],
    height: 200,
    width: 200,
  }),
  { type: "paragraph", fontSize: "sm", children: [{ text: "Hello world", formats: ["bold"], color: "accent" }] },
  { type: "paragraph", fontSize: "md", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  {
    type: "paragraph",
    fontSize: "sm",
    children: [{ text: "Hello world", formats: ["bold"], textColor: "primary", highlightColor: "secondary" }],
  },
  { type: "paragraph", fontSize: "md", children: [{ text: "Hello world", formats: ["bold", "italic"], textColor: "warning" }] },
  { type: "paragraph", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h1", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h2", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h3", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h4", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h5", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
  { type: "h6", fontSize: "lg", children: [{ text: "Hello world", formats: ["bold", "italic"] }] },
];

export default function RichTextEditor() {
  const editor = useMemo(() => withReact(withImages(withHistory(createEditor()))), []);

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
        className="selection:bg-primary-foreground/40"
      />
    </Slate>
  );
}
