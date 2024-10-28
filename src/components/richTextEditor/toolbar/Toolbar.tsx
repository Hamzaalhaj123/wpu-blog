import ColorToggles from "@/components/richTextEditor/toolbar/ColorToggles";
import FontSizeSelect from "@/components/richTextEditor/toolbar/FontSizeSelect";
import FormatToggles from "@/components/richTextEditor/toolbar/FormatToggles";
import HeadingSelect from "@/components/richTextEditor/toolbar/HeadingSelect";
import HistoryControls from "@/components/richTextEditor/toolbar/HistoryControls";
import ImageUploader from "@/components/richTextEditor/toolbar/ImageUploader";
import ToolbarGroupContainer from "@/components/richTextEditor/toolbar/ToolbarGroupContainer";

export default function Toolbar() {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <HistoryControls />
      <ToolbarGroupContainer>
        <FormatToggles />
        <ColorToggles />
      </ToolbarGroupContainer>
      <HeadingSelect className="ms-auto" />
      <FontSizeSelect />
      <ImageUploader />
    </div>
  );
}
