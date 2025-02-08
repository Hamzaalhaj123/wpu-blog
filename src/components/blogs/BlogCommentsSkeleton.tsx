import CommentSkeleton from "@/components/comments/CommentSkeleton";
import { Skeleton } from "@/components/shared/Skeleton";

export default function BlogCommentsSkeleton() {
  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-5 w-8 rounded-full" />
      </div>
      <div className="mb-4 rounded-md border border-border bg-popover p-4 shadow-md">
        <Skeleton className="mb-4 h-20 w-full" />
        <Skeleton className="ms-auto h-7 w-16" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CommentSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
