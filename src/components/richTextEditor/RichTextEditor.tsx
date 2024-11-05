"use client";

import BaseElement from "@/components/richTextEditor/elements/BaseElement";
import Leaf from "@/components/richTextEditor/Leaf";
import Toolbar from "@/components/richTextEditor/toolbar/Toolbar";
import useHandleSlateKeydown from "@/hooks/richTextEditor/useHandleSlateKeydown";
import withImages from "@/lib/textEditor/withImages";
import { CodeBlockElement } from "@/types/richTextEditor";
import { useCallback, useMemo } from "react";
import { createEditor, Descendant, Editor, Element, Node, NodeEntry, Range } from "slate";
import { withHistory } from "slate-history";
import { Editable, RenderElementProps, RenderLeafProps, Slate, useSlate, withReact } from "slate-react";

//#region Import prism
import mergeMaps from "@/utils/mergeMaps";
import { normalizeTokens } from "prism-react-renderer";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
//#endregion

const initialValue: Descendant[] = [
  {
    type: "code-block",
    language: "javascript",
    children: toCodeLines(`//#region usedecorate hook
function useDecorate(editor: Editor) {
  return useCallback(
    ([node, path]: NodeEntry) => {
      if (Element.isElement(node) && node.type === "code-line") {
        const ranges = editor.nodeToDecorations.get(node) || [];
        return ranges;
      }
      return [];
    },
    [editor.nodeToDecorations],
  );
}
//#endregion`),
  },
];

export default function RichTextEditor() {
  const editor = useMemo(() => withReact(withImages(withHistory(createEditor()))), []);

  const handleRenderElement = useCallback((props: RenderElementProps) => <BaseElement {...props} />, []);
  const handleRenderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);
  const decorate = useDecorate(editor);
  const handleKeydown = useHandleSlateKeydown(editor);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Toolbar />
      <SetNodeToDecorations />
      <Editable
        renderElement={handleRenderElement}
        renderLeaf={handleRenderLeaf}
        decorate={decorate}
        onKeyDown={handleKeydown}
        placeholder="Start typing here"
        className="selection:bg-primary-foreground/40"
      />
    </Slate>
  );
}

//#region usedecorate hook
function useDecorate(editor: Editor) {
  return useCallback(
    ([node, path]: NodeEntry) => {
      if (Element.isElement(node) && node.type === "code-line") {
        const ranges = editor.nodeToDecorations.get(node) || [];
        return ranges;
      }
      return [];
    },
    [editor.nodeToDecorations],
  );
}
//#endregion
function getChildNodeToDecorations([block, blockPath]: NodeEntry<CodeBlockElement>) {
  const nodeToDecorations = new Map<Element, Range[]>();
  const text = block.children.map((line) => Node.string(line)).join("\n");
  const language = block.language;
  const tokens = Prism.tokenize(text, Prism.languages[language]);
  const normalizedTokens = normalizeTokens(tokens);
  const blockCholdren = block.children as Element[];

  for (let i = 0; i < normalizedTokens.length; i++) {
    const tokens = normalizedTokens[i];
    const element = blockCholdren[i];

    if (!nodeToDecorations.has(element)) {
      nodeToDecorations.set(element, []);
    }

    let start = 0;
    for (const token of tokens) {
      const length = token.content.length;
      if (!length) continue;
      const end = start + length;

      const path = [...blockPath, i, 0];
      const range = {
        anchor: { path, offset: start },
        focus: { path, offset: end },
        token: true,
        ...Object.fromEntries(token.types.map((type) => [type, true])),
      };
      nodeToDecorations.get(element)?.push(range);
      start = end;
    }
  }
  return nodeToDecorations;
}
//#endregion

function SetNodeToDecorations() {
  const editor = useSlate();

  const blockEntries = Array.from(
    Editor.nodes(editor, { at: [], mode: "highest", match: (n) => Element.isElement(n) && n.type === "code-block" }),
  ) as NodeEntry<CodeBlockElement>[];

  const nodeToDecorations = mergeMaps(...blockEntries.map(getChildNodeToDecorations));
  editor.nodeToDecorations = nodeToDecorations;

  return null;
}

function toChildren(content: string) {
  return [{ text: content }];
}
function toCodeLines(content: string): Element[] {
  return content.split("\n").map((line) => ({ type: "code-line", children: toChildren(line) }));
}
