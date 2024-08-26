import { Skeleton } from "@/app/shared/ui/Skeleton";

export default function BlogSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl bg-background-lighter">
      <Skeleton className="h-60 w-full" />

      <div className="flex flex-1 flex-col p-4">
        <Skeleton className="mb-3 h-4" />
        <Skeleton className="mb-3 h-4 w-1/3" />
        {/* <div className="flex gap-2">
          <StarIcon /> <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>  TODO: Add star rating */}

        <Skeleton className="mb-3 mt-4 h-2" />
        <Skeleton className="mb-3 h-2" />
        <Skeleton className="mb-3 h-2 w-3/4" />

        <div className="mt-auto flex justify-between pt-3 text-lg">
          <Skeleton className="mb-3 h-2 w-16" />
          <Skeleton className="mb-3 h-2 w-8" />
        </div>
        <div className="flex items-center gap-2 pt-2">
          <Skeleton className="size-10 rounded-full" />

          <div>
            <Skeleton className="mb-3 h-2 w-16" />
            <Skeleton className="h-2 w-16" />
          </div>

          <Skeleton className="ms-auto h-3/4 w-16" />
        </div>
      </div>
    </div>
  );
}
