import { Skeleton } from "@/components/shared/Skeleton";

export default function BlogHeroSkeleton() {
  return (
    <section className="relative mb-8">
      <Skeleton className="absolute inset-0 size-full" />
      <div className="absolute inset-0 size-full bg-gradient-to-t from-background from-25% to-background/20" />
      <div className="relative mx-auto max-w-2xl pt-64">
        <div className="mb-8 space-y-2">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-40" />
        </div>
        <div className="mb-4 flex items-center justify-between gap-16">
          <div className="grid grid-cols-[auto_1fr] items-center gap-x-2 whitespace-nowrap">
            <Skeleton className="row-span-2 size-10 rounded-full" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-12" />
            <Skeleton className="h-6 w-12" />
          </div>
        </div>
        <Skeleton className="h-4 w-28" />
      </div>
    </section>
  );
}
