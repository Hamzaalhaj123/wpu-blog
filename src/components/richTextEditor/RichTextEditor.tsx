"use client";

import CodeElement from "@/components/richTextEditor/CodeElement";
import DefaultElement from "@/components/richTextEditor/DefaultElement";
import Leaf from "@/components/richTextEditor/Leaf";
import toggleBoldMark from "@/lib/textEditor/toggleBoldMark";
import toggleCodeBlock from "@/lib/textEditor/toggleCodeBlock";
import { KeyboardEvent, useCallback, useState } from "react";
import { createEditor, Descendant } from "slate";
import { Editable, RenderElementProps, RenderLeafProps, Slate, withReact } from "slate-react";

const initialValue: Descendant[] = [{ type: "paragraph", children: [{ text: "" }] }];

export default function RichTextEditor() {
  const [editor] = useState(() => withReact(createEditor()));

  const renderHandler = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props: RenderLeafProps) => {
    return <Leaf {...props} />;
  }, []);

  const keydownHandler = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey) {
      switch (event.key) {
        case "q": {
          event.preventDefault();
          toggleCodeBlock(editor);
          break;
        }
        case "b": {
          event.preventDefault();
          toggleBoldMark(editor);
          break;
        }
      }
    }
  }, []);

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable renderElement={renderHandler} renderLeaf={renderLeaf} onKeyDown={keydownHandler} />
    </Slate>
  );
}
