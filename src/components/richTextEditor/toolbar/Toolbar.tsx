import FontSizeSelect from "@/components/richTextEditor/toolbar/FontSizeSelect";
import FormatToggles from "@/components/richTextEditor/toolbar/FormatToggles";
import HeadingSelect from "@/components/richTextEditor/toolbar/HeadingSelect";
import HistoryControls from "@/components/richTextEditor/toolbar/HistoryControls";

export default function Toolbar() {
  return (
    <div className="mb-6 flex justify-between gap-4 items-center">
      <HistoryControls />
      <FormatToggles />
      <HeadingSelect className="ms-auto" />
      <FontSizeSelect />
    </div>
  );
}
