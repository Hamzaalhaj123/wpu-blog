import { Slot, SlotProps } from "@radix-ui/react-slot";

type DirectionRespectedArrowProps = SlotProps;

export default function Directional({ ...props }: DirectionRespectedArrowProps) {
  return <Slot className="rtl:rotate-180" {...props} />;
}
