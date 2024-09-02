import Button from "@/components/shared/Button";
import DirectionRespectedArrow from "@/components/shared/DirectionRespectedArrow";
import { Link } from "@/lib/next-intl/navigation";
import { BlogProps } from "@/mock/blogs";
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
        {/* TODO: Add star rating */}
        <p className="mb-3 text-muted-foreground">{description}</p>
        <div className="mt-auto flex justify-between pt-3 text-lg">
          <p>{readingTime}</p>
          <p className="text-secondary">{rating}</p>
        </div>
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
            <time className="text-muted-foreground"> {createdAt}</time>
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
