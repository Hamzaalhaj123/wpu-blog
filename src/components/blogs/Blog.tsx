import Button from "@/components/shared/Button";
import DirectionRespectedArrow from "@/components/shared/DirectionRespectedArrow";
import StarsRating from "@/components/shared/StarsRating";
import { Link } from "@/lib/next-intl/navigation";
import { BlogProps } from "@/mock/blogs";
import { format } from "date-fns";
import Image from "next/image";

export default function Blog({
  user,
  title,
  image,
  description,
  createdAt,
  rating,
  readingTime,
}: BlogProps) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-xl bg-background-lighter">
      <Link href={"#"}>
        <Image src={image} alt={title} width={600} height={400} />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h2 className="mb-3 text-2xl font-bold">{title}</h2>
        <div className="flex items-center justify-between">
          <StarsRating rating={rating} />
          <p className="text-secondary">{rating}</p>
        </div>
        <p className="mb-3 text-muted-foreground">{description}</p>
        <p className="mt-auto flex justify-between pt-3 text-lg">
          {readingTime}
        </p>
        <div className="flex items-center gap-2 pt-2">
          <Image
            src={user.image}
            alt={user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <div className="font-medium text-foreground">{user.name}</div>
            <time className="text-muted-foreground">
              {format(createdAt, "yyyy")}
            </time>
          </div>
          <Button className="ms-auto gap-2" asChild>
            <Link href={"#"}>
              <p>Read</p>
              <DirectionRespectedArrow
                size={20}
                className="transition-transform group-hover:translate-s-2"
              />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
