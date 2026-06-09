import { Skeleton } from "@/components/ui/skeleton";

const MovieCardHorizontalSkeleton = () => {
    return (
        <div className="relative w-full">
            <Skeleton className="relative block w-full h-0 pb-[56%] rounded-lg" />
            
            <div className="relative px-4 py-3 flex flex-col gap-2">
                <Skeleton className="h-5 w-3/4" />   
                <Skeleton className="h-4 w-1/2" />  
            </div>
        </div>
    )
}

export default MovieCardHorizontalSkeleton;