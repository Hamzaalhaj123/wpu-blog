// TypeScript users only add this code
import { CustomElement, CustomText } from "@/types/richTextEditor";
import { BaseEditor, Element, Range } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor &
      ReactEditor &
      HistoryEditor & {
        nodeToDecorations: Map<CustomElement, Range[]>;
      };
    Element: CustomElement;
    Text: CustomText;
  }
}
