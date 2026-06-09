import { Skeleton } from "@/components/ui/skeleton";

const Top10MovieCardSkeleton = () => {
  return (
    <div className="relative w-full flex flex-col gap-3">
      {/* Poster placeholder */}
      <Skeleton className="relative block w-full h-0 pb-[150%] rounded-lg" />

      <div className="relative flex flex-col gap-[0.4rem] pl-[66px] text-left min-h-[42px]">
        {/* Ranking number placeholder */}
        <Skeleton className="absolute top-0 left-0 w-[50px] h-[60px] rounded-md" />

        {/* Title */}
        <Skeleton className="h-5 w-3/4" />

        {/* Subtitle */}
        <Skeleton className="h-4 w-1/2" />

        {/* Meta chips */}
        <div className="flex items-center gap-3 pt-2">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>
    </div>
  )
}

export default Top10MovieCardSkeleton;