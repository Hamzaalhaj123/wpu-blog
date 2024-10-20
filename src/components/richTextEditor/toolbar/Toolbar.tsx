import FontSizeSelect from "@/components/richTextEditor/toolbar/FontSizeSelect";
import FormatToggles from "@/components/richTextEditor/toolbar/FormatToggles";
import HeadingSelect from "@/components/richTextEditor/toolbar/HeadingSelect";

export default function Toolbar() {
  return (
    <div className="mb-6 flex justify-between gap-4 rounded-md border-border bg-card p-1">
      <FormatToggles />
      <HeadingSelect className="ms-auto" />
      <FontSizeSelect />
    </div>
  );
}
