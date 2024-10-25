import { ToggleGroup, ToggleGroupItem } from "@/components/shared/ToggleGroup";
import { Color } from "@/types/richTextEditor";
import cn from "@/utils/cn";
import { CircleOffIcon } from "lucide-react";

type ColorToggleGroupProps = {
  value: Color;
  onValueChange: (value: Color) => void;
  colors: Record<Color, string>;
};

export default function ColorToggleGroup({ value, onValueChange, colors }: ColorToggleGroupProps) {
  return (
    <ToggleGroup type="single" value={value} onValueChange={onValueChange} size="sm" className="grid grid-cols-4">
      {Object.keys(colors).map((color) => (
        <ToggleGroupItem
          key={color}
          value={color}
          className="group size-6 rounded-sm p-0 data-[state=on]:bg-transparent data-[state=on]:hover:bg-transparent"
        >
          {colors[color as Color].split("-").includes("transparent") ? (
            <CircleOffIcon size={16} className="text-muted-foreground" />
          ) : (
            <div
              className={cn(
                "size-4 rounded-sm transition-transform group-hover:scale-110 group-data-[state=on]:scale-125",
                colors[color as Color],
              )}
            ></div>
          )}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
