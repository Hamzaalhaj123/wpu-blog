import { RenderElementProps } from "slate-react";

export default function CodeElement(props: RenderElementProps) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  );
}
