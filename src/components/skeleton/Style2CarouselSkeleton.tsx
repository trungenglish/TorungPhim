import { Skeleton } from "@/components/ui/skeleton";

const HERO_HEIGHT = 460;
const THUMB_COUNT = 12;

const Style2CarouselSkeleton = () => {
  return (
    <section className="relative max-w-[1900px] w-full mx-auto my-0 max-[1919px]:px-5 max-[1919px]:py-0 animate-fade-in-up">
      {/* Header (mimics CarouselHeader type=2) */}
      <div className="flex items-center justify-between gap-4 mb-[1.2rem]">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-8 w-64 max-[991px]:w-40" />
        </div>
      </div>

      {/* Main carousel area */}
      <div
        className="relative rounded-[1.2rem] overflow-hidden bg-[#202331]"
        style={{ minHeight: HERO_HEIGHT }}
      >
        {/* Background plane similar to bgImage */}
        <div className="absolute inset-0">
          <Skeleton className="w-full h-full rounded-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#191b24] via-[#191b24cc] to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0c0f1c] to-transparent opacity-60" />
        </div>

        <div className="relative z-[2] flex flex-col xl:flex-row">
          <div className="w-full xl:max-w-[620px] p-8 space-y-6">
            {/* Title + subtitle */}
            <div className="space-y-3">
              <Skeleton className="h-10 w-4/5 max-[767px]:w-full" />
              <Skeleton className="h-5 w-1/2 max-[767px]:w-3/4" />
            </div>

            {/* Info chips row */}
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Skeleton key={`chip-${idx}`} className="h-6 w-24 rounded-full" />
              ))}
            </div>

            {/* Genre tags */}
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Skeleton key={`genre-${idx}`} className="h-4 w-24" />
              ))}
            </div>

            {/* Description */}
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Skeleton key={`desc-${idx}`} className="h-4 w-5/6 max-[767px]:w-full" />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Skeleton className="h-11 w-36 rounded-full" />
              <Skeleton className="h-11 w-32 rounded-full" />
            </div>
          </div>

          {/* Spacer mimicking empty area for bg image */}
          <div className="flex-1 min-h-[320px]" />
        </div>
      </div>

      {/* Thumbnails strip */}
      <div className="relative flex  z-[3] max-[1599px]:-mt-[50px] max-[1599px]:mx-auto max-[1599px]:mb-0 max-w-[1200px] w-[calc(100%-32px)]">
        {Array.from({ length: THUMB_COUNT }).map((_, idx) => (
          <Skeleton
            key={`thumb-${idx}`}
            className="w-[78px] h-[117px] rounded-lg flex-shrink-0 max-[1023px]:w-[60px] max-[1023px]:h-[90px] mr-5"
          />
        ))}
      </div>
    </section>
  );
};

export default Style2CarouselSkeleton;

