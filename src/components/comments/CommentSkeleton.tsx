import { Skeleton } from "@/components/shared/Skeleton";

export default function CommentSkeleton() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <Skeleton className="h-4 w-64" />
        <Skeleton className="size-6" />
      </div>
      <div className="mb-2 space-y-2">
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-3/12" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-4 w-8" />
        <Skeleton className="h-4 w-8" />
      </div>
    </div>
  );
}
