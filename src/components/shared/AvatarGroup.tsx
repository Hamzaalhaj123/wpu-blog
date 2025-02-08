import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/Avatar";
import WithClassName from "@/types/withClassName";

type AvatarGroupProps = WithClassName<{
  image?: string | null;
  name?: string;
}>;

export default function AvatarGroup({ image, name, className }: AvatarGroupProps) {
  return (
    <Avatar className={className}>
      {image ? <AvatarImage src={image} alt={name} /> : null}
      <AvatarFallback name={name} />
    </Avatar>
  );
}
