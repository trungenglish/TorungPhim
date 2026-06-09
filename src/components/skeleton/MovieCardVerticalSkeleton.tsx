import { Skeleton } from "@/components/ui/skeleton";

const MovieCardVerticalSkeleton = () => {
    return (
        <div className="relative w-full flex flex-col gap-3">
            <Skeleton className="relative block w-full h-0 pb-[150%] rounded-lg" />
            <div className="relative px-4 py-3 flex flex-col gap-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
            </div>
        </div>
    )
}

export default MovieCardVerticalSkeleton;