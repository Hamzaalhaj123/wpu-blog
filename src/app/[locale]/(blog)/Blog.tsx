"use client";

import { BlogProps } from "@/app/[locale]/(blog)/mock/blogs";
import Button from "@/app/shared/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/shared/ui/Dialog";
import DirectionRespectedArrow from "@/app/shared/ui/DirectionRespectedArrow";
import { Link } from "@/lib/next-intl/navigation";
import { ShareIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Blog({
  user,
  title,
  image,
  description,
  createdAt,
  rating,
  readingTime,
}: BlogProps) {
  const [open, setOpen] = useState(false);
  return (
    <article className="relative flex flex-col overflow-hidden rounded-xl bg-background-lighter">
      <Link href={"#"}>
        <Image src={image} alt={title} width={600} height={400} />
      </Link>
      <Dialog param={title}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            shape="circle"
            colour="transparent"
            className="absolute start-4 top-4"
          >
            <ShareIcon size={16} />
          </Button>
        </DialogTrigger>
        <DialogContent
          header={
            <DialogHeader>
              <DialogTitle>Title</DialogTitle>
              <DialogDescription>Description</DialogDescription>
            </DialogHeader>
          }
          footer={<DialogFooter>Footer</DialogFooter>}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          enim tempora praesentium veritatis asperiores in aut, voluptas laborum
          nobis officiis magni repudiandae reiciendis dolor ex nostrum maiores
          ullam? Error, voluptates.
        </DialogContent>
      </Dialog>
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
