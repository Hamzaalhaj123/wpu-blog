import { Color, FontSize, Format, Heading } from "@/types/richTextEditor";

type RichTextEditorConfig = {
  formats: Record<Format, string>;
  textColors: Record<Color, string>;
  highlightColors: Record<Color, string>;
  headings: Record<Heading, string>;
  fontSizes: Record<FontSize, string>;
};

const richTextEditor: RichTextEditorConfig = {
  formats: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
  },
  textColors: {
    default: "text-foreground",
    primary: "text-primary-foreground",
    secondary: "text-secondary-foreground",
    warning: "text-warning-foreground",
    accent: "text-accent-foreground",
    destructive: "text-destructive-foreground",
    success: "text-success-foreground",
  },
  highlightColors: {
    default: "bg-transparent",
    primary: "bg-primary",
    secondary: "bg-secondary",
    warning: "bg-warning",
    accent: "bg-accent",
    destructive: "bg-destructive",
    success: "bg-success",
  },
  headings: {
    h1: "text-6xl",
    h2: "text-5xl",
    h3: "text-4xl",
    h4: "text-3xl",
    h5: "text-2xl",
    h6: "text-xl",
  },
  fontSizes: {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  },
};

export default richTextEditor;
