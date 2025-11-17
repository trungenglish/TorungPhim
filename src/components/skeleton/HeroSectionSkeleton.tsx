import { Skeleton } from "@/components/ui/skeleton";

const HERO_HEIGHT = 760;
const THUMB_COUNT = 6;

export const HeroSectionSkeleton = () => (
  <section className="relative">
    <Skeleton className="w-full -mb-[120px] rounded-none" style={{ height: HERO_HEIGHT }} />
    <div className="!absolute max-[1599px]:right-[30px] max-[1599px]:bottom-[172px] w-[450px] flex gap-2">
      {Array.from({ length: THUMB_COUNT }).map((_, idx) => (
        <Skeleton key={idx} className="h-[45px] w-full rounded-lg" />
      ))}
    </div>
  </section>
);