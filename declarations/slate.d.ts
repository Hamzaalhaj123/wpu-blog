// TypeScript users only add this code
import { CustomElement, CustomText } from "@/types/richTextEditor";
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
