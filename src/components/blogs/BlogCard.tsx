import { Avatar, AvatarImage } from "@/components/shared/Avatar";
import Button from "@/components/shared/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/shared/card";
import DirectionRespectedArrow from "@/components/shared/DirectionRespectedArrow";
import StarsRating from "@/components/shared/StarsRating";
import { Link } from "@/lib/next-intl/navigation";
import { BlogProps } from "@/mock/blogs";
import { format } from "date-fns";
import Image from "next/image";

export default function BlogCard({ user, title, image, description, createdAt, rating, readingTime }: BlogProps) {
  return (
    <Card asChild className="relative flex flex-col overflow-hidden">
      <article>
        <CardHeader className="p-0">
          <Link href="#">
            <Image src={image} alt={title} width={768} height={576} />
          </Link>
          <CardTitle className="p-4">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <StarsRating rating={rating} />
            <p className="text-secondary">{rating}</p>
          </div>
          <p className="mb-3 line-clamp-3 text-muted-foreground">{description}</p>
          <p className="mt-auto flex justify-between pt-3 text-lg">{readingTime}</p>
        </CardContent>
        <CardFooter>
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
          </Avatar>
          <div>
            <div className="font-medium">{user.name}</div>
            <time className="text-muted-foreground">{format(createdAt, "yyyy")}</time>
          </div>
          <Button asChild className="ms-auto gap-2">
            <Link href="#">
              <span>Read</span>
              <DirectionRespectedArrow size={20} className="transition-transform group-hover:translate-s-2" />
            </Link>
          </Button>
        </CardFooter>
      </article>
    </Card>
  );
}
